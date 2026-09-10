/* Registry of Security+ SY0-701 domains.
   Each domain's `bank` id must match a key registered by a file in
   questions/<bank>.js via window.QUESTION_BANKS.
   A domain with no bank loaded yet renders as a disabled "Not loaded yet" card,
   so new domains only need their questions/<bank>.js file plus a <script> tag
   in index.html -- no changes to this file beyond flipping nothing at all. */

window.DOMAINS = [
  {
    id: "domain1",
    num: "1.0",
    name: "General Security Concepts",
    blurb: "Security controls, CIA, AAA, zero trust, change management, cryptography",
    bank: "domain1"
  },
  {
    id: "domain2",
    num: "2.0",
    name: "Threats, Vulnerabilities, and Mitigations",
    blurb: "Threat actors, attack vectors, vulnerability types, mitigation techniques",
    bank: "domain2"
  },
  {
    id: "domain3",
    num: "3.0",
    name: "Security Architecture",
    blurb: "Architecture models, secure infrastructure, data protection, resilience",
    bank: "domain3"
  },
  {
    id: "domain4",
    num: "4.0",
    name: "Security Operations",
    blurb: "Hardening, monitoring, incident response, identity management, automation",
    bank: "domain4"
  },
  {
    id: "domain5",
    num: "5.0",
    name: "Security Program Management and Oversight",
    blurb: "Governance, risk management, third-party risk, compliance, audits",
    bank: "domain5"
  }
];
