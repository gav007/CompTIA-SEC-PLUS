/* CompTIA Security+ SY0-701 -- Domain 3.0
   226 review questions extracted from:
     9781394211388-Chapter-3-Domain-3-0--Security-Architecture.epub
   Correct answers + explanations from:
     9781394211388-Appendix-Answers-to-Review-Questions.epub
   Regenerate with: python tools/extract_domain.py 3
   Question order matches the book; `correct` is a 0-based index into
   `answers` (the app shuffles answer order at runtime, so never rely
   on A/B/C/D here). */

window.QUESTION_BANKS = window.QUESTION_BANKS || {};
window.QUESTION_BANKS["domain3"] = [
  {
    "id": "SEC-D3-001",
    "domain": "3.0",
    "question": "Nancy wants to adopt a backup strategy that will meet her organization's desires about the amount of data that could be lost in a scenario where a restoration from backup was required and also wants to establish guidelines for how long a restoration should take. What two key objectives should she set?",
    "answers": [
      "An RPO and an RTO",
      "An RFBT and an RPO",
      "An RPO and an MTBF",
      "An MTBF and an RFBT"
    ],
    "correct": 0,
    "explanation": "Organizations set recovery point objectives (RPOs) which describe how much data is acceptable to lose in a data loss event, and recovery time objectives (RTOs), which describe the maximum amount of time that it should take to recover data. Together these two objectives help guide backup strategy and infrastructure design and implementation. MTBF (mean time before failure) describes the mean time before a device like a hard drive, power supply, or network switch will fail, typically described in hours of powered-on operation. RFBT was made up for this question."
  },
  {
    "id": "SEC-D3-002",
    "domain": "3.0",
    "question": "John is running an IDS on his network. Users sometimes report that the IDS flags legitimate traffic as an attack. What describes this?",
    "answers": [
      "False positive",
      "False negative",
      "False trigger",
      "False flag"
    ],
    "correct": 0,
    "explanation": "When an intrusion detection system (IDS) or antivirus/antimalware mistakes legitimate traffic for an attack, this is called a false positive. A false negative is when the IDS mistakes an attack for legitimate traffic. It is the opposite of a false positive. False trigger and false flag are both incorrect. Although these may be grammatically correct, these are not the terms used in the industry. In military operations, false flag operations attempt to transfer blame to another organization or adversary, thus a \"false flag.\""
  },
  {
    "id": "SEC-D3-003",
    "domain": "3.0",
    "question": "Enrique is concerned about backup data being infected by malware. The company backs up key servers to digital storage on a backup server. Which of the following would be most effective in preventing the backup data being infected by malware?",
    "answers": [
      "Place the backup server on a separate VLAN.",
      "Air gap the backup server.",
      "Place the backup server on a different network segment.",
      "Use a honeynet."
    ],
    "correct": 1,
    "explanation": "Air gapping refers to the server not being on a network. This means literally that there is \"air\" between the server and the network. This prevents malware from infecting the backup server. A separate virtual local area network (VLAN) or physical network segment can enhance security but is not as effective as air gapping. A honeynet is used to detect attacks against a network, but it doesn't provide effective defense against malware in this scenario."
  },
  {
    "id": "SEC-D3-004",
    "domain": "3.0",
    "question": "What type of system is used to control and monitor power plant power generation systems?",
    "answers": [
      "IPG",
      "SEED",
      "SCADA",
      "ICD"
    ],
    "correct": 2,
    "explanation": "SCADA, or supervisory control and data acquisition systems, are commonly used to manage facilities like power plants. The remaining options were made up."
  },
  {
    "id": "SEC-D3-005",
    "domain": "3.0",
    "question": "Geoff wants to establish a contract with a company to have datacenter space that is equipped and ready to go so that he can bring his data to the location in the event of a disaster. What type of disaster recovery site is he looking for?",
    "answers": [
      "A hot site",
      "A cold site",
      "A warm site",
      "An RTO site"
    ],
    "correct": 2,
    "explanation": "Geoff is looking for a warm site, which has some or all of the infrastructure and systems he needs but does not have data. If a disaster occurs, Geoff can bring any equipment that he needs or wants to the site along with his organization's data to resume operations. A hot site is a fully functional environment with all the hardware, software, and data needed to operate an organization. They are expensive to maintain and run but are used by organizations that cannot take the risk of downtime. A cold site is a location that can be brought online but does not have systems; cold sites typically have access to power and bandwidth but need to be fully equipped to operate after a disaster since they are just rented space. An RTO is a recovery time objective, and it measures how long it should take to resume operations; it is not a type of disaster recovery site."
  },
  {
    "id": "SEC-D3-006",
    "domain": "3.0",
    "question": "Olivia needs to ensure an IoT device does not have its operating system modified by third parties after it is sold. What solution should she implement to ensure that this does not occur?",
    "answers": [
      "Set a default password.",
      "Require signed and encrypted firmware.",
      "Check the MD5sum for new firmware versions.",
      "Patch regularly."
    ],
    "correct": 1,
    "explanation": "If Olivia wants to ensure that third parties will be unable to modify the operating system for Internet of Things (IoT) devices, requiring signed and encrypted firmware for operating system updates is an effective means of stopping all but the most advanced threats. Setting a default password means that a common password will be known. Checking the MD5sum for new firmware versions will help administrators validate that the firmware is legitimate, but signed and encrypted firmware is a much stronger control. Finally, regular patching may help secure the devices but won't prevent OS modifications."
  },
  {
    "id": "SEC-D3-007",
    "domain": "3.0",
    "question": "Maria is a security engineer with a manufacturing company. During a recent investigation, she discovered that an engineer's compromised workstation was being used to connect to SCADA systems while the engineer was not logged in. The engineer is responsible for administering the SCADA systems and cannot be blocked from connecting to them. What should Maria do to mitigate this threat?",
    "answers": [
      "Install host-based antivirus/antimalware software on the engineer's system.",
      "Implement account usage auditing on the SCADA system.",
      "Implement an NIPS on the SCADA system.",
      "Use FDE on the engineer's system."
    ],
    "correct": 1,
    "explanation": "Maria should implement ongoing auditing of the account usage on the SCADA system. This will provide a warning that someone's account is being used when they are not actually using it. Host-based antivirus/antimalware is almost never a bad idea, but this scenario did not indicate that the compromise was due to malware, so antimalware may not address the threat. Since the engineer has access to the SCADA system, a network intrusion prevention system (NIPS) is unlikely to block them from accessing the system, and full-disk encryption (FDE) will not mitigate this threat because the system is live and running, meaning that the disk will be decrypted in use."
  },
  {
    "id": "SEC-D3-008",
    "domain": "3.0",
    "question": "Mike is a security analyst and has just removed malware from a virtual server. What feature of virtualization would he use to return the virtual server to a last known good state?",
    "answers": [
      "Sandboxing",
      "Hypervisor",
      "Snapshot",
      "Elasticity"
    ],
    "correct": 2,
    "explanation": "A snapshot is an image of the virtual machine (VM) at some point in time. It is standard practice to periodically take a snapshot of a virtual system so that you can return that system to a last known good state. Sandboxing is the process of isolating a system or software. The hypervisor is the mechanism through which the virtual environment interacts with the hardware, and elasticity is the ability for the system to scale."
  },
  {
    "id": "SEC-D3-009",
    "domain": "3.0",
    "question": "Which of the following is not an advantage of a serverless architecture?",
    "answers": [
      "It does not require a system administrator.",
      "It can scale as function call frequency increases.",
      "It can scale as function call frequency decreases.",
      "It is ideal for complex applications."
    ],
    "correct": 3,
    "explanation": "Serverless architectures do not require a system administrator because the provider manages the underlying function-as-a-service (FaaS) capability. It can also scale up or scale down as needed, allowing it to be very flexible. Serverless architectures are typically not ideal for complex applications and instead tend to work better for microservices."
  },
  {
    "id": "SEC-D3-010",
    "domain": "3.0",
    "question": "Which of the following is the most important benefit from implementing SDN?",
    "answers": [
      "It will stop malware.",
      "It provides scalability.",
      "It will detect intrusions.",
      "It will prevent session hijacking."
    ],
    "correct": 1,
    "explanation": "Software-defined networking (SDN) makes the network very scalable. It is relatively easy to add on new resources or remove unneeded resources, and it helps with high availability efforts. SDN does not stop malware, detect intrusions, or prevent session hijacking."
  },
  {
    "id": "SEC-D3-011",
    "domain": "3.0",
    "question": "Derek has been asked to implement his organization's service-oriented architecture as a set of microservices. What does he need to implement?",
    "answers": [
      "A set of loosely coupled services with specific purposes",
      "A set of services that run on very small systems",
      "A set of tightly coupled services with custom-designed protocols to ensure continuous operation",
      "A set of services using third-party applications in a connected network enabled with industry standard protocols"
    ],
    "correct": 0,
    "explanation": "A microservice architecture builds applications as a set of loosely coupled services that provide specific functions using lightweight protocols. It doesn't specifically define the size of the systems, but it is not a tightly coupled environment. Protocol choice is often open standards-based, but the emphasis is on lightweight protocols. There is not a requirement that services be in-house or third party exclusively."
  },
  {
    "id": "SEC-D3-012",
    "domain": "3.0",
    "question": "Abigail is responsible for datacenters in a large, multinational company. She has to support multiple datacenters in diverse geographic regions. What would be the most effective way for her to manage these centers consistently across the enterprise?",
    "answers": [
      "Hire datacenter managers for each center.",
      "Implement enterprise-wide SDN.",
      "Implement infrastructure as code (IaC).",
      "Automate provisioning and deprovisioning."
    ],
    "correct": 2,
    "explanation": "The correct answer is to implement IaC. Infrastructure as code (IaC) is the process of managing and provisioning computer datacenters through machine-readable definition files, rather than physical hardware configuration or interactive configuration tools. Whether the datacenter(s) use physical machines or virtual machines, this is an effective way to manage the datacenters. Although datacenter managers may be needed, that won't necessarily provide consistent management across the enterprise. Software-defined networking (SDN) will not fix this problem, but it would help if Abigail needed to configure and manage her network based on usage and performance. Finally, this issue is not just about provisioning; it is about management."
  },
  {
    "id": "SEC-D3-013",
    "domain": "3.0",
    "question": "Naomi wants to secure a real-time operating system (RTOS). Which of the following techniques is best suited to providing RTOS security?",
    "answers": [
      "Disable the web browser.",
      "Install a host firewall.",
      "Use secure firmware.",
      "Install antimalware software."
    ],
    "correct": 2,
    "explanation": "Using secure firmware, as well as using an RTOS with time and space partitioning, are both common methods to help ensure RTOS security. Unlike traditional operating systems, real-time operating systems are used in applications where they need to deal with inputs immediately. That means that adding additional load like firewalls and antimalware is not a typical component in RTOS applications. For similar reasons, you're unlikely to find a web browser on most devices running an RTOS."
  },
  {
    "id": "SEC-D3-014",
    "domain": "3.0",
    "question": "Ben has been asked to explain the security implications for an embedded system that his organization is considering building and selling. Which of the following is not a typical concern for embedded systems?",
    "answers": [
      "Limited processor power",
      "An inability to patch",
      "Lack of authentication capabilities",
      "Lack of bulk storage"
    ],
    "correct": 3,
    "explanation": "Embedded systems can bring a broad range of security implications, many of which are driven by the limited capabilities of the processors and hardware they are frequently built with. Low-power consumption designs may lack computational power and thus have challenges implementing strong cryptography, network connectivity, and other similar problems. Patching embedded systems can be challenging both because of where they are deployed and because of a lack of connectivity for them--in fact, in many environments, you may not want the devices to be connected to your network. Since many don't have a screen, keyboard, or a network connection, authentication is also a problem. Few embedded devices, however, need bulk storage, making the lack of bulk storage a problem that typically isn't a major concern."
  },
  {
    "id": "SEC-D3-015",
    "domain": "3.0",
    "question": "Madhuri has configured a backup that will back up all of the changes to a system since the last time that a full backup occurred. What type of backup has she set up?",
    "answers": [
      "A snapshot",
      "A full backup",
      "An incremental backup",
      "A differential"
    ],
    "correct": 3,
    "explanation": "Differential backups back up all of the changes since the last full backup. An incremental backup backs up all changes since the last incremental backup. A snapshot captures machine state and the full drive at a bitwise level, and full backups are a complete copy of a system but typically do not include the memory state."
  },
  {
    "id": "SEC-D3-016",
    "domain": "3.0",
    "question": "Devin is building a cloud system and wants to ensure that it can adapt to changes in its workload by provisioning or deprovisioning resources automatically. His goal is to ensure that the environment is not overprovisioned or underprovisioned and that he is efficiently spending money on his infrastructure. What concept describes this?",
    "answers": [
      "Vertical scalability",
      "Elasticity",
      "Horizontal scalability",
      "Normalization"
    ],
    "correct": 1,
    "explanation": "Elasticity is a cloud computing concept that matches resources to demand to ensure that an infrastructure closely matches the needs of the environment. Scalability is the ability to grow or shrink as needed but does not directly include the concept of matching to workload. Normalization is a code development concept used to ensure that data is in a consistent form."
  },
  {
    "id": "SEC-D3-017",
    "domain": "3.0",
    "question": "Nathaniel wants to improve the fault tolerance of a server in his datacenter. If he wants to ensure that a power outage does not cause the server to lose power, what is the first control he should deploy from the following list?",
    "answers": [
      "A UPS",
      "A generator",
      "Dual power supplies",
      "Managed power units (PDUs)"
    ],
    "correct": 0,
    "explanation": "An uninterruptable power supply (UPS) should be Nathaniel's first priority. Ensuring that power is not disrupted during an outage and can be maintained for a short period until alternate power like a generator can come online is critical, and a UPS can provide that capability. A generator alone will take longer to come online, resulting in an outage. Dual power supplies can help to build resilience by allowing multiple power sources and avoiding issues if a power supply does fail, but that is not the focus of the question. A managed power distribution unit (PDU) provides remote management and power monitoring but will not prevent power loss in an outage."
  },
  {
    "id": "SEC-D3-018",
    "domain": "3.0",
    "question": "George is a network administrator at a power plant. He notices that several turbines had unusual ramp-ups in cycles last week. After investigating, he finds that an executable was uploaded to the system control console and caused this. Which of the following would be most effective in preventing this from affecting the SCADA system in the future?",
    "answers": [
      "Implement SDN.",
      "Improve patch management.",
      "Place the SCADA system on a separate VLAN.",
      "Implement encrypted data transmissions."
    ],
    "correct": 2,
    "explanation": "Separating the SCADA (supervisory control and data acquisition) system from the main network makes it less likely that the SCADA system can be affected from the main network. This includes malware as well as human action. Software-defined networking (SDN) would make isolating the SCADA system easier but would not actually isolate it. Patch management is always important, but in this case, it would not have prevented the issue. Encrypted data transmissions, such as TLS, would have no effect on this situation."
  },
  {
    "id": "SEC-D3-019",
    "domain": "3.0",
    "question": "Mia is a network administrator for a bank. She is responsible for secure communications with her company's customer website. Which of the following would be the best for her to implement?",
    "answers": [
      "SSL",
      "PPTP",
      "IPSec",
      "TLS"
    ],
    "correct": 3,
    "explanation": "Transport Layer Security (TLS) provides a reliable method of encrypting web traffic. It supports mutual authentication and is considered secure. Although Secure Sockets Layer (SSL) can encrypt web traffic, TLS was created in 1999 as its successor. Although many network administrators still use the term SSL, in most cases today what you are using is actually TLS, not the outdated SSL. Point-to-point Tunneling Protocol (PPTP) and Internet Protocol Security (IPSec) are protocols for establishing a VPN, not for encrypting web traffic."
  },
  {
    "id": "SEC-D3-020",
    "domain": "3.0",
    "question": "Nora has rented a building with access to bandwidth and power in case her organization ever experiences a disaster. What type of site has she established?",
    "answers": [
      "A hot site",
      "A cold site",
      "A warm site",
      "A MOU site"
    ],
    "correct": 1,
    "explanation": "Nora has established a cold site. A cold site is a location that can be brought online but does not have systems; cold sites typically have access to power and bandwidth, but they need to be fully equipped to operate after a disaster since they are just rented space. Warm sites have some or all of the infrastructure and systems Nora needs but does not have data. A hot site is a fully functional environment with all of the hardware, software, and data needed to operate an organization. They are expensive to maintain and run but are used by organizations that cannot take the risk of downtime. A MOU is a memorandum of understanding and is not a type of disaster recovery site."
  },
  {
    "id": "SEC-D3-021",
    "domain": "3.0",
    "question": "Mike is concerned about data sovereignty for data that his organization captures and maintains. What best describes his concern?",
    "answers": [
      "Who owns the data that is captured on systems hosted in a cloud provider's infrastructure?",
      "Can Mike's organization make decisions about data that is part of its service, or does it belong to users?",
      "Is the data located in a country subject to the laws of the country where it is stored?",
      "Does data have rights on its own, or does the owner of the data determine what rights may apply to it?"
    ],
    "correct": 2,
    "explanation": "Data sovereignty refers to the concept that data that is collected and stored in a country is subject to that country's laws. This can be a complex issue with multinational cloud services and providers that may store data in multiple countries as part of their normal architecture. It may also create compliance and other challenges based on differences in national laws regarding data, data privacy, and similar issues."
  },
  {
    "id": "SEC-D3-022",
    "domain": "3.0",
    "question": "What are the key limiting factors for cryptography on low-power devices?",
    "answers": [
      "There are system limitations on memory, CPU, and storage.",
      "The devices cannot support public key encryption due to an inability to factor prime numbers.",
      "There is a lack of chipset support for encryption.",
      "Legal limitations for low-power devices prevent encryption from being supported."
    ],
    "correct": 0,
    "explanation": "Low-power devices typically have limited processor speed, memory, and storage, meaning that encryption can be a challenge. Fortunately, solutions exist that implement low-power cryptographic processing capabilities, and continued advances in processor design continue to make lower-power processors faster and more efficient. Legal limitations do not typically take into account whether a device is a low-power device, and public key encryption can be implemented on a wide range of CPUs and embedded systems, so factoring prime numbers is unlikely to be an issue."
  },
  {
    "id": "SEC-D3-023",
    "domain": "3.0",
    "question": "Elaine wants to adopt appropriate response and recovery controls for natural disasters. What type of control should she use to prepare for a multi-hour power outage caused by a tornado?",
    "answers": [
      "A hot site",
      "A generator",
      "A PDU",
      "A UPS"
    ],
    "correct": 1,
    "explanation": "A generator is the most appropriate answer to a multi-hour outage. Although a hot site would allow her organization to stay online, the cost of a hot site is much higher than that of a generator. A PDU, or power distribution unit, is used to manage and distribute power, not to handle power outages. Finally, UPS systems are not typically designed to handle long outages. Instead, they condition power and ensure that systems remain online long enough for a generator to take over providing power."
  },
  {
    "id": "SEC-D3-024",
    "domain": "3.0",
    "question": "Tim wants to ensure that his web servers can scale horizontally during traffic increases, while also allowing them to be patched or upgraded without causing outages. What type of network device should he deploy?",
    "answers": [
      "A firewall",
      "A switch",
      "A horizontal scaler",
      "A network load balancer"
    ],
    "correct": 3,
    "explanation": "Network load balancers distribute traffic among systems, allowing systems to be added or removed, and making patching and upgrades easier by draining connections from systems and removing them from the pool when work needs to be done on them. They can also help monitor systems for performance, report on issues, and ensure that loads match the capabilities of the systems that they are in front of. Firewalls are used for security, switches are a network device used to transfer traffic to the correct system, and a horizontal scaler was made up for this question."
  },
  {
    "id": "SEC-D3-025",
    "domain": "3.0",
    "question": "Nathaniel has deployed the control infrastructure for his manufacturing plant without a network connection to his other networks. What term describes this type of configuration?",
    "answers": [
      "Screened subnet",
      "Air gap",
      "Vaulting",
      "A hot aisle"
    ],
    "correct": 1,
    "explanation": "Nathaniel has created an air gap, a physical separation that will require manual transport of files, patches, and other data between the two environments. This helps to ensure that attackers cannot access critical systems and that insiders cannot export data from the environment easily. A screened subnet, also known as a demilitarized zone (DMZ), is a separate network segment or zone that is exposed to the outside world or other lower trust area. A vault is a secured space or room. Hot and cold isles are equipment arrangements used in server rooms or datacenters to efficiently circulate air and keep server racks and other equipment cool."
  },
  {
    "id": "SEC-D3-026",
    "domain": "3.0",
    "question": "Chris is preparing to implement an 802.1X-enabled wireless infrastructure. He knows that he wants to use an Extensible Authentication Protocol (EAP)-based protocol that does not require client-side certificates. Which of the following options should he choose?",
    "answers": [
      "EAP-MD5",
      "PEAP",
      "LEAP",
      "EAP-TLS"
    ],
    "correct": 1,
    "explanation": "The option that best meets the needs described is PEAP, the Protected Extensible Authentication Protocol. PEAP relies on server-side certificates and on tunneling to ensure communications security. EAP-MD5 is not recommended for wireless networks and does not support mutual authentication of the wireless client and network. LEAP, the Lightweight Extensible Authentication Protocol, uses WEP keys for its encryption and is not recommended due to security issues. Finally, EAP-TLS, or EAP Transport Layer Security, requires certificates on both the client and server, consuming more management overhead."
  },
  {
    "id": "SEC-D3-027",
    "domain": "3.0",
    "question": "Olivia is implementing a load-balanced web application cluster. Her organization already has a redundant pair of load balancers, but each unit is not rated to handle the maximum designed throughput of the cluster by itself. Olivia has recommended that the load balancers be implemented in an active/active design. What concern should she raise as part of this recommendation?",
    "answers": [
      "The load balancer cluster cannot be patched without a service outage.",
      "The load balancer cluster is vulnerable to a denial-of-service attack.",
      "If one of the load balancers fails, it could lead to service degradation.",
      "The load balancer cannot handle the throughput due to having two active nodes."
    ],
    "correct": 2,
    "explanation": "Olivia should make her organization aware that a failure in one of the active nodes would result in less maximum throughput and a potential for service degradation. Since services are rarely run at maximum capacity, and many can have maintenance windows scheduled, this does not mean that the load balancers cannot be patched. There is nothing in this design that makes the load balancers more vulnerable to denial-of-service than they would be under any other design. Having two active nodes will typically increase throughput over a single node."
  },
  {
    "id": "SEC-D3-028",
    "domain": "3.0",
    "question": "Mark is responsible for managing his company's load balancer and wants to use a load-balancing scheduling technique that will take into account the current server load and active sessions. Which of the following techniques should he choose?",
    "answers": [
      "Round-robin",
      "Weighted response time",
      "Least connection",
      "Source IP hashing"
    ],
    "correct": 2,
    "explanation": "Least connection-based load balancing takes load into consideration and sends the next request to the server with the least number of active sessions. Round-robin simply distributes requests to each server in order, whereas weighted time uses health checks to determine which server responds the most quickly on an ongoing basis and then sends the traffic to that server. Finally, source IP hashing uses the source and destination IP addresses to generate a hash key and then uses that key to track sessions, allowing interrupted sessions to be reallocated to the same server, and thus allowing the sessions to continue."
  },
  {
    "id": "SEC-D3-029",
    "domain": "3.0",
    "question": "Ramon is building a new web service and is considering which parts of the service should use Transport Layer Security (TLS). Components of the application include: Where should he implement TLS?",
    "answers": [
      "At points 1 and 2, and 4",
      "At points 2 and 3, and 4",
      "At points 1, 2, and 3",
      "At all points in the infrastructure"
    ],
    "correct": 3,
    "explanation": "The safest and most secure answer is that Ramon should simply implement TLS for the entire site. Although TLS does introduce some overhead, modern systems can handle large numbers of simultaneous TLS connections, making a secure website an easy answer in almost all cases."
  },
  {
    "id": "SEC-D3-030",
    "domain": "3.0",
    "question": "Which device would most likely process the following rules?",
    "answers": [
      "NIPS",
      "HIPS",
      "Content filter",
      "Firewall"
    ],
    "correct": 3,
    "explanation": "A firewall has two types of rules. One type is to allow specific traffic on a given port. The other type of rule is to deny traffic. What is shown here is a typical firewall rule. NIPS, HIPS, and content filter are incorrect. The rule shown is clearly a firewall rule.",
    "exhibit": "PERMIT IP ANY EQ 443\nDENY IP ANY ANY"
  },
  {
    "id": "SEC-D3-031",
    "domain": "3.0",
    "question": "Charles wants to use IPSec and needs to be able to determine the IPSec policy for traffic based on the port it is being sent to on the remote system. Which IPSec mode should he use?",
    "answers": [
      "IPSec tunnel mode",
      "IPSec PSK mode",
      "IPSec IKE mode",
      "IPSec transport mode"
    ],
    "correct": 3,
    "explanation": "Unlike IPSec's tunnel mode, IPSec transport mode allows different policies per port. The IP addresses in the outer header for transport mode packets are used to determine the policy applied to the packet. IPSec doesn't have a PSK mode, but WPA2 does. IKE is used to set up security associations in IPSec but doesn't allow this type of mode setting."
  },
  {
    "id": "SEC-D3-032",
    "domain": "3.0",
    "question": "What two connection methods are used for most geofencing applications?",
    "answers": [
      "Cellular and GPS",
      "USB and Bluetooth",
      "GPS and Wi-Fi",
      "Cellular and Bluetooth"
    ],
    "correct": 2,
    "explanation": "Global Positioning System (GPS) data and data about local Wi-Fi networks are the two most commonly used protocols to help geofencing applications determine where they are. When a known Wi-Fi signal is gained or lost, the geofencing application knows it is within range of that network. GPS data is even more useful because it can work in most locations and provide accurate location data. Although Bluetooth is sometimes used for geofencing, its limited range means that it is a third choice. Cellular information would require accurate tower-based triangulation, which means it is not typically used for geofencing applications, and of course USB is a wired protocol."
  },
  {
    "id": "SEC-D3-033",
    "domain": "3.0",
    "question": "Jason wants to implement a remote access virtual private network (VPN) for users in his organization who primarily rely on hosted web applications. What common VPN type is best suited to this if he wants to avoid deploying client software to his end-user systems?",
    "answers": [
      "A TLS VPN",
      "An RDP (Remote Desktop Protocol) VPN",
      "An Internet Control Message Protocol (ICMP) VPN",
      "An IPSec VPN"
    ],
    "correct": 0,
    "explanation": "A Transport Layer Security (TLS) VPN is frequently chosen when ease of use is important, and web applications are the primary usage mode. RDP is a remote access tool, not a VPN tool, and ICMP is used for things like ping, not for VPN. IPSec VPNs are used for site-to-site VPNs and for purposes where other protocols may be needed, because they make the endpoint system appear to be on the remote network."
  },
  {
    "id": "SEC-D3-034",
    "domain": "3.0",
    "question": "Binary data is an example of what type of data?",
    "answers": [
      "Non-human-readable",
      "Encrypted",
      "Human-readable",
      "Masked"
    ],
    "correct": 0,
    "explanation": "Binary data is a form of non-human-readable data. Encrypted data may be in binary format, but not all binary data is encrypted. Binary data is not human-readable, nor is it masked, which hides elements of data to allow for it to be used without exposing the underlying data."
  },
  {
    "id": "SEC-D3-035",
    "domain": "3.0",
    "question": "What IP address does a load balancer provide for external connections to connect to web servers in a load-balanced group?",
    "answers": [
      "The IP address for each server, in a prioritized order",
      "The load balancer's IP address",
      "The IP address for each server in a round-robin order",
      "A virtual IP address"
    ],
    "correct": 3,
    "explanation": "Load balancers provide a virtual IP, or VIP. Traffic sent to the VIP is directed to servers in the pool based on the load-balancing scheme that that pool is using--often a round-robin scheme, but other versions that include priority order and capacity tracking or ratings are also common. The load balancer's IP address is normally used to administer the system, and individual IP addresses for the clustered hosts are shielded by the load balancer to prevent traffic from consistently going to those hosts, thus creating a failure or load point."
  },
  {
    "id": "SEC-D3-036",
    "domain": "3.0",
    "question": "Matt has enabled port security on the network switches in his building. What does port security do?",
    "answers": [
      "Filters by MAC address",
      "Prevents routing protocol updates from being sent from protected ports",
      "Establishes private VLANs",
      "Prevents duplicate MAC addresses from connecting to the network"
    ],
    "correct": 0,
    "explanation": "Port security filters by MAC address, permitting allow listed MAC addresses to connect to the port and blocking block listed MAC addresses. Port security can be static, using a predetermined list or dynamically allowing a specific number of addresses to connect, or it can be run in a combination mode of both static and dynamic modes."
  },
  {
    "id": "SEC-D3-037",
    "domain": "3.0",
    "question": "Tom is responsible for VPN connections in his company. His company uses IPSec for VPNs. What is the primary purpose of AH in IPSec?",
    "answers": [
      "Encrypt the entire packet.",
      "Encrypt just the header.",
      "Authenticate the entire packet.",
      "Authenticate just the header."
    ],
    "correct": 2,
    "explanation": "Authentication headers (AHs) provide complete packet integrity, authenticating the packet and the header. Authentication headers do not provide any encryption at all, and authentication headers authenticate the entire packet, not just the header."
  },
  {
    "id": "SEC-D3-038",
    "domain": "3.0",
    "question": "Abigail is responsible for setting up a network-based intrusion prevention system (NIPS) on her network. The NIPS is located in one particular network segment. She is looking for a passive method to get a copy of all traffic to the NIPS network segment so that it can analyze the traffic. Which of the following would be her best choice?",
    "answers": [
      "Using a network tap",
      "Using port mirroring",
      "Setting the NIPS on a VLAN that is connected to all other segments",
      "Setting up a NIPS on each segment"
    ],
    "correct": 0,
    "explanation": "Network taps copy all traffic to another destination, allowing traffic visibility without a device inline. They are completely passive methods of getting network traffic to a central location. Port mirroring would get all the traffic to the network-based intrusion prevention system (NIPS) but is not completely passive. It requires the use of resources on switches to route a copy of the traffic. Incorrect switch configurations can cause looping. Configuring loop detection can prevent looped ports. Putting a network NIPS on every segment can be very expensive and require extensive configuration work. Setting up a NIPS on each segment would also dramatically increase administrative efforts."
  },
  {
    "id": "SEC-D3-039",
    "domain": "3.0",
    "question": "Janice is explaining how IPSec works to a new network administrator. She is trying to explain the role of IKE. Which of the following most closely matches the role of IKE in IPSec?",
    "answers": [
      "It encrypts the packet.",
      "It establishes the SAs.",
      "It authenticates the packet.",
      "It establishes the tunnel."
    ],
    "correct": 1,
    "explanation": "Internet key exchange (IKE) is used to set up security associations (SAs) on each end of the tunnel. The security associations have all the settings (i.e., cryptographic algorithms, hashes) for the tunnel. IKE is not directly involved in encrypting or authenticating. IKE itself does not establish the tunnel--it establishes the SAs."
  },
  {
    "id": "SEC-D3-040",
    "domain": "3.0",
    "question": "Emily manages the IDS/IPS for her network. She has a network-based intrusion prevention system (NIPS) installed and properly configured. It is not detecting obvious attacks on one specific network segment. She has verified that the NIPS is properly configured and working properly. What would be the most efficient way for her to address this?",
    "answers": [
      "Implement port mirror/monitor mode for that segment.",
      "Install a NIPS on that segment.",
      "Upgrade to a more effective NIPS.",
      "Isolate that segment on its own VLAN."
    ],
    "correct": 0,
    "explanation": "The NIPS is not seeing the traffic on that network segment. By implementing port mirroring, the traffic from that segment can be copied to the segment where the NIPS is installed. Installing a network IPS on the segment would require additional resources. This would work but is not the most efficient approach. Nothing in this scenario suggests that the NIPS is inadequate. It just is not seeing all the traffic. Finally, isolating the segment to its own VLAN would isolate that network segment but would still not allow the NIPS to analyze the traffic from that segment."
  },
  {
    "id": "SEC-D3-041",
    "domain": "3.0",
    "question": "You are responsible for an e-commerce site. The site is hosted in a cluster. Which of the following techniques would be best in assuring availability?",
    "answers": [
      "A VPN concentrator",
      "Aggregate switching",
      "An SSL accelerator",
      "Load balancing"
    ],
    "correct": 3,
    "explanation": "Load-balancing the cluster will prevent any single server from being overloaded. And if a given server is offline, other servers can take on its workload. A VPN concentrator, as the name suggests, is used to initiate virtual private networks (VPNs). Aggregate switching can shunt more bandwidth to the servers but won't mitigate the threat of one or more servers being offline. SSL accelerators are a method of offloading processor-intensive public key encryption for Transport Layer Security (TLS) and Secure Sockets Layer (SSL) to a hardware accelerator."
  },
  {
    "id": "SEC-D3-042",
    "domain": "3.0",
    "question": "Ryan is concerned about the security of his company's web application. Since the application processes confidential data, he is most concerned about data exposure. Which of the following would be the most important for him to implement?",
    "answers": [
      "WAF",
      "TLS",
      "NIPS",
      "NIDS"
    ],
    "correct": 1,
    "explanation": "The correct answer is to encrypt all the web traffic to this application using Transport Layer Security (TLS). This is one of the most fundamental security steps to take with any website. A web application firewall (WAF) is probably a good idea, but it is not the most important thing for Ryan to implement. While a network-based intrusion prevention system (NIPS) or network-based intrusion detection system (NIDS) may be a good idea, those should be considered after TLS is configured."
  },
  {
    "id": "SEC-D3-043",
    "domain": "3.0",
    "question": "Claire has been notified of a zero-day flaw in a web application. She has the exploit code, including a SQL injection attack that is being actively exploited. How can she quickly react to prevent this issue from impacting her environment if she needs the application to continue to function?",
    "answers": [
      "Deploy a detection rule to her IDS.",
      "Manually update the application code after reverse-engineering it.",
      "Deploy a fix via her WAF.",
      "Install the vendor-provided patch."
    ],
    "correct": 2,
    "explanation": "Claire's best option is to deploy a detection and fix via her web application firewall (WAF) that will detect the SQL injection (SQLi) attempt and prevent it. An intrusion detection system (IDS) only detects attacks and cannot stop them. Manually updating the application code after reverse-engineering it will take time, and she may not even have the source code or the ability to modify it. Finally, vendor patches for zero days typically take some time to come out even in the best of circumstances, meaning that Claire could be waiting on a patch for quite a while if that is the option she chooses."
  },
  {
    "id": "SEC-D3-044",
    "domain": "3.0",
    "question": "Christina wants to ensure that session persistence is maintained by her load balancer. What is she attempting to do?",
    "answers": [
      "Ensure that all of a client's requests go to the same server for the duration of a given session or transaction.",
      "Assign the same internal IP address to clients whenever they connect through the load balancer.",
      "Ensure that all transactions go to the current server in a round-robin during the time it is the primary server.",
      "Assign the same external IP address to all servers whenever they are the primary server assigned by the load balancer."
    ],
    "correct": 0,
    "explanation": "Session persistence makes sure that all of a client's traffic for a transaction or session goes to the same server or service. The remaining options do not properly describe how session persistence works."
  },
  {
    "id": "SEC-D3-045",
    "domain": "3.0",
    "question": "Next-generation firewalls include many cutting-edge features. Which of the following is not a common next-generation firewall capability?",
    "answers": [
      "Geolocation",
      "IPS and/or IDS",
      "Sandboxing",
      "SQL injection"
    ],
    "correct": 3,
    "explanation": "Although next-generation firewalls (NGFWs) provide may defensive capabilities, SQL injection (SQLi) is an attack instead of a defense. In addition to geolocation, intrusion detection system (IDS) and intrusion prevention system (IPS), and sandboxing capabilities, many next-generation firewalls include web application firewalls, load balancing, IP reputation and URL filtering, and antimalware and antivirus features."
  },
  {
    "id": "SEC-D3-046",
    "domain": "3.0",
    "question": "Patrick has been asked to identify a UTM appliance for his organization. Which of the following capabilities is not a common feature for a UTM device?",
    "answers": [
      "IDS and or IPS",
      "Antivirus/antimalware",
      "MDM",
      "DLP"
    ],
    "correct": 2,
    "explanation": "UTM, or unified threat management, devices commonly serve as firewalls, intrusion detection system (IDS)/intrusion prevention system (IPS), antivirus/antimalware, web proxies, web application and deep packet inspection, secure email gateways, data loss prevention (DLP), security information and event management (SIEM), and even virtual private networking (VPN) devices. They aren't mobile device management (MDM) or universal endpoint management devices, however, since their primary focus is on network security, not systems or device management."
  },
  {
    "id": "SEC-D3-047",
    "domain": "3.0",
    "question": "Theresa implements a network-based IDS. What can she do to traffic that passes through the IDS?",
    "answers": [
      "Review the traffic based on rules and detect and alert about unwanted or undesirable traffic.",
      "Review the traffic based on rules and detect and stop traffic based on those rules.",
      "Detect sensitive data being sent to the outside world and encrypt it as it passes through the IDS.",
      "All of the above."
    ],
    "correct": 0,
    "explanation": "IDSs, or intrusion detection systems, can only detect unwanted and malicious traffic based on the detection rules and signatures that they have. They cannot stop traffic or modify it. An IPS, or intrusion prevention system, that is placed in line with network traffic can take action on that traffic. Thus, IDSs are often used when it is not acceptable to block network traffic, or when a tap or other network device is used to clone traffic for inspection."
  },
  {
    "id": "SEC-D3-048",
    "domain": "3.0",
    "question": "Murali is building his organization's container security best practices document and wants to ensure that he covers the most common items for container security. Which of the following is not a specific concern for containers?",
    "answers": [
      "The security of the container host",
      "Securing the management stack for the container",
      "Insider threats",
      "Monitoring network traffic to and from the containers for threats and attacks"
    ],
    "correct": 2,
    "explanation": "Although insider threats are a concern, they're not any different for containers than any other system. Ensuring container host security, securing the management stack, and making sure that network traffic to and from containers is secure are all common container security concerns."
  },
  {
    "id": "SEC-D3-049",
    "domain": "3.0",
    "question": "Fred sets up his authentication and authorization system to apply the following rules to authenticated users: What type of access control is Fred using?",
    "answers": [
      "Geographic restrictions",
      "Time-based logins",
      "Supervisory control",
      "Role-based access"
    ],
    "correct": 0,
    "explanation": "This is an example of using geographic restrictions to protect data. Fred has rules that require additional authentication for those who are off-site and also those who may be performing impossible travel. Time is not part of both rules, there's no role description, and supervisory control is not a term used for this.",
    "exhibit": "- Users who are not logging in from inside the trusted network must use multifactor authentication.\n- Users who have logged in from geographic locations that are more than 100 miles apart within 15 minutes will be denied."
  },
  {
    "id": "SEC-D3-050",
    "domain": "3.0",
    "question": "Maria is responsible for security at a small company. She is concerned about unauthorized devices being connected to the network. She is looking for a device authentication process. Which of the following would be the best choice for her?",
    "answers": [
      "CHAP",
      "Kerberos",
      "802.11i",
      "802.1X"
    ],
    "correct": 3,
    "explanation": "802.1X is the IEEE standard for port-based network access control. This protocol is frequently used to authenticate devices. Challenge Handshake Authentication Protocol (CHAP) is an authentication protocol but not the best choice for device authentication. Kerberos is an authentication protocol but not the best choice for device authentication. 802.11i is the Wi-Fi security standard and is fully implemented in WPA2 and WPA3. It is not a device authentication procedure."
  },
  {
    "id": "SEC-D3-051",
    "domain": "3.0",
    "question": "Jason is considering deploying a network intrusion prevention system (IPS) and wants to be able to detect advanced persistent threats (APTs). What type of IPS detection method is most likely to detect the behaviors of an APT after it has gathered baseline information about normal operations?",
    "answers": [
      "Signature-based IPS detections",
      "Heuristic-based IPS detections",
      "Malicious tool hash IPS detections",
      "Anomaly-based IPS detections"
    ],
    "correct": 3,
    "explanation": "Anomaly-based detection systems build a behavioral baseline for networks and then assess differences from those baselines. They may use heuristic capabilities on top of those, but the question specifically asks about baselined operations pointing to an anomaly-based system. Heuristic-based detections look for behaviors that are typically malicious, and signature-based or hash-based detections look for known malicious tools or files."
  },
  {
    "id": "SEC-D3-052",
    "domain": "3.0",
    "question": "Mila wants to generate a unique digital fingerprint for a file, and needs to choose between a checksum and a hash. Which option should she choose and why should she choose it?",
    "answers": [
      "A hash, because it is unique to the file",
      "A checksum, because it verifies the contents of the file",
      "A hash, because it can be reversed to validate the file",
      "A checksum, because it is less prone to collisions than a hash"
    ],
    "correct": 0,
    "explanation": "Mila should select a hash because a hash is designed to be unique to each possible input. That means that multiple files could have the same checksum value, whereas a hashing algorithm will be unique for each file that it is run against."
  },
  {
    "id": "SEC-D3-053",
    "domain": "3.0",
    "question": "Mila gives her team a scenario, and then asks them questions about how they would respond, what issues they expect they might encounter, and how they would handle those issues. What type of exercise has she conducted?",
    "answers": [
      "A tabletop exercise",
      "A walk-through",
      "A simulation",
      "A drill"
    ],
    "correct": 0,
    "explanation": "Tabletop exercises are used to talk through a process. Unlike walk-throughs, which focus on a step-by-step review of an incident, Mila will focus more on how her team responds and on learning from those answers. A tabletop exercise can involve gaming out a situation. A simulation actually emulates an event or incident, either on a small or a large scale. Drills are not defined as part of the Security+ exam outline."
  },
  {
    "id": "SEC-D3-054",
    "domain": "3.0",
    "question": "Jerome needs to explain the key difference between high availability and fault tolerance to his management. What is the major difference between the two?",
    "answers": [
      "High availability is designed to avoid service interruptions almost entirely, whereas fault-tolerant environments have minimal service disruptions.",
      "High availability provides services, whereas fault tolerance handles issues.",
      "High availability focuses on data, whereas fault tolerance focuses on infrastructure.",
      "High availability has minimal service interruptions, whereas fault-tolerant environments are designed to avoid service interruptions almost entirely."
    ],
    "correct": 3,
    "explanation": "High-availability designs are less expensive because they attempt to minimize service interruptions, whereas fault-tolerant designs seek to avoid service interruptions almost entirely, and thus cost significantly more. Both focus on service availability and typically use both hardware and software tools to meet their goals."
  },
  {
    "id": "SEC-D3-055",
    "domain": "3.0",
    "question": "What element of the CIA triad is geographic dispersion intended to help with?",
    "answers": [
      "Confidentiality",
      "Integrity",
      "Assurance",
      "Availability"
    ],
    "correct": 3,
    "explanation": "Geographic dispersion is intended to help with availability by ensuring that a single disaster does not take multiple datacenters or other facilities offline. It does not directly impact confidentiality or integrity, and assurance is not part of the CIA triad."
  },
  {
    "id": "SEC-D3-056",
    "domain": "3.0",
    "question": "Valentine wants to choose an appropriate obfuscation method to allow her customer service representatives to validate credit card numbers without exposing the full number to the staff member. What obfuscation method should she select?",
    "answers": [
      "Masking",
      "Tokenization",
      "Steganography",
      "Hashing"
    ],
    "correct": 0,
    "explanation": "Masking replaces some characters with an alternate character, allowing tasks like validating credit card numbers without exposing all of a data field. Tokenization replaces values with a replacement value allowing data to be accessed without exposing the actual value. Steganography hides data in images and is not a useful solution in this scenario. Hashing is a mathematical technique that analyzes a file and computes a unique fingerprint, known as a message digest or hash, for that file."
  },
  {
    "id": "SEC-D3-057",
    "domain": "3.0",
    "question": "Mateo wants to conduct a fail over test for his datacenter. What will he need to do to accomplish this?",
    "answers": [
      "Turn off all systems in his datacenter.",
      "Simulate what would occur during a datacenter outage.",
      "Force a fail over using his network or other systems.",
      "Cause an outage of a critical system."
    ],
    "correct": 2,
    "explanation": "Datacenters should have a fail over process that can be manually executed in case of emergency. Mateo should use that process to fail over to his organization's fail over site. Turning off every system in a datacenter is not recommended as this may lead to other unexpected failures. Simulation is not a fail over test, and creating an outage of a critical system typically will not cause an entire datacenter to fail over."
  },
  {
    "id": "SEC-D3-058",
    "domain": "3.0",
    "question": "Casey's organization has proprietary information models that they use to analyze the market that they operate in. What data type best describes this information?",
    "answers": [
      "Trade secret",
      "Regulated",
      "Financial information",
      "Public information"
    ],
    "correct": 0,
    "explanation": "Trade secrets are intellectual property that is commercially valuable and is limited to a small group of individuals. Regulated information is controlled by law or has legal requirements around it. Financial information involves things related to monetary transactions or accounts. Public information is not controlled and is available to the public or could be without causing harm or concern."
  },
  {
    "id": "SEC-D3-059",
    "domain": "3.0",
    "question": "Nicole wants to protect her SMTP email exchanges from being read by others while on the wire. What can she implement to protect SMTP?",
    "answers": [
      "SPF",
      "TLS",
      "DKIM",
      "EXIF"
    ],
    "correct": 1,
    "explanation": "Implementing Transport Layer Security (TLS) to encapsulate Simple Mail Transfer Protocol (SMTP) would allow the traffic to be encrypted in transit, protecting it from being read. Sender Policy Framework (SPF) and DomainKeys Identified Mail (DKIM) are both used to prevent spoofing, and Exchangeable Image File Format (EXIF) is information found in an image file."
  },
  {
    "id": "SEC-D3-060",
    "domain": "3.0",
    "question": "Brandon deploys a server in a VLAN used for IoT devices. He then creates firewall rules that allow users in a system administration network to SSH to that server so that they can manage systems in the protected network segment. What type of solution has Brandon deployed?",
    "answers": [
      "A UTM",
      "A jump server",
      "An ICS server",
      "A VPN"
    ],
    "correct": 1,
    "explanation": "Jump servers are used to access secured zones and are typically carefully controlled and monitored because they are the single point of entry from untrusted environments. A Unified Threat Management (UTM) is a security device that combines firewall features with a variety of other security functions. ICS stands for Industrial Control System. This is not an ICS, although the IoT devices it allows connections to may be a form of ICS. VPNs, or virtual private networks, encapsulate and protect network traffic as it moves through untrusted networks."
  },
  {
    "id": "SEC-D3-061",
    "domain": "3.0",
    "question": "What protocol is commonly used to allow for secured tunnels between corporate networks through untrusted networks?",
    "answers": [
      "RTOS",
      "SHA-1",
      "IPSec",
      "RSA"
    ],
    "correct": 2,
    "explanation": "IPSec virtual private networks are commonly established to tunnel through public or untrusted networks. A RTOS, or real-time operating system, is used for embedded systems. SHA-1 is a hashing algorithm, and RSA is an encryption algorithm that is used for IPSec as part of its authentication process. IPSec tunnels themselves commonly use AES, but may use other algorithms as well."
  },
  {
    "id": "SEC-D3-062",
    "domain": "3.0",
    "question": "Asher's organization has created a list of potential customers based on an analysis of their use of their site, buying habits, and ability to spend money on new products. What type of data is a list like this?",
    "answers": [
      "Legal information",
      "Trade secrets",
      "Regulated data",
      "Classified data"
    ],
    "correct": 1,
    "explanation": "Intellectual property that would have value to competitors and that is kept confidential to preserve it for competitive advantage is a trade secret. Legal information is typically related to contracts, regulations, or similar matters. Regulated data is covered by law, and classified data is used by governments."
  },
  {
    "id": "SEC-D3-063",
    "domain": "3.0",
    "question": "Eva wants to deploy a network security device that will provide firewall services as well as IPS and email filtering. Which device should she deploy?",
    "answers": [
      "A UTM",
      "An FWSM",
      "A WAF",
      "An ELB"
    ],
    "correct": 0,
    "explanation": "A unified threat management (UTM) device combines multiple security services including firewall, IDS or IPS, antivirus/antimalware, email filtering, WAF, and similar services into a single solution. An FWSM, or firewall service module, is an older Cisco chassis-based firewall; a WAF is a web application firewall; and an ELB is Elastic Load Balancer, a load-balancing service available via AWS."
  },
  {
    "id": "SEC-D3-064",
    "domain": "3.0",
    "question": "Ramon wants to conduct an exercise for his organization with the least potential to cause disruption. Which of the following testing methodologies is least likely to cause potential issues with service delivery?",
    "answers": [
      "Tabletop exercises",
      "Fail over exercises",
      "Simulation exercises",
      "Parallel processing exercises"
    ],
    "correct": 0,
    "explanation": "Tabletop exercises do not involve an actual technical system and instead are gamed out in a room. This means they're least likely to cause disruptions. Fail over and parallel processing exercises can have actual impact to live systems, and simulation exercises require care because simulated calls and actions may inadvertently become real if staff are not fully aware of the scenario being an exercise or accidentally execute a command that can cause actual impact."
  },
  {
    "id": "SEC-D3-065",
    "domain": "3.0",
    "question": "Cassandra is considering transitioning from an on-premises to a hybrid cloud environment. Which of the following concerns will she need to consider that would not have been required in a single on-premises datacenter previously?",
    "answers": [
      "RPOs",
      "Data sovereignty",
      "RTOs",
      "Power resilience"
    ],
    "correct": 1,
    "explanation": "Data sovereignty is a new concern for organizations that host services and data outside of their local area, including across state or national boundaries. Recovery point objectives (RPOs), recovery time objectives (RTOs), and power resilience are all common concerns for on-premises datacenters."
  },
  {
    "id": "SEC-D3-066",
    "domain": "3.0",
    "question": "Nick wants to protect Microsoft Excel files in transit across a network. Which of the following is not a method he could use to protect data in transit?",
    "answers": [
      "TLS",
      "VPN",
      "File encryption",
      "Disk encryption"
    ],
    "correct": 3,
    "explanation": "Disk encryption is used to protect data at rest, not data in use or data in transit. TLS, VPNs, and file encryption can all be used to protect files that are sent via a network."
  },
  {
    "id": "SEC-D3-067",
    "domain": "3.0",
    "question": "Dani wants to protect HTTP traffic that is sent from SCADA devices on her network to a cloud-hosted controller. The devices don't natively support an HTTPS connection. What could she do to transparently protect the data?",
    "answers": [
      "Set up a VPN connection from each SCADA device to the remote server.",
      "Set up a TLS-enabled proxy between the devices and the server.",
      "Set up SD-WAN.",
      "Install X.509 certificates on each SCADA device."
    ],
    "correct": 1,
    "explanation": "A TLS-enabled proxy between the devices and server doesn't require anything else to be installed on the devices, which is typically impossible with SCADA devices. That means the VPN connection and the X.509 certificates are unlikely to work. SD-WAN helps to manage external connectivity, not to directly protect traffic in this scenario."
  },
  {
    "id": "SEC-D3-068",
    "domain": "3.0",
    "question": "Selah's organization is conducting a simulation exercise. Which of the following is not a common element of a simulation?",
    "answers": [
      "Testing of notification processes",
      "Testing of procedures",
      "Testing of fail over capabilities",
      "Testing of communication systems"
    ],
    "correct": 2,
    "explanation": "Simulations try to avoid causing potential outages and work to simulate a scenario. They may validate that notification processes communication systems and procedures all work."
  },
  {
    "id": "SEC-D3-069",
    "domain": "3.0",
    "question": "Which of the following is not a common practice used to secure data in transit?",
    "answers": [
      "Encryption",
      "TLS",
      "Geolocation",
      "VPN"
    ],
    "correct": 2,
    "explanation": "Geolocation is used to control where data can be accessed from but does not protect data in transit. Encrypting data, encapsulating via TLS, or use of a VPN are all common methods to protect data in transit."
  },
  {
    "id": "SEC-D3-070",
    "domain": "3.0",
    "question": "Olivia wants to deploy a new firewall. What type of firewall should she select if the ability to operate at layer 7 is important to her?",
    "answers": [
      "A WAF",
      "An NGFW",
      "A stateful firewall",
      "A packet filter"
    ],
    "correct": 1,
    "explanation": "Next-generation firewalls (NGFWs) typically provide the ability to inspect traffic at both the transport layer (layer 4) and the application layer (layer 7). This means an NGFW will best fit the need. Web application firewalls also work at this level, but only focus on web applications, which does not fully meet the broad application inspection requirement in the question. Stateful firewalls and packet filters both operate at layer 4 only."
  },
  {
    "id": "SEC-D3-071",
    "domain": "3.0",
    "question": "Marcellus wants to ensure that his organization has sufficient capacity to handle the failure of a web server. What type of technology could he deploy to ensure that individual web server failures are handled gracefully without using an overly complex solution?",
    "answers": [
      "Platform diversity",
      "A multi-cloud system",
      "A load balancer",
      "A warm site"
    ],
    "correct": 2,
    "explanation": "A load balancer can help handle individual web server failures gracefully by moving load to the functioning web servers in a cluster. In scalable environments, this can also result in more servers being instantiated. Platform diversity helps to protect against failures or vulnerabilities in a single vendor, platform, or system. Multi-cloud systems could help in this case but are much more complex than required by the relatively simple need to handle an individual web server's failure. A warm site would be suited to a datacenter failure, not a single web server failing."
  },
  {
    "id": "SEC-D3-072",
    "domain": "3.0",
    "question": "What failure mode is typically preferred for in-line network taps?",
    "answers": [
      "Fail-open",
      "Fail over",
      "Fail-closed",
      "Fail-reset"
    ],
    "correct": 0,
    "explanation": "In-line network taps are typically configured to fail-open since they are used to create a copy of the network traffic. Devices that provide in-line security like IPS systems may be configured to fail-closed because their failure removes critical security functionality. Fail over describes the ability to fail to another device, which is not a common function for an in-line tap. Fail-reset was made up for this question."
  },
  {
    "id": "SEC-D3-073",
    "domain": "3.0",
    "question": "What key network technology is the core of an SASE implementation?",
    "answers": [
      "TLS",
      "VLANs",
      "IPSec",
      "SD-WAN"
    ],
    "correct": 3,
    "explanation": "Software-defined wide area networks (SD-WANs) are the core component of secure access, secure edge technology. Additional tools like zero trust functionality, cloud access security brokers, and firewalls are all combined to build a complete SASE implementation."
  },
  {
    "id": "SEC-D3-074",
    "domain": "3.0",
    "question": "Mikayla wants to prevent unauthorized users from plugging network devices into her wired network. What control would be most effective for this if she needs Ethernet jacks to be available in publicly accessible spaces for her staff to plug devices in as they move around the facility, but also wants to ensure those devices are secure?",
    "answers": [
      "NAC",
      "Port security",
      "IPS",
      "Jump servers"
    ],
    "correct": 0,
    "explanation": "Network access control (NAC) has the ability to both profile device security and validate that a given user is authorized to plug a device into a specific Ethernet jack makes this the best solution for Mikayla's use case. Port security's list of recognized MAC addresses is both potentially vulnerable to MAC spoofing and does not meet the device security check requirements described. An IPS can help prevent network attacks but does not control port-level access, and jump servers are used to allow access to secured network segments, not to protect individual network jacks."
  },
  {
    "id": "SEC-D3-075",
    "domain": "3.0",
    "question": "Mark's organization is preparing to move to an infrastructure as code model. He's worried about what to do if a change in code causes issues. What common IaC practice will help the most with this?",
    "answers": [
      "Threat modeling",
      "Least privilege",
      "Version control",
      "Artifact signing"
    ],
    "correct": 2,
    "explanation": "Version control will allow staff from Mark's organization to identify a bad version and revert to a previous known-good version if needed. Threat modeling, least privilege, and artifact signing are all common best practices for IaC, but don't directly impact version changes."
  },
  {
    "id": "SEC-D3-076",
    "domain": "3.0",
    "question": "The company that Alex works for is preparing to adopt a platform as a service tool for their customer relationship management needs. Alex knows that third-party vendors are responsible for some, but not all, security in a PaaS environment. Which of the following is the PaaS vendor responsible for?",
    "answers": [
      "Network security",
      "Endpoint security",
      "User account security",
      "Application security"
    ],
    "correct": 0,
    "explanation": "PaaS vendors are responsible for the underlying service and platform, including the networks, systems, and infrastructure that it runs on, including their security. Customers are responsible for their use of the platform, including endpoints, users, and applications built on the platform, again including their security."
  },
  {
    "id": "SEC-D3-077",
    "domain": "3.0",
    "question": "Nick's organization houses tape-based backups for their critical data in their primary datacenter. What resilience issue could result in the event of a major disaster?",
    "answers": [
      "The tapes may not have been validated and might not be able to be restored.",
      "A single disaster could destroy both the facility and the tapes.",
      "The tapes may not last for the expected lifetime of the backups.",
      "Tapes are relatively slow and may not allow for timely restoration."
    ],
    "correct": 1,
    "explanation": "The biggest issue for resilience is that placing backups in the same facility as the devices or systems they are backing up means that a single disaster could destroy both. Nick should consider off-site backup storage. Tape recovery can be slow, but this is a restoration timeframe issue, not a resilience issue. Tape lifetime is typically quite long, and backups are usually rolled over in time periods shorter than a year for most organizations. Finally, validation of backups can be a concern, but there is no description in the question that would lead to conclusions about testing."
  },
  {
    "id": "SEC-D3-078",
    "domain": "3.0",
    "question": "Charles wants to adopt an encryption tool. What encryption standard should he look for the tool to support to ensure that he is using a current secure standard to protect his data?",
    "answers": [
      "AES-512",
      "AES-256",
      "AES-128",
      "AES-192"
    ],
    "correct": 1,
    "explanation": "AES-256 is the current mainstream standard for encryption. AES 128 and 192 are both less secure, and AES-512 is not an implemented or commonly used standard."
  },
  {
    "id": "SEC-D3-079",
    "domain": "3.0",
    "question": "Which of the following is not a common security concern with real-time operating systems?",
    "answers": [
      "Inability to install security tools",
      "Lack of updates or patches",
      "Likelihood of malware infection",
      "Vulnerability concerns"
    ],
    "correct": 2,
    "explanation": "While RTOS issues with vulnerabilities, the inability to install security tools. and a lack of patches for RTOS-based devices are all common security concerns, they are not as frequently targeted by malware infections."
  },
  {
    "id": "SEC-D3-080",
    "domain": "3.0",
    "question": "Chris wants to create a token to substitute for data in a database. Which of the following is not a common attribute for tokens?",
    "answers": [
      "They don't have exploitable meaning themselves.",
      "They are easily reversible to identify the original data, even without the tokenization scheme.",
      "They frequently rely on one-way hash functions.",
      "Tokens must be mapped to matching original data."
    ],
    "correct": 1,
    "explanation": "Tokens should not be easily reversible. Instead, they should require access to the original tokenization function or a mapping to the original data. Tokens should not have intrinsic meaning or value, and frequently rely on hash functions as part of their generation process to ensure this."
  },
  {
    "id": "SEC-D3-081",
    "domain": "3.0",
    "question": "Pete's organization has had a system fail and Pete wants to recover from backup. Which of the following backup methods will typically result in the fastest restoration timeframe?",
    "answers": [
      "Snapshots",
      "Replication",
      "Journaling",
      "Tape backup"
    ],
    "correct": 1,
    "explanation": "Replication is typically the fastest means to recovery since the replica system is running and ready to take over. Snapshot recovery is normally the next fastest, followed by restoration from other storage. Journaling can introduce additional slowdowns depending on how long it has been since the last backup, as the journal is replayed from the time that occurred to the time of failure."
  },
  {
    "id": "SEC-D3-082",
    "domain": "3.0",
    "question": "Henry accesses a database server from his workstation. What data state best describes the data while it is on the network?",
    "answers": [
      "Data at rest",
      "Data in use",
      "Data on the wire",
      "Data in transit"
    ],
    "correct": 3,
    "explanation": "The Security+ exam outline recognizes three data states: data at rest, data in transit, and data in use. When Henry accesses the data and it is transferred via the network, it is data in transit. When he is working with the data, including modifying or otherwise using it, it is data in use. When it resides on the drives the database is stored in, it is data at rest. Data on the wire is not a common term for this--data in motion and data in transit are both common in industry usage, and the Security+ exam outline uses data in transit."
  },
  {
    "id": "SEC-D3-083",
    "domain": "3.0",
    "question": "Theresa's organization operates in multiple countries. She knows that there are different laws that apply to her organization's use of data in each country they operate in. What concept describes this?",
    "answers": [
      "Obfuscation",
      "Legal hold",
      "Data sovereignty",
      "Geographic restrictions"
    ],
    "correct": 2,
    "explanation": "Data sovereignty means that governments have the ability to control data within their borders via law and regulations. Theresa's organization will need to comply with the laws of each country they operate in. Obfuscation refers to making something difficult to understand or read. Legal holds are used to require preservation of data when legal action is occurring or pending. Geographic restriction is used to limit where data can be accessed from and is a technical control used by organizations as part of data security efforts."
  },
  {
    "id": "SEC-D3-084",
    "domain": "3.0",
    "question": "Hrant is deploying a network tap that supports an IPS for monitoring. If he wants to ensure that his organization's security remains the same even if the tap and IPS fails, and prefers downtime to a lack of monitoring, what type of failure mode and monitoring deployment should he select?",
    "answers": [
      "In-line, fail-closed",
      "In-line, fail-open",
      "Tap, fail-closed",
      "Tap, fail-open"
    ],
    "correct": 0,
    "explanation": "Hrant's use of an IPS means he wants to be in-line to allow him to block traffic. Since he prefers that a failure remain secure rather than potentially allowing attacks through, he should select a fail-closed implementation."
  },
  {
    "id": "SEC-D3-085",
    "domain": "3.0",
    "question": "Troy wants to physically isolate a device. What does he need to do to accomplish this?",
    "answers": [
      "Move it to a secure VLAN.",
      "Implement 802.1X.",
      "Create a physical air gap.",
      "Unplug the device from power and the network."
    ],
    "correct": 2,
    "explanation": "Physical isolation requires the creation of an air gap. This means unplugging the device from the network. A secure VLAN won't accomplish this, nor will 802.1X. Unplugging the device from power isn't required for physical isolation."
  },
  {
    "id": "SEC-D3-086",
    "domain": "3.0",
    "question": "Yasmine wants to ensure that her organization has appropriate connectivity as part of their infrastructure design for their primary site. Which of the following concerns should she review to ensure that physical disasters do not disable her company's operations?",
    "answers": [
      "Service provider path diversity",
      "Ensuring both fiber and copper connectivity are used",
      "Implementing SD-WAN",
      "Geographic dispersion"
    ],
    "correct": 0,
    "explanation": "Path diversity ensures that the connectivity to the facility does not take the same path. This helps to prevent the moment network managers dread when a single accident--or construction equipment in the wrong place--tears up multiple fiber or copper paths, taking organizations offline. Diversity of the cabling type is not a requirement or need, SD-WAN does not directly address physical disasters, and geographic dispersion is not possible at a single site."
  },
  {
    "id": "SEC-D3-087",
    "domain": "3.0",
    "question": "Carlos uses a remote desktop tool to connect to a server through a firewall that protects his organization's database servers. He then uses software on the server to manage the database servers. What type of solution is Carlos using?",
    "answers": [
      "A network tap",
      "SASE",
      "SD-WAN",
      "A jump server"
    ],
    "correct": 3,
    "explanation": "Carlos is using a jump server that is used to connect from an untrusted or lower trust zone from outside of a firewall. A network tap is used to provide copies of network traffic for analysis. SASE combines SD-WAN and other security technologies to provide network security services regardless of where systems are for enterprises. SD-WAN (software-defined wide area networking) is used to manage network connectivity through commodity Internet providers and other services."
  },
  {
    "id": "SEC-D3-088",
    "domain": "3.0",
    "question": "Alaina is planning how to staff her warm site in the case of a natural disaster that disables her primary site. What concern is most likely to impact her capacity planning for staff in this scenario?",
    "answers": [
      "Whether staff will be able to reach the site",
      "Whether staff will be impacted by the disaster",
      "Whether the site will be impacted by the disaster",
      "Whether generator fuel will be available"
    ],
    "correct": 1,
    "explanation": "Capacity planning for disaster operations needs to take the impact on staff themselves into account. While modern operations can frequently be conducted remotely, reducing the number of staff required to be physically able to reach the site, staff members may not have power, Internet access, or even housing in disaster scenarios. The remote site's ability to operate is not directly a staff capacity planning issue, nor is how generators will be fueled."
  },
  {
    "id": "SEC-D3-089",
    "domain": "3.0",
    "question": "Which of the following is not a common type of incident response exercise?",
    "answers": [
      "Drills",
      "Simulations",
      "Tabletop",
      "Walk-throughs"
    ],
    "correct": 0,
    "explanation": "Typical exercise types for most organizations include simulations that emulate an actual incident response process, walk-throughs that guide staff through an event, and tabletop exercises that are gamed out without taking actual action. Drills are classified as more focused on specific actions or functions, and they are less common because they can result in inadvertent action or mistakes and do not cover the breadth of an incident."
  },
  {
    "id": "SEC-D3-090",
    "domain": "3.0",
    "question": "Jack wants to ensure that files have not changed. What technique can he use to compare current versions of the files to an original copy?",
    "answers": [
      "Encryption.",
      "Check the file size.",
      "Check the file metadata.",
      "Compare hashes of the files."
    ],
    "correct": 3,
    "explanation": "Comparing hashes is an effective way of determining if a file is different from the original. While file length may be the same and metadata can be modified, hashes will still show changes. Encrypting the files does not compare them, and should not be used for this purpose."
  },
  {
    "id": "SEC-D3-091",
    "domain": "3.0",
    "question": "Yuri wants to use an off-site backup location. What challenge can off-site backup locations create for organizations?",
    "answers": [
      "It is difficult to validate the integrity of the backups.",
      "Retrieving the backups may slow down recovery.",
      "The backups cannot be easily updated.",
      "Off-site backups may be impacted by the same disaster."
    ],
    "correct": 1,
    "explanation": "Off-site backup locations are typically chosen so that they will not be impacted by the same disaster. That means that recovery may be slow if the backups either need to be physically retrieved or must be downloaded via an Internet connection. Backup integrity is typically verified as part of the backup process, and this can be checked easily. Off-site backups are typically updated as part of the backup process, and this should not be an issue."
  },
  {
    "id": "SEC-D3-092",
    "domain": "3.0",
    "question": "Which of the following is a common part of technology capacity planning for resilience?",
    "answers": [
      "Cross-training staff",
      "Using load balancers",
      "Using multiple geographically diverse datacenters",
      "Deploying uninterruptible power supplies"
    ],
    "correct": 1,
    "explanation": "Load balancers are commonly used to help provide resilience by allowing applications and servers to be clustered. Cross-training staff is a people- or staff-based capacity planning solution. Both geographically diverse datacenters and UPS are examples of infrastructure resilience options."
  },
  {
    "id": "SEC-D3-093",
    "domain": "3.0",
    "question": "Which of the following data types best describes data covered by the European Union's GDPR?",
    "answers": [
      "Trade secrets",
      "Intellectual property",
      "Regulated data",
      "Legal information"
    ],
    "correct": 2,
    "explanation": "The European Union's (EU) General Data Protection Regulation (GDPR) is a privacy regulation, and thus, data covered by the GDPR is regulated data. The GDPR does include language that addresses not adversely impacting the rights of others, including intellectual property rights, particularly in terms of software, but the best answer remains that this is regulated data. Trade secrets and legal information are not broad enough to describe this data."
  },
  {
    "id": "SEC-D3-094",
    "domain": "3.0",
    "question": "What is the biggest downside of using journaling as part of a backup restoration process?",
    "answers": [
      "Larger volumes of data may be lost.",
      "The time it takes to restore from a journal.",
      "Journals cannot be encrypted for security.",
      "Journaling does not support live databases."
    ],
    "correct": 1,
    "explanation": "Journaling replays transactions, which can take an extended period of time if the time between the last backup and the data loss event was longer and there was a high volume of transactions. Journals typically minimize the amount of transaction data that is lost; they can be encrypted, although care must be taken to ensure that they can be recovered; and journaling is used with live databases to ensure transactions are recoverable to as close to the point in time of a data loss event as possible."
  },
  {
    "id": "SEC-D3-095",
    "domain": "3.0",
    "question": "Jill wants to design her organization for high availability. Which of the following design elements best supports power resilience for a high-availability environment for an on-site datacenter?",
    "answers": [
      "Using generators",
      "Using UPS systems",
      "Using UPS systems backed up by generators",
      "Using a warm site on a separate power grid"
    ],
    "correct": 2,
    "explanation": "Using UPS with generators will allow systems to remain online during a power outage even if the power outage extends for some time. Generators alone will not spin up fast enough to avoid an outage, and UPS systems will run out of battery power in extended outages. A warm site requires setup time to bring it online, resulting in an outage."
  },
  {
    "id": "SEC-D3-096",
    "domain": "3.0",
    "question": "Valerie is concerned that the data obfuscation technique that her organization is using to ensure customer data is not visible to staff members who do not need to see it for their jobs may be vulnerable to client-side tampering. Which of the following techniques is most likely to be vulnerable to client-side tampering resulting in de-obfuscation?",
    "answers": [
      "Masking",
      "Tokenization",
      "Encryption",
      "Hashing"
    ],
    "correct": 0,
    "explanation": "Masking may be conducted in client-side code, resulting in potential exposures of data. Secure designs require masking to occur in server-side code rather than in the client-side web application. Tokenization typically relies on a separate database or field, making it less likely to be a problem. Encryption and hashing are both unlikely to have problems with client-side tampering, making them less secure."
  },
  {
    "id": "SEC-D3-097",
    "domain": "3.0",
    "question": "Which of the following is not a commonly used business data classification?",
    "answers": [
      "Sensitive",
      "Confidential",
      "Top Secret",
      "Public"
    ],
    "correct": 2,
    "explanation": "Top Secret and Secret are examples of government classifications. Businesses typically use classifications like sensitive, confidential, and public."
  },
  {
    "id": "SEC-D3-098",
    "domain": "3.0",
    "question": "Malia is reviewing potential considerations for her ICS deployment. Which of the following is typically not a consideration that Malia can control or change for embedded devices?",
    "answers": [
      "Ease of deployment",
      "Patch availability",
      "Risk transference",
      "Compute"
    ],
    "correct": 3,
    "explanation": "Compute is rarely a significant concern for embedded systems. They're designed to function for long periods of time performing a specific function and do not have additional software or functions added. How easy they are to deploy, if they can be patched and updated, and the support lifespan as guaranteed or promised by the vendor, and risk transference by engaging third-party vendors are all likely concerns for a major industrial control system (ICS) deployment that Malia can control through the selection process."
  },
  {
    "id": "SEC-D3-099",
    "domain": "3.0",
    "question": "What layer is Layer 7 in the OSI model?",
    "answers": [
      "The physical layer",
      "The application layer",
      "The transport layer",
      "The session layer"
    ],
    "correct": 1,
    "explanation": "Layer 7 is the application layer. In order the layers are: 1 - physical, 2 - data link, 3 - network, 4 - transport, 5 - session, 6 - presentation, and 7 - application. The Security+ exam outline only focuses on Layer 4 and Layer 7 in the context of network security devices that can operate at those layers."
  },
  {
    "id": "SEC-D3-100",
    "domain": "3.0",
    "question": "Network connected devices built into washing machines, microwaves, and other household appliances are examples of what type of network device?",
    "answers": [
      "ICS",
      "SCADA",
      "Embedded systems",
      "Virtualization"
    ],
    "correct": 2,
    "explanation": "These are all examples of embedded systems, computers built into devices to allow them to function. Other examples include computers built into cars, digital cameras, and thermostats. They often receive fewer (or no) updates, and are required to function for long periods of time as part of other devices or systems."
  },
  {
    "id": "SEC-D3-101",
    "domain": "3.0",
    "question": "What term best describes a set of loosely coupled, fine-grained services that communicate via lightweight protocols, allowing organizations to easily build new services without additional dependencies or infrastructure?",
    "answers": [
      "Containerization",
      "IoT",
      "Software-defined infrastructure",
      "Microservices"
    ],
    "correct": 3,
    "explanation": "Microservices are loosely coupled and fine-grained, and they are intended to be easy to deploy without significant overhead or dependencies. They rely on lightweight protocols like HTTP to make them easier to deploy in common infrastructures. Containers are used to allow applications to be easily deployed without moving a complete operating system but with the required libraries and components to function. The Internet of Things (IoT) describes Internet-enabled devices of all sorts, including embedded systems. Software-defined infrastructure is commonly used for cloud services."
  },
  {
    "id": "SEC-D3-102",
    "domain": "3.0",
    "question": "What type of backup is done to update a full backup with changes made after the full backup occurred?",
    "answers": [
      "Incremental",
      "Partial",
      "Daily",
      "Snapshots"
    ],
    "correct": 0,
    "explanation": "Incremental backups only include the data that has changed since the last full backup. To restore a backup using incremental backups, the full backup is restored, then incremental backups are applied in order from oldest to most recent. Partial backups describe a backup of only certain data or parts of a system. Daily backups are just that--daily--and may be full or incremental. Snapshots are point-in-time images of a system's or a device's data and memory."
  },
  {
    "id": "SEC-D3-103",
    "domain": "3.0",
    "question": "As part of an exercise for her organization, Sharon calls a team member and asks them to check the status of critical systems. The team member, who is aware of the exercise, does not actually validate the systems but responds that specific systems are down based on the scenario. What type of exercise is Sharon most likely part of?",
    "answers": [
      "A tabletop exercise",
      "A fail over exercise",
      "A simulation exercise",
      "A parallel processing test"
    ],
    "correct": 2,
    "explanation": "Sharon is most likely part of a simulation exercise, where organizations test how they would respond to a scenario without taking actual actions. This is safer than a fail over or parallel processing test but is closer to a real event than a tabletop exercise."
  },
  {
    "id": "SEC-D3-104",
    "domain": "3.0",
    "question": "Zhuri wants to ensure that her organization's datacenter remains online during an extended power outage. What power resilience option is best suited to extended outages?",
    "answers": [
      "Generators",
      "Solar",
      "UPS",
      "PDUs"
    ],
    "correct": 0,
    "explanation": "Generators are used by organizations that need to handle extended power outages. They are commonly paired with UPS systems that handle the immediate power outage, allowing the generator to start and stabilize. Solar power alone is not a good solution without a significant battery system, and datacenter-scale battery systems paired with solar are not yet common. PDUs (power distribution units) are used to distribute and control power in a datacenter but do not provide power generation or backup capabilities."
  },
  {
    "id": "SEC-D3-105",
    "domain": "3.0",
    "question": "Cesar wants to ensure that his organization's SCADA and ICS devices remain secure. What is the most effective way to ensure that network attacks cannot impact his operation's critical infrastructure?",
    "answers": [
      "Separate VLANs",
      "TLS",
      "Physical isolation",
      "SDN"
    ],
    "correct": 2,
    "explanation": "Physically isolating the network for the SCADA and ICS systems can prevent attacks from outside of the network. In critical infrastructure like power generation stations, this is a common technique to ensure that external attacks cannot cause outages to critical physical infrastructure. Separate VLANs is a common logical control, but attacks against the network or using VLAN hopping techniques can allow attackers to bypass the separation. TLS is useful for protecting traffic but does not meet the security requirement described, and SDN is useful for managing networks but again does not meet the enhanced security requirements in the question."
  },
  {
    "id": "SEC-D3-106",
    "domain": "3.0",
    "question": "What key data element is used to validate which systems are allowed to use Ethernet ports where port security is enabled?",
    "answers": [
      "Their IP address",
      "The network card's manufacturer",
      "The user's password",
      "Their MAC address"
    ],
    "correct": 3,
    "explanation": "Hardware addresses, known as MAC addresses, are used for port security to determine which systems can connect to a port. Their IP address, the network card manufacturer, and the user's password are not used by port security."
  },
  {
    "id": "SEC-D3-107",
    "domain": "3.0",
    "question": "Which of the following is not a common concern for extended power outages where generators are providing power to a datacenter they were designed to support during outages?",
    "answers": [
      "Fuel availability",
      "Generator maintenance",
      "Generator capacity",
      "Physical redundancy"
    ],
    "correct": 2,
    "explanation": "Generators are typically sized to the datacenter they support, so capacity is rarely a primary concern. Fuel availability, maintenance and maintenance cycles for extended runs, and ensuring physical redundancy so that a secondary generator can take over during maintenance cycles for long outages are all common concerns."
  },
  {
    "id": "SEC-D3-108",
    "domain": "3.0",
    "question": "Rafael wants to protect his data from being accessed by unauthorized users. Which of the following is not well suited to preventing attacks by insider threats?",
    "answers": [
      "Encryption",
      "Geographic restrictions",
      "Tokenization",
      "Permission restrictions"
    ],
    "correct": 1,
    "explanation": "Geographic restrictions are rarely helpful for insider threats because insiders are likely to already be in the same location as authorized users in most organizations. Encryption, tokenization, and permission restrictions can all be used to ensure that only authorized users gain access to the data."
  },
  {
    "id": "SEC-D3-109",
    "domain": "3.0",
    "question": "Malia wants to protect data in use. Which technique is not a good solution to ensuring that data in use is protected?",
    "answers": [
      "Encryption",
      "Control access to the data",
      "Hashing data",
      "Limiting where data is processed"
    ],
    "correct": 2,
    "explanation": "Use of encryption through secure enclaves and restricted processing environments, controlling access to the data, and limiting where data is processed are all useful controls. Hashing the data does not leave it in a usable form since hashes transform the data, and thus is not a useful solution."
  },
  {
    "id": "SEC-D3-110",
    "domain": "3.0",
    "question": "Lisa wants to ensure that her organization's datacenter can properly handle short power disruptions and temporary undervoltage events. What power resilience solution is best suited to her needs?",
    "answers": [
      "Generators",
      "UPS systems",
      "PDUs",
      "Solar power"
    ],
    "correct": 1,
    "explanation": "UPS systems are perfectly suited to handling short power outages and temporary undervoltage events. They sit between systems and grid power, ensuring clean, reliable power is available. Generators take time to start, meaning that a UPS + generator solution is used for longer outages. PDUs (power distribution units) are used to distribute and manage power in datacenters. Solar power is increasingly used by datacenters to help offset their power consumption but is not a solution during nighttime hours."
  },
  {
    "id": "SEC-D3-111",
    "domain": "3.0",
    "question": "Valentine has containerized her applications. What will not be part of the container?",
    "answers": [
      "The operating system",
      "The application",
      "Needed libraries",
      "Configuration files"
    ],
    "correct": 0,
    "explanation": "Containers do not include an operating system, but do contain applications, libraries, and configuration files."
  },
  {
    "id": "SEC-D3-112",
    "domain": "3.0",
    "question": "Jaime wants to manage connectivity, including both MPLS and broadband Internet services, for her organization. What technology should she select to enable her to manage multiple connection types using a software-based control system?",
    "answers": [
      "SASE",
      "SDN",
      "SD-WAN",
      "VSAN"
    ],
    "correct": 2,
    "explanation": "SD-WAN, or software-defined wide area network, is a virtual wide area network architecture that relies on a software-based controller to manage multiple connections and connection types. MPLS, LTE, and broadband are commonly managed using SD-WAN technology. SASE, or Secure Access Service Edge, is used to provide end-to-end security in modern environments with systems and users spread throughout many locations and networks. SDN, or software-defined networking, is a code-based network management scheme. However, SD-WAN is the correct answer for wide area networks that rely on things like MPLS and broadband rather than on-premises networks. VSAN, or virtual SAN, is a virtual storage area network."
  },
  {
    "id": "SEC-D3-113",
    "domain": "3.0",
    "question": "Cassandra wants to deploy a network security device that can detect and stop attacks. What type of network security device should she use if she wants to stop attacks based on behaviors and threat feeds?",
    "answers": [
      "An IDS",
      "A proxy server",
      "An IPS",
      "A jump server"
    ],
    "correct": 2,
    "explanation": "An IPS, or intrusion prevention system, can stop attacks based on behaviors and threat feed data. An IDS can detect attacks using the same information but cannot stop them. Proxy servers are used to filter content but do not meet this requirement, and jump servers are used for secure access into higher trust environments."
  },
  {
    "id": "SEC-D3-114",
    "domain": "3.0",
    "question": "Contracts, NDAs, and SOWs are all examples of what type of data?",
    "answers": [
      "Legal information",
      "Trade secrets",
      "Regulated",
      "Financial"
    ],
    "correct": 0,
    "explanation": "Contracts, nondisclosure agreements (NDAs), and statements of work (SOWs) are all examples of legal information. They may include trade secrets or financial information but do not have to. Regulated data is regulated by law and is not the same as legal information."
  },
  {
    "id": "SEC-D3-115",
    "domain": "3.0",
    "question": "Jackson has deployed a next-generation firewall. Which of the following features is most likely to help him prevent new attacks without having to create individual rules to stop them?",
    "answers": [
      "Threat feeds",
      "Application awareness",
      "Deep packet inspection",
      "High throughput"
    ],
    "correct": 0,
    "explanation": "Using threat feeds allows administrators to have rules that automatically block new threats using IP reputation and other services. Those detections may rely on application awareness or deep packet inspection, but without the feed information new rules will have to be crafted to address specific new threats. High throughput allows NGFW devices to deal with significant load as well as the demands of deep packet inspection and application awareness."
  },
  {
    "id": "SEC-D3-116",
    "domain": "3.0",
    "question": "Which of the following is not provided by an IPSec VPN?",
    "answers": [
      "Confidentiality",
      "Authentication",
      "Availability",
      "Integrity"
    ],
    "correct": 2,
    "explanation": "IPSec VPNs provide encryption, which allows for confidentiality and integrity through hashing. They also provide authentication because both ends authenticate as part of the VPN connection process. Availability is not a feature of an IPSec connection, and it must be designed and built into the hardware and network infrastructure that the IPSec VPN relies on."
  },
  {
    "id": "SEC-D3-117",
    "domain": "3.0",
    "question": "What technologies are most frequently used to help enforce geographic restrictions?",
    "answers": [
      "Wi-Fi and Bluetooth",
      "GPS and Wi-Fi",
      "GPS and encryption",
      "DNS and GPS"
    ],
    "correct": 1,
    "explanation": "GPS and Wi-Fi are commonly used to enforce geofencing by determining where individual devices are. Bluetooth may be used in some cases as well, but Wi-Fi and GPS are the dominant options. DNS is not used as part of geographic restrictions, nor is encryption."
  },
  {
    "id": "SEC-D3-118",
    "domain": "3.0",
    "question": "In the cloud responsibility matrix, what three areas is the provider always responsible for in an IaaS environment?",
    "answers": [
      "Data, devices, and accounts",
      "Identities, applications, and network controls",
      "Operating systems, applications, and physical hosts",
      "Datacenters, networks, and physical hosts"
    ],
    "correct": 3,
    "explanation": "Infrastructure-as-a-service (IaaS) providers are responsible for the underlying infrastructure, including datacenters, networks, and physical hosts. In some cases, they may also be responsible for some operating systems, network controls, applications, and Identity and Access Management (IAM) infrastructure. Customers are always responsible for data and accounts, but may be responsible for applications, network controls, and operating systems as well."
  },
  {
    "id": "SEC-D3-119",
    "domain": "3.0",
    "question": "Kirk's organization contracts with a cloud service provider. Kirk is concerned about third-party vendors that his cloud service provider uses. How can Kirk best address these concerns?",
    "answers": [
      "Through direct contracts with the third-party vendors",
      "By requiring regular audits of third-party vendors",
      "Through the contract with his cloud service provider",
      "By performing vulnerability scans of the third-party vendors"
    ],
    "correct": 2,
    "explanation": "Ensuring that third-party vendors are held to appropriate standards is best accomplished through contracts with direct suppliers. Since the third-party vendors sign contracts with Kirk's cloud provider, not with Kirk's organization, the only way to have influence over them is through the cloud service provider. Audits and vulnerability scans will typically not be allowed by organizations that do not have a contract with a vendor."
  },
  {
    "id": "SEC-D3-120",
    "domain": "3.0",
    "question": "Frankie wants to connect two remote sites so that they appear to be on the same local network segment. What type of solution is best suited to this requirement if she wants traffic sent between the locations to be secure despite traversing the public Internet?",
    "answers": [
      "Establish a VLAN between the two locations.",
      "Use TLS to encapsulate each service provided between the two locations.",
      "Set up a VPN tunnel between the two locations.",
      "Reclassify the data as public and send the data as normal."
    ],
    "correct": 2,
    "explanation": "VPNs, or virtual private networks, are commonly established between two locations to provide a secure connection that can make the networks appear to be on the same network segment. A VLAN may then be used if desired, but a VLAN alone does not provide encryption and cannot be set up across a public connection. TLS encapsulating each service would provide security, but that would not make the two sites appear to be on the same network segment. Reclassifying the data does not secure the data or make the networks appear to be on the same segment, either."
  },
  {
    "id": "SEC-D3-121",
    "domain": "3.0",
    "question": "Which of the following best describes replication as a resilience strategy?",
    "answers": [
      "It makes a complete backup copy of live data that can be restored from media if needed, then journaled changes can be replayed to catch up to the moment of failure.",
      "It creates a continuous copy of live data either asynchronously or synchronously.",
      "It uses a series of snapshots to provide disaster recovery for virtual machines.",
      "It requires high-speed media to keep up with live data."
    ],
    "correct": 1,
    "explanation": "Replication can be synchronous or asynchronous but focuses on keeping an up-do-date copy of live data. It does not require high-speed media but does require storage media that is fast enough to keep up with the speed of change from the production environment. Replication does not rely on journaling or snapshots."
  },
  {
    "id": "SEC-D3-122",
    "domain": "3.0",
    "question": "Sade works for a large organization that wants to ensure that their connectivity is properly secured. What type of security device should she select if throughput and advanced security capabilities are both important factors in selection?",
    "answers": [
      "A UTM device",
      "An NGFW device",
      "A WAF",
      "A proxy server"
    ],
    "correct": 1,
    "explanation": "NGFW devices are typically deployed where throughput and advanced security features are both needed. UTM devices are more common in small to mid-sized organizations where they can be set up and will often require less management and configuration. A WAF is appropriate for web services, but does not provide enough protection for an entire organization's Internet connectivity. A proxy server is useful for filtering traffic but has the same issues with limited functionality."
  },
  {
    "id": "SEC-D3-123",
    "domain": "3.0",
    "question": "Barb's organization has a recovery point objective of 6 hours. At least how often should Barb conduct incremental backups to meet this RPO?",
    "answers": [
      "Once every hour",
      "Once every 6 hours",
      "Once every 12 hours",
      "Once a day"
    ],
    "correct": 1,
    "explanation": "Barb needs to back up her data at least once every 6 hours to meet a 6-hour RPO, and Barb might even choose to run her backups slightly more often to ensure the RPO can be met. Running backups every hour significantly exceeds that target, and may have other implications on performance time to recover, so a more aggressive timeframe would need to be carefully reviewed. Every 12 or 24 hours would not meet the RPO set by Barb's company."
  },
  {
    "id": "SEC-D3-124",
    "domain": "3.0",
    "question": "Geoff's data is stored in a cloud service's database. What data state is the data in?",
    "answers": [
      "It is at rest.",
      "It is in transit.",
      "It is in use.",
      "It is sovereign."
    ],
    "correct": 0,
    "explanation": "Since the data is not actively being moved between systems or via a network, and it is not being processed, it is data at rest. If the database was being actively accessed, the data might be in transit when it was sent to an application server and in use as the server processed it. Data sovereignty is the concept that countries can regulate data within their own borders."
  },
  {
    "id": "SEC-D3-125",
    "domain": "3.0",
    "question": "Tara's web development team has written code that allows sensitive customer information to be hidden from users who do not have the right permissions. When individuals who do not have the proper rights to view sensitive information use the application, the data is displayed as a series of asterisks: What data obfuscation technique has Tara's team employed to help protect her organization's data?",
    "answers": [
      "Encryption",
      "Data classification",
      "Hashing",
      "Masking"
    ],
    "correct": 3,
    "explanation": "Masking replaces some characters with an alternate character, allowing tasks like validating credit card numbers without exposing all of a data field. Encryption and hashing would transform the data, not replace it with an alternate character. Data classification is involved, but it's not a data obfuscation technique.",
    "exhibit": "- Account number: ****-******-**"
  },
  {
    "id": "SEC-D3-126",
    "domain": "3.0",
    "question": "Ed is building a continuity of operations plan (COOP) for his organization. What three scenarios does a COOP address?",
    "answers": [
      "Loss of personnel, loss of systems, loss of availability",
      "Natural disasters, human-made disasters, mistakes or errors",
      "Loss of access to a facility, damage to a facility, natural disasters",
      "Loss of access to a facility, loss of personnel, and loss of services"
    ],
    "correct": 3,
    "explanation": "COOP plans address loss of access to some or all of a facility, personnel, or services. Other items may cause those losses, but the focus is on continued operations addressing the key components of an organization's business or purpose--facilities, staff, and services."
  },
  {
    "id": "SEC-D3-127",
    "domain": "3.0",
    "question": "Which of the following properly describes a SPAN port configured on a switch or router for monitoring?",
    "answers": [
      "Active and inline",
      "Passive and inline",
      "Active and a monitor",
      "Passive and a monitor"
    ],
    "correct": 2,
    "explanation": "Switch Port Analyzer (SPAN) ports, also known as mirrored ports, configured on a network switch or router are active because the device is powered and are a monitor because they simply copy traffic rather than being inline."
  },
  {
    "id": "SEC-D3-128",
    "domain": "3.0",
    "question": "Renee wants to choose a control that will protect her organization against SQL injection attacks. Which of the following is likely to be the most effective control for attacks that are announced without prior notice and that require a very quick response?",
    "answers": [
      "Web application penetration testing",
      "A WAF",
      "Static code review",
      "SASE"
    ],
    "correct": 1,
    "explanation": "A major advantage of WAFs is the ability to use thread and rule feeds from vendors that quickly respond to new threats and attacks. At the same time, Renee can also build WAF rules faster than it would take to deploy code fixes in many cases. Penetration testing and static code review are both slow processes and are not suited to the rapid respond described. SASE is used to protect diverse endpoints in many locations, not to counter SQL injection (SQLi) against a web service."
  },
  {
    "id": "SEC-D3-129",
    "domain": "3.0",
    "question": "Maria wants to deploy a web application firewall that will stop new attacks against her organization. What should she do to make sure that her web application firewall rules are as current as possible?",
    "answers": [
      "Manually add new rules based on email updates.",
      "Deploy rules based on the OWASP Top 10.",
      "Subscribe to a threat feed and deploy rules based on the feed.",
      "Subscribe to the vendor's managed WAF rule service."
    ],
    "correct": 3,
    "explanation": "Many vendors offer a managed service that provides rules that stop trending and new attacks. Maria can subscribe to the service, but needs to be aware that sometimes rules may cause outages or issues if they block legitimate traffic accidentally. Manually deploying rules is slow and requires careful crafting. The Open Worldwide Application Security Project (OWASP) Top 10 is a short list and it is not updated quickly. Threat feeds are useful as a way to write rules but will be less effective than a managed service in most cases due to the variety of attacks and new threats."
  },
  {
    "id": "SEC-D3-130",
    "domain": "3.0",
    "question": "Gary's organization provides Wi-Fi network connectivity for customers, employees, and IoT building automation devices. What should he implement if he needs each of the three groups to have access to the same resources at times without the three groups of users being able to connect to each other?",
    "answers": [
      "Fail-closed networks",
      "Security zones",
      "Data classification",
      "Fail-open networks"
    ],
    "correct": 1,
    "explanation": "Each network segment should be considered a separate security zone that can be managed and secured appropriately for its ongoing use. Networks are not typically considered fail-open or fail-closed--devices are. Data classification is used to label data."
  },
  {
    "id": "SEC-D3-131",
    "domain": "3.0",
    "question": "Kendra is designing a web application infrastructure and wants to use a load balanced cluster. Which of the following considerations is not directly addressed by using a load balancer?",
    "answers": [
      "Availability",
      "Responsiveness",
      "Scalability",
      "Risk transference"
    ],
    "correct": 3,
    "explanation": "Load balancers can help with availability by automatically removing failed notes from a load balanced group. They can help with responsiveness by distributing load to the least loaded systems in a load balanced pool, and they can help with scalability by allowing systems to transparently be added or removed from the pool. They don't directly help with risk transference since risk transference usually requires a contract or insurance."
  },
  {
    "id": "SEC-D3-132",
    "domain": "3.0",
    "question": "Angie is logging in to a server. What data state is her authentication information in?",
    "answers": [
      "Data in storage",
      "Data at rest",
      "Data in validation",
      "Data in use"
    ],
    "correct": 3,
    "explanation": "When Angie logs in, her authentication data is processed, making it data in use. Data at rest is data that is stored and not in active use or processing. Data in storage and data in validation were made up for this question and are not typically considered data states."
  },
  {
    "id": "SEC-D3-133",
    "domain": "3.0",
    "question": "Patrick wants to deploy a virtual private networking (VPN) technology that is as easy for end users to use as possible. What type of VPN should he deploy?",
    "answers": [
      "An IPSec VPN",
      "An SSL/TLS VPN",
      "An HTML5 L2TP VPN",
      "An SAML VPN"
    ],
    "correct": 1,
    "explanation": "A TLS-based VPN (often called an SSL-based VPN, despite SSL being outmoded) provides the easiest way for users to use VPN since it does not require a client. SSL VPNs also work only for specific applications rather than making a system appear as though it is fully on a remote network. HTML5 is not a VPN technology, but some VPN portals may be built using HTML5. Security Assertion Markup Language (SAML) is not a VPN technology. IPSec VPNs require a client or configuration and are thus harder for end users to use in most cases."
  },
  {
    "id": "SEC-D3-134",
    "domain": "3.0",
    "question": "Servers in redundant clusters are typically not placed in the same server rack in case of a water leak or other issue that impacts the rack. What consideration describes this type of design decision?",
    "answers": [
      "Connectivity",
      "Geographic dispersion",
      "Device placement",
      "Attack surface"
    ],
    "correct": 2,
    "explanation": "Device placement can matter due to physical risks or because of concerns about latency, access to services, or other considerations. Connectivity concerns focus on whether an organization can obtain a network connection and whether it meets the organization's needs, including throughput and reliability. Geographic dispersion refers to the distance between locations that helps to ensure that a single disaster does not take an organization offline. Attack surface is the set of services, ports, and physical access that an attacker could leverage."
  },
  {
    "id": "SEC-D3-135",
    "domain": "3.0",
    "question": "Akio is considering a decentralized model to manage her organization's multiple datacenters. What key advantage could this provide for her organization?",
    "answers": [
      "Reductions in cost",
      "Increased resilience",
      "Reductions in complexity",
      "Increased complexity"
    ],
    "correct": 1,
    "explanation": "Decentralized approaches can provide increased resilience since a failure or compromise of the management plane or services in a single location will not disrupt other locations. Unfortunately, this normally comes with increased cost and complexity. Increased complexity is not an advantage."
  },
  {
    "id": "SEC-D3-136",
    "domain": "3.0",
    "question": "Kim's organization operates a cloud-hosted IaaS environment and uses an infrastructure as code model to deploy systems. A vulnerability has been found in the web server software that the organization uses. What process should her team use to remediate the vulnerability?",
    "answers": [
      "Manually patch each web server.",
      "Update the underlying base image for the servers and redeploy the web servers.",
      "Add the patch to the code repository for the servers, transfer the load to other servers, and replace unpatched servers with patched versions by reinstantiating them.",
      "Update the underlying base image, drain the load from working servers, and replace with new instances."
    ],
    "correct": 2,
    "explanation": "In an infrastructure as code (IaC) environment, updating the code that defines what a fully patched server is, then replacing servers in a cluster one at a time will be the least disruptive option while also ensuring that future instances will have the patches installed. Rebuilding a base image each time a patch comes out is not efficient, and manually patching is not a best practice in IaC environments and may lead to human error."
  },
  {
    "id": "SEC-D3-137",
    "domain": "3.0",
    "question": "Jason's organization wants to classify data that the organization regularly uses. The data is customer data, and could cause harm to the company if it was released. Which of the following data classifications best fits this type of data?",
    "answers": [
      "Confidential",
      "Restricted",
      "Critical",
      "Public"
    ],
    "correct": 0,
    "explanation": "The data should not be released or exposed and could cause harm. This means that confidential best describes this data from the list of available terms. Restricted data is typically limited to a subset of staff, but that is not reflected in the question. The data is also not described as being critical to the operations of the organization; instead the emphasis is on confidentiality. Since this data must remain confidential, it is not public data."
  },
  {
    "id": "SEC-D3-138",
    "domain": "3.0",
    "question": "Which of the following is not a common consideration for legacy devices?",
    "answers": [
      "Cost",
      "Ease of recovery",
      "Patch availability",
      "Inability to patch"
    ],
    "correct": 0,
    "explanation": "Legacy devices typically cannot be purchased, so their cost becomes irrelevant. Whether they can be recovered, if patches are available, and the issues that lack of patching may cause are all common issues for legacy devices."
  },
  {
    "id": "SEC-D3-139",
    "domain": "3.0",
    "question": "Which of the following is not a common service provided by a UTM device?",
    "answers": [
      "Firewall",
      "SD-WAN",
      "IPS",
      "Antivirus/antimalware"
    ],
    "correct": 1,
    "explanation": "UTM devices commonly provide firewall, IPS, antivirus/antimalware, and a variety of other services. They are also commonly part of SD-WAN architectures, but do not themselves provide the SD-WAN service."
  },
  {
    "id": "SEC-D3-140",
    "domain": "3.0",
    "question": "Nick wants to enable remote access for his organization and wants users to have a simple experience without significant overhead when connecting. What type of solution should he implement?",
    "answers": [
      "A TLS VPN",
      "SD-WAN",
      "SDN",
      "An IPSec VPN"
    ],
    "correct": 0,
    "explanation": "TLS VPNs are typically easier to set up and don't require clients to be installed, unlike an IPSec VPN. SD-WAN is used to manage external connectivity, and software-defined networking (SDN) is used to manage networks and their performance, not to allow remote access by users."
  },
  {
    "id": "SEC-D3-141",
    "domain": "3.0",
    "question": "Jaime has deployed smart lighting and thermostats to her new buildings. What technique will have the largest impact if she wants to harden the devices?",
    "answers": [
      "Applying an industry standard baseline configuration",
      "Moving the devices to a separate security zone",
      "Fully patching the devices when they are deployed",
      "Vulnerability scanning, then remediating the devices on a regular basis"
    ],
    "correct": 1,
    "explanation": "Moving devices to an isolated network segment that has appropriate controls in place to protect devices that may not be able to be secured or that may not receive regular patches is the best option available. Baselines, patching, and even scanning and remediation only help if the devices can be secured, patched, and otherwise protected. IoT devices are often not able to be secured this way, particularly as they age and both lighting and thermostats have relatively long useful lifespans."
  },
  {
    "id": "SEC-D3-142",
    "domain": "3.0",
    "question": "Chuck has deployed a cloud-based security environment that combines SD-WAN, zero trust, cloud access security broker (CASB), and firewall services to replace traditional VPNs. What sort of service has Chuck deployed?",
    "answers": [
      "SaaS",
      "SASE",
      "SONET",
      "SCM"
    ],
    "correct": 1,
    "explanation": "Secure access service edge (SASE) deployments combine SD-WAN with a variety of cloud-hosted security services, including zero trust and CASB tools to replace VPNs. This provides an edge device-oriented security architecture with end-to-end security. SaaS is involved but is not a specific enough answer. SONET is a communication protocol used for fiber networks. Supply chain management (SCM) is not a term used in this context."
  },
  {
    "id": "SEC-D3-143",
    "domain": "3.0",
    "question": "Lucca wants to fully validate his organization's hot site's ability to perform as needed in the event of an outage. What type of testing should he run to ensure that the hot site is completely tested as though an actual disaster has occurred?",
    "answers": [
      "Fail over",
      "Simulation",
      "Tabletop",
      "Parallel processing"
    ],
    "correct": 0,
    "explanation": "Fail over testing goes beyond parallel processing and completely takes over running services. This is the most complex and risky testing mode, but also the only one that completely tests failure scenarios in a real-world exercise. Simulations and tabletops are more abstract and would not test the site, instead focusing on practices and behaviors."
  },
  {
    "id": "SEC-D3-144",
    "domain": "3.0",
    "question": "Christina's organization has purchased a remote facility that they intend to use in case of a major disaster. The building has basic utilities, including Internet connectivity, but no other preparation has been made. What type of site is this?",
    "answers": [
      "A warm site",
      "A hot site",
      "A cold site",
      "A dispersion site"
    ],
    "correct": 2,
    "explanation": "Cold sites are spaces that are ready to be used in a disaster but without equipment or other necessary items in place to quickly take over production if needed. A warm site would have some hardware ready to be used, but the hardware would not be configured or otherwise ready for immediate resumption of service. A hot site is prepared to take over processing for an organization immediately, and infrastructure is running in parallel with your production site. Geographic dispersion is used to ensure that a single disaster does not impact multiple sites."
  },
  {
    "id": "SEC-D3-145",
    "domain": "3.0",
    "question": "Which of the following is not commonly part of a tabletop exercise?",
    "answers": [
      "A discussion of roles",
      "A discussion of likely actions",
      "Simulated calls to resources",
      "A guided conversation"
    ],
    "correct": 2,
    "explanation": "Tabletop exercises are not simulations and typically do not involve simulated calls to resources. Simulations are a different type of exercise and have the potential for disruptions if staff are not aware of the exercise being conducted."
  },
  {
    "id": "SEC-D3-146",
    "domain": "3.0",
    "question": "Helen has deployed both Cisco and Juniper routers in her organization to ensure that a vulnerability in one vendor's products does not result in a complete outage of her organization. What is this type of design called?",
    "answers": [
      "Platform agnostic",
      "Platform diversity",
      "Multi-cloud",
      "Parallel processing"
    ],
    "correct": 1,
    "explanation": "This type of architecture leverages the idea of platform diversity. Having multiple vendors and platforms helps to ensure that a single vendor's failure or vulnerability does not prevent an organization from continuing to function. Platform agnostic is not on the Security+ exam but typically means that organizations don't have a vested interest in which platform is selected or used. Multi-cloud environments run in multiple cloud vendors' tools, but this question involves physical router hardware. Parallel processing is a failure testing mode where two or more sites run at the same time during a test."
  },
  {
    "id": "SEC-D3-147",
    "domain": "3.0",
    "question": "Kaito has deployed a system that accepts traffic from web browsers and distributes it to systems based on the number of connections that each server has. He has assigned each server a rating based on how powerful it is. Each time a new request comes in, requests are sent to the system with the lowest number of connections after taking into account the relative rating of each server. What type of load balancing is Kaito using?",
    "answers": [
      "Source IP hashing",
      "Resource-based",
      "Weighted least connection",
      "Round-robin"
    ],
    "correct": 2,
    "explanation": "Kaito is using a weighted least connection load balancing approach, which distributes traffic based on both a server weight and connection number count. Source IP hashing uses a hash of the source and destination IP addresses to determine which server receives the connection. This also allows for interrupted sessions to go to the same server. Resource-based load balancing takes into account the availability of resources like CPU, memory, and network bandwidth for a server. Round-robin load balancing simply distributes connections as they come in by moving through a list of servers."
  },
  {
    "id": "SEC-D3-148",
    "domain": "3.0",
    "question": "Jessica has port-scanned a multifunction printer and has discovered that the device provides services on ports 80, 443, 515, and 9100. Which of the following terms best describes this?",
    "answers": [
      "The printer's attack surface",
      "The printer's security zone",
      "The printer's scalability",
      "The printer's resilience"
    ],
    "correct": 0,
    "explanation": "Attack surfaces are the potential points for an attack to occur. For devices, this is often the open services. For organizations, attack surfaces can include open ports and services, physical security concerns, and human vectors. Security zones are a way for organizations to categorize and manage different devices and systems based on security classification. Scalability describes whether a service or system can grow or shrink to handle demand or load. Resilience describes if a system or service can tolerate issues that might otherwise result in outages."
  },
  {
    "id": "SEC-D3-149",
    "domain": "3.0",
    "question": "Geoff is considering whether to deploy on-premises infrastructure or cloud-hosted infrastructure. His most important requirements in order are: If Geoff wants to run a containerized service that can handle very large loads, what model should he select?",
    "answers": [
      "SaaS",
      "PaaS",
      "IaaS",
      "On-premises"
    ],
    "correct": 2,
    "explanation": "An infrastructure-as-a-service (IaaS) cloud-hosted model where a third-party provider focuses on scalability and administration of a containerization service will meet Geoff's needs. When scaling from low to very large load is a common event, the ability to grow or shrink in a cloud environment can also provide significant cost savings over paying for an on-premises option that can handle the full scaling event. Software as a service (SaaS) and platform as a service (PaaS) provide full applications or platforms, not containerization environments.",
    "exhibit": "- Ease of scalability\n- Management overhead\n- Cost"
  },
  {
    "id": "SEC-D3-150",
    "domain": "3.0",
    "question": "Bank account numbers, credit card numbers, and invoice information are all examples of what type of data?",
    "answers": [
      "Intellectual property",
      "Financial",
      "Public",
      "Trade secrets"
    ],
    "correct": 1,
    "explanation": "Financial data includes transactions, accounts, and many other types of information related to finances. Intellectual property is a broad category of data created by humans. Public information is information that is available to the public, and trade secrets are kept private to a limited number of individuals in a company for competitive advantage or other purposes."
  },
  {
    "id": "SEC-D3-151",
    "domain": "3.0",
    "question": "John has deployed three servers that all respond as though they're the same device to provide service he runs. What term best describes this configuration?",
    "answers": [
      "Load balancing",
      "Clustering",
      "Fail-open",
      "Fail-closed"
    ],
    "correct": 1,
    "explanation": "Clustering involves using two or more systems to provide a service as though they're a single server. Load balancing spreads workloads across multiple independent systems while front-ending them with a load balancer device or service to distribute load. Fail-open means that if a network device fails, traffic continues to pass through it. Fail-closed devices stop traffic if they fail. Decisions about fail-open and fail-closed are made based on security in most cases, with fail-closed being more secure if the organization relies on the device for security."
  },
  {
    "id": "SEC-D3-152",
    "domain": "3.0",
    "question": "Alaina's organization is required to comply with the PCI DSS standard. What type of data is she most likely dealing with?",
    "answers": [
      "Intellectual property",
      "Trade secrets",
      "Financial information",
      "Regulated information"
    ],
    "correct": 2,
    "explanation": "PCI DSS is a credit card data security standard, meaning that Alaina is most likely dealing with financial information. PCI DSS does not directly address intellectual property or trade secrets, and it's not a regulation."
  },
  {
    "id": "SEC-D3-153",
    "domain": "3.0",
    "question": "Theresa wants to back up her virtualization environment. What backup scheme is most frequently used for virtual machines?",
    "answers": [
      "Journaling",
      "Snapshots",
      "Replication",
      "Grandfather/Father/Son"
    ],
    "correct": 1,
    "explanation": "Snapshots are used to copy both the data and machine state for virtual machines. Journaling is used for databases and similar uses where replaying actions can be useful to recover if an issue occurs. Replication copies the data synchronously or asynchronously, allowing for a separate copy to be available at all times. Grandfather/Father/Son is a backup cycle commonly used for tape backup."
  },
  {
    "id": "SEC-D3-154",
    "domain": "3.0",
    "question": "What is the primary reason an organization might choose a parallel processing testing scenario over a fail over testing scenario?",
    "answers": [
      "Parallel processing allows for more throughput.",
      "Fail over does not fully test redundant systems.",
      "Fail over requires organizations to create a significant issue to allow for the fail over to occur.",
      "Parallel processing typically handles issues without outages."
    ],
    "correct": 3,
    "explanation": "Parallel processing allows for systems to be tested without taking them offline. This means that in the event of an issue with the backup systems or facility, the primary facility can continue to operate. Parallel processing does allow for more throughput, but organizations should not rely on this as parallel processing environments need to be able to handle the full load for the organization if the primary or backup fails. Fail over does test redundant systems and does not require organizations to create a significant issue. Instead, manual fail over processes are used to conduct fail over tests."
  },
  {
    "id": "SEC-D3-155",
    "domain": "3.0",
    "question": "Brent wants to monitor traffic using an IPS. He needs to prevent attack traffic from impacting his datacenter and wants to minimize the amount of traffic that the IPS device has to filter. Where should he place the device to best match these requirements based on the following figure?",
    "answers": [
      "Position A",
      "Position B",
      "Position C",
      "Position D"
    ],
    "correct": 3,
    "explanation": "Placing the IPS inline at position D will reduce the amount of traffic it has to filter while still allowing it to filter traffic bound for the datacenter. Points A, B, and C will all have more traffic, although point A will have the most, with reductions likely at points C and D.",
    "image": "questions/img/domain3-q155.jpg",
    "imageAlt": "A diagram has five phases connected horizontally using two-way arrows labeled from A to D. The phases are internet, border firewall, core router, datacenter firewall, and datacenter router."
  },
  {
    "id": "SEC-D3-156",
    "domain": "3.0",
    "question": "Marco is preparing to brief his organization's leadership about challenges that may result from adopting a hybrid cloud design. Which of the following is the primary concern that he should highlight?",
    "answers": [
      "Jurisdictional challenges",
      "Increased complexity",
      "Increased cost",
      "Regulatory challenges"
    ],
    "correct": 1,
    "explanation": "Increased complexity can include jurisdictional challenges, increased cost, and regulatory challenges as well as visibility challenges, management overhead increases, and a wide range of additional challenges from operating in multiple locations and models."
  },
  {
    "id": "SEC-D3-157",
    "domain": "3.0",
    "question": "Julia is designing her organization's external connectivity as part of infrastructure capacity planning. She knows that the organization typically uses approximately 7 gigabits per second of connectivity from their primary site. Julia has the following connectivity options, what should she select?",
    "answers": [
      "A 10 Gbps primary and a 5 Gbps secondary connection",
      "A 5 Gbps primary and a 5 Gbps secondary connection",
      "A 100 Gbps primary and a 10 Gbps secondary connection",
      "A 10 Gbps primary and a 10 Gbps secondary connection"
    ],
    "correct": 3,
    "explanation": "In general, fail over connections should be able to handle an organization's full throughput. Overprovisioning for 100 Gbps will typically create significantly more cost not only for connectivity but also for network devices that can handle high speeds, and underprovisioning at 5 Gbps will mean that traffic would need to be reduced in a fail over scenario."
  },
  {
    "id": "SEC-D3-158",
    "domain": "3.0",
    "question": "Daria wants to establish a disaster recovery site that can immediately take over for her organization's primary datacenter in the event of a disaster. What sort of site should she build out?",
    "answers": [
      "A hot site",
      "A warm site",
      "A cold site",
      "A dispersion site"
    ],
    "correct": 0,
    "explanation": "A hot site is prepared to take over processing for on organization immediately, and infrastructure is running in parallel with your production site. A warm site would have some hardware ready to be used, but the hardware would not be configured or otherwise ready for immediate resumption of service. Cold sites are spaces that are ready to be used in a disaster but without equipment or other necessary items in place to quickly take over production if needed. The term dispersion site is not commonly used, but the concept of geographic dispersion describes placement of sites with sufficient distance between them to make the likelihood of a single disaster impacting both quite low."
  },
  {
    "id": "SEC-D3-159",
    "domain": "3.0",
    "question": "Cathy wants to build a high-availability infrastructure for her midsize company's headquarters building network. Which of the following is not a common element for a high-availability network core?",
    "answers": [
      "Redundant routers",
      "Generators",
      "Geographic dispersion",
      "Multiple connectivity providers"
    ],
    "correct": 2,
    "explanation": "Geographic dispersion is unlikely for a single building's network core. Redundancy, power backups, and multiple connectivity options are commonly part of designing a highly available network."
  },
  {
    "id": "SEC-D3-160",
    "domain": "3.0",
    "question": "The GDPR, HIPAA, FERPA, and the GLBA all impact what type of data?",
    "answers": [
      "Intellectual property",
      "Classified data",
      "Regulated data",
      "Trade secrets"
    ],
    "correct": 2,
    "explanation": "The General Data Protection Regulation (GDPR), Health Insurance Portability and Accountability Act (HIPAA), Family Educational Rights and Privacy Act (FERPA), and the Gramm-Leach-Bliley Act (GLBA) are all regulations, meaning that data they cover is regulated data. Intellectual property is the result of human creativity, classified data is a designation used by governments, and trade secrets are proprietary data with limited access often used by organizations for competitive advantage."
  },
  {
    "id": "SEC-D3-161",
    "domain": "3.0",
    "question": "Jacob is concerned about attacks against his virtual machines that would target the hypervisor. What term describes this type of attack?",
    "answers": [
      "VM escape",
      "Hypervisor escalation",
      "VM shell attacks",
      "Container breaches"
    ],
    "correct": 0,
    "explanation": "Virtual machine (VM) escape attacks attempt to access or gain control of the underlying hypervisor through virtual machines. While uncommon, if this occurred it could result in serious issues due to the number of systems run on a single hypervisor host particularly in cloud or shared environments. The other options were made up for the question."
  },
  {
    "id": "SEC-D3-162",
    "domain": "3.0",
    "question": "Jill knows that IPSec uses a number of common protocols. Which of the following is not a key IPSec protocol?",
    "answers": [
      "AH",
      "ISA",
      "ESP",
      "IKE"
    ],
    "correct": 1,
    "explanation": "AH (Authentication Header), ESP (Encapsulating Security Payload), and IKE (Internet Key Exchange) are all important IPSec (Internet Protocol Security) protocols. ISA is not an IPSec protocol."
  },
  {
    "id": "SEC-D3-163",
    "domain": "3.0",
    "question": "An IDS is an example of what type of network device?",
    "answers": [
      "Active",
      "Air gapped",
      "Fail-closed",
      "Passive"
    ],
    "correct": 3,
    "explanation": "Intrusion detection systems are considered passive systems because they cannot block traffic. Active systems like firewalls, IPS, and proxies all have the ability to directly interact with and stop or allow traffic. Air gapped devices do not have a physical connection to a network, or they are on a separate network that is not connected to other networks. Fail-closed devices stop traffic when they fail. Most IPS systems are not deployed inline since they do not need to be interactive and having them inline only creates another potential failure point."
  },
  {
    "id": "SEC-D3-164",
    "domain": "3.0",
    "question": "Why can't hashing be used to securely store data that needs to be accessed in its original form?",
    "answers": [
      "Hashing takes too long to reverse.",
      "Hashing uses symmetric encryption.",
      "Hashing uses a one-way function.",
      "Hashing uses asymmetric encryption."
    ],
    "correct": 2,
    "explanation": "Hashing uses a one-way function and should not be able to be reversed. This means that you can use hashing to securely store a password because you can hash the password, then compare hashes without needing to know the password. If you hash a database field, however, there's no way to know what the original data was from the hash. Hashing should not be reversible, and it does not use symmetric or asymmetric encryption."
  },
  {
    "id": "SEC-D3-165",
    "domain": "3.0",
    "question": "Jerome wants to use an obfuscation method to protect data in his database. His organization works with sensitive customer data and does not want to run the risk of that data being exposed via their web application, but still wants to use the rest of their customer data in the application. What obfuscation process or tool should he use to ensure that the data can be matched to customers while remaining secure?",
    "answers": [
      "Use a steganographic program to modify the data, then use that data for the web application.",
      "Use a masking algorithm to completely mask the data, then use a single database.",
      "Tokenize the data and use the tokenized data in a database set up for the web application.",
      "Hash the data in the original database, then use the database for the web application."
    ],
    "correct": 2,
    "explanation": "Tokenizing the data in a separate database will allow both the original unaltered database and a secured database to be used. This reduces risk while retaining data integrity where required. Steganography hides data in images and does not fit this use case. Masking only conceals data and does not protect it against attacks against the underlying application or database in many cases. Hashing the original database will transform the data, and using a single database remains risky."
  },
  {
    "id": "SEC-D3-166",
    "domain": "3.0",
    "question": "Jules is planning a SCADA deployment for her organization. Which of the following is most likely to be a major concern over the lifetime of the SCADA system?",
    "answers": [
      "Cost",
      "Scalability",
      "Inability to patch",
      "Availability"
    ],
    "correct": 2,
    "explanation": "SCADA and ICS systems often suffer from a lack of patches and updates. Cost is typically amortized over long periods of time, and SCADA and ICS systems are critical to organizational functions. Scalability is rarely a concern for embedded devices, and SCADA and ICS devices are designed for long life cycles and reliability."
  },
  {
    "id": "SEC-D3-167",
    "domain": "3.0",
    "question": "Susan has deployed a network using software-defined networking. What part of her network is most critical to secure as part of this architecture?",
    "answers": [
      "The routers",
      "The switches",
      "The SDN controller",
      "The SD-WAN connections"
    ],
    "correct": 2,
    "explanation": "In a SDN environment, the SDN controller provides manages and controls all the network devices, including switches and routers. That means that a compromise of the SDN controller would result in compromise of the entire network. No mention is made of SD-WAN in the question, so we don't know the connectivity or relative importance of SD-WAN in the scenario."
  },
  {
    "id": "SEC-D3-168",
    "domain": "3.0",
    "question": "The ability to obtain third-party support for a device or system is an example of which consideration?",
    "answers": [
      "Availability",
      "Risk transference",
      "Compute",
      "Responsiveness"
    ],
    "correct": 1,
    "explanation": "Third-party support availability is an example of risk transference where the support contract moves the risk to the contractor. Availability and responsiveness may be considerations for the contractor, but the ability to obtain support doesn't imply either of these. Compute is most commonly a concern where embedded devices or hardware solutions may not have sufficient computational power to meet new needs."
  },
  {
    "id": "SEC-D3-169",
    "domain": "3.0",
    "question": "Yarif wants to create security zones in his network. Which of the following technologies is best suited to doing this based on roles and user identities?",
    "answers": [
      "NAC and VLANs",
      "802.1X and containerization",
      "SDN and MAC address filtering",
      "SD-WAN and VLANs"
    ],
    "correct": 0,
    "explanation": "Network access control (NAC) tools that can allow for authentication and authorization based on user groups or roles and VLANs that separate groups based on those roles once they're on the network exactly fit the needs Yarif has. 802.1X can also be helpful with this, but containerization is used to allow applications to be deployed without worrying about the application environment. SDN and MAC address filtering doesn't account for user authentication and identities, just machine hardware addresses. SD-WAN is for external connectivity, not internal networks."
  },
  {
    "id": "SEC-D3-170",
    "domain": "3.0",
    "question": "Elle is conducting an exercise for her organization and wants to run an exercise that is as close to an actual event as possible. What type of event should she run to help her organization get this type of real-world practice?",
    "answers": [
      "A simulation",
      "A tabletop exercise",
      "A walk-through",
      "A wargame"
    ],
    "correct": 0,
    "explanation": "A simulation is the closest you can get to a real-world event without having one. A tabletop exercise has personnel discussing scenarios, whereas a walk-through goes through checklists and procedures. A wargame is not a common exercise type."
  },
  {
    "id": "SEC-D3-171",
    "domain": "3.0",
    "question": "What security advantage does a serverless model provide?",
    "answers": [
      "Cost savings",
      "No need to patch infrastructure",
      "No vulnerable functions",
      "No need to log events"
    ],
    "correct": 1,
    "explanation": "Serverless deployments remove the need to patch underlying infrastructure. They may still have vulnerable functions and should be logged. Cost savings is not a direct security advantage."
  },
  {
    "id": "SEC-D3-172",
    "domain": "3.0",
    "question": "Laura is planning for continuity of operations. What personnel concern should she plan to handle for her hot site in the event of a large-scale natural disaster in the area where her primary facility is?",
    "answers": [
      "Lack of facility power",
      "Inability to authenticate personnel",
      "Insider threats",
      "Lack of available personnel"
    ],
    "correct": 3,
    "explanation": "In a large-scale disaster scenario, personnel may be unwilling or unable to report to work. Organizations planning for disaster in an area where their personnel live and work often need to identify ways to ensure staffing in a scenario that impacts their staff. Lack of facility power is not a personnel issue. Authentication should be part of the hot-site capability. Insider threats are not a common concern during disasters."
  },
  {
    "id": "SEC-D3-173",
    "domain": "3.0",
    "question": "Which of the following is not a common means of enforcing segmentation on a network?",
    "answers": [
      "ACLs",
      "VLANs",
      "Firewalls",
      "Air gaps"
    ],
    "correct": 3,
    "explanation": "ACLs, VLANs, and firewalls are all commonly used to implement network segmentation. Due to the operational challenges that air gaps create, they are far less commonly implemented and are only used when absolutely necessary."
  },
  {
    "id": "SEC-D3-174",
    "domain": "3.0",
    "question": "Binary files are an example of what type of data?",
    "answers": [
      "Human-readable",
      "Restricted",
      "Non-human-readable",
      "Confidential"
    ],
    "correct": 2,
    "explanation": "Binary files like executable programs are examples of non-human-readable data. That's one of the reasons encoding schemes like XML were created for data files that can allow both machines and humans to read and interact with data. Restricted and confidential are both classification schemes that businesses may use to describe their organizational data."
  },
  {
    "id": "SEC-D3-175",
    "domain": "3.0",
    "question": "Erin uses a journaling backup scheme for her database. After a system outage she needs to restore from her backups. If her organization uses a daily backup scheme that runs at midnight, and the issue occurred at 2 a.m., how much data is Erin likely to lose?",
    "answers": [
      "Two hours of data",
      "One day and two hours of data",
      "One week of data",
      "Little or no data"
    ],
    "correct": 3,
    "explanation": "Journaling tracks transactions as they occur. Unless the journal itself was lost, Melissa should be able to restore the backup, then replay the journal to ensure the organization loses very little data."
  },
  {
    "id": "SEC-D3-176",
    "domain": "3.0",
    "question": "Which of the following is typically used to manage an ICS?",
    "answers": [
      "SDN",
      "SCADA",
      "Active Directory",
      "SD-WAN"
    ],
    "correct": 1,
    "explanation": "SCADA systems are often used to manage industrial control systems (ICSs). SDN and SD-WAN are used to manage networks and connectivity respectively, whereas Active Directory is used to manage Windows servers and workstations in a domain environment."
  },
  {
    "id": "SEC-D3-177",
    "domain": "3.0",
    "question": "Maria's organization uses a cloud backup provider and performs encrypted backups for their IaaS infrastructure and data. If the data needs to be restored, what will Maria need to do?",
    "answers": [
      "Ask the vendor for the recovery key.",
      "Provide the recovery key.",
      "Restore the recovery key from backup and use it.",
      "Generate a new recovery key and restore from backup."
    ],
    "correct": 1,
    "explanation": "Encrypted backups require the encryption key, so Maria's organization will need to preserve and protect the recovery key in a secure manner that does not rely on the backups. This is often done via multiple physical copies of the key stored in secured locations with geographic diversity or using both physical and cloud secure storage like a key management system (KMS)."
  },
  {
    "id": "SEC-D3-178",
    "domain": "3.0",
    "question": "What two major differences separate backups and replication?",
    "answers": [
      "Replication is periodic, but does not require restoration processes before data is able to be used.",
      "Backups are continuous but require restoration processes before data is able to be used.",
      "Backups are periodic and do not require restoration before data is able to be used",
      "Replication is continuous and does not require restoration processes before data is able to be used."
    ],
    "correct": 3,
    "explanation": "Replication is a continuous process and because of this it does not require restoration processes like restoring differential backups or journals to allow data to be used. Backups are periodic, and they typically require additional restoration work in order to be used."
  },
  {
    "id": "SEC-D3-179",
    "domain": "3.0",
    "question": "Erin's organization uses a backup schedule that creates a full backup once a week, then creates differential backups once a day on all other days. If the full backup was done four days ago, and Erin needs to restore from it, how many backups will she have to restore in total?",
    "answers": [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    "correct": 3,
    "explanation": "Erin will need to restore the full backup, then apply the differential backups from each of the remaining three days for a total of four backups."
  },
  {
    "id": "SEC-D3-180",
    "domain": "3.0",
    "question": "What advantage does an IPSec VPN have over a TLS VPN when protecting traffic?",
    "answers": [
      "It operates at the network layer rather than the transport layer.",
      "It supports stronger encryption types.",
      "It does not rely on tunneling.",
      "It does not provide advantages over TLS, and TLS should be used instead when possible."
    ],
    "correct": 0,
    "explanation": "IPSec VPNs operate at the network layer instead of the transport layer. That means less information is visible to potential attackers. Both support strong encryption, IPSec VPNs do support tunneling, and not relying on tunneling is not an advantage in most use cases."
  },
  {
    "id": "SEC-D3-181",
    "domain": "3.0",
    "question": "Vera wants to manage multiple commercial Internet services for her organization to ensure connectivity. What technology should she select to manage and maintain this?",
    "answers": [
      "SASE",
      "SDN",
      "IPSec",
      "SD-WAN"
    ],
    "correct": 3,
    "explanation": "Vera can use a SD-WAN, or software-defined wide area network, to manage multiple connections dynamically, ensuring connectivity and performance for her organization. SASE is used to secure networks and device connectivity in modern organizations with complex and mobile boundaries. SDN is software-defined networking and manages networks as code. IPSec is a suite of protocols used to secure network traffic."
  },
  {
    "id": "SEC-D3-182",
    "domain": "3.0",
    "question": "Katie is considering deploying embedded devices. Which of the following limitations is most commonly associated with embedded devices?",
    "answers": [
      "Compute limitations",
      "Responsiveness limitations",
      "Availability issues",
      "Cost issues"
    ],
    "correct": 0,
    "explanation": "Embedded devices typically have minimal CPUs, memory, and storage. They prioritize responsiveness for their core functions, and thus availability and responsiveness are typically met with the device. Cost for embedded devices is typically associated with the larger device they're part of rather than the embedded device itself as they are there to monitor or operate the system."
  },
  {
    "id": "SEC-D3-183",
    "domain": "3.0",
    "question": "What term best describes intangible assets created by staff members of a company like designs and concepts?",
    "answers": [
      "Trade secrets",
      "Sensitive data",
      "Intellectual property",
      "Trademarks"
    ],
    "correct": 2,
    "explanation": "Intellectual property is intangible creations by the human mind. Patents, copyrights, trademarks, and trade secrets are all examples of intellectual property. Intellectual property is not necessarily sensitive data, but it could be."
  },
  {
    "id": "SEC-D3-184",
    "domain": "3.0",
    "question": "Jaime is concerned about the volume of logs that her new application may create. What capacity planning item should she focus on?",
    "answers": [
      "Compute",
      "Power",
      "Storage",
      "People"
    ],
    "correct": 2,
    "explanation": "Storage capacity should be part of Jaime's infrastructure planning to ensure that large volumes of logs do not overwhelm her infrastructure. Compute is typically not an issue with logs, but it could be with log analysis later in her design process. People and power are not directly impacted by logging, but people might be needed for log analysis later as well."
  },
  {
    "id": "SEC-D3-185",
    "domain": "3.0",
    "question": "Henry's organization relies on remote workers in multiple regions. Each region has an office where workers work part-time, and the organization's core services rely on a variety of SaaS providers. What network model best describes this type of usage model?",
    "answers": [
      "Centralized",
      "Decentralized",
      "On-premises",
      "Logically segmented"
    ],
    "correct": 1,
    "explanation": "This organization is using a decentralized model where there is no datacenter or primary hosting or operational facility. With remote workers making up much of the company, as well as flexible working locations, this design makes sense for the company but introduces additional complexity because endpoints will need to be secured wherever they are, regardless of what network they are on. A centralized design can somewhat simplify that, but modern application stacks and working conditions often make that less likely. This is not an on-premises design since workers and cloud tools are remote. There is no description of segmentation in the question."
  },
  {
    "id": "SEC-D3-186",
    "domain": "3.0",
    "question": "Tom wants to use geographic restrictions as part of his security design. What type of tool is commonly used to manage geographic restrictions for mobile devices?",
    "answers": [
      "EDR",
      "MDM",
      "802.1X",
      "VPNs"
    ],
    "correct": 1,
    "explanation": "Mobile device management (MDM) tools are often used to enforce geographic restrictions on devices by using GPS and Wi-Fi to determine where they are and to limit their access to sensitive systems or data if they are not in an allowed geographic boundary. This often matches being in a specific office building with known Wi-Fi for highly sensitive access or work hour requirements. Endpoint detection and response (EDR) is used to counter ransomware and other malicious software, 802.1X is used to control access to networks, and VPNs are used to provide site-to-site connectivity through untrusted networks as well as to location shift devices."
  },
  {
    "id": "SEC-D3-187",
    "domain": "3.0",
    "question": "Jack has deployed a load balancer for his organization. When a new connection is made, the load balancer assigns the connection to the next server in a list, moving through the list over time as it distributes connections. What type of load balancing algorithm is in use?",
    "answers": [
      "Capacity-based",
      "Round-robin",
      "Least load",
      "User pinning"
    ],
    "correct": 1,
    "explanation": "Round-robin load balancer algorithms spread load by assigning incoming connections to servers or services on a list. This helps to spread the load evenly even without awareness of the relative load each connection creates or that the server is under simply by relying on connections evening out over time. Load-based and capacity-based models use more knowledge of the state of the servers or services. User pinning is not a load balancing model."
  },
  {
    "id": "SEC-D3-188",
    "domain": "3.0",
    "question": "What is the best way to protect data at rest?",
    "answers": [
      "Classification",
      "Segmentation",
      "Encryption",
      "Hashing"
    ],
    "correct": 2,
    "explanation": "Encryption is the most effective way to protect data at rest. Classification is useful to ensure data is handled in appropriate ways, but does not directly protect the data. Segmentation can help keep data in the right locations with appropriate controls around it, but again does not directly protect the data if the server or data store is accessible. Hashing is a one-way function and does not leave data in a usable state for most purposes that rely on the data being intact and in its original form."
  },
  {
    "id": "SEC-D3-189",
    "domain": "3.0",
    "question": "Kathleen wants to monitor her datacenter's environmental status. What solution should she invest in to meet this need?",
    "answers": [
      "An HVAC system",
      "UPS systems",
      "Environmental sensor appliances",
      "A load balancer"
    ],
    "correct": 2,
    "explanation": "Environmental sensor appliances are frequently deployed to datacenters and network closets to monitor for potential issues like high temperatures. Heating, ventilation, and air-conditioning (HVAC) systems monitor and control temperatures, but datacenters commonly add additional monitoring tools in case the HVAC system fails or other issues arise. UPS systems are not used for environmental monitoring, and load balancers are used to distribute load to servers and services."
  },
  {
    "id": "SEC-D3-190",
    "domain": "3.0",
    "question": "Danielle's organization has experienced a total power outage. The datacenter is currently running on its UPS. What concern should Danielle have if the UPS is her organization's only power resilience control?",
    "answers": [
      "The generator may not start.",
      "The UPS batteries may run out before the outage is over.",
      "The generator may run out of fuel in a long outage.",
      "The UPS may not handle the surge when power resumes."
    ],
    "correct": 1,
    "explanation": "Organizations typically deploy both a UPS and a generator (or generators!). Long power outages will drain the batteries that a UPS relies on. Since UPS systems are typically intended to run for minutes, rather than hours, for datacenters this should be Danielle's first concern. No generator was mentioned, and in fact the UPS is her only power resilience control. While a UPS may experience issues with surges when power resumes, temporary drops in voltage, and power outages are not uncommon even on well-maintained power grids, and UPS systems are designed to handle them under normal circumstances while protecting the systems they provide emergency power to."
  },
  {
    "id": "SEC-D3-191",
    "domain": "3.0",
    "question": "Valerie wants to connect one of her company's remote locations back to the organization's main network. What type of solution can she use for a persistent connection between the networks that will securely tunnel data across a commodity Internet connection?",
    "answers": [
      "A TLS VPN",
      "A web proxy",
      "An IPSec VPN",
      "An 802.1X tunnel"
    ],
    "correct": 2,
    "explanation": "An IPSec VPN is a common option for organizations that need to create a secure VPN tunnel between two locations. A VPN connection is established by network devices at both locations and traffic is able to travel securely over commodity Internet connections. TLS VPNs are more commonly used for individuals to connect to an organization's network. Web proxies are used to filter and control web traffic, not for this purpose. 802.1X is used to authenticate to networks and protect them from unauthorized connections, not to create secure, multisite tunnels."
  },
  {
    "id": "SEC-D3-192",
    "domain": "3.0",
    "question": "What does port security use to determine what machines or devices can connect to a network port?",
    "answers": [
      "A list of userIDs",
      "A multifactor token code for each user",
      "A list of MAC addresses",
      "A list of IP addresses"
    ],
    "correct": 2,
    "explanation": "Port security associates a list of allowed hardware (MAC) addresses with a port and only allows systems with permitted MAC addresses to connect to and send traffic through the network port. 802.1X uses authentication, which can include userIDs and multifactor. IP addresses are not a way that port security filters systems."
  },
  {
    "id": "SEC-D3-193",
    "domain": "3.0",
    "question": "Valerie wants to provide remote access to her organization's applications to users who are traveling or working remotely. She wants to ensure that users have a secure way to work with organizational data, but also wants to provide the simplest and easiest secure means of access. What should Valerie implement?",
    "answers": [
      "An IPSec VPN",
      "A jump server",
      "A TLS VPN",
      "An SD-WAN controller"
    ],
    "correct": 2,
    "explanation": "TLS VPNs provide an easier user experience from the browser without installing additional software or additional configuration like an IPSec VPN typically requires. A jump server is used for access to secure zones but isn't ideal for traveling and remote employees--often a VPN is used to access a jump server in scenarios like that. SD-WAN is useful to manage connectivity options, not for individual users."
  },
  {
    "id": "SEC-D3-194",
    "domain": "3.0",
    "question": "Which of the following is not available as part of a snapshot?",
    "answers": [
      "The underlying hypervisor's configuration",
      "The virtual machine's power state",
      "The virtual machine's memory state",
      "The virtual machine's disks"
    ],
    "correct": 0,
    "explanation": "The virtual machine's power state, memory state, and disk are all captured as part of a snapshot. The underlying hypervisor's configuration is not captured by a snapshot."
  },
  {
    "id": "SEC-D3-195",
    "domain": "3.0",
    "question": "What role does geolocation play in considerations related to data?",
    "answers": [
      "It determines if data is at rest.",
      "It impacts data sovereignty concerns.",
      "It determines if data is in use.",
      "It determines the data's criticality."
    ],
    "correct": 1,
    "explanation": "Data sovereignty concerns are driven by where the data resides, and geolocation can help understand the applicable law or regulations. Data can be at rest, in use, or in transit in any given location. Data criticality is determined by an organization, not by its location."
  },
  {
    "id": "SEC-D3-196",
    "domain": "3.0",
    "question": "Dane works for an energy provider that manages devices throughout a large geographic region using a control system that monitors and controls power infrastructure. The system operates from a central command center and uses cellular, broadband, and other connectivity methods to connect devices to the control center. What type of system is Dane's company using?",
    "answers": [
      "RTOS",
      "Embedded systems",
      "IoT",
      "SCADA"
    ],
    "correct": 3,
    "explanation": "SCADA manages complex systems by combining central and local control systems with communication systems to manage large-scale industrial processes. The endpoint devices described may be embedded systems, Internet of Things (IoT), or real-time operating systems (RTOSs), but together they are a SCADA system."
  },
  {
    "id": "SEC-D3-197",
    "domain": "3.0",
    "question": "Jorge wants to assess his organization's Internet-accessible attack surface. Which of the following methods is most likely to provide a complete understanding?",
    "answers": [
      "Open source intelligence (OSINT) review",
      "Threat feeds",
      "Vulnerability scanning",
      "Penetration testing"
    ],
    "correct": 3,
    "explanation": "Penetration tests will typically include vulnerability scanning as well as other activities that can provide a more complete view of an organization's Internet-facing attack surface. OSINT alone will not provide technical testing. Threat feeds do not provide information about a specific organization's attack surface, and vulnerability scanning may not reveal other issues like application issues."
  },
  {
    "id": "SEC-D3-198",
    "domain": "3.0",
    "question": "Brent has deployed multiple brands of IoT devices across his organization to ensure that if an issue with one type of device or device vendor occurs others will still function. What is the largest concern he should address with this design that focuses on platform diversity?",
    "answers": [
      "Complexity of management",
      "Availability",
      "Resilience",
      "Ease of deployment"
    ],
    "correct": 0,
    "explanation": "IoT devices are typically deployed for long periods of time, meaning that over time the complexity of managing a multiple device and vendor environment is the largest concern. Initial concerns about ease of deployment would exist but could be overcome. Availability and resilience are both typically helped by platform diversity as outages or issues found with one device or vendor should not impact others."
  },
  {
    "id": "SEC-D3-199",
    "domain": "3.0",
    "question": "Mark wants to protect data in use. Which of the following options should he select to protect data in use?",
    "answers": [
      "Hashing",
      "A secure enclave",
      "Containerization",
      "Tunneling data"
    ],
    "correct": 1,
    "explanation": "A secure enclave is one way of protecting data in use. This relies on secured hardware that stores data that is in use and that only allows processes that run in the enclave from accessing data. Hashing, containerization, and using tunneling do not provide security for data in use."
  },
  {
    "id": "SEC-D3-200",
    "domain": "3.0",
    "question": "The following figure shows two simplified design concepts. What security architecture is shown in Model 2?",
    "answers": [
      "Logical segmentation",
      "Air gapped",
      "Serverless",
      "On-premises"
    ],
    "correct": 1,
    "explanation": "There is no connection between the two network security zones in Model 2. This is an air gapped model with physical isolation. Logical segmentation would show VLANs or other logical segmentation options. Servers are shown, easily dismissing serverless as an option, and there is no indication of whether this is an on-premises or an off-site design.",
    "image": "questions/img/domain3-q200.jpg",
    "imageAlt": "Two model diagrams. Model 1. A webserver and a private network is connected using a firewall. Model 2. A web server and a private network is not connected."
  },
  {
    "id": "SEC-D3-201",
    "domain": "3.0",
    "question": "Masking, encryption, and tokenization are all examples of what?",
    "answers": [
      "Data encryption methods",
      "Data classification methods",
      "Data obfuscation methods",
      "Data tagging methods"
    ],
    "correct": 2,
    "explanation": "Masking, encryption, and tokenization are all examples of data obfuscation methods that protect against data exposure. None of these are encryption or classification methods, and none of them are tagging methods, although classification often involves tagging data if it will be managed or monitored using automated methods."
  },
  {
    "id": "SEC-D3-202",
    "domain": "3.0",
    "question": "Liana wants to deploy a load balancer and wants to ensure that if a session is interrupted users have the highest chance of being reconnected to the same server. What algorithm should she select?",
    "answers": [
      "Round-robin",
      "IP hash",
      "Weighted least connection",
      "Resource-based"
    ],
    "correct": 1,
    "explanation": "IP hash relies on a hash of the client and server's IP addresses to associate them with a server. Even if you're not familiar with load-balancing techniques, you can rule out round-robin, which simply distributes sessions through a list in order; weighted least connection, which looks at which servers have the least traffic and a weight assigned to the server; and resource-based, which looks at how heavily loaded a server is."
  },
  {
    "id": "SEC-D3-203",
    "domain": "3.0",
    "question": "Kyle wants to authenticate users who plug into his network, then assign them to a VLAN based on their role. What technology could he use to do this?",
    "answers": [
      "802.1X",
      "Port security",
      "VLAN tagging",
      "EAP"
    ],
    "correct": 0,
    "explanation": "802.1X allows for authentication via EAP, then assignment to a VLAN based on a role or other attributes. EAP alone does not perform this function, port security leverages MAC addresses to determine if a system is allowed to connect, and VLAN tagging is part of how traffic is labeled for a specific VLAN but does not support authentication or role-based labels directly."
  },
  {
    "id": "SEC-D3-204",
    "domain": "3.0",
    "question": "Using VLANs is an example of what type of segmentation?",
    "answers": [
      "Air gapping",
      "Logical segmentation",
      "Physical segmentation",
      "Physical isolation"
    ],
    "correct": 1,
    "explanation": "Logical segmentation uses software to define and create segmentation. VLANs are defined at the network layer using VLAN tags. Air gapping would remove network connectivity between a system or systems and other networks to prevent access via the network. Physical segmentation would require separate network infrastructure. Physical isolation typically means removing a system from a network."
  },
  {
    "id": "SEC-D3-205",
    "domain": "3.0",
    "question": "Lucca has deployed an SD-WAN controller. Which of the following types of connectivity will not typically be managed with an SD-WAN solution?",
    "answers": [
      "Wi-Fi",
      "MPLS",
      "Broadband",
      "LTE"
    ],
    "correct": 0,
    "explanation": "Wi-Fi and other on premises network solutions are not typically part of an SD-WAN implementation. SD-WAN focuses on wide area networks, which are outside the on-premises network borders of organizations, and thus technologies like MPLS, broadband, and LTE are used with SD-WAN controllers."
  },
  {
    "id": "SEC-D3-206",
    "domain": "3.0",
    "question": "The information that is found on Kirk's company's Internet-facing website needs to be classified as part of his organization-wide data classification process. What classification should he apply?",
    "answers": [
      "Public",
      "Internal",
      "Confidential",
      "Restricted"
    ],
    "correct": 0,
    "explanation": "Information that is available without restriction or authentication and that is available on an Internet-facing website should be considered public information. Internal, confidential, and restricted information all require additional controls and handling practices."
  },
  {
    "id": "SEC-D3-207",
    "domain": "3.0",
    "question": "Jim wants to design his network for high availability (HA). What first step is commonly taken in HA designs for networks?",
    "answers": [
      "Configure a hot site.",
      "Purchase redundant hardware.",
      "Identify single points of failure.",
      "Implement clustering."
    ],
    "correct": 2,
    "explanation": "Identifying single points of failure is a common first step in network high availability designs. This allows network designers to plan for failures and how to avoid them. Configuring a hot site, implementing clustering, and purchasing redundant hardware all occur much further into the design process when needs are identified and prioritized."
  },
  {
    "id": "SEC-D3-208",
    "domain": "3.0",
    "question": "Theo wants to ensure that artifacts in his IaC environment have not been tampered with. What should he require as part of his version control check-in system?",
    "answers": [
      "Artifact signing",
      "Container image scanning",
      "Dependency checks",
      "Static analysis"
    ],
    "correct": 0,
    "explanation": "Having artifacts signed after they have made it through the build and validation process helps ensure that they haven't been modified and that the artifact has had the organization's checks done. Container image scanning helps to find issues like malware and dependency issues. Dependency checks can validate things like open source tool risks or issues. Static analysis requires manual review of code."
  },
  {
    "id": "SEC-D3-209",
    "domain": "3.0",
    "question": "Angela is considering using encryption as part of the security controls applied to her backups. In the event of a major disaster, what concern should she address about having encrypted backups?",
    "answers": [
      "Time to decrypt the backups",
      "Cost of encrypting the backups",
      "Ensuring the key is recoverable in a disaster",
      "The amount of space that the encryption adds to the backups"
    ],
    "correct": 2,
    "explanation": "A primary concern for organizations that encrypt their backups is whether the keys are available in a disaster. Ensuring that the keys are stored in a manner that ensures that they are recoverable if the backups are recoverable is critical. Modern backup encryption typically does not add a meaningful amount of time to backups, nor does it increase cost or space to such a significant degree that it is a primary concern."
  },
  {
    "id": "SEC-D3-210",
    "domain": "3.0",
    "question": "Which of the following is not a common security issue with IoT devices?",
    "answers": [
      "Insecure communication",
      "Data leaks",
      "Ransomware",
      "Device vulnerabilities"
    ],
    "correct": 2,
    "explanation": "Ransomware concerns are typically found with desktops, laptops, mobile devices, and servers instead of IoT devices. IoT devices often don't have patches or aren't patched, send data to third parties that may not be desired, and may not use secure communications."
  },
  {
    "id": "SEC-D3-211",
    "domain": "3.0",
    "question": "Jack is worried about outages that may disrupt service from his IaaS vendor's cloud environment. Which of the following options provides the greatest likelihood of avoiding service disruptions from an outage from his current IaaS vendor?",
    "answers": [
      "Deploying to multiple availability zones (AZs)",
      "Deploying to multiple regions",
      "Deploying to multiple cloud vendors",
      "Requiring contractual terms around uptime"
    ],
    "correct": 2,
    "explanation": "In circumstances where a single vendor's outages are a major concern, multi-cloud deployments may be appropriate. This is more common when the application is containerized or otherwise easily portable. The more customized to the current cloud vendor the application or service is, the more difficult it is to move to other cloud vendors and the more costly the move will be. In addition, multi-cloud can drive additional costs for overhead services, making multi-cloud a choice organizations undertake cautiously. Deploying in multiple AZs or regions will not avoid an outage if the IaaS vendor has a cloud-wide issue, and contractual obligations won't stop outages--they will typically just provide penalties if there is an outage longer than the contract allows."
  },
  {
    "id": "SEC-D3-212",
    "domain": "3.0",
    "question": "Chuck is responsible for an on-site datacenter. He wants to ensure that the datacenter has appropriate network connectivity to ensure resilience and performance. Which of the following will have the greatest impact on meeting that requirement?",
    "answers": [
      "Contract for a higher bandwidth connection from a single vendor.",
      "Deploy a UPS.",
      "Contract with two separate network service providers.",
      "Install a generator."
    ],
    "correct": 2,
    "explanation": "Meeting both resilience and performance requirements can be best addressed in this scenario by contracting with two separate network service providers. This allows for both resilience and the possibility of sending traffic through both connections for greater performance. Both a generator and a UPS can help with power resilience, but the focus of this question is network connectivity."
  },
  {
    "id": "SEC-D3-213",
    "domain": "3.0",
    "question": "Ben has grouped his data based on use cases and sensitivity and has applied different security practices based on those groupings. What data security technique is he using?",
    "answers": [
      "Segmentation",
      "Obfuscation",
      "Masking",
      "Tokenization"
    ],
    "correct": 0,
    "explanation": "Segmentation of data separates data based on factors like use cases, sensitivity, roles, and types or classifications of information. Obfuscation attempts to conceal or hide information. Masking replaces information with other data like asterisks or X's when displayed, allowing partial data to be displayed for business purposes. Tokenization replaces data with an alternate value, often based on a hashing algorithm that allows the alternate value to be used as an index or reference without the actual data visible."
  },
  {
    "id": "SEC-D3-214",
    "domain": "3.0",
    "question": "Monica wants to prevent users from sharing data and cares more about control than flexibility. What type of access control model is best suited to ensuring central control over file access?",
    "answers": [
      "Role BAC",
      "DAC",
      "MAC",
      "Rule BAC"
    ],
    "correct": 2,
    "explanation": "Mandatory access control (MAC) is used in scenarios where users should not have the ability to grant access to files. Role-based access control and rule-based access control both provide more flexibility, and they are more commonly used than mandatory access control in cases where that is desired. Discretionary access control (DAC) allows users to grant access to other users and does not fit the requirements either."
  },
  {
    "id": "SEC-D3-215",
    "domain": "3.0",
    "question": "Tara is monitoring web traffic to her organization's website from a local public library and notices that all of the logins seem to come from the same IP address. She knows that the library provides multiple workstations for public use as well as public Wi-Fi. What type of network appliance might be in use?",
    "answers": [
      "A jump server",
      "A proxy server",
      "A load balancer",
      "A DLP system"
    ],
    "correct": 1,
    "explanation": "A proxy server is likely to be used in an environment where the ability to filter searches may be required, such as a library with public workstations. A jump server is used to access more secure zones, a load balancer is typically used to allow multiple systems to provide a service, and a DLP system is used to prevent unauthorized data exfiltration."
  },
  {
    "id": "SEC-D3-216",
    "domain": "3.0",
    "question": "What three responsibilities are typically shared in PaaS environments according to the cloud responsibility matrix?",
    "answers": [
      "Identity infrastructure, applications, and network controls",
      "Data, devices, and accounts",
      "Physical hosts, physical networks, and physical datacenters",
      "Operating systems, applications, and data"
    ],
    "correct": 0,
    "explanation": "In platform-as-a-service (PaaS) environments, customers and providers typically share responsibility for identity and directory infrastructure, applications, and network controls. Customers are responsible for data, devices, and accounts, and the provider is responsible for the underlying systems, including operating systems and physical infrastructure."
  },
  {
    "id": "SEC-D3-217",
    "domain": "3.0",
    "question": "Marco wants to build a set of services for financial transactions for his company. The services need to be capable of scaling quickly to very large numbers of transactions, and need to be able to operate without major dependencies on other components of the architecture. What architecture should he select to best meet these needs?",
    "answers": [
      "Containerization",
      "Virtualization",
      "Microservices",
      "SCADA"
    ],
    "correct": 2,
    "explanation": "A microservices design will allow for each component or service to be separate and lightweight, allowing them to be developed independently and thus easier to fix without complex dependencies. Containerization would allow for easy deployment of applications to different service environments, but the focus for containerization is on portability, not on the design requirements listed. Virtualization requires even more resources because operating systems are virtualized, but it suffers from the same lack of a direct means of addressing the needs explained in the question. SCADA stands for supervisory control and data acquisition and is used to manage complex industrial or controls' environments, not service environments like the question describes."
  },
  {
    "id": "SEC-D3-218",
    "domain": "3.0",
    "question": "What major advantage does a monitoring port have over an inline network tap?",
    "answers": [
      "It is easier to configure.",
      "It has higher performance.",
      "It is more secure.",
      "If it fails, it will not impact the network."
    ],
    "correct": 3,
    "explanation": "The biggest advantage of a monitoring port over an inline network tap is that if the monitoring port fails, it will not impact the network traffic flow. If an inline device fails, it may impact the network traffic even if it is designed to avoid that scenario. Inline taps don't have to rely on the performance of the switch, meaning that they are often higher performance; they can be passive, meaning that they cannot be attacked like a switch's operating system can be; and since inline passive devices simply copy traffic, they are often easier to configure since you merely plug them in."
  },
  {
    "id": "SEC-D3-219",
    "domain": "3.0",
    "question": "Which of the following is not typically true of embedded systems?",
    "answers": [
      "They provide the ability to install additional software.",
      "They have a long lifespan.",
      "They have memory and CPU constraints.",
      "They are not designed for end-user configuration and control."
    ],
    "correct": 0,
    "explanation": "Embedded systems are often used for long periods of time, use relatively low-power CPUs and have limited memory and storage, and are typically not user configurable or manageable in meaningful ways. They typically don't have the ability to install additional software as they are purpose-built to serve a specific need."
  },
  {
    "id": "SEC-D3-220",
    "domain": "3.0",
    "question": "Naomi wants to be able to easily move her application between cloud service providers and to use automation to allow for deployment of the application. What technology best allows for applications to be bundled with the libraries and other components they need without requiring additional overhead like an operating system?",
    "answers": [
      "Containerization",
      "Snapshots",
      "Embedded systems",
      "Segmentation"
    ],
    "correct": 0,
    "explanation": "Containerization technologies bundle the needed libraries and other components for an application together in a lightweight package format that can easily be deployed to a provider's containerization service. Snapshots are used to capture a virtual machine's state and data at a given point in time. Embedded systems are computers that are built into a device or system. Segmentation is the concept of dividing a network or system into separate parts, often with security and other boundaries between them."
  },
  {
    "id": "SEC-D3-221",
    "domain": "3.0",
    "question": "What term describes the right of countries to pass laws that control the use of data within their borders?",
    "answers": [
      "Data classification",
      "Treaty obligations",
      "Treaty rights",
      "Data sovereignty"
    ],
    "correct": 3,
    "explanation": "Data sovereignty is the right of nations to pass laws that control the use of data within their borders. This means that organizations must follow each country's laws when they store, process, or otherwise handle data in the country they operate in. Data classification is a process of classifying data to set handling or other processes and practices around it. Treaties are not covered by the Security+ exam."
  },
  {
    "id": "SEC-D3-222",
    "domain": "3.0",
    "question": "Ian's organization uses a root certificate authority that only allows certificate signing locally. All certificates are transferred via USB drives because the system is not connected to the network. What type of security design is in use?",
    "answers": [
      "Port security",
      "An air gapped design",
      "Defense-in-depth",
      "A zero-trust design"
    ],
    "correct": 1,
    "explanation": "This is an example of air gapped design where there is no network connectivity. This prevents network-based attacks from being possible against the high-value certificate authority server. Port security is used to enable or disable network ports. Defense-in-depth is a design concept that relies on layers of defenses to ensure security. Zero trust requires continuous authentication and rights verification to provide ongoing security for a network or system architecture."
  },
  {
    "id": "SEC-D3-223",
    "domain": "3.0",
    "question": "The company that Jayne works for has moved their web application infrastructure to a serverless model. Jayne's security team has informed her that they believe the application is undergoing a large-scale resource exhaustion-based distributed denial-of-service attack. If the application is running in Microsoft's serverless Azure environment, what is the most critical concern Jayne should have about the attack?",
    "answers": [
      "Loss of data",
      "Cost of the resource usage",
      "Inability to review logs",
      "Vulnerabilities in the application"
    ],
    "correct": 1,
    "explanation": "A large-scale denial-of-service attack that is using resources can be costly. Microsoft's cloud will be able to scale to meet the demand, but Jayne's organization may spend large amounts of money without benefiting any legitimate customers. Loss of data is unlikely because the application is being heavily used without any underlying issue for the application's data. Log files will still be created, but the size and scale of the logs may drive cost. There is nothing in the scenario that demonstrates a vulnerability, and resource exhaustion attacks do not require a vulnerability to be successful."
  },
  {
    "id": "SEC-D3-224",
    "domain": "3.0",
    "question": "Elaine knows that prior to 802.1X enabling a port, only EAP traffic is allowed through the port. What does this permit?",
    "answers": [
      "Vulnerability scanning",
      "Authentication",
      "Port scanning",
      "System security status validation"
    ],
    "correct": 1,
    "explanation": "EAP (Extensible Authentication Protocol) is used for 802.1X authentication before the port is enabled for other traffic. EAP does not permit vulnerability or port scanning, nor does it provide system security status validation."
  },
  {
    "id": "SEC-D3-225",
    "domain": "3.0",
    "question": "Tristan deploys the network device shown in the following figure. The organization's web browsing traffic is directed through it and the traffic is filtered as described in the image. What type of network appliance is shown?",
    "answers": [
      "A web application firewall",
      "A proxy server",
      "A jump server",
      "A load balancer"
    ],
    "correct": 1,
    "explanation": "The functions shown are typical of a proxy server. The proxy can be used to apply content controls and to conceal the IP addresses of internal users. A web application firewall filters web traffic but is specifically targeting attacks and malicious behavior. A jump server is used between a low-trust and a higher-trust area to provide access, and this is not shown or described in the image or question. A load balancer is used to distribute traffic load between servers, and this is not shown in the image or reflected in the question.",
    "image": "questions/img/domain3-q225.jpg",
    "imageAlt": "A laptop and a server is connected to internet with a mediator labeled as follows. Conceals internal I P addresses for web traffic, blocks website ads, applies content control for websites."
  },
  {
    "id": "SEC-D3-226",
    "domain": "3.0",
    "question": "Parvati wants to configure her web application firewall to prevent basic SQL injection attacks. Which of the following rules could she use to accomplish this?",
    "answers": [
      "Filter out all OR statements.",
      "Filter out single quotes.",
      "Block all SQL statements.",
      "Block all AND statements."
    ],
    "correct": 1,
    "explanation": "While blocking single quotes won't stop all SQL injection, it will stop many basic injection attacks. Preventing the use of SQL or AND and OR statements may break some applications, although secure web applications should be using stored queries."
  }
];
