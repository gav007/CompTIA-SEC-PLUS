/* CompTIA Security+ SY0-701 -- Domain 4.0
   215 review questions extracted from:
     9781394211388-Chapter-4-Domain-4-0--Security-Operations.epub
   Correct answers + explanations from:
     9781394211388-Appendix-Answers-to-Review-Questions.epub
   Regenerate with: python tools/extract_domain.py 4
   Question order matches the book; `correct` is a 0-based index into
   `answers` (the app shuffles answer order at runtime, so never rely
   on A/B/C/D here). */

window.QUESTION_BANKS = window.QUESTION_BANKS || {};
window.QUESTION_BANKS["domain4"] = [
  {
    "id": "SEC-D4-001",
    "domain": "4.0",
    "question": "John wants to harden his organization's routers. If there are no currently known vulnerabilities or issues with the device, which of the following hardening options will provide the biggest benefit?",
    "answers": [
      "Moving their administrative interfaces to a protected VLAN",
      "Disabling unnecessary services",
      "Installing the most current patch level for the OS",
      "Enabling SNMP-based logging"
    ],
    "correct": 0,
    "explanation": "While all of these are best practices, moving the device's administrative interface to a protected VLAN will provide the most significant improvement in security since there are no known issues or vulnerabilities at the moment. If there were, patching or disabling services would quickly move up the list."
  },
  {
    "id": "SEC-D4-002",
    "domain": "4.0",
    "question": "Jackson is reviewing his organization's logs and discovers multiple new user accounts created after business hours using administrative credentials. What term describes searching for potential issues like this?",
    "answers": [
      "IoC creation",
      "Threat hunting",
      "Root cause analysis",
      "Eradication"
    ],
    "correct": 1,
    "explanation": "Threat hunting is the process of searching for threats, often using IoCs, threat intelligence, technological tools, and expertise to identify threats that might impact an organization. IoC creation involves documenting and defining an indicator of compromise. Root cause analysis looks for the underlying cause of an issue or event, and eradication is the complete removal of a threat or artifacts of malicious activity."
  },
  {
    "id": "SEC-D4-003",
    "domain": "4.0",
    "question": "Cynthia is concerned about attacks against an application programming interface (API) that her company provides for its customers. What should she recommend to ensure that the API is only used by customers who have paid for the service?",
    "answers": [
      "Require authentication.",
      "Install and configure a firewall.",
      "Filter by IP address.",
      "Install and use an IPS."
    ],
    "correct": 0,
    "explanation": "The simplest way to ensure that APIs are only used by legitimate users is to require the use of authentication. API keys are one of the most frequently used methods for this. If an API key is lost or stolen, the key can be invalidated and reissued, and since API keys can be matched to usage, Cynthia's company can also bill customers based on their usage patterns if they want to. A firewall or IP restrictions may be able to help, but they can be fragile; customer IP addresses may change. An intrusion prevention system (IPS) can detect and prevent attacks, but legitimate usage would be hard to tell from those who are not customers using an IPS."
  },
  {
    "id": "SEC-D4-004",
    "domain": "4.0",
    "question": "Greg wants to gain admission to a network which is protected by a network access control (NAC) system that recognized the hardware address of systems. How can he bypass this protection?",
    "answers": [
      "Spoof a legitimate IP address.",
      "Conduct a denial-of-service attack against the NAC system.",
      "Use MAC cloning to clone a legitimate MAC address.",
      "None of the above."
    ],
    "correct": 2,
    "explanation": "Greg can clone a legitimate Media Access Control (MAC) address if he can identify one on the network. Greg can do this by checking for a MAC label on some devices or by capturing traffic on the network if he can physically access it."
  },
  {
    "id": "SEC-D4-005",
    "domain": "4.0",
    "question": "Melissa's organization has deployed a firewall that uses three interfaces to provide services. The first interface connects to the Internet, the second to a network where the organization's web servers reside, and the third to a secured network where the organization's workstations are connected. What type of firewall architecture has Melissa's organization deployed?",
    "answers": [
      "An ACL",
      "A screened subnet",
      "A binary firewall",
      "A multihomed, multiroute NGFW"
    ],
    "correct": 1,
    "explanation": "Screened subnet designs use a firewall with three interfaces, one for the Internet or an untrusted network, one for a protected but front-facing network, and one for a shielded or protected network. ACLs (access control lists) use rules to control access. This design may use ACLs, but an ACL alone does not describe it. Binary firewalls were made up for this question, and while an NGFW may be multihomed, \"multiroute\" is not a term used to describe this design."
  },
  {
    "id": "SEC-D4-006",
    "domain": "4.0",
    "question": "CVE is an example of what type of feed?",
    "answers": [
      "A threat intelligence feed",
      "A vulnerability feed",
      "A critical infrastructure listing feed",
      "A critical virtualization exploits feed"
    ],
    "correct": 1,
    "explanation": "The Common Vulnerabilities and Exposures (CVE) list has entries that describe and provide references to publicly known cybersecurity vulnerabilities. A CVE feed will provide updated information about new vulnerabilities and a useful index number to cross reference with other services."
  },
  {
    "id": "SEC-D4-007",
    "domain": "4.0",
    "question": "Amanda scans a Red Hat Linux server that she believes is fully patched and discovers that the Apache version on the server is reported as vulnerable to an exploit from a few months ago. When she checks to see if she is missing patches, Apache is fully patched. What has occurred?",
    "answers": [
      "A false positive",
      "An automatic update failure",
      "A false negative",
      "An Apache version mismatch"
    ],
    "correct": 0,
    "explanation": "This is an example of a false positive. A false positive can cause a vulnerability to show that was not actually there. This sometimes happens when a patch or fix is installed but the application does not change in a way that shows the change, and it has been an issue with updates where the version number is the primary check for a vulnerability. When a vulnerability scanner sees a vulnerable version number but a patch has been installed that does not update it, a false positive report can occur. A false negative would report a patch or fix where there was actually a vulnerability. Automatic updates were not mentioned, nor was a specific Apache version."
  },
  {
    "id": "SEC-D4-008",
    "domain": "4.0",
    "question": "Telnet, RSH, and FTP are all examples of what?",
    "answers": [
      "File transfer protocols",
      "Unsecure protocols",
      "Core protocols",
      "Open ports"
    ],
    "correct": 1,
    "explanation": "All of these protocols are unsecure. FTP has been replaced by secure versions in some uses (SFTP/FTPS), whereas Telnet has been superseded by SSH in modern applications. RSH is outmoded and should be seen only on truly ancient systems. If you find a system or device exposing these protocols, you will need to dig in further to determine why they are exposed and how they can be protected if they must remain open for a legitimate reason."
  },
  {
    "id": "SEC-D4-009",
    "domain": "4.0",
    "question": "What term describes data that is collected from publicly available sources that can be used in an intelligence context?",
    "answers": [
      "OPSEC",
      "OSINT",
      "STIX",
      "IntCon"
    ],
    "correct": 1,
    "explanation": "OSINT, or open source intelligence, is intelligence information obtained from public sources like search engines, websites, domain name registrars, and a host of other locations. OPSEC, or operational security, refers to habits such as not disclosing unnecessary information. STIX is the Structured Threat Intelligence Exchange protocol, and IntCon was made up for this question."
  },
  {
    "id": "SEC-D4-010",
    "domain": "4.0",
    "question": "Patrick has subscribed to a commercial threat intelligence feed that is only provided to subscribers who have been vetted and who pay a monthly fee. What industry term is used to refer to this type of threat intelligence?",
    "answers": [
      "Proprietary threat intelligence",
      "OSINT",
      "ELINT",
      "Corporate threat intelligence"
    ],
    "correct": 0,
    "explanation": "Proprietary, or closed threat, intelligence is threat intelligence that is not openly available. OSINT, or open source threat intelligence, is freely available. ELINT is a military term for electronic and signals intelligence. Corporate threat intelligence was made up for this question."
  },
  {
    "id": "SEC-D4-011",
    "domain": "4.0",
    "question": "Susan receives $10,000 for reporting a vulnerability to a vendor who participates in a program to identify issues. What term is commonly used to describe this type of payment?",
    "answers": [
      "A ransom",
      "A zero-day disclosure",
      "A bug bounty",
      "A payday"
    ],
    "correct": 2,
    "explanation": "Bug bounties are increasingly common and can be quite lucrative. Bug bounty websites match vulnerability researchers with organizations that are willing to pay for information about issues with their software or services. Ransoms are sometimes demanded by attackers, but this is not a ransom since it was voluntarily paid as part of a reward system. A zero-day disclosure happens when a vulnerability is disclosed and the organization has not been previously informed and allowed to fix the issue. Finally, you might feel like $10,000 is a payday, but the term is not used as a technical term and doesn't appear on the exam."
  },
  {
    "id": "SEC-D4-012",
    "domain": "4.0",
    "question": "Ben runs a vulnerability scan using up-to-date definitions for a system that he knows has a vulnerability in the version the web server is running. The vulnerability scan does not show that issue when he reviews the report. What has Ben encountered?",
    "answers": [
      "A silent patch",
      "A missing vulnerability update",
      "A false negative",
      "A false positive"
    ],
    "correct": 2,
    "explanation": "A false negative occurs with a vulnerability scanning system when a scan is run and an issue that exists is not identified. This can be because of a configuration option, a firewall, or other security setting or because the vulnerability scanner is otherwise unable to detect the issue. A missing vulnerability update might be a concern if the problem did not specifically state that the definitions are fully up-to-date. Unless the vulnerability is so new that there is no definition, a missing update shouldn't be the issue. Silent patching refers to a patching technique that does not show messages to users that a patch is occurring. A false positive would have caused a vulnerability to show that was not actually there. This sometimes happens when a patch or fix is installed but the application does not change in a way that shows the change."
  },
  {
    "id": "SEC-D4-013",
    "domain": "4.0",
    "question": "Angela reviews bulletins and advisories to determine what threats her organization is likely to face. What type of activity is this associated with?",
    "answers": [
      "Incident response",
      "Threat hunting",
      "Penetration testing",
      "Vulnerability scanning"
    ],
    "correct": 1,
    "explanation": "Threat hunting can involve a variety of activities such as intelligence fusion, combining multiple data sources and threat feeds, and reviewing advisories and bulletins to remain aware of the threat environment for your organization or industry. Incident response happens once an incident has occurred, penetration testing tests security from an attacker's perspective, and vulnerability scanning seeks to identify vulnerabilities using testing through technical means like connecting to services or checking local version information."
  },
  {
    "id": "SEC-D4-014",
    "domain": "4.0",
    "question": "Frank is using the cloud hosting service's web publishing service rather than running his own web servers. Where will Frank need to look to review his logs to see what types of traffic his application is creating?",
    "answers": [
      "Syslog",
      "Apache logs",
      "The cloud service's web logs",
      "None of the above"
    ],
    "correct": 2,
    "explanation": "Since Frank is using the cloud service provider's web services, he will need to review the logs that they capture. If he has not configured them, he will need to do so, and he will then need a service or capability to analyze them for the types of traffic he is concerned about. Syslog and Apache logs are both found on a traditional web host, and they would be appropriate if Frank was running his own web servers in the infrastructure-as-a-service (IaaS) environment."
  },
  {
    "id": "SEC-D4-015",
    "domain": "4.0",
    "question": "The following graphic shows a report from an OpenVAS vulnerability scan. What should Charles do first to determine the best fix for the vulnerability shown?",
    "answers": [
      "Disable PHP-CGI.",
      "Upgrade PHP to version 5.4.",
      "Review the vulnerability descriptions in the CVEs listed.",
      "Disable the web server."
    ],
    "correct": 2,
    "explanation": "Although it may be tempting to immediately upgrade, reading and understanding the CVEs for a vulnerability is a good best practice. Once Charles understands the issue, he can then remediate it based on the recommendations for that specific problem. Disabling PHP or the web server would break the service, and in this case, only newer versions of PHP than 5.4 have the patch Charles needs.",
    "image": "questions/img/domain4-q015.jpg",
    "imageAlt": "A screenshot of a page titled, result, P H {-C G I-based setups vulnerability when parsing query string parameters from p h p files. It displays the following information in six columns. Vulnerability, severity, Q o D, host, location, and actions."
  },
  {
    "id": "SEC-D4-016",
    "domain": "4.0",
    "question": "Ian runs a vulnerability scan, which notes that a service is running on TCP port 8080. What type of service is most likely running on that port?",
    "answers": [
      "SSH",
      "RDP",
      "MySQL",
      "HTTP"
    ],
    "correct": 3,
    "explanation": "Although 80 and 443 are the most common HTTP ports, it is common practice to run additional web servers on port 8080 when a nonstandard port is needed. SSH would be expected to be on port 22, RDP on 3389, and MySQL on 3306."
  },
  {
    "id": "SEC-D4-017",
    "domain": "4.0",
    "question": "Carolyn runs a vulnerability scan of a network device and discovers that the device is running services on TCP ports 22 and 443. What services has she most likely discovered?",
    "answers": [
      "Telnet and a web server",
      "FTP and a Windows file share",
      "SSH and a web server",
      "SSH and a Windows file share"
    ],
    "correct": 2,
    "explanation": "A network device running SSH on port 22 and a web server on TCP port 443 is a very typical discovery when running a vulnerability scan. Without any demonstrated issues, Carolyn should simply note that she saw those services. Telnet runs on port 21, an unencrypted web server will run on TCP 80 in most cases, and Windows file shares use a variety of ports, including TCP ports 135-139 and 445."
  },
  {
    "id": "SEC-D4-018",
    "domain": "4.0",
    "question": "Susan is responsible for application development in her company. She wants to have all web applications tested before they are deployed live. She wants to use a test system that is identical to the live server. What is this called?",
    "answers": [
      "A production server",
      "A development server",
      "A test server",
      "A predeployment server"
    ],
    "correct": 2,
    "explanation": "A test server should be identical to the production server. This can be used for functional testing as well as security testing, before deploying the application. The production server is the live server. A development server would be one the programmers use during development of a web application, and predeployment server is not a term typically used in the industry."
  },
  {
    "id": "SEC-D4-019",
    "domain": "4.0",
    "question": "Alexandra is preparing to run automated security tests against the code that developers in her organization have completed. Which environment is she most likely to run them in if the next step is to deploy the code to production?",
    "answers": [
      "Development",
      "Test",
      "Staging",
      "Production"
    ],
    "correct": 2,
    "explanation": "Staging environments, sometimes called preproduction environments, are typically used for final quality assurance (QA) and validation before code enters the production environment as part of a deployment pipeline. Staging environments closely mirror production, allowing realistic testing and validation to be done. Development and test environments are used to create the code and for testing while it is being developed."
  },
  {
    "id": "SEC-D4-020",
    "domain": "4.0",
    "question": "Chris wants to limit who can use an API that his company provides and be able to log usage of the API uniquely to each organization that they provide access to. What solution is most often used to do this?",
    "answers": [
      "Firewalls with rules for each company's public IP address",
      "User credentials for each company",
      "API keys",
      "API passwords"
    ],
    "correct": 2,
    "explanation": "Application programming interface (API) keys are frequently used to meet this need. An API key can be issued to an individual or organization, and then use of the API can be tracked to each API key. If the API key is compromised or abused, it can be revoked and a new API key can be issued. Firewall rules written to use public IP addresses can be fragile, since IP addresses may change or organizations may have a broad range of addresses that may be in use, making it hard to validate which systems or users are using the API. Credentials, including passwords, are not as frequently used as API keys."
  },
  {
    "id": "SEC-D4-021",
    "domain": "4.0",
    "question": "Angela wants to ensure that IoT devices in her organization have a secure configuration when they are deployed and that they are ready for further configuration for their specific purposes. What term is used to describe these standard configurations used as part of her configuration management program?",
    "answers": [
      "A baseline configuration",
      "An essential settings list",
      "A preinstall checklist",
      "A setup guide"
    ],
    "correct": 0,
    "explanation": "Baseline configurations, per NIST 800-53: \"Baseline configurations serve as a basis for future builds, releases, and/or changes to information systems. Baseline configurations include information about information system components (e.g., standard software packages installed on workstations, notebook computers, servers, network components, or mobile devices; current version numbers and patch information on operating systems and applications; and configuration settings/parameters), network topology, and the logical placement of those components within the system architecture. Maintaining baseline configurations requires creating new baselines as organizational information systems change over time. Baseline configurations of information systems reflect the current enterprise architecture.\""
  },
  {
    "id": "SEC-D4-022",
    "domain": "4.0",
    "question": "Chris is following the CIS Windows Server 2022 benchmark and notices that it recommends that Computer Configuration\\Policies\\Administrative Templates\\Windows Components\\Search\\Allow indexing of encrypted files is set to disabled. What potential issue would this help to prevent?",
    "answers": [
      "Data leakage",
      "Denial of service",
      "Insecure service",
      "Dark web access"
    ],
    "correct": 0,
    "explanation": "Indexing encrypted files will mean that an unencrypted index is stored, potentially exposing the content of encrypted files. Disabling the indexing service for encrypted files helps to protect them. There is no denial-of-service scenario for this unless a vulnerability in the indexing service is discovered and none is mentioned. The service is not exposed via the network, and dark web access is not accomplished via indexing services."
  },
  {
    "id": "SEC-D4-023",
    "domain": "4.0",
    "question": "Elizabeth wants to implement a cloud-based authorization system. Which of the following protocols is she most likely to use for that purpose?",
    "answers": [
      "OpenID",
      "Kerberos",
      "SAML",
      "OAuth"
    ],
    "correct": 3,
    "explanation": "OAuth is a common authorization service used for cloud services. It allows users to decide which websites or applications to entrust their information to without requiring them to give them the user's password. OpenID is frequently paired with OAuth as the authentication layer. Kerberos is more frequently used for on-site authentication, and SAML is Security Assertion Markup Language."
  },
  {
    "id": "SEC-D4-024",
    "domain": "4.0",
    "question": "Tony wants to implement a biometric system for entry access in his organization. Which of the following systems is likely to be most accepted by members of his organization's staff?",
    "answers": [
      "Fingerprint",
      "Retina",
      "Iris",
      "Voice"
    ],
    "correct": 0,
    "explanation": "Fingerprint reader systems are the most widely accepted biometric systems in common use for entry access and other purposes today. Facial recognition systems are increasingly in use and are also likely to be more accepted by user populations based on their broad deployment in phones, but they are not listed as an option. Both retina and iris scans are less likely to be accepted, whereas voice systems are both relatively uncommon and more disruptive for frequent usage."
  },
  {
    "id": "SEC-D4-025",
    "domain": "4.0",
    "question": "What is the primary threat model against static codes used for multifactor authentication?",
    "answers": [
      "Brute force",
      "Collisions",
      "Theft",
      "Clock mismatch"
    ],
    "correct": 2,
    "explanation": "Static codes are typically recorded in a secure location, but if they are not properly secured, or are otherwise exposed, they can be stolen. Brute-force attempts should be detected and prevented by backoff algorithms and other techniques that prevent attacks against multifactor authentication systems. Collisions exist with hashing algorithms, not with static multifactor codes, and clock mismatch issues occur for time-based one-time password (TOTP) codes."
  },
  {
    "id": "SEC-D4-026",
    "domain": "4.0",
    "question": "Nadine's organization stores and uses sensitive information, including Social Security numbers. After a recent compromise, she has been asked to implement technology that can help prevent this sensitive data from leaving the company's systems and networks. What type of technology should Nadine implement?",
    "answers": [
      "Stateful firewalls",
      "OEM",
      "DLP",
      "SIEM"
    ],
    "correct": 2,
    "explanation": "The best answer from this list is DLP, or data loss prevention technology. DLP is designed to protect data from being exposed or leaking from a network using a variety of techniques and technology. Stateful firewalls are used to control which traffic is sent to or from a system, but will not detect sensitive data. OEM is an original equipment manufacturer, and security information and event management (SIEM) can help track events and incidents but will not directly protect data itself."
  },
  {
    "id": "SEC-D4-027",
    "domain": "4.0",
    "question": "Social login, the ability to use an existing identity from a site like Google, Facebook, or a Microsoft account, is an example of which of the following concepts?",
    "answers": [
      "Federation",
      "AAA",
      "Privilege creep",
      "Identity and access management"
    ],
    "correct": 0,
    "explanation": "Social login is an example of a federated approach to using identities. The combination of identity providers and service providers, along with authorization management, is a key part of federation. AAA (authentication, authorization, and accounting) is typically associated with protocols like RADIUS. Privilege creep occurs as staff members change jobs and their privileges are not adjusted to only match their current role. IAM is a broader set of identity and access management practices. Although IAM may be involved in federated identity, this question does not directly describe IAM."
  },
  {
    "id": "SEC-D4-028",
    "domain": "4.0",
    "question": "Charles has configured his multifactor system to require both a PIN and a password. How many effective factors does he have in place once he presents both of these and his username?",
    "answers": [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    "correct": 0,
    "explanation": "Although it may seem like Charles has presented two factors, in fact he has only presented two types of things he knows along with his identity. To truly implement a multifactor environment, he should use more than one of something you have, something you know, and something you are."
  },
  {
    "id": "SEC-D4-029",
    "domain": "4.0",
    "question": "Naomi is designing her organization's wireless network and wants to ensure that the design places access points in areas where they will provide optimum coverage. She also wants to plan for any sources of RF interference as part of her design. What should Naomi do first?",
    "answers": [
      "Contact the FCC for a wireless map.",
      "Conduct a site survey.",
      "Disable all existing access points.",
      "Conduct a port scan to find all existing access points."
    ],
    "correct": 1,
    "explanation": "A site survey is the process of identifying where access points should be located for best coverage and identifying existing sources of RF interference, including preexisting wireless networks and other devices that may use the same radio frequency spectrum. By conducting a site survey, Naomi can guide the placement of her access points as well as create a channel design that will work best for her organization."
  },
  {
    "id": "SEC-D4-030",
    "domain": "4.0",
    "question": "Charlene wants to provision her organization's standard set of marketing information to mobile devices throughout her organization. What MDM feature is best suited to this task?",
    "answers": [
      "Application management",
      "Remote wipe",
      "Content management",
      "Push notifications"
    ],
    "correct": 2,
    "explanation": "Mobile device management (MDM) suites often provide the ability to manage content on devices as well as applications. Using content management tools can allow Charlene to provision files, documents, and media to the devices that staff members in her organization are issued. Application management would be useful for apps. Remote wipe can remove data and applications from the device if it is lost or stolen, or an employee leaves the organization. Push notifications are useful when information needs to be provided to the device user."
  },
  {
    "id": "SEC-D4-031",
    "domain": "4.0",
    "question": "Denny wants to deploy antivirus for his organization and wants to ensure that it will stop the most malware. What deployment model should Denny select?",
    "answers": [
      "Install antivirus from the same vendor on individual PCs and servers to best balance visibility, support, and security.",
      "Install antivirus from more than one vendor on all PCs and servers to maximize coverage.",
      "Install antivirus from one vendor on PCs and from another vendor on the server to provide a greater chance of catching malware.",
      "Install antivirus only on workstations to avoid potential issues with server performance."
    ],
    "correct": 2,
    "explanation": "In this scenario, Denny specifically needs to ensure that he stops the most malware. In situations like this, vendor diversity is the best way to detect more malware, and installing a different vendor's antivirus (AV) package on servers like email servers and then installing a managed package for PCs will result in the most detections in almost all cases. Installing more than one AV package on the same system is rarely recommended, since this often causes performance issues and conflicts between the packages--in fact, at times AV packages have been known to detect other AV packages because of the deep hooks they place into the operating system to detect malicious activity!"
  },
  {
    "id": "SEC-D4-032",
    "domain": "4.0",
    "question": "Madhuri's web application converts numbers that are input into fields by specifically typing them and then applies strict exception handling. It also sets a minimum and maximum length for the inputs that it allows and uses predefined arrays of allowed values for inputs like months or dates. What term describes the actions that Madhuri's application is performing?",
    "answers": [
      "Buffer overflow prevention",
      "String injection",
      "Input validation",
      "Schema validation"
    ],
    "correct": 2,
    "explanation": "The application includes input validation techniques that are used to ensure that unexpected or malicious input does not cause problems with the application. Input validation techniques will strip out control characters, validate data, and perform a variety of other actions to clean input before it is processed by the application or stored for future use. This validation may help prevent buffer overflows, but other techniques described here are not used for buffer overflow prevention. String injection is actually something this helps to prevent, and schema validation looks at data to ensure that requests match a schema, but again this is a narrower description than the broad range of input validation occurring in the description."
  },
  {
    "id": "SEC-D4-033",
    "domain": "4.0",
    "question": "You're outlining your plans for implementing a wireless network to upper management. What wireless security standard should you adopt if you don't want to use enterprise authentication but want to provide secure authentication for users that doesn't require a shared password or passphrase?",
    "answers": [
      "WPA3",
      "WPA",
      "WPA2",
      "WEP"
    ],
    "correct": 0,
    "explanation": "WPA3 supports SAE, or simultaneous authentication of equals, providing a more secure way to authenticate that limits the potential for brute-force attacks and allows individuals to use different passwords. WPA is not as secure as WPA2, and WEP is the oldest, and least secure, wireless security protocol. WPA2 is not as secure as WPA3 but remains in use due to broad deployment."
  },
  {
    "id": "SEC-D4-034",
    "domain": "4.0",
    "question": "You are the chief security officer (CSO) for a large company. You have discovered malware on one of the workstations. You are concerned that the malware might have multiple functions and might have caused more security issues with the computer than you can currently detect. What is the best way to test this malware?",
    "answers": [
      "Leave the malware on that workstation until it is tested.",
      "Place the malware in a sandbox environment for testing.",
      "It is not important to analyze or test it; just remove it from the machine.",
      "Place the malware on a honeypot for testing."
    ],
    "correct": 1,
    "explanation": "The correct answer is to use a sandboxed environment to test the malware and determine its complete functionality. A sandboxed system could be an isolated virtual machine (VM) or an actual physical machine that is entirely isolated from the network. Leaving the malware on a production system is never the correct approach. You should test or analyze the malware to determine exactly what malware it is, allowing you to respond to the threat properly. A honeypot is used for luring and trapping attackers, not for testing malware."
  },
  {
    "id": "SEC-D4-035",
    "domain": "4.0",
    "question": "Isaac is reviewing his organization's secure coding practices document for customer-facing web applications and wants to ensure that their input validation recommendations are appropriate. Which of the following is not a common best practice for input validation?",
    "answers": [
      "Ensure validation occurs on a trusted server.",
      "Validate all client-supplied data before it is processed.",
      "Validate expected data types and ranges.",
      "Ensure validation occurs on a trusted client."
    ],
    "correct": 3,
    "explanation": "Isaac knows that trusting client systems to be secure is not a good idea, and thus ensuring that validation occurs on a trusted client is not an appropriate recommendation. Ensuring that validation occurs on a trusted server, that client data is validated, and that data types and ranges are reasonable are all good best practices for him to recommend."
  },
  {
    "id": "SEC-D4-036",
    "domain": "4.0",
    "question": "Isaac wants to prevent corporate mobile devices from being used outside of his company's buildings and corporate campus. What mobile device management (MDM) capability should he use to allow this?",
    "answers": [
      "Patch management",
      "IP filtering",
      "Geofencing",
      "Network restrictions"
    ],
    "correct": 2,
    "explanation": "Isaac can configure a geofence that defines his corporate buildings and campus. He can then set up a geofence policy that will only allow devices to work while they are inside that geofenced area. Patch management, IP filtering, and network restrictions are not suitable solutions for this."
  },
  {
    "id": "SEC-D4-037",
    "domain": "4.0",
    "question": "Sophia wants to test her company's web application to see if it is handling business logic properly. Which testing method would be most effective for this?",
    "answers": [
      "Static code analysis",
      "Fuzzing",
      "Baselining",
      "Version control"
    ],
    "correct": 0,
    "explanation": "Static code analysis can help identify business logic issues by leveraging expert knowledge and understanding of the business process and logic involved. Fuzzing is a technique whereby the tester intentionally enters incorrect values into input fields to see how the application will handle it but doesn't directly test business logic. Baselining is the process of establishing security standards, and version control simply tracks changes in the code--it does not test the code."
  },
  {
    "id": "SEC-D4-038",
    "domain": "4.0",
    "question": "Endpoint detection and response has three major components that make up its ability to provide visibility into endpoints. Which of the following is not one of those three parts?",
    "answers": [
      "Data search",
      "Malware analysis",
      "Data exploration",
      "Suspicious activity detection"
    ],
    "correct": 1,
    "explanation": "Endpoint detection and response (EDR) focuses on identifying anomalies and issues, but it is not designed to be a malware analysis tool. Instead, the ability to search and explore data, identify suspicious activities, and coordinate responses is what makes up an EDR tool."
  },
  {
    "id": "SEC-D4-039",
    "domain": "4.0",
    "question": "Carl has been asked to set up access control for a server. The requirements state that users at a lower privilege level should not be able to see or access files or data at a higher privilege level. What access control model would best fit these requirements?",
    "answers": [
      "MAC",
      "DAC",
      "RBAC",
      "SAML"
    ],
    "correct": 0,
    "explanation": "Mandatory access control (MAC) is the correct solution. It will not allow lower privileged users to even see the data at a higher privilege level. Discretionary access control (DAC) has each data owner configure their own security. Role-based access control (RBAC) could be configured to meet the needs, but it's not the best solution for these requirements. Security Assertion Markup Language (SAML) is not an access control model."
  },
  {
    "id": "SEC-D4-040",
    "domain": "4.0",
    "question": "Jack wants to deploy a network access control (NAC) system that will stop systems that are not fully patched from connecting to his network. If he wants to have full details of system configuration, antivirus version, and patch level, what type of NAC deployment is most likely to meet his needs?",
    "answers": [
      "Agentless, preadmission",
      "Agent-based, preadmission",
      "Agentless, postadmission",
      "Agent-based, postadmission"
    ],
    "correct": 1,
    "explanation": "An agent-based, preadmission system will provide greater insight into the configuration of the system using the agent, and using a preadmission model will allow the system configuration to be tested before the system is allowed to connect to the network. Agentless NAC uses scanning and/or network inventory techniques and will typically not have as deep a level of insight into the configuration and software versions running on a system. Postadmission systems make enforcement decisions based on what users do after they gain admission to a network, rather than prior to gaining admission, allowing you to quickly rule out two of these options."
  },
  {
    "id": "SEC-D4-041",
    "domain": "4.0",
    "question": "Eric wants to provide company-purchased devices, but his organization prefers to provide end users with choices among devices that can be managed and maintained centrally. What mobile device deployment model best fits this need?",
    "answers": [
      "BYOD",
      "COPE",
      "CYOD",
      "VDI"
    ],
    "correct": 2,
    "explanation": "CYOD, or choose your own device, allows users to choose a device that is corporate owned and paid for. Choices may be limited to set of devices, or users may be allowed to choose essentially any device depending on the organization's deployment decisions. BYOD allows users to bring their own device, whereas COPE, or corporate-owned, personally enabled, provides devices to users that they can then use for personal use. VDI uses a virtual desktop infrastructure as an access layer for any security model where specialized needs or security requirements may require access to remote desktop or application services."
  },
  {
    "id": "SEC-D4-042",
    "domain": "4.0",
    "question": "Claire is concerned about an attacker getting information regarding network devices and their configuration in her company. Which protocol should she implement that would be most helpful in mitigating this risk while providing management and reporting about network devices?",
    "answers": [
      "RADIUS",
      "TLS",
      "SNMPv3",
      "SFTP"
    ],
    "correct": 2,
    "explanation": "If Claire is using Simple Network Management Protocol (SNMP) to manage and monitor her network devices, she should make sure she is using SNMPv3 and that it is properly configured. SNMPv3 can provide information about the status and configuration of her network devices. Remote Authentication Dial-In User Service (RADIUS) might be used to authenticate to the network, but Transport Layer Security (TLS) and SSH File Transfer Protocol (SFTP) are not specifically used for the purposes described."
  },
  {
    "id": "SEC-D4-043",
    "domain": "4.0",
    "question": "Eric is responsible for his organization's mobile device security. They use a modern mobile device management (MDM) tool to manage a BYOD mobile device environment. Eric needs to ensure that the applications and data that his organization provides to users of those mobile devices remain as secure as possible. Which of the following technologies will provide him with the best security?",
    "answers": [
      "Storage segmentation",
      "Containerization",
      "Full-device encryption",
      "Remote wipe"
    ],
    "correct": 1,
    "explanation": "Containerization will allow Eric's company's tools and data to be run inside of an application-based container, isolating the data and programs from the self-controlled bring your own device (BYOD) devices. Storage segmentation can be helpful, but the operating system itself as well as the applications would remain a concern. Eric should recommend full-device encryption (FDE) as a security best practice, but encrypting the container and the data it contains can provide a reasonable security layer even if the device itself is not fully encrypted. Remote wipe is helpful if devices are lost or stolen, but the end user may not be okay with having the entire device wiped, and there are ways to work around remote wipes, including blocking cellular and Wi-Fi signals."
  },
  {
    "id": "SEC-D4-044",
    "domain": "4.0",
    "question": "Tara is concerned about staff in her organization sending email with sensitive information like customer Social Security numbers (SSNs) included in it. What type of solution can she implement to help prevent inadvertent exposures of this type of sensitive data?",
    "answers": [
      "FDE",
      "DLP",
      "S/MIME",
      "POP3S"
    ],
    "correct": 1,
    "explanation": "Data loss prevention (DLP) tools allow sensitive data to be tagged and monitored so that if a user attempts to send it, they will be notified, administrators will be informed, and if necessary, the data can be protected using encryption or other protection methods before it is sent. Full-disk encryption (FDE) would protect data at rest, and S/MIME and POP3S would protect mail being retrieved from a server but would not prevent the SSNs from being sent."
  },
  {
    "id": "SEC-D4-045",
    "domain": "4.0",
    "question": "Mason is responsible for security at a company that has traveling salespeople. The company has been using ABAC for access control to the network. Which of the following is an issue that is specific to ABAC and might cause it to incorrectly reject logins?",
    "answers": [
      "Geographic location.",
      "Wrong password.",
      "Remote access is not allowed by ABAC.",
      "Firewalls usually block ABAC."
    ],
    "correct": 0,
    "explanation": "Attribute-based access control (ABAC) looks at a group of attributes, in addition to the login username and password, to make decisions about whether or not to grant access. One of the attributes examined is the location of the person. Since the users in this company travel frequently, they will often be at new locations, and that might cause ABAC to reject their logins. Wrong passwords can certainly prevent login, but are not specific to ABAC. ABAC does not prevent remote access, and a firewall can be configured to allow, or prohibit, any traffic you wish."
  },
  {
    "id": "SEC-D4-046",
    "domain": "4.0",
    "question": "Darrell is concerned that users on his network have too many passwords to remember and might write down their passwords, thus creating a significant security risk. Which of the following would be most helpful in mitigating this issue?",
    "answers": [
      "Multifactor authentication",
      "SSO",
      "SAML",
      "LDAP"
    ],
    "correct": 1,
    "explanation": "Single sign-on (SSO) is designed specifically to address this risk and would be the most helpful. Users have only a single logon to remember; thus, they have no need to write down the password. OAuth (Open Authorization) is an open standard for token-based authentication and authorization on the Internet. It does not eliminate the use or need for multiple passwords. Multifactor authentication helps prevent risks due to lost passwords, but does not remove the need for multiple passwords by itself. Security Assertion Markup Language (SAML) and Lightweight Directory Access Protocol (LDAP) do not stop users from needing to remember multiple passwords."
  },
  {
    "id": "SEC-D4-047",
    "domain": "4.0",
    "question": "Frank is a security administrator for a large company. Occasionally, a user needs to access a specific resource that they don't have permission to access. Which access control methodology would be most helpful in this situation?",
    "answers": [
      "Mandatory access control (MAC)",
      "Discretionary access control (DAC)",
      "Role-based access control",
      "Rule-based access control"
    ],
    "correct": 3,
    "explanation": "Rule-based access control applies a set of rules to an access request. Based on the application of the rules, the user may be given access to a specific resource that they were not explicitly granted permission to. MAC, DAC, and role-based access control wouldn't give a user access unless that user has already been explicitly given that access."
  },
  {
    "id": "SEC-D4-048",
    "domain": "4.0",
    "question": "Oliver needs to explain the access control scheme used by both the Windows and Linux filesystems. What access control scheme do they implement by default?",
    "answers": [
      "Role-based access control",
      "Mandatory access control",
      "Rule-based access control",
      "Discretionary access control"
    ],
    "correct": 3,
    "explanation": "Both the Windows and Linux filesystems work based on a discretionary access control scheme where file and directory owners can determine who can access, change, or otherwise work with files under their control. Role-based access controls systems determine rights based on roles that are assigned to users. Rule-based access control systems use a series of rules to determine which actions can occur, and mandatory access control systems enforce control at the operating system level."
  },
  {
    "id": "SEC-D4-049",
    "domain": "4.0",
    "question": "Stefan just became the new security officer for a university. He is concerned that student workers who work late on campus could try to log in with faculty credentials. Which of the following would be most effective in preventing this?",
    "answers": [
      "Time-of-day restrictions",
      "Usage auditing",
      "Password length",
      "Credential management"
    ],
    "correct": 0,
    "explanation": "Restricting each faculty account so that it is only usable when that particular faculty member is typically on campus will prevent someone from logging in with that account after hours, even if they have the password. Usage auditing may detect misuse of accounts but will not prevent it. Longer passwords are effective security, but a longer password can still be stolen. Credential management is always a good idea, but it won't address this specific issue."
  },
  {
    "id": "SEC-D4-050",
    "domain": "4.0",
    "question": "Chloe has noticed that users on her company's network frequently have simple passwords made up of common words. Thus, they have weak passwords. How could Chloe best mitigate this issue?",
    "answers": [
      "Increase minimum password length.",
      "Have users change passwords more frequently.",
      "Require password complexity.",
      "Implement single sign-on (SSO)."
    ],
    "correct": 2,
    "explanation": "Password complexity requires that passwords have a mixture of uppercase letters, lowercase letters, numbers, and special characters. This would be the best approach to correct the problem described in the question. Longer passwords are a good security measure but will not correct the issue presented here. Changing passwords won't make those passwords any stronger, and SSO will have no effect on the strength of passwords."
  },
  {
    "id": "SEC-D4-051",
    "domain": "4.0",
    "question": "A companywide policy is being created to define various security levels. Which of the following systems of access control would use documented security levels like Confidential or Secret for information?",
    "answers": [
      "RBAC",
      "MAC",
      "DAC",
      "BAC"
    ],
    "correct": 1,
    "explanation": "Mandatory access control (MAC) is based on documented security levels associated with the information being accessed. Role-based access control (RBAC) is based on the role the user is placed in. Discretionary access control (DAC) lets the data owner set access control. BAC is not an access control model."
  },
  {
    "id": "SEC-D4-052",
    "domain": "4.0",
    "question": "Users in your network are able to assign permissions to their own shared resources. Which of the following access control models is used in your network?",
    "answers": [
      "DAC",
      "RBAC",
      "MAC",
      "ABAC"
    ],
    "correct": 0,
    "explanation": "Discretionary access control (DAC) allows data owners to assign permissions. Role-based access control (RBAC) assigns access based on the role the user is in. Mandatory access control (MAC) is stricter and enforces control at the OS level. Attribute-cased access control (ABAC) considers various attributes such as location, time, and computer in addition to username and password."
  },
  {
    "id": "SEC-D4-053",
    "domain": "4.0",
    "question": "Cynthia is preparing a new server for deployment, and her process includes turning off unnecessary services, setting security settings to match her organization's baseline configurations, and installing patches and updates. What is this process known as?",
    "answers": [
      "OS hardening",
      "Security uplift",
      "Configuration management",
      "Endpoint lockdown"
    ],
    "correct": 0,
    "explanation": "OS hardening is the process of securing an operating system by patching, updating, and configuring the operating system to be secure. Configuration management is the ongoing process of managing configurations for systems, rather than this initial security step. Both security uplift and endpoint lockdown were made up for this question."
  },
  {
    "id": "SEC-D4-054",
    "domain": "4.0",
    "question": "John is performing a port scan of a network as part of a security audit. He notices that the domain controller is using secure LDAP. Which of the following ports would lead him to that conclusion?",
    "answers": [
      "53",
      "389",
      "443",
      "636"
    ],
    "correct": 3,
    "explanation": "Secure Lightweight Directory Access Protocol (LDAPS) uses port 636 by default. DNS uses port 53, LDAP uses 389, and secure HTTP uses port 443."
  },
  {
    "id": "SEC-D4-055",
    "domain": "4.0",
    "question": "Which of the following access control methods grants permissions based on the user's position in the organization?",
    "answers": [
      "MAC",
      "RBAC",
      "DAC",
      "ABAC"
    ],
    "correct": 1,
    "explanation": "Role-based access control (RBAC) grants permissions based on the user's position within the organization. Mandatory access control (MAC) uses security classifications to grant permissions. Discretionary access control (DAC) allows data owners to set permissions. Attribute-based access control (ABAC) considers various attributes such as location, time, and computer, in addition to username and password."
  },
  {
    "id": "SEC-D4-056",
    "domain": "4.0",
    "question": "Gary is designing his cloud infrastructure and needs to provide a firewall-like capability for the virtual systems he is running. Which of the following cloud capabilities acts like a virtual firewall?",
    "answers": [
      "Security groups",
      "Dynamic resource allocation",
      "VPC endpoints",
      "Instance awareness"
    ],
    "correct": 0,
    "explanation": "Security groups are a virtual firewall for instances, allowing rules to be applied to traffic between instances. Dynamic resource allocation is a concept that allows resources to be applied as they are needed, including scaling up and down infrastructure and systems on the fly. Virtual private cloud (VPC) endpoints are a way to connect to services inside of a cloud provider without an Internet gateway. Finally, instance awareness is a concept that means that tools know about the differences between instances, rather than treating each instance in a scaling group as the same. This can be important during incident response processes and security monitoring for scaled groups, where resources may all appear identical without instance awareness."
  },
  {
    "id": "SEC-D4-057",
    "domain": "4.0",
    "question": "Henry is an employee at Acme Company. The company requires him to change his password every three months. He has trouble remembering new passwords, so he keeps switching between just two passwords. Which policy would be most effective in preventing this?",
    "answers": [
      "Password complexity",
      "Password history",
      "Password length",
      "Multifactor authentication"
    ],
    "correct": 1,
    "explanation": "If the system maintains a password history, that will prevent any user from reusing an old password. Password complexity and length are common security settings but would not prevent the behavior described. Multifactor authentication helps prevent brute-force attacks and reduces the potential impact of stolen passwords but would not help with this scenario."
  },
  {
    "id": "SEC-D4-058",
    "domain": "4.0",
    "question": "Tracy wants to limit when users can log in to a stand-alone Windows workstation. What should Tracy do to meet this requirement?",
    "answers": [
      "Set login time restrictions.",
      "Turn the system off automatically during hours it should not be used.",
      "Hire security guards to monitor the space.",
      "Disable remote login during the hours the system should not be used."
    ],
    "correct": 0,
    "explanation": "Setting login time restrictions is a common method to control when a system can be used. Turning off a system does not prevent it from being turned back on. Guards are expensive compared to a simple technical control limiting logins, and disabling remote login does not prevent local login."
  },
  {
    "id": "SEC-D4-059",
    "domain": "4.0",
    "question": "Lucas is looking for an XML-based open standard for exchanging authentication information. Which of the following would best meet his needs?",
    "answers": [
      "SAML",
      "OAuth",
      "RADIUS",
      "NTLM"
    ],
    "correct": 0,
    "explanation": "Security Assertion Markup Language (SAML) is an XML-based, open standard format for exchanging authentication and authorization data between parties. OAuth allows an end user's account information to be used by third-party services, without exposing the user's password. RADIUS is a remote access protocol. New Technology LAN Manager (NTLM) is not XML-based."
  },
  {
    "id": "SEC-D4-060",
    "domain": "4.0",
    "question": "Murali is preparing to acquire data from various devices and systems that are targets in a forensic investigation. Which of the following devices is the least volatile according to the order of volatility?",
    "answers": [
      "Backups",
      "CPU cache",
      "Local disk",
      "RAM"
    ],
    "correct": 0,
    "explanation": "Backups are considered to be the least volatile type of storage since they change at a much slower pace and, in fact, may be intentionally retained for long periods of time without changing. In this list, CPU cache will change the most frequently, then RAM, then local disk contents."
  },
  {
    "id": "SEC-D4-061",
    "domain": "4.0",
    "question": "What phase of the incident response process should be placed at point A in the following image?",
    "answers": [
      "Simulations",
      "Review",
      "Recovery",
      "Patching"
    ],
    "correct": 2,
    "explanation": "After eradication of the issue has been completed, recovery can begin. Recovery can include restoration of services and a return to normal operations.",
    "image": "questions/img/domain4-q061.jpg",
    "imageAlt": "A cycle diagram lists the steps involved in the incident response process. A, preparation, detection, analysis, containment, and eradication."
  },
  {
    "id": "SEC-D4-062",
    "domain": "4.0",
    "question": "Brent wants to use a tool to help him analyze malware and attacks and wants to cover a broad range of tactics and tools that are used by adversaries. Which of the following is broadly implemented in technical tools and covers techniques and tactics without requiring a specific order of operations?",
    "answers": [
      "The CIS Benchmark",
      "The Dark Web Analysis Project",
      "The MITRE ATT&CK framework",
      "The CVSS standard"
    ],
    "correct": 2,
    "explanation": "The MITRE ATT&CK framework focuses on techniques and tactics. CIS Benchmarks are security configuration baselines, the Dark Web Analysis Project was made up for this question, and the CVSS standard is a vulnerability scoring system and is not a useful framework for analyzing malware and attacks."
  },
  {
    "id": "SEC-D4-063",
    "domain": "4.0",
    "question": "Ted needs to preserve a server for forensic purposes. Which of the following should he not do?",
    "answers": [
      "Turn the system off to ensure that data does not change.",
      "Remove the drive while the system is running to ensure that data does not change.",
      "Leave the machine connected to the network so that users can continue to use it.",
      "All of the above."
    ],
    "correct": 3,
    "explanation": "To properly preserve the system, Ted needs to ensure that it does not change. Turning off the system will cause anything in memory to be lost, which may be needed for the investigation. Removing the drive while a system is running can cause data to be lost. Instead, live-imaging the machine and its memory may be required. Allowing users to continue to use a machine will result in changes, which can also damage Ted's ability to perform a forensic investigation."
  },
  {
    "id": "SEC-D4-064",
    "domain": "4.0",
    "question": "Jessica wants to review the network traffic that her Windows system has sent to determine if a file containing sensitive data was uploaded from the system. What Windows log file can she use to find this information?",
    "answers": [
      "The application log",
      "The network log",
      "The security log",
      "None of the above"
    ],
    "correct": 3,
    "explanation": "Windows does not log network traffic at a level of granularity that will show if a file has been uploaded. Basic traffic statistics can be captured, but without additional sensors and information-gathering capabilities, Jessica will not be able to determine if files are sent from a Windows system."
  },
  {
    "id": "SEC-D4-065",
    "domain": "4.0",
    "question": "What term is used to describe the documentation trail for control, analysis, transfer, and final disposition of evidence for digital forensic work?",
    "answers": [
      "Evidence log",
      "Paper trail",
      "Chain of custody",
      "Digital footprint"
    ],
    "correct": 2,
    "explanation": "The chain of custody in forensic activities tracks who has a device, data, or other forensic artifact at any time, when transfers occur, who performed analysis, and where the item, system, or device goes when the forensic process is done. Evidence logs may be maintained by law enforcement to track evidence that is gathered. Paper trail and digital footprint are not technical terms used for digital forensics."
  },
  {
    "id": "SEC-D4-066",
    "domain": "4.0",
    "question": "Nathan needs to know how many times an event occurred and wants to check a log file for that event. Which of the following grep commands will tell him how many times the event happened if each occurrence is logged independently in the logfile.txt log file, and uses a unique event ID, event101?",
    "answers": [
      "grep logfile.txt -n 'event101'",
      "grep -c 'event101' logfile.txt",
      "grep logfile.txt -c 'event101'",
      "grep -c event101 -i logfile.txt"
    ],
    "correct": 1,
    "explanation": "The -c flag for grep counts the number of occurrences for a given string in a file. The -n flag shows the matched lines and line numbers. Even if you're not sure about which flag is which, the syntax should help on a question like this. When using grep, the pattern comes before the filename, allowing you to rule out two of the options right away."
  },
  {
    "id": "SEC-D4-067",
    "domain": "4.0",
    "question": "Eric wants to determine how much bandwidth was used during a compromise and where the traffic was directed to. What technology can he implement before the event to help him see this detail and allow him to have an effective bandwidth monitoring solution?",
    "answers": [
      "A firewall",
      "NetFlow",
      "Packetflow",
      "A DLP"
    ],
    "correct": 1,
    "explanation": "Network flows using NetFlow or sFlow would provide the information that Eric wants, with details of how much traffic was used, when, and where traffic was directed. A firewall or data loss prevention (DLP) would not show the bandwidth detail, although a firewall may show the connection information for events. Packetflow was made up for this question and is not a technology used for this purpose."
  },
  {
    "id": "SEC-D4-068",
    "domain": "4.0",
    "question": "Naomi has acquired an image of a drive as part of a forensic process. She wants to ensure that the drive image matches the original. What should she create and record to validate this?",
    "answers": [
      "A third image to compare to the original and new image",
      "A directory listing to show that the directories match",
      "A photographic image of the two drives to show that they match",
      "A hash of the drives to show that their hashes match"
    ],
    "correct": 3,
    "explanation": "Hashing using MD5 or SHA1 is commonly used to validate that a forensic image matches the original drive. Many forensic duplicators automatically generate a hash of both drives when they complete the imaging process to ensure that there is a documentation chain for the forensic artifacts. A third image may be useful but does not validate this. Directory listings do not prove that drives match, and photos, though useful to document the drives and serial numbers, do not validate the contents of the drives."
  },
  {
    "id": "SEC-D4-069",
    "domain": "4.0",
    "question": "Ryan has been asked to run Nessus on his network. What type of tool has he been asked to run?",
    "answers": [
      "A fuzzer",
      "A vulnerability scanner",
      "A WAF",
      "A protocol analyzer"
    ],
    "correct": 1,
    "explanation": "Nessus is a popular vulnerability scanning tool. It is not a fuzzer, web application firewall (WAF), or protocol analyzer."
  },
  {
    "id": "SEC-D4-070",
    "domain": "4.0",
    "question": "Michelle wants to check for authentication failures on a RedHat Linux-based system. Where should she look for these event logs?",
    "answers": [
      "/var/log/auth.log",
      "/var/log/fail",
      "/var/log/events",
      "/var/log/secure"
    ],
    "correct": 3,
    "explanation": "Red Hat stores authentication log information in /var/log/secure instead of /var/log/auth.log used by Debian and Ubuntu systems. Knowing the differences between the major distributions can help speed up your forensic and incident investigations, and consistency is one of the reasons that organizations often select a single Linux distribution for their infrastructure whenever it is possible to do so."
  },
  {
    "id": "SEC-D4-071",
    "domain": "4.0",
    "question": "Nelson has discovered malware on one of the systems he is responsible for and wants to test it in a safe environment. Which of the following tools is best suited to that testing?",
    "answers": [
      "strings",
      "scanless",
      "Cuckoo",
      "Sn1per"
    ],
    "correct": 2,
    "explanation": "Cuckoo, or Cuckoo Sandbox, is a malware analysis sandbox that will safely run malware and then analyze and report on its behavior. strings is a command-line tool that retrieves strings from binary data. scanless is a tool described as a port scraper, which retrieves port information without running a port scan by using websites and services to run the scan for you. Sn1per is a pen test framework."
  },
  {
    "id": "SEC-D4-072",
    "domain": "4.0",
    "question": "Lucca wants to review metadata related to a JPEG file. What will he need to do to review it?",
    "answers": [
      "Change the JPEG to a GIF to see the metadata.",
      "Download the metadata file from the original author.",
      "Use a metadata viewer.",
      "Analyze the hash of the file."
    ],
    "correct": 2,
    "explanation": "Metadata viewing tools will allow Lucca to view the metadata that is embedded in the file itself. Metadata is not downloaded separately or available via the hash for a JPEG file."
  },
  {
    "id": "SEC-D4-073",
    "domain": "4.0",
    "question": "Jason is conducting a forensic investigation and has retrieved artifacts in addition to drives and files. What should he do to document the artifacts he has acquired?",
    "answers": [
      "Image them using dd and ensure that a valid MD5sum is generated.",
      "Take a picture of them, label them, and add them to the chain-of-custody documentation.",
      "Contact law enforcement to properly handle the artifacts.",
      "Engage legal counsel to advise him how to handle artifacts in an investigation."
    ],
    "correct": 1,
    "explanation": "When artifacts are acquired as part of an investigation, they should be logged and documented as part of the evidence related to the investigation. Artifacts could include a piece of paper with passwords on it, tools or technology related to an exploit or attack, smartcards, or any other element of an investigation."
  },
  {
    "id": "SEC-D4-074",
    "domain": "4.0",
    "question": "Joseph is writing a forensic report and wants to be sure he includes appropriate detail. Which of the following would not typically be included while discussing analysis of a system?",
    "answers": [
      "Validation of the system clock's time settings",
      "The operating system in use",
      "The methods used to create the image",
      "A picture of the person from whom the system was taken"
    ],
    "correct": 3,
    "explanation": "Forensic reports should include appropriate technical detail. Analysis of a system does not include a picture of the person from whom the system was acquired."
  },
  {
    "id": "SEC-D4-075",
    "domain": "4.0",
    "question": "Elaine wants to determine what websites a user has recently visited using the contents of a forensically acquired hard drive. Which of the following locations would not be useful for her investigation?",
    "answers": [
      "The browser cache",
      "The browser history",
      "The browser's bookmarks",
      "Session data"
    ],
    "correct": 2,
    "explanation": "The browser cache, history, and session information will all contain information from recently visited sites. Bookmarks may indicate sites that a user has visited at some point, but a bookmark can be added without visiting a site at all."
  },
  {
    "id": "SEC-D4-076",
    "domain": "4.0",
    "question": "Susan has discovered evidence of a compromise that occurred approximately five months ago. She wants to conduct an incident investigation but is concerned about whether the data will exist. What policy guides how long logs and other data are kept in most organizations?",
    "answers": [
      "The organization's data classification policy",
      "The organization's backup policy",
      "The organization's retention policy",
      "The organization's legal hold policy"
    ],
    "correct": 2,
    "explanation": "Organizations define retention policies for different data types and systems. Many organizations use 30-, 45-, 90-, 180-, or 365-day retention policies, with some information required to be kept longer due to law or compliance reasons. Susan's organization may keep logs for as little as 30 days depending on storage limitations and business needs. Data classification policies typically impact how data is secured and handled. Backup policies determine how long backups are retained and rotated and may have an impact on data if the logs are backed up, but backing up logs are a less common practice due to the space they take up versus the value of having logs backed up. Legal hold practices are common, but policies are less typically defined for legal holds since requirements are set by law."
  },
  {
    "id": "SEC-D4-077",
    "domain": "4.0",
    "question": "Alaina sets her antimalware solution to move infected files to a safe storage location without removing them from the system. What type of setting has she enabled?",
    "answers": [
      "Purge",
      "Deep-freeze",
      "Quarantine",
      "Retention"
    ],
    "correct": 2,
    "explanation": "A quarantine process or setting will preserve malicious or dangerous files and programs without allowing them to run. This allows defenders to retrieve them for further analysis as well as to return them to use if they are determined not to be malicious, or if the malicious components can be removed from needed files. Purging, deep-freezing, and retention are not terms used to describe this behavior or setting."
  },
  {
    "id": "SEC-D4-078",
    "domain": "4.0",
    "question": "A senior vice president in the organization that Chuck works in recently lost a phone that contained sensitive business plans and information about suppliers, designs, and other important materials. After interviewing the vice president, Chuck finds out that the phone did not have a passcode set and was not encrypted, and that it could not be remotely wiped. What type of control should Chuck recommend for his company to help prevent future issues like this?",
    "answers": [
      "Use containment techniques on the impacted phones.",
      "Deploy a DLP system.",
      "Deploy an MDM system.",
      "Isolate the impacted phones."
    ],
    "correct": 2,
    "explanation": "Chuck should recommend a mobile device management (MDM) system to ensure that organizational devices can be managed and protected in the future. Data loss prevention (DLP) will not stop a lost phone from being a potential leak of data, isolating the phones is not a realistic scenario for devices that will actually be used, nor is containment because the phone is out of the organization's control once lost."
  },
  {
    "id": "SEC-D4-079",
    "domain": "4.0",
    "question": "Charles wants to ensure that the forensic work that he is doing cannot be repudiated. How can he validate his attestations and documentation to ensure nonrepudiation?",
    "answers": [
      "Encrypt all forensic output.",
      "Digitally sign the records.",
      "Create a MD5 checksum of all images.",
      "All of the above."
    ],
    "correct": 1,
    "explanation": "The most important action Charles can take while working with his forensic artifacts to provide nonrepudiation is to digitally sign the artifacts and information that he is creating in his evidence records. Encrypting the output will ensure its confidentiality but will not provide nonrepudiation by itself. MD5 checksums for images are commonly gathered but must then be signed so that they can be validated to ensure they have not been modified."
  },
  {
    "id": "SEC-D4-080",
    "domain": "4.0",
    "question": "Megan needs to conduct a forensic investigation of a virtual machine (VM) hosted in a VMware environment as part of an incident response effort. What is the best way for her to collect the VM?",
    "answers": [
      "As a snapshot using the VMware built-in tools",
      "By using dd to copy the VM to an external drive",
      "By using dd to copy the VM to an internal drive",
      "By using a forensic imaging device after removing the server's drives"
    ],
    "correct": 0,
    "explanation": "The best way to capture a virtual machine from a running hypervisor is usually to use the built-in tools to obtain a snapshot of the system. Imaging tools are not typically capable of capturing machine state, and dd is not designed to capture VMs. Removing a server's drives can be challenging due to possible RAID and other specific server configuration items, and doing so might impact all other running VMs and services on the system."
  },
  {
    "id": "SEC-D4-081",
    "domain": "4.0",
    "question": "Which of the following groups is not typically part of an incident response team?",
    "answers": [
      "Law enforcement",
      "Security analysts",
      "Management",
      "Communications staff"
    ],
    "correct": 0,
    "explanation": "Law enforcement is not typically part of organizational incident response teams, but incident response teams often maintain a relationship with local law enforcement officers. Security analysts, management, and communication staff as well as technical experts are all commonly part of a core incident response team."
  },
  {
    "id": "SEC-D4-082",
    "domain": "4.0",
    "question": "Bob needs to block Secure Shell (SSH) traffic between two security zones. Which of the following Linux iptables firewall rules will block that traffic from the 10.0.10.0/24 network to the system the rule is running on?",
    "answers": [
      "iptables -A INPUT -p tcp --dport 22 -i eth0 -s 10.0.10.0/24 -j DROP",
      "iptables -D OUTPUT -p udp -dport 21 -i eth0 -s 10.0.10.255 -j DROP",
      "iptables -A OUTPUT -p udp --dport 22 -i eth0 -s 10.0.10.255 -j BLOCK",
      "iptables -D INPUT -p udp --dport 21 -I eth0 -s 10.0.10.0/24 -j DROP"
    ],
    "correct": 0,
    "explanation": "Even if you're not familiar with iptables, you can read through these rules and guess which rule includes the right details. DROP makes sense for a block, and you should know that SSH will be a TCP service on port 22."
  },
  {
    "id": "SEC-D4-083",
    "domain": "4.0",
    "question": "A Windows system that Maria is responsible for has been experiencing service outages. The outages correspond to processes run on another system in the datacenter, and Maria believes that unexpected traffic may be sent to the Windows system. Which of the following data sources should Maria use to best understand what is happening?",
    "answers": [
      "Perform a packet capture.",
      "Enable a network firewall.",
      "Use SIEM logs.",
      "Perform a forensic drive copy."
    ],
    "correct": 0,
    "explanation": "A packet capture will show attempts to connect to the service and will help Maria determine if there is unexpected traffic to the system. A network firewall could stop the traffic, but analyzing the actual traffic itself is best done with a packet capture. Logs may be useful as part of the analysis, but again, packet captures will provide more information. A forensic disk image is not useful for reviewing network traffic."
  },
  {
    "id": "SEC-D4-084",
    "domain": "4.0",
    "question": "Amanda's organization does not currently have an incident response plan. Which of the following reasons is not one she should present to management in support of creating one?",
    "answers": [
      "It will prevent incidents from occurring.",
      "It will help responders react appropriately under stress.",
      "It will prepare the organization for incidents.",
      "It may be required for legal or compliance reasons."
    ],
    "correct": 0,
    "explanation": "Incident response plans don't stop incidents from occurring, but they do help responders react appropriately and prepare the organization for incidents, and may be required for legal or compliance reasons."
  },
  {
    "id": "SEC-D4-085",
    "domain": "4.0",
    "question": "Which of the following scenarios is least likely to result in data recovery being possible?",
    "answers": [
      "A file is deleted from a disk.",
      "A file is overwritten by a smaller file.",
      "A hard drive is quick-formatted.",
      "A disk is degaussed."
    ],
    "correct": 3,
    "explanation": "Degaussing a drive uses strong magnetic fields to wipe it and is the least likely to result in recoverable data. Deleted files can often be recovered because only the file index information will be removed until that space is needed and is overwritten. Quick formats work in a similar way and will leave remnant data, and files that are overwritten by smaller files will also leave fragments of data that can be recovered and analyzed."
  },
  {
    "id": "SEC-D4-086",
    "domain": "4.0",
    "question": "Henry records a video of the removal of a drive from a system as he is preparing for a forensic investigation. What is the most likely reason for Henry to record the video?",
    "answers": [
      "To meet the order of volatility",
      "To establish guilt beyond a reasonable doubt",
      "To ensure data preservation",
      "To document the chain of custody and provenance of the drive"
    ],
    "correct": 3,
    "explanation": "Henry's most likely use for the video is to document the forensic process, part of the chain of custody and provenance of the forensic data he acquires. The order of volatility helps determine what devices or drives he would image first. There is no crime being committed, so establishing guilt is not relevant to this scenario, and the video will not ensure data is preserved on a drive during a forensic process."
  },
  {
    "id": "SEC-D4-087",
    "domain": "4.0",
    "question": "Charlene wants to set up a tool that can allow her to see all the systems a given IP address connects to and how much data is sent to that IP by port and protocol. Which of the following tools is not suited to meet that need?",
    "answers": [
      "IPFIX",
      "IPSec",
      "sFlow",
      "NetFlow"
    ],
    "correct": 1,
    "explanation": "IPSec is not a tool used to capture network flows. sFlow, NetFlow, and IPFIX are all used to capture network flow information, which will provide the information Charlene needs."
  },
  {
    "id": "SEC-D4-088",
    "domain": "4.0",
    "question": "Tools like PRTG and Cacti that monitor SNMP information are used to provide what type of information for an incident investigation?",
    "answers": [
      "Authentication logs",
      "Bandwidth monitoring",
      "System log information",
      "Email metadata"
    ],
    "correct": 1,
    "explanation": "PRTG and Cacti are both network monitoring tools that can provide bandwidth monitoring information. Bandwidth monitors can help identify exfiltration, heavy and abnormal bandwidth usage, and other information that can be helpful for both incident identification and incident investigations. If you encounter a question like this on the exam, even if you're not familiar with either tool, you can use your knowledge of what Simple Network Management Protocol (SNMP) is used for to identify which of the categories is most likely correct."
  },
  {
    "id": "SEC-D4-089",
    "domain": "4.0",
    "question": "The company Charles works for has recently had a stolen company cell phone result in a data breach. Charles wants to prevent future incidents of a similar nature. Which of the following mitigation techniques would be the most effective?",
    "answers": [
      "Enable FDE via MDM.",
      "A firewall change.",
      "A DLP rule.",
      "A new URL filter rule."
    ],
    "correct": 0,
    "explanation": "A variety of configuration changes could be pushed to mobile devices to help: setting passcodes, enabling full-disk encryption (FDE) on mobile devices via organizationally deployed mobile device management (MDM), or even preventing some sensitive files from being downloaded or kept on those devices could all help. Firewall rules, data loss prevention (DLP) rules, and URL filters will not prevent a stolen device from being accessed and the data being exposed."
  },
  {
    "id": "SEC-D4-090",
    "domain": "4.0",
    "question": "What incident response step is missing from point X in the following image?",
    "answers": [
      "Business continuity",
      "Containment",
      "Response",
      "Discovery"
    ],
    "correct": 1,
    "explanation": "The Security+ exam outline talks about seven incident response process steps: Preparation, Detection, Analysis, Containment, Eradication, Recovery, and Lessons Learned.",
    "image": "questions/img/domain4-q090.jpg",
    "imageAlt": "A cycle diagram lists the steps involved in the incident response process. Preparation, detection, analysis, X, eradication, recovery, and lessons learned."
  },
  {
    "id": "SEC-D4-091",
    "domain": "4.0",
    "question": "Jill has been asked to perform data recovery due to her forensic skills. What should she tell the person asking to perform data recovery to give her the best chance of restoring lost files that were accidentally deleted?",
    "answers": [
      "Immediately reboot using the reset switch to create a lost file memory dump.",
      "Turn off Secure Delete so that the files can be more easily recovered.",
      "Do not save any files or make any changes to the system.",
      "All of the above."
    ],
    "correct": 2,
    "explanation": "Jill wants the least possible changes to occur on the system, so she should instruct the user to not save any files or make any changes. Rebooting the system will not create a memory dump, and may cause new files to be written or changed if patches were waiting to install or other changes are set to occur during a reboot. Turning off Secure Delete or making other changes will not impact the files that were deleted prior to that setting change."
  },
  {
    "id": "SEC-D4-092",
    "domain": "4.0",
    "question": "Veronica has completed the recovery phase of her organization's incident response plan. What phase should she move into next?",
    "answers": [
      "Preparation",
      "Lessons learned",
      "Recovery",
      "Documentation"
    ],
    "correct": 1,
    "explanation": "The IR process used for the Security+ exam outline is Preparation, Detection, Analysis, Containment, Eradication, Recovery, and Lessons Learned. Veronica should move into the lessons learned phase."
  },
  {
    "id": "SEC-D4-093",
    "domain": "4.0",
    "question": "Michelle has been asked to sanitize a number of drives to ensure that sensitive data is not exposed when systems are removed from service. Which of the following is not a valid means of sanitizing hard drives?",
    "answers": [
      "Physical destruction",
      "Degaussing",
      "Quick-formatting the drives",
      "Zero-wiping the drives"
    ],
    "correct": 2,
    "explanation": "Quick formatting merely deletes file indexes rather than removing and overwriting files, making it inappropriate for sanitization. Physical destruction will ensure that the data is not readable, as will degaussing and zero wiping."
  },
  {
    "id": "SEC-D4-094",
    "domain": "4.0",
    "question": "Bart is investigating an incident, and needs to identify the creator of a Microsoft Office document. Where would he find that type of information?",
    "answers": [
      "In the filename",
      "In the Microsoft Office log files",
      "In the Windows application log",
      "In the file metadata"
    ],
    "correct": 3,
    "explanation": "Microsoft Office places information like the name of the creator of the file, editors, creation and change dates, and other useful information in the file metadata that is stored in each Office document. Bart can simply open the Office document to review this information, or he can use a forensic or file metadata tool to review it. Filenames may contain the creator's name, but this would only be if the creator included it. Microsoft Office does not create or maintain a log, and the application log for Windows does not contain this information."
  },
  {
    "id": "SEC-D4-095",
    "domain": "4.0",
    "question": "Nathaniel wants to allow Chrome through the Windows Defender firewall. What type of firewall rule change will he need to permit this?",
    "answers": [
      "Allow TCP 80 and 443 traffic from the system to the Internet.",
      "Add Chrome to the Windows Defender Firewall allowed applications.",
      "Allow TCP 80 and 443 traffic from the Internet to the system.",
      "All of the above."
    ],
    "correct": 1,
    "explanation": "Windows Defender Firewall operates on a per-application model and can filter traffic based on whether the system is on a trusted private network or a public network. Nathaniel should allow Chrome by name in the firewall, which will allow it to send traffic without needing to specify ports or protocols."
  },
  {
    "id": "SEC-D4-096",
    "domain": "4.0",
    "question": "What key forensic tool used to generate reports about what happened relies on correctly set system clocks to work properly?",
    "answers": [
      "Disk hashing",
      "Timelining",
      "Forensic disk acquisition",
      "File metadata analysis"
    ],
    "correct": 1,
    "explanation": "Building a timeline, particularly from multiple systems, relies on accurately set system clocks or adding a manually configured offset. Disk hashing and acquisition does not need an accurate system clock, and file metadata can be reviewed even without an accurate clock, although accurate clock information or knowing the offset can be useful for analysis."
  },
  {
    "id": "SEC-D4-097",
    "domain": "4.0",
    "question": "Valerie is writing her organization's forensic playbooks and knows that the state that she operates in has a data breach notification law. Which of the following key items is most likely to be influenced by that law?",
    "answers": [
      "Whether Valerie calls the police for forensic investigation help",
      "The maximum amount of time until she has to notify customers of sensitive data breaches",
      "The certification types and levels that her staff have to maintain",
      "The maximum number of residents that she can notify about a breach"
    ],
    "correct": 1,
    "explanation": "Data breach notification laws often build in a maximum length of time that can pass before notification is required. They also often include a threshold for notification, with a maximum number of exposed individuals before the state or other authorities must be notified. They do not include a maximum number of individuals who can be notified, nor do they typically have specific requirements about police involvement in forensic investigations or certification types or levels."
  },
  {
    "id": "SEC-D4-098",
    "domain": "4.0",
    "question": "As part of a breach response, Naomi discovers that Social Security numbers (SSNs) were sent in a spreadsheet via email by an attacker who gained control of a workstation at her company's headquarters. Naomi wants to ensure that more SSNs are not sent from her environment. What type of mitigation technique is most likely to prevent this while allowing operations to continue in as normal a manner as possible?",
    "answers": [
      "Antimalware installed at the email gateway",
      "A firewall that blocks all outbound email",
      "A DLP rule blocking SSNs in email",
      "An IDS rule blocking SSNs in email"
    ],
    "correct": 2,
    "explanation": "A data loss prevention (DLP) tool that can scan and review emails for SSN style data is the most effective tool listed here. Naomi may want to set the tool to block all emails with potential SSNs, and then review those emails manually to ensure that no further emails leave while allowing legitimate emails to pass through. An intrusion detection system (IDS) might look tempting as an answer, but an IDS can only detect, not stop, the traffic, which would allow the SSNs to exit the organization. Antimalware and firewalls will not stop this type of event."
  },
  {
    "id": "SEC-D4-099",
    "domain": "4.0",
    "question": "Troy wants to review metadata about an email he has received to determine what system or server the email was sent from. Where can he find this information?",
    "answers": [
      "In the email message's footer",
      "In the to: field",
      "In the email message's headers",
      "In the from: field"
    ],
    "correct": 2,
    "explanation": "Email headers contain a significant amount of metadata, including where the email was sent from. The from: field lists a sender but does not indicate where the email was actually sent from. The to: field lists who the email was sent to, and footers are not used to store this information for email."
  },
  {
    "id": "SEC-D4-100",
    "domain": "4.0",
    "question": "Isabelle wants to gather information about what systems a host is connecting to, how much traffic is sent, and similar details. Which of the following options would not allow her to perform that task?",
    "answers": [
      "IPFIX",
      "NetFlow",
      "NXLog",
      "sFlow"
    ],
    "correct": 2,
    "explanation": "NXLog is a log collection and centralization tool. IPFIX, NetFlow, and sFlow all gather data about network traffic, including source, destination, port, protocol, and amount of data sent to be collected."
  },
  {
    "id": "SEC-D4-101",
    "domain": "4.0",
    "question": "Valerie wants to check to see if a SQL injection attack occurred against her web application on a Linux system. Which log file should she check for this type of information?",
    "answers": [
      "The security log",
      "The DNS log",
      "The auth log",
      "The web server log"
    ],
    "correct": 3,
    "explanation": "SQL injection (SQLi) attempts are sent as HTTP or HTTPS requests to a web server, meaning that Valerie will be able to see the attacks in the web server log. Domain Name System (DNS) logs, if available, will not show these. Auth logs show logins, not web or SQL Server queries or requests. Unlike Windows, there is no security log file for Linux, although there is a secure log for some systems."
  },
  {
    "id": "SEC-D4-102",
    "domain": "4.0",
    "question": "Jean's company is preparing for litigation with another company that they believe has caused harm to Jean's organization. What type of legal action should Jean's lawyer take to ensure that the company preserves files and information related to the legal case?",
    "answers": [
      "A chain-of-custody demand letter",
      "An e-discovery notice",
      "A legal hold notice",
      "An order of volatility"
    ],
    "correct": 2,
    "explanation": "A legal hold notice will inform the company that they must preserve and protect information related to the case. None of the other items are terms used in this process."
  },
  {
    "id": "SEC-D4-103",
    "domain": "4.0",
    "question": "What type of mitigation places a malicious file or application in a safe location for future review or study?",
    "answers": [
      "Containment",
      "Quarantine",
      "Isolation",
      "Deletion"
    ],
    "correct": 1,
    "explanation": "A quarantine setting will place a malicious or suspect file in a safe location and will keep it there until a set timeframe has passed or until an administrator takes action to deal with it. This can allow you to further analyze the file or to restore it if it was an incorrect identification or if the file is needed for another purpose. Containment is used to limit the extent of an incident or attack, isolation keeps a system or device from connecting to or accessing others, and deleting a file wouldn't keep it around."
  },
  {
    "id": "SEC-D4-104",
    "domain": "4.0",
    "question": "What phase of the incident response process often involves adding firewall rules and patching systems to address the incident?",
    "answers": [
      "Preparation",
      "Detection",
      "Recovery",
      "Analysis"
    ],
    "correct": 2,
    "explanation": "The recovery phase often involves adding firewall rules and patching systems in addition to rebuilding systems. Although preparation may involve configuring firewall rules or regular patching, it does not do so in response to an incident. Detection attempts to identify events and issues, and analysis involves investigating the events."
  },
  {
    "id": "SEC-D4-105",
    "domain": "4.0",
    "question": "Tim wants to check the status of malware infections in his organization using the organization's security information and event management (SIEM) device. What SIEM dashboard will tell him about whether there are more malware infections in the past few days than normal?",
    "answers": [
      "The alerts dashboard",
      "The sensors dashboard",
      "The trends dashboard",
      "The bandwidth dashboard"
    ],
    "correct": 2,
    "explanation": "Tim should look at the trend information for malware detections to check to see if there are more infections being detected than during recent weeks. This can be a useful indicator of a change, due to a new malware technique or package; a successful attack that has resulted in staff members clicking malicious links or opening malicious emails; or other paths into the organization. Tim could then check with users whose systems reported the malware to see what had occurred. Alerts might show the infections but would not show the data over time as easily as trends. Sensors will show individual places data is gathered, and bandwidth dashboards can show useful information about which systems are using more or less bandwidth, but the trends dashboard remains the right place for Tim to look in this situation."
  },
  {
    "id": "SEC-D4-106",
    "domain": "4.0",
    "question": "Michelle has been asked to use the CIS benchmark for Windows as part of her system security process. What information will she be using?",
    "answers": [
      "Information on how secure Windows is in its default state",
      "A set of recommended security configurations to secure Windows",
      "Performance benchmark tools for Windows systems, including network speed and firewall throughput",
      "Vulnerability scan data for Windows systems provided by various manufacturers"
    ],
    "correct": 1,
    "explanation": "The Center for Internet Security (CIS) benchmarks provide recommendations for how to secure an operating system, application, or other covered technology. Michelle will find Windows-specific security configuration guidelines and techniques."
  },
  {
    "id": "SEC-D4-107",
    "domain": "4.0",
    "question": "All of your organization's traffic flows through a single connection to the Internet. Which of the following terms best describes this scenario?",
    "answers": [
      "Cloud computing",
      "Load balancing",
      "Single point of failure",
      "Virtualization"
    ],
    "correct": 2,
    "explanation": "A single point of failure (SPOF) is a single weakness that can bring down an entire system and prevent it from working. Cloud computing allows the delivery of hosted service over the Internet. Load balancing spreads traffic or other load between multiple systems or servers. Virtualization uses a system to host virtual machines that share the underlying resources such as RAM, hard drive, and CPU."
  },
  {
    "id": "SEC-D4-108",
    "domain": "4.0",
    "question": "Nina is tasked with putting radio frequency identification (RFID) tags on every new piece of equipment that enters her datacenter that costs more than $500. What type of organizational policy is most likely to include this type of requirement?",
    "answers": [
      "A change management policy",
      "An incident response policy",
      "An asset management policy",
      "An acceptable use policy"
    ],
    "correct": 2,
    "explanation": "Asset management policies typically include all stages of an asset's life cycle, and asset tags like those described are used to track assets in many organizations. Change management, incident response, and acceptable use policies do not require asset tagging."
  },
  {
    "id": "SEC-D4-109",
    "domain": "4.0",
    "question": "Megan is reviewing her organization's datacenter network diagram as shown in the following image. What should she note for point A on the diagram?",
    "answers": [
      "A wireless link",
      "A redundant connection",
      "A wired link",
      "A single point of failure"
    ],
    "correct": 3,
    "explanation": "The diagram shows a fully redundant internal network with pairs of firewalls, routers, and core switches, but with a single connection to the Internet. This means that Megan should consider how her organization would connect to the outside world if that link was severed or disrupted. There is no indication whether this is a wired or wireless link, and the image does not show a redundant link.",
    "image": "questions/img/domain4-q109.jpg",
    "imageAlt": "An architectural diagram includes the following. Internet, internet service provider, firewalls, routers, core switches, and edge switches."
  },
  {
    "id": "SEC-D4-110",
    "domain": "4.0",
    "question": "Juan's team is in charge of responding to potential phishing attacks and advertises an infosec@example.com email address to his organization to send examples of potential phishing attacks to. Which of the following is not a benefit Juan's team would get from automating the creation of tickets in their support tool based on these emails?",
    "answers": [
      "The ability to track whether they've been resolved",
      "Automated phishing prevention",
      "The ability to correlate multiple emails into a single event",
      "The ability to trigger additional actions"
    ],
    "correct": 1,
    "explanation": "Support tools typically require additional steps or integrations to take action on a ticket and a human is often involved to ensure that legitimate emails do not result in the creation of unwanted rules or responses. Juan's team could use the ticketing system to track whether emails are dealt with, to correlate them, and potentially to trigger additional actions."
  },
  {
    "id": "SEC-D4-111",
    "domain": "4.0",
    "question": "Valerie wants to implement an email security framework that will help to ensure that only authorized systems send email on behalf of her domains. Which of the following should she implement?",
    "answers": [
      "DKIM",
      "DMARC",
      "STP",
      "SPF"
    ],
    "correct": 3,
    "explanation": "The Sender Policy Framework (SPF) lists IP addresses of systems allowed to send email in DNS TXT records for a domain. DKIM (DomainKeys Identified Mail) validates a domain's identity using a public key pair, validating the authenticity of the sender. DMARC (domain-based message authentication, reporting, and conformance) controls how unauthenticated messages are handled by mailbox providers, including quarantining, rejecting, or rejecting messages. STP is not an email security framework."
  },
  {
    "id": "SEC-D4-112",
    "domain": "4.0",
    "question": "Jake is investigating a service outage and notices the following traffic using a Wireshark packet capture. Which of the following issues is most likely occurring?",
    "answers": [
      "An email phishing campaign",
      "A SQL injection attack",
      "A dropped network connection",
      "A denial-of-service attack"
    ],
    "correct": 3,
    "explanation": "The packet capture shows a high volume of SYN packets, indicating a potential SYN flood, a type of denial-of-service attack. There is no information to indicate SMTP traffic for a phishing campaign, nor is there HTTP traffic for SQL injection against an application. While SYN traffic is commonly seen when a connection is lost, this traffic is repeated at a rapid pace rather than a typical reconnection attempt.",
    "image": "questions/img/domain4-q112.jpg",
    "imageAlt": "A screenshot of a window listing the following in seven columns. Number, time, source, destination, protocol, length, and info."
  },
  {
    "id": "SEC-D4-113",
    "domain": "4.0",
    "question": "Gary wants to deploy a tool that will allow him to identify and effectively respond to ransomware that might target systems that his company owns. He knows that he is likely to need to identify threats based on behavior rather than just using signatures, and he wants to have a dashboard-style view of his data. What tool should Gary select to meet this need?",
    "answers": [
      "IPS",
      "NAC",
      "DLP",
      "EDR"
    ],
    "correct": 3,
    "explanation": "Endpoint detection and response (EDR) tools combine behavior-based detection capabilities with centralized dashboards and advanced response capabilities. Intrusion prevention systems (IPSs) can detect network threats but aren't well suited to detecting behaviors on endpoint systems. NAC (network access control) is used to limit who can connect to a network. Data loss prevention (DLP) systems monitor for data exfiltration as well as data that is sent both inadvertently and on purpose outside the organization that shouldn't be."
  },
  {
    "id": "SEC-D4-114",
    "domain": "4.0",
    "question": "Carl wants to test his organization's incident response process. He conducts a tabletop exercise for his security team. Which of the following best describes this type of exercise?",
    "answers": [
      "A scenario is introduced and each member of the team takes actions that they would use to respond to the scenario.",
      "Third-party penetration testers work with the security team to address issues they discovered during their penetration test.",
      "The security team meets to talk through what they would do in a given scenario and takes notes on what works and what doesn't.",
      "The organization's datacenter is manually forced to fail over to an alternate site to test the scenario's objectives."
    ],
    "correct": 2,
    "explanation": "Tabletop exercises involve teams sitting down to talk through an exercise. Teams don't perform actions or even simulate them, third-party penetration testers are not reviewing their data, and no actual fail overs occur."
  },
  {
    "id": "SEC-D4-115",
    "domain": "4.0",
    "question": "Michelle wants to determine why attackers were able to take her organization's web server cluster offline after an incident occurred. What process should she and her team follow to determine this?",
    "answers": [
      "Threat hunting",
      "Root cause analysis",
      "A lessons learned analysis",
      "Recovery"
    ],
    "correct": 1,
    "explanation": "Root cause analysis is a process used to determine the underlying cause of an issue such as why attackers were able to successfully take down Michelle's web server cluster. Threat hunting is used to proactively look for threats using a variety of techniques, including OSINT and leveraging indicators of compromise. Lessons learned processes look for takeaways from events and incidents to allow organizations to improve their processes and procedures. Recovery is part of the incident response process but focuses on restoring the organization to normal operation."
  },
  {
    "id": "SEC-D4-116",
    "domain": "4.0",
    "question": "Randy wants to harden mobile devices used by his organization. Which of the following is not a typical mobile device hardening step?",
    "answers": [
      "Disable Bluetooth.",
      "Use strong screen lock passwords.",
      "Install software updates.",
      "Jailbreak the device."
    ],
    "correct": 3,
    "explanation": "Jailbreaking is not a typical hardening process and is instead used to bypass device security to allow additional control of the device. While individuals may jailbreak devices, organizations rarely permit it. The NSA provides a guide to mobile device security practices at https://media.defense.gov/2021/Sep/16/2002855921/-1/ -1/0/MOBILE_DEVICE_BEST_PRACTICES_FINAL_V3%20-%20COPY. PDF, which includes many practices such as disabling Bluetooth, using strong passwords, and keeping device software up-to-date."
  },
  {
    "id": "SEC-D4-117",
    "domain": "4.0",
    "question": "Lucca wants to ensure that his organization's mobile device connections are secure. Which of the following connectivity options is the most secure choice?",
    "answers": [
      "WPA2 Personal",
      "WPA3 Personal",
      "WPA3 Enterprise",
      "WPA4 Enterprise"
    ],
    "correct": 2,
    "explanation": "WPA3 Enterprise is the most secure option. It provides for central authentication as well as encryption. WPA4 has not yet been released. WPA2 and WPA3 Personal are not centrally managed, giving Lucca's organization less control over who connects."
  },
  {
    "id": "SEC-D4-118",
    "domain": "4.0",
    "question": "The percentage of the value of an asset that is lost due to an incident or loss event is known as what?",
    "answers": [
      "Asset depreciation",
      "Exposure factor",
      "Annual loss event",
      "Asset valuation adjustment"
    ],
    "correct": 1,
    "explanation": "The EF (exposure factor) for an asset is the value of the asset that would be lost in the event of a loss or damage scenario. Depreciation is a financial term that writes down the cost of a capital item over a given lifespan; annualized loss expectancy is a risk-related term, not annual loss event; and asset valuation adjustment was made up for this question."
  },
  {
    "id": "SEC-D4-119",
    "domain": "4.0",
    "question": "Derek's organization has recently set up a notification process that sends a text message to system administrators when security exception log events occur on the systems they are responsible for. Unfortunately, Derek and his team have received dozens of alerts at all times of the day due to the log event happening for failed logins when users type their passwords incorrectly. What should Derek and his team do next to help with this?",
    "answers": [
      "Set alert thresholds.",
      "Engage in alert tuning.",
      "Disable the alerts.",
      "Move the alerts to email."
    ],
    "correct": 1,
    "explanation": "Derek's team needs to carefully consider what alerts should be sent, why, and how often. That will require alert tuning. Simply setting alert thresholds may miss critical events, disabling alerts will not achieve the goal of enabling this type of notification, and moving the alerts to email will typically result in a less timely response."
  },
  {
    "id": "SEC-D4-120",
    "domain": "4.0",
    "question": "Jill wants to configure her IPS to detect a SQL injection attack that has become increasingly common against an open source web application that her organization runs. What information would she need to create a signature for the attack?",
    "answers": [
      "The source IP address",
      "The SQL code",
      "The hash of the attack",
      "The source port"
    ],
    "correct": 1,
    "explanation": "Jill can build a signature if she has an example of the SQL code. IPS signatures require data to match against potential attack traffic. A source IP address would only match specific potential attackers instead of the many different potential sources. A hash of the attack would detect one specific version of the attack, but a SQL injection (SQLi) attack may have multiple versions or configurations. The source port will vary with each request and isn't useful in most cases."
  },
  {
    "id": "SEC-D4-121",
    "domain": "4.0",
    "question": "Ben's organization has hired a new HR supervisor, Jack. When Jack was hired, Ben was asked to provide Jack with the same rights and permissions as the other HR supervisor, Erin. What is the most important issue Ben should identify with this process if the organization wants to follow identity and access management best practices?",
    "answers": [
      "Jack's account should be provisioned based on his role, not on Erin's rights.",
      "Jack may not be senior enough to have access to the same systems as Erin does.",
      "Erin may work with a different staff than Jack does.",
      "Jack should not have access to Erin's files."
    ],
    "correct": 0,
    "explanation": "While all of these are potential problems, Jack's account should not be provisioned to match Erin. Instead, provisioning based on role is an IAM best practice. Jack's seniority, the staff he works with, and file access should all be determined by his role."
  },
  {
    "id": "SEC-D4-122",
    "domain": "4.0",
    "question": "Ian wants to deploy multifactor tokens to his organization. Which of the following provides the greatest security?",
    "answers": [
      "Hardware tokens",
      "Application-based tokens",
      "SMS multifactor",
      "Extended password length"
    ],
    "correct": 0,
    "explanation": "Hardware tokens provide the greatest security because they need to be physically present to be used. Application-based tokens are more secure than SMS in many cases because SMS can be redirected or accessed through SIM-swapping and other attacks. Extending password length does not provide a second factor and is the least secure of these options by far."
  },
  {
    "id": "SEC-D4-123",
    "domain": "4.0",
    "question": "Gurvinder wants to explain the advantages of investing in automating security workflows to his organization's leadership. Recent audit findings have shown that systems are not all fully patched and that settings may vary between systems using the same operating system. Which common benefit of automation should he emphasize with leadership?",
    "answers": [
      "Enforcing baselines",
      "Scaling in a secure manner",
      "Improving reaction time",
      "Automation's role as a workforce multiplier"
    ],
    "correct": 0,
    "explanation": "The lack of consistency could be addressed by enforcing baselines across the organization. Gurvinder should emphasize this, then explain the other common benefits of security automation, including scaling in a secure manner, improving reaction time, automation's impact as a workforce multiplier, efficiency, employee retention advantages, and the ability to more easily standardize infrastructure configurations."
  },
  {
    "id": "SEC-D4-124",
    "domain": "4.0",
    "question": "Jake wants to understand the root cause of a security incident. He knows a number of the events that occurred, but he wants to engage other staff members to define the root cause. What common root cause analysis (RCA) technique should he use?",
    "answers": [
      "The Five W's",
      "A fishbone diagram",
      "The Five Why's",
      "A recursion analysis"
    ],
    "correct": 2,
    "explanation": "The Five Why's process is well suited to interviews because it asks \"Why\" each time an answer is provided to get to a root cause. The Five W's are a common reference in journalism to who, what, when, where, and why--not a root cause analysis tool. Fishbone diagrams are commonly used for RCA, but are not as useful for an interview process. They're more likely to be used after the interview to see how answers and events fit together. Recursion analysis is not an RCA process."
  },
  {
    "id": "SEC-D4-125",
    "domain": "4.0",
    "question": "Amanda is testing her company's incident response process and has her staff perform actual recovery actions without impacting production to validate how long it would take to accomplish them. What type of event has she conducted?",
    "answers": [
      "A fail over test",
      "A simulation",
      "A plan review",
      "A tabletop exercise"
    ],
    "correct": 1,
    "explanation": "Amanda has conducted a simulation, or walk-through, where actual recovery actions are simulated to ensure that recovery plans will work as expected. A fail over test moves production to a backup environment like a hot site, and a plan review is just that--a review of the response plan. A tabletop exercise involves discussions about the scenario and what would be done without taking any actual action."
  },
  {
    "id": "SEC-D4-126",
    "domain": "4.0",
    "question": "Liam's company has been notified of impending legal action and has been told to place a legal hold on related items. What must Liam's company do?",
    "answers": [
      "Continue their normal operations, including data life-cycle-related activities.",
      "Identify data covered by the hold and preserve it, regardless of normal data life cycles or activities.",
      "Engage a law firm to preserve the data required by the legal hold.",
      "Contact law enforcement to allow them to gather the data required by the legal hold."
    ],
    "correct": 1,
    "explanation": "Legal holds require organizations and individuals to preserve data related to pending or active litigation, regardless of its normal data life cycle once the hold notice is received. This means that Liam needs to identify and preserve the data and that normal processes like wiping drives or reusing backup media may not be possible. It does not necessarily mean that Liam's company must engage a lawyer to preserve the data, and law enforcement is not typically involved in legal holds."
  },
  {
    "id": "SEC-D4-127",
    "domain": "4.0",
    "question": "Paul wants to integrate his organization's web application with common cloud identity providers like Google and Microsoft. What authentication standard should he select if he wants to maximize interoperability?",
    "answers": [
      "OAuth",
      "Kerberos",
      "LDAP",
      "Active Directory"
    ],
    "correct": 0,
    "explanation": "OAuth is an open standard widely supported by cloud identity providers. Kerberos is used for internal use rather than for external integrations; LDAP is used for some services but is no longer a common choice for this type of integration with cloud service providers compared to options like OAuth, SAML, and OpenID-based integrations; and Active Directory is used by Microsoft but is not as interoperable."
  },
  {
    "id": "SEC-D4-128",
    "domain": "4.0",
    "question": "Jim wants to ensure that users who are located in his organization's London office have access to the building. What type of access control scheme should he select to best fit this specific need?",
    "answers": [
      "Rule BAC",
      "ABAC",
      "Role BAC",
      "MAC"
    ],
    "correct": 1,
    "explanation": "Attribute-based access control (ABAC) provides access based on attributes like location, age, rank, or other attributes of a user. Rule-based access control uses defined rules to make access decisions. Role-based access control uses a user's role in an organization to make access control decisions, and mandatory access control (MAC) enforces access control using centralized control."
  },
  {
    "id": "SEC-D4-129",
    "domain": "4.0",
    "question": "Dane wants to implement passwordless authentication for his organization. What type of device should he issue to his users to support this type of authentication?",
    "answers": [
      "A password manager",
      "An RFID card",
      "A security key",
      "A biometric token"
    ],
    "correct": 2,
    "explanation": "Security keys are commonly used for passwordless authentication since they can provide both a physical token and cryptographic login credentials that are unlocked using a password, fingerprint reader, or camera. A password manager does not provide this but does securely store and manage passwords. RFID cards are simply something you have, and biometrics are typically not tokens--they're data stored to match a user's biometric signature."
  },
  {
    "id": "SEC-D4-130",
    "domain": "4.0",
    "question": "Ensuring that inetd services like echo, time, rsh, and telnet are not enabled are all examples of what type of action?",
    "answers": [
      "Preventing SQL injection",
      "Hardening a Linux system",
      "Hardening a Windows system",
      "Patching insecure services"
    ],
    "correct": 1,
    "explanation": "Older, insecure services like chargen, daytime, echo, time, rsh, and telnet are all managed by inetd in Linux distributions. Disabling these services is a common item in security hardening benchmarks like the CIS benchmarks. These services are not Windows services, they are not SQL-related, and disabling them is not a type of patching."
  },
  {
    "id": "SEC-D4-131",
    "domain": "4.0",
    "question": "What mobile device deployment model provides the least control for the organization and leaves the end user with the greatest choice?",
    "answers": [
      "BYOD",
      "COPE",
      "CYOD",
      "COBO"
    ],
    "correct": 0,
    "explanation": "Bring your own device (BYOD) leaves the choice of device in the hands of the end user. Since the device is the end user's device, it often means that the organization has less, if any, control over the device. Corporate-owned, personally enabled (COPE) allows users to use organizationally owned devices for their own use. Choose your own device (CYOD) lets users choose a device that the organization owns. COBO, or company-owned, business-only, is a model that only allows business use of business-provided devices."
  },
  {
    "id": "SEC-D4-132",
    "domain": "4.0",
    "question": "Akio has set the Secure Cookie attribute as part of her web application's process for sending new cookies to users. What does this attribute do?",
    "answers": [
      "It encrypts the cookie's content when it is stored.",
      "It stores the cookie on the server instead of on the remove device.",
      "It removes the cookie after it has been used.",
      "It requires that the cookie be sent only via HTTPS."
    ],
    "correct": 3,
    "explanation": "The Secure Cookie attribute is intended to keep cookies secure in transit. That means that it requires secure cookies be sent only via HTTPS. It does not encrypt the cookie at rest, store it on the server instead of the remote system, nor does it remove the cookie after it has been used."
  },
  {
    "id": "SEC-D4-133",
    "domain": "4.0",
    "question": "Helen wants to sign her code. What will the output of code signing be?",
    "answers": [
      "An encrypted copy of the code using her private key",
      "A signed hash of the software using her private key",
      "A signed hash of the software using her public key",
      "An encrypted copy of the code using her public key"
    ],
    "correct": 1,
    "explanation": "Code signing uses the signing organization or individual's private key to sign a hash of the code. This allows the code to be verified using the organization's or individual's public key. Signing code does not involve encrypting it."
  },
  {
    "id": "SEC-D4-134",
    "domain": "4.0",
    "question": "Naomi's organization has recently acquired another company. Naomi is concerned about asset tracking and inventory because the acquired company does not have an inventory of their systems and devices. What major security concern should she express about this from a hardware asset management perspective?",
    "answers": [
      "There may not be an appropriate hardware life-cycle process.",
      "Manufacturer support may not be possible without an inventory.",
      "There is no way to know if systems are missing.",
      "Vulnerability scans may not be accurate without an inventory."
    ],
    "correct": 2,
    "explanation": "Without an inventory, organizations may misplace, lose, or even have devices stolen. That may result in data breaches or simply loss of assets. A hardware life cycle process is an operational concern; manufacturer support is typically tied to individual devices; and vulnerability scans are possible without an inventory, but Naomi may not know what the device itself is until she physically locates it."
  },
  {
    "id": "SEC-D4-135",
    "domain": "4.0",
    "question": "As part of his CI/CD pipeline process, Felix reviews source code manually to identify any flaws or security concerns. What type of process is Felix following?",
    "answers": [
      "Dynamic analysis",
      "Agile code development",
      "Static analysis",
      "Internal review"
    ],
    "correct": 2,
    "explanation": "Static analysis processes for code involve reviewing the source code itself. Dynamic analysis processes use running code. Agile is a project management framework, and internal review is not a term used to describe this."
  },
  {
    "id": "SEC-D4-136",
    "domain": "4.0",
    "question": "As part of his research, Pedro uses a TOR browser to access threat actors' sites. He is able to see information about recent breaches and can download data dumps provided by the threat actors. What information source is Pedro using?",
    "answers": [
      "The dark web",
      "An information-sharing organization",
      "Proprietary information",
      "A threat feed"
    ],
    "correct": 0,
    "explanation": "Sites accessible using TOR are considered part of the dark web. Information-sharing organizations like ISACs share information in an industry vertical or among other organizations that participate. Proprietary information is provided by vendors, typically as part of a contract or service. Threat feeds may be public or private and provide information about threats in a digestible format for use with security tools."
  },
  {
    "id": "SEC-D4-137",
    "domain": "4.0",
    "question": "Alaina has completed the eradication and recovery steps of the incident response process. What step commonly comes after these two phases?",
    "answers": [
      "A lessons learned session",
      "Detection",
      "Training",
      "A tabletop exercise"
    ],
    "correct": 0,
    "explanation": "A lessons learned session is commonly conducted at the end of an incident response process. Once eradication and recovery are complete, incident response processes are typically over and the response effort can be reviewed. The lessons learned are then leveraged as part of the preparation process to be ready for the next incident. That may involve more training, tabletop exercises, or additional detection methods."
  },
  {
    "id": "SEC-D4-138",
    "domain": "4.0",
    "question": "Lucca knows that the CVSS environmental score is made up of three components, including an impact metric. What three components does he need to consider as part of the impact metric score?",
    "answers": [
      "Confidentiality, integrity, and availability",
      "Network, disk, and memory",
      "Severity, likelihood, and impact",
      "Probability, impact, and cost"
    ],
    "correct": 0,
    "explanation": "The CVSS environmental score's impact metric takes into account confidentiality, integrity, and availability risks, with each rated between high, medium, and low levels. It is not a direct rating of network, disk, memory, severity, likelihood, probability, or cost."
  },
  {
    "id": "SEC-D4-139",
    "domain": "4.0",
    "question": "What tool is commonly used to allow for measurement and monitoring of security settings to align with NIST 800-53 controls?",
    "answers": [
      "SAML",
      "CVE",
      "CVSS",
      "SCAP"
    ],
    "correct": 3,
    "explanation": "The Security Content Automation Protocol (SCAP) is frequently used to allow for monitoring and measurement of NIST 800-53-based controls. SAML is used for authorization and authentication, and CVE and CVSS are used to identify and rank vulnerabilities."
  },
  {
    "id": "SEC-D4-140",
    "domain": "4.0",
    "question": "Adam has implemented a WPA3 Enterprise network. What type of encryption will be used to protect data sent across the Wi-Fi connection?",
    "answers": [
      "AES",
      "3DES",
      "SHA-1",
      "SHA-256"
    ],
    "correct": 0,
    "explanation": "WPA3 Enterprise uses Advanced Encryption Standard (AES) and can use 128-, 192-, and 256-bit keys. It does not support 3DES, and both SHA-1 and SHA-256 are hashing algorithms."
  },
  {
    "id": "SEC-D4-141",
    "domain": "4.0",
    "question": "Tom wants to set up an authentication service for network devices. Which of the following is commonly used for authentication to enterprise network devices?",
    "answers": [
      "Kerberos",
      "SAML",
      "TKIP",
      "OpenID"
    ],
    "correct": 0,
    "explanation": "Kerberos is one of a small number of commonly used AAA protocols for network devices. SAML and OpenID are more commonly used for federated services, and TKIP is an encryption method."
  },
  {
    "id": "SEC-D4-142",
    "domain": "4.0",
    "question": "Ian wants to test embedded device web servers for potential security issues with the version of the web server software. What tool should he select to do this most effectively across his large organization's network of IoT devices?",
    "answers": [
      "A WAF",
      "Pentesting",
      "A vulnerability scanner",
      "A port scanner"
    ],
    "correct": 2,
    "explanation": "Vulnerability scanners are perfectly suited to this type of task and can be configured to specifically test the web servers that are part of the IoT devices to increase the speed of the scan. A WAF is used to protect web applications and servers, not to assess vulnerabilities and security issues. Pentesting can identify these problems but is typically not fast or scalable. Port scanners identify open ports and service but don't identify vulnerabilities as effectively as a dedicated vulnerability scanning tool will."
  },
  {
    "id": "SEC-D4-143",
    "domain": "4.0",
    "question": "Tom wants his email servers to reject email that is not authenticated in a way to prevent spoofing. Which of the following should he implement?",
    "answers": [
      "SPF",
      "DMARC",
      "DKIM",
      "TLS"
    ],
    "correct": 1,
    "explanation": "DMARC, or Domain-based Message Authentication, Reporting, and Conformance, controls how unauthenticated messages are handled by mailbox providers, including quarantining, rejecting, or rejecting messages. SPF (Sender Policy Framework) lists IP addresses of systems allowed to send email in DNS TXT records for a domain. DomainKeys Identified Mail (DKIM) validates a domain's identity using a public key pair, validating the authenticity of the sender. TLS (Transport Layer Security) is used to encrypt data in motion."
  },
  {
    "id": "SEC-D4-144",
    "domain": "4.0",
    "question": "Wayne has identified a vulnerable server that is part of his organization's critical infrastructure but that is no longer supported by the vendor and for which no additional patches exist. Every time Wayne scans the server using his vulnerability scanner, the services on the device crash. What should Wayne do?",
    "answers": [
      "Report the server as vulnerable and suggest that it be replaced immediately.",
      "Disable the network connection on the device and isolate the server to protect it.",
      "Identify a third-party insurance provider who will insure the organization against potential issues with the server.",
      "Document an exemption, remove the server from automated scans, and implement compensating controls."
    ],
    "correct": 3,
    "explanation": "In most organization, Wayne's next steps should be to document the exemption due to the criticality of the server and its extenuating circumstances. Removing the server from scans will prevent it from being effectively impacted by a denial-of-service attack each time a scan occurs, but this also means that compensating controls should be implemented if possible. Reporting the server as vulnerable and suggesting it be replaced does not remediate the server or protect it, and will continue to allow it to fail based on future scans. Disabling the device's network connection will also cause a service outage. Insurance will not prevent service outages or protect the device."
  },
  {
    "id": "SEC-D4-145",
    "domain": "4.0",
    "question": "Valentine's organization wants to ensure that users who sign up for their web services are who they claim to be. As part of the process they ask for information like birth date, Social Security number, and previous addresses. What type of activity is Valentine's organization engaging in?",
    "answers": [
      "Provisioning user accounts",
      "Identity proofing",
      "Deprovisioning user accounts",
      "Social identity"
    ],
    "correct": 1,
    "explanation": "Identity proofing is used to validate a user's claim to an identity. Here, Valentine's company uses information that only a legitimate owner of that identity should have easy access to. Provisioning is the process of creating an account and providing it with appropriate resources and rights. Deprovisioning removes accounts and rights. Social identity is the process of using existing user accounts like those found through Facebook or Google to create accounts for existing users at other organizations like Valentine's."
  },
  {
    "id": "SEC-D4-146",
    "domain": "4.0",
    "question": "Sam has completed patching of a critical vulnerability. What step is often performed next to ensure that the patching occurred properly?",
    "answers": [
      "Noting false positives",
      "Rebooting the system",
      "Rescanning the system",
      "Performing an audit"
    ],
    "correct": 2,
    "explanation": "Organizations often immediately rescan a system after patching to ensure that the patching worked. While this isn't an absolutely certain means of validating the patch, it helps to quickly ensure that patching was effective across many machines. Noting false positives may occur if the patch was successful, but systems continue to show as vulnerable. Rebooting may be done but doesn't necessarily validate the patching installation's success, and performing an audit may be done but is a less common next step."
  },
  {
    "id": "SEC-D4-147",
    "domain": "4.0",
    "question": "Joan's organization has recently remediated issues in their credit card processing environment. If Joan wants to be able to attest to the security of the environment, what action might she need to take to prove the security of the environment to customers?",
    "answers": [
      "Have third-party auditors validate the remediation.",
      "Rescan the systems and document the differences between the scans.",
      "Rescan the systems and provide updated reports to customers.",
      "Allow customers to scan the systems to validate the changes."
    ],
    "correct": 0,
    "explanation": "Third-party audit documentation is a common practice for organizations that want to attest to their customers that they have a secure environment. Rescanning systems and providing vulnerability scans is not a common practice, nor is allowing customers to conduct their own scans of production systems."
  },
  {
    "id": "SEC-D4-148",
    "domain": "4.0",
    "question": "Alan wants to configure his firewall to allow Microsoft SQL traffic through to the database server from web application servers in a screened subnet design. What is the minimum set of ports that he should port to allow this?",
    "answers": [
      "TCP 3389 and 1433",
      "TCP 1433",
      "TCP 8080",
      "TCP 139 and 445"
    ],
    "correct": 1,
    "explanation": "TCP port 1433 is the minimum port requirement for a Microsoft SQL server connection. TCP 3389 is used for Remote Desktop Protocol (RDP). TCP 8080 is a common alternate port for web servers, and TCP 139 and 445 are used for SMB connections."
  },
  {
    "id": "SEC-D4-149",
    "domain": "4.0",
    "question": "Which of the following terms refers to the process of establishing a standard for security?",
    "answers": [
      "Baselining",
      "Security evaluation",
      "Hardening",
      "Normalization"
    ],
    "correct": 0,
    "explanation": "Baselining is the process of establishing a standard for security. A change from the original baseline configuration is referred to as baseline deviation. Security evaluations or audits check security but don't establish security standards. Hardening is the process of securing a given system, but it does not establish security standards. Normalization is the process of removing redundant entries from a database."
  },
  {
    "id": "SEC-D4-150",
    "domain": "4.0",
    "question": "Zhen's new organization has informed him that they used a COPE model for their mobile devices. What does this tell Zhen about what he can do with the device?",
    "answers": [
      "He can choose what device he uses, but the organization will own it.",
      "He will be provided with a device but can use it for reasonable personal use.",
      "He will be provided with a device and can only use it for business purposes.",
      "He will have to bring his own device but can use it for personal and business use."
    ],
    "correct": 1,
    "explanation": "COPE, or company-owned, personally enabled, models allow staff to use organizationally owned devices for reasonable personal use. CYOD, or choose your own device, allows users to pick their company-owned device from a list of approved devices. COBO, or company-owned, business-only, is just that--users can only use the devices for business purposes. BYOD asks users to bring their own device, often leaving organizations with limited or no control of the device."
  },
  {
    "id": "SEC-D4-151",
    "domain": "4.0",
    "question": "The Windows Task Manager can be used to identify malware through what technique?",
    "answers": [
      "Dynamic analysis",
      "Process auditing",
      "CVSS matching",
      "Vulnerability scanning"
    ],
    "correct": 1,
    "explanation": "Process auditing involves reviewing processes to identify unknown or unexpected processes. During incident response scenarios, this is often initially done via the Task Manager. Dynamic analysis is a code review process that uses running code. CVSS matching was made up for this question, and vulnerability scanning tests open services and doesn't involve the Task Manager."
  },
  {
    "id": "SEC-D4-152",
    "domain": "4.0",
    "question": "Ujama wants to deploy a network device that will allow him to use policy-based controls for email as well as active defenses against phishing attacks before email is delivered to his users. Which of the following devices is best suited to this purpose?",
    "answers": [
      "A web application firewall",
      "An email security gateway",
      "A DKIM appliance",
      "A DMARC appliance"
    ],
    "correct": 1,
    "explanation": "Email security gateways are appliances or software virtual appliances that provide anti-spam, anti-phishing, and other email security-related services. They're purpose-built to deliver exactly the capabilities that Ujama is looking for. A WAF (web application firewall) is used to protect web applications. DKIM and DMARC are both email security frameworks, but they're not implemented as appliances themselves."
  },
  {
    "id": "SEC-D4-153",
    "domain": "4.0",
    "question": "Allison wants to aggregate her logs and have them automatically correlated and reported on. What sort of tool should she acquire for her organization?",
    "answers": [
      "MDM",
      "A jump server",
      "SDN",
      "SIEM"
    ],
    "correct": 3,
    "explanation": "A SIEM (security information and event management) tool is designed to aggregate, analyze, correlate, alert on, and report on log entries. MDM (mobile device management) is used to manage mobile devices, jump servers provide access from less secure zones to more secure zones, and SDN is software-defined networking."
  },
  {
    "id": "SEC-D4-154",
    "domain": "4.0",
    "question": "Natasha's staff have been complaining about repetitive tasks that must be manually accomplished to secure endpoint devices, then they are deployed. What could Natasha ask her team to do to address this?",
    "answers": [
      "Leverage automation and scripting.",
      "Deploy fewer devices.",
      "Leverage baselines.",
      "Move devices to the cloud."
    ],
    "correct": 0,
    "explanation": "Leveraging automation and scripting to increase employee happiness and retention as well as improving efficiency and realizing time savings is a common strategy in situations like this. Deploying fewer devices only works if the organization needs fewer devices, baselines are most useful when paired with automation and scripting for deployment, and a physical endpoint device typically can't be moved to the cloud."
  },
  {
    "id": "SEC-D4-155",
    "domain": "4.0",
    "question": "Which of the following methods typically provides the greatest insight into vulnerabilities that exist on systems owned by a company?",
    "answers": [
      "Penetration tests",
      "Authenticated scans",
      "Unauthenticated scans",
      "Port scans"
    ],
    "correct": 1,
    "explanation": "Authenticated scans can identify vulnerabilities that are not visible to unauthenticated scans. Penetration testers may not be able to obtain access equivalent to authenticated scans, so an authenticated scan is more likely to provide detailed data. Port scans do not provide deep vulnerability data."
  },
  {
    "id": "SEC-D4-156",
    "domain": "4.0",
    "question": "Quarantine and isolation are both common options in what phase of the incident response process?",
    "answers": [
      "Detection",
      "Analysis",
      "Containment",
      "Eradication"
    ],
    "correct": 2,
    "explanation": "Quarantine and isolation are both commonly used in the containment phase of an incident to ensure that impacted systems are unable to impact other systems or parts of the organization. Files may also be quarantined to prevent further impact from malware. Detection and analysis typically do not involve quarantine and isolation, but quarantine and isolation may carry through into the eradication phase before systems are returned to normal operation."
  },
  {
    "id": "SEC-D4-157",
    "domain": "4.0",
    "question": "Rick is reviewing Linux system permissions and finds a directory that is set to: Who will have access to the directory to read the file?",
    "answers": [
      "The user",
      "The user and their group",
      "All users",
      "No users except root"
    ],
    "correct": 2,
    "explanation": "Linux permissions are read left to right for user, group, and other. With r's at each location, this means everyone can read the contents of the directory. Only the user can write and execute files in the directory.",
    "exhibit": "-rwxr--r--"
  },
  {
    "id": "SEC-D4-158",
    "domain": "4.0",
    "question": "Beena is granted access to her organization's customer information because she is a data steward; her access occurs between 8 a.m. and 5 p.m., and it is occurring from a known workstation that has passed security checks. What type of access control scheme is in use?",
    "answers": [
      "Rule-based access control",
      "Role-based access control",
      "Mandatory access control",
      "Attribute-based access control"
    ],
    "correct": 0,
    "explanation": "A set of rules that defines who can access the data has determined if Beena is granted access. Here, rules assess her role, the time of day, and the workstation's status. This is not accomplished using a classification or clearance system like MAC uses, and it does not rely on just an attribute like Beena's location or other information about her."
  },
  {
    "id": "SEC-D4-159",
    "domain": "4.0",
    "question": "Juan wants to use his IDS to detect anomalous behavior. What type of detection technique would most effectively help him identify unknown new attacks?",
    "answers": [
      "Trend analysis",
      "Signature-based detection",
      "IP-based detection",
      "Port-based detection"
    ],
    "correct": 0,
    "explanation": "Trend analysis is commonly used as part of behavior-based detections, which can help identify new attacks. Signatures require knowledge of existing attacks to match signatures. IP- and port-based detection is useful for known attacks but not typically useful for unknown attacks."
  },
  {
    "id": "SEC-D4-160",
    "domain": "4.0",
    "question": "Geenah wants to identify where Wi-Fi signals are weakest in her building. What should she create to visually display signal coverage and strength throughout her building?",
    "answers": [
      "A war walk",
      "A spectrum analysis",
      "An SSID plot",
      "A heatmap"
    ],
    "correct": 3,
    "explanation": "Heatmaps are used to show signal strength and coverage, allowing organizations to identify areas where there may be poor coverage or where multiple signals may conflict. War walking (and war driving) are techniques used to map wireless access points to geographic locations. Spectrum analysis and SSID plots are not terms used for this type of activity."
  },
  {
    "id": "SEC-D4-161",
    "domain": "4.0",
    "question": "What term describes the concept that individuals should be given the minimum permissions necessary to accomplish their role or tasks?",
    "answers": [
      "Zero trust",
      "Provisioning",
      "Least privilege",
      "Deprovisioning"
    ],
    "correct": 2,
    "explanation": "The concept of least privilege is that only the minimum rights or privileges required to accomplish a role or task are provided. Zero trust requires continuous authentication and authorization, and least privilege is part of a zero trust environment, but zero trust goes beyond least privilege. Provisioning and deprovisioning are part of the account life cycle, and provisioning should respect the concept of least privilege."
  },
  {
    "id": "SEC-D4-162",
    "domain": "4.0",
    "question": "Joanna wants to explain the advantages of automation for user and resource provisioning. Which of the following is not an advantage of automation over manual processes for provisioning?",
    "answers": [
      "Automation ensures consistency in the provisioning process.",
      "Automation provides faster provisioning.",
      "Automation decreases mistakes in provisioning.",
      "Automation provides auditability of provisioning."
    ],
    "correct": 3,
    "explanation": "Automation provides many advantages for the provisioning process, including improving consistency, decreasing the potential for mistakes, and providing faster provisioning. It does not specifically address auditability in ways that manual processes cannot. Regardless of how provisioning is done, audit logs and trails should be created for all events, not just automated ones."
  },
  {
    "id": "SEC-D4-163",
    "domain": "4.0",
    "question": "Bug bounty programs are an example of what type of program?",
    "answers": [
      "Contracted penetration testing",
      "Responsible disclosure",
      "Third-party bounty",
      "Trusted threat"
    ],
    "correct": 1,
    "explanation": "Bug bounty programs are frequently part of responsible disclosure programs intended to provide a way for third parties to report security issues and to be incentivized to report them in responsible ways. Bug bounties can help identify flaws, but they're not typically part of contracted penetration testing engagements. Third-party bounty is not a typical way of describing them, and trusted threat programs were made up for this question."
  },
  {
    "id": "SEC-D4-164",
    "domain": "4.0",
    "question": "Jack is hardening a Cisco switch based on the CIS IOS benchmark. As part of the configuration process, he configures settings including ntp authenticate and ntp trusted-key. Why would Jack configure this on his network switches?",
    "answers": [
      "To ensure that the switch has Network Terminal Protocol enabled",
      "To prevent attackers from modifying logs",
      "To prevent attackers from capturing network time traffic",
      "To ensure that network time is from a trusted source"
    ],
    "correct": 3,
    "explanation": "Even if you're not familiar with specific Cisco IOS commands and configuration you can quickly determine that this is a Network Time Protocol (NTP)-related setting. Authenticating NTP and ensuring a trusted key is enabled would help to ensure that network time is trusted and secure. This prevents attackers from conducting attacks that rely on modifying network time or the switch recording incorrect time in its logs. There is no Network Terminal Protocol, this does not impact logs, and network time traffic is not encrypted."
  },
  {
    "id": "SEC-D4-165",
    "domain": "4.0",
    "question": "Tony wants to use a cellular connection to transfer data to his organization. What should he do to ensure that his data is as secure as possible?",
    "answers": [
      "Make sure he is connected to his cellular provider's towers.",
      "Fully patch the phone.",
      "Use a VPN.",
      "Deploy a security baseline to the phone."
    ],
    "correct": 2,
    "explanation": "Using a VPN is a best practice over any untrusted or potentially untrusted network connection. Patching the phone and deploying a security baseline are good for the phone's security, but they won't help directly with the security of data in transit."
  },
  {
    "id": "SEC-D4-166",
    "domain": "4.0",
    "question": "The hospital that Isabella works for leverages threat information from the Health-ISAC as part of their security team's work. What type of threat information provider is the Health-ISAC?",
    "answers": [
      "An OSINT provider",
      "A dark web source",
      "An information-sharing organization",
      "A proprietary threat data source"
    ],
    "correct": 2,
    "explanation": "ISACs, or Information Sharing and Analysis Centers, are information-sharing organizations established to connect organizations in verticals like health care, government, utilities, and higher education. While it may provide OSINT information, they go far beyond that. They are not typically found via the dark web and don't require TOR to access their information, and they are not commercial or proprietary threat data sources."
  },
  {
    "id": "SEC-D4-167",
    "domain": "4.0",
    "question": "Mark presents his driver's license as part of the creation of his user account for a secure online service. What process requires this type of information to validate ownership of an identity?",
    "answers": [
      "Attestation",
      "Provisioning",
      "SSO",
      "De-provisioning"
    ],
    "correct": 0,
    "explanation": "Attestation is the verification of ownership or that a person matches who they claim to be. In this case, Mark presents his driver's license to attest to his own identity. Provisioning is the creation of accounts and the granting of rights, and deprovisioning is the removal of accounts and rights for accounts. SSO is single sign-on."
  },
  {
    "id": "SEC-D4-168",
    "domain": "4.0",
    "question": "Hector is concerned about Bluetooth security. Which of the following is a legitimate security concern about Bluetooth?",
    "answers": [
      "It is not encrypted.",
      "Bluetooth is only useful at short range.",
      "Bluejacking may occur.",
      "Bluetooth devices can be fingerprinted."
    ],
    "correct": 3,
    "explanation": "Bluetooth devices can be fingerprinted relatively easily, making it easy to identify individual users who have Bluetooth turned on. Modern Bluetooth traffic is encrypted, its relatively short range is not a security concern, and Bluejacking sends unwanted spam, which isn't a direct data security issue."
  },
  {
    "id": "SEC-D4-169",
    "domain": "4.0",
    "question": "Privileged access management (PAM) tools provide functions for enterprise access management. Which of the following is not a common PAM component?",
    "answers": [
      "Just-in-time permissions",
      "Password vaulting",
      "Ephemeral credentials",
      "Password persistence"
    ],
    "correct": 3,
    "explanation": "PAM tools provide a variety of capabilities, including just-in-time permissions, password vaulting, and ephemeral credentials. Password persistence was made up for this question and is not a typical feature."
  },
  {
    "id": "SEC-D4-170",
    "domain": "4.0",
    "question": "What role do port scans play in asset tracking?",
    "answers": [
      "Enumeration of assets.",
      "They provide OSINT.",
      "Version tracking for assets.",
      "They do not play a role in asset tracking."
    ],
    "correct": 0,
    "explanation": "Port scans can help with enumeration of assets when an inventory does not exist. They do not provide OSINT; OSINT is a passive information-gathering process and a scan is an active process. Version tracking via port scans is inaccurate and does not provide full information. Identifying assets via port scans is a reasonably common part of asset management, particularly for initial discovery."
  },
  {
    "id": "SEC-D4-171",
    "domain": "4.0",
    "question": "A fingerprint is an example of what type of authentication factor?",
    "answers": [
      "Something you know",
      "Something you have",
      "Something you are",
      "Somewhere you are"
    ],
    "correct": 2,
    "explanation": "Fingerprints are biometric factors and are something you are. Something you know is a knowledge factor like a password or PIN. Something you have is a hardware token, RFID card, or other similar factor. Somewhere you are is a geographic factor based on location such as GPS coordinates."
  },
  {
    "id": "SEC-D4-172",
    "domain": "4.0",
    "question": "Dana wants to ensure that her software acquisition process for open source software is as secure as possible. What should she to do validate the security of the open source software?",
    "answers": [
      "Ensure that the software source code is escrowed.",
      "Review the source code for the software.",
      "Check dependencies for known vulnerabilities.",
      "Purchase the software from a software vendor."
    ],
    "correct": 2,
    "explanation": "Dependency checking for open source software is a common best practice to help ensure that underlying components do not have known security vulnerabilities. There are dependency security checking applications and tools available that Dana could use to help with this process. Software source code escrow is often used to ensure that organizations can obtain the software code if a company goes out of business or other adverse events occur that might endanger the company relying on the code. Reviewing the source code for an entire application is outside of the scope and capability of the majority of organizations, particularly when other dependencies are included. Purchasing software from a known vendor can help, but does not necessarily ensure that the software is secure and dependencies don't introduce or include known issues."
  },
  {
    "id": "SEC-D4-173",
    "domain": "4.0",
    "question": "Sharon wants to implement WPA3 Enterprise. What technology will she need to use for authorization after wireless devices associate with access points?",
    "answers": [
      "LDAP",
      "802.1X",
      "Kerberos",
      "SAML"
    ],
    "correct": 1,
    "explanation": "Sharon knows that Enterprise mode authentication is typically done with 802.1X. LDAP and Kerberos are not typically used for this, and SAML is more frequently part of federated and cloud services."
  },
  {
    "id": "SEC-D4-174",
    "domain": "4.0",
    "question": "What purpose do the password history and password minimum age settings have in Windows?",
    "answers": [
      "To prevent attackers from resetting passwords",
      "To prevent brute-force attacks",
      "To prevent password reuse",
      "To ensure proper password expiration"
    ],
    "correct": 2,
    "explanation": "Windows supports both password history and a minimum password age to help prevent users from simply resetting their password over and over again until they can reuse their preferred password. This does not prevent attackers from resetting passwords or using brute-force attacks and doesn't ensure password expiration."
  },
  {
    "id": "SEC-D4-175",
    "domain": "4.0",
    "question": "A CVSS score is based on what three metric groups of data?",
    "answers": [
      "Scope, Impact, Environmental",
      "Base, Temporal, and Environmental",
      "Risk, Threat, Impact",
      "Time, Risk, Scope"
    ],
    "correct": 1,
    "explanation": "CVSS scores are based on base metrics like the attack vector; complexity; scope; user interaction required and privileges required; the temporal group, which includes exploit code maturity, remediation level, and report confidence; and the environmental group, including confidentiality, availability, and integrity requirements. While scope, impact, risk, and threat all play into these elements, CVSS calls the three metric groups Base, Temporal, and Environmental."
  },
  {
    "id": "SEC-D4-176",
    "domain": "4.0",
    "question": "Quentin wants to decommission solid-state drives (SSDs). What process should he follow if he wants to be absolutely certain that the data cannot be recovered?",
    "answers": [
      "Zero wiping",
      "Destruction",
      "Sanitation",
      "Reformatting"
    ],
    "correct": 1,
    "explanation": "In scenarios where the data needs to be guaranteed to be unrecoverable, physical destruction is a common choice. Zero wiping and reformatting both leave remnant data on SSDs, and sanitization processes are reasonably secure but cannot always be guaranteed to result in total data removal."
  },
  {
    "id": "SEC-D4-177",
    "domain": "4.0",
    "question": "What challenge is commonly encountered when organizations want to harden IoT devices?",
    "answers": [
      "The devices have limited security options.",
      "The devices cannot run current operating systems.",
      "Industry benchmarks for security are not up-to-date.",
      "Central management tools only support new devices."
    ],
    "correct": 0,
    "explanation": "IoT devices often have very limited security options, if any. That means that hardening them using built-in tools and configurations is limited, if not impossible. IoT devices typically use their own OS; benchmarks are rarely available, not just out-of-date; and central management for many IoT devices is frequently not available."
  },
  {
    "id": "SEC-D4-178",
    "domain": "4.0",
    "question": "Guillermo wants to establish his organization's security baseline for Linux systems. After selecting the CIS benchmark that best matches his organization's commonly used Linux distribution, what should he do next?",
    "answers": [
      "Deploy the benchmark to a test system to see how it performs in normal use.",
      "Install SELinux to allow for the baseline to be implemented fully.",
      "Review the baseline to determine any settings that are not a good fit for the organization's usage.",
      "Identify the deployment method for the baseline to the Linux systems."
    ],
    "correct": 2,
    "explanation": "Reviewing any baseline to determine its fit for the organization and how the organization's systems and services operate is an appropriate next step after selecting a benchmark. Deploying SELinux may be necessary for some features depending on the distribution in use, but nothing in the question indicates that this is required. Once the benchmark has been modified to purpose and suitability, it can be tested, and further modifications can be made if necessary. Finally, it can be deployed and managed."
  },
  {
    "id": "SEC-D4-179",
    "domain": "4.0",
    "question": "Renee has implemented WPA3 Enterprise, and she wants to use an EAP protocol for secure authentication. What EAP version should she implement?",
    "answers": [
      "LEAP",
      "EAP-TLS",
      "EAP-PSK",
      "EAP-PWD"
    ],
    "correct": 1,
    "explanation": "EAP-TLS provides TLS-based Transport Layer Security as part of a secure authentication implementation. LEAP is the Lightweight Extensible Authentication Protocol, which was in use before 802.11i but is now largely outdated. EAP-PSK uses a preshared key for mutual authentication and does not rely on public key encryption, but it is not supported in WPA3 deployments. EAP-PWD uses a shared password for authentication and, like EAP-PSK, is not supported by WPA3."
  },
  {
    "id": "SEC-D4-180",
    "domain": "4.0",
    "question": "The organization that Chris works for has recently acquired another company. As part of the acquisition, Chris is preparing to address the data that the newly acquired company used, including setting up rules to handle it in his data loss prevention (DLP) system. What step is commonly required prior to data being protected by a DLP system?",
    "answers": [
      "Hashing the data and creating signatures",
      "Encrypting the data",
      "Classifying and tagging the data",
      "Applying a mandatory access control scheme to the data"
    ],
    "correct": 2,
    "explanation": "DLP systems often rely on classification, tagging, and metadata to help them identify sensitive data that the organization handles and which could be exfiltrated or sent inadvertently outside of the organization. Hashing and creating signatures is more commonly associated with filesystem-monitoring tools. Encrypting the data is not required by a DLP and may actually make it harder for the DLP to identify the data. Applying a mandatory access control scheme to the data is not a typical step in preparing for DLP-based protection."
  },
  {
    "id": "SEC-D4-181",
    "domain": "4.0",
    "question": "Mark wants to have a way to determine if attackers have modified files on a critical web application server. What type of tool should he deploy if he wants to be able to check for changes of this nature?",
    "answers": [
      "Drive encryption",
      "File availability monitoring",
      "File encryption",
      "File integrity monitoring"
    ],
    "correct": 3,
    "explanation": "File integrity monitoring tools use hashes to validate that files match their original content. If the files change, the hashes will not match, allowing the tool to alert administrators that a change has occurred. Drive encryption and file encryption both protect the confidentiality of data but don't indicate changes without a signature. File availability monitoring is not a typical tool, although system or service availability monitoring is."
  },
  {
    "id": "SEC-D4-182",
    "domain": "4.0",
    "question": "Katie's organization uses an IoC feed that helps her to identify new threats. A recent feed update includes the following hash for Emotet malware: Where is Katie most likely going to be able to use this hash to identify potential attacks?",
    "answers": [
      "Via her EDR tools",
      "Via her firewall",
      "Via her system logs",
      "All of the above"
    ],
    "correct": 0,
    "explanation": "Endpoint detection and response (EDR) tools are most likely to use hashing to match known malicious files like this. Firewalls may provide the capability, but system logs do not, ruling out the \"all of the above\" option.",
    "exhibit": "cecc5bba6193d744837e689e68bc25c43eda7235"
  },
  {
    "id": "SEC-D4-183",
    "domain": "4.0",
    "question": "Which of the following tools is best suited to deploying and maintaining a secure baseline for Windows systems for an entire enterprise?",
    "answers": [
      "PowerShell",
      "Group Policy",
      "Manual configuration",
      "Script-based deployments"
    ],
    "correct": 1,
    "explanation": "Group Policy is the most common way of deploying baselines throughout Windows organizations. Group Policy Objects (GPOs) are set and managed across the entire Active Directory organization, allowing them to be modified for groups or specific purposes while inheriting most settings from the top of the organizational structure. PowerShell is a scripting tool, and both PowerShell and Group Policy are commonly used for specific purposes, but GPOs are typically preferred at scale. Manual configuration is not recommended for an entire organization."
  },
  {
    "id": "SEC-D4-184",
    "domain": "4.0",
    "question": "Perry wants to ensure that an unsecure protocol is secured when in transit through his local network. What solution could he adopt to ensure that this traffic is protected?",
    "answers": [
      "Use SD-WAN.",
      "Wrap the protocol using TLS.",
      "Encrypt all files that are sent using AES.",
      "Encrypt all files that are sent using SHA-1."
    ],
    "correct": 1,
    "explanation": "A common technique to ensure that traffic sent via unsecure protocols remains secure is to wrap it using TLS. SD-WAN is used to manage external connectivity, and there is no mention of files, only of an unsecure protocol. Even if files were encrypted, the rest of the traffic might leak information. Hashing does not leave data recoverable, making it unusable for this type of use in almost all cases."
  },
  {
    "id": "SEC-D4-185",
    "domain": "4.0",
    "question": "Annie wants to implement a passwordless authentication system. Which of the following would not meet her needs?",
    "answers": [
      "Windows Hello",
      "A PIN-based factor",
      "A cell-phone authenticator application",
      "A FIDO2 security key"
    ],
    "correct": 1,
    "explanation": "Passwordless authentication avoids making users provide a password or PIN by using a proof of identity from a device or token. Windows Hello, cell-based authenticator applications, and FIDO2 security keys all support this, but entering a PIN does not."
  },
  {
    "id": "SEC-D4-186",
    "domain": "4.0",
    "question": "Laura wants to harden an ICS and SCADA devices her organization uses to manage critical infrastructure. The devices are old and unsupported, without recent updates. What hardening techniques are most likely to be available to her to help deal with these devices?",
    "answers": [
      "Isolation",
      "Segmentation",
      "Adding host-based firewalls",
      "Configuring host-based IPS"
    ],
    "correct": 1,
    "explanation": "Since ICS and SCADA devices need connectivity as part of their design, Laura knows that using segmentation to place the devices in a secure network is likely her best hardening option. Isolating the devices would break the functionality of ICS/SCADA systems. Neither ICS nor SCADA devices typically have support for host-based firewalls or host-based IPS."
  },
  {
    "id": "SEC-D4-187",
    "domain": "4.0",
    "question": "Bob uses an IoC feed to allow his SIEM to identify and correlate common malicious activity. What phase of the incident response process best describes this?",
    "answers": [
      "Preparation",
      "Detection",
      "Containment",
      "Eradication"
    ],
    "correct": 1,
    "explanation": "The detection and analysis phases of the incident response process both commonly leverage IoCs to detect and then correlate information to identify incidents. Preparation might involve setting up threat feeds and building automations to help notify security administrators of issues. Containment and eradication may leverage threat data to help understand common actions taken by threat actors, but the SIEM detecting and correlating events is not typically part of containment or eradication."
  },
  {
    "id": "SEC-D4-188",
    "domain": "4.0",
    "question": "Yael's organization has received a very convincing phishing email that has resulted in staff clicking on a malicious link. If Yael can't remove the email from inboxes, which of the following options will allow her to quickly prevent users from being compromised?",
    "answers": [
      "Set up DNS filtering using the URL from the email.",
      "Disable the organization's Internet connection.",
      "Block inbound traffic from the phishing email's source IP.",
      "Enable reputation services for the email."
    ],
    "correct": 0,
    "explanation": "Enabling DNS filtering based on the URL from the email is the most effective option listed. Disabling the organization's Internet connection will result in additional disruption. Blocking the email's source IP for an already received email will not be effective, nor will enabling reputation services for email after the email has already been received."
  },
  {
    "id": "SEC-D4-189",
    "domain": "4.0",
    "question": "Nick is reviewing his system configurations and notes that logon event auditing settings on the system are set as shown in the example figure. What concern should he express about the setting? ",
    "answers": [
      "Log files may fill up quickly.",
      "Successful authentication will not be logged.",
      "Failed authentication will not be logged.",
      "Policy may not be enforced properly."
    ],
    "correct": 1,
    "explanation": "Successful authentications will not be logged based on these settings. Having access to both successes and failures can be useful when investigating incidents, particularly if attackers have stolen credentials. Text-based log files take up minimal space on most workstations and servers and should not be a significant concern. While the message notes that the policy may be overridden, Nick's primary concern should be missing log data.",
    "image": "questions/img/domain4-q189.jpg",
    "imageAlt": "A screenshot of a window titled, audit account logon events properties. The local security setting tab is selected. Checkbox labeled, failure is selected. A warning message is displayed below. O K, cancel, and apply buttons are listed at the bottom."
  },
  {
    "id": "SEC-D4-190",
    "domain": "4.0",
    "question": "Brian is reviewing vulnerabilities discovered as part of a vulnerability scan. He sees a score for a vulnerability of 3.0. What does he know about this vulnerability based on its score?",
    "answers": [
      "It is a high-severity vulnerability and should be addressed quickly.",
      "It is a low-severity vulnerability and may not need to be addressed.",
      "It is a medium-severity vulnerability and should be reviewed before being addressed.",
      "It is a critical vulnerability and should be addressed immediately."
    ],
    "correct": 1,
    "explanation": "CVSS scores range from 0 to 10.0, with 10.0 being the most critical. A score of .1-3.9 is considered a low rating, meaning that Brian can take his time to review and remediate the risk. Scores of 4.0-6.9 are medium, 7.0-8.9 are high, and 9.0-10.0 are critical."
  },
  {
    "id": "SEC-D4-191",
    "domain": "4.0",
    "question": "Nick wants to allow email servers to validate that email from his servers is actually from them. What email security framework should he adopt to allow this?",
    "answers": [
      "DKIM",
      "DMARC",
      "SPF",
      "SMTP"
    ],
    "correct": 0,
    "explanation": "DKIM (DomainKeys Identified Mail) validates a domain's identity using a public key pair, validating the authenticity of the sender. DMARC (Domain-based Message Authentication, Reporting, and Conformance) controls how unauthenticated messages are handled by mailbox providers, including quarantining, rejecting, or rejecting messages. The Sender Policy Framework (SPF) lists IP addresses of systems allowed to send email in DNS TXT records for a domain. STP is not an email security framework. The Simple Mail Transfer Protocol (SMTP) is the default email protocol."
  },
  {
    "id": "SEC-D4-192",
    "domain": "4.0",
    "question": "Jack wants to configure a Linux system to use mandatory access controls. What tool should he select that is commonly used to provide this functionality?",
    "answers": [
      "Group Policy",
      "CIS benchmarks",
      "SELinux",
      "Containerization"
    ],
    "correct": 2,
    "explanation": "SELinux is a Linux kernel module that provides a variety of security capabilities and access control methods, including support for MAC (mandatory access control) for Linux systems. Group Policy is a Windows tool, the CIS benchmarks provide security configuration recommendations for systems but do not directly provide mandatory access control, and containerization is used to make application installations portable."
  },
  {
    "id": "SEC-D4-193",
    "domain": "4.0",
    "question": "What process is commonly used with open source tools to ensure that dependencies are secure?",
    "answers": [
      "Static analysis",
      "Package monitoring",
      "Fagan testing",
      "Port scanning"
    ],
    "correct": 1,
    "explanation": "Package monitoring tools review the dependencies and packages that make up open source tools to identify vulnerable components. Static analysis is manual review of code. Fagan testing is a formal code analysis process. Port scanning is not used to monitor for dependency security."
  },
  {
    "id": "SEC-D4-194",
    "domain": "4.0",
    "question": "Yarif wants to harden his SaaS cloud infrastructure. Which of the following hardening techniques is he most likely to be able to implement in an SaaS environment?",
    "answers": [
      "Host-based firewalls",
      "Least privilege",
      "Operating system security configuration",
      "Physical security for systems"
    ],
    "correct": 1,
    "explanation": "SaaS environments allow customers to manage information, data, devices, accounts, and identities. That means that ensuring least privilege is used is possible through use of accounts and identities. Host-based firewalls, OS configurations, and physical security are all the responsibility of the SaaS provider."
  },
  {
    "id": "SEC-D4-195",
    "domain": "4.0",
    "question": "Which of the following is not a technical control used to address a vulnerability?",
    "answers": [
      "Insurance",
      "Patching",
      "Segmentation",
      "Firewalling"
    ],
    "correct": 0,
    "explanation": "Unlike the other controls listed, insurance simply transfers the risk to another organization at a cost. It does not take any action to prevent the risk from occurring. Patching, segmentation, and firewalling are all technical controls."
  },
  {
    "id": "SEC-D4-196",
    "domain": "4.0",
    "question": "Kelsey's organization has established an asset and inventory management process for servers. Which of the following is not a common part of asset tracking?",
    "answers": [
      "Data classification",
      "Identifying owners",
      "Documenting acquisition dates",
      "Sanitization"
    ],
    "correct": 3,
    "explanation": "Sanitization is part of decommissioning and disposal processes, not asset management. Tracking data classification used on systems, identifying owners, and documenting acquisition dates for warranty and life-cycle tracking are all common parts of this process."
  },
  {
    "id": "SEC-D4-197",
    "domain": "4.0",
    "question": "Kirk needs to allow system administrators to access root passwords in emergencies. What type of solution could he implement to allow them to check out passwords when needed while also tracking those checkouts and requiring the passwords to be changed after use?",
    "answers": [
      "EAP",
      "Multifactor authentication",
      "An enterprise password manager",
      "Passwordless"
    ],
    "correct": 2,
    "explanation": "Enterprise password managers provide functionality just like this, allowing passwords to be stored securely and tracked on use. EAP is an authentication protocol; multifactor authentication adds one or more factors, increasing security, but doesn't provide the functionality described; and passwordless isn't designed for a checkout and reset function."
  },
  {
    "id": "SEC-D4-198",
    "domain": "4.0",
    "question": "Selah wants to prevent staff in her organization from visiting malicious websites while they're in the office. If she wants to use the most up-to-date threat data, what web filter capability should she take advantage of?",
    "answers": [
      "Agent-based web filtering",
      "Reputation tools",
      "A centralized web filtering proxy",
      "URL scanning"
    ],
    "correct": 1,
    "explanation": "Using threat data from reputation tools will best fit Selah's needs. Agent-based web filtering is used when systems will be mobile or connected to networks that are not controlled centrally. Centralized web filtering proxies and URL scanning are useful general controls, but reputation tools answer the specific need more directly."
  },
  {
    "id": "SEC-D4-199",
    "domain": "4.0",
    "question": "Joe has configured ACLs on a Cisco network device. The ACL he has configured is as follows: What does this ACL do?",
    "answers": [
      "Blocks HTTP traffic",
      "Blocks both HTTP and HTTPS traffic",
      "Prevents web application attacks",
      "Allows for inspection of web traffic"
    ],
    "correct": 0,
    "explanation": "ACLs are interpreted in the order they are listed. This ACL is not properly written if it is intended to block HTTPS because the ACL order includes a rule that allows any traffic after the rule that blocks HTTP is processed. This means that traffic will first be checked to see if it is HTTP traffic. If it is not, it will be allowed, and thus will bypass the HTTPS block. It will not prevent web application attacks since HTTPS can pass the ACL, and no specific configuration is set for inspection of web traffic.",
    "exhibit": "interface ethernet0\nip access-group 111 in\n!\naccess-list 111 deny tcp any any eq http\naccess-list 111 permit ip any any\naccess-list 111 deny tcp any any eq https"
  },
  {
    "id": "SEC-D4-200",
    "domain": "4.0",
    "question": "The use of machine learning and algorithms to analyze user behavior in order to identify anomalous behavior is a feature of what specialized type of tool?",
    "answers": [
      "UEBA",
      "SIEM",
      "EDR",
      "DMARC"
    ],
    "correct": 0,
    "explanation": "User and entity behavior analytics (UEBA) tools are specifically designed to use behavior-based analytic tools leveraging machine learning and algorithmic analysis. SIEM is used to correlate events and log data as part of ongoing monitoring. EDR focuses on malicious behavior detection on endpoints. DMARC is used for email security."
  },
  {
    "id": "SEC-D4-201",
    "domain": "4.0",
    "question": "What password best practice is supported by the ability to set password history in Windows?",
    "answers": [
      "Password length",
      "Password complexity",
      "Password reuse",
      "Password age"
    ],
    "correct": 2,
    "explanation": "Password history is intended to prevent password reuse in Windows. It is commonly paired with a minimum password age to prevent users from simply resetting their password multiple times until they can reuse their password, and a longer history is used to make this more difficult too. It does not influence password length or complexity."
  },
  {
    "id": "SEC-D4-202",
    "domain": "4.0",
    "question": "Donna is reviewing a script that was found on a Windows system. What does the following script do?",
    "answers": [
      "Stops the Windows Defender service",
      "Starts the Windows Defender service",
      "Stops and disables the Windows Defender service",
      "Enables the Windows Defender service"
    ],
    "correct": 2,
    "explanation": "This script will stop and disable the Windows Defender service on a system with IP address 10.1.1.101. You can identify both the Stop-Service and StartupType Disabled values in the script to determine what it is likely to do. It does not start Windows Defender, nor does it enable the service."
  },
  {
    "id": "SEC-D4-203",
    "domain": "4.0",
    "question": "Batu has been asked to build scripts that will allow automated ticket creation through a new help desk tool for his organization. As he considers the lifespan of the scripts, which of the following concerns should he address to ensure that the scripts do not become an issue over time?",
    "answers": [
      "Their initial creation cost",
      "Their ongoing supportability",
      "Existing technical debt",
      "Whether they're a single point of failure"
    ],
    "correct": 1,
    "explanation": "Since Batu has been asked to consider the lifespan of the scripts, ensuring that they're supportable in an ongoing manner is the biggest concern. Initial cost is typically small compared to the ongoing benefit of scripts like these. Existing technical debt is not a major concern for automated ticket creation with a new tool, and while having a single point of failure can be a concern, automated ticket outages are a point-in-time concern not a lifetime-centered concern."
  },
  {
    "id": "SEC-D4-204",
    "domain": "4.0",
    "question": "Alex is responsible for his organization's vulnerability management program. A recent vulnerability scan shows that IoT devices that are used for building automation are vulnerable to a known issue with their built-in web server. After reviewing the manufacturer's website, Alex is unable to find an updated operating system or software update. He chooses to move the IoT devices to a protected VLAN and require a jump server to access them. What vulnerability remediation option has he used?",
    "answers": [
      "A compensating control",
      "Patching",
      "Insurance",
      "An exemption"
    ],
    "correct": 0,
    "explanation": "Alex has used a compensating control because he cannot remediate the underlying vulnerability. This reduces the risk by preventing the devices from being available on the network to untrusted devices and users. He cannot patch, no insurance was purchased, and no exemption was granted or registered."
  },
  {
    "id": "SEC-D4-205",
    "domain": "4.0",
    "question": "Wiping a drive and reinstalling from known good media is an example of what incident response option?",
    "answers": [
      "Recovery",
      "Containment",
      "Eradication",
      "Root cause elimination"
    ],
    "correct": 2,
    "explanation": "Eradication efforts focus on completely removing all artifacts of a compromise or event. Wiping drives to ensure that no remnant malware or other artifacts remain, then reinstalling using known good media are examples of eradication processes. Restoring the system to service after it has been remediated occurs after eradication. Containment efforts attempt to limit the potential spread or ongoing impact of an incident, and root cause analysis is used to determine the underlying causes of an issue, incident, or event. Root cause elimination is not a commonly used term for this."
  },
  {
    "id": "SEC-D4-206",
    "domain": "4.0",
    "question": "Melissa's company wants to contract with a third-party organization to oversee their hardware decommissioning and disposal process. What should she ask the company to do to prove that the disposal process was done properly?",
    "answers": [
      "Certification.",
      "Follow a data retention policy.",
      "Provide photographic evidence.",
      "Keep a log of devices."
    ],
    "correct": 0,
    "explanation": "Certification of destruction can include photographic evidence, logs, and other data that demonstrate the disposal contract was followed. Data retention policies are applied internally, not to third-party companies that are contracted for disposal."
  },
  {
    "id": "SEC-D4-207",
    "domain": "4.0",
    "question": "Sally wants to identify a way to prioritize vulnerabilities discovered by her vulnerability scanner. Which of the following options will allow her to prioritize vulnerabilities effectively while taking her own organization's needs into account?",
    "answers": [
      "Use CVSS base and temporal metrics.",
      "Use a qualitative risk assessment process.",
      "Use CVSS scores that include environmental metrics.",
      "Use a quantitative risk assessment process."
    ],
    "correct": 2,
    "explanation": "CVSS environmental scores help organizations take their own requirements and risks into account. That means that Sally can use numeric scores to prioritize risk while using her organization's needs and unique threat model. Qualitative and quantitative risk assessments are useful, but they are not as well suited to leveraging data from a vulnerability scanner in a timely manner."
  },
  {
    "id": "SEC-D4-208",
    "domain": "4.0",
    "question": "Henry wants to prevent password reuse outside of his organization from impacting the accounts his staff use. Which of the following password settings can have the largest impact if passwords are reused outside of his organization and they are breached due to a security issue at the third-party site or service?",
    "answers": [
      "Password expiration policies",
      "Password length policies",
      "Password complexity policies",
      "Password minimum age policies"
    ],
    "correct": 0,
    "explanation": "Password expiration polices help reduce the length of time a password could be exposed for. Henry knows that if his staff change their password periodically that it can help avoid issues with reuse on other sites. He also knows that multifactor is a more effective solution and that he should focus his time there as well. Password length and complexity don't matter if the password was compromised elsewhere, and minimum age policies are used to prevent reuse in the organization by resetting passwords over and over again to return to an original desired password. Note that policies like this don't stop reuse outside of a user's organization on 3rd party sites!"
  },
  {
    "id": "SEC-D4-209",
    "domain": "4.0",
    "question": "Fuzzing is an example of what type of code analysis?",
    "answers": [
      "Static analysis",
      "Code review",
      "Pentesting",
      "Dynamic analysis"
    ],
    "correct": 3,
    "explanation": "Fuzzing, the process of feeding unexpected and random input to programs to see how they behave, is an example of dynamic analysis where the code is actually run to test it. Static analysis involves reviewing the code, as does code review. Fuzzing is typically done as part of software testing rather than penetration testing, but it may be used by pentesters."
  },
  {
    "id": "SEC-D4-210",
    "domain": "4.0",
    "question": "Steve's organization is concerned about the potential for devices they are purchasing to be modified before they reach the organization. Which of the following solutions will help the most in preventing this potential issue?",
    "answers": [
      "Buying from a value-added reseller",
      "Buying directly from the OEM",
      "Buying from a gray market seller",
      "Buying from a local reseller"
    ],
    "correct": 1,
    "explanation": "Ensuring supply chain security can be challenging, but buying directly from a vendor can remove opportunities for devices to be modified. Trusted value-added resellers are the second best choice. Buying from the gray market or a reseller typically adds additional opportunities for device modification."
  },
  {
    "id": "SEC-D4-211",
    "domain": "4.0",
    "question": "What password setting has the greatest impact when attempting to prevent brute-force password cracking?",
    "answers": [
      "Password history settings",
      "Password length increases",
      "Password expiration settings",
      "Password length decreases"
    ],
    "correct": 1,
    "explanation": "Increasing password length makes it harder to crack. Decreasing the password length would make passwords easier to crack. History and expiration do not influence brute-force attacks unless the expiration happens to land during the time the password cracking was attempted."
  },
  {
    "id": "SEC-D4-212",
    "domain": "4.0",
    "question": "Jill wants to identify a potential network-based distributed denial-of-service (DDoS) attack. Which of the following log sources is most likely to provide information that will allow her to identify the attack?",
    "answers": [
      "OS-specific security logs",
      "Endpoint logs",
      "IDS/IPS logs",
      "Authentication logs"
    ],
    "correct": 2,
    "explanation": "IDS and IPS devices are the only network security device in this list. Other common logs used to identify potential DDoS attacks include network logs and firewall logs. Application and web server logs may be useful if the DDoS is associated with an application. OS-specific security logs, endpoint logs, and authentication logs are not typical places to find useful information for a network-based DDoS attack."
  },
  {
    "id": "SEC-D4-213",
    "domain": "4.0",
    "question": "Jake has configured WPA3 Personal for his network. What feature makes WPA3 more secure than WPA2's PSK mode?",
    "answers": [
      "SAE",
      "PKI",
      "TLS",
      "EAP"
    ],
    "correct": 0,
    "explanation": "SAE (Simultaneous Authentication of Equals) provides a secure authentication mode that replaced WPA2's preshared key session key negotiation process. PKI is public key encryption and is not the solution in use. TLS is Transport Layer Security, used to encrypt data in motion, and EAP is an authentication protocol."
  },
  {
    "id": "SEC-D4-214",
    "domain": "4.0",
    "question": "Molly wants to harden embedded systems in her environment. Which of the following options is most likely to be available?",
    "answers": [
      "Hardening benchmarks.",
      "Central management tools.",
      "Add-on security software.",
      "None; embedded systems have very limited hardening options."
    ],
    "correct": 3,
    "explanation": "Embedded systems typically have few, if any hardening options because of their purpose-built functionality. Benchmarks are rarely available for them, and most are not designed for central management or adding on security software."
  },
  {
    "id": "SEC-D4-215",
    "domain": "4.0",
    "question": "Jean wants to use an identity proofing process as part of her user account creation process. Which of the following is most likely to be useful for identity proofing?",
    "answers": [
      "A Google email account",
      "A state or nationally issued ID",
      "A Facebook account",
      "A credit card"
    ],
    "correct": 1,
    "explanation": "Identity proofing uses information about a user to prove that they are who they claim to be. A state or nationally issued ID is a better proof than a Facebook or Google account which can be created under any name without validation. Credit cards are not a form of identity."
  }
];
