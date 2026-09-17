/* CompTIA Security+ SY0-701 -- Domain 1.0
   150 review questions extracted from:
     9781394211388-Chapter-1-Domain-1-0--General-Security-Concepts.epub
   Correct answers + explanations from:
     9781394211388-Appendix-Answers-to-Review-Questions.epub
   Regenerate with: python tools/extract_domain.py 1
   Question order matches the book; `correct` is a 0-based index into
   `answers` (the app shuffles answer order at runtime, so never rely
   on A/B/C/D here). */

window.QUESTION_BANKS = window.QUESTION_BANKS || {};
window.QUESTION_BANKS["domain1"] = [
  {
    "id": "SEC-D1-001",
    "domain": "1.0",
    "question": "Felicia wants to deploy an encryption solution that will protect files in motion as they are copied between file shares as well as at rest, and also needs it to support granular, per-user security. What type of solution should she select?",
    "answers": [
      "Partition encryption",
      "File encryption",
      "Full-disk encryption",
      "Record-level encryption"
    ],
    "correct": 1,
    "explanation": "File encryption meets all of the needs described. Full-disk encryption is easier to deploy and manage but does not protect individual files in motion and does not effectively support multiuser scenarios. Partition-level encryption has the same challenges, albeit at a partition rather than full-disk level. Record-level encryption is typically used in databases to protect individual records or entries."
  },
  {
    "id": "SEC-D1-002",
    "domain": "1.0",
    "question": "Valerie wants to use a certificate to handle multiple subdomains for her website, including the sales.example.com and support.example.com subdomains. What type of certificate should she use?",
    "answers": [
      "A self-signed certificate",
      "A root of trust certificate",
      "A CRL certificate",
      "A wildcard certificate"
    ],
    "correct": 3,
    "explanation": "Wildcard certificates are used to handle multiple subdomains with a single certificate. A self-signed certificate will not be recognized by browsers and other services, creating confusion for customers. Root of trust certificates and CRL certificates are not types of certificates."
  },
  {
    "id": "SEC-D1-003",
    "domain": "1.0",
    "question": "What information is analyzed during a gap analysis?",
    "answers": [
      "Control objectives and controls intended to meet the objectives",
      "Physically separate networks and their potential connection points",
      "Compensating controls and the controls they are replacing",
      "Security procedures and the policies they are designed to support"
    ],
    "correct": 0,
    "explanation": "Gap analysis considers control objectives and the controls that are intended to meet the objectives."
  },
  {
    "id": "SEC-D1-004",
    "domain": "1.0",
    "question": "Susan's team has recommended an application restart for a production, customer-facing application as part of an urgent patch due to a security update. What technical implication is the most common concern when conducting an application restart?",
    "answers": [
      "Application configuration changes caused by the restart",
      "Whether the patch will properly apply",
      "Lack of security controls during the restart",
      "The downtime during the restart"
    ],
    "correct": 3,
    "explanation": "In most production environments downtime is the primary concern when considering an application restart. Many application architectures are designed to allow restarts of individual systems or services without creating an outage or downtime. Configuration changes should not be created by a restart, patches generally apply properly, and security controls should be in place throughout the process."
  },
  {
    "id": "SEC-D1-005",
    "domain": "1.0",
    "question": "Using a tool like git is most frequently associated with what critical change management process?",
    "answers": [
      "Having a backout plan",
      "Stakeholder analysis",
      "Version control",
      "Standard operating procedures (SOPs)"
    ],
    "correct": 2,
    "explanation": "Organizations frequently use tools like git to build repositories that support their need for version control. Backout plans might note that you need to return to the prior version but will need to include how to do so. Stakeholder analysis and SOPs are not specifically supported by or improved by using git."
  },
  {
    "id": "SEC-D1-006",
    "domain": "1.0",
    "question": "Jacob is concerned that the password used for one of his organization's services is weak, and he wants to make it harder to crack by making it harder to test possible keys during a brute-force attack. What is this technique called?",
    "answers": [
      "Master keying",
      "Key stretching",
      "Key rotation",
      "Passphrase armoring"
    ],
    "correct": 1,
    "explanation": "Key stretching makes potentially weak keys more resistant to brute-forcing and often involves using a hash or block cipher repeatedly to make the original value harder to crack. Key rotation is the process of changing keys on a periodic basis to limit the impact of potential exposure. Master keying and passphrase armoring are not commonly used concepts for information security, although master keys are used for physical locks."
  },
  {
    "id": "SEC-D1-007",
    "domain": "1.0",
    "question": "Log monitoring is an example of what control category?",
    "answers": [
      "Technical",
      "Managerial",
      "Operational",
      "Physical"
    ],
    "correct": 2,
    "explanation": "Operational controls like log monitoring, change management processes, and vulnerability management are all put in place to support managing and using technology in a secure manner."
  },
  {
    "id": "SEC-D1-008",
    "domain": "1.0",
    "question": "Rick wants to make offline brute-force attacks against his password file very difficult for attackers. Which of the following is not a common technique to make passwords harder to crack?",
    "answers": [
      "Use of a salt",
      "Use of a pepper",
      "Use of a purpose-built password hashing algorithm",
      "Encrypting password plain text using symmetric encryption"
    ],
    "correct": 3,
    "explanation": "Retaining the actual password is not a best practice, and thus encrypting password plain text is not a common technique to make passwords harder to crack. Since the application would need the cryptographic key to read the passwords, anybody who had access to that key could decrypt the passwords. Using a salt, a pepper, and a cryptographic hashing algorithm designed for passwords are all common best practices to prevent offline brute-force attacks."
  },
  {
    "id": "SEC-D1-009",
    "domain": "1.0",
    "question": "Diffie-Hellman and RSA are both examples of what important encryption-related solution?",
    "answers": [
      "Rekeying",
      "Certificate revocation protocols",
      "Key exchange algorithms",
      "Key generation algorithms"
    ],
    "correct": 2,
    "explanation": "Both Diffie-Hellman and RSA are key exchange algorithms designed to securely allow key exchange between users or systems that have not previously communicated."
  },
  {
    "id": "SEC-D1-010",
    "domain": "1.0",
    "question": "Sally wants to ensure that her change management process includes a procedure for what to do if the change fails. What should she create to handle this possibility?",
    "answers": [
      "An impact analysis",
      "A backout plan",
      "A regression test",
      "A maintenance window"
    ],
    "correct": 1,
    "explanation": "Backout plans document what to do to return to a state prior to the change being made and are designed to be implemented if the change fails. They may involve undoing changes, restoring from backups, or taking other steps and they must contain an appropriate level of detail to ensure that the change can be undone. An impact analysis looks at the potential impact of a change, regression testing ensures that old issues are not introduced in new updates, and maintenance windows are scheduled to allow for downtime or other maintenance activities with appropriate communications, staffing, and other needed elements."
  },
  {
    "id": "SEC-D1-011",
    "domain": "1.0",
    "question": "Theresa is concerned that her scheduled maintenance window may extend beyond the allocated time due to an unexpected issue. What element from the CIA triad is she concerned about?",
    "answers": [
      "Criticality",
      "Accessibility",
      "Integrity",
      "Availability"
    ],
    "correct": 3,
    "explanation": "The CIA triad is confidentiality, availability, and integrity. Theresa's extended outage window will impact the availability of her applications and services."
  },
  {
    "id": "SEC-D1-012",
    "domain": "1.0",
    "question": "Alaina is concerned about vehicles that might impact her organization's backup generator. What should she install to prevent both inadvertent and purposeful vehicle impacts on a generator installed outside her building near a parking lot?",
    "answers": [
      "A speed bump",
      "An access control vestibule",
      "Bollards",
      "A chain-link fence"
    ],
    "correct": 2,
    "explanation": "Bollards are used to protect infrastructure and structures, and they are usually concrete or steel posts, planters, or similar structures that are intended to prevent a vehicle from impacting what they protect. Speed bumps won't prevent an impact, although they might slow it. Access control vestibules are used to ensure only authorized personnel access a space, and chain-link fences are not typically sufficient for this type of control."
  },
  {
    "id": "SEC-D1-013",
    "domain": "1.0",
    "question": "Ben has deployed a data loss prevention (DLP) tool that inspects data and flags specific data types for review before emails containing it are sent outside the organization. What control type best describes this type of solution?",
    "answers": [
      "Managerial",
      "Detective",
      "Corrective",
      "Preventive"
    ],
    "correct": 3,
    "explanation": "This is a preventive control that is intended to prevent sensitive data from being sent outside the organization. Managerial controls are procedural mechanisms, corrective controls remediate security issues that have already occurred, and detective controls identify security events that have already occurred."
  },
  {
    "id": "SEC-D1-014",
    "domain": "1.0",
    "question": "What type of control is a policy or procedure?",
    "answers": [
      "Directive",
      "Corrective",
      "Detective",
      "Preventive"
    ],
    "correct": 0,
    "explanation": "Policies and procedures are examples of directive control that inform employees and others of what they should do to achieve security objectives. Corrective controls remediate already existing security issues, detective controls identify security events that have already happened, and preventive controls attempt to stop a security issue before it occurs."
  },
  {
    "id": "SEC-D1-015",
    "domain": "1.0",
    "question": "Murali has deployed a file integrity monitoring tool and has configured alerts to notify him if files are modified. What control type best describes this solution?",
    "answers": [
      "Preventive",
      "Deterrent",
      "Directive",
      "Detective"
    ],
    "correct": 3,
    "explanation": "This solution monitors for changes and is therefore a detective control. It does not prevent changes, and intruders and malicious actors are unlikely to know about it, making it a poor deterrent. Since it is not a policy or practice, it is not a directive control."
  },
  {
    "id": "SEC-D1-016",
    "domain": "1.0",
    "question": "Charles wants to reduce the threat scope of compromised credentials. What type of the following security controls is best suited to meeting this need?",
    "answers": [
      "Single sign-on",
      "Federation",
      "Zero trust",
      "Multifactor authentication (MFA)"
    ],
    "correct": 2,
    "explanation": "Zero trust designs implement continuous verification, which is an effective control used to limit the threat scope of compromised credentials. While multifactor authentication can be a useful control in this circumstance, a fully implemented zero-trust design will provide greater control than just MFA alone. Single sign-on and federation are both likely to increase threat scope in a compromised credential scenario."
  },
  {
    "id": "SEC-D1-017",
    "domain": "1.0",
    "question": "Carol wants to obfuscate data that is contained in her database. She wants to be able to refer to the data elements without having the actual data exposed. What type of obfuscation option should she select?",
    "answers": [
      "Tokenization",
      "Encryption",
      "Data masking",
      "Data randomization"
    ],
    "correct": 0,
    "explanation": "Tokens replace data with a value that is linked specifically to the data, allowing it to be referenced and used without the field being exposed. Encryption is not used for this purpose, data masking hides elements of a data field like digits from a credit card number, and data randomization is not an obfuscation method."
  },
  {
    "id": "SEC-D1-018",
    "domain": "1.0",
    "question": "What key is used to decrypt information sent by another individual between two people using public key encryption?",
    "answers": [
      "The recipient's private key",
      "The recipient's public key",
      "The sender's private key",
      "The sender's public key"
    ],
    "correct": 0,
    "explanation": "The sender uses the receiver's public key to encrypt the message, then the receiver uses their private key to decrypt the message. This ensures that the receiver is the only person who can decrypt a message sent using public key encryption."
  },
  {
    "id": "SEC-D1-019",
    "domain": "1.0",
    "question": "Selah's organization has recently experienced a breach and the private keys for her organization's certificates were exposed. What should she immediately do?",
    "answers": [
      "Reissue the certificates with changed hostnames and other details.",
      "Replace the certificates with self-signed certificates until they can be replaced by the vendor.",
      "Revoke the certificates and place them on a certificate revocation list.",
      "Replace the certificates with wildcard certificates."
    ],
    "correct": 2,
    "explanation": "If a certificate may have been breached, organizations should immediately revoke the certificates and place them on a certificate revocation list (CRL). They will then need to replace the certificates with new certificates, but changing hostnames is not required as the certificates themselves will be new. The other options are not typical practices."
  },
  {
    "id": "SEC-D1-020",
    "domain": "1.0",
    "question": "Which of the following is not a major concern related to downtime caused by patching and system updates?",
    "answers": [
      "Attackers compromising the system or service while it is offline",
      "Security systems or functions being offline during restart or shutdown processes",
      "Unexpected extended downtime",
      "Dependencies between systems or services related to downtime"
    ],
    "correct": 0,
    "explanation": "Attackers are unlikely to be able to compromise a system or service while it is offline. They may, however, be able to take advantage of the restart or shutdown process if critical security processes are not online for some portion of the process. Unexpected downtime and dependencies between systems must also be considered when planning patching and system updates."
  },
  {
    "id": "SEC-D1-021",
    "domain": "1.0",
    "question": "Joanna wants to ensure that the most current version of each component in her application is deployed. What change management process will help the most with this requirement?",
    "answers": [
      "Dependency mapping",
      "Version control",
      "Impact analysis",
      "Allow and deny lists"
    ],
    "correct": 1,
    "explanation": "Version control is important to ensure that the current and correct version of an application or component is deployed. Dependency mapping can be important to ensure that changed versions don't cause other issues, but it isn't specifically needed to ensure that the current version is what you're deploying. Impact analysis and allow/deny lists are not directly relevant to this requirement."
  },
  {
    "id": "SEC-D1-022",
    "domain": "1.0",
    "question": "Greg wants to implement a version control system to ensure that changes are made in ways that will not cause problems for his organization's critical software. Which of the following is not a common feature of version control systems designed for software source code?",
    "answers": [
      "Atomic operations",
      "File locking",
      "Regression testing",
      "Tagging and labeling"
    ],
    "correct": 2,
    "explanation": "Version control systems track versions but don't do testing themselves. Atomic operations ensure that actions like commits don't overwrite other commits in progress. File locking allows a developer to check out a file while it is being worked on, and tagging and labeling helps developers track files and versions."
  },
  {
    "id": "SEC-D1-023",
    "domain": "1.0",
    "question": "Christina wants to implement a physical security control that has the greatest flexibility in how it is applied because she knows that exceptions to security practices may be required at times. Which of the following solutions has the greatest flexibility?",
    "answers": [
      "Video surveillance",
      "Security guards",
      "Access badges",
      "Access control vestibules"
    ],
    "correct": 1,
    "explanation": "Security guards are expensive but offer the most flexibility when organizations need intelligence and reasoning to be applied to security events and unexpected needs. Christina knows that guards can often identify issues that a fixed sensor or control cannot."
  },
  {
    "id": "SEC-D1-024",
    "domain": "1.0",
    "question": "Lisa wants to ensure that theft of a device will not lead to exposure of the data contained on the device if the device is locked or turned off. What type of encryption should she select to best ensure this?",
    "answers": [
      "Volume-level encryption",
      "Full-disk encryption",
      "File-level encryption",
      "Partition-level encryption"
    ],
    "correct": 1,
    "explanation": "Full-disk encryption provides the most security in situations like this if the device is locked or off. Volume- and partition-level encryption may leave some drive information or even entire volumes or partitions unencrypted, and file-level encryption is typically selective instead of covering every file on a drive."
  },
  {
    "id": "SEC-D1-025",
    "domain": "1.0",
    "question": "Mahmoud has been asked to implement an allow list for websites that users at his company can visit. What concern should he bring up to management due to this request?",
    "answers": [
      "Allow lists cannot be used for websites.",
      "Allow lists are overly permissive and are likely to allow unwanted sites to be visited.",
      "Using an allow list for websites will take a lot of time to maintain.",
      "Using an allow list for websites is easily bypassed."
    ],
    "correct": 2,
    "explanation": "In most organizations attempting to use an allow list for websites will take up a lot of time. Mahmoud knows that allow lists can be set up for websites, often at a central network security device-level like a firewall. Bypassing allow lists may be possible, but this can largely be prevented if desired. Allow lists are not overly permissive unless they are configured that way."
  },
  {
    "id": "SEC-D1-026",
    "domain": "1.0",
    "question": "Which of the following change management processes does not commonly directly involve stakeholders outside of the IT organization?",
    "answers": [
      "Impact analysis",
      "Building the backout plan",
      "The change approval process",
      "Determining the maintenance window"
    ],
    "correct": 1,
    "explanation": "Administrators and system owners typically build backout plans. Stakeholders are involved in impact analysis as they help technical staff understand what the impact of changes will be on business areas. They engage in the change approval process, and they help to determine the maintenance window to ensure that impact on the business is minimized."
  },
  {
    "id": "SEC-D1-027",
    "domain": "1.0",
    "question": "What hardware component is used to generate, store, and manage cryptographic keys?",
    "answers": [
      "A CPU",
      "A NSA",
      "A TPM",
      "A CCA"
    ],
    "correct": 2,
    "explanation": "A TPM, or trusted platform module, is a hardware-based, cryptographic processor that is used to generate, store, and manage cryptographic keys. It is also used to help ensure platform integrity by allowing boot validation processes to occur in a secure manner. A CPU is the main processor for a system, NSA is the National Security Agency, and a CCA is a chosen ciphertext attack, a type of attack against cryptographic systems where the attacker can cause a cryptographic system to encrypt known text for analysis."
  },
  {
    "id": "SEC-D1-028",
    "domain": "1.0",
    "question": "Chris wants to check to see if a certificate has been revoked. What protocol can he use to validate the current status of a certificate?",
    "answers": [
      "TLS",
      "OCRS",
      "SSL",
      "OCSP"
    ],
    "correct": 3,
    "explanation": "The Online Certificate Status Protocol (OCSP) is used to validate certificate status, including checking to see if the certificate is on a certificate revocation list (CRL). TLS is Transport Layer Security, a protocol used to encrypt data in transit between systems that relies on cryptographic certificates, but it is not used to validate the status of certificates on a CRL. Despite SSL itself being outmoded, the term SSL is commonly used to refer to TLS--but here, neither TLS nor SSL is the right option. OCRS was made up for this question."
  },
  {
    "id": "SEC-D1-029",
    "domain": "1.0",
    "question": "Brian's organization uses a process where a secure module boots systems, then monitors them as each boot stage proceeds. It validates each signed boot stage and reports on whether the boot process was correct or not when complete. What is the secure module used to verify these stages called?",
    "answers": [
      "A secure initiation manager",
      "A root of trust",
      "A boot hash",
      "A cryptographic boot manager"
    ],
    "correct": 1,
    "explanation": "A root of trust-based secure boot process validates each signed component as it starts and ensures that the trusted components are all loaded as part of the boot process. Changes to the components are reported as exceptions, meaning that the boot process cannot be properly verified or trusted. Secure initiation manager, boot hash, cryptographic boot manager were made up for this question."
  },
  {
    "id": "SEC-D1-030",
    "domain": "1.0",
    "question": "A vulnerability scan shows that an embedded device that Alice is responsible for has a vulnerability. She knows the vendor is no longer in business and that there is no updated firmware or software update for the device. To resolve the issue, Alice places a firewall between the device and the rest of the network and creates rules that prevent the vulnerable service from being available to other devices. What type of control has Alice deployed?",
    "answers": [
      "A directive control",
      "A compensating control",
      "A detective control",
      "A procedural control"
    ],
    "correct": 1,
    "explanation": "Alice has deployed a compensating control since she cannot apply controls like patching, configuration, or updates. Directive controls provide formal directions to staff, detective controls detect issues rather than preventing them directly, and procedural controls are not a type of control type used on the Security+ exam."
  },
  {
    "id": "SEC-D1-031",
    "domain": "1.0",
    "question": "Jason knows that his Apple system uses a separate portion of its SoC (system on chip) to store keys and biometric information. What is this specialized component called?",
    "answers": [
      "A TPM",
      "A HSM",
      "A secure enclave",
      "A screened subnet"
    ],
    "correct": 2,
    "explanation": "Apple devices use a specialized, separate coprocessor that uses encrypted memory and storage as well as dedicated cryptographic functions called a secure enclave. This is distinct from a TPM or HSM, and a screened subnet is a networking concept for a space that will be exposed to the less secure zones while needing to remain secure."
  },
  {
    "id": "SEC-D1-032",
    "domain": "1.0",
    "question": "What change management term is used to describe the processes that an organization uses for each change that is made to ensure that a consistent process is used?",
    "answers": [
      "Standard operating procedures",
      "A change plan",
      "Fixed operating procedures",
      "A backout plan"
    ],
    "correct": 0,
    "explanation": "Standard operating procedures (SOPs) are an organization's normal processes that it uses. SOPs are helpful to ensure that organizations have consistent practices that are in use on an ongoing basis. A change plan is specific to a change, and a backout plan is used to undo a change if problems arise. Fixed operating procedures is not a common term used in change management."
  },
  {
    "id": "SEC-D1-033",
    "domain": "1.0",
    "question": "Jack knows that there are three common types of database encryption. Which of the following is not a common type of database encryption?",
    "answers": [
      "Sensitivity-based encryption",
      "Transparent data encryption",
      "Field-level encryption",
      "Column-level encryption"
    ],
    "correct": 0,
    "explanation": "Transparent data encryption, field-level, and column-level encryption are all common types of database encryption. Sensitivity-based encryption is not and was made up for this question."
  },
  {
    "id": "SEC-D1-034",
    "domain": "1.0",
    "question": "Ujamaa wants to conduct a gap analysis as part of his security efforts. Which of the following best describes what he will analyze?",
    "answers": [
      "Which services are not configured properly",
      "Whether current patches are installed on all systems",
      "The security program as implemented versus best practices",
      "Legal requirements versus the security program"
    ],
    "correct": 2,
    "explanation": "Gap analysis focuses on reviewing a security program against common best practices to identify where gaps between practices exist. Ujamaa will select an information security standard like NIST 800-53, ISO 27001, or another relevant standard and will validate his organization's controls implementation against it. This may include things like which services are not configured properly, whether patches are installed, and if legal requirements are being met, but any of those answers is not a complete answer in this context."
  },
  {
    "id": "SEC-D1-035",
    "domain": "1.0",
    "question": "Brandon wants to deploy a detective control that will help him with physical security threats. Which of the following fits his needs?",
    "answers": [
      "Fencing",
      "Lighting",
      "Video surveillance",
      "Bollards"
    ],
    "correct": 2,
    "explanation": "Video surveillance is a detective control and is useful for detecting security events after they have happened. Fencing, bollards, and lighting are typically considered preventive controls."
  },
  {
    "id": "SEC-D1-036",
    "domain": "1.0",
    "question": "Jack has deployed a system that appears to attackers to be a vulnerable system. The system is specifically designed to capture information and data from attacks to allow for later analysis. What type of tool has Jack deployed?",
    "answers": [
      "A tarpit",
      "A honeypot",
      "A beehive",
      "An intrusion detection system"
    ],
    "correct": 1,
    "explanation": "Honeypots are designed to appear to be vulnerable. They are heavily instrumented to capture attacker techniques and tools, allowing for analysis by defenders. Tarpits slow down attackers, beehives are not a term used in this context, and intrusion detection systems (IDSs) are designed to identify and alert about attacks but are not designed to appear to be vulnerable."
  },
  {
    "id": "SEC-D1-037",
    "domain": "1.0",
    "question": "Renee wants to ensure that her logs support nonrepudiation. What should she do to ensure this?",
    "answers": [
      "Encrypt, then hash the logs.",
      "Hash the logs and then digitally sign them.",
      "Digitally sign the log file, then encrypt it.",
      "Hash, then encrypt the logs."
    ],
    "correct": 1,
    "explanation": "Calculating a cryptographic hash allows the log's hash to be compared against copies to validate that they match. Digitally signing the hash ensures that it can be verified to be the original. Encrypting the log does not allow it to be verified against an original. Without a digital signature, a hash does not meet Renee's requirement for nonrepudiation."
  },
  {
    "id": "SEC-D1-038",
    "domain": "1.0",
    "question": "Isaac wants to deploy sensors to detect intruders in a facility, but he is concerned about the sensors being overly sensitive. What type of sensor is best suited to detecting intruders in an open office environment without significant expense or issues with sensitivity?",
    "answers": [
      "Infrared",
      "Pressure",
      "Microwave",
      "Ultrasonic"
    ],
    "correct": 0,
    "explanation": "Infrared sensors are commonly used in open spaces. They are well suited to detecting individuals and are less likely to be overly sensitive. They can cover broader fields than a pressure sensor, and ultrasonic sensors are not commonly deployed as facility-level security sensors."
  },
  {
    "id": "SEC-D1-039",
    "domain": "1.0",
    "question": "Wayne wants to allow systems to claim identities as part of his AAA process. Which of the following is most commonly used to identify both individuals and systems?",
    "answers": [
      "Tokens",
      "Smartcards",
      "Certificates",
      "Usernames"
    ],
    "correct": 2,
    "explanation": "Certificates are commonly used to identify both individuals and systems. Tokens, smartcards, and usernames are primarily used by individuals."
  },
  {
    "id": "SEC-D1-040",
    "domain": "1.0",
    "question": "What are considerations like database and network connectivity, authentication system access, and network time availability considered in the context of change management processes?",
    "answers": [
      "Allowed services",
      "Standard operating procedures",
      "Denied services",
      "Dependencies"
    ],
    "correct": 3,
    "explanation": "Database and network connectivity, authentication system access, and network time availability are all common dependencies that must be considered when making changes. Applications and services may fail to start properly if these dependencies are not available when they attempt to start."
  },
  {
    "id": "SEC-D1-041",
    "domain": "1.0",
    "question": "What role does the policy engine play in a zero-trust environment?",
    "answers": [
      "It creates new administrative policies based on user behavior.",
      "It grants access based on policies created by administrators and based on security systems data.",
      "It enforces policies by monitoring connections between clients and servers.",
      "It suggests new administrative policies based on usage patterns for adoption by the organization."
    ],
    "correct": 1,
    "explanation": "Policy engines decide whether to grant access to resources based on policies created by administrators and based on data provided by tools like endpoint detection and response tools, threat intelligence feeds, and security information and event management tools. It does not create or suggest administrative policies, and it does not directly enforce policies--that occurs at a policy enforcement point, typically through a zero-trust agent on the client and at the resource or service side."
  },
  {
    "id": "SEC-D1-042",
    "domain": "1.0",
    "question": "Which of the following is not a common post-change activity found in change management practices?",
    "answers": [
      "Updating diagrams",
      "Updating procedures",
      "Updating policies",
      "Updating contracts"
    ],
    "correct": 3,
    "explanation": "Contracts tend to be updated as part of a contract renewal process, not as part of a change management process related to technical change."
  },
  {
    "id": "SEC-D1-043",
    "domain": "1.0",
    "question": "Which of the following activities should Alaina not restrict as part of her preparation for a change window?",
    "answers": [
      "Patching",
      "Scaling clustered systems up or down",
      "Changing hostnames",
      "Modifying database configurations"
    ],
    "correct": 1,
    "explanation": "Change windows rely on the documented change being able to be made. Patching and other technical changes may lead to unexpected interactions or dependency changes that are not accounted for in the original change window. Scaling a clustered system up or down does not change the systems and should not be restricted during a change management window."
  },
  {
    "id": "SEC-D1-044",
    "domain": "1.0",
    "question": "What two key features define blockchain ledgers?",
    "answers": [
      "They are immutable and nontransferable.",
      "They are shared and can be modified by a vote among all participants.",
      "They are unique to each participant and are atomic.",
      "They are shared and immutable."
    ],
    "correct": 3,
    "explanation": "Blockchain ledgers are immutable--they cannot be changed after they are recorded, and they are shared, which means that each participant in the blockchain has access to the entire ledger. Transactions are recorded only once and cannot be tampered with--in fact, if an error is made and recorded, a new record has to be created including the fix, and both records will be accessible to show the history of what occurred."
  },
  {
    "id": "SEC-D1-045",
    "domain": "1.0",
    "question": "Damian issues the following command on his Linux server: What has he done?",
    "answers": [
      "Created a certificate signing request",
      "Created a certificate revocation request",
      "Signed a certificate signing request",
      "Updated the OCSP record for a certificate"
    ],
    "correct": 0,
    "explanation": "Damian has created a certificate signing request, which he can submit to a certificate authority (CA).",
    "exhibit": "openssl req -new -newkey rsa:2048 -nodes -keyout exampleserver.key -out exampleserver.csr"
  },
  {
    "id": "SEC-D1-046",
    "domain": "1.0",
    "question": "Nick's organization sets aside Saturday nights from 2 a.m. to 4 a.m. for scheduled maintenance. What is this type of reserved time typically called?",
    "answers": [
      "Allocated downtime",
      "A maintenance window",
      "An unscheduled outage",
      "An allowed outage"
    ],
    "correct": 1,
    "explanation": "Preplanned times when maintenance is done and outages may occur is known as a maintenance window. An unscheduled outage is just that--unscheduled and unplanned, often due to a failure or other issue. Allocated downtime and allowed outages are not common terms for this."
  },
  {
    "id": "SEC-D1-047",
    "domain": "1.0",
    "question": "Megan wants to assess the impact of a change as part of her change management process. Which of the following is most likely to help her assess impact?",
    "answers": [
      "A backout plan",
      "An estimate of the downtime expected",
      "A list of stakeholders",
      "A list of dependencies for impacted systems"
    ],
    "correct": 1,
    "explanation": "An estimate of the downtime expected as part of the change will help Megan to assess the impact of the change on her organization's business operations. A backout plan is useful if something goes wrong and can help estimate impact if that happens, but it does not identify impact under normal circumstances. A list of stakeholders can help when communicating with stakeholders to notify them of what will occur, but without the estimate of downtime, Megan will not be able to ask them what the impact would be. Finally, a list of dependencies is helpful to ensure that the change does not have unexpected issues and can help with the impact assessment to determine if other systems may be impacted, but the downtime expected remains the most important item."
  },
  {
    "id": "SEC-D1-048",
    "domain": "1.0",
    "question": "Jared wants to estimate the downtime that will result as part of a planned change. Which of the following methods will most effectively help him estimate downtime?",
    "answers": [
      "Average the downtime from other recent changes.",
      "Contact the vendor for time estimates for the change.",
      "Perform the change in a test environment.",
      "Use a fixed maintenance window."
    ],
    "correct": 2,
    "explanation": "Organizations often perform changes in a test environment to allow accurate time estimates and to determine if there are issues with the change like undocumented dependencies or problems with patches. Average downtime is a poor indicator of what a specific change may require, a fixed maintenance window does not ensure the change will take that amount of time, and vendors rarely have a full understanding of the environment an organization is operating in."
  },
  {
    "id": "SEC-D1-049",
    "domain": "1.0",
    "question": "An encryption method in which all participants have the same key is known as which of the following types of encryption?",
    "answers": [
      "Shared hashing",
      "Asymmetric encryption",
      "Symmetric encryption",
      "Universal encryption"
    ],
    "correct": 2,
    "explanation": "Symmetric encryption uses the same key for all participants in an exchange. Asymmetric encryption uses public and private keys where public keys are shared and private keys are retained. Shared hashing and universal encryption are not terms commonly used to describe encryption."
  },
  {
    "id": "SEC-D1-050",
    "domain": "1.0",
    "question": "What important encryption challenge does asymmetric encryption help with by using public keys?",
    "answers": [
      "Evil twins",
      "Collision resistance",
      "Key length",
      "Key exchange"
    ],
    "correct": 3,
    "explanation": "Asymmetric encryption makes key exchange possible because public keys are just that: public. They can be shared without causing a loss of cryptographic security or repudiation. They do not help with collision resistance, key length, or evil twins (which are malicious wireless access points)."
  },
  {
    "id": "SEC-D1-051",
    "domain": "1.0",
    "question": "Rick's cloud provider offers a dedicated hardware security module. Which of the following capabilities is it unlikely to offer?",
    "answers": [
      "Validating secure boot processes",
      "Key generation",
      "Encrypting and decrypting data",
      "Creating digital signatures"
    ],
    "correct": 0,
    "explanation": "A TPM is used to validate secure boot processes. A hardware security module (HSM) is used for key generation, storage, and management as well as for encrypting and decrypting data and creating and validating digital signatures."
  },
  {
    "id": "SEC-D1-052",
    "domain": "1.0",
    "question": "Michelle believes that an image she has discovered in an attacker's directory of files contains additional information that has been hidden in it. What is this type of obfuscation called?",
    "answers": [
      "Steganography",
      "Image hashing",
      "PNG warping",
      "Image blocking"
    ],
    "correct": 0,
    "explanation": "Steganography is the art of hiding additional data in images. Michelle can use steganography detection tools to attempt to find the data, but attackers may use custom tools that could avoid detection as well. The other options were made up for this question."
  },
  {
    "id": "SEC-D1-053",
    "domain": "1.0",
    "question": "Which of the following is not a common transport encryption protocol?",
    "answers": [
      "TLS",
      "IPSec",
      "SAML",
      "SSH"
    ],
    "correct": 2,
    "explanation": "SAML is the Security Assertion Markup Language, used to exchange authentication and authorization data between identity providers and service providers. TLS, IPSec, and SSH are all common transport encryption protocols."
  },
  {
    "id": "SEC-D1-054",
    "domain": "1.0",
    "question": "What technology is record-level encryption most commonly associated with?",
    "answers": [
      "Stored audio files",
      "Databases",
      "Physical disks",
      "Removable storage"
    ],
    "correct": 1,
    "explanation": "Record-level encryption is commonly associated with databases, where it is used to encrypt each record with a unique encryption key, allowing it to be more secure than database-level encryption."
  },
  {
    "id": "SEC-D1-055",
    "domain": "1.0",
    "question": "Yasmine submits the Windows BitLocker key to a central repository after she encryptions the machine. The central repository allows files to be uploaded, but not read, and is protected with access requiring special permissions. What type of solution is Yasmine's company using?",
    "answers": [
      "A hardware security module",
      "Perfect forward secrecy",
      "Key escrow",
      "Private keys"
    ],
    "correct": 2,
    "explanation": "Yasmine's company has implemented a key escrow process where encryption keys are retained by the organization in case the files on the drive need to be accessed by someone with proper authority. A hardware security module (HSM) is a hardware device used to create and store encryption keys, among other encryption-related functions. Perfect forward secrecy (PFS) is a term used in encryption systems that change keys frequently to ensure that even if a key is hacked, the attacker's access to data will exist in a limited window. Private keys are part of asymmetric encryption schemes and do not reflect the full solution Yasmine's organization is using."
  },
  {
    "id": "SEC-D1-056",
    "domain": "1.0",
    "question": "Valerie wants to authenticate her systems using her AAA system. Which of the following options is best suited to system authentication?",
    "answers": [
      "Asymmetric authentication",
      "Certificate-based authentication",
      "Symmetric authentication",
      "PIN-based authentication"
    ],
    "correct": 1,
    "explanation": "Certificates are commonly used for system authentication in AAA systems. While asymmetric and symmetric are forms of encryption, they are not authentication schemes, and PIN-based authentication is not commonly used for system authentication."
  },
  {
    "id": "SEC-D1-057",
    "domain": "1.0",
    "question": "Valentine wants to detect if an intruder has accessed a secured file server. Which of the following techniques will work best with a data loss prevention tool to identify data exfiltration?",
    "answers": [
      "A honeypot",
      "A honeynet",
      "A honeyfile",
      "A honeytoken"
    ],
    "correct": 2,
    "explanation": "Honeyfiles are files that are intentionally made to look attractive while being configured for detection by data loss prevention and intrusion prevention/detection systems. A honeypot is an intentionally vulnerable system that is used to monitor attacker behavior and techniques for analysis. Honeynets are networks that are configured to be intentionally vulnerable and that operate much like honeypots at a network level. Honeytokens are credentials that are not actually used but that are monitored for use in case an attacker is able to capture them."
  },
  {
    "id": "SEC-D1-058",
    "domain": "1.0",
    "question": "Jason has recommended that additional lighting be put in place on the exterior of his building as part of a security upgrade. What type of control is lighting?",
    "answers": [
      "Operational",
      "Deterrent",
      "Corrective",
      "Technical"
    ],
    "correct": 1,
    "explanation": "Lighting is a deterrent control type and would typically be categorized as a physical control."
  },
  {
    "id": "SEC-D1-059",
    "domain": "1.0",
    "question": "Which of the following controls is typically the most expensive to implement?",
    "answers": [
      "Bollards",
      "Access control vestibules",
      "Security guards",
      "Access badges"
    ],
    "correct": 2,
    "explanation": "Any control that requires constant human presence like security guards is likely to have a higher ongoing cost than controls that can be put in place and operate without human intervention or presence."
  },
  {
    "id": "SEC-D1-060",
    "domain": "1.0",
    "question": "Frankie wants to validate the integrity of a file by comparing it against an original copy. Which of the following solutions both fulfills this requirement and avoids known security issues?",
    "answers": [
      "Hash the original file and the current file using MD5 and compare the hashes.",
      "Hash the original file and the current file using SHA-1 and compare the hashes.",
      "Hash the original file and the current file using SHA-256 and compare the hashes.",
      "Hash the original file and the current file using AES and compare the hashes."
    ],
    "correct": 2,
    "explanation": "SHA-256 is the current, secure hashing standard. While it is unlikely that a malicious actor would exploit known flaws in MD5 and SHA-1, in most normal operations SHA-256 remains the preferred option when it is available. The Advanced Encryption Standard (AES) is used for encryption, not hashing."
  },
  {
    "id": "SEC-D1-061",
    "domain": "1.0",
    "question": "Joanna's organization has a policy that requires a user's password to be immediately reset to lock accounts if the account is determined to have been successfully phished. What type of control is this?",
    "answers": [
      "A detective control",
      "A directive control",
      "A compensating control",
      "A preventive control"
    ],
    "correct": 1,
    "explanation": "Policies are examples of directive controls. This could also be considered a corrective control, but that is not one of the options listed. Detective controls identify security events that have already occurred, and this does not detect the compromised account--it directs what must happen afterward. A compensating control mitigates risks due to exceptions in the security policy like a violation of policy due to an inability to implement a specific technical control like patching. A preventive control attempts to stop a security issue before it occurs. Here, the issue has already occurred. The policy of directive control tells staff what do to, and the action of locking the account is a corrective control."
  },
  {
    "id": "SEC-D1-062",
    "domain": "1.0",
    "question": "Jackie wants to implement an AAA system for her network. What AAA protocol is commonly used for network devices?",
    "answers": [
      "OpenID",
      "SAML",
      "RADIUS",
      "TANGENT"
    ],
    "correct": 2,
    "explanation": "RADIUS is commonly used for AAA for network devices. OpenID and SAML are more commonly associated with federated services, and TANGENT is not an AAA protocol or server."
  },
  {
    "id": "SEC-D1-063",
    "domain": "1.0",
    "question": "Scott wants to automate policy creation in his zero-trust environment's policy engine. Which of the following is not a typical component for automated data and event-driven policy management?",
    "answers": [
      "A SIEM",
      "Threat feeds",
      "Infrared sensor data",
      "EDR tools"
    ],
    "correct": 2,
    "explanation": "Physical security sensors are not typically part of a zero-trust policy engine feed. Zero-trust environments primarily focus on network and systems access rather than physical security and access."
  },
  {
    "id": "SEC-D1-064",
    "domain": "1.0",
    "question": "Valerie's organization has deployed a zero-trust solution, and Valerie receives an authentication prompt when she is attempting to access a file server. What component of the zero-trust architecture is she interacting with?",
    "answers": [
      "A policy enforcement point",
      "A policy administrator",
      "The policy engine",
      "The trust manager"
    ],
    "correct": 0,
    "explanation": "Valerie is interacting with a policy enforcement point, the agent and resource-side elements that validate trust by requiring authentication and authorization before allowing access to a resource. The policy enforcement point will validate her access through the policy engine, which will be configured by the policy administrator. Trust managers are not a typical component of the zero-trust model."
  },
  {
    "id": "SEC-D1-065",
    "domain": "1.0",
    "question": "Matt is assessing his organization's zero-trust model against the NIST Zero Trust Maturity Model. Which of the following is not a common element of zero-trust systems that would be assessed as part of the model?",
    "answers": [
      "Identity",
      "Business model",
      "Networks",
      "Devices"
    ],
    "correct": 1,
    "explanation": "Identity, devices, networks, applications and workloads, and data are all assessed as part of the NIST Zero Trust Maturity Model. The model does not assess an organization's business model or practices."
  },
  {
    "id": "SEC-D1-066",
    "domain": "1.0",
    "question": "Quentin wants to deploy a single sign-on system to allow his users to log in to cloud services. Which of the following technologies is he most likely to deploy?",
    "answers": [
      "OpenID",
      "Kerberos",
      "LDAP",
      "TACACS+"
    ],
    "correct": 0,
    "explanation": "OpenID is an open standard for decentralized authentication that is used by many cloud service providers. Kerberos, LDAP, and TACACS+ are all most commonly associated with on-site usage."
  },
  {
    "id": "SEC-D1-067",
    "domain": "1.0",
    "question": "Marty wants to deploy a corrective control to deal with a recently compromised system. Which of the following would be considered a corrective control?",
    "answers": [
      "Patching the vulnerability that allowed the compromise to occur",
      "Deploying full-disk encryption",
      "Deploying an endpoint detection and response (EDR) tool",
      "Enabling logging and sending logs to a SIEM"
    ],
    "correct": 0,
    "explanation": "Corrective controls attempt to remediate security issues that have already occurred. Patching the flaw that allowed an attack to succeed is an example of a corrective control. Deploying full-disk encryption or an EDR tool are both examples of preventive controls, and logging and log monitoring are examples of detective controls. It is important to note that in many cases, controls could be identified as multiple potential control types. In cases where controls might fit multiple control types, you should look for the control that is most obviously the correct control type."
  },
  {
    "id": "SEC-D1-068",
    "domain": "1.0",
    "question": "What important encryption feature is not supported by symmetric encryption?",
    "answers": [
      "Confidentiality",
      "Integrity",
      "Nonrepudiation",
      "Authentication"
    ],
    "correct": 2,
    "explanation": "Symmetric encryption does not support nonrepudiation because both parties have the same key. Both asymmetric and symmetric encryption can provide confidentiality, integrity, and authentication."
  },
  {
    "id": "SEC-D1-069",
    "domain": "1.0",
    "question": "Theresa wants to use a cloud-hosted security solution that will allow her to safely store and manage secrets. What type of solution should she select?",
    "answers": [
      "A TPM",
      "A CA",
      "A KMS",
      "A CSR"
    ],
    "correct": 2,
    "explanation": "A KMS, or key management system, is a solution that allows you to safely store and manage secrets like keys and certificates. Centralizing a KMS allows organizations to effectively manage their secrets, including tracking their life cycle and rotation. A TPM is used for hardware security on physical systems, a CA is a certificate authority used to create and sign certificates, and a CSR is a certificate signing request."
  },
  {
    "id": "SEC-D1-070",
    "domain": "1.0",
    "question": "Joanna is reviewing her account information on an e-commerce website and sees her credit card number displayed as XXXX-XXXX-XXXX-1234. What type of data obfuscation is in use?",
    "answers": [
      "Hashing",
      "Data masking",
      "Field encryption",
      "Tokenization"
    ],
    "correct": 1,
    "explanation": "Data masking conceals elements of a data field or entry, preventing all of it from being seen but leaving it accessible through the database when masking is not used. Tokenization replaces values with a reference value--often a hash that can be used to refer to the value without using the actual entry. Hashing is a one-way function that produces an input of arbitrary length. Field encryption is not a common term."
  },
  {
    "id": "SEC-D1-071",
    "domain": "1.0",
    "question": "Amanda's organization wants to use a decentralized blockchain to store data. Which of the following is true about a decentralized blockchain?",
    "answers": [
      "No individual or group controls the blockchain.",
      "Only cryptocurrency-related data can be stored in a blockchain.",
      "Blockchain data can be changed after being stored by the original submitter.",
      "Blockchain ledgers are stored on central servers chosen by regular elections among blockchain participants."
    ],
    "correct": 0,
    "explanation": "In a decentralized blockchain, no individual or group controls the blockchain. Blockchains can store many types of data, including but not limited to transactions. Blockchain transactions are permanent once written, and a new transaction or update would need to be recorded rather than revising an existing transaction. Blockchain transactions are stored on the blockchain maintained by participants, not on central servers chosen by election."
  },
  {
    "id": "SEC-D1-072",
    "domain": "1.0",
    "question": "What role does a subordinate CA have in a CA hierarchy?",
    "answers": [
      "Subordinate CAs issue certificates based on subdomains.",
      "Subordinate CAs provide control over certificate issuance while avoiding the cost of being a root CA.",
      "Subordinate CAs validate root CA activities to ensure auditability.",
      "Subordinate CAs review certificate signing requests before forwarding them to the root CA."
    ],
    "correct": 1,
    "explanation": "Subordinate CAs avoid the cost of maintaining a root CA while providing control over certificates that are issued and allowing specialized support for different types of certificates like SSL and S/MIME. Subordinate CAs can issue certificates for any allowed domain or subdomain, are not required to ensure auditability, and can sign certificates themselves."
  },
  {
    "id": "SEC-D1-073",
    "domain": "1.0",
    "question": "Which of the following sensor types is commonly used to detect footsteps?",
    "answers": [
      "Infrared",
      "Pressure",
      "Microwave",
      "Ultrasonic"
    ],
    "correct": 1,
    "explanation": "Pressure sensors can be deployed to detect footsteps in a secured area. Infrared and microwave sensors are more commonly used to detect motion, and ultrasonic sensors are rarely used for security purposes."
  },
  {
    "id": "SEC-D1-074",
    "domain": "1.0",
    "question": "Which of the following is not a managerial control?",
    "answers": [
      "Risk assessments",
      "Including security in change management processes",
      "Security planning exercises",
      "Implementing firewalls"
    ],
    "correct": 3,
    "explanation": "Firewalls are a technical control, not a managerial control that focuses on the mechanics of the risk management process."
  },
  {
    "id": "SEC-D1-075",
    "domain": "1.0",
    "question": "What purpose do third-party certificates serve for customers of cloud services?",
    "answers": [
      "They reduce costs by using bring-your-own certificates.",
      "They allow certificates for domains other than the service provider's domain.",
      "They provide control over cryptographic security for the customer.",
      "They allow more flexibility in TLS version selection."
    ],
    "correct": 2,
    "explanation": "Third-party certificates allow customers to have full control over the certificate, including the private key and certificate signing request. By bringing your own certificate, encrypted traffic cannot be decrypted by the cloud provider. Using provider-provided or -created certificates leads to a potential risk if the provider is malicious or compromised and private keys managed by the provider are compromised. Bringing your own certificate does not necessarily reduce costs. Providers typically allow certificate signing requests for customer domains and subdomains as needed and supported by the service."
  },
  {
    "id": "SEC-D1-076",
    "domain": "1.0",
    "question": "Which of the following is not a common control focused on availability?",
    "answers": [
      "Uninterruptible power systems",
      "Redundant Internet connectivity",
      "Disk encryption",
      "Load balancers"
    ],
    "correct": 2,
    "explanation": "Disk encryption is commonly used to ensure confidentiality of data. UPS, load balancers, and redundant Internet connectivity all support availability."
  },
  {
    "id": "SEC-D1-077",
    "domain": "1.0",
    "question": "What term describes a collection of honeypots on a network intended to capture information about cybersecurity threats?",
    "answers": [
      "A honeyfarm",
      "A honeynet",
      "A honeycluster",
      "A darknet"
    ],
    "correct": 1,
    "explanation": "Honeynets are collections of decoy systems and devices that are instrumented and monitored, providing organizations and individuals with information about how threat actors attack targeted systems. Honeyfarm and honeycluster are not industry terms, and darknets are segments of unused network space that should not receive traffic. Darknets are monitored to help identify scanning and other attacks since traffic should not flow to them."
  },
  {
    "id": "SEC-D1-078",
    "domain": "1.0",
    "question": "Skip wants to implement a deterrent control to prevent physical security issues for his organization. Which of the following controls should he select?",
    "answers": [
      "A fence",
      "A generator",
      "Access badges",
      "A camera system"
    ],
    "correct": 0,
    "explanation": "Fencing is considered a deterrent because it will discourage potential intruders from accessing facilities. Generators are used to ensure availability and are a preventive control. Access badges are a technical and preventive control in most cases. A camera system is a detective, technical control."
  },
  {
    "id": "SEC-D1-079",
    "domain": "1.0",
    "question": "What holds the position of the root of trust in a certificate chain?",
    "answers": [
      "A hardened hardware device",
      "A TPM",
      "A root certificate",
      "A wildcard certificate"
    ],
    "correct": 2,
    "explanation": "The root certificate, or top certificate for a certificate chain, is the root of trust of the chain, and it must be kept secure so the entire certificate and CA hierarchy can be trusted. Hardened hardware devices may be used to store it, but they are not the actual root itself. A TPM is used to store system-specific security data, and wildcard certificates cover more than one subdomain for an organization."
  },
  {
    "id": "SEC-D1-080",
    "domain": "1.0",
    "question": "Jill needs to explain the concept of open public ledgers to her organization as management wants to adopt a blockchain-based system. What should she tell them about access to the ledger?",
    "answers": [
      "Members must be added by a vote of all current members.",
      "Anyone can join at any time.",
      "Members must be added by a vote of more than 51 percent of current members.",
      "Ledgers are public but membership is private and controlled by the creator of the ledger."
    ],
    "correct": 1,
    "explanation": "By definition, open public ledgers are open and public--anyone can join at any time. No vote is required, and creators do not control the ledger once it is made public."
  },
  {
    "id": "SEC-D1-081",
    "domain": "1.0",
    "question": "Olivia wants to use a self-signed certificate in her test environment for her organization's services to save money on commercial certificates. What warning should her team give her about the use of self-signed certificates in a test environment?",
    "answers": [
      "Certificate root of trust validation attempts will fail if implemented.",
      "Self-signed certificates cannot be used for external users to support SSL.",
      "Self-signed certificates cannot be used for internal users to support SSL.",
      "Browsers will not allow self-signed certificates to be used when browsing sites."
    ],
    "correct": 0,
    "explanation": "Some software may attempt to validate the certificates in use and could fail. This may also lead to unexpected differences between production certificates and test certificates, which is undesirable in a test environment intended to mirror production. Both internal users and external users can still successfully use self-signed certificates for SSL, but they will receive warnings in modern browsers. Browsers can typically be told to bypass warnings, or self-signed certificates can be added to system certificate chains as needed, although this requires additional work from system administration teams and may not be desirable."
  },
  {
    "id": "SEC-D1-082",
    "domain": "1.0",
    "question": "Amanda is concerned about issues with dependencies that may be found during her pending change. What practice should she implement to help ensure unexpected dependency issues are not encountered?",
    "answers": [
      "Update organizational policies and procedures before the change.",
      "Update functional diagrams before the change.",
      "Validate the change in a test environment.",
      "Document legacy applications that may create dependencies."
    ],
    "correct": 2,
    "explanation": "The most effective way to ensure that all dependencies have been satisfied is to perform the change in a matching test environment to ensure that all issues have been identified and resolved. Updating policies and procedures as well as diagrams is typically done after major changes that result in a need for updates. Legacy applications that may create dependencies are not the only potential source of dependency issues."
  },
  {
    "id": "SEC-D1-083",
    "domain": "1.0",
    "question": "Lucca has implemented an authentication scheme that relies on ticket-granting tickets as part of the authentication process. What common authentication service has he implemented?",
    "answers": [
      "TACACS+",
      "Kerberos",
      "MS-CHAP",
      "EAP"
    ],
    "correct": 1,
    "explanation": "Kerberos uses authentication tickets and ticket-granting tickets to grant session keys for services that clients present to services to access them. TACACS+, MS-CHAP, and EAP do not use this ticket-based approach."
  },
  {
    "id": "SEC-D1-084",
    "domain": "1.0",
    "question": "Jocelyn wants to select a modern encryption algorithm for use in her organization. Which of the following is a currently recommended encryption algorithm?",
    "answers": [
      "AES-256",
      "SHA1",
      "DES",
      "Blowfish"
    ],
    "correct": 0,
    "explanation": "AES-256 is the only currently recommended encryption solution on the list. SHA-1 is a hashing algorithm. DES and Blowfish both have vulnerabilities and have been replaced in modern usage."
  },
  {
    "id": "SEC-D1-085",
    "domain": "1.0",
    "question": "Elizabeth wants to classify the following controls by their category. What category best describes lighting, fences, bollards, and access control vestibules?",
    "answers": [
      "Technical",
      "Managerial",
      "Operational",
      "Physical"
    ],
    "correct": 3,
    "explanation": "Lighting, fences, bollards, and access control vestibules are all examples of physical controls."
  },
  {
    "id": "SEC-D1-086",
    "domain": "1.0",
    "question": "Jack wants to ensure the integrity of a file that he is sending to a third party via email. How can he provide the integrity of a file to an organization that he has not done business with before?",
    "answers": [
      "Encrypt the file and send it to them.",
      "Digitally sign the file.",
      "Send a hash of the file in a separate email.",
      "Email the file size and original name in a separate email."
    ],
    "correct": 1,
    "explanation": "Jack should digitally sign the file and provide his public key to the other organization. This will allow them to validate his signature, as well as the integrity of the signed file. Encrypting the file does not ensure its integrity but does protect its confidentiality. Sending a hash does not ensure that the email was not modified, and emailing file size and name does not ensure the file was not changed."
  },
  {
    "id": "SEC-D1-087",
    "domain": "1.0",
    "question": "Annie notices that her browser shows that the certificate for the site she is visiting is not valid. After performing some checks, she sees that the certificate is on the CA's certificate revocation list. Which of the following is not a reason for a certificate to be on a CRL?",
    "answers": [
      "The CA is compromised.",
      "The certificate's private key was compromised.",
      "The certificate was signed with a stolen key.",
      "The certificate expired."
    ],
    "correct": 3,
    "explanation": "Certificates expire, but expiration does not place them on a CRL. That avoids extremely long CRLs in most cases, and the expired certificate contains sufficient information to know that the certificate is expired without being on a CRL. Reasons to add a certificate to a CLR include the CA being compromised, the certificate's private key being compromised, a mis-issued certificate, certificate detail changes that require a reissued certificate, or certificates that were fraudulently signed, typically by a subordinate CA that was exploited or had poor practices."
  },
  {
    "id": "SEC-D1-088",
    "domain": "1.0",
    "question": "Mohinder wants to use modern, secure hashing algorithms to validate files against known good originals. Which of the following hashing algorithms should he select?",
    "answers": [
      "MD5",
      "SHA-1",
      "AES-256",
      "SHA-256"
    ],
    "correct": 3,
    "explanation": "SHA-256 is the only hashing algorithm listed that is considered current and secure as of the publication of this book. MD5 and SHA-1 both have known security issues, and AES-256 is an encryption algorithm."
  },
  {
    "id": "SEC-D1-089",
    "domain": "1.0",
    "question": "Derrick wants to validate an encrypted and digitally signed message sent using asymmetric encryption. What does he need from the sender to validate the message?",
    "answers": [
      "The sender's private key",
      "Derrick's private key",
      "The sender's public key",
      "Derrick's public key"
    ],
    "correct": 2,
    "explanation": "To verify whether a message was signed by a sender, the recipient needs the sender's public key."
  },
  {
    "id": "SEC-D1-090",
    "domain": "1.0",
    "question": "The major patch release that Susan's team installed has failed, resulting in a nonworking service. What should her team do according to change management best practices?",
    "answers": [
      "Declare an outage.",
      "Follow the documented backout plan.",
      "Restore from backups to the previous version.",
      "Uninstall the patch and validate service function."
    ],
    "correct": 1,
    "explanation": "Creating a complete backout plan and implementing it if something goes wrong that cannot be remediated during a change window is the accepted best practice in this scenario. That may involve restoring from backups or uninstalling the patch, but neither of these options is necessarily the correct answer in all circumstances. Similarly, declaring an outage may be necessary, but following the backout plan and communicating effectively is the best option."
  },
  {
    "id": "SEC-D1-091",
    "domain": "1.0",
    "question": "The web server that Angela's organization manages was recently compromised and the SSL certificate's private key was accessed by attackers. Angela's team has completed remediation and has created a new CSR, including a new private key that they have secured. What type of control type best describes the creation of a new key and certificate in this circumstance?",
    "answers": [
      "Corrective",
      "Compensating",
      "Deterrent",
      "Detective"
    ],
    "correct": 0,
    "explanation": "This is a corrective control because it remediates a security issue after the event has occurred. A compensating control would attempt to mitigate a risk associated with exceptions made to a security policy. Deterrent controls attempt to prevent an attacker from violating security policies, and detective controls identify security events that have already happened."
  },
  {
    "id": "SEC-D1-092",
    "domain": "1.0",
    "question": "Mikayla's zero-trust system has received a request for access with an identity, and the basic criteria for access have been met. What should the system do next before providing access to the resource requested?",
    "answers": [
      "Check the remote system's security status.",
      "Require reauthentication using MFA.",
      "Check the user's rights to ensure they can access the resource.",
      "Determine its level of confidence in the request."
    ],
    "correct": 3,
    "explanation": "A zero-trust system should validate its level of confidence in a request that it receives once the basic criteria have been met. This may involve checking the access against known patterns of access by the user, validating current threat feed information, or checking other details that will help ensure the security and authenticity of the request."
  },
  {
    "id": "SEC-D1-093",
    "domain": "1.0",
    "question": "Charles sets up an RDP server on an isolated network segment and places a file on it called passwords.xlsx. He then configures his IPS and DLP systems to monitor for that file exiting the network segment. What type of tool has Charles deployed?",
    "answers": [
      "A honeyfile",
      "A SQL trap",
      "A red flag",
      "A trigger file"
    ],
    "correct": 0,
    "explanation": "While many honeyfiles use canary tokens, simply monitoring for known files exiting systems that should not be accessed under normal circumstances is also a valid means to construct a honeypot and honeyfile-based detection system. Charles can use the file and the isolated system to detect attackers who attempt to exfiltrate the file. The other answers were made up for this question."
  },
  {
    "id": "SEC-D1-094",
    "domain": "1.0",
    "question": "Lucca is using precomputed rainbow tables to attempt to crack hashed passwords from a data breach. He knows that two users have the same password, but the hashes do not match. What password hash security technique has Lucca most likely encountered?",
    "answers": [
      "Password encryption",
      "Salting",
      "Hash rotation",
      "Password mismatching"
    ],
    "correct": 1,
    "explanation": "Salting uses a unique, randomly generated string that is added to each password before it is hashed. That means that even matching passwords will not have the same hash. This prevents rainbow tables from being effectively used against password hashes due to the added computational load it creates for precomputing hashes."
  },
  {
    "id": "SEC-D1-095",
    "domain": "1.0",
    "question": "What operating system is commonly associated with secure enclaves?",
    "answers": [
      "Windows",
      "iOS",
      "Linux",
      "Android"
    ],
    "correct": 1,
    "explanation": "Secure enclaves are used by Apple devices to securely store security information like cryptographic keys."
  },
  {
    "id": "SEC-D1-096",
    "domain": "1.0",
    "question": "Isaac is concerned that the passwords that his users are creating are too short and can be easily brute-forced if their hashes were compromised. Rather than make his users remember longer passwords, he would like to implement a technical solution to help make the hashes more resistant to cracking. What solution can he use to help with this?",
    "answers": [
      "Implement pass-the-hash algorithms.",
      "Use a collision-resistant hashing algorithm.",
      "Implement key stretching techniques.",
      "Encrypt passwords rather than hashing them."
    ],
    "correct": 2,
    "explanation": "Implementing key stretching techniques can help short--and thus weak--passwords resist brute-force hash cracking techniques. They won't help against brute-force password guessing attacks, so Isaac will need to implement other controls against that type of attack. Pass-the-hash attacks reuse hashes, and thus aren't a technique used to prevent brute-force attacks against hashed passwords. Collision resistance is a requirement for an effective hashing algorithm and should be part of any password hash storage implementation. Encrypting passwords is not a recommended practice because it leaves passwords in the hands of the organization rather than hashes and requires the organization to decrypt passwords to check them when they are used, creating frequent opportunities for exposure."
  },
  {
    "id": "SEC-D1-097",
    "domain": "1.0",
    "question": "Christina wants to implement access badges printed with picture IDs for her organization, but she wants to use a wireless reader. What access badge technology is commonly implemented in scenarios like this?",
    "answers": [
      "Wi-Fi-enabled access badges",
      "RFID access badges",
      "Bluetooth-enabled access badges",
      "NFC access badges"
    ],
    "correct": 1,
    "explanation": "RFID badges are the most commonly implemented wireless identification badges. Wi-Fi and Bluetooth both require additional power for devices and thus are not a good fit for a badge, and NFC-enabled badges have not come into common use at this time, although they are increasingly available for mobile device-enabled badges."
  },
  {
    "id": "SEC-D1-098",
    "domain": "1.0",
    "question": "Kendra's vulnerability management team has discovered that Internet of Things (IoT) devices deployed a few years ago to monitor temperatures for critical refrigerated equipment are vulnerable to a new attack. After reviewing the issue, her team has discovered that the devices are no longer supported and that the manufacturer has gone out of business. They suggest moving the devices to an isolated network to help protect them. What type of control has Kendra's team suggested?",
    "answers": [
      "A corrective control",
      "A compensating control",
      "A confidentiality control",
      "A coordinated control"
    ],
    "correct": 1,
    "explanation": "A compensating control helps to mitigate a risk due to an exception to a security policy. Here, the devices cannot be patched or fixed but are important to the operations of the organization. Moving them to a protected network will help compensate for the lack of patching. Since no security issues have occurred, this is not a corrective control. Confidentiality and coordinated controls are not control types for the Security+ exam."
  },
  {
    "id": "SEC-D1-099",
    "domain": "1.0",
    "question": "Which of the following is not a common factor in adaptive authentication for zero trust?",
    "answers": [
      "Where the user is logging in from",
      "Whether the user has logged in recently from another device",
      "What device the user is logging in from",
      "If the device is configured correctly"
    ],
    "correct": 1,
    "explanation": "Adaptive authentication looks at the context of a login, including where they're logging in from--both geographically, and from a network trust perspective, what device they're logging in from, and if the device is configured correctly. In modern, multidevice usage, whether the user has logged in recently from another device isn't as likely to be considered, but if the devices were in different countries it would likely raise a flag!"
  },
  {
    "id": "SEC-D1-100",
    "domain": "1.0",
    "question": "Juan's organization is designing their zero-trust model. Which of the following statements is true for network security zones?",
    "answers": [
      "All communication is secured, regardless of the network security zone it occurs in.",
      "Communication receives additional security in low-trust zones.",
      "Communication receives less security in high-trust zones.",
      "All zero-trust networks are considered secured zones."
    ],
    "correct": 0,
    "explanation": "One of the basic tenets of zero-trust architecture is that all communication is secured, regardless of the security zone or trust zone that it occurs in. Additional security should not be required, nor should communications receive less security in higher trust zones. All zero-trust networks are considered potential risk areas--thus the zero in zero trust!"
  },
  {
    "id": "SEC-D1-101",
    "domain": "1.0",
    "question": "What advantage do microwave sensors have over infrared sensors?",
    "answers": [
      "They can detect heat signatures.",
      "They are cheaper than infrared sensors.",
      "They can penetrate some types of walls.",
      "They do not interfere with sensitive equipment."
    ],
    "correct": 2,
    "explanation": "Microwave sensors work in temperature ranges that infrared sensors do not, and they can penetrate walls and some small spaces allowing more complete coverage. Microwave sensors cannot detect heat signatures, are not cheaper than infrared sensors, and can interfere with some types of sensitive equipment."
  },
  {
    "id": "SEC-D1-102",
    "domain": "1.0",
    "question": "Isaac is conducting a physical penetration test and wants to bypass an access control vestibule. What must he accomplish?",
    "answers": [
      "He needs to persuade an individual to allow him to follow them through a single door.",
      "He needs to acquire an individual's access card.",
      "He needs to persuade an individual to allow him to follow them through two doors in a row.",
      "He needs to acquire the individual's access PIN."
    ],
    "correct": 2,
    "explanation": "Access control vestibules are intended to make it obvious that someone is following you through secured doors and may only be large enough for a single person to come through at once. Larger vestibules rely on staff noticing that the person following them through is not providing credentials and ensuring that doors close between access attempts."
  },
  {
    "id": "SEC-D1-103",
    "domain": "1.0",
    "question": "Rachel wants to select an obfuscation method that will allow her customer service representatives to validate customer identities without providing full access to customer data. What should she select?",
    "answers": [
      "Tokenization",
      "Data masking",
      "Steganography",
      "Hashing"
    ],
    "correct": 1,
    "explanation": "Data masking reveals only part of a field and is often used with details like credit card numbers or Social Security numbers where only the last four digits will be revealed for validation purposes."
  },
  {
    "id": "SEC-D1-104",
    "domain": "1.0",
    "question": "Valerie's manager has informed her that version control must be implemented for her development team's work. Which of the following is not a common, security-related reason for version control?",
    "answers": [
      "To help with patching",
      "To track each contributor's workload",
      "To ensure the proper version is deployed",
      "To help with change management"
    ],
    "correct": 1,
    "explanation": "While version control has many useful impacts on security, tracking workload is not a security-related issue for version control."
  },
  {
    "id": "SEC-D1-105",
    "domain": "1.0",
    "question": "Jackie's change management process involves reporting functional validation test results to stakeholders. Which of the following is not a common stakeholder or stakeholder group for an application upgrade?",
    "answers": [
      "Application administrators",
      "Service owners",
      "System administrators",
      "Auditors"
    ],
    "correct": 3,
    "explanation": "While auditors may request application version information during audits, they are not typically notified during normal application updates and patching cycles. Application administrators, service owners, and system administrators are all commonly notified about functional validation test results so that they can take further action or know that the service update is complete."
  },
  {
    "id": "SEC-D1-106",
    "domain": "1.0",
    "question": "How many keypairs are required for four individuals to communicate securely using asymmetric encryption?",
    "answers": [
      "1",
      "4",
      "8",
      "12"
    ],
    "correct": 1,
    "explanation": "Each individual has their own keypair in asymmetric encryption systems; thus, for four individuals to communicate securely using asymmetric encryption four keypairs are needed."
  },
  {
    "id": "SEC-D1-107",
    "domain": "1.0",
    "question": "Michelle wants to store secrets for her organization in a cloud service. She wants to ensure the greatest level of security for her organization, and she is willing to spend more money to provide that security. What solution should she look for?",
    "answers": [
      "A shared cloud TPM",
      "A shared cloud HSM",
      "A dedicated hardware cloud TPM",
      "A dedicated hardware cloud HSM"
    ],
    "correct": 3,
    "explanation": "A dedicated, hardware-based, cloud-hosted hardware security module (HSM) is an appropriate solution for Michelle's needs. Cloud providers often provide shared HSMs as a service, which can increase perceived risk due to the shared underlying hardware. Dedicated hardware is typically available at a higher cost. Trusted platform modules (TPMs) are used to provide secure boot and related services, not to store secrets for an organization."
  },
  {
    "id": "SEC-D1-108",
    "domain": "1.0",
    "question": "Murali wants to digitally sign a file. What key does he need to sign it?",
    "answers": [
      "The recipient's private key",
      "His private key",
      "The recipient's public key",
      "His public key"
    ],
    "correct": 1,
    "explanation": "To sign a file, Murali needs to use his own private key. The recipient can then use their public key to validate the signature."
  },
  {
    "id": "SEC-D1-109",
    "domain": "1.0",
    "question": "What information is necessary for a certificate to be identified properly in an OCSP request?",
    "answers": [
      "The domain name",
      "The original requestor's name",
      "The certificate's serial number",
      "The identifier for the open public ledger entry"
    ],
    "correct": 2,
    "explanation": "OCSP requests must include the certificate's serial number to allow the OCSP responder to check the CA database for the certificate and its status. It does not require the domain name or requestor's name. Open public ledgers are part of blockchains, not OCSP."
  },
  {
    "id": "SEC-D1-110",
    "domain": "1.0",
    "question": "Rick checks the certificate for the site he is viewing and sees that it reads *.example.com. What type of certificate is this, and why is it in use?",
    "answers": [
      "It is a self-signed certificate, and it is used for testing purposes.",
      "It is a wildcard certificate and is used for testing purposes.",
      "It is a wildcard certificate and is used for multiple subdomains.",
      "It is a self-signed certificate and is used for multiple subdomains."
    ],
    "correct": 2,
    "explanation": "Wildcard certificates have a * in them, denoting that they can be used for any subdomain. For example, in this question, the wildcard would match any *.example.com subdomain like test.example.com and sales.example.com. Self-signed certificates will not link to a root or intermediate CA, and thus cannot be verified with CAs."
  },
  {
    "id": "SEC-D1-111",
    "domain": "1.0",
    "question": "John wants to write a procedure that addresses what to do if an employee inadvertently discloses their password due to a phishing attempt. What type of control is John considering?",
    "answers": [
      "A directive control",
      "A proactive control",
      "A deterrent control",
      "A preventive control"
    ],
    "correct": 0,
    "explanation": "Policies and procedures are examples of directive controls. Deterrent controls attempt to dissuade attackers from taking action. Preventive controls attempt to stop security issues from occurring. Proactive controls are not a control category used on the Security+ exam."
  },
  {
    "id": "SEC-D1-112",
    "domain": "1.0",
    "question": "Adam has been asked to implement an allow list for websites that his servers can visit. What concern should he raise about the implementation of allow lists?",
    "answers": [
      "Allow lists can be difficult to manage and cause failures if sites that are needed are not added.",
      "Allow lists do not prevent sites from being visited if they are not on the allow list.",
      "Allow lists cannot be configured to allow entire domains to be visited, creating significant overhead.",
      "Allow lists are prone to error, allowing unwanted sites to be added."
    ],
    "correct": 0,
    "explanation": "Allow lists can be difficult to manage over time, particularly as manufacturers and vendors add additional download and update sites and subdomains. This creates additional work for administrators and can cause errors or issues with updates and patching if not carefully monitored. Allow lists do prevent sites from being visited if they are not on the list, they can be configured with wildcards to allow entire domains or subdomains if desired, and they only allow sites that are added, meaning any problems with unwanted sites are the responsibility of the allow list administrator."
  },
  {
    "id": "SEC-D1-113",
    "domain": "1.0",
    "question": "Jim wants to implement an authentication framework for his wireless network. Which of the following is most commonly used for wireless network authentication?",
    "answers": [
      "EAP",
      "MS-CHAP",
      "Kerberos",
      "LDAP"
    ],
    "correct": 0,
    "explanation": "EAP is commonly used for authentication to wireless networks. MS-CHAP is used with PPTP-based VPNs, Kerberos is used for organizationwide authentication, and LDAP is used as part of authentication in Microsoft Active Directory domains, among other uses."
  },
  {
    "id": "SEC-D1-114",
    "domain": "1.0",
    "question": "Gary is preparing change management documentation for an application restart after patching. What step should immediately follow the application restart?",
    "answers": [
      "Validation testing",
      "Documenting the change occurred",
      "Updating version control",
      "Vulnerability scanning"
    ],
    "correct": 0,
    "explanation": "Validation testing should follow application restarts to ensure the application is working as expected after the restart. Documentation and updating version information can be done after the validation because if validation fails the change may need to be reversed. Vulnerability scanning should have been done prior to implementation in a test environment if needed, and then should be done as part of ongoing security operations."
  },
  {
    "id": "SEC-D1-115",
    "domain": "1.0",
    "question": "Anna has been told that her organization has deployed microwave sensors in the organization's warehouses. What are microwave sensors most frequently used to detect?",
    "answers": [
      "Motion",
      "Glass break",
      "Heat signatures",
      "Pressure"
    ],
    "correct": 0,
    "explanation": "Microwave sensors are commonly used to detect motion and have advantages over infrared sensors because they can work in a greater temperature range as well as traveling through some obstacles that would not allow infrared to penetrate them. They do not capture audio and are therefore not used for glass-break sensors, they do not capture thermal data like infrared sensors, and they are not pressure sensors."
  },
  {
    "id": "SEC-D1-116",
    "domain": "1.0",
    "question": "When is data on a drive that uses full-disk encryption at the greatest risk?",
    "answers": [
      "During the system boot process",
      "When the system is off",
      "When the system is logged in and in use",
      "When the system is being shut down"
    ],
    "correct": 2,
    "explanation": "In order for a drive to be used, it must be accessible to the operating system, meaning that when the system is logged in and in use data can be accessed. When full-disk encryption systems are booting and not logged in or when they are being shut down, they are typically not in a greater risk state, and they are most secure when shut down."
  },
  {
    "id": "SEC-D1-117",
    "domain": "1.0",
    "question": "Alex has configured full-disk encryption for laptops that his organization issues to employees. What cybersecurity objective does this primarily support?",
    "answers": [
      "Confidentiality",
      "Availability",
      "Authenticity",
      "Integrity"
    ],
    "correct": 0,
    "explanation": "Full-disk encryption primarily supports confidentiality by preventing unwanted access to the drive if it is stolen or otherwise exposed. The three objectives are confidentiality, integrity, and availability, which means authenticity is not a possible answer. Encryption does not increase availability, and integrity ensures that data has not been changed inadvertently or maliciously. Thus, encryption can help, but it is not as strong of an answer as confidentiality."
  },
  {
    "id": "SEC-D1-118",
    "domain": "1.0",
    "question": "What process reviews control objectives for an organization, system, or service to determine if controls do not meet the control objectives?",
    "answers": [
      "A penetration test",
      "A gap analysis",
      "A Boolean analysis",
      "A risk analysis"
    ],
    "correct": 1,
    "explanation": "A gap analysis is used to determine whether controls meet control objectives for a service, an organization, or a system. Penetration tests simulate an attacker trying to gain access or breach systems and other controls. Boolean analysis is not a security term, and risk analysis is done as part of risk assessment."
  },
  {
    "id": "SEC-D1-119",
    "domain": "1.0",
    "question": "Frank configures an access control list to ensure that only specific IP addresses are able to connect to a service. What type of control has he deployed?",
    "answers": [
      "Managerial",
      "Physical",
      "Technical",
      "Operational"
    ],
    "correct": 2,
    "explanation": "Access control lists are best described as technical controls. Managerial controls are procedural mechanisms; physical controls are controls that impact the physical world, like locks or fences; and operational controls are processes used to manage technology in a secure manner, like the change management process Frank will likely follow to make changes to the access control list."
  },
  {
    "id": "SEC-D1-120",
    "domain": "1.0",
    "question": "Annie has recently implemented a video surveillance system for her organization. What is the largest driver for new ongoing costs for an unmonitored video surveillance system?",
    "answers": [
      "Camera maintenance",
      "The ongoing cost of storage",
      "Security guards",
      "Licensing"
    ],
    "correct": 1,
    "explanation": "Video surveillance system storage can drive additional costs based on decisions like how long video is retained, sensitivity levels, video resolution, and how heavily trafficked camera covered areas are. Licensing may grow if additional cameras are added, but there is no information in the question indicating changes in the size of the implementation. Since this is an unmonitored system, no guards are involved, and camera maintenance is not a typical issue for a newly deployed system."
  },
  {
    "id": "SEC-D1-121",
    "domain": "1.0",
    "question": "Henry's organization has recently experienced a ransomware attack and is restoring backups from a secure backup system. What type of security control is Henry using?",
    "answers": [
      "A preventive control",
      "A directive control",
      "A compensating control",
      "A corrective control"
    ],
    "correct": 3,
    "explanation": "Restoring from backups helps to remediate a security issue, making this a corrective control. Preventive controls for Henry's situation might include endpoint detection and response (EDR) tools, directive controls would include policies and procedures for ransomware events, and compensating controls would be used if exceptions to the security policies needed to be made."
  },
  {
    "id": "SEC-D1-122",
    "domain": "1.0",
    "question": "What data obfuscation technique relies on a lookup table that allows you to match the data you want to secure to a randomly generated value to ensure that the actual value is not easily accessible?",
    "answers": [
      "Hashing",
      "Tokenization",
      "Randomization",
      "Masking"
    ],
    "correct": 1,
    "explanation": "Tokenization commonly uses randomly generated values that are assigned to replace existing known values. The token is stored in a lookup table, allowing the token to be checked against the table if needed. Hashing relies on a hash function, which is not mentioned here; randomization is not a data obfuscation technique; and masking replaces some or all of a sensitive field with a replacement character to ensure the data is unreadable when displayed."
  },
  {
    "id": "SEC-D1-123",
    "domain": "1.0",
    "question": "What challenge drives the need for key exchange mechanisms?",
    "answers": [
      "The number of keys required for symmetric encryption",
      "The need to determine if a key is public",
      "The need to exchange keys in a way that prevents others from obtaining a copy",
      "The need to securely return keys to their owner after they are traded"
    ],
    "correct": 2,
    "explanation": "Key exchange algorithms focus on how to securely exchange keys so that others cannot obtain a copy of the key. Asymmetric encryption is used instead of symmetric encryption to resolve the issue of large numbers of symmetric keys; keys are either public or private in asymmetric systems and determining if they are public is not considered a problem; and keys are not returned to their owner, as only public keys should be exchanged."
  },
  {
    "id": "SEC-D1-124",
    "domain": "1.0",
    "question": "Jackie is performing an impact analysis prior to a large-scale change her team is preparing to implement. Which of the following groups is not typically part of the impact analysis?",
    "answers": [
      "Stakeholders",
      "System administrators",
      "Service owners",
      "Legal counsel"
    ],
    "correct": 3,
    "explanation": "Legal counsel is not typically part of change management processes. Stakeholders, service owners, and system administrators are commonly involved in impact analysis sessions."
  },
  {
    "id": "SEC-D1-125",
    "domain": "1.0",
    "question": "Ilya wants to create a certificate signing request. Which of the following is not a typical part of a CSR?",
    "answers": [
      "The common name of the server",
      "The organization's legal name",
      "A contact email address",
      "The organization's phone number"
    ],
    "correct": 3,
    "explanation": "Certificate requests include the common name (CN); organization (O); organization unit in the organization (OU); city or locality (L); the state, county, or region (S); country (C); and organizational contact email address."
  },
  {
    "id": "SEC-D1-126",
    "domain": "1.0",
    "question": "Before Tony stores a password hash, he appends a string of characters that is unique to each password generated using an algorithm he created. What technique is Tony using to help protect his password hashes?",
    "answers": [
      "Tokenization",
      "Steganography",
      "Salting",
      "Key stretching"
    ],
    "correct": 2,
    "explanation": "Tony is salting his password, which involves adding a string of characters to the password before it is hashed. This creates a unique hash, even if the password itself is an easily guessed or common password."
  },
  {
    "id": "SEC-D1-127",
    "domain": "1.0",
    "question": "Which of the following is not a step taken when a transaction is entered in a blockchain?",
    "answers": [
      "The value of the block is determined.",
      "The transaction is sent to a peer-to-peer network of computers.",
      "The transaction is validated using equations.",
      "A transaction history is maintained as part of the blockchain."
    ],
    "correct": 0,
    "explanation": "While cryptocurrency is a common use of blockchain technology, it isn't the only use. Values of blocks are not determined as part of transactions--in fact, even in cryptocurrency uses, values are determined by prices set on exchanges as sellers and buyers exchange cryptocurrencies."
  },
  {
    "id": "SEC-D1-128",
    "domain": "1.0",
    "question": "Kent wants to encrypt network traffic in transit. What cryptographic protocol is most frequently used to add encryption to existing protocols?",
    "answers": [
      "S/MIME",
      "TLS",
      "MPLS",
      "SSH"
    ],
    "correct": 1,
    "explanation": "TLS, or Transport Layer Security, is a cryptographic protocol used to secure network traffic in transit. S/MIME, or Secure MIME, is used for digital signatures and encryption for email. MPLS is multiprotocol label switching, a network routing technique. SSH is Secure Shell and is used for encrypted command-line access as well as to tunnel other protocols in some cases."
  },
  {
    "id": "SEC-D1-129",
    "domain": "1.0",
    "question": "Which of the following is not a common concern in change management processes related to legacy applications?",
    "answers": [
      "Lack of vendor support",
      "Lack of patches and updates",
      "Ongoing licensing costs",
      "Availability of third-party or consultant expertise"
    ],
    "correct": 2,
    "explanation": "Legacy applications are often unsupported, don't receive new patches or updates, and have a shrinking or nonexistent base of consultants and experts. Licensing for legal applications is often not available; this making ongoing licensing costs a less frequent concern."
  },
  {
    "id": "SEC-D1-130",
    "domain": "1.0",
    "question": "Elaine wants to document the technical concerns that dependencies create as part of her change management process. Which of the following concerns is the most common when dependencies are encountered as part of change management?",
    "answers": [
      "Documenting the dependencies to ensure they are addressed",
      "Removing the dependencies as part of the change",
      "Patching the dependencies in addition to the main application",
      "Updating diagrams related to the dependencies"
    ],
    "correct": 0,
    "explanation": "Change management processes typically focus on documenting dependencies and ensuring they are met. That may involve ensuring that the appropriate version is installed or that applications are restarted in a specific order, or that a service is available that is needed for a system to successfully function. Removing dependencies is unlikely, patching may or may not be required, and updating diagrams is less important than ensuring the dependencies are understood and met."
  },
  {
    "id": "SEC-D1-131",
    "domain": "1.0",
    "question": "Gary has implemented record-level encryption for his database. How many keys will he use in a typical implementation of record-level encryption?",
    "answers": [
      "One key per record",
      "One key per column",
      "One key per table",
      "One key per database"
    ],
    "correct": 0,
    "explanation": "Record-level encryption relies on a unique key for each record, keeping records private to a user or account in typical usage."
  },
  {
    "id": "SEC-D1-132",
    "domain": "1.0",
    "question": "Justin's laptop is part of his organization's zero-trust architecture. What term is used to refer to a device like a laptop, desktop, or mobile device in a zero-trust design?",
    "answers": [
      "A subject",
      "A policy engine",
      "A service provider",
      "A policy application point"
    ],
    "correct": 0,
    "explanation": "Justin's laptop is a subject. Subjects like users, applications, or devices are not trusted by default. Justin's system is also likely a policy enforcement point, not a policy application point, and will run a zero-trust client application that will interface with the zero-trust framework to determine if the system is secure as part of authentication and authorization processes. Policy engines evaluate policies and use threat information and other data to determine if access should be given in the context of the time, place, and system the request is made from. Service providers are concepts used in federation, rather than in zero-trust environments."
  },
  {
    "id": "SEC-D1-133",
    "domain": "1.0",
    "question": "Susan's organization has deployed a zero-trust architecture. Which of the following zero-trust control plane components uses rules to determine who can access a service based on the security status of their system, threat data, and similar information?",
    "answers": [
      "Adaptive authorization",
      "Threat scope reduction",
      "Policy-driven access control",
      "Secured zones"
    ],
    "correct": 2,
    "explanation": "Policy-driven access control focuses on using rules to determine who can access a service based on security state and other information. Adaptive authorization adjusts authorization levels based on factors like device status, user behavior, and location. Threat scope reduction is a key concept in zero trust that focuses on ensuring that threats have less of a target to attack if they enter the secure environment. Secured zones are no longer a critical concept for zero trust, as continuous verification means all interactions are secured and validated."
  },
  {
    "id": "SEC-D1-134",
    "domain": "1.0",
    "question": "Scott wants to implement OCSP as part of an application he is creating. What will he implement?",
    "answers": [
      "A corrective control security process",
      "Certificate status checking",
      "Transport encryption",
      "Full-disk encryption"
    ],
    "correct": 1,
    "explanation": "OCSP, or the Online Certificate Status Protocol, provides a way to check on the status of a certificate, including whether it has been revoked."
  },
  {
    "id": "SEC-D1-135",
    "domain": "1.0",
    "question": "Which of the following is not a common reason to implement key escrow?",
    "answers": [
      "Regulatory compliance",
      "Providing access to encrypted data for administrative reasons",
      "Providing access to encrypted data in emergencies",
      "Preventing the need for key rotation after a user leaves"
    ],
    "correct": 3,
    "explanation": "Key rotation should occur when a user leaves, even if the key is escrowed. Regulatory compliance as well as providing access for administrative or emergency access to organizational data are common reasons to implement key escrow."
  },
  {
    "id": "SEC-D1-136",
    "domain": "1.0",
    "question": "Yariv discovers that he has exposed his private key to other users in his organization by sending it via email instead of his public key. What should he do?",
    "answers": [
      "Ask the other users to delete any copies of his private key that they may have.",
      "Immediately add his key to a CRL and reissue the key.",
      "Create a new keypair and notify others that he has replaced his keypair.",
      "Continue to operate as normal as long as the private key was not used maliciously."
    ],
    "correct": 2,
    "explanation": "Once a private key has been exposed, it should not be considered secure, even in an organization of trusted users. Since Yariv exposed his private key via email, he cannot ensure that it is not available in another user's email archives, and he must immediately create a new keypair and advise individuals that he works with of his new public key."
  },
  {
    "id": "SEC-D1-137",
    "domain": "1.0",
    "question": "What happens if a mistake is made and an incorrect transaction is entered into the open public ledger in a blockchain?",
    "answers": [
      "The transaction is reversed once it is discovered, and the original transaction is removed from the record.",
      "A new transaction must be processed, and both transactions remain in the record.",
      "The original transaction is updated and becomes the new record.",
      "An error block must be mined and labeled with the transaction number and error details."
    ],
    "correct": 1,
    "explanation": "Since blockchains are not changed after transactions are recorded, a new transaction must be recorded and both transactions remain in the record as part of the ledger."
  },
  {
    "id": "SEC-D1-138",
    "domain": "1.0",
    "question": "Which of the following activities will not typically result in a need to update policies and procedures?",
    "answers": [
      "Deploying a new application",
      "Installing patches for an existing application",
      "Conducting a lessons learned exercise after an incident",
      "Changes in regulations"
    ],
    "correct": 1,
    "explanation": "Patches and updates are less likely to result in a need to update policies and procedures. New applications, lessons learned exercises, and regulatory changes are all likely to result in changes to policies and procedures."
  },
  {
    "id": "SEC-D1-139",
    "domain": "1.0",
    "question": "Hrant's organization wants to ensure that staff members use both something they know and something they have as part of their physical access control scheme. Which of the following solutions meets that requirement?",
    "answers": [
      "Security guards and access badges",
      "Keys and access control vestibules",
      "Access badges and PINs",
      "Security guards and access control vestibules"
    ],
    "correct": 2,
    "explanation": "Access badges are an example of something you have, and PINs are an example of something you know. Combining the two is a common requirement to help prevent a lost badge from providing access to a secure facility. A security desk with a guard is more costly but can be more effective if the guards are well trained and diligent, but the needs of Hrant's organization are met properly by the access badge and PIN."
  },
  {
    "id": "SEC-D1-140",
    "domain": "1.0",
    "question": "Julia wants to detect if an intruder enters a space using a sensor system. Which of the following is not typically used to detect intruders?",
    "answers": [
      "Infrared sensors",
      "Pressure sensors",
      "Microwave sensors",
      "Ultrasonic sensors"
    ],
    "correct": 2,
    "explanation": "Microwave sensors are not commonly used to detect intruders. Infrared and ultrasonic sensors are commonly used, and pressure sensors may be used in special circumstances."
  },
  {
    "id": "SEC-D1-141",
    "domain": "1.0",
    "question": "Which of the following is not true for a secure cryptographic hash system?",
    "answers": [
      "Hashes are a one-way function.",
      "Hashes generate a fixed length output.",
      "Hashes may generate the same output for multiple inputs.",
      "Hashes are commonly used to verify the integrity of files."
    ],
    "correct": 2,
    "explanation": "Secure cryptographic hash systems should not generate the same output for two different inputs. They should, however, be one-way functions and generate fixed length output, and they are commonly used to verify the integrity of files."
  },
  {
    "id": "SEC-D1-142",
    "domain": "1.0",
    "question": "Casey wants to prevent tailgating attacks on her datacenter. What type of physical security solution should she put in place?",
    "answers": [
      "Video surveillance",
      "Bollards",
      "An access control vestibule",
      "Access badges"
    ],
    "correct": 2,
    "explanation": "Access control vestibules are designed to stop tailgating attacks, which occur when someone follows an authorized user into a space. Access badges do not prevent this, as tailgating relies on passing through a door someone with access has opened. Video surveillance may allow you to see the attack but won't stop it, and bollards are used to prevent vehicles from passing through a space."
  },
  {
    "id": "SEC-D1-143",
    "domain": "1.0",
    "question": "As Casey continues to work to secure her datacenter, she decides to deploy access badges. What technique will provide the greatest assurance that a stolen or cloned access badge will not allow an attacker access?",
    "answers": [
      "Use barcode-based badges.",
      "Require a PIN along with the badge.",
      "Use RFID-based badges.",
      "Include a picture of the user on the badge."
    ],
    "correct": 1,
    "explanation": "Requiring a PIN is the best option unless guards are in place to validate that the person using the badge matches the badge. Even then a PIN may be better than a picture if the badge does not have other elements like holographic seals that will prevent it from being modified. Barcode and RFID badges can still be cloned and are not as effective as requiring a knowledge-based identifier as well as a possession-based identifier."
  },
  {
    "id": "SEC-D1-144",
    "domain": "1.0",
    "question": "What term describes the function of digital signatures related to proving that the signature was provided by the owner of a given private key?",
    "answers": [
      "Ledger-based validation",
      "Nonrepudiation",
      "Key stretching",
      "Authentication"
    ],
    "correct": 1,
    "explanation": "A feature of digital signatures is nonrepudiation. A signed file or message can be proven to be from the signer, proving that it is legitimate. Key stretching describes techniques used to make it harder to crack weak keys. Authentication is the process of validating that a person is who they say they are but is not specific to digital signatures. Ledger-based validation was made up for this question."
  },
  {
    "id": "SEC-D1-145",
    "domain": "1.0",
    "question": "John wants to send his public key to another user. What steps are necessary to do so?",
    "answers": [
      "The key must be sent using Diffie-Hellman.",
      "The key can simply be sent via email or other means.",
      "The key must be sent using RSA.",
      "The key must be signed, then sent via email or other means."
    ],
    "correct": 1,
    "explanation": "Public keys can simply be sent to another user if so desired. It is common to provide public keys via key servers or even in email signatures, although addition verification that the key belongs to an individual may be desirable, if not required."
  },
  {
    "id": "SEC-D1-146",
    "domain": "1.0",
    "question": "Tracy wants to use the most secure salting solution she can. Which of the following options will provide the most secure salt?",
    "answers": [
      "Set a salt value and store it in a database.",
      "Set a salt value and store it in the program code.",
      "Generate a unique salt for each hashed entry.",
      "Generate a unique salt value every time a value is used."
    ],
    "correct": 2,
    "explanation": "Generating a unique salt for each hashed entry is the most secure option among those listed. Storing a fixed salt in a database or in code reduces the complexity of the salted information, making it possible for an attacker to acquire the single salt and then attack the stored hashes. Generating a unique salt every time a value is used is impractical due to the rate of change."
  },
  {
    "id": "SEC-D1-147",
    "domain": "1.0",
    "question": "Bob conducts a periodic risk assessment of his organization. What category of security control is this?",
    "answers": [
      "Technical",
      "Managerial",
      "Operational",
      "Physical"
    ],
    "correct": 1,
    "explanation": "Risk assessments are an example of a managerial control, which includes procedural mechanisms related to the risk management process. Technical controls enforce confidentiality, integrity, and availability using technical means. Physical controls like locks and fences impact the physical world. Operational controls include processes put in place to manage technology in a secure manner."
  },
  {
    "id": "SEC-D1-148",
    "domain": "1.0",
    "question": "After a breach, Jackie removes malicious software from a server that she is responsible for. What control type should she classify this as?",
    "answers": [
      "Preventive",
      "Corrective",
      "Compensating",
      "Deterrent"
    ],
    "correct": 1,
    "explanation": "Removing malicious software is an example of a corrective control, which seeks to remediate security issues that have already occurred. Preventive controls are intended to stop security issues from occurring. Compensating controls are designed to mitigate risks associated with exemptions to the security policy, like moving systems to a secure network segment because they cannot be patched. Deterrent controls attempt to prevent a malicious actor from violating security policies."
  },
  {
    "id": "SEC-D1-149",
    "domain": "1.0",
    "question": "What can a root SSL (TLS) certificate do?",
    "answers": [
      "Remove a certificate from a CRL",
      "Generate a signing key and use it to sign a new certificate",
      "Authorize new CA users",
      "Allow key stretching"
    ],
    "correct": 1,
    "explanation": "Root certificates are at the root of trust in a CA hierarchy and allow signing keys to be created and used to sign certificates. They are not used to authorize new CA users or to remove certificates from a CRL. Key stretching is used to make weak keys stronger, not as part of cryptographic certificates."
  },
  {
    "id": "SEC-D1-150",
    "domain": "1.0",
    "question": "Christina wants to authenticate individuals as part of her AAA implementation. What will she need to do to authenticate users?",
    "answers": [
      "Match users to roles and ensure that rights are assigned.",
      "Conduct biometric enrollments for every user.",
      "Use identity proofing for each user she creates.",
      "Ensure that users provide an identity and one or more authentication factors."
    ],
    "correct": 3,
    "explanation": "Authentication requires that users provide (claim) an identity and then provide one or more authentication factors like a password, biometric factor, or multifactor code. Authorization relies on matching users and roles to allow users to perform tasks once they are authenticated. Biometric enrollments and identity proofing may be desirable but are not necessarily required for any given authentication system."
  }
];
