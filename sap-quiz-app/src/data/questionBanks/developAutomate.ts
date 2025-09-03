import type { Question } from '../questions'

// Develop and automate with SAP Build (BTP110) 题库 - 来源于官方学习笔记Quiz
export const developAutomateQuestions: Question[] = [
  // Unit 1 Quiz - Introducing SAP Build
  {
    id: 112,
    type: 'single_choice',
    question: 'What is Governance Triad in the context of low-code platforms?',
    options: [
      'A model to facilitate communication between IT and business stakeholders',
      'A framework consisting of people, process, and technologies for governing low-code platforms',
      'A hierarchy within an IT department to manage low-code development',
      'A triage process for dealing with shadow IT issues'
    ],
    correctAnswers: [1],
    explanation: 'The Governance Triad is a framework consisting of people, process, and technologies specifically designed for governing low-code platforms. This represents the core concept of governance in low-code development.',
    difficulty: 'medium'
  },
  {
    id: 113,
    type: 'single_choice',
    question: 'What does the \'Process\' element of the Governance Triad involve?',
    options: [
      'Bypassing traditional IT processes to speed up development',
      'Creation of an IT Trust Blueprint, implementing best practices',
      'Only defining the stages of the development lifecycle',
      'Prioritizing speed of development over security and compliance issues'
    ],
    correctAnswers: [1],
    explanation: 'The \'Process\' element of the Governance Triad involves creating an IT Trust Blueprint and implementing best practices, not bypassing traditional processes or ignoring security and compliance requirements.',
    difficulty: 'medium'
  },
  {
    id: 114,
    type: 'multiple_choice',
    question: 'Which of the following components are part of SAP Build?',
    options: [
      'SAP Build Apps',
      'SAP Build Process Automation',
      'SAP Build Work Zone',
      'SAP Business Application Studio'
    ],
    correctAnswers: [0, 1, 2],
    explanation: 'SAP Build consists of three core components: Apps (application development), Process Automation (process automation), and Work Zone (workspace), while SAP Business Application Studio is not part of the SAP Build suite.',
    difficulty: 'medium'
  },
  {
    id: 115,
    type: 'multiple_choice',
    question: 'What are the benefits of SAP Build?',
    options: [
      'It enables citizen developers to create applications and automate processes without needing to have a computer science background',
      'Pre-built components can be used to digitalize and automate common repetitive tasks',
      'It can only integrate SAP systems',
      'Extensive programming knowledge is required to use SAP Build'
    ],
    correctAnswers: [0, 1],
    explanation: 'The main benefits of SAP Build are enabling citizen developers to create applications and automate processes without a computer science background, and providing pre-built components to digitalize and automate repetitive tasks. The platform supports both SAP and non-SAP system integration without requiring extensive programming knowledge.',
    difficulty: 'medium'
  },
  {
    id: 116,
    type: 'single_choice',
    question: 'Which of the following is a key responsibility of an IT-led Center of Excellence in the context of SAP Build?',
    options: [
      'Maintaining strict control over all low-code projects',
      'Discouraging the use of low-code solutions in the organization',
      'Safely scaling development, integrating Low-Code DevOps, fostering fusion development, and operationalizing governance',
      'Only providing technical support for professional developers'
    ],
    correctAnswers: [2],
    explanation: 'The key responsibility of an IT-led Center of Excellence is safely scaling development, integrating Low-Code DevOps, fostering fusion development, and operationalizing governance, rather than maintaining strict control or discouraging the use of low-code solutions.',
    difficulty: 'medium'
  },

  // Unit 2 Quiz - SAP Build Apps
  {
    id: 117,
    type: 'single_choice',
    question: 'What are the parts of an application that you can build?',
    options: [
      'User interface and the data with logic in both places',
      'Front end and back end',
      'Web and Mobile Applications and Application Backends',
      'All of the above'
    ],
    correctAnswers: [3],
    explanation: 'All the listed options represent different aspects of what can be built with SAP Build Apps - from UI/data/logic components to front-end/back-end architecture to various application types and backends.',
    difficulty: 'medium'
  },
  {
    id: 118,
    type: 'multiple_choice',
    question: 'What are the three main parts of application development, as understood after 40-50 years of development?',
    options: [
      'User interface',
      'Variables',
      'Data',
      'Logic',
      'Integration'
    ],
    correctAnswers: [0, 2, 3],
    explanation: 'The three fundamental parts of application development that have been established over decades are User Interface (how users interact), Data (information storage and management), and Logic (application behavior and business rules).',
    difficulty: 'medium'
  },
  {
    id: 119,
    type: 'single_choice',
    question: 'When building logic, what generally triggers the flow of actions?',
    options: [
      'Event',
      'Flow function',
      'Component property'
    ],
    correctAnswers: [0],
    explanation: 'Events are the primary triggers that initiate logic flows in SAP Build Apps. When events occur (like button clicks, page loads, etc.), they trigger the subsequent flow of actions and functions.',
    difficulty: 'medium'
  },
  {
    id: 120,
    type: 'multiple_choice',
    question: 'Which of the following are the benefits of using SAP Build Apps?',
    options: [
      'Comes with data tables defined and populated',
      'Includes preconfigured user interface components that you can drag and drop onto the canvas',
      'Lets you connect to SAP systems and external REST APIs',
      'Includes SAP S/4HANA system inside',
      'Enables writing JavaScript code for advanced users'
    ],
    correctAnswers: [1, 2, 4],
    explanation: 'SAP Build Apps provides drag-and-drop UI components, connectivity to various systems including SAP and REST APIs, and JavaScript capabilities for advanced customization. It does not include pre-populated data tables or embedded S/4HANA systems.',
    difficulty: 'medium'
  },
  {
    id: 121,
    type: 'single_choice',
    question: 'Where can you find additional components or flow functions?',
    options: [
      'Page selector',
      'Marketplace',
      'Data tab',
      'Properties pane',
      'Tree view'
    ],
    correctAnswers: [1],
    explanation: 'The Marketplace is the dedicated location where additional components and flow functions can be discovered and installed, extending the platform\'s capabilities beyond the core components.',
    difficulty: 'medium'
  },
  {
    id: 122,
    type: 'single_choice',
    question: 'What feature enables business users and developers to collaborate and build apps?',
    options: [
      'Component library',
      'Connectors to SAP systems',
      'Front ends',
      'Back ends',
      'Sharing'
    ],
    correctAnswers: [4],
    explanation: 'The Sharing feature enables collaboration between business users and developers by allowing project sharing and collaborative development workflows within SAP Build Apps.',
    difficulty: 'medium'
  },
  {
    id: 123,
    type: 'single_choice',
    question: 'What are the two primary SAP Build Apps artifacts you can create in the lobby?',
    options: [
      'Automation and website',
      'New components and new flow functions',
      'Web/mobile application and application back end'
    ],
    correctAnswers: [2],
    explanation: 'In the SAP Build Apps lobby, the two primary artifacts you can create are web/mobile applications (front-end) and application backends (back-end services and data management).',
    difficulty: 'medium'
  },
  {
    id: 124,
    type: 'single_choice',
    question: 'Where do you design how the application reacts to user input?',
    options: [
      'Logic pane',
      'Canvas',
      'Data tab',
      'Component pane'
    ],
    correctAnswers: [0],
    explanation: 'The Logic pane is where you design and configure how the application responds to user inputs and other events by creating logic flows and defining application behavior.',
    difficulty: 'medium'
  },

  // Unit 3 Quiz - SAP Build Process Automation
  {
    id: 125,
    type: 'multiple_choice',
    question: 'Which of the following are capabilities of SAP Build Process Automation?',
    options: [
      'Prebuilt Content Packages',
      'Task Automation',
      'Process Flexibility',
      'Corporate Design'
    ],
    correctAnswers: [0, 1, 2],
    explanation: 'SAP Build Process Automation provides prebuilt content packages for quick implementation, task automation capabilities for repetitive processes, and process flexibility for adapting to changing business needs. Corporate Design is not a core capability of the platform.',
    difficulty: 'medium'
  },
  {
    id: 126,
    type: 'true_false',
    question: 'You can automate end-to-end across application workflows with SAP Build Process Automation.',
    options: ['True', 'False'],
    correctAnswers: [0],
    explanation: 'SAP Build Process Automation enables end-to-end automation across different applications and systems, allowing organizations to create comprehensive workflows that span multiple business applications and processes.',
    difficulty: 'medium'
  },
  {
    id: 127,
    type: 'multiple_choice',
    question: 'Which of the following are benefits of SAP Build Process Automation?',
    options: [
      'Faster way to build workflows',
      'Innovate business processes',
      'Set up a collaboration platform',
      'Faster way to create web applications'
    ],
    correctAnswers: [0, 1],
    explanation: 'SAP Build Process Automation\'s primary benefits include providing a faster way to build and deploy workflows through visual tools, and enabling organizations to innovate their business processes. It is not primarily designed for collaboration platforms or web application development.',
    difficulty: 'medium'
  },
  {
    id: 128,
    type: 'true_false',
    question: 'The power of low-code empowers business experts to become professional developers.',
    options: ['True', 'False'],
    correctAnswers: [0],
    explanation: 'The low-code approach of SAP Build Process Automation empowers business experts and citizen developers to create automated processes and workflows without extensive coding knowledge, effectively enabling them to take on developer-like roles.',
    difficulty: 'medium'
  },
  {
    id: 129,
    type: 'true_false',
    question: 'In the monitoring section of the Lobby, you can check the details of deployed projects and configure agents.',
    options: ['True', 'False'],
    correctAnswers: [0],
    explanation: 'The monitoring section of the SAP Build Process Automation Lobby provides comprehensive monitoring capabilities, including checking details of deployed projects and configuring automation agents for process execution.',
    difficulty: 'medium'
  },
  {
    id: 130,
    type: 'true_false',
    question: 'A business process is a repetitive set of tasks completed to achieve a goal or outcome for a business.',
    options: ['True', 'False'],
    correctAnswers: [0],
    explanation: 'This is the accurate definition of a business process - it consists of repetitive tasks that are systematically completed to achieve specific business goals or outcomes, making it ideal for automation opportunities.',
    difficulty: 'medium'
  },

  // Unit 4 Quiz - SAP Build Work Zone
  {
    id: 131,
    type: 'true_false',
    question: 'SAP Build Work Zone only supports integrations into SAP Cloud.',
    options: ['True', 'False'],
    correctAnswers: [1],
    explanation: 'SAP Build Work Zone supports integrations with both SAP and third-party business applications in cloud and on-premise deployments. It is not limited to SAP Cloud only, but provides comprehensive integration capabilities across various deployment models.',
    difficulty: 'medium'
  },
  {
    id: 132,
    type: 'multiple_choice',
    question: 'In the context of fragmented user experiences, which of the following dimensions are outlined in the example?',
    options: [
      'Dashboards',
      'Employee Journeys',
      'Functional Services Centers',
      'Mobile Applications',
      'System Silos'
    ],
    correctAnswers: [1, 2, 4],
    explanation: 'The fragmented user experience challenges are typically categorized across Employee Journeys (user workflow experiences), Functional Services Centers (departmental service delivery), and System Silos (isolated system experiences) that SAP Build Work Zone aims to unify.',
    difficulty: 'medium'
  },
  {
    id: 133,
    type: 'multiple_choice',
    question: 'Which of the following layout options are applicable to workpages?',
    options: [
      '5-column grid layout',
      'Widget catalog',
      'Freestyle design',
      '6-column grid layout'
    ],
    correctAnswers: [1, 3],
    explanation: 'SAP Build Work Zone workpages support a 6-column grid layout system for structured page design and provide access to a widget catalog for adding various components and functionality to pages.',
    difficulty: 'medium'
  },
  {
    id: 134,
    type: 'multiple_choice',
    question: 'Where are workpages used in SAP Build Work Zone?',
    options: [
      'Home pages',
      'Workspaces',
      'Applications',
      'Dashboard'
    ],
    correctAnswers: [0, 1],
    explanation: 'Workpages are used as both home pages (providing personalized entry points for users) and within workspaces (enabling collaborative content creation and sharing among team members).',
    difficulty: 'medium'
  },
  {
    id: 135,
    type: 'multiple_choice',
    question: 'What are the different types of Workspaces?',
    options: [
      'Public',
      'Hybrid',
      'Private',
      'External',
      'My Workspace'
    ],
    correctAnswers: [0, 2, 3, 4],
    explanation: 'SAP Build Work Zone provides four types of workspaces: Public (open to all users), Private (restricted access), External (for external stakeholders), and My Workspace (personal workspace). There is no "Hybrid" workspace type.',
    difficulty: 'medium'
  },
  {
    id: 136,
    type: 'multiple_choice',
    question: 'Which editions of SAP Build Work Zone are available?',
    options: [
      'Standard',
      'Advanced',
      'Enterprise'
    ],
    correctAnswers: [0, 1],
    explanation: 'SAP Build Work Zone is available in two editions: Standard Edition (focused on individual users working independently) and Advanced Edition (offering more collaborative features). There is no Enterprise edition.',
    difficulty: 'medium'
  },
  {
    id: 137,
    type: 'true_false',
    question: 'SAP Build Work Zone users can be invited to view My Workspace.',
    options: ['True', 'False'],
    correctAnswers: [1],
    explanation: '"My Workspace" is a personal workspace that is private to the individual user. Other users cannot be invited to view My Workspace as it is designed for personal use and content organization.',
    difficulty: 'medium'
  }
]