import type { Question } from '../questions'

export const certificationQuestions: Question[] = [
  // SAP C_LCNC_2406 认证考试题目 - SAP Build Process Automation
  {
    id: 52,
    type: 'single_choice',
    question: 'Interacting with SAP Build Process Automation APIs, what does a REST API client do?',
    options: [
      'It simplifies technical communication.',
      'It automates process workflows.',
      'It provides visual representations of API responses.',
      'It ensures data encryption during API transactions.'
    ],
    correctAnswers: [0],
    explanation: '',
    difficulty: 'medium'
  },
  {
    id: 53,
    type: 'multiple_choice',
    question: 'How can you create a new Process Variant in Live Process Content?',
    options: [
      'By manually adjusting backend database entries',
      'By using the Process Variant Editor to modify preconfigured variants',
      'By downloading additional process components from the SAP Store',
      'By using the process editor to drag and drop process steps from the process template'
    ],
    correctAnswers: [1, 3],
    explanation: '',
    difficulty: 'hard'
  },
  {
    id: 54,
    type: 'multiple_choice',
    question: 'In SAP Build Process Automation, what are some characteristics of Actions projects?',
    options: [
      'They encapsulate APIs from various systems.',
      'They support versioning.',
      'They are used for direct API integrations.',
      'They are limited to SAP systems APIs.'
    ],
    correctAnswers: [0, 1],
    explanation: '',
    difficulty: 'medium'
  },
  {
    id: 55,
    type: 'single_choice',
    question: 'Using SAP Build Process Automation, what is the purpose of deploying a business process project?',
    options: [
      'To create a version of the project',
      'To edit the project',
      'To make the project available for others to use',
      'To release the project'
    ],
    correctAnswers: [2],
    explanation: '',
    difficulty: 'easy'
  },
  {
    id: 56,
    type: 'single_choice',
    question: 'What is a process variant in Live Process Content?',
    options: [
      'A process flow to map business rules',
      'A specific configuration of a process template',
      'A temporary file for testing purposes'
    ],
    correctAnswers: [1],
    explanation: '',
    difficulty: 'medium'
  },
  {
    id: 57,
    type: 'multiple_choice',
    question: 'What are some benefits of using SAP Build Process Automation?',
    options: [
      'Increased organizational efficiency',
      'Enhanced monitoring of authorizations',
      'Increased visibility into process breakdowns and failures',
      'Enhanced visibility into organizational activity',
      'Improved communication and collaboration across lines of business'
    ],
    correctAnswers: [0, 2, 4],
    explanation: '',
    difficulty: 'hard'
  },
  {
    id: 58,
    type: 'multiple_choice',
    question: 'Which functionality does the Process Builder tool in SAP Build Process Automation support?',
    options: [
      'Writing code manually to create processes',
      'Creation and use of forms and approval forms',
      'Building decisions or business rules',
      'Building CI/CD pipelines',
      'Construction of automations and bots'
    ],
    correctAnswers: [1, 2, 4],
    explanation: '',
    difficulty: 'medium'
  },
  {
    id: 59,
    type: 'multiple_choice',
    question: 'What are core elements of a Business Process Management (BPM) system?',
    options: [
      'Standardized tools to manage processes',
      'Faster identification of breakdowns and processes',
      'Real-time process execution and measurement',
      'Improved collaboration between departments',
      'Increased administrative work'
    ],
    correctAnswers: [0, 2, 3],
    explanation: '',
    difficulty: 'medium'
  },
  {
    id: 60,
    type: 'multiple_choice',
    question: 'What are some benefits of using Process Variants in SAP Build Process Automation?',
    options: [
      'Processes follow the same template without changes and exceptions.',
      'The complexity of underlying processes is hidden.',
      'Processes can be adapted to changing business requirements without coding.',
      'SAP Build applications are updated automatically.'
    ],
    correctAnswers: [1, 2],
    explanation: '',
    difficulty: 'medium'
  },
  {
    id: 61,
    type: 'single_choice',
    question: 'In SAP Build process automation, which file extension is assigned to exported projects?',
    options: ['.mtar', '.proj', '.zip', '.exp'],
    correctAnswers: [0],
    explanation: '',
    difficulty: 'easy'
  },
  {
    id: 62,
    type: 'single_choice',
    question: 'How does SAP Build Process Automation interact with SAP S/4HANA systems?',
    options: [
      'By replacing APIs with proprietary protocols',
      'By providing Actions projects for encapsulating API endpoints',
      'By integrating directly with SAP GUI for seamless data exchange'
    ],
    correctAnswers: [1],
    explanation: '',
    difficulty: 'medium'
  },
  {
    id: 63,
    type: 'single_choice',
    question: 'What is the SAP Build Process Automation Store?',
    options: [
      'A place to which users can upload their own automations.',
      'A place that offers prebuilt content free of charge.',
      'A place for SAP partners to sell content.',
      'A platform for purchasing SAP licenses.'
    ],
    correctAnswers: [2],
    explanation: '',
    difficulty: 'medium'
  },
  {
    id: 64,
    type: 'single_choice',
    question: 'What does a typical Live Process Content package include?',
    options: [
      'Live Process configurations',
      'A Process Template, Decisions, and a Visibility Scenario',
      'Instructions for configuring SAP S/4HANA'
    ],
    correctAnswers: [1],
    explanation: '',
    difficulty: 'medium'
  },
  // SAP C_LCNC_2406 认证考试题目 - SAP Build Work Zone
  {
    id: 65,
    type: 'multiple_choice',
    question: 'Where can users share feed updates including photos, comments, and other status updates with other users?',
    options: ['Tools', 'My Workspace', 'Workspace', 'Profile'],
    correctAnswers: [1, 3],
    explanation: '',
    difficulty: 'medium'
  },
  {
    id: 66,
    type: 'single_choice',
    question: 'What advantage does using Live Process Content offer?',
    options: [
      'Easy import, customization, and activation of content',
      'Free provisioning of SAP modules',
      'Creation of custom content without pre-configuration',
      'Automatic implementation of SAP modules'
    ],
    correctAnswers: [0],
    explanation: '',
    difficulty: 'medium'
  },
  {
    id: 67,
    type: 'single_choice',
    question: 'Where can knowledge base articles be created?',
    options: [
      'In the central Knowledge Base feature',
      'In My Workspace',
      'In the central Content Manager',
      'In the Knowledge Base feature of each workspace'
    ],
    correctAnswers: [3],
    explanation: '',
    difficulty: 'medium'
  },
  {
    id: 68,
    type: 'single_choice',
    question: 'Which mechanism is used to expose SAP Build Work Zone to an external system?',
    options: ['Gather and Track', 'Connect and Extend', 'Create and Read', 'Push and Pull'],
    correctAnswers: [1],
    explanation: '',
    difficulty: 'medium'
  },
  {
    id: 69,
    type: 'single_choice',
    question: 'Which pre-defined section of the site menu is used to automatically surface the information from the content manager?',
    options: ['Tools', 'Applications', 'Home', 'Workspaces'],
    correctAnswers: [3],
    explanation: '',
    difficulty: 'easy'
  },
  {
    id: 70,
    type: 'multiple_choice',
    question: 'In My Inbox, you can access content from which of the following components?',
    options: [
      'Notifications from other SAP solutions',
      'Workflows from SAP Build Process Automation',
      'Notifications from SAP SuccessFactors',
      'Workflows from SAP Build Work Zone'
    ],
    correctAnswers: [1, 2],
    explanation: '',
    difficulty: 'medium'
  },
  {
    id: 71,
    type: 'multiple_choice',
    question: 'What are some reasons companies would create custom mobile apps for SAP Build Work Zone?',
    options: [
      'To integrate with internal tools',
      'To support Android devices',
      'To support corporate branding & identity',
      'To customize UI Cards'
    ],
    correctAnswers: [0, 2],
    explanation: '',
    difficulty: 'medium'
  },
  {
    id: 72,
    type: 'single_choice',
    question: 'Which tool can you use to add business apps to the Applications menu?',
    options: ['Work Zone Configurator', 'Content Manager', 'Channel Manager', 'Administration Console'],
    correctAnswers: [0],
    explanation: '',
    difficulty: 'easy'
  },
  {
    id: 73,
    type: 'multiple_choice',
    question: 'What must you do to configure the Site Menu?',
    options: ['Customize layout', 'Access the site menu configuration', 'Create a custom template', 'Edit menu items'],
    correctAnswers: [1, 3],
    explanation: '',
    difficulty: 'medium'
  },
  {
    id: 74,
    type: 'single_choice',
    question: 'Which of the following do you use to integrate third-party apps with SAP Build Work Zone?',
    options: [
      'Digital Workplace Service (DWS) API',
      'SAP Build Apps Backend Configuration',
      'SAP BTP Cockpit',
      'SAP Integration Suite'
    ],
    correctAnswers: [3],
    explanation: '',
    difficulty: 'medium'
  },
  {
    id: 75,
    type: 'multiple_choice',
    question: 'Which of the following aspects are specific to the advanced edition of SAP Build Work Zone (but not the standard edition)?',
    options: [
      'Integrating SAP and third party business content',
      'Blending of business data and unstructured content',
      'Empowering end users to create content',
      'Unifying access to SAP business applications'
    ],
    correctAnswers: [0, 1],
    explanation: '',
    difficulty: 'hard'
  },
  {
    id: 76,
    type: 'single_choice',
    question: 'What mechanism is typically used to integrate applications from SAP S/4HANA into SAP Build Work Zone?',
    options: ['Export/Import', 'SAP BTP', 'Content Federation', 'SAP Business Application Studio'],
    correctAnswers: [2],
    explanation: '',
    difficulty: 'medium'
  },
  {
    id: 77,
    type: 'multiple_choice',
    question: 'Which of the following features can you enable as tabs in a workspace navigation bar?',
    options: ['Forums', 'Content', 'Workpages', 'Messages', 'Applications'],
    correctAnswers: [1, 2, 3],
    explanation: '',
    difficulty: 'medium'
  },
  {
    id: 78,
    type: 'multiple_choice',
    question: 'Out of the box, which Microsoft products are integrated with SAP Build Work Zone?',
    options: ['Microsoft Teams', 'Microsoft Power BI', 'Microsoft Sharepoint', 'Microsoft Excel'],
    correctAnswers: [0, 1],
    explanation: '',
    difficulty: 'easy'
  },
  {
    id: 79,
    type: 'multiple_choice',
    question: 'When working with home pages, which of the following aspects need to be considered?',
    options: [
      'Home pages are also workpages available only in the pre-defined \'Home\' area of the site menu',
      'Workpages outside of the menu entry \'Home\' are not related to administrative areas.',
      'The editor has different layout options compared to workpages inside workspaces.',
      'Home pages are always shown to all users.'
    ],
    correctAnswers: [0, 2],
    explanation: '',
    difficulty: 'hard'
  },
  {
    id: 80,
    type: 'single_choice',
    question: 'In SAP Build Work Zone, what can you use to enable notifications from third party apps?',
    options: ['Side-by-side extension', 'SAP Mobile Start Configuration', 'My Inbox', 'Launchpad Plugins'],
    correctAnswers: [0],
    explanation: '',
    difficulty: 'medium'
  },
  {
    id: 81,
    type: 'single_choice',
    question: 'Which extensibility option does SAP recommend you use for SAP Build Work Zone?',
    options: ['SAP Build Apps', 'SAP Integration Suite', 'UI Integration Cards', 'Cloud Connector to on-premise systems'],
    correctAnswers: [2],
    explanation: '',
    difficulty: 'medium'
  },
  {
    id: 82,
    type: 'single_choice',
    question: 'Home pages from which product are included in the site menu \'Home\' section after migration?',
    options: ['SAP Enterprise Portal', 'SAP Jam Collaboration', 'SAP SuccessFactors', 'SAP Cloud Portal Service'],
    correctAnswers: [0],
    explanation: '',
    difficulty: 'medium'
  },
  // SAP C_LCNC_2406 认证考试题目 - SAP Build Apps
  {
    id: 83,
    type: 'multiple_choice',
    question: 'Which of the following components are available in the Logic Canvas of SAP Build Apps?',
    options: ['Input Field', 'Card', 'Confirm', 'Show spinner'],
    correctAnswers: [2, 3],
    explanation: '',
    difficulty: 'medium'
  },
  {
    id: 84,
    type: 'multiple_choice',
    question: 'Which of the following sections are available in the SAP Build Apps Marketplace?',
    options: ['Data', 'View components', 'Integration', 'Security', 'Flow functions'],
    correctAnswers: [0, 1, 2],
    explanation: '',
    difficulty: 'medium'
  },
  {
    id: 85,
    type: 'single_choice',
    question: 'In SAP Build Apps, which function in the Formula Editor returns the current date?',
    options: ['GET_DATETIME_COMPONENT', 'FETCH_DATE', 'GET_DATE', 'NOW'],
    correctAnswers: [3],
    explanation: '',
    difficulty: 'easy'
  },
  {
    id: 86,
    type: 'multiple_choice',
    question: 'In SAP Build Apps, what are some classic data entities available?',
    options: ['OData Integration', 'RFC Integration', 'REST API Direct Integration', 'SOAP Integration'],
    correctAnswers: [0, 3],
    explanation: '',
    difficulty: 'medium'
  },
  {
    id: 87,
    type: 'multiple_choice',
    question: 'In SAP Build Apps, which target platforms can you select when you build applications?',
    options: ['Web App', 'IOS Mobile/Tablet', 'Windows', 'MacOS', 'Android Mobile/Tablet'],
    correctAnswers: [0, 1, 4],
    explanation: '',
    difficulty: 'easy'
  },
  {
    id: 88,
    type: 'multiple_choice',
    question: 'Which of the following can you do in the Launch tab of SAP Build Apps?',
    options: ['Debug apps', 'Preview apps', 'Build apps', 'Configure destinations'],
    correctAnswers: [1, 2],
    explanation: '',
    difficulty: 'easy'
  },
  {
    id: 89,
    type: 'single_choice',
    question: 'What is the purpose of encapsulating APIs in Actions projects?',
    options: [
      'To access API endpoints',
      'To limit the accessibility of APIs across different projects',
      'To expose APIs without filtering'
    ],
    correctAnswers: [1],
    explanation: '',
    difficulty: 'medium'
  },
  {
    id: 90,
    type: 'multiple_choice',
    question: 'In SAP Build Apps, in which of the following cases does the IS_EMPTY function return true?',
    options: ['IS_EMPTY(NAN)', 'IS_EMPTY(0)', 'IS_EMPTY("a")', 'IS_EMPTY("")', 'IS_EMPTY(undefined)'],
    correctAnswers: [0, 3, 4],
    explanation: '',
    difficulty: 'medium'
  },
  {
    id: 91,
    type: 'multiple_choice',
    question: 'In SAP Build Apps, which of the following are layout components?',
    options: ['List Divider', 'Dropdown', 'Container', 'Scroll View', 'Row'],
    correctAnswers: [2, 3, 4],
    explanation: '',
    difficulty: 'medium'
  },
  {
    id: 92,
    type: 'multiple_choice',
    question: 'What must you do to configure an Actions project for an SAP S/4HANA API?',
    options: [
      'Assign descriptive names to API endpoints.',
      'Configure OAuth authentication for API access.',
      'Upload the JSON file into the Actions project.',
      'Download the API specification JSON file.'
    ],
    correctAnswers: [1, 3],
    explanation: '',
    difficulty: 'medium'
  },
  {
    id: 93,
    type: 'single_choice',
    question: 'In SAP Build Apps, besides the Variable tab where can you find an overview of created variables?',
    options: ['Formula Editor', 'Tree View', 'Data Tab'],
    correctAnswers: [1],
    explanation: '',
    difficulty: 'easy'
  },
  {
    id: 94,
    type: 'multiple_choice',
    question: 'In SAP Build Apps, which of the following are part of the VARIABLES section of the Logic Canvas?',
    options: ['Set Backend Variable', 'Set App Variable', 'Set User Variable', 'Set Page Variable'],
    correctAnswers: [1, 3],
    explanation: '',
    difficulty: 'medium'
  },
  {
    id: 95,
    type: 'multiple_choice',
    question: 'In SAP Build Apps, which of the following can you set in the THEME tab?',
    options: ['Fonts', 'Visual Cloud Functions', 'UI Component Catalog', 'Colors'],
    correctAnswers: [0, 3],
    explanation: '',
    difficulty: 'easy'
  },
  {
    id: 96,
    type: 'single_choice',
    question: 'In SAP Build Apps, where can you configure the visibility of components?',
    options: ['Properties tab', 'Data tab', 'Style tab', 'Layout tab'],
    correctAnswers: [0],
    explanation: '',
    difficulty: 'easy'
  },
  {
    id: 97,
    type: 'single_choice',
    question: 'You want to use a variable value in multiple pages in an SAP Build Apps application. Which variable type can you use?',
    options: ['Translation', 'Page', 'Sensor', 'App'],
    correctAnswers: [3],
    explanation: '',
    difficulty: 'medium'
  },
  {
    id: 98,
    type: 'single_choice',
    question: 'Which function call returns true?',
    options: ['IS_EMAIL(@sap.com)', 'IS_EMAIL("@sap.com")', 'IS_EMAIL("test@sap.com")', 'IS_EMAIL(test@sap.com)'],
    correctAnswers: [2],
    explanation: '',
    difficulty: 'easy'
  },
  {
    id: 99,
    type: 'single_choice',
    question: 'In SAP Build Apps, besides data and variables, what else can you use to bind variables and data to components?',
    options: ['JavaScript', 'Trigger Event', 'Formula'],
    correctAnswers: [2],
    explanation: '',
    difficulty: 'medium'
  },
  {
    id: 100,
    type: 'single_choice',
    question: 'In SAP Build Apps, the data type \'Color\' is part of which data type group?',
    options: ['Text Types with Specific Format', 'Simple types', 'Reference types', 'Complex types'],
    correctAnswers: [0],
    explanation: '',
    difficulty: 'medium'
  },
  {
    id: 101,
    type: 'single_choice',
    question: 'When using Actions projects, why must you create a Destination?',
    options: [
      'To define the technical address of the remote system',
      'To obfuscate API endpoint details from unauthorized users',
      'To limit the API calls made by Actions projects'
    ],
    correctAnswers: [0],
    explanation: '',
    difficulty: 'medium'
  },
  {
    id: 102,
    type: 'multiple_choice',
    question: 'While creating the collection of data records for a Data variable in SAP Build Apps, which of the following are available?',
    options: ['Annotation extensions', 'Paging', 'User access permissions', 'Filter condition'],
    correctAnswers: [1, 3],
    explanation: '',
    difficulty: 'medium'
  },
  {
    id: 103,
    type: 'single_choice',
    question: 'In SAP Build Apps, which function returns the number of items in a list?',
    options: ['COUNT', 'LENGTH', 'MAX', 'SUM'],
    correctAnswers: [1],
    explanation: '',
    difficulty: 'easy'
  },
  // SAP C_LCNC_2406 认证考试题目 - 治理和最佳实践
  {
    id: 104,
    type: 'single_choice',
    question: 'Which role is NOT part of the \'People\' component of the Governance Triad?',
    options: ['External vendors', 'IT professionals', 'Citizen developers'],
    correctAnswers: [0],
    explanation: '',
    difficulty: 'medium'
  },
  {
    id: 105,
    type: 'single_choice',
    question: 'What can citizen developers do with SAP Build?',
    options: [
      'Build integration flows.',
      'Work on backend systems and server management.',
      'Build applications and automate processes.',
      'Configure role collections.'
    ],
    correctAnswers: [2],
    explanation: '',
    difficulty: 'easy'
  },
  {
    id: 106,
    type: 'single_choice',
    question: 'What is the purpose of the prebuilt Digital Center of Excellence Toolkit for SAP Build?',
    options: [
      'To provide professional developers with coding templates.',
      'To enforce low-code coding standards.',
      'To help IT administrators manage and collaborate with citizen developers.'
    ],
    correctAnswers: [2],
    explanation: '',
    difficulty: 'medium'
  },
  {
    id: 107,
    type: 'multiple_choice',
    question: 'What are potential disadvantages of shadow IT in low-code development projects?',
    options: ['Compliance issues', 'Faster implementation', 'Higher autonomy of low-code developers', 'Security risks'],
    correctAnswers: [0, 3],
    explanation: '',
    difficulty: 'medium'
  },
  {
    id: 108,
    type: 'single_choice',
    question: 'Why does SAP recommend IT governance for citizen development?',
    options: [
      'To ensure applications are secure, scalable, and compliant with corporate standards.',
      'To centralize control and decision making within low-code development.',
      'To exercise financial control over all software development projects.'
    ],
    correctAnswers: [0],
    explanation: '',
    difficulty: 'medium'
  },
  {
    id: 109,
    type: 'multiple_choice',
    question: 'What does the \'Tools and Technologies\' component of the Governance Triad include?',
    options: [
      'Set up low-code/no-code platforms.',
      'Establish physical IT infrastructure.',
      'Adopt extensible DevOps practices.',
      'Manage access and authorization.'
    ],
    correctAnswers: [0, 2],
    explanation: '',
    difficulty: 'medium'
  },
  {
    id: 110,
    type: 'single_choice',
    question: 'What does the \'Process\' component of the Governance Triad involve?',
    options: [
      'Develop marketing strategies.',
      'Procure hardware.',
      'Create an IT trust blueprint.',
      'Set up financial guidelines for project budgeting.'
    ],
    correctAnswers: [2],
    explanation: '',
    difficulty: 'medium'
  },
  {
    id: 111,
    type: 'multiple_choice',
    question: 'Which governance capabilities does SAP Build offer?',
    options: [
      'Limit the development to predefined templates.',
      'Establish eligibility rules for citizen developers.',
      'Provide prebuilt artifacts and use case content packages.',
      'Integrate CI/CD into development processes.',
      'Implement guardrails with built-in security.'
    ],
    correctAnswers: [1, 2, 4],
    explanation: '',
    difficulty: 'hard'
  }
]