#!/usr/bin/env python3
"""Generate the favicon and home-screen icons from one shared design.

Usage (from the QUIZ folder):
    python tools/make_icons.py

Writes icons/icon-32.png, icons/icon-192.png, icons/icon-512.png,
icons/icon-512-maskable.png and icons/apple-touch-icon.png.
icons/favicon.svg is hand-written and is the reference for these shapes.

Why hand-rolled
---------------
The machine has no PIL, cairosvg, rsvg or ImageMagick, and this repo's whole
point is that it runs with no build step and no dependencies. A few hundred
lines of scanline fill keeps that true: stdlib only (zlib, struct), re-runnable
by anyone who clones it, and no binary blob checked in that nobody can rebuild.

The design
----------
A gold shield on navy with a navy tick cut out of it, matching --navy #1b2a3d
and --gold #d9a441 from style.css. Chosen because it survives being 16 pixels
wide in a browser tab: one bold silhouette, one notch, no text. "SEC+" was
tried and is unreadable below about 32px.

Two shapes of icon, deliberately:

- **Rounded square** for the favicon and the Android "any" icons, because those
  are shown as-is and a bare square looks unfinished next to other tabs.
- **Full-bleed square** for apple-touch-icon and the Android maskable icon,
  because iOS and Android apply their own mask. Rounding it first gets you
  corners clipped twice, and a visible dark rim. The shield is also drawn
  smaller in those, to stay inside the safe zone a circular mask leaves.
"""
import struct
import zlib
from pathlib import Path

QUIZ_DIR = Path(__file__).resolve().parent.parent
ICON_DIR = QUIZ_DIR / "icons"

NAVY = (0x1B, 0x2A, 0x3D)
GOLD = (0xD9, 0xA4, 0x41)

SS = 4  # supersample factor per axis; 4 gives clean edges at 32px

# --- geometry, in a 64x64 design space to match icons/favicon.svg ----------
# Shield: flat top, straight sides to two-thirds down, then curving to a point.
SHIELD_TOP_L = (14.0, 9.0)
SHIELD_TOP_R = (50.0, 9.0)
SHIELD_R_STRAIGHT = (50.0, 31.0)
SHIELD_TIP = (32.0, 55.0)
SHIELD_L_STRAIGHT = (14.0, 31.0)
# Cubic control points for the two swept sides.
SHIELD_R_C1, SHIELD_R_C2 = (50.0, 42.0), (41.0, 49.0)
SHIELD_L_C1, SHIELD_L_C2 = (23.0, 49.0), (14.0, 42.0)

TICK = [(23.0, 32.0), (29.0, 39.0), (41.0, 24.0)]
TICK_WIDTH = 5.5


def cubic(p0, c1, c2, p3, steps=24):
    """Sample a cubic bezier, excluding p0 so segments can be concatenated."""
    out = []
    for i in range(1, steps + 1):
        t = i / steps
        u = 1 - t
        x = (u ** 3 * p0[0] + 3 * u * u * t * c1[0] +
             3 * u * t * t * c2[0] + t ** 3 * p3[0])
        y = (u ** 3 * p0[1] + 3 * u * u * t * c1[1] +
             3 * u * t * t * c2[1] + t ** 3 * p3[1])
        out.append((x, y))
    return out


def shield_polygon():
    pts = [SHIELD_TOP_L, SHIELD_TOP_R, SHIELD_R_STRAIGHT]
    pts += cubic(SHIELD_R_STRAIGHT, SHIELD_R_C1, SHIELD_R_C2, SHIELD_TIP)
    pts += cubic(SHIELD_TIP, SHIELD_L_C1, SHIELD_L_C2, SHIELD_L_STRAIGHT)
    return pts


def stroke_polygon(points, width):
    """Turn a polyline into a filled outline, mitred at the joins.

    Good enough for a two-segment tick: the joint is mitred rather than
    rounded, which at icon sizes is indistinguishable, and the caps are
    extended by half the width so the ends do not look clipped.
    """
    half = width / 2.0

    def norm(a, b):
        dx, dy = b[0] - a[0], b[1] - a[1]
        length = (dx * dx + dy * dy) ** 0.5 or 1.0
        return dx / length, dy / length

    # Extend both ends so the stroke reads as a full mark, not a cut one.
    pts = list(points)
    dx, dy = norm(pts[0], pts[1])
    pts[0] = (pts[0][0] - dx * half, pts[0][1] - dy * half)
    dx, dy = norm(pts[-2], pts[-1])
    pts[-1] = (pts[-1][0] + dx * half, pts[-1][1] + dy * half)

    def offset_side(sign):
        side = []
        for i in range(len(pts) - 1):
            dxs, dys = norm(pts[i], pts[i + 1])
            nx, ny = -dys * half * sign, dxs * half * sign
            side.append((pts[i][0] + nx, pts[i][1] + ny))
            side.append((pts[i + 1][0] + nx, pts[i + 1][1] + ny))
        return side

    return offset_side(1) + list(reversed(offset_side(-1)))


