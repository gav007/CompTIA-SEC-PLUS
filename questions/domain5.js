/* CompTIA Security+ SY0-701 -- Domain 5.0
   227 review questions extracted from:
     9781394211388-Chapter-5-Domain-5-0--Security-Program-Management-and-Oversight.epub
   Correct answers + explanations from:
     9781394211388-Appendix-Answers-to-Review-Questions.epub
   Regenerate with: python tools/extract_domain.py 5
   Question order matches the book; `correct` is a 0-based index into
   `answers` (the app shuffles answer order at runtime, so never rely
   on A/B/C/D here). */

window.QUESTION_BANKS = window.QUESTION_BANKS || {};
window.QUESTION_BANKS["domain5"] = [
  {
    "id": "SEC-D5-001",
    "domain": "5.0",
    "question": "The company that Scott works for has experienced a data breach, and the personal information of thousands of customers has been exposed. Which of the following impact categories is not a concern as described in this scenario?",
    "answers": [
      "Reputation",
      "Financial",
      "Availability loss",
      "Data loss"
    ],
    "correct": 2,
    "explanation": "This description does not include any risk to availability since there is no information about systems or services being down or offline. This scenario would likely result in reputational, financial, and data loss impacts for Scott's company."
  },
  {
    "id": "SEC-D5-002",
    "domain": "5.0",
    "question": "Sameer wants to assess whether the key risk indicators (KRIs) his team have suggested are appropriate for his organization. Which of the following is not a common characteristic of a useful KRI?",
    "answers": [
      "Actionable",
      "Measurable",
      "Relevant",
      "Inexpensive"
    ],
    "correct": 3,
    "explanation": "KRIs, or key risk indicators, need to be actionable so that the organization can use them to control or manage risk, they need to be measurable so that they can be assessed, and they must be relevant to the risks that they measure. They don't necessarily have to be inexpensive, as organizations may make choices about costs based on their risks and business models."
  },
  {
    "id": "SEC-D5-003",
    "domain": "5.0",
    "question": "Jill's organization wants to ensure that services and systems are back online and functioning normally within 4 hours of an event or incident. What term best describes this goal?",
    "answers": [
      "An RTO",
      "An MTTR",
      "An RPO",
      "An MTBF"
    ],
    "correct": 0,
    "explanation": "A recovery time objective (RTO) is set by organizations to describe how long restoring systems or services to normal function after a disruption can take. Mean time to repair (MTTR) is the average time it takes to repair a system or device. A recovery point objective (RPO) describes how much data can be lost in the event of an outage or issue, and the mean time between failures (MTBF) is a measure of the reliability of a system. It is the expected amount of time that will elapse between system failures."
  },
  {
    "id": "SEC-D5-004",
    "domain": "5.0",
    "question": "Eric's organization has created a policy document that describes how users can and cannot use the organization's network, systems, and services. What type of policy has he created?",
    "answers": [
      "Business continuity policy.",
      "An acceptable use policy.",
      "An incident response policy.",
      "This is a standard, not a policy."
    ],
    "correct": 1,
    "explanation": "Acceptable use policies (AUPs) describe how and what users can use organizational resources, systems, and services for. Business continuity policies describe how an organization approaches business continuity, and incident response policies focus on how organizations respond to incidents. A standard acts as the rules to achieve an intent, while policies describe the organization's intent. This policy describes intent, not specific implementations."
  },
  {
    "id": "SEC-D5-005",
    "domain": "5.0",
    "question": "Angie is performing a penetration test and has gathered information using the Shodan search engine about her target. What type of reconnaissance has she performed?",
    "answers": [
      "Active",
      "Commercial",
      "Scanner-based",
      "Passive"
    ],
    "correct": 3,
    "explanation": "Angie has conducted passive reconnaissance. She did not perform a scan or otherwise take direct active action to gather her information. Instead, she used the existing Shodan engine to gather information. While Shodan is a commercial product and does gather information using scans, databases like Shodan are considered passive reconnaissance, and the Security+ exam objectives recognize two types of reconnaissance: active and passive."
  },
  {
    "id": "SEC-D5-006",
    "domain": "5.0",
    "question": "What role do data processors have in an organization?",
    "answers": [
      "They determine how data is processed.",
      "They own the data.",
      "They process data on behalf of a controller.",
      "They contract with third parties to use the data."
    ],
    "correct": 2,
    "explanation": "Data processors do just that--they process the data on behalf of a data controller, who determines how data is processed and what purposes it is used for. They do not own the data, and they are typically contracted to process the data rather than contracting with third parties themselves."
  },
  {
    "id": "SEC-D5-007",
    "domain": "5.0",
    "question": "Ginger's personal data is used by an organization, including identifiable information like her name, address, and Social Security number. What term best describes Ginger?",
    "answers": [
      "Data owner",
      "Data controller",
      "Data processor",
      "Data subject"
    ],
    "correct": 3,
    "explanation": "Ginger is a data subject, a person who can be identified by her personally identifiable information (PII). Data owners are responsible for protection, usage, and quality of datasets. Data controllers determine how data will be used, and processors do the actual data processing."
  },
  {
    "id": "SEC-D5-008",
    "domain": "5.0",
    "question": "Hong's company conducts regular risk assessments. As part of their assessment process, they gather a team of experts who assess risks on a scale from low to high based on their knowledge and experience. What type of risk assessment is Hong's company conducting?",
    "answers": [
      "Ad hoc",
      "Quantitative",
      "Qualitative",
      "Continuous"
    ],
    "correct": 2,
    "explanation": "Qualitative risk assessment uses knowledge and expertise to assess risk rather than assigning numeric values and calculations like a quantitative assessment process would. Ad hoc risk assessment is done when risks need to be assessed for a specific, immediate need unlike the planned, regular risk assessments described. Continuous risk assessment is ongoing, whereas this is conducted regularly."
  },
  {
    "id": "SEC-D5-009",
    "domain": "5.0",
    "question": "How is likelihood measured in qualitative risk assessments?",
    "answers": [
      "A scale like high, medium, low",
      "A numeric scale from 0 to 1",
      "By calculating loss events per year",
      "A numeric scale from 1 to 100"
    ],
    "correct": 0,
    "explanation": "Qualitative risk assessments measure likelihood on a descriptive scale like high, medium, or low. Quantitative assessments measure likelihood on a numeric scale using known event occurrence rates where possible."
  },
  {
    "id": "SEC-D5-010",
    "domain": "5.0",
    "question": "Grace wants to establish a governance structure that will leverage third-party experts who are paid by her organization. What governance structure should she select?",
    "answers": [
      "Board-based",
      "Committee-based",
      "Government-based",
      "Market-based"
    ],
    "correct": 0,
    "explanation": "Boards often include external members who may have industry or other experience and expertise that will benefit the organization, and they are sometimes, but not always, paid as part of their work on the board. Committees are frequently composed of internal staff; government-based governance occurs through laws or as part of public service. Market-based is not a type of governance outlined by the Security+ exam objectives."
  },
  {
    "id": "SEC-D5-011",
    "domain": "5.0",
    "question": "Carmen's organization wants to purchase cybersecurity insurance to offset the cost of potential breaches. What risk management strategy has her organization adopted?",
    "answers": [
      "Transfer",
      "Accept",
      "Avoid",
      "Mitigate"
    ],
    "correct": 0,
    "explanation": "Risk transfer options move the costs of risks to another organization such as through insurance. Acceptance involves management acknowledging that the risk and its impacts may occur, and that the organization will move forward despite that chance. Avoidance seeks to prevent the risk from occurring. Mitigation works to limit the impact of a risk."
  },
  {
    "id": "SEC-D5-012",
    "domain": "5.0",
    "question": "Marissa has been recruited to a group that provides oversight for an organization but that doesn't engage in the day-to-day operations of the organization. The group focuses on strategy and direction for the organization and meets a few times a year. What type of governance group is Marissa part of?",
    "answers": [
      "An activist investor's group",
      "A committee",
      "A board",
      "A regulator"
    ],
    "correct": 2,
    "explanation": "Boards provide strategic oversight and direction for organizations. Boards may form subcommittees to accomplish specific tasks or to provide oversight over specific areas. Regulators oversee an industry based on law. Activist investor's groups are not covered by the exam, but typically they own stock in an organization and seek to direct the organization through their activism and stock ownership."
  },
  {
    "id": "SEC-D5-013",
    "domain": "5.0",
    "question": "Governance at Selah's organization is delegated to business units. This allows the units to determine how to balance their operational needs against their governance processes. What type of governance is this?",
    "answers": [
      "Centralized",
      "Board-based",
      "Decentralized",
      "Committee-based"
    ],
    "correct": 2,
    "explanation": "This governance approach is a decentralized approach with each unit or area providing their own governance. While flexible, this can be problematic because of a lack of consistency and overhead due to unique circumstances and requirements. Centralized designs do not delegate authority and instead place authority in a central place, organization, or individual. There is no mention of a board or committee."
  },
  {
    "id": "SEC-D5-014",
    "domain": "5.0",
    "question": "Sharon's organization wants to understand the risks that it will experience due to acquiring a new subsidiary, but it needs to conduct the assessment quickly while leveraging their industry expertise. Which of the following risk assessment options should Sharon recommend to address this need?",
    "answers": [
      "Conduct an ad hoc risk assessment.",
      "Conduct a one-time risk assessment.",
      "Conduct a third-party risk assessment.",
      "Build a continuous risk assessment process."
    ],
    "correct": 1,
    "explanation": "A one-time risk assessment that addresses the acquisition will best meet Sharon's needs. Ad hoc assessments are less formal, and they are often used to quickly assess a system or other potential risk. There is no requirement listed for third-party assessment, and they can be both expensive and time-consuming. Continuous risk assessment efforts are typically built into ongoing processes and are not suited to this type of one-time review."
  },
  {
    "id": "SEC-D5-015",
    "domain": "5.0",
    "question": "What term describes a third party that takes actions on behalf of a data controller?",
    "answers": [
      "Data subject",
      "Data owner",
      "Data processor",
      "Data administrator"
    ],
    "correct": 2,
    "explanation": "Data processors process data on behalf of controllers. Data subjects are the individuals or organizations that data describes. Data owners create and are responsible for data, and data administrator is not a broadly or consistently used term in this context."
  },
  {
    "id": "SEC-D5-016",
    "domain": "5.0",
    "question": "Which of the following will provide a customer the opportunity to engage a third party to deliver an SOC 2, Type 1 report created by third-party assessors?",
    "answers": [
      "A penetration testing agreement",
      "A risk assessment agreement",
      "A vulnerability scan clause",
      "A right-to-audit clause"
    ],
    "correct": 3,
    "explanation": "Right-to-audit clauses provide customers with the right to have an audit of their vendor like an SOC 2, Type 1 assessment performed. SOC 2, Type 1 reports are not penetration testing reports, vulnerability scan reports, or risk assessment reports."
  },
  {
    "id": "SEC-D5-017",
    "domain": "5.0",
    "question": "Isaac has been asked to be his organization's data owner for customer data. Which of the following is not a typical part of that role?",
    "answers": [
      "Processing the data",
      "Classifying data",
      "Protecting data",
      "Ensuring the quality of the data"
    ],
    "correct": 0,
    "explanation": "Data owners are responsible for data, including classifying it, protecting it, overseeing the use of it, and ensuring the quality of the overall data. They are not, however, responsible for directly processing the data."
  },
  {
    "id": "SEC-D5-018",
    "domain": "5.0",
    "question": "Pedro's organization uses industrial machinery, which runs an RTOS that is no longer supported. His organization's policies require systems to be removed from service if they cannot be patched for security issues, and the RTOS has a known vulnerability. The machines are very expensive and are a core part of the organization's industrial processes. What risk process would Pedro follow if he wanted to retain the devices, despite the risk?",
    "answers": [
      "Transfer the risk.",
      "Seek an exception.",
      "Document the risk.",
      "Mitigate the risk."
    ],
    "correct": 1,
    "explanation": "Risk exceptions are granted when a risk is accepted by the organization, despite not following typical organizational policies or processes. This is not a transfer or mitigation, and simply documenting the risk does not cause it to be accepted."
  },
  {
    "id": "SEC-D5-019",
    "domain": "5.0",
    "question": "Jake's team has begun handling new data related to customers, including their personally identifiable information. Jake takes on a new role that has responsibilities including classifying each data element gathered about customers. What is Jake's role in the data handling process?",
    "answers": [
      "Controller",
      "Custodian",
      "Owner",
      "Processor"
    ],
    "correct": 2,
    "explanation": "Data owners classify, protect, oversee the use of, and ensure the quality of data. Controllers are responsible for the procedures and purposes of data use, often described as the why and how. Custodians are the staff and teams who handle data, and processors work with data on behalf of a controller."
  },
  {
    "id": "SEC-D5-020",
    "domain": "5.0",
    "question": "Which of the following measures is not commonly used as part of a business impact analysis?",
    "answers": [
      "RTO",
      "MTTR",
      "ARO",
      "MTBF"
    ],
    "correct": 2,
    "explanation": "There are four commonly used business impact analysis (BIA) measures that are part of the Security+ exam objectives: recovery time objectives (RTOs), recovery point objectives (RPOs), mean time to repair (MTTR), and mean time between failures (MTBF). ARO, or annual rate of occurrence, is associated with risk assessment, not BIA."
  },
  {
    "id": "SEC-D5-021",
    "domain": "5.0",
    "question": "As part of her organization's marketing efforts, Julie's team gathers information about customers and others who visit their website. Julie has engaged an analytics company that uses the data gathered to identify trends and potential new market opportunities. What data role does this third-party company play?",
    "answers": [
      "Data owner",
      "Data processor",
      "Data controller",
      "Data custodian"
    ],
    "correct": 1,
    "explanation": "Data processors process data for data controllers. In this scenario, Julie or a member of her staff is the data controller and the third-party organization is a processor. They do not own the data, and they are not custodians who are responsible for the data on an ongoing basis."
  },
  {
    "id": "SEC-D5-022",
    "domain": "5.0",
    "question": "Neil's organization has signed a contract that includes guarantees of 99.9 percent uptime. What type of agreement has Neil's organization created?",
    "answers": [
      "An MSA",
      "An NDA",
      "A MTBF",
      "An SLA"
    ],
    "correct": 3,
    "explanation": "Service level agreements (SLAs) set forth the expected service level as well as penalties for nonperformance. A master services agreement (MSA) is a broad agreement that additional work may be performed under. An NDA, or nondisclosure agreement, sets forth what information may and may not be shared or disclosed. The mean time between failures (MTBF) is a measure of the reliability of a system. It is the expected amount of time that will elapse between system failures."
  },
  {
    "id": "SEC-D5-023",
    "domain": "5.0",
    "question": "Which of the following best describes a data controller?",
    "answers": [
      "Manages the flow of data between custodians",
      "Creates and formats data when it is collected or created",
      "Any system that handles data",
      "Determines the purpose and methods of processing data"
    ],
    "correct": 3,
    "explanation": "Data controllers determine the purpose and methods of data processing. They may be individuals, groups, or organizations. This is defined by the General Data Protection Regulation (GDPR). That may involve how data flows, and the formats or other details of data, but the best--and legally defined--role of a controller is the one set by the GDPR."
  },
  {
    "id": "SEC-D5-024",
    "domain": "5.0",
    "question": "As part of his role, Augie is responsible for implementation of business rules related to data, as well as for storage, and use of data and datasets. What data-related role does Augie hold?",
    "answers": [
      "Data owner",
      "Data custodian",
      "Data processor",
      "Data subject"
    ],
    "correct": 1,
    "explanation": "Augie is a data custodian. In this role he is responsible for data's use in the business, including storing and properly handling data. Data owners are responsible and accountable for data as well as ensuring that custodians and others are handling the data appropriately. Data processors do actual data processing, and may be an individual, organization, or group. Data subjects are the people who the data describes or is about."
  },
  {
    "id": "SEC-D5-025",
    "domain": "5.0",
    "question": "Which of the following penalties is most typically imposed on a country rather than on a company?",
    "answers": [
      "Fines",
      "Loss of license",
      "Sanctions",
      "Mandatory reporting"
    ],
    "correct": 2,
    "explanation": "Sanctions are typically applied to countries rather than companies or individuals. Fines and loss of license are typically aimed at companies and individuals, and mandatory reporting is not a penalty included in the Security+ exam."
  },
  {
    "id": "SEC-D5-026",
    "domain": "5.0",
    "question": "Which of the following is not a commonly used term to describe risk appetite?",
    "answers": [
      "Intentional",
      "Neutral",
      "Expansionary",
      "Conservative"
    ],
    "correct": 0,
    "explanation": "Terms used for risk appetite in the Security+ exam objectives include conservative, neutral, and expansionary. Intentional is not a term used for risk appetite."
  },
  {
    "id": "SEC-D5-027",
    "domain": "5.0",
    "question": "What does a data steward do?",
    "answers": [
      "Create data.",
      "Carry out data use and security policies.",
      "Explain compliance requirements for data.",
      "Oversee data throughout its life cycle."
    ],
    "correct": 1,
    "explanation": "Data stewards are responsible for the data in their charge. That means they carry out data usage and security policies and ensure that data is handled appropriately. Creating data is typically done by data owners, who also explain and set data security policies. Multiple roles oversee data throughout its life cycle, not just a data steward."
  },
  {
    "id": "SEC-D5-028",
    "domain": "5.0",
    "question": "Marcus determines what organizationally owned data is used for a given purpose and how it is processed. What data role does he have in his organization?",
    "answers": [
      "He is a data controller.",
      "He is a supervisory authority.",
      "He is a data protection officer.",
      "He is a data processor."
    ],
    "correct": 0,
    "explanation": "Data controllers determine what data is used and how it is processed. Supervisory authorities are public authorities in the European Union (EU) that monitor for compliance with the General Data Protection Regulation (GDPR). Data protection officers are required by the GDPR and oversee data protection strategies and their implementation. Data processors do just that--they process the data on behalf of a data controller who determines how data is processed and what purposes it is used for. They do not own the data, and are typically contracted to process the data rather than contracting with third parties themselves."
  },
  {
    "id": "SEC-D5-029",
    "domain": "5.0",
    "question": "Colleen's organization has deployed web application firewalls (WAFs) to protect their web services from being impacted by a known SQL injection attack. What risk management strategy has the organization adopted?",
    "answers": [
      "Transfer",
      "Accept",
      "Avoid",
      "Mitigate"
    ],
    "correct": 2,
    "explanation": "Avoidance seeks to prevent the risk from occurring. In this case, the WAF is a method of preventing the attack, thus avoiding the risk. Risk transfer options move the costs of risks to another organization such as through insurance. Acceptance involves management acknowledging that the risk and its impacts may occur and that the organization will move forward despite that chance. Mitigation works to limit the impact of a risk."
  },
  {
    "id": "SEC-D5-030",
    "domain": "5.0",
    "question": "Requiring all web traffic to be sent via HTTPS is an example of what type of standard?",
    "answers": [
      "Access control",
      "Encryption",
      "Password",
      "Physical security"
    ],
    "correct": 1,
    "explanation": "HTTPS using TLS is a form of encryption for data in motion. Encryption standards often require specific ways to use encryption, encryption algorithms, settings or configurations for encryption, or times and places where encryption must be used. Access control standards focus on how access is controlled, by whom, and who is impacted. Password standards define settings and requirements related to passwords, and physical security standards address physical security requirements."
  },
  {
    "id": "SEC-D5-031",
    "domain": "5.0",
    "question": "Why are cloud IaaS vendors unlikely to agree to including a right-to-audit clause in their contracts?",
    "answers": [
      "The risk to their other customers is too great.",
      "The cost of the assessment is too high.",
      "They may not pass the audit.",
      "They have competing regulatory requirements."
    ],
    "correct": 0,
    "explanation": "Cloud vendors rarely agree to right-to-audit clauses, instead choosing to provide their own third-party audit results. This reduces the chances of an audit or assessment causing issues with their other customers. Third-party audit costs covered by right-to-audit clauses are often borne by the customers, not the vendor. Not passing an audit is unlikely for major vendors, regulatory requirements are more likely to require audits, and regulations rarely limit auditability."
  },
  {
    "id": "SEC-D5-032",
    "domain": "5.0",
    "question": "Chuck's organization requires that user accounts only be able to log in during the staff member's working hours. What type of standard would drive a setting like this?",
    "answers": [
      "Access control",
      "Encryption",
      "Password",
      "Physical security"
    ],
    "correct": 0,
    "explanation": "Access control standards often define how and when users can access or use systems and services. Defining user access to only be allowed during working hours is an example of an access control standard. Encryption standards often require specific ways to use encryption, encryption algorithms, settings or configurations for encryption, or times and places where encryption must be used. Password standards define settings and requirements related to passwords, and physical security standards address physical security requirements."
  },
  {
    "id": "SEC-D5-033",
    "domain": "5.0",
    "question": "Frankie wants to establish her organization's encryption standard. Which of the following should she recommend for a default encryption algorithm for general use if cryptographic strength is a critical feature?",
    "answers": [
      "AES-128",
      "SHA-1",
      "AES-256",
      "SHA-2"
    ],
    "correct": 2,
    "explanation": "The Advanced Encryption Standard (AES) is the most commonly accepted and used encryption standard as of this writing. Selecting a longer key length like 256 over a 128-bit option provides greater resistance to brute-force attacks. SHA-1 and SHA-2 are hashing algorithms, not encryption algorithms."
  },
  {
    "id": "SEC-D5-034",
    "domain": "5.0",
    "question": "Jill's organization has selected Agile with a CI/CD process for their organization. What type of policy would document this selection?",
    "answers": [
      "Business continuity",
      "Disaster recovery",
      "Incident response",
      "Software development life cycle"
    ],
    "correct": 3,
    "explanation": "Agile, along with continuous integration/continuous delivery (CI/CD) pipelines, describes a software development life cycle. Business continuity, disaster recovery, and incident response policies may mention the Agile process and impacts on the CI/CD pipeline, but it is not the primary focus of those types of policies."
  },
  {
    "id": "SEC-D5-035",
    "domain": "5.0",
    "question": "Megan's organization wants to create a change management policy. Which of the following is not a typical change type found in a change policy?",
    "answers": [
      "Preauthorized changes",
      "Emergency changes",
      "Legislated changes",
      "Standard changes"
    ],
    "correct": 2,
    "explanation": "Change management practices often include options for preapproved changes, emergency changes, and standard changes. Changes required by legislation or other external factors are not typically built into most change management processes."
  },
  {
    "id": "SEC-D5-036",
    "domain": "5.0",
    "question": "Liz wants to assess the critical functions of her business and ensure that the systems that are part of those functions are assessed to determine how often they are likely to fail, how long it would take to restore them, and what recovery objectives will be. What process should she engage in?",
    "answers": [
      "A quantitative risk assessment",
      "A business impact analysis",
      "A qualitative risk assessment",
      "A penetration test"
    ],
    "correct": 1,
    "explanation": "A business impact analysis (BIA) is a formal process used to identify mission-critical functions and to ensure that critical systems that support those functions are identified and assessed. Risk assessment seeks to identify risks and their probability and impact, and a penetration test attempts to emulate how attackers might gain access to or otherwise impact systems and services."
  },
  {
    "id": "SEC-D5-037",
    "domain": "5.0",
    "question": "What describes the key difference between policies and standards?",
    "answers": [
      "Policies are defined by third parties; standards are defined by organizations.",
      "Policies are defined by organizations; standards are defined by third parties.",
      "Policies are a statement of intent; standards define how rules help enforce policy.",
      "Policies are legally enforceable; standards are optional."
    ],
    "correct": 2,
    "explanation": "Policies are a statement of organizational intent. Standards are defined to help organization achieve that intent through the use of rules. Policies are typically defined by an organization, and standards may be adopted from third parties or created by the organization itself. Policies might be defined by law but are not required to be defined that way."
  },
  {
    "id": "SEC-D5-038",
    "domain": "5.0",
    "question": "Sophie wants to ensure that her vendor meets their SLA. What does Sophie need to do?",
    "answers": [
      "Ensure performance targets are defined in the contract with appropriate penalties.",
      "Establish key performance indicators (KPIs) for her team and assess them regularly.",
      "Ensure that security levels are not reduced when performing maintenance.",
      "Determine if supply chain levels are met in order to meet demand."
    ],
    "correct": 0,
    "explanation": "Service level agreements set forth the expected service level as well as penalties for nonperformance. That means that Sophie needs to determine whether her vendor is meeting their promised delivery levels or availability levels and to claim appropriate penalties as defined in the contract if they are not met. KPIs may be involved but would be measured against her vendor's performance, not her team's performance. Security levels and supply chain availability levels are not the only potential items covered by an SLA."
  },
  {
    "id": "SEC-D5-039",
    "domain": "5.0",
    "question": "Tuan is assessing risk and knows that he needs to be able to explain risk to his management. What two factors are combined to describe risk?",
    "answers": [
      "Impact and acceptance",
      "Likelihood and ALE",
      "Probability and impact",
      "Probability and SLE"
    ],
    "correct": 2,
    "explanation": "Probability and impact are used to describe risk. ALE is the annual loss expectancy, or how much risks will likely cost an organization per year, and SLE is the single loss expectancy, or how much a single risk will cost if it occurs. Acceptance is a risk-handling process, not a way of describing risks."
  },
  {
    "id": "SEC-D5-040",
    "domain": "5.0",
    "question": "Marco wants to conduct active reconnaissance of a target for a penetration test. Which of the following is an appropriate action based on this desire?",
    "answers": [
      "Looking up information in Shodan",
      "Conducting a nmap scan",
      "Querying local DNS for the organization",
      "Using public records to gather information"
    ],
    "correct": 1,
    "explanation": "The only active reconnaissance task listed here is the nmap scan. Looking up information in Shodan, querying local DNS, and using public records are all examples of passive information gathering that does not actively probe the organization."
  },
  {
    "id": "SEC-D5-041",
    "domain": "5.0",
    "question": "Beth is a data owner in her company. Which of the following is not a typical part of the role of data owner?",
    "answers": [
      "They categorize data.",
      "They are responsible for processing data.",
      "They are responsible for protecting data.",
      "They are responsible for data quality."
    ],
    "correct": 1,
    "explanation": "Data owners are responsible for categorizing, overseeing the usage of, and protecting data, but are typically not directly responsible for processing it."
  },
  {
    "id": "SEC-D5-042",
    "domain": "5.0",
    "question": "NIST SP 800-63B, Digital Identity Guidelines, provides advice on passwords and password standards. Why does the guide recommend that knowledge-based authentication like \"What was your mother's maiden name?\" not be used for processes like password reset and recovery?",
    "answers": [
      "Users may not remember the answer.",
      "Knowledge-based authentication information is often easily discovered through searches and social media.",
      "Knowledge-based authentication information is not a valid factor for MFA.",
      "Attackers can easily recover knowledge-based information from compromised authentication stores."
    ],
    "correct": 1,
    "explanation": "Knowledge-based authentication information is often easily available via social media or searches. Thus, using it as part of password recovery processes is problematic for organizations. Users will typically remember answers to knowledge-based authentication questions. While knowledge-based authentication isn't typically used for multifactor, something you know is a legitimate option, and knowledge-based authentication information could be recovered from compromised organizations, but this is not a common threat model."
  },
  {
    "id": "SEC-D5-043",
    "domain": "5.0",
    "question": "The company that Leon works for has experienced a significant malware infection and has segmented their network to prevent further spread. What risk mitigation strategy have they chosen?",
    "answers": [
      "Avoid",
      "Transfer",
      "Accept",
      "Mitigate"
    ],
    "correct": 3,
    "explanation": "Mitigation works to limit the impact of a risk, such as by taking action like segmenting the network to prevent further malware spread. Avoidance seeks to prevent the risk from occurring. Risk transfer options move the costs of risks to another organization such as through insurance. Acceptance involves management acknowledging that the risk and its impacts may occur, and that the organization will move forward despite that chance."
  },
  {
    "id": "SEC-D5-044",
    "domain": "5.0",
    "question": "Not using hints, preventing password expiration, storing passwords only in a hashed and salted form, and using minimum password length settings are all examples of what?",
    "answers": [
      "Password standards",
      "Multifactor authentication",
      "Establishing knowledge-based passwords",
      "Biometrics"
    ],
    "correct": 0,
    "explanation": "Password standards typically include elements like the NIST 800-63B recommendations, not using password hints, not expiring passwords, storing passwords in a secure way, and establishing a minimum password length of at least 8 characters for user-generated passwords."
  },
  {
    "id": "SEC-D5-045",
    "domain": "5.0",
    "question": "Anastasia works for a government entity that requires very strong risk controls and that has significant regulatory requirements it must meet. What risk appetite model should she expect her organization to adopt?",
    "answers": [
      "Expansionary",
      "Conservative",
      "Authoritarian",
      "Legislative"
    ],
    "correct": 1,
    "explanation": "Organizations that focus on reducing risk and that have significant compliance requirements are likely to adopt a conservative risk appetite. Expansionary risk appetite is rare when compliance and risk reduction are primary goals of the organization. Authoritarian and legislative are not typically used terms to describe risk appetite."
  },
  {
    "id": "SEC-D5-046",
    "domain": "5.0",
    "question": "Jack recently joined his organization's security team. A system was identified as likely being impacted by ransomware, and Jack was given a document that described the organization's ransomware handling practices. What common security document has he been given?",
    "answers": [
      "The IR policy",
      "A ransomware cookbook",
      "A ransomware playbook",
      "A disaster recovery handbook"
    ],
    "correct": 2,
    "explanation": "Detailed guides to organization practices for security events are called playbooks. In this case, Jack received the organization's ransomware playbook. A policy would include high-level statements of intent, cookbooks are not a typical term used for documents like these, and this situation involves ransomware, not a disaster recovery scenario."
  },
  {
    "id": "SEC-D5-047",
    "domain": "5.0",
    "question": "Connie wants to explain the consequences of noncompliance with data regulations to her organization's management. Which of the following is the most common statutory consequence of noncompliance with regulations?",
    "answers": [
      "Data breaches",
      "Reputational damage",
      "Contractual impacts",
      "Fines"
    ],
    "correct": 3,
    "explanation": "Regulations most commonly have fines and sanctions as their primary punishments levied against noncompliant organizations. Data breaches and reputational damage may occur, but are they are not enforced by regulation. Contractual impacts may occur, but again are not directly enforced by regulations."
  },
  {
    "id": "SEC-D5-048",
    "domain": "5.0",
    "question": "Hank wants to create a playbook for his incident response process. What will he create?",
    "answers": [
      "A detailed process for incident response",
      "A legal document describing incident response",
      "A high-level statement of purpose for incident response",
      "A document describing the general incident response (IR) process"
    ],
    "correct": 0,
    "explanation": "Playbooks are detailed documents describing how to respond to a type of incident or event. An example is the CISA's Cybersecurity Incident and Vulnerability Response playbook, which includes steps like identifying anomalous activity, identifying root cause, and analyzing for common adversary TTPs (www.cisa.gov/sites/default/files/publications/Federal_ Government_Cybersecurity_Incident_and_Vulnerability_ Response_Playbooks_508C.pdf). They are not legal documents, are detailed instead of high-level like a policy, and are more detailed than a general IR process document."
  },
  {
    "id": "SEC-D5-049",
    "domain": "5.0",
    "question": "What type of agreement is used by organizations that want to protect their proprietary data while working with third parties or individuals who will have access to the data?",
    "answers": [
      "SLAs",
      "NDAs",
      "MSAs",
      "BPAs"
    ],
    "correct": 1,
    "explanation": "Nondisclosure agreements (NDAs) are used to protect sensitive data. Service level agreements (SLAs) determine service levels and penalties if they are not met. Master service agreements (MSAs) are foundational documents determining how organizations will work together as a foundation for specific work covered in SOWs (statements of work). BPAs (business partners agreements) are used when two organizations want to do business as a partnership."
  },
  {
    "id": "SEC-D5-050",
    "domain": "5.0",
    "question": "Oliver has joined an organization and has completed employee orientation, has received his username and password, and has reviewed the new employee security training. What process has he participated in?",
    "answers": [
      "Identity proofing",
      "Mandatory access control",
      "Onboarding",
      "Biometric enrollment"
    ],
    "correct": 2,
    "explanation": "Onboarding processes commonly include things like new employee orientation, creation of user accounts and provisioning of rights for the employee's account, and ensuring the employee has completed security training. Identity proofing may be part of that process, but was not mentioned here. Mandatory access control is an access control model, and biometric enrollment involves capturing information about an individual's biometric markers or profile."
  },
  {
    "id": "SEC-D5-051",
    "domain": "5.0",
    "question": "What GDPR provision allows individuals to ask organization to delete their personal data?",
    "answers": [
      "The right to be forgotten",
      "The right to deletion",
      "The right to privacy",
      "The right to ownership"
    ],
    "correct": 0,
    "explanation": "The GDPR provides the right to be forgotten, which allows individuals to request that their data be deleted. The rights to deletion, privacy, and ownership were made up for this question."
  },
  {
    "id": "SEC-D5-052",
    "domain": "5.0",
    "question": "Damian has provided a comprehensive risk register to his management, including a risk of employees violating policy by taking pictures of sensitive information displayed on their screens using their cell phones. Damian's recommendation was to ban employees from carrying personal cell phones inside the office, but management has overruled that recommendation and will allow phones. What risk management strategy has his organization's leadership chosen?",
    "answers": [
      "Transfer",
      "Accept",
      "Avoid",
      "Mitigate"
    ],
    "correct": 1,
    "explanation": "Acceptance involves management acknowledging that the risk and its impacts may occur, and that the organization will move forward despite that chance. Risk transfer options move the costs of risks to another organization such as through insurance. Avoidance seeks to prevent the risk from occurring. Mitigation works to limit the impact of a risk, such as by taking action to prevent further malware spread."
  },
  {
    "id": "SEC-D5-053",
    "domain": "5.0",
    "question": "Which of the following is not a typical part of an offboarding process?",
    "answers": [
      "Returning company equipment",
      "Copying files to a USB drive for the departing employee",
      "Disabling or removing accounts",
      "Changing passwords on shared accounts"
    ],
    "correct": 1,
    "explanation": "Sending organizational data with a departing employee is not a common practice. In fact, organizations often ask employees to certify that they have returned all organizational devices and data. Returning company equipment, disabling the departing employee's accounts or removing them, and changing any passwords on shared accounts are all common offboarding practices."
  },
  {
    "id": "SEC-D5-054",
    "domain": "5.0",
    "question": "Daryl wants to ensure that his organization balances risks and its goals. What risk appetite model should he suggest the organization adopts?",
    "answers": [
      "Conservative",
      "Expansionary",
      "Reactionary",
      "Neutral"
    ],
    "correct": 3,
    "explanation": "Neutral risk appetites balance organizational goals against risk. Conservative risk appetites seek to reduce risks over addressing other goals, and expansionary risk appetites will accept risk to achieve goals. Reactionary is not a typical description of risk appetite."
  },
  {
    "id": "SEC-D5-055",
    "domain": "5.0",
    "question": "Charlene is preparing to conduct a penetration test and has been provided with access to all of her organization's information about the systems, services, and configurations involved. What type of penetration test is she conducting?",
    "answers": [
      "A partially known environment test",
      "An unknown environment test",
      "A known environment test",
      "A third-party test"
    ],
    "correct": 2,
    "explanation": "Known environment tests provide full information to testers, allowing them to use information about the environment without having to discover it. Partially known environment tests provide some, but not all information about the environment for testers. Unknown environment tests simulate what an attacker would encounter and do not provide information; instead, the testers have to discover it themselves. Third-party tests are conducted by external groups or individuals and may be known, unknown, or partial knowledge tests."
  },
  {
    "id": "SEC-D5-056",
    "domain": "5.0",
    "question": "The company that Omar works for wants to co-develop a mobile application with a third-party company. What type of agreement should they both sign as part of this?",
    "answers": [
      "An SLA",
      "An NDA",
      "An MSA",
      "A BPA"
    ],
    "correct": 3,
    "explanation": "BPAs, or business partners agreements, are used when two organizations want to do business as a partnership. SLAs, or service level agreements, determine service levels and penalties if they are not met. Nondisclosure agreements, or NDAs, are used to protect sensitive data. Master service agreements, or MSAs, are foundational documents determining how organizations will work together as a foundation for specific work covered in SOWs, or statements of work."
  },
  {
    "id": "SEC-D5-057",
    "domain": "5.0",
    "question": "Alex wants to hire a penetration tester who will simulate an attacker's potential attacks against his environment. What type of test best fits this model?",
    "answers": [
      "A partially known environment test",
      "An unknown environment test",
      "A known environment test",
      "A third-party test"
    ],
    "correct": 1,
    "explanation": "Unknown environment tests simulate what an attacker would encounter and do not provide information; instead, the testers have to discover it themselves. Known environment tests provide full information to testers, allowing them to use information about the environment without having to discover it. Partially known environment tests provide some, but not all information about the environment for testers. Third-party tests are conducted by external groups or individuals and may be known, unknown, or partial knowledge tests."
  },
  {
    "id": "SEC-D5-058",
    "domain": "5.0",
    "question": "What term describes the possibility of a risk occurring?",
    "answers": [
      "Impact",
      "Likelihood",
      "Potential",
      "Rate of occurrence"
    ],
    "correct": 1,
    "explanation": "Likelihood describes the possibility of a risk occurring. Impact describes what will happen if it does, potential is not a term used in this space, and rate of occurrence is how often a risk occurs on an annual basis."
  },
  {
    "id": "SEC-D5-059",
    "domain": "5.0",
    "question": "Killian's organization wants to perform a penetration test that will provide the maximum amount of information about his organization and that will optimize penetration testers' time. What type of test should he have conducted?",
    "answers": [
      "A partially known environment test",
      "An unknown environment test",
      "A known environment test",
      "A third-party test"
    ],
    "correct": 2,
    "explanation": "Known environment tests provide full information to testers, allowing them to use information about the environment without having to discover it. This means that the testing will be more efficient and will provide more information in most cases. Partially known environment tests provide some, but not all information about the environment for testers. Unknown environment tests simulate what an attacker would encounter and do not provide information; instead, the testers have to discover it themselves. Third-party tests are conducted by external groups or individuals and may be known, unknown, or partial knowledge tests."
  },
  {
    "id": "SEC-D5-060",
    "domain": "5.0",
    "question": "Justin's organization has recently undergone a third-party audit that determined that their data-handling processes don't comply with the GDPR. Changes to become compliant will take almost a year due to existing systems and software. What risk management strategy is Justin's organization choosing if they continue to operate knowing they are noncompliant?",
    "answers": [
      "Transfer",
      "Exception",
      "Avoidance",
      "Mitigate"
    ],
    "correct": 1,
    "explanation": "Risk exception recognizes risk areas where an organization may not be in compliance with policies or regulations, and may be acknowledged because they cannot be addressed in a timely manner or are required for the organization to conduct business. Risk transfer options move the costs of risks to another organization such as through insurance. Risk avoidance involves preventing the risk from occurring. Mitigation works to limit the impact of a risk, such as by taking action to prevent further malware spread."
  },
  {
    "id": "SEC-D5-061",
    "domain": "5.0",
    "question": "Risk assessments required for regulatory compliance are most frequently conducted in which of the following modes?",
    "answers": [
      "As ad hoc risk assessments",
      "As one-time risk assessments",
      "As recurring risk assessments",
      "As continuous risk assessments"
    ],
    "correct": 2,
    "explanation": "Regulatory compliance typically requires risk assessment on a regular basis, often once a year. Ad hoc, one-time, and continuous risk assessments are used for other purposes to serve the organization but are not as common for regulatory compliance."
  },
  {
    "id": "SEC-D5-062",
    "domain": "5.0",
    "question": "Jack's organization has engaged penetration testers for their annual penetration test. As part of the contract, the testers are provided with a list of target systems, operating systems, and software that they will be testing. What type of penetration test is Jack's organization conducting?",
    "answers": [
      "A partially known environment test",
      "An unknown environment test",
      "A known environment test",
      "A third-party test"
    ],
    "correct": 0,
    "explanation": "Partially known environment tests provide some, but not all information about the environment for testers. In this case, knowledge of the systems, IPs, and services is an example of partial knowledge. Known environment tests provide full information to testers, allowing them to use information about the environment without having to discover it. Unknown environment tests simulate what an attacker would encounter and do not provide information; instead, the testers have to discover it themselves. Third-party tests are conducted by external groups or individuals and may be known, unknown, or partial knowledge tests."
  },
  {
    "id": "SEC-D5-063",
    "domain": "5.0",
    "question": "The company that Jim works for is willing to accept significant risk in order to expand. How should Jim describe the organization's risk appetite?",
    "answers": [
      "Conservative",
      "Expansionary",
      "Limited",
      "Neutral"
    ],
    "correct": 1,
    "explanation": "An organization willing to accept significant risk has adopted an expansionary risk appetite. Neutral risk appetites balance risk and other factors, conservative appetites seek to limit risk rather than prioritize other goals or objectives, and limited is not a term used on the Security+ exam objectives in this area."
  },
  {
    "id": "SEC-D5-064",
    "domain": "5.0",
    "question": "As part of the early stages of a penetration test, Hui has researched her target organization's domain names and IP addresses, and has conducted a port scan. What type of activity is Hui engaging in?",
    "answers": [
      "Reconnaissance",
      "An unknown environment test",
      "A known environment test",
      "OSINT gathering"
    ],
    "correct": 0,
    "explanation": "Information gathering and scanning together are common elements of reconnaissance. Since this involves both scanning and OSINT gathering, this is reconnaissance instead of passive information gathering via OSINT. Known environment tests provide full information to testers, allowing them to use information about the environment without having to discover it. Unknown environment tests simulate what an attacker would encounter and do not provide information; instead, the testers have to discover it themselves."
  },
  {
    "id": "SEC-D5-065",
    "domain": "5.0",
    "question": "What role does a person who has exercised the GDPR's right to be forgotten hold?",
    "answers": [
      "Data subject",
      "Data controller",
      "Data processor",
      "Data owner"
    ],
    "correct": 0,
    "explanation": "Individuals who use the GDPR's right to be forgotten are data subjects, a person who can be identified by their personally identifiable information. Data controllers determine how data will be used, and processors do the actual data processing. Data owners are responsible for protection, usage, and quality of datasets."
  },
  {
    "id": "SEC-D5-066",
    "domain": "5.0",
    "question": "How is exposure factor (EF) expressed for risk calculations?",
    "answers": [
      "As a calculation of the ALE multiplied by the ARO",
      "As the likelihood of loss",
      "As a potential percentage of loss",
      "As a calculation of the SLE multiplied by the ARO"
    ],
    "correct": 2,
    "explanation": "Exposure factors are the percentage of value of an asset that would be lost due to an incident. ALE is the annual loss expectancy, and the ARO is the annual rate of occurrence. SLE is the single loss expectancy. Calculating these gives the cost of an incident, but EF is the impact of the risk and is not calculated using these, nor does it involve the likelihood of the risk."
  },
  {
    "id": "SEC-D5-067",
    "domain": "5.0",
    "question": "As part of his penetration testing process Nick intends to follow an employee of his target company into a secured area. What type of penetration testing is Nick engaged in?",
    "answers": [
      "Defensive",
      "Offensive",
      "Physical",
      "Integrated"
    ],
    "correct": 2,
    "explanation": "Physical security testing involves testing an organization's physical security defenses and practices, including guards, locks and doors, and other physical security components. Offensive penetration testing involves acting like attackers, while defensive penetration testing seeks to learn as defenders. Integrated penetration testing combines both."
  },
  {
    "id": "SEC-D5-068",
    "domain": "5.0",
    "question": "Valerie's organization wants to ensure that their access control vestibule, ID card system, and guards are effective in stopping unwanted entrance. What type of penetration test should she use to validate this?",
    "answers": [
      "Physical",
      "Offensive",
      "Defensive",
      "Integrated"
    ],
    "correct": 3,
    "explanation": "Integrated penetration testing combines both offensive and defensive penetration testing, and testing guards as well as attempting to make it through access controls is an example of an integrated test. Physical security testing involves testing an organization's physical security defenses and practices, including guards, locks and doors, and other physical security components like access control vestibules. Offensive penetration testing involves acting like attackers, while defensive penetration testing seeks to learn as defenders."
  },
  {
    "id": "SEC-D5-069",
    "domain": "5.0",
    "question": "Jason's organization has engaged a penetration testing firm that specializes in using techniques commonly employed by nation-state actors, including using social engineering techniques, advanced tools, and methods that will provide significant footholds within his infrastructure. What type of penetration test best describes this?",
    "answers": [
      "Physical",
      "Offensive",
      "Defensive",
      "Integrated"
    ],
    "correct": 1,
    "explanation": "Offensive penetration testing involves acting like attackers, including nation-state actors with advanced capabilities like those described in this question. Physical security testing involves testing an organization's physical security defenses and practices, including guards, locks and doors, and other physical security components like access control vestibules. Defensive penetration testing seeks to learn as defenders. Integrated penetration testing combines both."
  },
  {
    "id": "SEC-D5-070",
    "domain": "5.0",
    "question": "Joshua's organization is required to comply with the EU's GDPR. As part of their annual assessments, they conduct a GDPR compliance review and receive a report from their auditors. What type of assessment is this?",
    "answers": [
      "A penetration test",
      "A regulatory assessment",
      "An internal audit",
      "An attestation-based assessment"
    ],
    "correct": 1,
    "explanation": "The GDPR is a regulation, making this a regulatory assessment or audit. There is no penetration testing mentioned, the auditors are not described as internal or external, and no attestation is mentioned."
  },
  {
    "id": "SEC-D5-071",
    "domain": "5.0",
    "question": "Alexandria wants to mitigate the risk of ransomware during its initial infection stages. Which of the following strategies should she employ?",
    "answers": [
      "Deploy an EDR tool.",
      "Purchase cybersecurity insurance.",
      "Use secure, ransomware-resistant backups.",
      "Continue to operate as usual."
    ],
    "correct": 0,
    "explanation": "Secure, ransomware resistant backups can mitigate the impact of ransomware but cannot stop it from impacting systems like an endpoint detection and response (EDR) tool can. Since Alexandria's focus is on immediate mitigation, her best answer is EDR. Cybersecurity insurance is a means of transferring risk, and simply operating as usual is an acceptance strategy."
  },
  {
    "id": "SEC-D5-072",
    "domain": "5.0",
    "question": "Shane's organization has determined that they can accept up to $10,000,000 a year in risk-related loss in support of their strategic plans. What term best describes this?",
    "answers": [
      "Risk acceptance",
      "Risk appetite",
      "Ad hoc risk",
      "A conservative risk tolerance"
    ],
    "correct": 1,
    "explanation": "Shane's organization has determined their risk appetite. They are willing to accept some risk, but may also choose to mitigate, transfer, or otherwise deal with their risk to match their appetite. Ad hoc describes risk assessment, not risk appetite or thresholds, and there is no way to determine if this is a conservative, neutral, or expansionary risk appetite."
  },
  {
    "id": "SEC-D5-073",
    "domain": "5.0",
    "question": "Eric manages his organization's internal security team and wants to leverage a penetration test as part of his team's testing that allows them to respond to simulated attacks. What type of model best describes this?",
    "answers": [
      "Physical",
      "Offensive",
      "Defensive",
      "Integrated"
    ],
    "correct": 2,
    "explanation": "Defensive penetration testing seeks to allow the organization to learn as defenders. Offensive penetration testing involves acting like attackers, including nation-state actors with advanced capabilities like those described in this question. Physical security testing involves testing an organization's physical security defenses and practices, including guards, locks and doors, and other physical security components like access control vestibules. Integrated penetration testing combines both."
  },
  {
    "id": "SEC-D5-074",
    "domain": "5.0",
    "question": "Henry's organization leverages penetration testing as part of its ongoing security practices, using attacker techniques as well as blue teaming to improve security constantly. What type of penetration testing methodology is Henry's organization using?",
    "answers": [
      "Physical",
      "Offensive",
      "Defensive",
      "Integrated"
    ],
    "correct": 3,
    "explanation": "Integrated penetration testing combines both offensive and defensive techniques and is often woven into an organization's practices on an ongoing basis. Offensive penetration testing involves acting like attackers, including nation-state actors with advanced capabilities like those described in this question. Defensive penetration testing seeks to allow the organization to learn as defenders. Physical security testing involves testing an organization's physical security defenses and practices, including guards, locks and doors, and other physical security components like access control vestibules."
  },
  {
    "id": "SEC-D5-075",
    "domain": "5.0",
    "question": "Jackie is an auditor and has completed an SOC 2, Type 2 audit. Her firm then provides a statement about the organization's audit results and posture. What is this process known as?",
    "answers": [
      "Penetration testing",
      "Audit sign-off",
      "Regulatory defense",
      "Attestation"
    ],
    "correct": 3,
    "explanation": "Auditors provide a statement about an organization's posture as part of an attestation process. This provides assurance that the auditors have reviewed the organization's practices and have found them suitable or that deficiencies have been identified. Penetration testing is the process of testing the security of an organization and is not an audit. Audit sign-off occurs when management signs an audit to acknowledge their awareness of its results. Regulatory defense was made up for this question."
  },
  {
    "id": "SEC-D5-076",
    "domain": "5.0",
    "question": "Joe is an auditor who is on the staff of an organization that employs him to audit their own practices. What type of audit does Joe perform?",
    "answers": [
      "Internal",
      "Regulatory",
      "External",
      "Compliance"
    ],
    "correct": 0,
    "explanation": "Without more information about the specific audits that Joe conducts, all we know is that he is an internal auditor. As an employee of the company that he is working for, he is considered an internal auditor. External audits are conducted by third parties. Regulatory audits assess compliance with laws, whereas compliance audits may look at laws or other compliance targets."
  },
  {
    "id": "SEC-D5-077",
    "domain": "5.0",
    "question": "Irene's organization needs to follow PCI DSS standards. If she engages a third party to assess this, what type of audit is she having performed?",
    "answers": [
      "An internal regulatory audit",
      "An external regulatory audit",
      "An internal compliance audit",
      "An external compliance audit"
    ],
    "correct": 3,
    "explanation": "The Payment Card Industry Data Security Standard (PCI DSS) is an industry standard, not a law, so this is a compliance audit, not a regulatory audit. Third-party auditors make it an external rather than an internal audit."
  },
  {
    "id": "SEC-D5-078",
    "domain": "5.0",
    "question": "Anton's organization processes credit cards but is a small organization. As part of their annual requirements related to PCI DSS, Anton fills out a form about their PCI DSS compliance and submits it to their acquiring bank. What type of assessment has his organization conducted?",
    "answers": [
      "An internal regulatory audit",
      "A self-assessment",
      "An independent, third-party audit",
      "An external compliance audit"
    ],
    "correct": 1,
    "explanation": "Filling out forms attesting to your own organization's compliance status is an example of a self-assessment. This is not an audit activity, PCI DSS is not a regulation, and no third parties were involved to make it external or independent and third party."
  },
  {
    "id": "SEC-D5-079",
    "domain": "5.0",
    "question": "What organization typically includes an audit committee for a company?",
    "answers": [
      "The security office",
      "The shareholders",
      "The board of directors",
      "The third-party assessors"
    ],
    "correct": 2,
    "explanation": "Audit committees are typically part of the organization's board of directors, and they oversee financial reporting-related activities. Audit committees are required for US-traded companies that are listed on stock exchanges. Shareholders, third-party assessors, and the security office are not typical places to find an audit committee."
  },
  {
    "id": "SEC-D5-080",
    "domain": "5.0",
    "question": "What type of risk assessment process is most commonly associated with a CI/CD pipeline model?",
    "answers": [
      "Ad hoc risk assessments",
      "One-time risk assessments",
      "Third-party risk assessments",
      "Continuous risk assessments"
    ],
    "correct": 3,
    "explanation": "Continuous integration/continuous delivery (CI/CD) pipelines deploy software on an ongoing basis, making them a good fit for continuous risk assessment techniques. Ad hoc, one-time, and third-party assessments are not suited to the ongoing, rapid assessment pace needed for a CI/CD model."
  },
  {
    "id": "SEC-D5-081",
    "domain": "5.0",
    "question": "Cristobal wants to ensure that a vendor his company is considering hiring has conducted an SOC 2, Type 2 audit that is reliable and that will reveal any critical issues. What should he ensure was done?",
    "answers": [
      "An internal audit with attestation by the CEO",
      "An independent, third-party audit",
      "A self-assessment",
      "A third-party penetration test with attestation"
    ],
    "correct": 1,
    "explanation": "External audits like a SOC 2, Type 2 audit should be conducted by an independent third party to be considered valid. An internal audit, no matter who signs off on it, is not used for this purpose, nor are self-assessments. Penetration tests do not generate an SOC 2 audit report."
  },
  {
    "id": "SEC-D5-082",
    "domain": "5.0",
    "question": "Kim's organization has assessed the risk of floods that may impact their datacenter and has determined that the likely rate of occurrence and its cost if it does occur are not acceptable. Given this, the organization has opted to move their datacenter in the next year. What has occurred?",
    "answers": [
      "The risk dropped below their risk threshold.",
      "The risk assessment failed.",
      "A control failure occurred.",
      "The risk passed their risk threshold."
    ],
    "correct": 3,
    "explanation": "An organization's risk threshold is the level where they will switch from accepting a risk to seeking to handle the risk. In this case, the risk has surpassed the organization's risk threshold, resulting in a plan to avoid the risk. The risk did not drop below the threshold, the risk assessment was successful in helping the organization identify a concern, and no controls failed."
  },
  {
    "id": "SEC-D5-083",
    "domain": "5.0",
    "question": "Vanessa's organization is a US-based health-care organization that is required to be compliant with HIPAA. What type of external assessment should they conduct?",
    "answers": [
      "Regulatory",
      "Offensive",
      "Known environment",
      "Physical"
    ],
    "correct": 0,
    "explanation": "The Health Insurance Portability and Accountability Act (HIPAA) is a regulation, and organizations that must comply with laws need to conduct regulatory assessments. Offensive testing is a penetration testing model that mirrors actual attackers. Known environment testing leverages full knowledge of an organization as part of a penetration test. Physical testing validates physical security controls."
  },
  {
    "id": "SEC-D5-084",
    "domain": "5.0",
    "question": "Jaime wants to establish her organization's change management policy. What should the policy include?",
    "answers": [
      "High-level descriptions of how the organization will review, approve, and implement proposed changes",
      "A detailed process for review and approval of changes",
      "Descriptions of how a change request should be created, formatted, reviewed, and approved",
      "An outline of the regulatory requirements for changes"
    ],
    "correct": 0,
    "explanation": "Policies are high-level descriptions of an organization's intent and understanding of their topic. Procedures will have descriptions of how a change is made in detailed form, while standards will describe how changes are created, made, and approved. Regulatory requirements are most likely to be part of standards or procedures."
  },
  {
    "id": "SEC-D5-085",
    "domain": "5.0",
    "question": "Marek's organization has a system that needs to receive a deviation from a defined security process. What best practice should he follow to ensure that this is done correctly?",
    "answers": [
      "He should conduct a risk assessment and document the results.",
      "He should remove the system from the network segment to protect it.",
      "He should ensure the deviation is approved through change management processes.",
      "All of the above."
    ],
    "correct": 2,
    "explanation": "Marek should follow his organization's change management process to document the change required and to ensure that it is regularly reviewed. This may not require a risk assessment since it may be a simple requirement or may have already been assessed. The type of security variance needed is not described, so it is not clear if removing the system from the network is necessary."
  },
  {
    "id": "SEC-D5-086",
    "domain": "5.0",
    "question": "What is the key difference between a business continuity plan and a business continuity policy?",
    "answers": [
      "The plan describes how an organization will respond, whereas the policy outlines the high-level intent of the organization's business continuity efforts.",
      "The plan includes detailed steps for each part of the response, including how to restore systems and investigate issues, whereas the policy outlines the high-level intent of the organization's business continuity efforts.",
      "The plan describes the high-level intent of the organization's business continuity efforts, whereas the incident response policy describes how the organization will respond.",
      "They are the same; the terms are interchangeable."
    ],
    "correct": 0,
    "explanation": "Business continuity plans address how the organization will respond, including referencing runbooks that may detail how to handle restoration or other efforts on a step-by-step basis, but doesn't itself include that level of detail. Business continuity policies describe the organization's intent at a high level and are likely to reference the business continuity plan. They are not the same, as the policy is a higher-level document than the plan is."
  },
  {
    "id": "SEC-D5-087",
    "domain": "5.0",
    "question": "Christina has prepared a document that includes high-level statements about how her organization will handle major incidents and what its overall stance on incidents is. What has she created?",
    "answers": [
      "An incident response process",
      "A runbook",
      "An incident response policy",
      "An incident response standard"
    ],
    "correct": 2,
    "explanation": "Policies are distinct from procedures and standards because they include high-level statements of intent rather than specific practices. Procedures document the practices an organization will use, whereas standards set expectations or specific configurations or details about how something is done or set up."
  },
  {
    "id": "SEC-D5-088",
    "domain": "5.0",
    "question": "Terry wants to have all of his account data removed from organizations he has interacted with. What GDPR right can he leverage if he is an EU citizen?",
    "answers": [
      "Data stewardship",
      "Personal data ownership",
      "The right to be forgotten",
      "His HIPAA rights"
    ],
    "correct": 2,
    "explanation": "The EU's GDPR provides the right to be forgotten, which allows Terry to request that organizations remove all of his data from their systems. HIPAA is a US regulation; data stewardship is an organizational role, not a right; and personal data ownership is not a right."
  },
  {
    "id": "SEC-D5-089",
    "domain": "5.0",
    "question": "Probability and impact are used to rate what key security item?",
    "answers": [
      "Cost",
      "Risk",
      "Vulnerability",
      "Audit findings"
    ],
    "correct": 1,
    "explanation": "Risk exposure is calculated by multiplying probability and impact. Cost is measured in currency, time, or other cost metrics; vulnerability is often measured using CVSS scores; and audit findings may have criticality ratings."
  },
  {
    "id": "SEC-D5-090",
    "domain": "5.0",
    "question": "Gary wants to determine the probability of a risk occurring. What should he base his assessment on if he is performing a qualitative risk assessment?",
    "answers": [
      "A calculated rate of occurrence using industry statistical data",
      "A rating from an experienced team of staff",
      "The number of times it has happened to their competitors in a year",
      "Actuarial tables provided by his insurance broker"
    ],
    "correct": 1,
    "explanation": "Qualitative risk assessment relies on expertise and staff members who have relevant knowledge to provide a rating based on their experience, skills, and knowledge. A common rating for probability in a qualitative risk assessment might be low, medium, or high, rather than a 0-100 rating based on statistics or large datasets."
  },
  {
    "id": "SEC-D5-091",
    "domain": "5.0",
    "question": "Which of the following is not a common element for a penetration test's rules of engagement?",
    "answers": [
      "Handling of sensitive and pentest-related data",
      "A list of passwords",
      "A list of in-scope IPs or domains",
      "A list of emergency contacts"
    ],
    "correct": 1,
    "explanation": "Rules of engagement determine how a penetration tester will conduct an engagement. Passwords may be part of the information provided before the test for a full knowledge or partial knowledge test but are not part of the rules of engagement."
  },
  {
    "id": "SEC-D5-092",
    "domain": "5.0",
    "question": "Maeve is preparing to sign a penetration testing contract with a third-party security service provider. The security service provider provides a questionnaire that asks the scope of systems that can and cannot be tested, the schedule and times that penetration testing can and cannot occur, and what to do if a preexisting compromise is discovered. What document is the third-party service provider assembling?",
    "answers": [
      "A right-to-audit clause",
      "A service-level agreement",
      "A memorandum of understanding",
      "Rules of engagement"
    ],
    "correct": 3,
    "explanation": "Rules of engagement are created for penetration testing efforts that include a wide variety of information, including scope, schedules, what to do if a preexisting compromise is discovered, requirements for how to handle third-party-hosted tools and environments, how sensitive data and data related to the penetration test will be handled, and who to contact in emergencies. A right-to-audit clause is included in contracts, allowing audits to occur as part of the contract. SLAs are used to set service levels and penalties if they are not met, and MOUs document organizations' interest and willingness to work together."
  },
  {
    "id": "SEC-D5-093",
    "domain": "5.0",
    "question": "Alaina wants to describe the level of impact and probability where her organization will either accept or attempt to mitigate or otherwise handle a risk at. What term describes this?",
    "answers": [
      "Risk threshold",
      "Ad hoc risk level",
      "Third-party risk level",
      "Risk appetite"
    ],
    "correct": 0,
    "explanation": "An organization's risk threshold is the level where they will switch from accepting a risk to seeking to handle the risk. Their risk appetite is the amount of risk an organization is willing to accept to achieve its goals. Ad hoc risk level and third-party risk level were made up for this question."
  },
  {
    "id": "SEC-D5-094",
    "domain": "5.0",
    "question": "Alaina has been asked to create an AUP for her organization. Which of the following should she include?",
    "answers": [
      "An access and usage policy that lists times and roles allowed to access specific resources",
      "A document that describes how the organization intends to approach change and related functions",
      "An antivirus (AV) update policy that describes when and how AV updates are deployed",
      "A description of acceptable use by organizational users"
    ],
    "correct": 3,
    "explanation": "AUPs, or acceptable use policies, describe how organizational resources, systems, and services can and should be used."
  },
  {
    "id": "SEC-D5-095",
    "domain": "5.0",
    "question": "Kyle's organization is a very well-known, multinational organization. A recent data breach has exposed data for millions of customers, including all of their account information. As part of the breach, Kyle's company was discovered to have not followed common security practices, and in fact was operating in intentionally careless ways. Which of the following consequences should he highlight as most critical to the organization's ongoing operations when he considers their customer base?",
    "answers": [
      "Fines",
      "Due diligence",
      "Reputational damage",
      "Contractual impacts"
    ],
    "correct": 2,
    "explanation": "Large breaches, particularly when the organization has been negligent, can have large impacts on the organization's reputation, resulting in long-term damage. Fines and contractual impacts may be impactful but are often resolved relatively quickly. Due diligence was not shown but is not an impact--rather, it is part of an organization's responsibilities."
  },
  {
    "id": "SEC-D5-096",
    "domain": "5.0",
    "question": "What type of agreement do organizations create after signing an MSA that describes the specific tasks or deliverables that will be created or performed?",
    "answers": [
      "A MOU",
      "A SOW",
      "A punch list",
      "A BPA"
    ],
    "correct": 1,
    "explanation": "A statement of work (SOW) or work order (WO) is created to list the tasks and deliverables that will be performed under the blanket master services agreement (MSA). An MOU, or memorandum of understanding, declares how two organizations want to work together; a business partners agreement (BPA) establishes a partnership between two organizations; and punch lists are not covered under the Security+ exam outline but are a list of tasks that must be accomplished for a contractor to be paid."
  },
  {
    "id": "SEC-D5-097",
    "domain": "5.0",
    "question": "Jack's organization recently received a shipment of SSDs and has begun to deploy them. What information would best help Jack assess the useful life of the devices?",
    "answers": [
      "An RTO",
      "An MTTR",
      "An RPO",
      "An MTBF"
    ],
    "correct": 3,
    "explanation": "Jack should use the manufacturer's published mean time between failures (MTBF), which is a measure of the reliability of a system. It is the expected amount of time that will elapse between system failures. While organizations typically replace devices well before their MTBF ratings, knowing how long the devices should last on average can be useful in long-lived applications and for budgetary planning. A recovery time objective, or RTO, is set by organizations to describe how long restoring systems or services to normal function after a disruption can take. Mean time to repair, or MTTR, is the average time it takes to repair a system or device. A recovery point objective, or RPO, describes how much data can be lost in the event of an outage or issue."
  },
  {
    "id": "SEC-D5-098",
    "domain": "5.0",
    "question": "The hard drives that Jason's organization recently purchased have an MTBF of 300,000 hours. When can Jason expect the first drive to fail?",
    "answers": [
      "At 150,000 hours",
      "At 300,000 hours",
      "At 450,000 hours",
      "None of the above"
    ],
    "correct": 3,
    "explanation": "Mean time between failures (MTBF) is a measure of the reliability of a system. It is the expected amount of time that will elapse between system failures, but it is merely an average. Jason should expect that drives will fail, and that their average service life will be 300,000 hours. That means that half of the drives are likely to fail before 300,000 hours, and half will fail after that number."
  },
  {
    "id": "SEC-D5-099",
    "domain": "5.0",
    "question": "Melissa's organization wants to establish a metric that defines how much data could be lost if an issue occurs. What should they set?",
    "answers": [
      "An RTO",
      "An MTTR",
      "An RPO",
      "An MTBF"
    ],
    "correct": 2,
    "explanation": "A recovery point objective, or RPO, describes how much data can be lost in the event of an outage or issue. A recovery time objective, or RTO, is set by organizations to describe how long restoring systems or services to normal function after a disruption can take. Mean time to repair, or MTTR, is the average time it takes to repair a system or device. The mean time between failures (MTBF) is a measure of the reliability of a system. It is the expected amount of time that will elapse between system failures."
  },
  {
    "id": "SEC-D5-100",
    "domain": "5.0",
    "question": "What common terms are used to categorize anomalous behavior?",
    "answers": [
      "Risky, unexpected, and unintentional",
      "Recurring, occasional, and unique",
      "Unintentional, insider, and accidental",
      "Active, passive, and integrated"
    ],
    "correct": 0,
    "explanation": "The Security+ exam objectives list three categorizations you need to be familiar with for anomalous behavior: risky, unexpected, and unintentional. The other terms listed are not ways that the exam categorizes anomalous behavior."
  },
  {
    "id": "SEC-D5-101",
    "domain": "5.0",
    "question": "Greg is reviewing a server and notices that it is both running outdated software and that the organization heavily relies on the services that it provides. He pulls together a team to determine what the risk of operating the server is and what issues would occur if it were removed from service that day. What type of assessment has he conducted?",
    "answers": [
      "An ad hoc risk assessment",
      "A one-time risk assessment",
      "A third-party risk assessment",
      "A continuous risk assessment"
    ],
    "correct": 0,
    "explanation": "Greg has conducted an ad hoc assessment by quickly pulling together a team without a formal process or procedure. Instead, he is seeking to quickly assess risk and take action. A one-time assessment typically follows an established methodology but is only conducted once. Third-party risk assessment uses external teams or staff, and continuous risk assessment is done on an ongoing basis."
  },
  {
    "id": "SEC-D5-102",
    "domain": "5.0",
    "question": "Olivia's organization operates servers in a datacenter that support customers across the country. As Olivia is determining her service level agreements, what information is most important in determining how quickly a server can be restored to operation if its motherboard fails?",
    "answers": [
      "An RTO",
      "An MTTR",
      "An RPO",
      "An MTBF"
    ],
    "correct": 1,
    "explanation": "Mean time to repair, or MTTR, is the average time it takes to repair a system or device, and Olivia needs to know that to determine what she can promise in her service level agreements that rely on server repair timelines. A recovery time objective, or RTO, is set by organizations to describe how long restoring systems or services to normal function after a disruption can take; it doesn't determine how fast the server can be fixed but sets a goal that needs to take things like repair and recovery time into account as it is determined. A recovery point objective, or RPO, describes how much data can be lost in the event of an outage or issue, and the mean time between failures (MTBF) is a measure of the reliability of a system. It is the expected amount of time that will elapse between system failures."
  },
  {
    "id": "SEC-D5-103",
    "domain": "5.0",
    "question": "Irina's organization wants to work with one of their vendors and wishes to establish an ongoing relationship with them. What type of agreement should they create between the organizations so that they can create SOWs as they determine what services they need from their service provider's organization?",
    "answers": [
      "An MOU",
      "An SLA",
      "An MSA",
      "A BPA"
    ],
    "correct": 2,
    "explanation": "The underlying agreement between two organizations that determines how the organizations will work together is a master services agreement (MSA). A MOU, or memorandum of understanding, declares how two organizations want to work together; a business partners agreement (BPA) establishes a partnership between two organizations; SLAs (service level agreements) set service level expectations and penalties if they are not met; and a business partners agreement (BPA) establishes two organizations as partners rather than establishing a working relationship for services as set forth in SOWs."
  },
  {
    "id": "SEC-D5-104",
    "domain": "5.0",
    "question": "Dani's organization relies on journaling to help protect transactions that occur through its database. Which of the following does journaling impact the most?",
    "answers": [
      "An RTO",
      "An MTTR",
      "An RPO",
      "An MTBF"
    ],
    "correct": 2,
    "explanation": "A recovery point objective, or RPO, describes how much data can be lost in the event of an outage or issue, and journaling allows recovery of database transactions by replaying them against the database once it is restored. Journaling may slow down recovery time objectives as the actions are replayed. A recovery time objective, or RTO, is set by organizations to describe how long restoring systems or services to normal function after a disruption can take. Mean time to repair, or MTTR, is the average time it takes to repair a system or device. The mean time between failures (MTBF) is a measure of the reliability of a system. It is the expected amount of time that will elapse between system failures."
  },
  {
    "id": "SEC-D5-105",
    "domain": "5.0",
    "question": "Henry's organization has set their RTO to 12 hours. What does this mean?",
    "answers": [
      "Outages must be less than 6 hours long.",
      "Recovery from outages should take less than 12 hours.",
      "Outages longer than 12 hours will require fail over to a warm site.",
      "SLAs for third-party services should specify a 12 hour MTBF."
    ],
    "correct": 1,
    "explanation": "A recovery time objective, or RTO, is set by organizations to describe how long restoring systems or services to normal function after a disruption can take. A 12-hour RTO means that recovery from outages should take less than 12 hours. Failing over to a warm site will typically take a while, meaning that starting to fail over after 12 hours will miss the RTO, and MTBF is the mean time between failures, not a recovery timeframe. Failing every 12 hours on average would be unacceptable for almost any technical service or system!"
  },
  {
    "id": "SEC-D5-106",
    "domain": "5.0",
    "question": "Valerie knows that her organization's datacenter power infrastructure has an MTTR of 24 hours. What should she do if there is a critical component failure in her power infrastructure, and the organization has a warm site with an activation of 12 hours and needs to be back online as soon as possible?",
    "answers": [
      "Wait to see if the recovery can be done in less than 24 hours.",
      "Immediately begin a move to the warm site.",
      "Wait to see if the recovery can be done in less than12 hours.",
      "Wait for 12 hours, then begin the move to the warm site."
    ],
    "correct": 1,
    "explanation": "Valerie should immediately begin a move to the warm site. She knows that moving to her warm site takes half the average time to repair for her datacenter's power infrastructure. That means that in most cases, moving will result in at least a 12-hour shorter outage. If the time to repair proves to be shorter than 12 hours, she can simply stop the move. Waiting does not restore her to operation sooner than 24 hours in the average case, and waiting to make the decision reduces the amount of advantage she gets from moving to the warm site."
  },
  {
    "id": "SEC-D5-107",
    "domain": "5.0",
    "question": "Peter's risk assessment process includes calculations of single loss expectancy, the annualized rate of occurrence of risks, and the annualized loss expectancy. What type of risk assessment is Peter conducting?",
    "answers": [
      "Quantitative",
      "Calculated",
      "Qualitative",
      "Registered"
    ],
    "correct": 0,
    "explanation": "Quantitative risk assessments assign numeric values and calculations to determine relative risk. Qualitative risk assessment uses knowledge and expertise to assess risk. Calculated risk is not a term that is commonly used to describe assessment processes like these, and risk registers list risks that an organization has identified but that don't necessarily involve calculations."
  },
  {
    "id": "SEC-D5-108",
    "domain": "5.0",
    "question": "What organizational document is used to enumerate and rate an organization's risks?",
    "answers": [
      "A risk appetite plan",
      "A risk register",
      "A quantitative register",
      "A qualitative assessment report"
    ],
    "correct": 1,
    "explanation": "Risk registers list organizations risks and their ratings, along with additional information that the organization uses to track or describe risks. Risk appetite plans, quantitative registers, and qualitative assessment reports were made up for this question."
  },
  {
    "id": "SEC-D5-109",
    "domain": "5.0",
    "question": "Amanda's organization wants to conduct a risk assessment and needs to prioritize a timely completion of the process over rigorous detail. What type of assessment should she advise her organization to select?",
    "answers": [
      "Internal",
      "External",
      "Qualitative",
      "Quantitative"
    ],
    "correct": 2,
    "explanation": "Qualitative risk assessment uses knowledge and expertise to assess risk and are thus typically faster and more likely to be completed than a quantitative risk assessment. Quantitative risk assessments assign numeric values and calculations to determine relative risk. Choosing internal or external risk assessments is not a primary driver of speed compared to choosing quantitative over qualitative risk assessments."
  },
  {
    "id": "SEC-D5-110",
    "domain": "5.0",
    "question": "Chuck wants to conduct a quantitative risk assessment. Which of the following will he need to be able to determine the single loss expectancy for a server?",
    "answers": [
      "Its purchase date",
      "Which department manages the server",
      "The operating system the server uses",
      "The cost of the server"
    ],
    "correct": 3,
    "explanation": "SLE, or single loss expectancy, uses the asset value (AV) and exposure factor (EF) to determine the SLE. Purchase date, which department manages the server, and its operating system are not part of the calculation."
  },
  {
    "id": "SEC-D5-111",
    "domain": "5.0",
    "question": "Shawna's organization has undertaken reasonable steps to meet their compliance requirements for data handling. What is this process or effort called?",
    "answers": [
      "Data stewardship",
      "Due diligence",
      "Attestation",
      "Data sanctioning"
    ],
    "correct": 1,
    "explanation": "Undertaking reasonable steps to meet legal requirements like compliance with regulations is known as due diligence. Data stewardship may be part of those actions, but it focuses on oversight of data and data governance and may not be specifically regulatory focused."
  },
  {
    "id": "SEC-D5-112",
    "domain": "5.0",
    "question": "Jeremy knows that his customer data is worth $500,000, and that the value of the data would be reduced by 25 percent if it was exposed. What is the SLE for this data?",
    "answers": [
      "$25,000",
      "$125,000",
      "$250,000",
      "$375,000"
    ],
    "correct": 1,
    "explanation": "Single loss expectancy, or SLE, is calculated by multiplying the asset value (AV) by the exposure factor (EF). In this case, that means that the potential loss during a loss event would be $125,000."
  },
  {
    "id": "SEC-D5-113",
    "domain": "5.0",
    "question": "Ian wants to calculate the annualized loss expectancy for an asset. What two values does he need to know?",
    "answers": [
      "SLE and ARO",
      "ARO and MTBF",
      "SLE and RPO",
      "MTBF and RTO"
    ],
    "correct": 0,
    "explanation": "Annualized loss expectancy (ALE) is calculated by multiplying the annual rate of occurrence (ARO) by the single loss expectancy (SLE). If a single loss expectancy for a $1,000,000 asset is $100,000 and the annual rate of occurrence is .5--in other words, it happens every two years on average--then the ALE is $50,000."
  },
  {
    "id": "SEC-D5-114",
    "domain": "5.0",
    "question": "Waylon is charged with ensuring that risks related to customer data used as part of his organization's primary application are managed appropriately. What is his role?",
    "answers": [
      "Board member",
      "Data processor",
      "Auditor",
      "Risk owner"
    ],
    "correct": 3,
    "explanation": "Waylon is a risk owner. He is responsible for ensuring that the risks related to data and the application are managed appropriately. Board members have overall responsibility for an organization. Data processors have a data role, not a risk ownership role, and auditors assess organizations against standards and practices rather than owning risk."
  },
  {
    "id": "SEC-D5-115",
    "domain": "5.0",
    "question": "Nathaniel's organization is reviewing potential issues that may result from noncompliance with regulations that apply to his company. Which of the following would create the most significant operational harm?",
    "answers": [
      "Reputational damage",
      "Loss of license",
      "Fines",
      "Contractual impacts"
    ],
    "correct": 1,
    "explanation": "Without a license to operate, Nathaniel's organization will be unable to conduct business. Reputational damage, fines, and contractual impacts can all be navigated if the organization can continue to do business."
  },
  {
    "id": "SEC-D5-116",
    "domain": "5.0",
    "question": "Susan wants to calculate the annualized loss expectancy for an asset that has a value of $50,000, an exposure factor of 50 percent, and an annual rate of occurrence of 2. What is the annualized loss expectancy for the asset?",
    "answers": [
      "$5,000",
      "$25,000",
      "$50,000",
      "$100,000"
    ],
    "correct": 2,
    "explanation": "Susan can calculate the single loss expectancy (SLE) by multiplying the asset value (AV) by the exposure factor (EF), resulting in $25,000. If this loss occurs twice a year, then the annualized loss expectancy (ALE) is $50,000."
  },
  {
    "id": "SEC-D5-117",
    "domain": "5.0",
    "question": "Tim's organization knows that a major breach occurs once every four years, resulting in a loss of $250,000 for his organization. What is the annual rate of occurrence that Tim should use in his risk calculations?",
    "answers": [
      ".25",
      "$75,000",
      ".75",
      "$50,000"
    ],
    "correct": 0,
    "explanation": "Annual rate of occurrence is calculated by determining how many times in a year the event happens, on average. If it happens less than once a year, the rate is a fraction based on that rate. Here the event happens once every four years, or .25 of the time during a given year."
  },
  {
    "id": "SEC-D5-118",
    "domain": "5.0",
    "question": "Charlene wants to calculate the annualized loss expectancy for a risk event. What two factors does she need to know to calculate the ALE for a risk?",
    "answers": [
      "ARO and TCO",
      "SLE and RPO",
      "TCO and RPO",
      "ARO and SLE"
    ],
    "correct": 3,
    "explanation": "Annualized loss expectancy is calculated by multiplying the annualized rate of occurrence (ARO) and the single loss expectancy (SLE). Total cost of ownership (TCO) and recovery point objectives (RPO) are not part of this type of risk calculation."
  },
  {
    "id": "SEC-D5-119",
    "domain": "5.0",
    "question": "John is conducting a penetration test of a client's network. He is currently gathering information from sources such as archive.org, netcraft.com, social media, and information websites. What best describes this stage?",
    "answers": [
      "Active reconnaissance",
      "Passive reconnaissance",
      "Initial exploitation",
      "Pivot"
    ],
    "correct": 1,
    "explanation": "Passive reconnaissance is any reconnaissance that is done without actually connecting to the target. In this case, John is conducting a form of OSINT, or open source intelligence, by using commonly available third-party information sources to gather information about his target. Active reconnaissance involves communicating with the target network, such as doing a port scan. The initial exploitation is not information gathering; it is actually breaking into the target network. A pivot is when you have breached one system and use that to move to another system."
  },
  {
    "id": "SEC-D5-120",
    "domain": "5.0",
    "question": "Juan is responsible for incident response at a large financial institution. He discovers that the company Wi-Fi has been breached. The attacker used the same login credentials that ship with the wireless access point (WAP). The attacker was able to use those credentials to access the WAP administrative console and make changes. Which of the following best describes the lack of standards or procedures that caused this vulnerability to exist?",
    "answers": [
      "Improperly configured accounts",
      "Untrained users",
      "Using default settings",
      "Failure to patch systems"
    ],
    "correct": 2,
    "explanation": "Using default settings is a form of weak configuration and indicates that the organization is not using baselines effectively and may not have appropriate processes and standards in place. Many vulnerability scanners and attack tools have default settings built-in to test with, and default settings are easily obtained for most devices with a quick search of the Internet. Configuring the accounts is not the issue; using default credentials and settings is. Although training users is important, that's not the issue in this scenario. Patching systems is important, but that won't change default settings."
  },
  {
    "id": "SEC-D5-121",
    "domain": "5.0",
    "question": "What is the primary difference between active and passive reconnaissance?",
    "answers": [
      "Active will be done manually, passive with tools.",
      "Active is done with unknown environment tests and passive with known environment tests.",
      "Active is usually done by attackers and passive by testers.",
      "Active will actually connect to the network and could be detected; passive won't."
    ],
    "correct": 3,
    "explanation": "Active reconnaissance connects to the network using techniques such as port scanning. Both active and passive reconnaissance can be done manually or with tools. Unknown and known environment tests refer to the amount of information the tester is given. Attackers and testers use both types of reconnaissance."
  },
  {
    "id": "SEC-D5-122",
    "domain": "5.0",
    "question": "The type and scope of testing, client contact details, how sensitive data will be handled, and the type and frequency of status meetings and reports are all common elements of what artifact of a penetration test?",
    "answers": [
      "The unknown environment (black-box) outline",
      "The rules of engagement",
      "The known environment (white-box) outline",
      "The close-out report"
    ],
    "correct": 1,
    "explanation": "The rules of engagement for a penetration test typically include the type and scope of testing, client contact information and requirements for when the team should be notified, sensitive data handling requirements, and details of regular status meetings and reports. The remaining options were made up for this question."
  },
  {
    "id": "SEC-D5-123",
    "domain": "5.0",
    "question": "Charlene has been asked to write a business continuity (BC) plan for her organization. Which of the following will a BC plan best handle?",
    "answers": [
      "How to respond during a person-made disaster",
      "How to keep the organization running during a system outage",
      "How to respond during a natural disaster",
      "All of the above"
    ],
    "correct": 1,
    "explanation": "Unlike a disaster recovery plan that is written to help an organization recovery from a person-made or natural disaster, a business continuity plan focuses on how to keep the business running when it is disrupted. Thus, Charlene's BC plan would detail how to keep the organization running when a system outage occurs."
  },
  {
    "id": "SEC-D5-124",
    "domain": "5.0",
    "question": "Alaina's company is considering signing a contract with a cloud service provider and wants to determine how secure their services are. Which of the following is a method she is likely to be able to use to assess it?",
    "answers": [
      "Ask for permission to vulnerability scan the vendor's production service.",
      "Conduct an audit of the organization.",
      "Review an existing SOC audit.",
      "Hire a third party to audit the organization."
    ],
    "correct": 2,
    "explanation": "Many cloud service providers do not allow customer-driven audits, either by the customer or a third party. They also commonly prohibit vulnerability scans of their production environment to avoid service outages. Instead, many provide third-party audit results in the form of a service organization controls (SOC) report or similar audit artifact."
  },
  {
    "id": "SEC-D5-125",
    "domain": "5.0",
    "question": "Gurvinder's corporate datacenter is located in an area that FEMA has identified as being part of a 100-year flood plain. He knows that there is a chance in any given year that his datacenter could be completely flooded and underwater, and he wants to ensure that his organization knows what to do if that happens. What type of plan should he write?",
    "answers": [
      "A continuity of operations plan",
      "A business continuity plan",
      "A flood insurance plan",
      "A disaster recovery plan"
    ],
    "correct": 3,
    "explanation": "A disaster recovery plan addresses what to do during a person-made or natural disaster. A flood that completely fills a datacenter would require significant efforts to recover from, and Gurvinder will need a solid disaster recovery plan--and perhaps a new datacenter location as soon as possible! A COOP, or continuity of operations plan, is needed for U.S. government agencies but is not required for businesses. A business continuity plan would cover how to keep the business running, but it does not cover all the requirements in a natural disaster of this scale, and a flood insurance plan is not a term used in the Security+ exam objectives."
  },
  {
    "id": "SEC-D5-126",
    "domain": "5.0",
    "question": "Which of the following environments is least likely to allow a right-to-audit clause in a contract?",
    "answers": [
      "A datacenter co-location facility in your state",
      "A rented facility for a corporate headquarters",
      "A cloud server provider",
      "A datacenter co-location facility in the same country but not the same state"
    ],
    "correct": 2,
    "explanation": "Right-to-audit clauses are commonly accepted as part of service and leasing contracts regardless of location for datacenter co-location and facility rental contracts. Cloud service providers, however, are less likely to sign a right-to-audit contract. Instead, they may provide third-party audit data to customers or even to potential customers."
  },
  {
    "id": "SEC-D5-127",
    "domain": "5.0",
    "question": "Ben writes down the checklist of steps that his organization will perform in the event of a cryptographic malware infection. What type of response document has he created?",
    "answers": [
      "A playbook",
      "A DR plan",
      "A BC plan",
      "A runbook"
    ],
    "correct": 0,
    "explanation": "Playbooks list the actions that an organization will take as part of a response process. A runbook lists the steps required to perform an action like notification, removing malware, or similar tasks. Playbooks tend to be used to document processes, whereas runbooks tend to be used for specific actions. A disaster recovery (DR) plan is used to recover from disasters, and a business continuity (BC) plan is used to ensure that the organization continues to function."
  },
  {
    "id": "SEC-D5-128",
    "domain": "5.0",
    "question": "Caroline has been asked to find an international standard to guide her company's choices in implementing information security management systems. Which of the following would be the best choice for her?",
    "answers": [
      "ISO 27002",
      "ISO 27701",
      "NIST 800-12",
      "NIST 800-53"
    ],
    "correct": 0,
    "explanation": "Caroline should select ISO 27002. ISO 27002 is an international standard for implementing and maintaining information security systems. ISO 27701 is an international standard security technique for privacy information management systems; NIST 800-12 is a general security standard and it is a US standard, not an international one; and NIST 800-53 is a collection of security and privacy controls for information systems and organizations."
  },
  {
    "id": "SEC-D5-129",
    "domain": "5.0",
    "question": "Which of the following principles stipulates that multiple changes to a computer system should not be made at the same time?",
    "answers": [
      "Due diligence",
      "Acceptable use",
      "Change management",
      "Due care"
    ],
    "correct": 2,
    "explanation": "Change management is the process of documenting all changes made to a company's network and computers. Avoiding making changes at the same time makes tracking any problems that can occur much simpler. Due diligence is the process of investigation and verification of the accuracy of a particular act. Acceptable use policies state what actions and practices are allowed in an organization while using technology. Due care is the effort made by a reasonable party to avoid harm to another. It is the level of judgment, care, determination, and activity a person would reasonably expect to do under certain conditions."
  },
  {
    "id": "SEC-D5-130",
    "domain": "5.0",
    "question": "You are a security engineer and discovered an employee using the company's computer systems to operate their small business. The employee installed their personal software on the company's computer and is using the computer hardware, such as the USB port. What policy would you recommend the company implement to prevent any risk of the company's data and network being compromised?",
    "answers": [
      "Acceptable use policy",
      "Clean desk policy",
      "Mandatory vacation policy",
      "Job rotation policy"
    ],
    "correct": 0,
    "explanation": "An acceptable use policy (AUP) is a document stating what a user may or may not have access to on a company's network or the Internet. A clean desk policy ensures that all sensitive/confidential documents are removed from an end-user workstation and locked up when the documents are not in use. Mandatory vacation policy is used by companies to detect fraud by having a second person, familiar with the duties, help discover any illicit activities. Job rotation is a policy that describes the practice of moving employees between different tasks. Job rotation can help detect fraud because employees cannot perform the same actions for long periods of time."
  },
  {
    "id": "SEC-D5-131",
    "domain": "5.0",
    "question": "What standard is used for credit card security?",
    "answers": [
      "GDPR",
      "COPPA",
      "PCI DSS",
      "CIS"
    ],
    "correct": 2,
    "explanation": "The PCI DSS, or Payment Card Industry Data Security Standard, is a security standard that is mandated by credit card vendors. The Payment Card Industry Security Standards Council is responsible for updates and changes to the standard. GDPR, or the General Data Protection Regulation, is a standard for data privacy and security in the European Union (EU). COPPA is the Children's Online Privacy Protection Act, a U.S. federal law. CIS is the Center for Internet Security and is not a law or a regulation."
  },
  {
    "id": "SEC-D5-132",
    "domain": "5.0",
    "question": "Which of the following techniques attempts to predict the likelihood a threat will occur and assigns monetary values should a loss occur?",
    "answers": [
      "Change management",
      "Vulnerability assessment",
      "Qualitative risk assessment",
      "Quantitative risk assessment"
    ],
    "correct": 3,
    "explanation": "Quantitative risk assessment is the process of assigning numerical values to the probability an event will occur and what the impact of the event will have. Change management is the process of managing configuration changes made to a network. Vulnerability assessment attempts to identify, quantify, and rank the weaknesses in a system. Qualitative risk assessment is the process of ranking which risk poses the most danger using ratings like low, medium, and high."
  },
  {
    "id": "SEC-D5-133",
    "domain": "5.0",
    "question": "Which of the following agreements is less formal than a traditional contract but still has a certain level of importance to all parties involved?",
    "answers": [
      "SLA",
      "BPA",
      "ISA",
      "MOU"
    ],
    "correct": 3,
    "explanation": "A memorandum of understanding (MOU) is a type of agreement that is usually not legally binding. This agreement is intended to be mutually beneficial without involving courts or money. An SLA (service level agreement) defines the level of service the customer expects from the service provider. The level of service definitions should be specific and measurable in each area. A BPA (business partner agreement) is a legal agreement between partners. It establishes the terms, conditions, and expectations of the relationship between the partners. An ISA (interconnection security agreement) is an agreement that specifies the technical and security requirements of the interconnection between organizations."
  },
  {
    "id": "SEC-D5-134",
    "domain": "5.0",
    "question": "You have an asset that is valued at $16,000, the exposure factor of a risk affecting that asset is 35 percent, and the annualized rate of occurrence is 75 percent. What is the SLE?",
    "answers": [
      "$5,600",
      "$5,000",
      "$4,200",
      "$3,000"
    ],
    "correct": 0,
    "explanation": "The single loss expectancy (SLE) is the product of the asset value ($16,000) and the exposure factor (.35), or $5,600."
  },
  {
    "id": "SEC-D5-135",
    "domain": "5.0",
    "question": "You are a security administrator for your company and you identify a security risk. You decide to continue with the current security plan. However, you develop a contingency plan in case the security risk occurs. Which of the following type of risk response technique are you demonstrating?",
    "answers": [
      "Accept",
      "Transfer",
      "Avoid",
      "Mitigate"
    ],
    "correct": 0,
    "explanation": "Risk acceptance is a strategy of recognizing, identifying, and accepting a risk that is sufficiently unlikely or that has such limited impact that a corrective control is not warranted. Risk transfer is the act of moving the risk to hosted providers who assume the responsibility for recovery and restoration or by acquiring insurance to cover the costs emerging from a risk. Risk avoidance is the removal of the vulnerability that can increase a particular risk so that it is avoided altogether. Risk mitigation is when a company implements controls to reduce vulnerabilities or weaknesses in a system. It can also reduce the impact of a threat."
  },
  {
    "id": "SEC-D5-136",
    "domain": "5.0",
    "question": "Which of the following is not a common security policy type?",
    "answers": [
      "Acceptable use policy",
      "Business continuity",
      "Incident response",
      "Parking policy"
    ],
    "correct": 3,
    "explanation": "A parking policy generally outlines parking provisions for employees and visitors. This includes the criteria and procedures for allocating parking spaces for employees and is not a part of organizational security policy. Instead, it is an operational or business policy. An acceptable use policy (AUP) describes the limits and guidelines for users to make use of an organization's physical and intellectual resources. This includes allowing or limiting the use of personal email during work hours. Business continuity policies describe how the organization approaches business continuity efforts, and incident response (IR) policies document the organization's IR intentions and high-level goals."
  },
  {
    "id": "SEC-D5-137",
    "domain": "5.0",
    "question": "Your security manager wants to decide which risks to mitigate based on cost. What is this an example of?",
    "answers": [
      "Quantitative risk assessment",
      "Qualitative risk assessment",
      "Business impact analysis",
      "Threat assessment"
    ],
    "correct": 0,
    "explanation": "Quantitative risk assessment is the process of assigning numerical values like cost and frequency of occurrence to the probability an event will occur and what impact the event will have, and thus directly evaluates the cost of a risk occurring. Qualitative risk assessment is the process of ranking which risk poses the most danger such as low, medium, and high. A business impact analysis (BIA) is used to evaluate the possible effect a business can suffer should an interruption to critical system operations occur. This interruption could be as a result of an accident, emergency, or disaster. Threat assessment is the process of identifying and categorizing different threats such as environmental and person-made. It also attempts to identify the potential impact from the threats."
  },
  {
    "id": "SEC-D5-138",
    "domain": "5.0",
    "question": "Your company has outsourced its proprietary processes to Acme Corporation. Due to technical issues, Acme wants to include a third-party vendor to help resolve the technical issues. Which of the following must Acme consider before sending data to the third party?",
    "answers": [
      "This data should be encrypted before it is sent to the third-party vendor.",
      "This may constitute unauthorized data sharing.",
      "This may violate the privileged user role-based awareness training.",
      "This may violate a nondisclosure agreement."
    ],
    "correct": 3,
    "explanation": "A nondisclosure agreement (NDA) protects sensitive and intellectual data from getting into the wrong hands. An NDA is a legal contract between the company and a third-party vendor to not disclose information per the agreement. Encrypted data that is sent can still be decrypted by the third-party vendor if they have the appropriate certificate or the key but does not restrict access to the data. Violating an NDA would constitute unauthorized data sharing, and a violation of privileged user role-based awareness training has nothing to do with sharing proprietary information."
  },
  {
    "id": "SEC-D5-139",
    "domain": "5.0",
    "question": "Which of the following is typically included in a BPA?",
    "answers": [
      "Clear statements detailing the expectation between a customer and a service provider",
      "The agreement that a specific function or service will be delivered at the agreed-on level of performance",
      "Sharing of profits and losses and the addition or removal of a partner",
      "Security requirements associated with interconnecting IT systems"
    ],
    "correct": 2,
    "explanation": "Sharing of profits and losses and the addition or removal of a partner, as well as the responsibilities of each partner, are typically included in a BPA (business partner agreement). Expectations between parties such as a company and an Internet service provider are typically found in a service level agreement (SLA). Expectations include the level of performance given during the contractual service. An SLA will provide a clear means of determining whether a specific function or service has been provided according to the agreed-on level of performance. Security requirements associated with interconnecting IT systems are typically found in an interconnection security agreement, or ISA."
  },
  {
    "id": "SEC-D5-140",
    "domain": "5.0",
    "question": "A security administrator is reviewing the company's continuity plan, and it specifies an RTO of four hours and an RPO of one day. Which of the following is the plan describing?",
    "answers": [
      "Systems should be restored within one day and should remain operational for at least four hours.",
      "Systems should be restored within four hours and no later than one day after the incident.",
      "Systems should be restored within one day and lose, at most, four hours' worth of data.",
      "Systems should be restored within four hours with a loss of one day's worth of data at most."
    ],
    "correct": 3,
    "explanation": "Systems should be restored within four hours with a minimum loss of one day's worth of data. The RTO (recovery time objective) is the amount of time within which a process or service must be restored after a disaster to meet business continuity. It defines how much time it takes to recover after notification of process disruption. The recovery point objective, or RPO, specifies the amount of time that can pass before the amount of data lost may exceed the organization's maximum tolerance for data loss."
  },
  {
    "id": "SEC-D5-141",
    "domain": "5.0",
    "question": "Which of the following statements is true regarding a data retention policy?",
    "answers": [
      "Regulations require financial transactions to be stored for seven years.",
      "Employees must remove and lock up all sensitive and confidential documents when not in use.",
      "It describes a formal process of managing configuration changes made to a network.",
      "It is a legal document that describes a mutual agreement between parties."
    ],
    "correct": 0,
    "explanation": "A data retention policy defines how long an organization will keep data. Removing sensitive documents not in use is a clean desk policy. A formal process for managing configuration changes is change management, and a memorandum of understanding consists of legal documents that describe mutual agreement between two parties."
  },
  {
    "id": "SEC-D5-142",
    "domain": "5.0",
    "question": "How do you calculate the annual loss expectancy (ALE) that may occur due to a threat?",
    "answers": [
      "Exposure factor (EF) / single loss expectancy (SLE)",
      "Single loss expectancy (SLE) × annual rate of occurrence (ARO)",
      "Asset value (AV) × exposure factor (EF)",
      "Single loss expectancy (SLE) / exposure factor (EF)"
    ],
    "correct": 1,
    "explanation": "ALE (annual loss expectancy) is the product of the ARO (annual rate of occurrence) and the SLE (single loss expectancy) and is mathematically expressed as ALE = ARO × SLE. Single loss expectancy is the cost of any single loss, and it is mathematically expressed as SLE = AV (asset value) × EF (exposure factor)."
  },
  {
    "id": "SEC-D5-143",
    "domain": "5.0",
    "question": "You are a security administrator for your company and you identify a security risk that you do not have in-house skills to address. You decide to acquire contract resources. The contractor will be responsible for handling and managing this security risk. Which of the following type of risk response techniques are you demonstrating?",
    "answers": [
      "Accept",
      "Mitigate",
      "Transfer",
      "Avoid"
    ],
    "correct": 2,
    "explanation": "Risk transfer is the act of moving the risk to hosted providers who assume the responsibility for recovery and restoration or by acquiring insurance to cover the costs emerging from a risk. Risk acceptance is a strategy of recognizing, identifying, and accepting a risk that is sufficiently unlikely or that has such limited impact that a corrective control is not warranted. Risk mitigation is when a company implements controls to reduce vulnerabilities or weaknesses in a system. It can also reduce the impact of a threat. Risk avoidance is the removal of the vulnerability that can increase a particular risk so that it is avoided altogether."
  },
  {
    "id": "SEC-D5-144",
    "domain": "5.0",
    "question": "You are a server administrator for your company's private cloud. To provide service to employees, you are instructed to use reliable hard disks in the server to host a virtual environment. Which of the following best describes the reliability of hard drives?",
    "answers": [
      "MTTR",
      "RPO",
      "MTBF",
      "ALE"
    ],
    "correct": 2,
    "explanation": "The mean time between failures (MTBF) is a measure of the reliability of a system or component. It is the expected amount of time that will elapse between system or device failures. MTTR (mean time to repair) is the average time it takes for a failed device or component to be repaired or replaced. An RPO (recovery point objective) is the period of time a company can tolerate lost data being unrecoverable between backups. ALE (annual loss expectancy) is the product of the annual rate of occurrence (ARO) and the single loss expectancy (SLE)."
  },
  {
    "id": "SEC-D5-145",
    "domain": "5.0",
    "question": "Which of the following best describes a key challenge of quantitative risk analysis compared to qualitative risk analysis?",
    "answers": [
      "Quantitative risk analysis requires detailed financial data.",
      "Quantitative risk analysis is sometimes subjective.",
      "Quantitative risk analysis requires expertise on systems and infrastructure.",
      "Quantitative risk provides clear answers to risk-based questions."
    ],
    "correct": 0,
    "explanation": "Quantitative risk analysis requires complex calculations and is more time-consuming because it requires detailed financial data and calculations. Quantitative risk assessment is often subjective and requires expertise on systems and infrastructure, and both types of assessment can provide clear answers on risk-based questions."
  },
  {
    "id": "SEC-D5-146",
    "domain": "5.0",
    "question": "Categorizing residual risk is most important to which of the following risk response techniques?",
    "answers": [
      "Risk mitigation",
      "Risk acceptance",
      "Risk avoidance",
      "Risk transfer"
    ],
    "correct": 1,
    "explanation": "Risk acceptance is a strategy of recognizing, identifying, and accepting a risk that is sufficiently unlikely or that has such limited impact that a corrective control is not warranted. Risk mitigation is when a company implements controls to reduce vulnerabilities or weaknesses in a system. It can also reduce the impact of a threat. Risk avoidance is the removal of the vulnerability that can increase a particular risk so that it is avoided altogether. Risk transfer is the act of moving the risk to other organizations like insurance providers or hosting companies who assume the responsibility for recovery and restoration or by acquiring insurance to cover the costs emerging from a risk."
  },
  {
    "id": "SEC-D5-147",
    "domain": "5.0",
    "question": "You are the IT manager and one of your employees asks who assigns data labels. Which of the following assigns data labels?",
    "answers": [
      "Owner",
      "Custodian",
      "Privacy officer",
      "System administrator"
    ],
    "correct": 0,
    "explanation": "Data owners assign labels such as top secret to data. Custodians assign security controls to data. A privacy officer ensures that companies comply with privacy laws and regulations. System administrators are responsible for the overall functioning of IT systems."
  },
  {
    "id": "SEC-D5-148",
    "domain": "5.0",
    "question": "A security analyst is analyzing the cost the company could incur if the customer database was breached. The database contains 2,500 records with personally identifiable information (PII). Studies show the cost per record would be $300. The likelihood that the database would be breached in the next year is only 5 percent. Which of the following would be the ALE for a security breach?",
    "answers": [
      "$15,000",
      "$37,500",
      "$150,000",
      "$750,000"
    ],
    "correct": 1,
    "explanation": "ALE (annual loss expectancy) = SLE (single loss expectancy) × ARO (annualized rate of occurrence). SLE equals $750,000 (2,500 records × $300), and ARO equals 5%, so $750,000 times 5% equals $37,500."
  },
  {
    "id": "SEC-D5-149",
    "domain": "5.0",
    "question": "Which of the following concepts defines a company goal for system restoration and acceptable data loss?",
    "answers": [
      "MTBF",
      "MTTR",
      "RPO",
      "ARO"
    ],
    "correct": 2,
    "explanation": "RPO (recovery point objective) specifies the allowable data loss. It is the amount of time that can pass during an interruption before the quantity of data lost during that period surpasses business continuity planning's maximum acceptable threshold. MTBF (mean time between failures) is the rating on a device or component that predicts the expected time between failures. MTTR (mean time to repair) is the average time it takes for a failed device or component to be repaired or replaced. ARO (annual rate of occurrence) is the ratio of an estimated possibility that a threat will take place within a one-year time frame."
  },
  {
    "id": "SEC-D5-150",
    "domain": "5.0",
    "question": "You are a network administrator and have been given the duty of creating user accounts for new employees the company has hired. These employees are added to the identity and access management (IAM) system and assigned mobile devices. What process are you performing?",
    "answers": [
      "Offboarding",
      "System owner",
      "Onboarding",
      "Executive user"
    ],
    "correct": 2,
    "explanation": "Onboarding is the process of adding an employee to a company's identity and access management system. Offboarding is the process of removing an employee from the company's identity and access management system. A system owner is an individual who is in charge of managing one or more systems and can include patching and updating operating systems. An executive user was made up for this question."
  },
  {
    "id": "SEC-D5-151",
    "domain": "5.0",
    "question": "Visa's published documentation for \"What to Do if Compromised\" includes requirements to notify Visa within 3 days of an incident, to provide notice to other relevant parties, and to conduct forensic investigations while preserving evidence. What type of document is this?",
    "answers": [
      "A policy",
      "A playbook",
      "A checklist",
      "A procedure"
    ],
    "correct": 3,
    "explanation": "This is a procedure, which documents what you should do in general terms. A policy lays out an organization's intent, and this is more specific than that. A playbook has specific, detailed action, and this procedure does not include that level of detail. Checklists are a step-by-step guide to accomplishing a task, and this document outlines required steps, not step-by-step detail."
  },
  {
    "id": "SEC-D5-152",
    "domain": "5.0",
    "question": "An organization's information security policy framework typically contains what four types of documents?",
    "answers": [
      "A risk register, an audit report, a vulnerability scan, and a pentest report",
      "Policies, standards, procedures, and guidelines",
      "Laws, policies, standards, and practices",
      "Policies, practices, procedures, and playbooks"
    ],
    "correct": 1,
    "explanation": "Organizational policy frameworks typically contain policies, standards and procedures that support and expand on the policy, and guidelines. Risk registers, audit reports, vulnerability scans, and pentest reports are all artifacts organizations generate in support of information security practices. Laws are not part of a policy framework but may influence it."
  },
  {
    "id": "SEC-D5-153",
    "domain": "5.0",
    "question": "Which of the following terms is used to measure how maintainable a system or device is?",
    "answers": [
      "MTBF",
      "MTTF",
      "MTTR",
      "MITM"
    ],
    "correct": 2,
    "explanation": "The mean time to repair (MTTR) for a system or devices is the average time that it will take to repair it if it fails. The MTTR is used as part of business continuity planning to determine if a system needs additional redundancy or other options put in place if a failure and repair would exceed the maximum tolerable outage. It is calculated by dividing the total maintenance time by the total number of repairs. MTBF is the mean time between failures, MTTF the mean time to failure, and MITM is an on-path attack."
  },
  {
    "id": "SEC-D5-154",
    "domain": "5.0",
    "question": "Helen's organization provides telephone support for their entire customer base as a critical business function. She has created a plan that will ensure that her organization's Voice over IP (VoIP) phones will be restored in the event of a tornado. What type of plan has she created?",
    "answers": [
      "A disaster recovery plan",
      "An RPO plan",
      "An incident response plan",
      "An MTBF plan"
    ],
    "correct": 0,
    "explanation": "Helen has created a disaster recovery plan (DRP). RPOs, or recovery point objectives, are set to determine how much data may be lost if an event or incident occurs; incident response plans focus on incidents, not outages or disasters; and MTBF, or mean time between failures, is not a type of plan."
  },
  {
    "id": "SEC-D5-155",
    "domain": "5.0",
    "question": "Greg has data that is classified as health information that his organization uses as part of their company's HR data. Which of the following statements is true for his company's security policy?",
    "answers": [
      "The health information must be encrypted.",
      "Greg should review relevant law to ensure the health information is handled properly.",
      "Companies are prohibited from storing health information and must outsource to third parties.",
      "All of the above."
    ],
    "correct": 1,
    "explanation": "Personal health information (PHI) may be covered by state, local, or federal law, and Greg's organization should ensure that they understand any applicable laws before storing, processing, or handling health information."
  },
  {
    "id": "SEC-D5-156",
    "domain": "5.0",
    "question": "What type of impact is an individual most likely to experience if a data breach that includes PII occurs?",
    "answers": [
      "IP theft",
      "Reputation damage",
      "Fines",
      "Identity theft"
    ],
    "correct": 3,
    "explanation": "An individual is most likely to face identity theft issues if their personally identifiable information (PII) is stolen or breached."
  },
  {
    "id": "SEC-D5-157",
    "domain": "5.0",
    "question": "Isaac has been asked to write his organization's access control standards. What policy is commonly put in place for service accounts?",
    "answers": [
      "They must be issued only to system administrators.",
      "They must use multifactor authentication.",
      "They cannot use interactive logins.",
      "All of the above."
    ],
    "correct": 2,
    "explanation": "It is common practice to prohibit interactive logins to a GUI or shell for service accounts. Use of a service account for interactive logins or attempting to log in as one should be immediately flagged and alerted on as an indicator of compromise (IoC)."
  },
  {
    "id": "SEC-D5-158",
    "domain": "5.0",
    "question": "Emma is reviewing third-party risks to her organization, and Nate, her organization's procurement officer, notes that purchases of some laptops from the company's hardware vendor have been delayed due to lack of availability of SSDs (solid-state drives) and specific CPUs (central processing units) for specific configurations. What type of risk should Emma describe this as?",
    "answers": [
      "Financial risk",
      "A lack of vendor support",
      "System integration",
      "Supply chain"
    ],
    "correct": 3,
    "explanation": "Emma should categorize this as a supply chain risk. When organizations cannot get the systems, equipment, and supplies they need to operate, it can have a significant impact on their ability to conduct business. That could create financial risk, but financial risk is not the direct risk here. There is no indication that the vendor will not support the systems, nor is there any information about whether there is an integration issue in the description."
  },
  {
    "id": "SEC-D5-159",
    "domain": "5.0",
    "question": "Patching systems immediately after patches are released is an example of what risk management strategy?",
    "answers": [
      "Acceptance",
      "Avoidance",
      "Mitigation",
      "Transference"
    ],
    "correct": 1,
    "explanation": "Patching is a form of avoidance because it works to remove a risk from the environment. Acceptance of flaws that need patching would involve leaving the software unpatched; mitigation strategies might include firewalls, intrusion prevention systems (IPSs), or web application firewall (WAF) devices; and transference options include third-party hosting or services."
  },
  {
    "id": "SEC-D5-160",
    "domain": "5.0",
    "question": "What key element of regulations, like the European Union's GDPR, drive organizations to include them in their overall assessment of risk posture?",
    "answers": [
      "Potential fines",
      "Their annual loss expectancy (ALE)",
      "Their recovery time objective (RTO)",
      "The likelihood of occurrence"
    ],
    "correct": 0,
    "explanation": "The fines that can result from violation or infringement of regulations like the General Data Protection Regulation (GDPR) can have a significant impact on an organization, or could even potentially put it out of business. Due to this, organizations will track compliance with regulations as part of their risk posture."
  },
  {
    "id": "SEC-D5-161",
    "domain": "5.0",
    "question": "What phases of handling a disaster are covered by a disaster recovery plan?",
    "answers": [
      "What to do before the disaster",
      "What to do during the disaster",
      "What to do after the disaster",
      "All of the above"
    ],
    "correct": 3,
    "explanation": "Disaster recovery requires forethought and preparation, response to issues to minimize impact during a disaster, and response activities after a disaster. Thus, a complete disaster recovery plan should include actions that may or will occur before, during, and after a disaster, and not just the recovery process after the fact."
  },
  {
    "id": "SEC-D5-162",
    "domain": "5.0",
    "question": "Naomi's organization has recently experienced a breach of credit card information. After investigation, it is discovered that her organization was inadvertently not fully compliant with PCI DSS and is not currently fully compliant. Which of the following penalties is her organization most likely to incur?",
    "answers": [
      "Criminal charges",
      "Fines",
      "Termination of the credit card processing agreement",
      "All of the above"
    ],
    "correct": 1,
    "explanation": "Although data breaches could result in termination of a card processing agreement, the fact that her organization is noncompliant is most likely to result in a fine. PCI DSS, or Payment Card Industry Data Security Standard, is a vendor standard, not a law, and criminal charges would not typically be filed in a situation like this."
  },
  {
    "id": "SEC-D5-163",
    "domain": "5.0",
    "question": "What law or regulation requires a DPO in organizations?",
    "answers": [
      "FISMA",
      "COPPA",
      "PCI DSS",
      "GDPR"
    ],
    "correct": 3,
    "explanation": "The General Data Protection Regulation, or GDPR, requires a data protection officer (DPO). They oversee the organization's data protection strategy and implementation, and make sure that the organization complies with the GDPR."
  },
  {
    "id": "SEC-D5-164",
    "domain": "5.0",
    "question": "Your company is considering moving its mail server to a hosting company. This will help reduce hardware and server administrator costs at the local site. Which of the following documents would formally state the reliability and recourse if the reliability is not met?",
    "answers": [
      "MOU",
      "SLA",
      "ISA",
      "BPA"
    ],
    "correct": 1,
    "explanation": "An SLA (service level agreement) defines the level of service the customer expects from the service provider. The level of service definitions should be specific and measurable in each area. An MOU (memorandum of understanding) is a legal document that describes a mutual agreement between parties. An ISA (interconnection security agreement) is an agreement that specifies the technical and security requirements of the interconnection between organizations. A BPA (business partners agreement) is a legal agreement between partners. It establishes the terms, conditions, and expectations of the relationship between the partners."
  },
  {
    "id": "SEC-D5-165",
    "domain": "5.0",
    "question": "Risk severity is calculated using the equation shown here. What information should be substituted for X? Risk severity = X * Impact",
    "answers": [
      "Inherent risk",
      "MTTR (mean time to repair)",
      "Likelihood of occurrence",
      "RTO (recovery time objective)"
    ],
    "correct": 2,
    "explanation": "The likelihood of occurrence, or probability, is multiplied by the impact to determine a risk's severity."
  },
  {
    "id": "SEC-D5-166",
    "domain": "5.0",
    "question": "How is asset value determined?",
    "answers": [
      "The original cost of the item",
      "The depreciated cost of the item",
      "The cost to replace the item",
      "Any of the above based on organizational preference"
    ],
    "correct": 3,
    "explanation": "Organizations can determine how they want to determine asset value, but consistency is important in many cases. Thus, the original cost, the replacement cost, or a depreciated cost may be used."
  },
  {
    "id": "SEC-D5-167",
    "domain": "5.0",
    "question": "What process is used to help identify critical systems?",
    "answers": [
      "A BIA",
      "An MTBF",
      "An RTO",
      "An ICD"
    ],
    "correct": 0,
    "explanation": "A business impact analysis (BIA) helps to identify critical systems by determining which systems will create the largest impact if they are not available. MTBF is the mean time between failures, an RTO is a recovery time objective, and an ICD was made up for this question."
  },
  {
    "id": "SEC-D5-168",
    "domain": "5.0",
    "question": "Zarmeena wants to transfer the risk for breaches to another organization. Which of the following options should she use to transfer the risk?",
    "answers": [
      "Explain to her management that breaches will occur.",
      "Blame future breaches on competitors.",
      "Sell her organization's data to another organization.",
      "Purchase cybersecurity insurance."
    ],
    "correct": 3,
    "explanation": "The most common means of transferring breach risk is to purchase cybersecurity insurance. Accepting breaches is rarely considered a valid risk process, blaming breaches on competitors does not actually transfer risk, and selling data to another organization is not a risk handling process but may be a business process."
  },
  {
    "id": "SEC-D5-169",
    "domain": "5.0",
    "question": "The financial cost of a breach is an example of what component of risk calculations?",
    "answers": [
      "Probability",
      "Risk severity",
      "Impact",
      "All of the above"
    ],
    "correct": 2,
    "explanation": "The cost of a breach is an example of the impact of a breach. Probability is how likely the risk is to occur, and risk severity is calculated by multiplying probability and impact."
  },
  {
    "id": "SEC-D5-170",
    "domain": "5.0",
    "question": "Joanna's penetration test target is an unknown environment that is isolated from the Internet and requires VPN access. What type of testing will she need to do to gather vulnerability information from systems?",
    "answers": [
      "Passive reconnaissance",
      "OSINT reconnaissance",
      "Active reconnaissance",
      "Known environment reconnaissance"
    ],
    "correct": 2,
    "explanation": "Gathering vulnerability information for a system that isn't scannable from the Internet will require active reconnaissance as part of the penetration testing effort. OSINT and passive reconnaissance do not involve active scans, and known environments provide full knowledge of the environment."
  },
  {
    "id": "SEC-D5-171",
    "domain": "5.0",
    "question": "Olivia's cloud service provider claims to provide zero data loss from storage, and Olivia's company wants to take advantage of that service because loss of data would be extremely costly for the business. What business agreement can Oliva put in place to help ensure that the reliability that the vendor advertises is maintained?",
    "answers": [
      "An MOU",
      "An SLA",
      "An MSA",
      "A BPA"
    ],
    "correct": 1,
    "explanation": "Olivia should establish a service level agreement (SLA) with her provider to ensure that they meet the expected level of service. If they don't, financial or other penalties are typically included. Olivia should ensure that those penalties are meaningful to her vendor to make sure they are motivated to meet the SLA. An MOU is a memorandum of understanding and explains the relationship between two organizations; an MSA is a master services agreement, which establishes a business relationship under which additional work orders or other documentation describe the actual work that is done; and a BPA is a business partners agreement, which is used when companies wish to partner on efforts and may outline division of profits or responsibilities in the partnership."
  },
  {
    "id": "SEC-D5-172",
    "domain": "5.0",
    "question": "How is SLE calculated?",
    "answers": [
      "AV * EF",
      "RTO * AV",
      "MTTR * EF",
      "AV * ARO"
    ],
    "correct": 0,
    "explanation": "The single loss expectancy (SLE) describes what a single risk event is likely to cost. It is calculated using the asset value (AV) times the exposure factor (EF), which is an estimated percentage of the cost that will occur in damage if the loss occurs. MTTR is the mean time to repair, ARO is the annual rate of occurrence, and RTO is the recovery time objective. These are not part of the SLE equation."
  },
  {
    "id": "SEC-D5-173",
    "domain": "5.0",
    "question": "Wayne has estimated the ARO for a risk in his organization to be 3. How often does Wayne think the event will happen?",
    "answers": [
      "Once every 3 months",
      "Three times a year",
      "Once every three years",
      "Once a year for three years"
    ],
    "correct": 1,
    "explanation": "Annual rate of occurrence (ARO) is expressed as the number of times an event will occur in a year. Wayne has estimated that the risk event that is being assessed will happen three times a year."
  },
  {
    "id": "SEC-D5-174",
    "domain": "5.0",
    "question": "Elle works for a credit card company that handles credit card transactions for businesses around the world. What data privacy role does her company play?",
    "answers": [
      "A data controller",
      "A data steward",
      "A data custodian",
      "A data processor"
    ],
    "correct": 3,
    "explanation": "Data processors are service providers that process data for data controllers. A data controller or data owner is the organization or individual who collects and controls data. A data steward carries out the intent of the data controller and is delegated responsibility for the data. Data custodians are those who are entrusted with the data to store, manage, or secure the data."
  },
  {
    "id": "SEC-D5-175",
    "domain": "5.0",
    "question": "Nicole determines how her organization processes data that it collects about its customers and also decides how and why personal information should be processed. What role does Nicole play in her organization?",
    "answers": [
      "Data steward",
      "Data custodian",
      "Data controller",
      "Data consumer"
    ],
    "correct": 2,
    "explanation": "Nicole is a data controller, sometimes called a data owner. She determines the reasons for processing personal information and how it is processed. A data steward carries out the intents of the data controller, data custodians are charged with safeguarding information, and data consumer is not a common data privacy role."
  },
  {
    "id": "SEC-D5-176",
    "domain": "5.0",
    "question": "Kirk's organization has been experiencing large-scale denial-of-service (DoS) attacks against their primary website. Kirk contracts with his Internet service provider to increase the organization's bandwidth and expands the server pool for the website to handle significantly more traffic than any of the previous DoS attacks. What type of risk management strategy has he employed?",
    "answers": [
      "Acceptance",
      "Avoidance",
      "Transfer",
      "Mitigation"
    ],
    "correct": 3,
    "explanation": "Kirk has mitigated the risk to his organization by increasing the resources targeted by the DoS attack in an attempt to ensure that the attack will not be successful. Acceptance would involve simply letting the attacks occur knowing they are likely to stop, avoidance might involve finding a way to ensure the attacks cannot occur, and transfer could leverage a third-party mirror or anti-DoS hosting service."
  },
  {
    "id": "SEC-D5-177",
    "domain": "5.0",
    "question": "After Angela left her last organization, she discovered that she still had access to her shared drives and could log in to her email account. What critical process was likely forgotten when she left?",
    "answers": [
      "An exit interview",
      "Job rotation",
      "Offboarding",
      "Governance"
    ],
    "correct": 2,
    "explanation": "Offboarding processes are conducted to ensure that accounts and access are removed and that materials, computers, and data are all recovered from the staff member when a member of an organization leaves. Exit interviews are an HR process, job rotation helps to prevent an individual from conducting fraudulent activities over time, and governance helps to manage and maintain data by establishing high-level control over the processes, procedures, and classification of the data an organization uses."
  },
  {
    "id": "SEC-D5-178",
    "domain": "5.0",
    "question": "Kelly's organization has created an incident response policy that outlines the high-level goals of the IR process. Next, she wants to create detailed documents that describe the steps to handle specific incident types like denial-of-service attacks. What document should she create?",
    "answers": [
      "Standards",
      "Playbooks",
      "Regulations",
      "Guidelines"
    ],
    "correct": 1,
    "explanation": "Playbooks provide detailed, step-by-step instructions for how to address specific topics like denial-of-service attacks. Standards describe the settings or requirements that the organization wishes to use. Regulations are law and are not set by the organization, and guidelines provide advice to organizations seeking to comply with the policy and standards."
  },
  {
    "id": "SEC-D5-179",
    "domain": "5.0",
    "question": "Mohammed wants to show his organization's senior leadership the impact of their risk management process over time. What risk reporting method effectively conveys this in an easily digestible visual format for senior leadership?",
    "answers": [
      "Ad hoc reports",
      "Risk registers",
      "Risk trend analysis",
      "Risk event reports"
    ],
    "correct": 2,
    "explanation": "Risk trend analysis shows the change in risks over time, allowing senior leadership to quickly and easily understand where risks are being addressed and where they may be increasing or not getting the attention they need. Ad hoc reports are used when risk information is needed in specific areas, typically in response to specific needs. Risk registers list an organization's risks in detail and are not a quick, visual tool. Risk event reports detail specific events related to risks."
  },
  {
    "id": "SEC-D5-180",
    "domain": "5.0",
    "question": "Presenting certification that a third-party organization has validated a vendor's practices against ISO 27001 is an example of what practice?",
    "answers": [
      "Internal audit",
      "Vendor assessment",
      "Vulnerability scanning",
      "Data inventory"
    ],
    "correct": 1,
    "explanation": "Third-party assessments of an organization's efforts to meet ISO standards is an example of vendor assessment. Internal audit would leverage internal staff to perform an audit, vulnerability scans use technical tools to identify vulnerabilities, and data inventories identify data and its locations and uses."
  },
  {
    "id": "SEC-D5-181",
    "domain": "5.0",
    "question": "What common limitation do IaaS vendors place on penetration testing by their customers?",
    "answers": [
      "It can only be done by third parties.",
      "It must be prescheduled.",
      "It can only be done by the customers themselves.",
      "Notification must be sent immediately after it occurs."
    ],
    "correct": 1,
    "explanation": "Vendors often ask that customers work with them to preschedule the testing so that they are aware of it. They typically do not place limitations on whether customers or third parties conduct the testing, and after-the-fact notification instead of prior notification is not a typical requirement."
  },
  {
    "id": "SEC-D5-182",
    "domain": "5.0",
    "question": "Chandra is providing guidance on recognizing phishing campaigns. Which of these is not a common way to recognize phishing emails?",
    "answers": [
      "It creates a false sense of urgency.",
      "The IP address of the recipient.",
      "The attachment is encrypted and password protected.",
      "The email claims that there is a problem with your password."
    ],
    "correct": 1,
    "explanation": "The IP address of the recipient is not a common way of identifying phishing emails. The source system, domain, or IP may indicate a malicious sender, however! Phishing often focuses on creating a false sense of urgency, uses encrypted and password-protected files to bypass filters, and may claim there is a problem with your password."
  },
  {
    "id": "SEC-D5-183",
    "domain": "5.0",
    "question": "Juan's company trains users to be cautious about revealing information about security controls, practices, configurations, and even the tools and software the company deploys. What is this practice known as?",
    "answers": [
      "Awareness training",
      "Social engineering",
      "An insider threat",
      "Operational security"
    ],
    "correct": 3,
    "explanation": "Operational security is the practice of educating users on the importance of protecting sensitive information, including security practices, configurations, and other details. Awareness training is a broad term describing all elements of security awareness. Social engineering is used by attackers to leverage human behaviors and practices for their own gain. Insider threats are threats created by those inside the organization."
  },
  {
    "id": "SEC-D5-184",
    "domain": "5.0",
    "question": "Mark's organization operates in the EU and sells products in multiple countries. It wants to determine its compliance requirements based on regulations that will impact it. Which of the following regions should it focus its review of legal implication on?",
    "answers": [
      "Local",
      "National",
      "Global",
      "All of the above"
    ],
    "correct": 3,
    "explanation": "An organization operating in the European Union (EU) and selling in multiple countries means that the company needs to assess legal implications on local, national, and global levels."
  },
  {
    "id": "SEC-D5-185",
    "domain": "5.0",
    "question": "What occurs when a vendor has a competing interest that could influence their behavior in a way that is not aligned with the best interests of one of their customers?",
    "answers": [
      "An insider threat",
      "A MOU violation",
      "A conflict of interest",
      "A SOW violation"
    ],
    "correct": 2,
    "explanation": "Conflicts of interest occur when an organization has a competing interest that could influence their behavior in a way that is not aligned with the best interest of a customer. Insider threats occur because an insider creates a problem or threat, either on purpose or inadvertently. MOU and SOW violations are both contractual violations and could be conflicts of interest but are not limited to that."
  },
  {
    "id": "SEC-D5-186",
    "domain": "5.0",
    "question": "Selma's organization allows individual business units to manage their cybersecurity needs and practices as they see fit. What type of governance structure have they adopted?",
    "answers": [
      "Centralized",
      "Board-based",
      "Committee-based",
      "Decentralized"
    ],
    "correct": 3,
    "explanation": "Decentralized governance allows individual business units to manage themselves rather than central organizations doing so. There is no board or committee described in the question."
  },
  {
    "id": "SEC-D5-187",
    "domain": "5.0",
    "question": "The US Treasury Department regulates banks and their behaviors, including security-related regulations. What term best describes this type of governance structure?",
    "answers": [
      "Government entity-based",
      "Shareholder driven",
      "Board-based",
      "Centralized"
    ],
    "correct": 0,
    "explanation": "The Treasury Department is a government entity, making this governance government entity-based. Shareholders and boards may play a role, but not via the Treasury Department. Centralized governance occurs inside the organization, not from an external entity."
  },
  {
    "id": "SEC-D5-188",
    "domain": "5.0",
    "question": "The company that Sandra wants to work with does not provide third-party audit statements. If Sandra wants to engage with them, what should she request as part of her vendor assessment process prior to signing a contract in order to have the most useful data available?",
    "answers": [
      "A right-to-audit clause",
      "A supply chain analysis",
      "Evidence of internal audits",
      "A due diligence statement"
    ],
    "correct": 2,
    "explanation": "Requesting evidence of internal audits and then assessing that evidence is the best option Sandra has. While a right-to-audit clause can be important in contracts, it would only be useful after the contract is signed, not prior to engagement. Supply chain analysis can be useful in specific circumstances, but nothing in the question indicates specific supply chain requirements or concerns. Due diligence is performed, not stated."
  },
  {
    "id": "SEC-D5-189",
    "domain": "5.0",
    "question": "Leigh wants to provide new users with information about her organization's security goals and high-level practices. What do organizations typically provide to accomplish this?",
    "answers": [
      "Audit reports",
      "Policy handbooks",
      "Runbooks",
      "User awareness training"
    ],
    "correct": 1,
    "explanation": "Policy handbooks are used to provide information about high-level security practices and goals. Audit reports may not be broadly available in an organization, runbooks are detailed how-to guides for processes or tasks, and user awareness training focuses on security awareness rather than high-level goals and policies."
  },
  {
    "id": "SEC-D5-190",
    "domain": "5.0",
    "question": "Jodi wants to prepare her staff to defend against social engineering. What should she invest in to help her staff address this threat?",
    "answers": [
      "EDR tools",
      "Awareness training",
      "A NGFW",
      "Security policies"
    ],
    "correct": 1,
    "explanation": "Awareness training remains the best protection against social engineering aimed at individual staff members. While awareness won't stop all attacks, protecting individuals requires them to be trained on a regular basis. Endpoint detection and response (EDR) and next-generation firewall (NGFW) are both technical tools that cannot stop social engineering directly, and security policies help the organization establish their approach to security but won't stop individual responses to social engineering directly."
  },
  {
    "id": "SEC-D5-191",
    "domain": "5.0",
    "question": "How do audits and examinations differ?",
    "answers": [
      "An examination is simpler and less costly.",
      "Audits are external and examinations are internal.",
      "Audits are internal and examinations are external.",
      "An audit is simpler and less costly."
    ],
    "correct": 0,
    "explanation": "Examinations are simpler, typically smaller in scope, and less costly than an audit. Both help provide assurance, but the standards applied are different."
  },
  {
    "id": "SEC-D5-192",
    "domain": "5.0",
    "question": "Evangeline wants to develop a security training program. What should she do first?",
    "answers": [
      "Determine how the training will be presented.",
      "Establish a budget.",
      "Review regulatory requirements for training.",
      "Assess the threats and risks the organization faces."
    ],
    "correct": 3,
    "explanation": "The first step in developing security training programs is to determine what risks and threats the organization faces. Once those are understood, an appropriate program can be created, including obtaining a budget, determining how training will be presented, and ensuring that regulatory requirements, if any, are met."
  },
  {
    "id": "SEC-D5-193",
    "domain": "5.0",
    "question": "Angelo is designing his organization's security governance groups and has created a committee. Which of the following is not a typical member of internal security governance committees?",
    "answers": [
      "Subject matter experts",
      "Regulators",
      "Management",
      "Internal legal counsel"
    ],
    "correct": 1,
    "explanation": "Internal governance committees do not typically include external entities like regulators. Subject matter experts (SMEs), management, and counsel are all commonly members of security governance committees."
  },
  {
    "id": "SEC-D5-194",
    "domain": "5.0",
    "question": "Dana wants to assess regulatory impacts on her organization's security policy. Which of the following is not a typical regulatory impact she will need to assess?",
    "answers": [
      "Global",
      "National",
      "Local",
      "Corporate"
    ],
    "correct": 3,
    "explanation": "Global, national, and local regulations may impact Dana's security policy, but corporations do not set regulations. Instead, they will influence the policy through contractual obligations."
  },
  {
    "id": "SEC-D5-195",
    "domain": "5.0",
    "question": "Marty wants to ensure that his security policies are up-to-date and effective. Which of the following data sources is least likely to be useful as he reviews his organization's security policies?",
    "answers": [
      "Security system logs and reports",
      "Staff feedback",
      "NDAs",
      "Review of regulations"
    ],
    "correct": 2,
    "explanation": "Feedback on policies from staff, integrating new and changed regulations, and validating reports from security tools are all common elements used to update security policies. Nondisclosure agreements (NDAs) seek to keep data secure through contractual obligations and are not a typical element in policy updates."
  },
  {
    "id": "SEC-D5-196",
    "domain": "5.0",
    "question": "What term describes a formal document that outlines the terms and details of an agreement between two organizations, including the roles and responsibilities each will have?",
    "answers": [
      "A statement of work",
      "A business partners agreement",
      "A memorandum of agreement",
      "A service level agreement"
    ],
    "correct": 2,
    "explanation": "A MOA, or memorandum of agreement, is a formal document that outlines the terms and details of an agreement between two organizations, including the roles and responsibilities each will have. A SOW, or statement of work, describes the specific work that will be under a master services agreement for an engagement. Service level agreements (SLAs) are written contracts that specify the conditions of service that will be provided by the vendor and the remedies available to the customer if the vendor fails to meet the SLA. Business partners agreements (BPAs) are used when organizations agree to do business with each other in a partnership."
  },
  {
    "id": "SEC-D5-197",
    "domain": "5.0",
    "question": "Victoria wants to understand a potential vendor's security practices. Which of the following is the simplest way for her to gather that information from multiple potential vendors?",
    "answers": [
      "Third-party audits",
      "Questionnaires",
      "Penetration testing",
      "OSINT"
    ],
    "correct": 1,
    "explanation": "Companies commonly send questionnaires to potential vendors to gather information about security practices prior to acquiring their products or engaging their services. This is a simpler method than requiring audits or penetration tests, and OSINT will not provide organizational answers about practices in most cases."
  },
  {
    "id": "SEC-D5-198",
    "domain": "5.0",
    "question": "What two things most frequently drive external compliance reporting?",
    "answers": [
      "Regulatory bodies and contractual obligations",
      "Internal and external audit",
      "Contractual requirements and board reporting",
      "Regulatory bodies and KPIs"
    ],
    "correct": 0,
    "explanation": "External reporting for compliance is most often driven by the need to meet regulations or contractual obligations. Audit assesses compliance rather than driving reporting, board reporting is considered internal, and KPIs are typically internal measures."
  },
  {
    "id": "SEC-D5-199",
    "domain": "5.0",
    "question": "Blaine wants to ensure that his organization consistently meets PCI DSS requirements. What should he implement to meet this goal?",
    "answers": [
      "Annual PCI DSS internal audits",
      "Automated compliance monitoring",
      "Annual PCI DSS external audits",
      "Compliance KPIs"
    ],
    "correct": 1,
    "explanation": "Automated compliance monitoring is a key tool when organizations want to ensure they are consistently meeting compliance targets. Annual audits do not ensure compliance during the year, whether they are internal or external. Compliance KPIs give organizations compliance targets and measures, but without underlying tools they are simply a way to know the state of compliance when they are checked or updated."
  },
  {
    "id": "SEC-D5-200",
    "domain": "5.0",
    "question": "Ujama is reviewing logs and notices that one of his users has repeatedly failed their login process. After calling the user, he discovers that the user had mistyped their password multiple times. What type of anomalous behavior should he classify this as?",
    "answers": [
      "Insider",
      "Risky",
      "Unintentional",
      "Unexpected"
    ],
    "correct": 2,
    "explanation": "Mistakes like this are classified as unintentional anomalous behavior. Risky and unexpected behaviors are the other two classifications that are part of the Security+ exam outline. Insider attacks or threats are intentional or unintentional malicious activity, which mistyping a password is not an example of."
  },
  {
    "id": "SEC-D5-201",
    "domain": "5.0",
    "question": "Common password management practices include which of the following?",
    "answers": [
      "Disabling MFA",
      "Reusing passwords across multiple sites",
      "Enabling password hints",
      "Changing passwords only when necessary"
    ],
    "correct": 3,
    "explanation": "NIST no longer recommends requiring password changes on a regular basis, and instead suggests that passwords only be changed when necessary. This helps to prevent password reuse and avoids influencing users to slightly modify passwords. Disabling MFA, reusing passwords, and using passwords hints are all practices that should be avoided."
  },
  {
    "id": "SEC-D5-202",
    "domain": "5.0",
    "question": "Mark is responsible for the execution of his organization's security awareness program. Why might he deploy multiple training methods like workshops, online training, and simulations as part of the training?",
    "answers": [
      "To meet compliance requirements",
      "To address learning preferences",
      "To decrease costs for training",
      "To meet KPIs"
    ],
    "correct": 1,
    "explanation": "Organizations often use multiple formats for awareness training to address learning preferences and styles. Compliance requirements typically do not specify how awareness is accomplished, just that it has occurred and can be validated. Multiple modes of training tend to increase costs rather than decreasing them, and KPIs for security awareness look at impact, not modes."
  },
  {
    "id": "SEC-D5-203",
    "domain": "5.0",
    "question": "Natasha wants to establish a vendor monitoring practice for her organization. What should she establish to ensure that her vendor is performing as expected?",
    "answers": [
      "A MOU",
      "Ongoing compliance audits",
      "Regulatory requirements",
      "KPIs"
    ],
    "correct": 3,
    "explanation": "Organizations typically establish KPIs (key performance indicators), which may be described in MSAs (master service agreements), SLAs (service level agreements), or SOWs (statements of work). These help to measure and monitor the vendor's performance. MOUs are used to document how organizations want to work together, not to establish performance measures. Compliance audits and regulatory requirements are only part of performance management."
  },
  {
    "id": "SEC-D5-204",
    "domain": "5.0",
    "question": "Mikayla is working remotely in a public space and has been trained to make sure that others cannot see her screen or keyboard. What term is used to describe this?",
    "answers": [
      "Insider threats",
      "Situational awareness",
      "Social engineering",
      "Unintentional risky behavior"
    ],
    "correct": 1,
    "explanation": "Staff should be trained to maintain situational awareness by keeping an eye on their environment and the behaviors of individuals around them. Insider threats are internal actors who undertake malicious actions. Social engineering uses human behaviors to conduct malicious activities, and unintentionally risky behavior is typically accidental threats caused by users."
  },
  {
    "id": "SEC-D5-205",
    "domain": "5.0",
    "question": "What data role is typically the most senior in an organization?",
    "answers": [
      "Data processor",
      "Data controller",
      "Data owner",
      "Data steward"
    ],
    "correct": 2,
    "explanation": "Data owners are typically the most senior data-related role in an organization and bear broad responsibility for the data, including oversight roles over stewards, controllers, and processors."
  },
  {
    "id": "SEC-D5-206",
    "domain": "5.0",
    "question": "Which of the following is not a common hybrid work environment security practice?",
    "answers": [
      "Use of VPNs",
      "Use of secure Wi-Fi networks",
      "Ensuring physical security",
      "Deploying security cameras"
    ],
    "correct": 3,
    "explanation": "Deploying security cameras is not a common hybrid work environment option. Use of VPNs, secure Wi-Fi, and appropriate physical security are all common options."
  },
  {
    "id": "SEC-D5-207",
    "domain": "5.0",
    "question": "Which of the following is not a common driver of external compliance reporting?",
    "answers": [
      "Contracts",
      "Regulation",
      "Reputation",
      "Licensing"
    ],
    "correct": 2,
    "explanation": "Contracts, regulations, and licensing all drive external compliance reporting. Reputations may be damaged if organizations are not compliant, but it does not drive reporting."
  },
  {
    "id": "SEC-D5-208",
    "domain": "5.0",
    "question": "Justin wants to have work done by a contractor with whom his organization has a master services agreement. What should he prepare to fully document the required work?",
    "answers": [
      "A work order",
      "A service level agreement",
      "A memorandum of understanding",
      "A memorandum of agreement"
    ],
    "correct": 0,
    "explanation": "Work orders (WO) and statements of work (SOWs) are used to document the specific tasks and deliverables that are performed under an MSA. SLAs, MOUs, and MOAs are not used for this purpose."
  },
  {
    "id": "SEC-D5-209",
    "domain": "5.0",
    "question": "What measure is used to describe the average functional lifespan of a device in use?",
    "answers": [
      "An RTO",
      "An MTTR",
      "An RPO",
      "An MTBF"
    ],
    "correct": 3,
    "explanation": "MTBF, or mean time between failure, describes the average time before a device will fail, or the average amount of time between failures of a system. A recovery time objective, or RTO, is set by organizations to describe how long restoring systems or services to normal function after a disruption can take. Mean time to repair, or MTTR, is the average time it takes to repair a system or device. A recovery point objective, or RPO, describes how much data can be lost in the event of an outage or issue."
  },
  {
    "id": "SEC-D5-210",
    "domain": "5.0",
    "question": "Jackie wants to use an ISO standard to help her select and implement information security controls and to develop information security management guidelines. Which ISO standard should she use?",
    "answers": [
      "ISO 27001",
      "ISO 27701",
      "ISO 27002",
      "ISO 31000"
    ],
    "correct": 2,
    "explanation": "ISO 27002 describes controls and helps select and implement controls while also providing guidance on developing information security management guidelines. ISO 27001 establishes control objectives for 14 different categories, including things like HR security, asset management, and operations security. ISO 27701 focuses on managing privacy controls, and ISO 31000 provides guidelines for risk management."
  },
  {
    "id": "SEC-D5-211",
    "domain": "5.0",
    "question": "Establishing requirements like the height of fences is part of what standard for most organizations?",
    "answers": [
      "Physical security",
      "Access control",
      "Business continuity",
      "Onboarding"
    ],
    "correct": 0,
    "explanation": "Physical security standards set requirements for physical security controls like fences, locks, doors, and cameras. Access control policies may be logical or physical control-based, but fence height is not an access control. Business continuity and onboarding don't impact fence height, nor do they rely on it."
  },
  {
    "id": "SEC-D5-212",
    "domain": "5.0",
    "question": "What organization typically elects an organization's board of directors in a public company?",
    "answers": [
      "The employees",
      "The CEO",
      "Shareholders",
      "All relevant stakeholders"
    ],
    "correct": 2,
    "explanation": "Boards are typically elected by shareholders. Employees, the CEO, and non-shareholders typically do not have the ability to elect or name members of the board."
  },
  {
    "id": "SEC-D5-213",
    "domain": "5.0",
    "question": "Greg wants to classify anomalous behavior he has observed. The behavior involves a user's workstation sending large volumes of data to an off-site web server. How should he classify this behavior?",
    "answers": [
      "Risky",
      "Unexpected",
      "Unintentional",
      "An insider threat"
    ],
    "correct": 1,
    "explanation": "Until he knows more details, Greg should classify this behavior as unexpected. Sending large volumes of data may be intentional, could be legitimate and thus not risky, and if it is intentional and part of business needs, would not be an insider threat."
  },
  {
    "id": "SEC-D5-214",
    "domain": "5.0",
    "question": "Amber is responsible for compliance with PCI DSS in her organization and wants to ensure that she meets ongoing compliance monitoring requirements. Which of the following options will best help her achieve ongoing compliance?",
    "answers": [
      "Conduct quarterly audits.",
      "Use compliance monitoring capabilities in scanning and management tools.",
      "Conduct regular training on compliance requirements.",
      "Require an auditor's attestation of compliance."
    ],
    "correct": 2,
    "explanation": "Using existing tools to monitor for changes that would move the organization out of compliance is a common practice to help ensure ongoing compliance. Quarterly audits are point-in-time checks and won't ensure ongoing compliance. Training helps to keep staff aware, but additional actions are required to ensure compliance, and attestation does not provide ongoing compliance, only a statement at a point in time."
  },
  {
    "id": "SEC-D5-215",
    "domain": "5.0",
    "question": "The third-party auditors that Dion hired for his organization have completed their audit. What action does the audit firm take after management acknowledgment is received from Dion's company?",
    "answers": [
      "Compliance reports are sent to third parties.",
      "Regulatory statements are sent to customers.",
      "Attestation is provided by the auditor.",
      "Follow-up vulnerability scans will validate findings."
    ],
    "correct": 2,
    "explanation": "After audits are acknowledged by management, the auditors will attest that the audit is complete and accurate based on their work and knowledge. Compliance and regulatory reporting may or may not happen depending on the reasons for the audit and the organization's needs. Once an audit is complete, further scans and other work may be conducted by the company but are not guaranteed."
  },
  {
    "id": "SEC-D5-216",
    "domain": "5.0",
    "question": "Latisha is conducting a security review and notices that one of her users consistently uses her organization's VPN from Chile while the employee is based in the United States. After reviewing logs, she notes that the user is sometimes logged in from both the US and the remote location in Chile, and believes that the user may be allowing a third party to access their VPN account to perform some or all of their job tasks. What type of threat most accurately describes this?",
    "answers": [
      "Anomalous",
      "Insider",
      "Social engineering",
      "Nation-state"
    ],
    "correct": 1,
    "explanation": "The employee at Latisha's company can be considered an insider threat because they have provided access to a third party. Most organizations will terminate employees who do this due to violations of their acceptable use policy (AUP). The behavior is anomalous, but an insider threat is a better description. No social engineering is evident, nor is a nation-state actor described."
  },
  {
    "id": "SEC-D5-217",
    "domain": "5.0",
    "question": "Marzita wants to respond to a phishing campaign that is sending links to malware to organizations. What effective tactic can she use to react to these campaigns quickly?",
    "answers": [
      "Deploy a WAF to block suspicious links.",
      "Subscribe to a threat feed and automatically block phishing campaign URLs.",
      "Manually block phishing URLs as they are reported by users.",
      "Implement user awareness training."
    ],
    "correct": 1,
    "explanation": "Using threat feeds to block phishing campaign URLs as they enter the feed is a proactive way to quickly respond. Web application firewalls (WAFs) are used to protect applications rather than as border devices to block outbound traffic. Manual blocks are commonly used but are slower to implement than threat feed-based responses. Conducting user awareness training is a best practice but doesn't directly respond to campaigns."
  },
  {
    "id": "SEC-D5-218",
    "domain": "5.0",
    "question": "Amanda discovers that a member of her organization's staff has installed a remote access Trojan on their accounting software server and has been accessing it remotely. What type of threat has she discovered?",
    "answers": [
      "Zero-day",
      "Insider threat",
      "Misconfiguration",
      "Weak encryption"
    ],
    "correct": 1,
    "explanation": "Amanda has discovered an insider threat. Insider threats can be difficult to discover, as a malicious administrator or other privileged user will often have the ability to conceal their actions or may actually be the person tasked with hunting for threats like this! This is not a zero-day--no vulnerability was mentioned, there was no misconfiguration since this was an intentional action, and encryption is not mentioned or discussed."
  },
  {
    "id": "SEC-D5-219",
    "domain": "5.0",
    "question": "Phil recently received an email claiming to be from HR with a link to a list of every employee's compensation attached. Phil clicks on it without checking the URL because he is curious about the pay that others in his department receive. How would this behavior be classified?",
    "answers": [
      "Risky",
      "Irresponsible",
      "Unexpected",
      "Unintentional"
    ],
    "correct": 0,
    "explanation": "Behavior like this would be considered risky, as clicking on unknown, unexpected links is a common way to succumb to a phishing attack. Unexpected typically describes behavior that isn't typical for the user, and we do now know if this user typically behaves this way. The Security+ exam outline doesn't use irresponsible as a category, and the click was intentional."
  },
  {
    "id": "SEC-D5-220",
    "domain": "5.0",
    "question": "What should Ben do if he wants to assess the initial state of his information security awareness?",
    "answers": [
      "Implement security awareness based on a standard like ISO 27001.",
      "Conduct a baseline analysis to determine his starting state.",
      "Implement security awareness based on NIST standards.",
      "Conduct a penetration test to determine how staff respond to security issues."
    ],
    "correct": 1,
    "explanation": "Establishing a baseline for security awareness is important so that Ben can determine what, if any, impact a program is having. This will drive KPIs as well as influence which actions and steps are taken to evolve the program. Implementing a security program is recommended by many standards, but they don't determine initial awareness state. Penetration tests can provide information about where issues lie but don't provide a broad baseline assessment either."
  },
  {
    "id": "SEC-D5-221",
    "domain": "5.0",
    "question": "During an incident investigation, Naomi notices that a second keyboard was plugged into a system in a public area of her company's building. Shortly after that event, the system was infected with malware, resulting in a data breach. What should Naomi look for in her in-person investigation?",
    "answers": [
      "A Trojan horse download",
      "A malicious USB cable or drive",
      "A worm",
      "None of the above"
    ],
    "correct": 1,
    "explanation": "Malicious tools like BadUSB can make a USB cable or drive look like a keyboard when they are plugged in. Malicious thumb drives have been used by penetration testers simply by dropping them in a parking lot near their intended target. A Trojan or a worm is a possibility, but the clue involving the keyboard would point to a USB device as the first place Naomi should look."
  },
  {
    "id": "SEC-D5-222",
    "domain": "5.0",
    "question": "Jill wants to train her users to appropriately respond to suspicious email messages. Which of the following will provide her organization with the most useful input from users?",
    "answers": [
      "Ask users to report the email to the email provider using a reporting button.",
      "Ask users to report the email to an internal security team.",
      "Ask users to delete the email to avoid further issues.",
      "Ask users to click on the message and links to explore the potential security issue."
    ],
    "correct": 1,
    "explanation": "A common practice is to report suspicious messages to an internal security team so that they can take action on phishing and other potential security issues. Reporting to third parties will not provide the same visibility, nor will deleting the messages. Asking users to click on messages works against security best practices!"
  },
  {
    "id": "SEC-D5-223",
    "domain": "5.0",
    "question": "Marcia wants to assess the effectiveness of her security awareness program. What should she do?",
    "answers": [
      "Establish and monitor awareness KPIs.",
      "Require a third-party awareness audit.",
      "Conduct regular surveys about security awareness.",
      "Track incident rates versus training participation."
    ],
    "correct": 0,
    "explanation": "Establishing security awareness KPIs, including incident rates, training uptake, responses to security awareness surveys, and other measurable indicators, is both the broadest and most useful option listed. Third-party awareness audits are not a typical method for doing this, and conducting surveys and tracking incident rates are both actions that will be part of common awareness KPIs."
  },
  {
    "id": "SEC-D5-224",
    "domain": "5.0",
    "question": "Myles wants to describe the impact of noncompliance with regulations on his organization's business. If his organization is not compliant, what impact is most likely to occur related to his customers?",
    "answers": [
      "Fines",
      "Contractual impacts",
      "Loss of license",
      "Sanctions"
    ],
    "correct": 1,
    "explanation": "Myles should be concerned about contractual impacts as part of his customer relationships. Noncompliance with regulations is likely to make him unable to fulfill contracts or to be in violation of contractual terms that require his company to be in compliance. Fines, loss of license, and sanctions may also occur, but they are less directly impactful to customers and are not guaranteed."
  },
  {
    "id": "SEC-D5-225",
    "domain": "5.0",
    "question": "Sabrina wants to train her users on password management best practices. Which of the following options will have the largest impact on her organization's password security?",
    "answers": [
      "Implementing biometrics authentication factors",
      "Conducting annual training on password best practices",
      "Adopting NIST password length and complexity standards",
      "Requiring staff to use an enterprise password manager"
    ],
    "correct": 3,
    "explanation": "An enterprise password manager can help to make it easier to use appropriate passwords without requiring users to memorize them. This results in less reuse, stronger passwords, and the ability to manage them, including preventing password reuse. Biometrics, training, and adopting NIST password complexity and length standards will not have the same broad impact."
  },
  {
    "id": "SEC-D5-226",
    "domain": "5.0",
    "question": "Jill wants to explain her organization's risks to senior management, but she knows that the risk register is lengthy and detailed. What type of document is commonly used to convey the most important high-level information found in a risk register to senior leaders?",
    "answers": [
      "A risk matrix",
      "An SLE report",
      "An ALE report",
      "A risk KPI list"
    ],
    "correct": 0,
    "explanation": "Risk matrices are often used to summarize risk registers for senior management. SLE and ALE reports are not common documents, although ALE and SLE reports are commonly used as part of quantitative risk assessment and reporting. Risk KPIs are used to track progress on risk management, not to provide a summary of a risk register."
  },
  {
    "id": "SEC-D5-227",
    "domain": "5.0",
    "question": "Which of the following best describes guidelines?",
    "answers": [
      "They outline the principles and rules that guide the execution of security efforts throughout the enterprise.",
      "They provide advice to organizations seeking to comply with the policies and standards.",
      "They provide mandatory requirements describing how an organization will carry out its information security policies.",
      "They are detailed, step-by-step processes that individuals and organizations must follow in specific circumstances."
    ],
    "correct": 1,
    "explanation": "Guidelines provide advice to organizations seeking to comply with policies and standards. Policies outline the principles and rules that guide the execution of security efforts throughout the enterprise. Standards provide mandatory requirements describing how an organization will carry out its information security policies."
  }
];
