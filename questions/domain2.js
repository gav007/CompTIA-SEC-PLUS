/* CompTIA Security+ SY0-701 -- Domain 2.0
   185 review questions extracted from:
     9781394211388-Chapter-2-Domain-2-0--Threats--Vulnerabilities--and-Mitigations.epub
   Correct answers + explanations from:
     9781394211388-Appendix-Answers-to-Review-Questions.epub
   Regenerate with: python tools/extract_domain.py 2
   Question order matches the book; `correct` is a 0-based index into
   `answers` (the app shuffles answer order at runtime, so never rely
   on A/B/C/D here). */

window.QUESTION_BANKS = window.QUESTION_BANKS || {};
window.QUESTION_BANKS["domain2"] = [
  {
    "id": "SEC-D2-001",
    "domain": "2.0",
    "question": "Brent's organization is profiling threat actors that may target their infrastructure and systems. Which of the following is most likely a motivation for a nation-state actor?",
    "answers": [
      "Financial gain",
      "Blackmail",
      "Espionage"
    ],
    "correct": 2,
    "explanation": "Nation-state actors are typically advanced persistent threats (APTs) and their motivations commonly include espionage, data exfiltration, disruption/chaos, and war. Financial gain is more commonly associated with organized crime, blackmail with insider threats, and ethical with hacktivists."
  },
  {
    "id": "SEC-D2-002",
    "domain": "2.0",
    "question": "Ahmed is a sales manager with a major insurance company. He has received an email that is encouraging him to click on a link and fill out a survey. He is suspicious of the email, but it does mention a major insurance association, and that makes him think it might be legitimate. Which of the following best describes this attack?",
    "answers": [
      "Phishing",
      "Social engineering",
      "Spear phishing",
      "Trojan horse"
    ],
    "correct": 2,
    "explanation": "Spear phishing is targeted to a specific group, in this case insurance professionals. Although this is a form of phishing, the more specific answer is the one you will need to choose on questions like this. Phishing uses social engineering techniques to succeed but is once again a broader answer than spear phishing and thus is not the correct choice. Finally, a Trojan horse pretends to be a legitimate or desirable program or file, which this scenario doesn't describe."
  },
  {
    "id": "SEC-D2-003",
    "domain": "2.0",
    "question": "You are a security administrator for a medium-sized bank. You have discovered a piece of software on your bank's database server that is not supposed to be there. It appears that the software will begin deleting database files if a specific employee is terminated. What best describes this?",
    "answers": [
      "Worm",
      "Logic bomb",
      "Trojan horse",
      "Rootkit"
    ],
    "correct": 1,
    "explanation": "A logic bomb is malware that performs its malicious activity when some condition is met. A worm is malware that self-propagates. A Trojan horse is malware attached to a legitimate program, and a rootkit is malware that gets root or administrative privileges."
  },
  {
    "id": "SEC-D2-004",
    "domain": "2.0",
    "question": "The company that Yarif works for uses a third-party IT support company to manage their cloud-hosted web application infrastructure. How can Yarif best address concerns about potential threat vectors via the managed service provider (MSP)?",
    "answers": [
      "Conduct regular vulnerability scans.",
      "Use shared incident response exercises to prepare.",
      "Ensure appropriate contractual coverage for issues.",
      "Require the MSP to have an annual pentest."
    ],
    "correct": 2,
    "explanation": "Using appropriate contractual terms is usually the best available option for handling third-party vendor risk. The terms can include things like security practices, such as pentesting, incident response exercises, and vulnerability scanning, and can also have sufficient penalties to ensure ongoing compliance from responsible companies."
  },
  {
    "id": "SEC-D2-005",
    "domain": "2.0",
    "question": "Jill's organization has received an advisory about a flaw that could allow software running on a virtual machine to execute code on the system that is running the VM hypervisor. What type of vulnerability is this?",
    "answers": [
      "A resource reuse issue",
      "A VM escape issue",
      "A jailbreaking issue",
      "A sideloading issue"
    ],
    "correct": 1,
    "explanation": "This is an example of a virtual machine (VM) escape vulnerability. Jailbreaking and sideloading are terms used to describe mobile device-related means of violating security, and resource reuse is a VM concern if data is not properly removed before a resource is given to another VM."
  },
  {
    "id": "SEC-D2-006",
    "domain": "2.0",
    "question": "Helen is concerned about ransomware attacks against workstations that she is responsible for. Which of the following hardening options is best suited to protecting her organization from ransomware?",
    "answers": [
      "Installing host-based firewalls",
      "Installing endpoint protection software",
      "Installing a host-based IPS software",
      "Removing unnecessary software"
    ],
    "correct": 1,
    "explanation": "Endpoint protection software like an endpoint detection and response (EDR) or extended detection and response (XDR) tool will provide the greatest protection against ransomware. Firewalls and intrusion prevention systems (IPSs) are less likely to prevent ransomware from being installed, and removing unnecessary software may reduce the attack surface but most ransomware is installed via attacks that leverage users."
  },
  {
    "id": "SEC-D2-007",
    "domain": "2.0",
    "question": "The company that Gary works for has deployed a wireless network. Which of the following network options is the most secure?",
    "answers": [
      "WPA-2 Personal",
      "WPA-3",
      "WPA-2 Enterprise",
      "WPA-4"
    ],
    "correct": 1,
    "explanation": "Wi-Fi Protected Access 3 (WPA-3) is the most modern, most secure option from the list. WPA-4 does not currently exist as of this writing. WPA-2 Enterprise requires an authentication server and is less secure than WPA-3, while WPA-2 Personal allows for a single, set password."
  },
  {
    "id": "SEC-D2-008",
    "domain": "2.0",
    "question": "What type of attack depends on the attacker entering JavaScript into a text area that is intended for users to enter text that will be viewed by other users?",
    "answers": [
      "SQL injection",
      "Clickjacking",
      "Cross-site scripting",
      "Bluejacking"
    ],
    "correct": 2,
    "explanation": "Cross-site scripting (XSS) involves entering a script into text areas that other users will view. SQL injection (SQLi) is not about entering scripts but rather SQL commands. Clickjacking is about tricking users into clicking on the wrong thing. Bluejacking is a Bluetooth attack."
  },
  {
    "id": "SEC-D2-009",
    "domain": "2.0",
    "question": "Unusual outbound network traffic, geographical irregularities, and increases in database read volumes are all examples of what key element of threat intelligence?",
    "answers": [
      "Predictive analysis",
      "OSINT",
      "Indicators of compromise",
      "Threat maps"
    ],
    "correct": 2,
    "explanation": "There are many indicators of compromise (IoCs), including unusual outbound network traffic, geographical irregularities like logins from a country where the person normally does not work, or increases in database read volumes beyond normal traffic patterns. Predictive analysis is analysis work done using datasets to attempt to determine trends and likely attack vectors so that analysts can focus their efforts where they will be most needed and effective. OSINT is open source intelligence, and threat maps are often real-time or near-real-time visualizations of where threats are coming from and where they are headed."
  },
  {
    "id": "SEC-D2-010",
    "domain": "2.0",
    "question": "Julie wants to conduct a replay attack. What type of attack is most commonly associated with successful replay attacks?",
    "answers": [
      "SQL injection",
      "An on-path attack",
      "Brute force",
      "A DDoS"
    ],
    "correct": 1,
    "explanation": "On-path attacks that route traffic through a system or device that the attacker controls allow the attacker to both receive and modify traffic, making replay attacks more likely to succeed. SQL injection attacks are associated with web applications and databases. Brute-force and distributed denial-of-service (DDoS) attacks are not typically associated with replay attacks."
  },
  {
    "id": "SEC-D2-011",
    "domain": "2.0",
    "question": "Valerie is investigating a recent incident and checks /var/log on a Linux system. She finds the audit.log file empty despite the system uptime showing over a month of uptime. What has she most likely encountered?",
    "answers": [
      "A wiped log",
      "A recent reboot",
      "A system error",
      "Incorrect permissions to view the log"
    ],
    "correct": 0,
    "explanation": "Since Valerie is investigating an incident, she should immediately consider the potential that the logs were wiped. That likely means that the intruder has gained privileged access to the system, which should worry her even more! Reboots do not wipe audit.log, and Valerie should have permissions appropriate to perform her function. System errors could explain an empty audit.log, but are unlikely, and an empty log found during an investigation is a cause for concern."
  },
  {
    "id": "SEC-D2-012",
    "domain": "2.0",
    "question": "Jack purchases ads on a site that staff members of his target organization frequently visit in preparation for a penetration test. Once his ads start to display, he replaces the underlying code with attack code that redirects visitors to a login page that matches the organization's own internal website. What type of attack has Jack attempted?",
    "answers": [
      "A misinformation attack",
      "A watering hole attack",
      "A disinformation attack",
      "A business website compromise attack"
    ],
    "correct": 1,
    "explanation": "Jack has attempted a watering hole attack that leverages a frequently visited site to target a specific group of people. In this case, he is targeting his penetration testing target's users. Misinformation and disinformation are used to change opinions or to provide false information, and while business email compromise attacks are part of the Security+ exam outline, business website compromise attacks are not."
  },
  {
    "id": "SEC-D2-013",
    "domain": "2.0",
    "question": "Which of the following is not a common concern related to the hardware vendor supply chain?",
    "answers": [
      "Malware preinstalled on hardware",
      "Lack of availability of hardware",
      "Third-party hardware modifications",
      "Malicious firmware modifications"
    ],
    "correct": 2,
    "explanation": "While malware, modified firmware, and lack of availability are common concerns with the hardware supply chain, hardware modifications remain relatively uncommon."
  },
  {
    "id": "SEC-D2-014",
    "domain": "2.0",
    "question": "Ben wants to conduct a credential replay attack. What should he do first to enable the attack?",
    "answers": [
      "Create a phishing email.",
      "Conduct an on-path attack.",
      "Use a brute-force password attack.",
      "Conduct an injection attack."
    ],
    "correct": 1,
    "explanation": "On-path attacks are used to capture, then replay valid credentials for attackers to use. Session tokens are used to counter this type of attack in some cases. Phishing email and brute-force password attacks can help obtain credentials but do not involve credential replay. Injection attacks are typically conducted against database servers."
  },
  {
    "id": "SEC-D2-015",
    "domain": "2.0",
    "question": "Nick is assessing internal threat actors and considering what motivations are likely to drive them. Which of the following is the most likely motivation for an internal threat actor?",
    "answers": [
      "Espionage",
      "Blackmail",
      "War",
      "Political beliefs"
    ],
    "correct": 1,
    "explanation": "Common motivations for internal threat actors include blackmail, financial gain, and ethical reasons. Nation-state threats are more likely to be interested in espionage and war, and hacktivists in political beliefs."
  },
  {
    "id": "SEC-D2-016",
    "domain": "2.0",
    "question": "Yasmine is reviewing the software installed on a client's computer and notices that multiple browser toolbars, weather applications, and social media applications were preinstalled. What term is most commonly used to describe this software?",
    "answers": [
      "MSPs",
      "Bloatware",
      "Ransomware",
      "Rootware"
    ],
    "correct": 1,
    "explanation": "These are all common examples of bloatware, unwanted but typically not harmful software installed by manufacturers and as part of the installation processes for desired applications. MSPs are managed service providers, ransomware is malware that attempts to hold files for ransom, and rootware was made up for this question."
  },
  {
    "id": "SEC-D2-017",
    "domain": "2.0",
    "question": "Ilya is reviewing logs and notices that one of his staff has logged in from his home location in China at 2 p.m., and then logged in from the United Kingdom an hour later. What indicator of compromise should he flag this as?",
    "answers": [
      "Concurrent session usage",
      "Resource inaccessibility",
      "Impossible travel",
      "Segmentation"
    ],
    "correct": 2,
    "explanation": "Impossible travel describes scenarios where logins or other actions occur from separate physical locations that are too far apart to travel between before the action occurs. Here it is impossible to travel from China to the UK in an hour, and Ilya may need to check in with the employee since no VPN usage was described. It is possible the employee's account is compromised or some other questionable activity is occurring."
  },
  {
    "id": "SEC-D2-018",
    "domain": "2.0",
    "question": "Adam's organization has deployed RFID badges as part of their access control system. Adam is required to enter a 6-digit PIN when he uses his RFID badge and dislikes the additional step. What type of attack is the PIN intended to stop?",
    "answers": [
      "Piggybacking",
      "On-path",
      "Concurrent access",
      "Badge cloning"
    ],
    "correct": 3,
    "explanation": "Radio frequency identification (RFID) badges can be cloned, but adding an additional factor like a PIN means the badge alone is not sufficient to gain access. Piggybacking involves following an authorized user through a security door or gate. On-path attacks inject an attacker into the middle of a transaction or network connection, allowing them to view and potentially modify traffic. Concurrent session usage or access is an indicator of compromise (IoC) that focuses on multiple systems or users using the same credentials."
  },
  {
    "id": "SEC-D2-019",
    "domain": "2.0",
    "question": "Jen recently received an email that appeared to be from one of her vendors asking for a change in the method of payment to another account. She normally works with mike_smith@example.com, but noticed that the email was from mike_smith@examp1e.com on further review. What type of social engineering attack is this?",
    "answers": [
      "Vishing",
      "Business email compromise",
      "Smishing",
      "Pretexting"
    ],
    "correct": 1,
    "explanation": "Business email compromise (BEC) scams appear to come from legitimate sources and make requests that may seem reasonable like a payment change to a different wire transfer method. Vishing is done via voice, smishing via SMS, and pretexting uses excuses or reasons that the requested action must be taken."
  },
  {
    "id": "SEC-D2-020",
    "domain": "2.0",
    "question": "What is the primary concern for security professionals about legacy hardware?",
    "answers": [
      "Its likelihood of failure",
      "Lack of patches and updates",
      "Lack of vendor support",
      "Inability to support modern protocols"
    ],
    "correct": 1,
    "explanation": "The primary concern for security professionals around legacy hardware is their lack of patches and updates, meaning that security fixes and updates will not exist. While the hardware could fail, that would typically lead to replacement with more modern, supportable options and is a concern for the system administrators and owners. Lack of vendor support and inability to support modern protocols are primarily concerns for owners and system administrators."
  },
  {
    "id": "SEC-D2-021",
    "domain": "2.0",
    "question": "Coleen is the web security administrator for an online auction website. A small number of users are complaining that when they visit the website it does not appear to be the correct site. Coleen checks and she can visit the site without any problem, even from computers outside the network. She also checks the web server log and there is no record of those users ever connecting. Which of the following might best explain this?",
    "answers": [
      "Typo squatting",
      "SQL injection",
      "Cross-site scripting",
      "Cross-site request forgery"
    ],
    "correct": 0,
    "explanation": "From the description it appears that they are not connecting to the real web server but rather a fake server. That indicates typo squatting: having a URL that is named very similarly to a real site so that when users mistype the real site's URL they will go to the fake site."
  },
  {
    "id": "SEC-D2-022",
    "domain": "2.0",
    "question": "The organization that Mike works in finds that one of their domains is directing traffic to a competitor's website. When Mike checks, the domain information has been changed, including the contact and other administrative details for the domain. If the domain had not expired, what has most likely occurred?",
    "answers": [
      "DNS hijacking",
      "An on-path attack",
      "Domain hijacking",
      "A zero-day attack"
    ],
    "correct": 2,
    "explanation": "Domain hijacking, or domain theft, occurs when the registration or other information for the domain is changed without the original registrant's permission. This may occur because of a compromised account or due to a breach of the domain registrar's security. A common issue is a lapsed domain being purchased by a third party, and this can look like a hijacked domain, but it is a legitimate occurrence if the domain is not renewed! DNS hijacking inserts false information into a DNS server, on-path (man-in-the-middle) attacks capture or modify traffic by causing the traffic to pass through a compromised midpoint, and zero-day attacks are unknown to product vendors and, therefore, no patches are available to correct them."
  },
  {
    "id": "SEC-D2-023",
    "domain": "2.0",
    "question": "Lucia's organization has adopted open source software provided by a third-party vendor as part of their web application. What concern should she express about her software supply chain?",
    "answers": [
      "Lack of vendor support",
      "Lack of code auditability",
      "Lack of control over open source dependencies",
      "Lack of updates"
    ],
    "correct": 2,
    "explanation": "Open source software dependencies are a primary challenge when considering open source supply chain concerns. In this case, Lucia is using a third-party vendor who can provide support, open source code is auditable, and updates are likely to occur with a vendor involved."
  },
  {
    "id": "SEC-D2-024",
    "domain": "2.0",
    "question": "Alice wants to prevent server-side request forgery (SSRF) attacks. Which of the following will not be helpful for preventing them?",
    "answers": [
      "Removing all SQL code from submitted HTTP queries",
      "Blocking hostnames like 127.0.01 and localhost",
      "Blocking sensitive URLs like /admin",
      "Applying allow list-based input filters"
    ],
    "correct": 0,
    "explanation": "Server-side request forgery (SSRF) attempts typically attempt to get HTTP data passed through and will not include SQL injection. Blocking sensitive hostnames, IP addresses, and URLs are all valid ways to prevent SSRF, as is the use of allow list-based input filters."
  },
  {
    "id": "SEC-D2-025",
    "domain": "2.0",
    "question": "Tracy wants to protect desktop and laptop systems in her organization from network attacks. She wants to deploy a tool that can actively stop attacks based on signatures, heuristics, and anomalies. What type of tool should she deploy?",
    "answers": [
      "A firewall",
      "Antimalware",
      "HIDS",
      "HIPS"
    ],
    "correct": 3,
    "explanation": "A host-based intrusion prevention system (HIPS) can monitor, identify, and stop network traffic that displays network traffic to identify attacks, suspicious behavior, and known bad patterns using signatures. A firewall stops traffic based on rules; antimalware tools are specifically designed to stop malware, not attacks and suspicious network behavior; and a host-based intrusion detection system (HIDS) can only detect, not stop, these behaviors."
  },
  {
    "id": "SEC-D2-026",
    "domain": "2.0",
    "question": "Mahmoud is responsible for managing security at a large university. He has just performed a threat analysis for the network, and based on past incidents and studies of similar networks, he has determined that the most prevalent threat to his network are attackers who wish to breach the system, simply to prove they can or for some low-level crime, such as changing a grade. Which term best describes this type of attacker?",
    "answers": [
      "Hacktivist",
      "Nation-state",
      "Insider",
      "Unskilled attacker"
    ],
    "correct": 3,
    "explanation": "Unskilled attackers, often called script kiddies, tend to use premade tools in unsophisticated ways. Hacktivists take action based on political motivation, insiders operate from inside of an organization, and nation-state actors are typically highly capable and well resourced."
  },
  {
    "id": "SEC-D2-027",
    "domain": "2.0",
    "question": "How is phishing different from general spam?",
    "answers": [
      "It is sent only to specific targeted individuals.",
      "It is intended to acquire credentials or other data.",
      "It is sent via SMS.",
      "It includes malware in the message."
    ],
    "correct": 1,
    "explanation": "Phishing is intended to acquire data, most often credentials or other information that will be useful to the attacker. Spam is a broader term for unwanted email, although the term is often generally used to describe unwanted communications. Spear phishing targets specific individuals, whereas whaling targets higher-ups such as CEOs in an organization. Smishing is sent via SMS (text message). Malware can be sent in any of these instances, but there is not a specific related term that means \"spam with malware in it.\""
  },
  {
    "id": "SEC-D2-028",
    "domain": "2.0",
    "question": "Selah includes a question in her procurement request-for-proposal process that asks how long the vendor has been in business and how many existing clients the vendor has. What common issue is this practice intended to help prevent?",
    "answers": [
      "Supply chain security issues",
      "Lack of vendor support",
      "Outsourced code development issues",
      "System integration problems"
    ],
    "correct": 1,
    "explanation": "Systems and software that no longer have vendor support can be a significant security risk, and ensuring that a vendor will continue to exist and provide support is an important part of many procurement processes. Selah's questions are intended to assess the longevity and viability of the company and whether buying from them will result in her organization having a usable product for the long term."
  },
  {
    "id": "SEC-D2-029",
    "domain": "2.0",
    "question": "Frank is a network administrator for a small college. He discovers that several machines on his network are infected with malware. That malware is sending a flood of packets to a target external to the network. What best describes this attack?",
    "answers": [
      "SYN flood",
      "DDoS",
      "Botnet",
      "Backdoor"
    ],
    "correct": 1,
    "explanation": "His machines are part of a distributed denial-of-service (DDoS) attack. This scenario describes a generic DDoS, not a specific one like SYN flood, which would involve many SYN packets being sent without a full three-way TCP handshake. These machines could be part of a botnet or they may just have a trigger that causes them to launch the attack at a specific time. The real key in this scenario is the DDoS attack. Finally, a backdoor gives an attacker access to the target system."
  },
  {
    "id": "SEC-D2-030",
    "domain": "2.0",
    "question": "A sales manager at your company is complaining about slow performance on his computer. When you thoroughly investigate the issue, you find spyware on his computer. He insists that the only thing he has downloaded recently was a freeware stock trading application. What would best explain this situation?",
    "answers": [
      "Logic bomb",
      "Trojan",
      "Rootkit",
      "Macro virus"
    ],
    "correct": 1,
    "explanation": "A Trojan attaches a malicious program to a legitimate program. When the user downloads and installs the legitimate program, they get the malware. A logic bomb is malware that does its misdeeds when some condition is met. A rootkit is malware that gets administrative, or root, access. A macro virus is a virus that is embedded in a document as a macro."
  },
  {
    "id": "SEC-D2-031",
    "domain": "2.0",
    "question": "What threat actor is most likely to be motivated by political beliefs?",
    "answers": [
      "Hacktivists",
      "Organized crime",
      "Unskilled attackers",
      "Insider threats"
    ],
    "correct": 0,
    "explanation": "Hacktivists are defined by their political motivation. Organized crime is most frequently associated with financial gain as a motivation. While unskilled attackers and insider threats may have political motivations, hacktivists remain the most likely of this list."
  },
  {
    "id": "SEC-D2-032",
    "domain": "2.0",
    "question": "What type of threat actors are most likely to have a profit motive for their malicious activities?",
    "answers": [
      "State actors",
      "Hacktivists",
      "Unskilled attackers",
      "Organized crime"
    ],
    "correct": 3,
    "explanation": "Organized crime may produce, sell, and support malware tools, or may deploy them themselves. Crypto malware and other packages are examples of tools often created and used by criminal syndicates. State actors are more likely to be associated with advanced persistent threats (APTs) aimed at accomplishing goals of the nation-state that supports them. Hacktivists typically have political motivations, whereas unskilled attackers (script kiddies) may simply be in it for recognition or fun."
  },
  {
    "id": "SEC-D2-033",
    "domain": "2.0",
    "question": "You have noticed that when in a crowded area, you sometimes get a stream of unwanted text messages. The messages end when you leave the area. What describes this attack?",
    "answers": [
      "Bluejacking",
      "Bluesnarfing",
      "Evil twin",
      "Rogue access point"
    ],
    "correct": 0,
    "explanation": "Bluejacking involves sending unsolicited messages to Bluetooth devices when they are in range. Bluesnarfing involves getting data from the Bluetooth device. An evil twin attack uses a rogue access point whose name is similar or identical to that of a legitimate access point."
  },
  {
    "id": "SEC-D2-034",
    "domain": "2.0",
    "question": "Dennis uses an on-path attack to cause a system to send traffic to his system and then forwards it to the actual server the traffic is intended for. What information will be visible from his system as it passed through it?",
    "answers": [
      "All traffic meant for remote systems",
      "All traffic meant for local systems",
      "Only unencrypted traffic",
      "Only unencrypted traffic meant for his system"
    ],
    "correct": 0,
    "explanation": "An on-path attack redirects all traffic through an attacker's system that would normally pass through a network gateway. Dennis will be able to see all traffic bound for remote systems, but some of it may be encrypted."
  },
  {
    "id": "SEC-D2-035",
    "domain": "2.0",
    "question": "Andrea recently received a phone call claiming to be from her bank. The caller asked for information including her account number and Social Security number to validate her identity. What type of social engineering attack was Andrea the target of?",
    "answers": [
      "Smishing",
      "Brand impersonation",
      "A watering hole attack",
      "A business email compromise attack"
    ],
    "correct": 1,
    "explanation": "When malicious actors claim to represent a company or organization to accomplish their goals, it is an example of a brand impersonation attack. Here, this is a combination of a vishing attack and a brand impersonation attack. Smishing occurs via SMS, watering hole attacks target sites that their intended victims commonly visit, and business email compromise attempts to gain access to or leverages email accounts."
  },
  {
    "id": "SEC-D2-036",
    "domain": "2.0",
    "question": "Jake's vulnerability scanner reports that the software his organization is running is vulnerable to a cryptographic downgrade attack. What concern should Jake have about this potential issue?",
    "answers": [
      "Attackers may be able to force use of a weaker encryption algorithm, making data easier to access.",
      "Attackers may be able to force use of weaker hashing, making it easier to recover passwords.",
      "Attackers may be able to force use of older versions of the software, including previously patched vulnerabilities.",
      "Attackers may be able to force encryption to be turned off, causing information to be sent in plain text."
    ],
    "correct": 0,
    "explanation": "Cryptographic downgrade attacks like POODLE, FREAK, and Logjam all rely on flaws that cause software to use weaker encryption options. This could allow attackers to capture traffic encrypted with weaker encryption, potentially allowing them to decrypt the traffic and read it. They do not allow hashing changes to recover passwords, reversion to old versions of software, or encryption to be entirely turned off."
  },
  {
    "id": "SEC-D2-037",
    "domain": "2.0",
    "question": "Rick has three major categories of data and applications in use in his virtualization environment: highly sensitive; business sensitive; and unclassified, or public information. He wants to ensure that data and applications of different sensitivity are not compromised in the event of a breach. What mitigation technique is best suited to this type of requirement?",
    "answers": [
      "Application allow lists",
      "Monitoring",
      "Least privilege",
      "Segmentation"
    ],
    "correct": 3,
    "explanation": "Segmentation can be used to separate systems and applications of different sensitivity levels. A breach of one segmented group should not automatically mean that the other groupings are in immediate danger. Application allow lists control what applications can be installed but do not introduce separation between systems and applications. Monitoring would allow visibility but does not meet the goal Rick has. Least privilege is an effective practice to ensure only the rights required are in place, but again this does not meet the goal."
  },
  {
    "id": "SEC-D2-038",
    "domain": "2.0",
    "question": "Users in your company report someone has been calling their extension and claiming to be doing a survey for a large vendor. Based on the questions asked in the survey, you suspect that this is a scam to elicit information from your company's employees. What best describes this?",
    "answers": [
      "Spear phishing",
      "Vishing",
      "War dialing",
      "Robocalling"
    ],
    "correct": 1,
    "explanation": "This is vishing, or using voice calls for phishing. Spear phishing is targeting a small, specific group. War dialing is dialing numbers hoping a computer modem answers. Robocalling is used to place unsolicited telemarketing calls."
  },
  {
    "id": "SEC-D2-039",
    "domain": "2.0",
    "question": "As part of a zero-trust environment, Quentin is given rights that he needs only when he needs them through a checkout process and they are then removed when he is done. What mitigation technique best describes this solution?",
    "answers": [
      "Segmentation",
      "Isolation",
      "Least privilege",
      "Configuration enforcement"
    ],
    "correct": 2,
    "explanation": "This is an example of a least privilege implementation where only the privileges required are issued. The checkout process is a modern addition to least privilege environments where even privileges needed are only issued temporarily, making least privilege even more secure. Segmentation and isolation are used to separate systems or environments, and configuration enforcement is used to ensure that configurations continue to be set as expected."
  },
  {
    "id": "SEC-D2-040",
    "domain": "2.0",
    "question": "While performing a scan for wireless networks, Lisa discovers a network that does not use WPA-2 or WPA-3. What network traffic information can she recover from devices using this network?",
    "answers": [
      "All network traffic",
      "Network packet headers, but not packet data",
      "Network packet data, but not headers",
      "DNS and DHCP queries, but not network packet data"
    ],
    "correct": 0,
    "explanation": "An insecure, unencrypted, unprotected wireless network will have all of its traffic exposed. If the network is not using WPA-2 or WPA-3, it is trivial to observe network traffic even if an old protocol like WEP was in use."
  },
  {
    "id": "SEC-D2-041",
    "domain": "2.0",
    "question": "Jared is responsible for network security at his company. He has discovered behavior on one computer that certainly appears to be a virus. He has even identified a file he thinks might be the virus. However, using three separate antivirus programs, he finds that none can detect the file. Which of the following is most likely to be occurring?",
    "answers": [
      "The computer has a RAT.",
      "The computer has a zero-day exploit.",
      "The computer has a worm.",
      "The computer has a rootkit."
    ],
    "correct": 1,
    "explanation": "Zero-day exploits are new, and they are not in the virus definitions for the antivirus (AV) programs. This makes them difficult to detect, except by their behavior. Remote-access Trojans (RATs), worms, and rootkits are more likely to be detected by AV programs."
  },
  {
    "id": "SEC-D2-042",
    "domain": "2.0",
    "question": "John has discovered that an attacker is trying to get network passwords by using software that attempts a series of passwords with a minor change each time the password is tried. What type of attack is this?",
    "answers": [
      "Dictionary",
      "Rainbow table",
      "Brute force",
      "Session hijacking"
    ],
    "correct": 2,
    "explanation": "Brute force tries every possible combination with small changes each time. Dictionary attacks use a list of words that are believed to be likely passwords. A rainbow table is a precomputed table of hashes. Session hijacking is when the attacker takes over an authenticated session."
  },
  {
    "id": "SEC-D2-043",
    "domain": "2.0",
    "question": "Farès is the network security administrator for a company that creates advanced routers and switches. He has discovered that his company's networks have been subjected to a series of advanced attacks by an attacker sponsored by a government over a period of time. What best describes this attack?",
    "answers": [
      "DDoS",
      "Brute force",
      "Nation-state",
      "Disassociation attack"
    ],
    "correct": 2,
    "explanation": "A nation-state advanced persistent threat (APT) involves sophisticated (i.e., advanced) attacks over a period of time (i.e., persistent). A distributed denial-of-service (DDoS) could be a part of an APT, but in and of itself is unlikely to be an APT. Brute force attempts every possible random combination to get the password or encryption key. In a disassociation attack, the attacker attempts to force the victim into disassociating from a resource."
  },
  {
    "id": "SEC-D2-044",
    "domain": "2.0",
    "question": "What type of information is phishing not commonly intended to acquire?",
    "answers": [
      "Passwords",
      "Email addresses",
      "Credit card numbers",
      "Personal information"
    ],
    "correct": 1,
    "explanation": "Phishing is not commonly used to acquire email addresses. Phishing emails target personal information and sensitive information like passwords and credit card numbers in most cases."
  },
  {
    "id": "SEC-D2-045",
    "domain": "2.0",
    "question": "Scott discovers that malware has been installed on one of the systems he is responsible for. Shortly afterward passwords used by the user that the system is assigned to are discovered to be in use by attackers. What type of malicious program should Scott look for on the compromised system?",
    "answers": [
      "A rootkit",
      "A keylogger",
      "A worm",
      "None of the above"
    ],
    "correct": 1,
    "explanation": "A keylogger is a software or hardware tool used to capture keystrokes. Keyloggers are often used by attackers to capture credentials and other sensitive information. A rootkit is used to obtain and maintain administrative rights on a system, and a worm is a self-spreading form of malware that frequently targets vulnerable services on a network to spread."
  },
  {
    "id": "SEC-D2-046",
    "domain": "2.0",
    "question": "Nick purchases his network devices through a gray market supplier that imports them into his region without an official relationship with the network device manufacturer. What risk should Nick identify when he assesses his supply chain risk?",
    "answers": [
      "Lack of vendor support",
      "Lack of warranty coverage",
      "Inability to validate the source of the devices",
      "All of the above"
    ],
    "correct": 3,
    "explanation": "Acquisition via the gray market can lead to lack of vendor support, lack of warranty coverage, and the inability to validate where the devices came from. Nick should express concerns about the supply chain, and if his devices need to be from a trusted source or supplier with real support he may need to change his organization's acquisition practices."
  },
  {
    "id": "SEC-D2-047",
    "domain": "2.0",
    "question": "Naomi is preparing a laptop for a traveling salesperson who frequently needs to connect to untrusted hotel networks. What hardening technique can she use to provide the greatest protection against network-based attacks on untrusted networks?",
    "answers": [
      "Install an endpoint detection and response tool.",
      "Install a host-based firewall.",
      "Install an extended detection and response tool.",
      "Install a disk encryption tool."
    ],
    "correct": 1,
    "explanation": "A host-based firewall is an excellent first line of defense for systems that will be deployed to untrusted networks. EDR and XDR are useful for preventing malicious software installs like ransomware, but they do not directly protect against network-based attacks, and disk encryption is a confidentiality control, not a useful tool to prevent network-based attacks."
  },
  {
    "id": "SEC-D2-048",
    "domain": "2.0",
    "question": "While conducting a vulnerability scan of her network, Susan discovers that a marketing staff member has set up their own server running a specialized marketing tool. After inquiring about the server, which is vulnerable due to missing patches, Susan discovers that the team set it up themselves because of a need that was not met by existing tools. What type of threat actor has Susan encountered?",
    "answers": [
      "An unskilled attacker",
      "An insider threat",
      "Shadow IT",
      "A hacktivist"
    ],
    "correct": 2,
    "explanation": "The marketing team has created a shadow IT solution--a solution put in place without central or formal IT support, typically done without IT's assistance or awareness. This creates a risk to the organization due to lack of support and may bring additional risks like licensing and compliance risks. The team did not intend to create an issue and is not actively working against the organization, meaning that they are not unskilled attackers, insider threats, or hacktivists."
  },
  {
    "id": "SEC-D2-049",
    "domain": "2.0",
    "question": "Which of the following indicators is most commonly associated with a denial-of-service attack?",
    "answers": [
      "Resource inaccessibility",
      "Impossible travel",
      "Missing logs",
      "Blocked content"
    ],
    "correct": 0,
    "explanation": "Resource inaccessibility is a common symptom of a denial-of-service attack. Impossible travel is typically found in log events through correlation. Missing logs are frequently indicators of compromised accounts deleting logs, and blocked content is most likely due to reputation service usage."
  },
  {
    "id": "SEC-D2-050",
    "domain": "2.0",
    "question": "Henry wants to decommission a server that was used to store sensitive data. What step should he take to ensure the decommissioning process protects the organization's data?",
    "answers": [
      "Reformat the drives as part of the decommissioning process.",
      "Physically destroy the drives as part of the decommissioning process.",
      "Remove the system from organizational inventory as part of the decommissioning process.",
      "Physically destroy the entire system as part of the decommissioning process."
    ],
    "correct": 1,
    "explanation": "Since the drives stored sensitive data and no mention of encryption was made, the drives should be physically destroyed to ensure that no data leakage can occur. It is not necessary to destroy the entire system to ensure this. Reformatting drives does not wipe data, and simply removing the system from inventory is typically part of the process but does not protect organizational data."
  },
  {
    "id": "SEC-D2-051",
    "domain": "2.0",
    "question": "Renee has a large number of workstations and servers in her corporate environment and wants to more effectively monitor logs for them. What solution from the following list is best suited to identifying and alerting on issues in a large-scale environment?",
    "answers": [
      "Centralized logging",
      "A SIEM",
      "An IPS",
      "An EDR"
    ],
    "correct": 1,
    "explanation": "A security information and event management tool (SIEM) is designed to ingest and analyze large volumes of logs and then alert on issues and events. Centralized logging is useful but needs additional tools to alert on issues. An IPS is used to detect and potentially respond to network-based attacks, not to gather and analyze logs, and EDR tools are useful for monitoring endpoints, not for large-scale log ingestion and analysis."
  },
  {
    "id": "SEC-D2-052",
    "domain": "2.0",
    "question": "Patrick is reviewing potential attack surfaces for his small business and recently deployed new networked printers for each of his three locations. What should his first action be to begin to properly secure their web management interfaces?",
    "answers": [
      "Update the firmware.",
      "Change their default IP address.",
      "Change the default administrator password.",
      "Disable unnecessary services."
    ],
    "correct": 2,
    "explanation": "Patrick knows that the first thing he should do is change the administrator password. Any further security changes, including updating firmware and disabling unnecessary services, can be made once the administrative account has been properly secured. Changing the default IP address does not necessarily improve security for the device."
  },
  {
    "id": "SEC-D2-053",
    "domain": "2.0",
    "question": "Paul has performed an nmap scan of a new network connected device. He notices TCP ports 22, 80, and 443 are open. If his hardening guidelines only allow encrypted management interfaces, what port or ports should he disable from this list?",
    "answers": [
      "22",
      "80",
      "22 and 80",
      "80 and 443"
    ],
    "correct": 1,
    "explanation": "Paul knows that SSH typically uses port 22, HTTP uses port 80, and HTTPS uses port 443. HTTP is the only unencrypted protocol from that list, and thus he should disable port 80."
  },
  {
    "id": "SEC-D2-055",
    "domain": "2.0",
    "question": "Which of the following protocols is most commonly associated with credential relaying attacks?",
    "answers": [
      "RDP",
      "NTLM",
      "SQL",
      "TLS"
    ],
    "correct": 1,
    "explanation": "While dated, NTLM was historically one of the most common targets of credential relay attacks. RDP, SQL, and TLS are less commonly associated with credential relay attacks. Modern protocols implement encryption, session, IDs, and one-time passwords to prevent this type of attack."
  },
  {
    "id": "SEC-D2-056",
    "domain": "2.0",
    "question": "After a recent laptop theft, Jaime's organization is worried about data breaches driven by lost devices. What endpoint hardening technique is best suited to preventing this?",
    "answers": [
      "Encryption",
      "Host-based IPS",
      "Disabling ports and protocols",
      "Changing default passwords"
    ],
    "correct": 0,
    "explanation": "Encryption is the appropriate solution to prevent data loss if a system is stolen. A HIPS, disabling ports and protocols, and changing default passwords will not prevent data acquisition from a drive."
  },
  {
    "id": "SEC-D2-057",
    "domain": "2.0",
    "question": "Derek wants to conduct a birthday attack against a digital signature. Which of the following best describes the process he would need to take to achieve his goal?",
    "answers": [
      "He needs to prepare both a correct and a malicious document and find ways to modify the correct document until its encryption matches the malicious document.",
      "He needs to make sure all dates match in both a correct and a malicious document.",
      "He needs to ensure that the file length and creation date match for both a correct document and a malicious document.",
      "He needs to prepare both a correct and a malicious document, then find ways to modify the malicious document until its hash matches the hash of the correct document."
    ],
    "correct": 3,
    "explanation": "Derek knows that attacking a digital signature requires that hashes match for both an original document and a malicious document. He will modify the malicious document until he finds a way to convey the changes he needs while retaining the matching hash. This type of attack is why hashing algorithms needs to be resistant to birthday attacks."
  },
  {
    "id": "SEC-D2-058",
    "domain": "2.0",
    "question": "Ashley's organization has recently come under attack and has suffered a DNS outage. As she investigated, she found that requests to her DNS servers were sent to open DNS resolvers using spoofed IP addresses with requests that would result in very large responses from the DNS resolvers to the IP addresses that appeared to be making the request. What type of attack targeted Ashley's organization?",
    "answers": [
      "A reflected DDoS",
      "A DNS flood",
      "A mirrored DDoS",
      "A supersized query attack"
    ],
    "correct": 0,
    "explanation": "Ashley's organization was the target of a reflected (and amplified) DDoS where attackers took advantage of DNS queries to make small amounts of spoofed traffic into very large amounts of data sent to her servers. DNS floods, mirrored DDoSs, and supersized query attacks were made up for this question."
  },
  {
    "id": "SEC-D2-059",
    "domain": "2.0",
    "question": "What term is used to describe the problem when two files have the same hash?",
    "answers": [
      "A birthday attack",
      "A collision",
      "A bingo",
      "A match-the-hash attack"
    ],
    "correct": 1,
    "explanation": "Collisions occur when two files have the same hash. Secure hashing solutions are collision resistant, meaning that collision-based hash attacks should be unlikely unless an insecure or outdated hash algorithm like MD5 is selected. Birthday attacks leverage the likelihood of collisions in a random set of attacks rather than by progressing linearly through the solution set. Bingo attacks and match-the-hash are both made up for this question."
  },
  {
    "id": "SEC-D2-060",
    "domain": "2.0",
    "question": "Kara wants to protect against the most common means of firmware-based exploits. Which of the following is not a common firmware defense mechanism for the vendors of devices that use firmware?",
    "answers": [
      "Using signed firmware updates",
      "Using input validation for user input",
      "Encrypting firmware",
      "Code review processes for firmware"
    ],
    "correct": 2,
    "explanation": "Firmware is typically not encrypted, but it is commonly digitally signed. Using input validation and code review both help to keep firmware secure."
  },
  {
    "id": "SEC-D2-061",
    "domain": "2.0",
    "question": "Annie's organization has been facing negative social media campaigns for months and is struggling to address them. Numerous bot posts about the company are providing incorrect information about the company. What type of attack is Annie's company facing?",
    "answers": [
      "A misinformation campaign",
      "A pretexting campaign",
      "An impersonation campaign",
      "A disinformation campaign"
    ],
    "correct": 3,
    "explanation": "Annie's company is facing a disinformation campaign. If users were simply getting facts wrong, this would be misinformation, but since bots are intentionally misstating information, it is disinformation. Pretexting would attempt to exploit human behaviors to explain why something needed to occur or why an attacker was asking for something. Impersonation occurs when an attacker pretends to be someone they are not."
  },
  {
    "id": "SEC-D2-062",
    "domain": "2.0",
    "question": "Ines is concerned about messaging through tools like Discord and Slack as attack vectors. What can she do to most effectively limit the attack surface for threats like this?",
    "answers": [
      "Deploy EDR tools to all workstations and devices.",
      "Deploy an organizational communication tool or instance instead of using public tools.",
      "Deploy messaging-aware firewalls.",
      "Deploy messaging-aware IPS systems."
    ],
    "correct": 1,
    "explanation": "In many cases, the best option to limit the attack surface of messaging applications is to use a trusted, internally managed organizational instance rather than public tools or instances. EDR, firewalls, and IPS are not as effective with messaging-based attacks."
  },
  {
    "id": "SEC-D2-063",
    "domain": "2.0",
    "question": "Ana's vendor has informed her that the hardware her organization uses is considered end-of-life. What should Ana do?",
    "answers": [
      "Identify replacement hardware and purchase it immediately.",
      "Purchase an extended support contract from a third-party vendor.",
      "Begin plans to phase out the equipment before it reaches end-of-support.",
      "Install final patches and then isolate the hardware from the network."
    ],
    "correct": 2,
    "explanation": "End-of-life announcements typically mean that the equipment is no longer being produced or sold. The equipment will typically have a longer supported life, so Ana can continue to use it but should plan for what to do when end-of-support occurs. At that time, replacing it, isolating it, or purchasing third-party support are all possible solutions depending on Ana's needs."
  },
  {
    "id": "SEC-D2-064",
    "domain": "2.0",
    "question": "What threat vector is most impacted by how Windows handles autorun.inf files?",
    "answers": [
      "Removable devices",
      "Open service ports",
      "Unsecure Wi-Fi",
      "Watering hole attacks"
    ],
    "correct": 0,
    "explanation": "Removable devices like USB thumb drives, digital picture frames, and even keyboards and mice with onboard storage rely on autorun.inf files to automatically run software they provide. While that functionality typically focuses on printing, opening folders, or running media players, it can also be leveraged to automatically run malware. For this reason, many organizations ban removable drives or prohibit autorun from working. Open service ports are commonly associated with applications and services, and autorun doesn't set up or run these, nor does it impact Wi-Fi. Watering hole attacks require attackers to compromise or gain access to a site that targets commonly visit so that they deliver malware to their targets."
  },
  {
    "id": "SEC-D2-065",
    "domain": "2.0",
    "question": "Raj wants to reduce the attack surface for a newly purchased laptop. What hardening technique will help him reduce the possibility of remote exploits while also decreasing the amount of ongoing patch management he needs to do for the system?",
    "answers": [
      "Encrypt the system's boot drive.",
      "Install EDR software.",
      "Remove unnecessary software.",
      "Change any default passwords."
    ],
    "correct": 2,
    "explanation": "Raj knows that removing unnecessary software reduces a system's attack surface and also means that he won't have to patch and maintain the software he removes. Encrypting a drive, installing EDR, and changing default passwords won't reduce patch management, but EDR and changing default passwords could help with remote exploit prevention."
  },
  {
    "id": "SEC-D2-066",
    "domain": "2.0",
    "question": "Mary has discovered that a web application used by her company does not always handle multithreading properly, particularly when multiple threads access the same variable. This could allow an attacker who discovered this vulnerability to exploit it and crash the server. What type of error has Mary discovered?",
    "answers": [
      "Buffer overflow",
      "Logic bomb",
      "Race conditions",
      "Improper error handling"
    ],
    "correct": 2,
    "explanation": "A race condition can occur when multiple threads in an application are using the same variable and the situation is not properly handled. A buffer overflow is attempting to put more data in a buffer than it is designed to hold. A logic bomb is malware that performs its misdeed when some logical condition is met. As the name suggests, improper error handling is the lack of adequate or appropriate error handling mechanisms within software."
  },
  {
    "id": "SEC-D2-067",
    "domain": "2.0",
    "question": "Allan wants to detect brute-force physical attacks. What should he do if he wants to detect the broadest range of physical attacks?",
    "answers": [
      "Deploy a monitored security camera system.",
      "Hire a guard to patrol the facility.",
      "Conduct regular inspections of the facility.",
      "Set up an alarm system."
    ],
    "correct": 0,
    "explanation": "A monitored camera system will detect the broadest range of attacks. Guards will only detect brute-force attacks when they are in the area, and cameras can cover more spaces at once. Inspections may miss attacks where camera recordings and monitoring can show failed and successful attacks. An alarm system won't detect attacks by insiders, who may access spaces they have access to in order to perform malicious actions."
  },
  {
    "id": "SEC-D2-068",
    "domain": "2.0",
    "question": "Which of the following is not a common threat vector associated with SMS-based attacks?",
    "answers": [
      "Malicious links",
      "SMS-based phishing",
      "SMS-delivered images",
      "MFA exploits"
    ],
    "correct": 2,
    "explanation": "Images are not a common threat vector via SMS. Malicious links, phishing via text, and multifactor authentication (MFA) exploits, including sending MFA notices until the recipient approves an MFA request, are all common SMS-related threat vectors."
  },
  {
    "id": "SEC-D2-069",
    "domain": "2.0",
    "question": "During a regular review of logs, Jennifer notices that a regularly scheduled script that copies files to another server every hour has run multiple times within the last hour. What indicator of compromise should she categorize this as?",
    "answers": [
      "Concurrent session use",
      "Out-of-cycle logging",
      "Missing logs",
      "Impossible travel"
    ],
    "correct": 1,
    "explanation": "Jennifer should note this as out-of-cycle logging. It could simply indicate a flaw in the script or another innocuous issue, or it could indicate an attacker exploring scripts to identify what information can be obtained. Concurrent session use occurs when a session is in use from multiple browsers or systems, missing logs are when logs are entirely missing or empty rather than occurring with more frequency than expected, and impossible travel occurs when events or logins occur from different locations by the same user who could not have traveled that distance in the time between the events."
  },
  {
    "id": "SEC-D2-070",
    "domain": "2.0",
    "question": "Pete uses a technique that injects code into memory used by another process to allow him to control what the host program does. What is this technique called for Windows dynamically linked libraries?",
    "answers": [
      "WinBuff attacks",
      "DLL injection",
      "A SYRINGE attack",
      "A memory traversal attack"
    ],
    "correct": 1,
    "explanation": "DLL injection forces a process to load and run code from a dynamically linked library (DLL) that was not originally used by the application or software. This can be used to modify behaviors of the program or to perform malicious actions through the application. WinBuff, SYRINGE, and memory traversal were all made up for this question."
  },
  {
    "id": "SEC-D2-071",
    "domain": "2.0",
    "question": "Kathleen wants to control network traffic between subnets using her Cisco network devices. What built-in capability can she use to allow or deny traffic based on port, protocol, and IP address?",
    "answers": [
      "A HIPS",
      "ACLs",
      "Least privilege lists",
      "VLANs"
    ],
    "correct": 1,
    "explanation": "Access control lists (ACLs) allow or deny traffic based on rules that include protocol, IP addresses, ports, and other details. They do not understand packet content and simply assess traffic based on these basic rules. A HIPS is a host-based intrusion prevention system and is not installed between subnets. Least privilege is a concept, not an application or security tool, and VLANs are used to segment traffic but do not themselves control traffic this way. Instead, VLANs are often combined with ACLs to control network traffic and ensure segmentation."
  },
  {
    "id": "SEC-D2-072",
    "domain": "2.0",
    "question": "What is the primary purpose of encryption as a control in enterprise environments?",
    "answers": [
      "To preserve availability",
      "To support physical security",
      "To preserve least privilege",
      "To preserve confidentiality"
    ],
    "correct": 3,
    "explanation": "Encryption is used to preserve confidentiality. Availability controls work to ensure that assets remain accessible and usable, and encryption can actually work against this in some circumstances, such as if a key is lost or the encrypted file becomes corrupted. Encryption is not used directly to preserve least privilege, nor does it preserve physical security."
  },
  {
    "id": "SEC-D2-073",
    "domain": "2.0",
    "question": "What type of attack exploits the trust that a website has for an authenticated user to attack that website by spoofing requests from the trusted user?",
    "answers": [
      "Cross-site scripting",
      "Cross-site request forgery",
      "Bluejacking",
      "Evil twin"
    ],
    "correct": 1,
    "explanation": "Cross-site request forgery (XSRF or CSRF) sends fake requests to a website that purport to be from a trusted, authenticated user. Cross-site scripting (XSS) exploits the trust the user has for the website and embeds scripts into that website. Bluejacking is a Bluetooth attack. Nothing in this scenario requires or describes an evil twin, which is an attack that uses a malicious access point that duplicates a legitimate AP."
  },
  {
    "id": "SEC-D2-074",
    "domain": "2.0",
    "question": "Dana wants to use documented and published IoCs as part of her threat-hunting activities. What should she look for to integrate with her SIEM or other security tools?",
    "answers": [
      "Threat feeds",
      "A real-time blackhole list",
      "A vulnerability feed",
      "An IP reputation feed"
    ],
    "correct": 0,
    "explanation": "Both commercial and private threat feeds can be used by security tools like SIEM, EDR, and XDR systems to provide them with current information about indicators of compromise. A real-time blackhole list (RBL) and an IP reputation feed are examples of specific threat feeds but are not as broad as threat feeds. Vulnerability definitions are typically integrated with vulnerability scanners, but again are a narrower option than a threat feed."
  },
  {
    "id": "SEC-D2-075",
    "domain": "2.0",
    "question": "The malware that Joseph is working to counter has copied itself to workstations across his environment due to a central, shared fileshare. What type of malware is Joseph most likely fighting?",
    "answers": [
      "A Trojan",
      "A virus",
      "A keylogger",
      "A rootkit"
    ],
    "correct": 1,
    "explanation": "Joseph is most likely fighting a virus, which is capable of copying itself to new locations. A Trojan is malware that is disguised to look like desirable software, a keylogger captures keystrokes, and a rootkit is intended to allow attackers to retain access to compromised systems."
  },
  {
    "id": "SEC-D2-076",
    "domain": "2.0",
    "question": "You are responsible for software testing at Acme Corporation. You want to check all software for bugs that might be used by an attacker to gain entrance into the software or your network. You have discovered a web application that would allow a user to attempt to put a 64-bit value into a 4-byte integer variable. What is this type of flaw?",
    "answers": [
      "Memory overflow",
      "Buffer overflow",
      "Variable overflow",
      "Integer overflow"
    ],
    "correct": 3,
    "explanation": "Placing a larger integer value into a smaller integer variable is an integer overflow. Memory overflow is not a term used, and memory leak is about allocating memory and not deallocating it. Buffer overflows often involve arrays. Variable overflow is not a term used in the industry."
  },
  {
    "id": "SEC-D2-077",
    "domain": "2.0",
    "question": "The company that Keith works for uses a backoff algorithm that increases the time between when login attempts are allowed after each failed login. Keith has recently attempted to log in and found that his account is not able to log in again for 15 minutes. What should the security administrators at Keith's organization do to find potential indicators of malicious activity?",
    "answers": [
      "Review authentication logs.",
      "Interview Keith about his recent logins.",
      "Change Keith's password and check error logs.",
      "Report an incident and start the incident response process."
    ],
    "correct": 0,
    "explanation": "Until more is known, the best route for security administrators is to review the authentication logs in order to gather more information that can indicate whether an issue or security event has occurred. While Keith didn't indicate that he had failed login attempts, it's possible another user mistyped a user ID or that something else happened. Interviewing Keith might help but would provide less information if something malicious or accidental is happening, and the interview process would delay that analysis. Changing his password isn't immediately necessary as failed logins increase the time, not successful logins. Without more information, starting the incident response (IR) process may not be appropriate. If it can be shown that an attack occurred and was successful, the IR process should be started."
  },
  {
    "id": "SEC-D2-078",
    "domain": "2.0",
    "question": "Grayson's organization is concerned about environmental attacks against their datacenter. What type of monitoring is best suited to detecting environmental attacks in a scenario like this?",
    "answers": [
      "Video cameras",
      "Intrusion alarm systems",
      "Temperature monitoring sensors",
      "Log analysis"
    ],
    "correct": 2,
    "explanation": "Environmental monitoring involves things like temperature, water or flood sensors, and other detection capabilities that help organizations know if a natural disaster or other environmental issue has occurred. Video cameras cannot detect many of these and are not typically deployed to places where they would detect things like under-floor leaks or floods. Intrusion alarm systems do not provide this type of detection, and log analysis would require environmental monitoring sensors."
  },
  {
    "id": "SEC-D2-079",
    "domain": "2.0",
    "question": "Jack's team in HR is paying for an SaaS tool using their HR expense account credit cards without the knowledge of central IT. What type of threat actor does this make Jack's HR team?",
    "answers": [
      "Shadow IT",
      "An inadvertent threat",
      "Internal espionage actors",
      "An insider threat"
    ],
    "correct": 0,
    "explanation": "Jack's team has created a shadow IT scenario by purchasing and using software without the awareness or engagement of central IT. They may be an inadvertent threat, but the term is not used to describe threat actors. They're not an intentional threat, and thus aren't an insider threat, and internal espionage actors is not a term used for the Security+ exam."
  },
  {
    "id": "SEC-D2-080",
    "domain": "2.0",
    "question": "Amanda is assessing the potential for issues with her organization's recently adopted IaaS vendor. What cloud vulnerability should she worry about if her system administrators do not effectively manage security groups in AWS?",
    "answers": [
      "Insecure APIs",
      "Misconfigurations",
      "Malicious insiders",
      "MFA-based attacks"
    ],
    "correct": 1,
    "explanation": "Security groups are used like firewall rules in Amazon Web Services (AWS), and since Amanda's system administrators are not effectively managing security groups, this is most likely to create a misconfiguration issue. Application programming interfaces (APIs) are provided by the vendor, and thus their security is typically a vendor issue or a misconfiguration issue. Malicious insiders are not mentioned, and security group misconfiguration does not drive multifactor authentication (MFA)-based attacks."
  },
  {
    "id": "SEC-D2-081",
    "domain": "2.0",
    "question": "Jared's organization runs Linux servers, and recent vulnerability scans show that the servers are vulnerable to an issue that is described as follows: What is Jared's best option to remediate a kernel vulnerability like this?",
    "answers": [
      "Patch the application.",
      "Install a HIPS with appropriate rules.",
      "Segment the systems away from the Internet to reduce risk.",
      "Patch the operating system."
    ],
    "correct": 3,
    "explanation": "The Linux kernel is part of the operating system and needs to be handled with an OS patch. There is no application to patch, installing a HIPS might help, but the issue is dated 2018, meaning that a patch likely exists. If there wasn't a patch and this was a new vulnerability, segmentation might be a useful immediate response to reduce risk.",
    "exhibit": "CVE-2018-5703: tcp_v6_syn_recv_sock function in net/ipv6/tcp_ipv6.c in\nthe Linux kernel through 4.14.11 allows attackers to cause a denial of\nservice (slab out-of-bounds write)"
  },
  {
    "id": "SEC-D2-082",
    "domain": "2.0",
    "question": "What is the likely outcome of a cryptographic collision attack?",
    "answers": [
      "Attackers can decrypt a file without the private key.",
      "Two files that have the same encrypted output but are different files.",
      "Two files that both have the same hash but have different contents.",
      "Attackers can decrypt the file without the public key."
    ],
    "correct": 2,
    "explanation": "Collision attacks target hashes and attempt to produce a file that results in the same hash algorithm output but with different content that they can control."
  },
  {
    "id": "SEC-D2-083",
    "domain": "2.0",
    "question": "Sarah is working with a small business and noticed that they have a consumer-grade wireless router serving their business. What common hardening checklist item should she validate first as part of securing the device?",
    "answers": [
      "Removing unnecessary software",
      "Running a vulnerability scan",
      "Ensuring the default password has been changed",
      "Ensuring that unneeded ports have been disabled"
    ],
    "correct": 2,
    "explanation": "The first step in securing a consumer-grade router is to change the default password. Once that has been completed, updating the firmware, turning off unneeded services, and running a vulnerability scan are all common steps. Routers typically do not have unnecessary software running."
  },
  {
    "id": "SEC-D2-084",
    "domain": "2.0",
    "question": "What technique most effectively prevents resource reuse concerns for storage in a virtual environment?",
    "answers": [
      "Firmware updates",
      "Volume encryption",
      "Minimizing cluster size",
      "Reformatting drives"
    ],
    "correct": 1,
    "explanation": "Ensuring that any volume that is used in a virtual environment is encrypted when created will prevent reuse concerns because data will be unrecoverable even if encrypted data was accessible when drive space was reallocated. Firmware updates, cluster sizes, and reformatting do not properly address this issue."
  },
  {
    "id": "SEC-D2-085",
    "domain": "2.0",
    "question": "Michelle is modeling threat actor motivation for her organization and wants to describe ransomware actors. What motivation is not commonly associated with ransomware?",
    "answers": [
      "Data exfiltration",
      "Blackmail",
      "Revenge",
      "Financial gain"
    ],
    "correct": 2,
    "explanation": "Data exfiltration, blackmail, and financial gain are all common motivations for ransomware actors. Revenge is not a common ransomware actor motivation."
  },
  {
    "id": "SEC-D2-086",
    "domain": "2.0",
    "question": "Which of the following is commonly used in a distributed denial-of-service (DDoS) attack?",
    "answers": [
      "Phishing",
      "Adware",
      "Botnet",
      "Trojan"
    ],
    "correct": 2,
    "explanation": "Botnets are often used to launch DDoS attacks, with the attack coming from all the computers in the botnet simultaneously. Phishing attacks attempt to get the user to give up information, click on a link, or open an attachment. Adware consists of unwanted pop-up ads. A Trojan horse attaches malware to a legitimate program."
  },
  {
    "id": "SEC-D2-087",
    "domain": "2.0",
    "question": "Amanda discovers that a member of her organization's staff has installed a remote-access Trojan on their accounting software server and has been accessing it remotely. What type of threat has she discovered?",
    "answers": [
      "Zero-day",
      "Insider threat",
      "Misconfiguration",
      "Weak encryption"
    ],
    "correct": 1,
    "explanation": "Amanda has discovered an insider threat. Insider threats can be difficult to discover, as a malicious administrator or other privileged user will often have the ability to conceal their actions or may actually be the person tasked with hunting for threats like this! This is not a zero-day attack--no vulnerability was mentioned, there was no misconfiguration since this was an intentional action, and encryption is not mentioned or discussed."
  },
  {
    "id": "SEC-D2-088",
    "domain": "2.0",
    "question": "Postings from Russian agents during the 2016 U.S. presidential campaign to Facebook and Twitter are an example of what type of effort?",
    "answers": [
      "Impersonation",
      "Disinformation",
      "Asymmetric warfare",
      "A watering hole attack"
    ],
    "correct": 1,
    "explanation": "Disinformation campaigns seek to achieve the goals of the attacker or owner of the campaign. They leverage social media using bots and groups of posters to support the ideas, concepts, or beliefs that align with the goals of the campaign. Impersonation is a type of social engineering attack where the attacker pretends to be someone else. A watering hole attack places malware or malicious code on a site or sites that are frequently visited by a targeted group. Asymmetric warfare is warfare between groups with significantly different power or capabilities."
  },
  {
    "id": "SEC-D2-089",
    "domain": "2.0",
    "question": "Which of the following threat actors is most likely to be associated with an advanced persistent threat (APT)?",
    "answers": [
      "Hacktivists",
      "Nation-state actors",
      "Unskilled attacker",
      "Insider threats"
    ],
    "correct": 1,
    "explanation": "Nation-state actors often have greater resources and skills, making them a more significant threat and far more likely to be associated with an advanced persistent threat actor. Unskilled attackers, also known as script kiddies, hacktivists, and insider threats, tend to be less capable and are all far less likely to be associated with an APT."
  },
  {
    "id": "SEC-D2-090",
    "domain": "2.0",
    "question": "Erica wants to conduct an amplified DDoS attack against a system. What key step is required as part of her attack?",
    "answers": [
      "Reversing the target's IP address",
      "Spoofing the target's IP address",
      "Conducting an on-path attack to send traffic to the target",
      "Spoofing responses from the amplification system to the target"
    ],
    "correct": 1,
    "explanation": "Amplification attacks typically use spoofed User Datagram Protocol (UDP) queries sent to servers to increase the volume of traffic sent in response to the target. Erica's process might involve identifying large DNS responses she can get with a small query, then spoofing a target system's IP address in the packets she sends to DNS servers. They would then respond with the large responses, amplifying her requests and creating a distributed denial-of-service attack by using many servers to amplify her traffic. This doesn't require reversing an IP address, conducting an on-path attack, or spoofing the responses from the servers."
  },
  {
    "id": "SEC-D2-091",
    "domain": "2.0",
    "question": "Daryl is investigating a recent breach of his company's web server. The attacker used sophisticated techniques and then defaced the website, leaving messages that were denouncing the company's public policies. He and his team are trying to determine the type of actor who most likely committed the breach. Based on the information provided, who was the most likely threat actor?",
    "answers": [
      "A script",
      "A nation-state",
      "Organized crime",
      "Hacktivists"
    ],
    "correct": 3,
    "explanation": "The fact that the website is defaced in a manner related to the company's public indicates that the attackers were most likely engaging in hacktivism to make a political or belief-based point. Scripts, nation-state actors, and organized crime actors don't account for the statements adverse to the company's policies, which is why hacktivism is the real cause."
  },
  {
    "id": "SEC-D2-092",
    "domain": "2.0",
    "question": "Which of the following human vectors are most likely to be part of a voice call-based attack?",
    "answers": [
      "A watering hole attack",
      "Pretexting",
      "Disinformation",
      "BEC"
    ],
    "correct": 1,
    "explanation": "Pretexting and impersonation are common elements in voice call-based attacks. Watering hole attacks leverage commonly visited websites, disinformation is when incorrect information is intentionally provided to change public opinion and could be part of a voice campaign but is not the most common element, and business email compromise (BEC) requires an email to be used, not a voice call."
  },
  {
    "id": "SEC-D2-093",
    "domain": "2.0",
    "question": "What is the primary difference in threat vectors between agent client-based and agentless software deployments?",
    "answers": [
      "Agentless software does not consume resources and thus cannot result in a resource consumption-based denial-of-service condition.",
      "Client-based software provides a better view of system resources and is able to manage its resource consumption better to avoid issues.",
      "Agentless software does not have an agent that may be potentially vulnerable to attack.",
      "Client-based software allows for greater security because it can be patched."
    ],
    "correct": 2,
    "explanation": "Agentless software does not have an agent installed that can be targeted. That means that the server or control system is the only target for attackers. Agentless software can still consume resources as queries and actions are taken by the server or control plane. Client-based software often has better insights into systems, and may offer additional security features if it is a security tool. Client-based software and agentless software can both be patched to address security issues."
  },
  {
    "id": "SEC-D2-094",
    "domain": "2.0",
    "question": "Angela reviews the authentication logs for her website and sees attempts from many different accounts using the same set of passwords. What is this attack technique called?",
    "answers": [
      "Brute forcing",
      "Password spraying",
      "Limited login attacks",
      "Account spinning"
    ],
    "correct": 1,
    "explanation": "Password spraying is a specific type of brute-force attack that uses a smaller list of common passwords for many accounts to attempt to log in. Although brute forcing is technically correct, the best match here is password spraying. When you encounter questions like this on the exam, make sure you provide the most accurate answer, rather than one that fits but that may not be the best answer. Limited login attacks is a made-up answer, and spinning an account refers to changing the password for an account, often because of a compromise or to prevent a user from logging back into it while preserving the account."
  },
  {
    "id": "SEC-D2-095",
    "domain": "2.0",
    "question": "Charles discovers that an attacker has used a vulnerability in a web application that his company runs and has then used that exploit to obtain root privileges on the web server. What type of attack has he discovered?",
    "answers": [
      "Cross-site scripting",
      "Privilege escalation",
      "A SQL injection",
      "A race condition"
    ],
    "correct": 1,
    "explanation": "A privilege escalation attack can occur horizontally, where attackers obtain similar levels of privilege but for other users, or vertically where they obtain more advanced rights. In this case, Charles has discovered a vertical privilege escalation attack that has allowed the attacker to obtain administrative rights. Cross-site scripting and SQL injection are both common types of web application attacks, and a race condition occurs when data can be changed between when it is checked and when it is used."
  },
  {
    "id": "SEC-D2-096",
    "domain": "2.0",
    "question": "Which of the following best describes a zero-day vulnerability?",
    "answers": [
      "A vulnerability that the vendor is not yet aware of",
      "A vulnerability that has not yet been breached",
      "A vulnerability that can be quickly exploited (i.e., in zero days)",
      "A vulnerability that will give the attacker brief access (i.e., zero days)"
    ],
    "correct": 0,
    "explanation": "A zero-day exploit or attack occurs before the vendor has knowledge of it. The remainder of the answers don't accurately describe a zero-day attack--just because it has not yet been breached does not make it a zero-day, nor is a zero-day necessarily quickly exploitable. Finally, a zero-day attack does not specify how long the attacker may have access."
  },
  {
    "id": "SEC-D2-097",
    "domain": "2.0",
    "question": "You have discovered that there are entries in your network's domain name server that point legitimate domains to unknown and potentially harmful IP addresses. What best describes this type of attack?",
    "answers": [
      "A backdoor",
      "An APT",
      "DNS poisoning",
      "A Trojan horse"
    ],
    "correct": 2,
    "explanation": "DNS poisoning occurs when false DNS information is inserted into legitimate DNS servers, resulting in traffic being redirected to unwanted or malicious sites. A backdoor provides access to the system by circumventing normal authentication. An APT is an advanced persistent threat. A Trojan horse ties a malicious program to a legitimate program."
  },
  {
    "id": "SEC-D2-098",
    "domain": "2.0",
    "question": "What technique drives image-based threat vectors?",
    "answers": [
      "Encryption",
      "Hashing",
      "Forgery",
      "Steganography"
    ],
    "correct": 3,
    "explanation": "Images can have data, including malware or exfiltrated organizational information using a technique called steganography that embeds data into images without losing the integrity of the image. Encryption, hashing, and forgery are not the direct driver of image-based threat vectors, although encryption is likely to be used as an additional layer to protect data from more advanced threat actors wishing to conceal what they are hiding."
  },
  {
    "id": "SEC-D2-099",
    "domain": "2.0",
    "question": "Eric is conducting a penetration test and wants to release a malicious update for an organization's application. The organization uses public key encryption to sign updates. What does Eric need to deliver an update that systems will accept?",
    "answers": [
      "The private key for the signing certificate",
      "A collision with the hashed value of a legitimate update",
      "The public key for the signing certificate",
      "A collision with the hashed value of a malicious update"
    ],
    "correct": 0,
    "explanation": "In order to deliver a malicious update that uses a signing certificate, Eric will need to gain access to the private key for the signing certificate. The public key is exactly that--public--and having it will not allow Eric to sign the update. Hashes and collisions are not needed for this type of exploit."
  },
  {
    "id": "SEC-D2-100",
    "domain": "2.0",
    "question": "Mike is a network administrator with a small financial services company. He has received a pop-up window that states his files are now encrypted and he must pay .5 bitcoins to get them decrypted. He tries to check the files in question, but their extensions have changed, and he cannot open them. What best describes this situation?",
    "answers": [
      "Mike's machine has a rootkit.",
      "Mike's machine has ransomware.",
      "Mike's machine has a logic bomb.",
      "Mike's machine has been the target of whaling."
    ],
    "correct": 1,
    "explanation": "This is an example of ransomware, which demands payment to return your data. A rootkit provides access to administrator/root privileges. A logic bomb executes its malicious activity when some condition is met. This scenario does not describe whaling, which is a type of phishing attack aimed at leaders in an organization."
  },
  {
    "id": "SEC-D2-101",
    "domain": "2.0",
    "question": "Your company is instituting a new security awareness program. You are responsible for educating end users on a variety of threats, including social engineering. Which of the following best defines social engineering?",
    "answers": [
      "Illegal copying of software",
      "Gathering information from discarded manuals and printouts",
      "Using people skills to obtain proprietary information",
      "Phishing emails"
    ],
    "correct": 2,
    "explanation": "Social engineering is about using people skills to get information you would not otherwise have access to. Illegal copying of software isn't social engineering, nor is gathering of discarded manuals and printouts, which describes dumpster diving. Phishing emails use some social engineering, but that is one example of social engineering, not a definition."
  },
  {
    "id": "SEC-D2-102",
    "domain": "2.0",
    "question": "What type of malicious actor will typically have the least amount of resources available to them?",
    "answers": [
      "Nation-states",
      "Unskilled actor",
      "Hacktivists",
      "Organized crime"
    ],
    "correct": 1,
    "explanation": "Unskilled actors are the least resourced of the common threat actors listed. In general, they flow from nation-state actors as the most highly resourced, to organized crime, to hacktivists, to inside actors, and then to unskilled actors, otherwise known as script kiddies, as the least capable and least resourced actors. As with any scale like this, there is room for some variability between specific actors, but for the exam, you should track them in that order."
  },
  {
    "id": "SEC-D2-103",
    "domain": "2.0",
    "question": "Jorge wants to brief his organization's leadership on common email threat vectors. Which of the following common threats should not be in his presentation?",
    "answers": [
      "Phishing",
      "Malware sent via email",
      "Email spoofing",
      "Cross-site scripting"
    ],
    "correct": 3,
    "explanation": "Common email threats include phishing, email spoofing, and malware sent via email. Cross-site scripting is done via trusted websites where scripts are injected into user-visible code, causing the user to run the scripts using their credentials."
  },
  {
    "id": "SEC-D2-104",
    "domain": "2.0",
    "question": "Jared has discovered malware on the workstations of several users. This particular malware provides administrative privileges for the workstation to an external hacker. What best describes this malware?",
    "answers": [
      "Trojan horse",
      "Logic bomb",
      "Multipartite virus",
      "Rootkit"
    ],
    "correct": 3,
    "explanation": "Rootkits provide administrative access to systems, thus the \"root\" in rootkit. A Trojan horse combines malware with a legitimate program. A logic bomb performs its malicious activity when some condition is met. A multipartite virus infects the boot sector and a file."
  },
  {
    "id": "SEC-D2-105",
    "domain": "2.0",
    "question": "Michelle discovers that a number of systems throughout her organization are connecting to a changing set of remote systems on TCP port 6667. What is the most likely cause of this, if she believes the traffic is not legitimate and that the systems are infected with malware?",
    "answers": [
      "An alternate service port for web traffic",
      "Botnet command-and-control via IRC",
      "Downloads via a peer-to-peer network",
      "Remote-access Trojans"
    ],
    "correct": 1,
    "explanation": "This question combines two pieces of knowledge: how botnet command-and-control works, and that IRC's default port is TCP 6667. Although this could be one of the other answers, the most likely answer given the information available is a botnet that uses Internet Relay Chat (IRC) as its command-and-control channel. 6667 is not a common alternate web traffic port, peer-to-peer network traffic is commonly done via HTTP or HTTPS in modern infections, and a remote access-Trojan is likely to behave differently and use another port as well."
  },
  {
    "id": "SEC-D2-106",
    "domain": "2.0",
    "question": "Susan performs a vulnerability scan of a small business network and discovers that the organization's consumer-grade wireless router has a vulnerability in its web server. What issue should she address in her findings?",
    "answers": [
      "Firmware patch management",
      "Default configuration issues",
      "An unsecured administrative account",
      "Weak encryption settings"
    ],
    "correct": 0,
    "explanation": "Software updates for consumer-grade wireless routers are typically applied as firmware updates, and Susan should recommend that the business owner regularly upgrade their wireless router firmware. If updates are not available, they may need to purchase a new router that will continue to receive updates and configure it appropriately. This is not a default configuration issue nor an unsecured administrative account--neither is mentioned, nor is encryption."
  },
  {
    "id": "SEC-D2-107",
    "domain": "2.0",
    "question": "What type of phishing attack occurs via text messages?",
    "answers": [
      "Bluejacking",
      "Smishing",
      "Phonejacking",
      "Text whaling"
    ],
    "correct": 1,
    "explanation": "The word you will need to know for the Security+ exam for phishing via SMS is \"smishing,\" a term that combines SMS and phishing. Bluejacking sends unsolicited messages to Bluetooth devices, and phonejacking and text whaling were made up for this question."
  },
  {
    "id": "SEC-D2-108",
    "domain": "2.0",
    "question": "John is analyzing a recent malware infection on his company network. He discovers malware that can spread rapidly via vulnerable network services and does not require any interaction from the user. What best describes this malware?",
    "answers": [
      "Worm",
      "Virus",
      "Logic bomb",
      "Trojan horse"
    ],
    "correct": 0,
    "explanation": "Worms spread themselves via vulnerabilities, making this an example of a worm. A virus is software that self-replicates. A logic bomb executes its malicious activity when some condition is met. A Trojan horse combines malware with a legitimate program."
  },
  {
    "id": "SEC-D2-109",
    "domain": "2.0",
    "question": "While reviewing web logs for her organization's website, Kathleen discovers the entry shown here: What type of attack has she potentially discovered?",
    "answers": [
      "A directory traversal attack",
      "A web application buffer overflow",
      "A directory recursion attack",
      "A slashdot attack"
    ],
    "correct": 0,
    "explanation": "Directory traversal attacks attempt to exploit tools that can read directories and files by moving through the directory structure. The example would try to read the config.txt file three layers above the working directory of the web application itself. Adding common directory names or common filenames can allow attackers (or penetration testers) to read other files in accessible directories if they are not properly secured. The remainder of the options were made up for this question, although Slashdot is an actual website.",
    "exhibit": "GET http://example.com/viewarticle.php?view=../../../config.txt HTTP/1.1"
  },
  {
    "id": "SEC-D2-110",
    "domain": "2.0",
    "question": "What two files are commonly attacked using offline brute-force attacks?",
    "answers": [
      "The Windows Registry and the Linux /etc/passwd file",
      "The Windows SAM and the Linux /etc/passwd file",
      "The Windows SAM and the Linux /etc/shadow file",
      "The Windows Registry and the Linux /etc/shadow file"
    ],
    "correct": 2,
    "explanation": "The Windows Security Account Manager (SAM) file and the /etc/shadow file for Linux systems both contain passwords and are popular targets for offline brute-force attacks."
  },
  {
    "id": "SEC-D2-111",
    "domain": "2.0",
    "question": "You have noticed that when in a crowded area, data from your cell phone is stolen. Later investigation shows a Bluetooth connection to your phone, one that you cannot explain. What describes this attack?",
    "answers": [
      "Bluejacking",
      "Bluesnarfing",
      "An evil twin attack",
      "A remote-access Trojan"
    ],
    "correct": 1,
    "explanation": "Bluesnarfing involves accessing data from a Bluetooth device when it is in range. Bluejacking involves sending unsolicited messages to Bluetooth devices when they are in range. Evil twin attacks use a rogue access point whose name is similar or identical to that of a legitimate access point. Nothing in this scenario points to a remote-access Trojan being the cause of the stolen data."
  },
  {
    "id": "SEC-D2-112",
    "domain": "2.0",
    "question": "Which of the following situations is not associated with race conditions?",
    "answers": [
      "Time-of-check",
      "Time-of-change",
      "Target-of-evaluation",
      "Time-of-use"
    ],
    "correct": 1,
    "explanation": "There are three common situations associated with race conditions: time-of-check (TOC), time-of-use (TOU), and target-of-evaluation. Time-of-change is not commonly associated with race conditions."
  },
  {
    "id": "SEC-D2-113",
    "domain": "2.0",
    "question": "Gabby wants to protect a legacy platform with known vulnerabilities. Which of the following is not a common isolation or segmentation option that could be used to address this issue?",
    "answers": [
      "Disconnect it from the network.",
      "Place the device behind a dedicated firewall and restrict inbound and outbound traffic.",
      "Rely on the outdated OS to confuse attackers.",
      "Move the device to a protected VLAN."
    ],
    "correct": 2,
    "explanation": "Relying on an outdated OS to confuse attackers is not a common isolation or segmentation option used to protect vulnerable legacy platforms. Many organizations have legacy platforms in place that cannot be patched or upgraded but that are still an important part of their business. Security professionals are often asked to suggest ways to secure the systems while leaving them operational. Common options include moving the devices to an isolated virtual LAN (VLAN), disconnecting the devices from the network and ensuring they are not plugged back in, and using a firewall or other security device to ensure that the legacy system is protected from attacks and cannot browse the Internet or perform other actions that could result in compromise."
  },
  {
    "id": "SEC-D2-114",
    "domain": "2.0",
    "question": "After running nmap against a system on a network, Lucca sees that TCP port 23 is open and a service is running on it. What issue and resolution should he identify?",
    "answers": [
      "Low ports should not be open to the Internet and should be disabled.",
      "Telnet is an insecure protocol and should be disabled.",
      "SSH is an insecure protocol and should be disabled.",
      "Ports 1-1024 are well-known ports and must be firewalled."
    ],
    "correct": 1,
    "explanation": "TCP port 23 is typically associated with Telnet, an unencrypted remote shell protocol. Since Telnet sends its authentication and other traffic in the clear (clear/plain text), it should not be used, and Lucca should identify this as a configuration issue involving an insecure protocol."
  },
  {
    "id": "SEC-D2-115",
    "domain": "2.0",
    "question": "Charles sets the permissions on the /etc directory on a Linux system to 777 using the chmod command. If Alex later discovers this, what should he report his finding as?",
    "answers": [
      "Open or weak permissions",
      "Improper file handling",
      "A privilege escalation attack",
      "None of the above"
    ],
    "correct": 0,
    "explanation": "Linux privileges can be set numerically, and 777 sets user, group, and world to all have read, write, and execute access to the entire /etc directory--a very insecure, and thus open or weak permission. Setting permissions like this is a common workaround when permissions aren't working but can expose data or make binaries executable by users who should not have access to them. When you set permissions for a system, remember to set them according to the rule of least privilege: only the permissions that are required for the role or task should be configured."
  },
  {
    "id": "SEC-D2-116",
    "domain": "2.0",
    "question": "Under what circumstances are concurrent sessions most commonly considered indicators of compromise?",
    "answers": [
      "When they occur on the same system",
      "When they occur on two different systems issued to the same user",
      "When they occur in two different locations at the same time",
      "When they occur in the same location at the same time"
    ],
    "correct": 2,
    "explanation": "Concurrent sessions can be relatively common in some applications, so additional data is important when assessing if the event is an IoC. If the event occurs in two different locations, particularly if travel between them would be classified as impossible travel it would more likely be an indicator of compromise or misuse."
  },
  {
    "id": "SEC-D2-117",
    "domain": "2.0",
    "question": "During a penetration test, Angela obtains the uniform of a well-known package delivery service and wears it into the target office. She claims to have a delivery for a C-level employee she knows is there and insists that the package must be signed for by that person. What social engineering technique has she used?",
    "answers": [
      "Impersonation",
      "Whaling",
      "A watering hole attack",
      "Prepending"
    ],
    "correct": 0,
    "explanation": "Angela has impersonated an actual employee of the delivery service to gain access to the company. Company uniforms are a very useful element for in-person social engineering. Whaling is a type of phishing attack aimed at leaders in an organization. A watering hole attack deploys malware or other attack tools at a site or sites that a target group frequently uses. Prepending is not a common security term."
  },
  {
    "id": "SEC-D2-118",
    "domain": "2.0",
    "question": "Frank's organization operates in a shared responsibility cloud environment. What can Frank do to determine if he is suffering from a denial-of-service (DoS) attack against his cloud hosting environment?",
    "answers": [
      "Nothing; cloud services do not provide security tools.",
      "Call the cloud service provider to have them stop the DoS attack.",
      "Review the cloud service provider's security tools and enable logging and anti-DoS tools if they exist.",
      "Call the cloud service provider's Internet service provider (ISP) and ask them to enable DoS prevention."
    ],
    "correct": 2,
    "explanation": "Frank's best option is to review the anti-denial-of-service and other security tools that his cloud hosting provider provides and to make appropriate use of them. The major infrastructure-as-a-service (IaaS) providers have a variety of security tools that can help both detect and prevent DoS attacks from taking down sites that are hosted in their infrastructure. Calling the cloud service provider's ISP will not work because the ISP works with the cloud provider, not with Frank! It is possible the cloud service provider might be able to assist Frank, but they are most likely to instruct him to use the existing tools that they already provide."
  },
  {
    "id": "SEC-D2-119",
    "domain": "2.0",
    "question": "What is the typical goal intent or goal of hacktivists?",
    "answers": [
      "Increasing their reputation",
      "Financial gain",
      "Making a political statement",
      "Gathering high-value data"
    ],
    "correct": 2,
    "explanation": "The most common motivation for hacktivists is to make a political statement. Reputational gains are often associated with unskilled attackers/script kiddies, whereas financial gain is most commonly a goal of organized crime or insider threats. Gathering high-value data is typical of both nation-state actors and organized crime."
  },
  {
    "id": "SEC-D2-120",
    "domain": "2.0",
    "question": "Ryan needs to verify that no unnecessary ports and services are available on his systems, but he cannot run a vulnerability scanner. What is his best option?",
    "answers": [
      "Passive network traffic capture to detect services",
      "A configuration review",
      "Active network traffic capture to detect services",
      "Log review"
    ],
    "correct": 1,
    "explanation": "Configuration reviews, either using automated tool or manual validation, can be a useful proactive way to ensure that unnecessary ports and services are not accessible. Configuration management tools can also help ensure that expected configurations are in place. Neither passive nor active network packet capture will show services that are not accessed, meaning that open ports could be missed, and log review won't show all open ports either."
  },
  {
    "id": "SEC-D2-121",
    "domain": "2.0",
    "question": "John is a network administrator for Acme Company. He has discovered that someone has registered a domain name that is spelled just one letter different than his company's domain. The website with the misspelled URL is a phishing site. What best describes this attack?",
    "answers": [
      "Session hijacking",
      "Cross-site request forgery",
      "Typo squatting",
      "Clickjacking"
    ],
    "correct": 2,
    "explanation": "This is an example of typo squatting. The website is off by only one or two letters, and the attacker hopes that users of the real website mistype the URL and are taken to their fake website. Session hijacking is taking over an authenticated session. Cross-site request forgery sends fake requests to a website that purport to be from a trusted, authenticated user. Clickjacking attempts to trick users into clicking on something other than what they intended."
  },
  {
    "id": "SEC-D2-122",
    "domain": "2.0",
    "question": "Which of the following best describes malware that will execute some malicious activity when a particular condition is met (i.e., if the condition is met, then executed)?",
    "answers": [
      "Boot sector virus",
      "Logic bomb",
      "Buffer overflow",
      "Sparse infector virus"
    ],
    "correct": 1,
    "explanation": "A logic bomb performs malicious actions when a specific condition or conditions are met. A boot sector virus infects the boot sector of the hard drive. A buffer overflow occurs when the attacker attempts to put more data in a variable than it can hold. A sparse infector virus performs its malicious activity intermittently to make it harder to detect."
  },
  {
    "id": "SEC-D2-123",
    "domain": "2.0",
    "question": "Una's company is assessing threats to their supply chain and wants to consider the most likely issues that their server hardware supplier may create. Which of the following is not a common concern for organizations assessing hardware providers?",
    "answers": [
      "Malicious hardware design",
      "Injection of malicious firmware",
      "Inability to deliver hardware in a timely manner",
      "Malicious software added to default OS images"
    ],
    "correct": 0,
    "explanation": "While malicious hardware does exist, few organizations face it as a common threat due to the complexity of the attack and the fact that most hardware providers want to avoid the reputational harm that compromised hardware would create. Malicious firmware and software added to the OS image as well as an inability to deliver hardware in a timely manner are all common concerns with hardware providers."
  },
  {
    "id": "SEC-D2-124",
    "domain": "2.0",
    "question": "Helen wants to prevent her staff from sideloading applications to their Android devices. What type of tool is best suited to preventing this type of issue without reducing other functionality for the device?",
    "answers": [
      "Disable the Google Play store.",
      "Disable the manufacturer's store.",
      "Use an EDR tool.",
      "Use an MDM solution."
    ],
    "correct": 3,
    "explanation": "A mobile device management (MDM) solution will allow settings and software to be managed centrally, allowing Helen to both control sideloading permissions and to prevent unwanted applications from being installed. Disabling either the hardware vendor or Google's store does not prevent sideloading from an external media like a microSD card, which can reduce the functionality of devices. An EDR is helpful to identify malicious software but doesn't manage devices and prevent sideloading."
  },
  {
    "id": "SEC-D2-125",
    "domain": "2.0",
    "question": "Tori believes that the system she is investigating may have a rootkit resident on the system. What type of behavior is most likely to indicate a rootkit's presence?",
    "answers": [
      "Unusual network traffic",
      "Network scanning",
      "Displaying a ransom notice",
      "Deletion of files"
    ],
    "correct": 0,
    "explanation": "Rootkits are designed to help retain control of and access to a system without users noticing. That means that obtrusive behaviors like network scanning, displaying ransom notices, or deletion of files are unusual for rootkits to perform. Other malware components beyond the rootkit may perform these as part of a malicious actor's toolkit."
  },
  {
    "id": "SEC-D2-126",
    "domain": "2.0",
    "question": "Neil wants to deploy a host-intrusion prevention system that will use a third-party threat feed to servers in his datacenter. What concern might his system administrators express about the HIPS that he should consider before he makes the decision?",
    "answers": [
      "A HIPS may block traffic, causing an outage or disruption.",
      "A HIPS may prevent least privilege configurations.",
      "A HIPS may bypass application allow lists.",
      "A HIPS may make use of segmentation less effective."
    ],
    "correct": 0,
    "explanation": "A HIPS may block legitimate traffic if the traffic matches an existing rule or if a threat feed is used and has a detection that matches that traffic. That means that organizations that deploy HIPS in datacenters where disruptions could cause significant outages are careful about what rules they put in place and how threat feed data is used. A HIPS doesn't prevent least privilege and typically doesn't interact with application allow lists, and segmentation should not impact a HIPS."
  },
  {
    "id": "SEC-D2-127",
    "domain": "2.0",
    "question": "Organize the following threat actors by their typical level of sophistication from most sophisticated to least sophisticated:",
    "answers": [
      "Hacktivists, Shadow IT, Organized crime, Nation-state actors",
      "Nation-state actors, Organized crime, Hacktivists, Shadow IT",
      "Organized crime, Hacktivists, Shadow IT, Nation-state actors",
      "Shadow IT, Hacktivists, Organized crime, Nation-state actors"
    ],
    "correct": 1,
    "explanation": "Nation-state actors are typically the most sophistical adversaries organizations will face. Organized crime is the second most sophisticated actor in general, with hacktivists, then shadow IT following."
  },
  {
    "id": "SEC-D2-128",
    "domain": "2.0",
    "question": "What is the most common file-based threat vector?",
    "answers": [
      "Phishing",
      "BEC",
      "Malware",
      "XSS"
    ],
    "correct": 2,
    "explanation": "Malware is the most common threat vector involving files. Business email and phishing-related compromises that occur through files are typically due to malware. Cross-site scripting relies on embedding code in web pages that users will run when they view them, taking action as their logged-in account."
  },
  {
    "id": "SEC-D2-129",
    "domain": "2.0",
    "question": "Drew wants to address a recent Windows vulnerability that has a CVE rating of 9.6. What should his first step be to address the vulnerability?",
    "answers": [
      "Isolate the impacted systems.",
      "Disable the service.",
      "Check to see if a patch is available.",
      "Install a host-based firewall."
    ],
    "correct": 2,
    "explanation": "The first step for most organizations when addressing a known vulnerability is to check whether a patch is available. Organizations will also assess the potential risks associated with the patch: has it been widely deployed and tested, are there known issues, and is there a likelihood of disruption due to patching? If there are known issues, other solutions like isolation or deploying additional security controls such as a host-based firewall or firewall rule, or even disabling the service if possible, may be employed."
  },
  {
    "id": "SEC-D2-130",
    "domain": "2.0",
    "question": "Clay is decommissioning a server and wants to ensure that the system is properly decommissioned. Once the drives have been wiped or destroyed, what step typically comes next?",
    "answers": [
      "Wiping memory",
      "Removing the system from inventory",
      "Removing the system from management",
      "Removing memory"
    ],
    "correct": 1,
    "explanation": "Systems are typically removed from management when they are shut down and before disks are wiped. Once they're off and will not return to service, they are wiped and then removed from inventory. Memory wipes and removal are not typical steps in decommissioning processes."
  },
  {
    "id": "SEC-D2-131",
    "domain": "2.0",
    "question": "Joe recently ran a port scan and found a service running on TCP port 1433. What type of attacks would he expect against this service?",
    "answers": [
      "Web-based attacks",
      "Print-server attacks",
      "Oracle database server attacks",
      "Microsoft SQL Server attacks"
    ],
    "correct": 3,
    "explanation": "TCP 1433 is the default service port for Microsoft SQL. Joe will want to take appropriate actions to protect his SQL server, including patching, properly configuration, firewall rules, and network segmentation."
  },
  {
    "id": "SEC-D2-132",
    "domain": "2.0",
    "question": "What type of virtualization attack can be prevented by encrypting storage volumes when they are created?",
    "answers": [
      "VM escape",
      "Birthday attacks",
      "Pass-the-hash",
      "Resource reuse"
    ],
    "correct": 3,
    "explanation": "Encryption prevents resource reuse attacks from occurring because the data will not be accessible to attackers after resources are released and reallocated to third parties. VM escape attacks target the underlying VM infrastructure and could still occur if it was vulnerable. Pass-the-hash attacks are used against authentication systems when a hash can be captured and sent to validate a session, and birthday attacks leverage the likelihood of finding a valid collision more quickly by guessing than by moving linearly through a solution set for a hash."
  },
  {
    "id": "SEC-D2-133",
    "domain": "2.0",
    "question": "Tyler discovers that software his organization has deployed sends information about the workstations back to a central server. After capturing network traffic that is being sent, he discovers that it includes the workstation's IP address, operating system, screen resolution, and information about other installed software. What type of malware should Tyler classify this as?",
    "answers": [
      "A Trojan",
      "Bloatware",
      "A keylogger",
      "Spyware"
    ],
    "correct": 3,
    "explanation": "Tyler has encountered spyware, software that gathers information to send back to a third party. While spyware is less outright malicious than other types of malware and may even have asked users to agree to release information as part of a click-through during installation, it is still considered malware because it sends information about users, systems, and networks to third parties that is not intended or desired. Trojans are intended to appear like desirable or legitimate software but are malicious; bloatware is preinstalled software that is not needed and takes up disk space, CPU, and memory; and keyloggers capture keystrokes from a keyboard to retain locally or send to a malicious actor."
  },
  {
    "id": "SEC-D2-134",
    "domain": "2.0",
    "question": "Eden wants to check errors related to a new security tool installed on her Windows workstation. What log file in Windows contains errors with installed software?",
    "answers": [
      "The application log",
      "The security log",
      "The setup log",
      "The system log"
    ],
    "correct": 0,
    "explanation": "The application log typically contains information about software that is installed on a Windows workstation, including errors that Eden is trying to identify. The security log contains security events like logins and file deletions. The setup log contains information about the installation of Windows, and the system log contains system-related events like bootup errors."
  },
  {
    "id": "SEC-D2-135",
    "domain": "2.0",
    "question": "Trent's company has recently discovered that their DNS information was changed via their registrar. Investigation showed that an administrator's workstation was compromised and that the account details for domain administration were contained on the workstation. What type of DNS-based attack is this?",
    "answers": [
      "A DNS-based DoS attack",
      "A DNS hijacking attack",
      "A DNS amplification attack",
      "A DNS-based DDoS attack"
    ],
    "correct": 1,
    "explanation": "DNS hijacking can occur in a number of ways, including via the registrar, by changing your organization's DNS servers, or via changes to a local hosts file. DNS-based DoS attacks seek to disable or prevent DNS from working, whereas DNS-based DDoS attacks tend to be amplified and reflected by sending spoofed DNS queries with large results that will bog down the network connection of a targeted system or organization."
  },
  {
    "id": "SEC-D2-136",
    "domain": "2.0",
    "question": "Giovanni wants to check to see if an impossible travel situation occurred for two logins on a Linux server. What log should he check to confirm or disprove his theory?",
    "answers": [
      "/var/log/messages",
      "/var/log/auth.log",
      "/var/log/cron.log",
      "/var/log/travel"
    ],
    "correct": 1,
    "explanation": "The auth.log or secure file contains authentication logs for Linux systems and will have such information as user ID, authentication time, and the IP address that the user connected from. Giovanni can use the IP addresses and times along with a geo-IP system to check for impossible travel. /messages contains general log messages, and cron.log contains cron job information. /travel is not a typical Linux log file."
  },
  {
    "id": "SEC-D2-137",
    "domain": "2.0",
    "question": "Microsoft's Intune as well as tools like Jamf are examples of tools that provide what sort of mitigation functionality?",
    "answers": [
      "Decommissioning",
      "Configuration enforcement",
      "Segmentation",
      "HIPS"
    ],
    "correct": 1,
    "explanation": "Intune and Jamf provide a wide range of hardening functionality, including configuration enforcement."
  },
  {
    "id": "SEC-D2-138",
    "domain": "2.0",
    "question": "Nora recently wanted to find information about a scientific discovery and queried an AI large-language model asking for a summary and references. The AI model provided a summary of the discovery and a number of citations. After Nora searched for the articles the AI cited, she discovered that they did not exist. How would this be classified?",
    "answers": [
      "As phishing",
      "As misinformation",
      "As disinformation",
      "As brand impersonation"
    ],
    "correct": 1,
    "explanation": "Misinformation is incorrect information, but not purposefully so like disinformation. This is true regardless of the way the information is provided. Phishing is used to gather credentials and other sensitive information, and brand impersonation attacks focus on appearing like a legitimate brand or company."
  },
  {
    "id": "SEC-D2-139",
    "domain": "2.0",
    "question": "Sandeep wants to address the potential for impersonation attacks against her helpdesk. What technique is most likely to prevent impersonation attacks from being successful with her support staff?",
    "answers": [
      "Require callers to verify their identity using non-public information.",
      "Avoid publishing the help desk's phone number externally.",
      "Require users to complete awareness training.",
      "Require callers to provide a callback number and call back before completing tasks."
    ],
    "correct": 0,
    "explanation": "Requiring callers to validate their identity using non-public information can help to prevent impersonation attacks. Not publishing a support number externally means that internal users will still have it and that it can be leaked or found. Requiring users to provide a callback number only works if business numbers are used, and this tends to prevent support from being effective for traveling users and others who may not be at a desk or able to use a soft phone due to technology issues. User awareness training won't protect the help desk staff from making mistakes."
  },
  {
    "id": "SEC-D2-140",
    "domain": "2.0",
    "question": "Bob is conducting a penetration test against a client's environment and he discovers TCP port 515 exposed to the Internet. What should he report to his client as a potential attack surface?",
    "answers": [
      "An exposed Internet connected camera",
      "An exposed print server",
      "An exposed IoT device",
      "An exposed UPS management system"
    ],
    "correct": 1,
    "explanation": "TCP port 515 is the LPR port, commonly used for print services. Bob knows that exposing printers to the Internet is not a common practice and should recommend that the print server be segmented away from the Internet so that only internal systems that need to can send print jobs to it."
  },
  {
    "id": "SEC-D2-141",
    "domain": "2.0",
    "question": "Which of the following is not a common cryptographic vulnerability?",
    "answers": [
      "Downgrade attacks",
      "Magic key attacks",
      "Collision attacks",
      "Birthday attacks"
    ],
    "correct": 1,
    "explanation": "The Security+ exam outline expects test takers to be familiar with three types of attacks: downgrade attacks that request weaker encryption types; collision attacks, which focus on finding collisions in hashes, allowing arbitrary changes to files that would normally be verified with hashes; and birthday attacks, which allow nonlinear guesses to be more likely to find a solution than simply progressing through key space. Magic key attacks were made up for this question."
  },
  {
    "id": "SEC-D2-142",
    "domain": "2.0",
    "question": "Louis is investigating a malware incident on one of the computers on his network. He has discovered unknown software that seems to be opening a port, allowing someone to remotely connect to the computer. This software seems to have been installed at the same time as a small shareware application. Which of the following best describes this malware?",
    "answers": [
      "Trojan",
      "Worm",
      "Logic bomb",
      "Rootkit"
    ],
    "correct": 0,
    "explanation": "This is a remote-access Trojan, malware that opens access for someone to remotely access the system. A worm would have spread itself via a vulnerability, whereas a logic bomb runs when some logical condition is met. Finally, a rootkit provides root or administrative access to the system."
  },
  {
    "id": "SEC-D2-143",
    "domain": "2.0",
    "question": "Which of the following motivations is not commonly associated with advanced persistent threat actors?",
    "answers": [
      "Ethical",
      "War",
      "Data exfiltration",
      "Espionage"
    ],
    "correct": 0,
    "explanation": "Ethical concerns are typically associated with hacktivists and some insider threats. APTs are typically nation-state actors and are commonly associated with war, data exfiltration, and espionage operations."
  },
  {
    "id": "SEC-D2-144",
    "domain": "2.0",
    "question": "Eve wants to protect against DLL injection attacks. Which of the following practices can help her prevent DLL injection?",
    "answers": [
      "Do not allow users to run DLLs.",
      "Avoid using DLLs.",
      "Use fully qualified paths for DLLs instead of searching paths.",
      "Use a DLL vulnerability scanner."
    ],
    "correct": 2,
    "explanation": "DLL injection requires that a DLL be loaded dynamically, and the ability to place a malicious DLL where it will be loaded is critical to the success of this type of attack. That means that using fully qualified DLL paths can help prevent the attack from succeeding. Preventing DLLs from being loaded by users and the programs they run or entirely avoiding using DLLs will cause functional issues for Windows, DLL vulnerability scanners are not a common solution, and avoiding the use of DLLs is not a common practice since DLLs are a key part of Windows systems."
  },
  {
    "id": "SEC-D2-145",
    "domain": "2.0",
    "question": "Mackenzie wants to protect her organization from firmware vulnerabilities. What practice is most effective at preventing malicious firmware from being inadvertently downloaded and installed?",
    "answers": [
      "Only use digitally signed and validated firmware.",
      "Scan firmware with an antivirus tool.",
      "Only use encrypted firmware.",
      "Avoid updating firmware and only use original firmware."
    ],
    "correct": 0,
    "explanation": "Firmware providers often provide digitally signed firmware that can be validated before it is installed. Mackenzie should ensure that her organization's practices include validating firmware signatures before installation. Antivirus will typically not detect malicious code in firmware files, encrypted firmware without a digital signature does not provide the same protection as digitally signed firmware, and firmware updates should be installed to prevent vulnerabilities from being exploited."
  },
  {
    "id": "SEC-D2-146",
    "domain": "2.0",
    "question": "Zoie wants to check for instances of concurrent session usage for her web application. Where should she look for these indicators?",
    "answers": [
      "Her firewall logs",
      "Her antivirus (AV) logs",
      "Her authentication logs",
      "Her web application server logs"
    ],
    "correct": 3,
    "explanation": "Zoie's best option is to review web application server logs to identify session IDs that are the same coming from different IP addresses. She will not see session IDs in firewall, AV, or authentication logs."
  },
  {
    "id": "SEC-D2-147",
    "domain": "2.0",
    "question": "Valerie knows that a system in her environment has been compromised and wants to take immediate action. Which of the following options should she select if she is worried about the system impacting other hosts on the network?",
    "answers": [
      "Deploy antimalware tools to the system and scan it.",
      "Immediately isolate the system.",
      "Immediately deploy any missing patches to the system.",
      "Change default passwords and check for unexpected user accounts."
    ],
    "correct": 1,
    "explanation": "Isolating the system is the best option for Valerie to select until she can investigate the system. Isolation will prevent the system from impacting other systems and will also prevent attackers from getting to it. Antimalware and patching are useful options further into the investigation and response process. Changing default passwords and checking for unexpected user accounts is a good practice but won't help protect other systems if the system is compromised."
  },
  {
    "id": "SEC-D2-148",
    "domain": "2.0",
    "question": "Casey is worried about downgrade attacks against her Apache web servers. What should she do to most effectively prevent downgrade attacks?",
    "answers": [
      "Prevent TLS fallback.",
      "Require current web browsers.",
      "Run the most current version of Apache.",
      "Use an IDS."
    ],
    "correct": 0,
    "explanation": "Preventing fallback options from being used for encryption may stop some clients from connecting but will most effectively prevent downgrade attacks. Current browsers may be needed for this, but requiring that does not prevent attackers from using a downgrade attack if fallback options are allowed. Current web server software does not prevent settings from being weak. An IDS can detect downgrade attempts but cannot stop them."
  },
  {
    "id": "SEC-D2-149",
    "domain": "2.0",
    "question": "What type of attack is based on sending more data to a target variable than the data can actually hold?",
    "answers": [
      "Bluesnarfing",
      "Buffer overflow",
      "Bluejacking",
      "Cross-site scripting"
    ],
    "correct": 1,
    "explanation": "Buffer overflow attacks cram more data into a field or buffer than they can accept, overflowing into other memory locations and either crashing the system or application or potentially allowing code to be inserted into executable locations. Bluesnarfing and bluejacking are both Bluetooth attacks. Cross-site scripting attacks allow attackers to inject scripts into pages viewed by other users."
  },
  {
    "id": "SEC-D2-150",
    "domain": "2.0",
    "question": "Which of the following is an attack that seeks to attack a website, based on the website's trust of an authenticated user?",
    "answers": [
      "XSS",
      "XSRF",
      "Buffer overflow",
      "Directory traversal"
    ],
    "correct": 1,
    "explanation": "Cross-site request forgery (XSRF or CSRF) sends forged requests to a website, supposedly from a trusted user. Cross-site scripting (XSS) is the injection of scripts into a website to exploit the users. A buffer overflow tries to put more data in a variable than the variable can hold. Directory traversal attempts to change directories through URL manipulation to access files that should not normally be accessible to the web server or application."
  },
  {
    "id": "SEC-D2-151",
    "domain": "2.0",
    "question": "Mary wants to harden workstations she is responsible for against malware attacks. Which of the following is not a common solution to this?",
    "answers": [
      "Installing EDR",
      "Limiting administrative access",
      "Installing antivirus",
      "Using disk encryption"
    ],
    "correct": 3,
    "explanation": "Disk encryption does not prevent malware attacks under most circumstances. Use of endpoint detection and response tools, antivirus tools, and limiting administrative access are all common ways to counter malware."
  },
  {
    "id": "SEC-D2-152",
    "domain": "2.0",
    "question": "Spyware is an example of what type of malware?",
    "answers": [
      "Trojan",
      "Unwanted programs",
      "RAT",
      "Ransomware"
    ],
    "correct": 1,
    "explanation": "Spyware and adware are both common examples of unwanted programs. Though not directly malicious, they can pose risks to user privacy as well as create annoyances like pop-ups or other unwanted behaviors. Trojans appear to be legitimate programs or are paired with them, RATs provide remote access and are a subcategory of Trojans, and ransomware demands payment or other actions to avoid damage to files or reputation."
  },
  {
    "id": "SEC-D2-153",
    "domain": "2.0",
    "question": "Olivia has provisioned a new virtual machine in a cloud environment and is conducting forensic exercises to practice cloud forensic activities. She discovers data on her newly provisioned drive when she begins to analyze the drive. What issue has Olivia encountered?",
    "answers": [
      "A VM escape issue",
      "Improper chain of custody",
      "A resource reuse issue",
      "Improper legal hold"
    ],
    "correct": 2,
    "explanation": "Olivia has encountered a resource reuse issue. It is likely that the drive was reallocated without being securely wiped and that the previous user did not encrypt their drives. While this is unlikely with major cloud service providers now, it has been observed in the past and could still occur. There is no indication that a VM escape occurred that would run software on the host hypervisor, and no procedural issues around chain of custody or legal hold are described in the question."
  },
  {
    "id": "SEC-D2-154",
    "domain": "2.0",
    "question": "Chuck wants to help his organization protect against business email compromise (BEC) attacks. Which of the following is not a common best practice to defend against BEC?",
    "answers": [
      "Delete all attachments from emails.",
      "Use two-factor authentication.",
      "Review suspicious email carefully for typos and other indicators.",
      "Don't click URLs in unsolicited emails--visit URLs manually."
    ],
    "correct": 0,
    "explanation": "While attachments are a common vector for BEC attacks, deleting all attachments is not a common practice. Instead, users should be taught to be careful about clicking on and opening attachments, particularly on unsolicited email. Using two-factor authentication, reviewing suspicious emails for potential indicators of BEC, and not clicking on URLs but instead visiting sites manually are all common anti-BEC practices."
  },
  {
    "id": "SEC-D2-155",
    "domain": "2.0",
    "question": "A penetration tester calls a staff member for her target organization and introduces herself as a member of the IT support team. She asks if the staff member has encountered a problem with their system, then proceeds to ask for details about the individual, claiming she needs to verify that she is talking to the right person. What type of social engineering attack is this?",
    "answers": [
      "Pretexting",
      "A watering hole attack",
      "Phishing",
      "Shoulder surfing"
    ],
    "correct": 0,
    "explanation": "Pretexting is a type of social engineering that involves using a false motive and lying to obtain information. Here, the penetration tester lied about their role and why they are calling (impersonation), and then built some trust with the user before asking for personal information. A watering hole attack leverages a website that the targeted users all use and places malware on it to achieve their purpose. Phishing is the process of attempting to gain credentials or other information, typically via email or similar means. Shoulder surfing involves looking over an individual's shoulder or otherwise observing them entering sensitive information like passwords."
  },
  {
    "id": "SEC-D2-156",
    "domain": "2.0",
    "question": "What type of attack targets a specific group of users by infecting one or more websites that group is specifically known to visit frequently?",
    "answers": [
      "A watercooler attack",
      "A phishing net attack",
      "A watering hole attack",
      "A phish pond attack"
    ],
    "correct": 2,
    "explanation": "Watering hole attacks target groups by focusing on common shared behaviors like visiting specific websites. If attackers can compromise the site or deliver targeted attacks through it, they can then target that group. Watercooler, phishing net, and phish pond attacks were all made up for this question."
  },
  {
    "id": "SEC-D2-157",
    "domain": "2.0",
    "question": "When a multithreaded application does not properly handle various threads accessing a common value, and one thread can change the data while another thread is relying on it, what flaw is this?",
    "answers": [
      "Memory leak",
      "Buffer overflow",
      "Integer overflow",
      "Time-of-check/time-of-use"
    ],
    "correct": 3,
    "explanation": "If access is not handled properly, a time-of-check (TOC)/time-of-use (TOU) condition can exist where the memory is checked, changed, then used. Memory leaks occur when memory is allocated but not deallocated. A buffer overflow is when more data is put into a variable than it can hold. An integer overflow occurs when an attempt is made to put an integer that is too large into a variable, such as trying to put a 64-bit integer into a 32-bit variable."
  },
  {
    "id": "SEC-D2-158",
    "domain": "2.0",
    "question": "Geoff believes that a workstation on his network may have been the target of an on-path attack. What indicator is most likely to indicate this type of attack on a local network segment?",
    "answers": [
      "External DNS resolution shows an improper result.",
      "The ARP table shows an alternate address for the gateway.",
      "Encrypted traffic has been forced to use a less secure algorithm.",
      "A website's URL has been modified."
    ],
    "correct": 1,
    "explanation": "Local on-path attacks typically involve responding to ARP requests with a different gateway MAC address before the gateway itself can respond or through modification of local hosts files. External DNS should not be resolving local network DNS information. Encrypted traffic using a less secure algorithm is a downgrade attack. Website URLs being modified might be an example of typo squatting or another attack."
  },
  {
    "id": "SEC-D2-160",
    "domain": "2.0",
    "question": "Andy is an end user in an organization that uses an application allow list to control what applications are used on workstations. What does Andy need to do if he wants to install an application on his workstation?",
    "answers": [
      "Download the application, then run the installer using an administrator account.",
      "Manually add the application installer to the allow list for his workstation.",
      "Request that the application be added to the allow list and have it installed by his organization's administrators.",
      "Use a jailbreak to install the application."
    ],
    "correct": 2,
    "explanation": "End users cannot add applications that are not on the allow list to their workstations in environments using an application allow list. Since Andy is an end user, not an administrator, he cannot install applications as an administrator, nor can he add the application to the allow list. Andy will need to request that the application be added and then administrators will need to install the application. Jailbreaks are used for mobile devices, not workstations."
  },
  {
    "id": "SEC-D2-161",
    "domain": "2.0",
    "question": "Frank is traveling and wants to connect to an unsecure wired network in his hotel. Which of the following is not a common threat he should consider how to prevent while on an unsecured hotel wired network?",
    "answers": [
      "Network packet capture",
      "Network-based attacks",
      "Evil twins",
      "Worms"
    ],
    "correct": 2,
    "explanation": "Evil twins are threats for wireless networks, not wired networks. Frank should consider how to keep all his traffic secure, likely by using a VPN that tunnels all his traffic to a trusted network exit point, and both worms and network-based attacks are possible from infected or malicious systems."
  },
  {
    "id": "SEC-D2-162",
    "domain": "2.0",
    "question": "An attacker is trying to get access to your network. He is sending users on your network a link to a new game with a hacked license code program. However, the game files also include software that will give the attacker access to any machine that it is installed on. What type of attack is this?",
    "answers": [
      "Rootkit",
      "Trojan horse",
      "Spyware",
      "Boot sector virus"
    ],
    "correct": 1,
    "explanation": "The malware in this example is a Trojan horse--it pretends to be something desirable, or at least innocuous, and installs malicious software in addition to or instead of the desired software. A rootkit gives root or administrative access, spyware is malware that records user activities, and a boot sector virus is a virus that infects the boot sector of the hard drive."
  },
  {
    "id": "SEC-D2-163",
    "domain": "2.0",
    "question": "Rae's company recently received an email from a former employee threatening to release company data that they copied before they left the organization if the organization does not pay them a severance package. What threat actor motivation should she categorize this as?",
    "answers": [
      "Espionage",
      "Revenge",
      "Blackmail",
      "Service disruption"
    ],
    "correct": 2,
    "explanation": "The former employee is threatening to release data making this blackmail. Espionage--including both nation-state driven and corporate--typically involves theft of data or other information, and there is no description of revenge or an attempt to disrupt services."
  },
  {
    "id": "SEC-D2-164",
    "domain": "2.0",
    "question": "Jack wants to sideload applications to his Android phone. What does he need to do first to allow this?",
    "answers": [
      "Jailbreak the phone.",
      "Transfer the files to the phone.",
      "Install a package manager.",
      "Disable antimalware protection."
    ],
    "correct": 1,
    "explanation": "Sideloading can be as simple as loading files on the phone, although some bundles and applications require installers or other tools. Jailbreaking, disabling antimalware protection, or even installing a package manager are not required to sideload applications for Android but may be done. Jailbreaking and package managers are commonly used for iOS devices."
  },
  {
    "id": "SEC-D2-165",
    "domain": "2.0",
    "question": "Jill is conducting a penetration test and uses the following query against a vulnerable web application. What data will she see if it succeeds?",
    "answers": [
      "A list of all customers",
      "A list of all customers whose userID is 1 or larger",
      "A list of all customers whose userID is 1",
      "A list of all users"
    ],
    "correct": 3,
    "explanation": "If this query is successful, it will match all categories because it looks for categories that match customers or TRUE which is how OR 1=1 resolves. That means that any category will match, providing Jill with a list of all users, not just all customers or customers with specific userIDs.",
    "exhibit": "SELECT * FROM users WHERE category = 'customers' OR 1=1--'"
  },
  {
    "id": "SEC-D2-166",
    "domain": "2.0",
    "question": "Greg's checklist for securing new Linux-based devices includes disabling unneeded ports and protocols. What primary purpose does this serve?",
    "answers": [
      "It speeds up port scans.",
      "It reduces the number of logged events.",
      "It prevents using up default ports.",
      "It reduces the device's attack footprint."
    ],
    "correct": 3,
    "explanation": "Disabling unnecessary ports and protocols reduced a device or system's attack footprint. The fewer targets attackers have, the less likely they are to be successful at finding a viable target. Reducing ports and protocols will speed up port scans and will reduce the number of logged events, but this is not the primary purpose of the change. Default ports are set for services based on common practice, and ports and protocols are not disabled to save default ports."
  },
  {
    "id": "SEC-D2-167",
    "domain": "2.0",
    "question": "Nathaniel's organization has recently deployed multifactor authentication (MFA), which requires both a password and an MFA code to be provided to authenticate to critical services. Despite this, an attacker has recently logged into an administrative console using a password and MFA code belonging to a user. Which of the following types of malware is most likely to allow an attacker to successfully undertake this type of attack?",
    "answers": [
      "A virus",
      "A worm",
      "A logic bomb",
      "A keylogger"
    ],
    "correct": 3,
    "explanation": "Attackers are increasingly relying on keyloggers that can capture information entered at a keyboard and send it to them, allowing them to quickly use the information to log in before the user can use an MFA code. Viruses, worms, and logic bombs are not designed to provide this functionality."
  },
  {
    "id": "SEC-D2-168",
    "domain": "2.0",
    "question": "Which of the following is not a common attribute of organized crime threat actors?",
    "answers": [
      "Internal",
      "Well resourced",
      "Sophisticated",
      "External"
    ],
    "correct": 0,
    "explanation": "Organized crime actors are typically external rather than internal actors. They are often well resourced and sophisticated."
  },
  {
    "id": "SEC-D2-169",
    "domain": "2.0",
    "question": "Darryl is showing Valerie his iPhone and explains that his niece installed a package manager called Cydia on the device that allows him to install applications that are not available via the Apple App Store. What does Valerie know about his iPhone?",
    "answers": [
      "It has been infected with malware.",
      "It can be remotely controlled via SSH.",
      "It can be remotely controlled via a web interface.",
      "It is jailbroken."
    ],
    "correct": 3,
    "explanation": "Package managers like Cydia and Sileo are used to add applications and other functionality to jailbroken iPhones. If the phone is an organizationally owned phone or contains organizational data, Valerie may need to take action based on organizational policies. Cydia and other package managers do not open up remote management tools by default and are not malware, although they may not be permitted software for many organizational devices."
  },
  {
    "id": "SEC-D2-170",
    "domain": "2.0",
    "question": "Isaac is reviewing IPS rules used by his organization and notices rules that block the use of ' as well as OR 1=1 in HTTP queries. What type of attacks is Isaac's organization attempting to stop?",
    "answers": [
      "Buffer overflow attacks",
      "SQL injection attacks",
      "Replay attacks",
      "Directory traversal attacks"
    ],
    "correct": 1,
    "explanation": "Simple SQL injection attacks often rely on the single quote or Boolean conditions like OR 1=1 as part of their attack. While these are simple examples and more complex options exist, Isaac's organization is wise to prevent simple attacks. Buffer overflow attacks target memory locations or variables, replay attacks re-send legitimate traffic, and directory traversal attacks attempt to access other file structures."
  },
  {
    "id": "SEC-D2-171",
    "domain": "2.0",
    "question": "Vicki is reviewing common BEC attack methods with her team. Which of the following is not a common BEC technique?",
    "answers": [
      "Using compromised email accounts",
      "Using slightly modified spoofed email addresses",
      "Sending email from the user's personal email account",
      "Using malware to access email accounts"
    ],
    "correct": 2,
    "explanation": "Sending email from a user's personal email account to them is not a common BEC exploit, but using compromised accounts, spoofing email with slightly modified email addresses, and using malware to gain access to accounts and send email are all common techniques."
  },
  {
    "id": "SEC-D2-172",
    "domain": "2.0",
    "question": "Craig wants to control the applications employees can install on the laptops they are issued. If he wants the greatest level of control and is not concerned about flexibility or overhead to manage his solution, which of the following will best meet his needs?",
    "answers": [
      "An access control list",
      "Application allow list",
      "An application deny list",
      "Segmentation"
    ],
    "correct": 1,
    "explanation": "An application allow list provides the greatest control over what applications are installed on devices. Application deny lists are useful for preventing specific software from being installed but cannot handle the breadth of possible applications that users may find and use. Access control lists (ACLs) are used like firewall rules to apply rules to network traffic, and segmentation is used to separate systems based on various factors like data sensitivity or trust levels."
  },
  {
    "id": "SEC-D2-173",
    "domain": "2.0",
    "question": "Ron wants to prevent users from using SSH between two network segments. Which of the following ACLs will prevent users in a segment 10.10.10.0/24 from using SSH to connect to the 10.10.20.0/24 network segment?",
    "answers": [
      "PERMIT IP 10.10.10.0/24 * 10.10.20.0/24 22",
      "DENY IP 10.10.10.0/24 * 10.10.20.0/24 22",
      "PERMIT IP 10.10.20.0/24 * 10.10.10.0/24 22",
      "DENY IP 10.10.20.0/24 * 10.10.10.0/24 22"
    ],
    "correct": 1,
    "explanation": "Ron wants to deny any source port to systems on the 10.10.20.0/24 network with a service port of TCP 22 for SSH."
  },
  {
    "id": "SEC-D2-174",
    "domain": "2.0",
    "question": "Sam's organization uses a DNS black hole to prevent access to known malicious sites. The organization relies on a reputation service feed that is used to add the known malicious domains and IP addresses. DNS lookups that would go to those sites is sent to an internal redirect site that lets users know the site is inaccessible. Sam reviews the logs to determine if a system is trying to access those blocked sites regularly. What type of indicator of compromise is Sam looking for?",
    "answers": [
      "Blocked content",
      "Resource inaccessibility",
      "Missing logs",
      "Published or documented indicators"
    ],
    "correct": 0,
    "explanation": "Sam is using blocked content logging to determine what systems may be compromised and attempting to connect to malicious domains and if users are trying to access those IP addresses or domains. This can help Sam intervene with individual users and can also help identify infected systems. Resource inaccessibility is typically an unintentional indicator rather than a result of a security measure as described here. No logs are missing, and there is not a specific indicator of compromise that was described or published listed in the question."
  },
  {
    "id": "SEC-D2-175",
    "domain": "2.0",
    "question": "Christina is reviewing a Linux system that she is responsible for, and notices that the /usr filesystem is 80 percent full. After review, she notices that a single user's home directory has hundreds of files in it that were recently added. What type of indicator of compromise should she categorize this as?",
    "answers": [
      "Resource inaccessibility",
      "Blocked content",
      "Impossible travel",
      "Resource consumption"
    ],
    "correct": 3,
    "explanation": "While resource consumption alone may not indicate a compromise, unexpected consumption of resources may indicate unexpected or unwanted activity. Christina should look for other indicators of compromise to determine if she needs to declare a security incident. Resource inaccessibility would require the resource to not be available or working, and at 80% full a Linux filesystem will still work. There is no description of the content, and no content access was prevented, so this is not blocked content. Impossible travel occurs when logins or other resource usage occur in two locations at times that do not allow for travel between the locations."
  },
  {
    "id": "SEC-D2-176",
    "domain": "2.0",
    "question": "What term is used to describe the unwanted but generally harmless programs that are commonly installed on consumer computers when they are purchased?",
    "answers": [
      "Spyware",
      "Bloatware",
      "Logic bombs",
      "Firmware"
    ],
    "correct": 1,
    "explanation": "Bloatware is a general term used to describe the unnecessary and unwanted programs that are installed on many PCs by manufacturers. Spyware is more harmful, sending information about the user, their browsing habits, or the computer back to the software's vendor or other organizations. Logic bombs are malware that take action under specific circumstances like a time, date, or other trigger, and firmware is the software that runs on top of hardware to provide basic underlying functionality."
  },
  {
    "id": "SEC-D2-177",
    "domain": "2.0",
    "question": "Michael is performing a forensic analysis of a compromised workstation and discovers a copy of cmd.exe in the \\system32 folder on a Windows workstation that does not match the real cmd.exe file. When he looks at the file, he discovers that it is capable of running as an administrator. What type of attack has he discovered?",
    "answers": [
      "A buffer overflow attack",
      "A Trojan attack",
      "A privilege escalation attack",
      "A replay attack"
    ],
    "correct": 2,
    "explanation": "The ability to run a program as a privileged user like an administrator from an unexpected or uncommon location is a common indicator of a privilege escalation attack. A buffer overflow would push data into a variable to attempt to cause it to take a desired action, a Trojan would look like a wanted or desirable file but would be malware, and a replay attack would send successful authentication or other information again to gain access to a system."
  },
  {
    "id": "SEC-D2-178",
    "domain": "2.0",
    "question": "While reviewing logs, Chris sees an Apache web log that includes the following entry: What type of attack has Chris most likely uncovered, and what file will it return?",
    "answers": [
      "A replay attack, password00.png",
      "A directory traversal attack, password00.png",
      "A replay attack, passwd",
      "A directory traversal attack, passwd"
    ],
    "correct": 3,
    "explanation": "This is a directory traversal attack. The characteristic /../../ is the first indicator you should pay attention to. The %00 is a null byte, meaning that many applications will stop reading when they encounter it. You might not know that detail as you take the exam, but you should know that attackers would look for the passwd file, not a PNG of a password!",
    "exhibit": "https://www.example.com/viewer.php?filename=../../../etc/passwd%00.png"
  },
  {
    "id": "SEC-D2-179",
    "domain": "2.0",
    "question": "What common mitigation technique relies on VLANs to separate systems?",
    "answers": [
      "Encryption",
      "Segmentation",
      "Impossible travel",
      "HIPS"
    ],
    "correct": 1,
    "explanation": "VLANs are commonly used to provide segmentation for networks by placing them in separate logical networks. Encryption doesn't require or use VLANs, impossible travel describes logins and other activities from disparate physical locations in a time frame that would be impossible for travel to occur during, and a HIPS is a host intrusion prevention system."
  },
  {
    "id": "SEC-D2-180",
    "domain": "2.0",
    "question": "Mark's coworker recently discovered that he can use the Linux su command to run programs as one of his peers. What type of attack is this?",
    "answers": [
      "A replay attack",
      "A vertical privilege escalation attack",
      "A horizontal privilege escalation attack",
      "A forgery attack"
    ],
    "correct": 2,
    "explanation": "Horizontal privilege escalation occurs when users at a similar level are able to use privileges or accounts belonging to peer users. Here, Mark's coworker is able to act as another similar user. Vertical privilege escalation focuses on greater privileges like administrative rights. Replay attacks re-send traffic to authenticate or otherwise repeat a transaction. Forgery attacks like cross-site request forgery (XSRF) leverage trusted sessions to allow malicious apps to take action due to the trust between a browser and a web application."
  },
  {
    "id": "SEC-D2-181",
    "domain": "2.0",
    "question": "Jason is monitoring his network and notices that hundreds of different IP addresses are sending requests to one of his organization's servers. The requests are small, and when he inspects them he sees a simple HTTP GET command for a file. When the server responds, it sends back a very large response. What type of attack is likely occurring, and what is it attempting to accomplish?",
    "answers": [
      "A DoS attack and exploiting a vulnerable service",
      "A DDoS and a buffer overflow",
      "A DDoS and resource exhaustion",
      "A DoS attack and an on-path attack"
    ],
    "correct": 2,
    "explanation": "This is most likely a distributed denial-of-service (DDoS) attack since it is coming from many different IP addresses. Using small requests to generate large responses is an example of a resource exhaustion attack. Since this is coming from many addresses rather than one or a small number, it is more properly called a DDoS than a simple denial-of-service (DoS) attack. There is no indication that the service is vulnerable, the requests are small and no mention is made of a specific payload other than a HTTP GET for a file, and there is no traffic redirection as you would expect in an on-path attack."
  },
  {
    "id": "SEC-D2-182",
    "domain": "2.0",
    "question": "Dan was recently troubleshooting a web server and deployed a firewall rule to his organization's datacenter firewall at the beginning of the ruleset. The rule reads: What type of vulnerability should the security team at Dan's workplace label this as?",
    "answers": [
      "A jailbreak",
      "A race condition",
      "A misconfiguration",
      "An injection attack"
    ],
    "correct": 2,
    "explanation": "Allowing all TCP 80 traffic to any internal system is a common misconfiguration for firewalls when troubleshooting. Placing an overly broad rule in a firewall ruleset, particularly when it is processed early (at the top) of a ruleset is dangerous, even though it happens more than security practitioners want to think about! Jailbreaks are done on iOS-based mobile devices to bypass security; race conditions occur when the time-of-check (TOC) and time-of-use (TOU) of a variable, memory location, or other resource allows for changes when it shouldn't; and injection attacks are typically conducted against memory, code, or other resources, not firewall rules.",
    "exhibit": "ALLOW FROM ANY:TCP 80 TO ANY:ANY"
  },
  {
    "id": "SEC-D2-183",
    "domain": "2.0",
    "question": "Brian wants to protect files that are regularly sent via email as part of his organization's business practice. What type of encryption is best suited to this type of usage?",
    "answers": [
      "Full-disk encryption",
      "File-level encryption",
      "Volume encryption",
      "Transport encryption"
    ],
    "correct": 1,
    "explanation": "File-level encryption will allow Brian's organization to encrypt individual files rather than entire disks or volumes and will protect files even when they are not in transit, unlike transport encryption using TLS."
  },
  {
    "id": "SEC-D2-184",
    "domain": "2.0",
    "question": "Olivia has deployed Microsoft's Intune for her environment. What capability has she gained for her devices?",
    "answers": [
      "Malware detection and response",
      "Configuration enforcement",
      "Code versioning",
      "Web application firewalling"
    ],
    "correct": 1,
    "explanation": "Intune, formerly known as Microsoft Endpoint Manager and SCCM, provides configuration management, mobile app management, and other central system, software, and device management capabilities. It does not detect and respond to malware, but it can deploy configurations for Defender. It is not a code repository and versioning tool like git, and it does not provide web application firewalling."
  },
  {
    "id": "SEC-D2-185",
    "domain": "2.0",
    "question": "Jill is concerned about supply chain attacks against her organization's service providers. Which of the following should be her most significant concern about her software-as-a-service (SaaS) service provider as she documents her supply chain risks?",
    "answers": [
      "Compromise of the SaaS vendor, leading to access to her data",
      "Attacks against the SaaS vendor, leading to hours of downtime",
      "Lack of availability of hardware from her SaaS vendor for delivery",
      "Software vulnerabilities in tools provided by the vendor"
    ],
    "correct": 0,
    "explanation": "Data exposure is typically a more significant risk than downtime, particularly when the downtime is limited to hours. SaaS vendors do not typically sell or deliver hardware, as they provide services. Software vulnerabilities may exist, but without a known impact, compromise leading to data loss remains the most significant issue."
  },
  {
    "id": "SEC-D2-186",
    "domain": "2.0",
    "question": "Elizabeth is investigating a network breach at her company. She discovers a program that was able to execute code within the address space of another process by using the target process to load a specific library. What best describes this attack?",
    "answers": [
      "A logic bomb",
      "Session hijacking",
      "Buffer overflow",
      "DLL injection"
    ],
    "correct": 3,
    "explanation": "In a DLL injection, the malware attempts to inject code into the running process of a library in memory. This is a rather advanced attack. A logic bomb executes its misdeed when some condition is met. Session hijacking is taking over an authenticated session. Buffer overflows are done by sending more data to a variable than it can hold."
  },
  {
    "id": "SEC-D2-187",
    "domain": "2.0",
    "question": "Annie wants to prevent a TOC/TOU issue that occurs with her organization's business application. The issue occurs when scripts run as part of the application access a shared data file. Sometimes one instance of the script opens the file, checks that inventory is sufficient to meet customer needs, then waits for the customer's interaction. At the same time, another instance of the script checks, sees that there is sufficient inventory, and also provides that information to another customer. If both customers place orders, Annie's organization is unable to meet demand. If Annie wants to continue to grow her business's use of the application, which of the following options is the best way to prevent this issue?",
    "answers": [
      "Delete the resource after each use.",
      "Only run one instance of the process.",
      "Make multiple copies of the resource so each process has its own.",
      "Lock the resource until the process is done with it."
    ],
    "correct": 3,
    "explanation": "Locking the resource until the action is completed is a common method of preventing TOC/TOU issues. Deleting the resource after each use doesn't allow resources to be persistent, preventing applications from using them on an ongoing basis. Running a single instance of the process will heavily limit the ability for Annie's business to scale the service. Making multiple copies doesn't allow for a shared resource."
  }
];