def rounded_rect_polygon(size, radius, steps=12):
    """Rounded square as a polygon, so one fill routine covers every shape."""
    s, r = float(size), float(radius)
    pts = []
    corners = [
        (r, r, 180, 270),
        (s - r, r, 270, 360),
        (s - r, s - r, 0, 90),
        (r, s - r, 90, 180),
    ]
    import math
    for cx, cy, a0, a1 in corners:
        for i in range(steps + 1):
            a = math.radians(a0 + (a1 - a0) * i / steps)
            pts.append((cx + r * math.cos(a), cy + r * math.sin(a)))
    return pts


def fill_mask(size, polygon, design=64.0):
    """Scanline-fill a polygon into an 8-bit coverage mask, antialiased.

    Even-odd rule. Supersampled vertically and horizontally, then boxed down,
    which is why the edges come out smooth without any filtering pass.
    """
    w = size * SS
    scale = w / design
    pts = [(x * scale, y * scale) for x, y in polygon]
    edges = []
    for i in range(len(pts)):
        x0, y0 = pts[i]
        x1, y1 = pts[(i + 1) % len(pts)]
        if y0 != y1:
            edges.append((x0, y0, x1, y1))

    rows = [bytearray(w) for _ in range(w)]
    for y in range(w):
        yc = y + 0.5
        xs = []
        for x0, y0, x1, y1 in edges:
            if (y0 <= yc < y1) or (y1 <= yc < y0):
                xs.append(x0 + (yc - y0) / (y1 - y0) * (x1 - x0))
        if not xs:
            continue
        xs.sort()
        row = rows[y]
        for i in range(0, len(xs) - 1, 2):
            a = max(0, int(xs[i] + 0.5))
            b = min(w, int(xs[i + 1] + 0.5))
            if b > a:
                row[a:b] = b"\x01" * (b - a)

    # Box-filter down: the count of covered subpixels becomes the alpha.
    out = bytearray(size * size)
    per = SS * SS
    for oy in range(size):
        base = oy * size
        block = rows[oy * SS:(oy + 1) * SS]
        for ox in range(size):
            x0 = ox * SS
            total = 0
            for r in block:
                total += sum(r[x0:x0 + SS])
            out[base + ox] = total * 255 // per
    return out


def over(dst, src_rgb, alpha):
    """Composite one flat colour over dst (premultiplied-free, straight alpha)."""
    if alpha == 0:
        return dst
    if alpha == 255:
        return (src_rgb[0], src_rgb[1], src_rgb[2], 255)
    a = alpha / 255.0
    dr, dg, db, da = dst
    out_a = a + (da / 255.0) * (1 - a)
    if out_a == 0:
        return (0, 0, 0, 0)
    def ch(s, d):
        return int(round((s * a + d * (da / 255.0) * (1 - a)) / out_a))
    return (ch(src_rgb[0], dr), ch(src_rgb[1], dg), ch(src_rgb[2], db),
            int(round(out_a * 255)))


def write_png(path, size, pixels):
    raw = bytearray()
    for y in range(size):
        raw.append(0)  # filter type 0
        raw += pixels[y * size * 4:(y + 1) * size * 4]
    def chunk(tag, data):
        c = struct.pack(">I", len(data)) + tag + data
        return c + struct.pack(">I", zlib.crc32(tag + data) & 0xFFFFFFFF)
    png = b"\x89PNG\r\n\x1a\n"
    png += chunk(b"IHDR", struct.pack(">IIBBBBB", size, size, 8, 6, 0, 0, 0))
    png += chunk(b"IDAT", zlib.compress(bytes(raw), 9))
    png += chunk(b"IEND", b"")
    path.write_bytes(png)


def scale_about_centre(polygon, factor, centre=(32.0, 32.0)):
    cx, cy = centre
    return [(cx + (x - cx) * factor, cy + (y - cy) * factor) for x, y in polygon]


def render(size, rounded, shield_scale):
    """One icon: background, shield, tick."""
    if rounded:
        bg_poly = rounded_rect_polygon(64, 12)
    else:
        bg_poly = [(0, 0), (64, 0), (64, 64), (0, 64)]
    bg = fill_mask(size, bg_poly)
    shield = fill_mask(size, scale_about_centre(shield_polygon(), shield_scale))
    tick = fill_mask(size, scale_about_centre(
        stroke_polygon(TICK, TICK_WIDTH), shield_scale))

    px = bytearray(size * size * 4)
    for i in range(size * size):
        c = (0, 0, 0, 0)
        c = over(c, NAVY, bg[i])
        c = over(c, GOLD, shield[i])
        c = over(c, NAVY, tick[i])
        px[i * 4:i * 4 + 4] = bytes(c)
    return px


def main():
    ICON_DIR.mkdir(exist_ok=True)
    # (filename, pixel size, rounded corners, shield scale)
    # The masked icons draw the shield smaller so a circular mask cannot clip
    # its point or its shoulders.
    jobs = [
        ("icon-32.png", 32, True, 1.0),
        ("icon-192.png", 192, True, 1.0),
        ("icon-512.png", 512, True, 1.0),
        ("icon-512-maskable.png", 512, False, 0.74),
        ("apple-touch-icon.png", 180, False, 0.80),
    ]
    for name, size, rounded, shield_scale in jobs:
        px = render(size, rounded, shield_scale)
        write_png(ICON_DIR / name, size, px)
        kb = (ICON_DIR / name).stat().st_size / 1024
        print(f"  wrote icons/{name}  {size}x{size}  {kb:.1f} KB")


if __name__ == "__main__":
    main()
