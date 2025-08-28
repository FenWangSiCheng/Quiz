import type { Question } from '../questions'

export const buildAppsQuestions: Question[] = [
  // Unit 1 Questions
  {
    id: 32,
    type: 'multiple_choice',
    question: 'What are the three parts of a typical application?',
    options: ['Build configuration', 'User interface', 'Logic', 'Data'],
    correctAnswers: [1, 2, 3],
    explanation: '每个应用都由三个核心部分组成：用户界面负责与用户交互，数据提供应用所需的信息，逻辑控制应用的行为和响应。',
    difficulty: 'medium'
  },
  {
    id: 33,
    type: 'single_choice',
    question: 'Where can you see all your SAP Build projects?',
    options: ['Canvas', 'Lobby', 'Atrium', 'Build Hub'],
    correctAnswers: [1],
    explanation: 'SAP Build Lobby是管理所有SAP Build项目的中央位置，类似于项目的主控制台。',
    difficulty: 'easy'
  },
  {
    id: 34,
    type: 'multiple_choice',
    question: 'Which two fields can you enter while creating a new project?',
    options: ['Title', 'Name of home page', 'Description', 'Permissions'],
    correctAnswers: [0, 2],
    explanation: '在创建新的SAP Build Apps项目时，基本配置包括项目标题和项目描述，这两个字段帮助识别和说明项目用途。',
    difficulty: 'easy'
  },
  {
    id: 35,
    type: 'multiple_choice',
    question: 'What capabilities does SAP Build Apps provides to make it easy to build apps?',
    options: [
      'Dragging and dropping pre-built components for building the UI',
      'Defining with simple form connections to backend data',
      'Deploying your application to Microsoft Azure',
      'Creating logic to respond to user and app events'
    ],
    correctAnswers: [0, 1, 3],
    explanation: '这道题目总结了SAP Build Apps的三大核心能力，分别对应应用的三个组成要素：UI构建、数据集成和逻辑创建。注意SAP Build Apps主要部署到SAP BTP，而不是Microsoft Azure。',
    difficulty: 'medium'
  },

  // Unit 2 Questions
  {
    id: 36,
    type: 'true_false',
    question: 'The Marketplace is primarily for View Components.',
    options: ['True', 'False'],
    correctAnswers: [1],
    explanation: '市场不仅仅提供视图组件，还为逻辑元素和数据提供大量选择，是一个全面的组件生态系统。',
    difficulty: 'medium'
  },
  {
    id: 37,
    type: 'multiple_choice',
    question: 'Which binding types are available by default for a text component?',
    options: ['Static Value', 'Component properties', 'Data Item in repeat', 'Formula', 'Mapping'],
    correctAnswers: [0, 1, 3],
    explanation: '文本组件默认支持静态值、组件属性和公式这三种绑定类型，这些是最基础和常用的绑定方式。',
    difficulty: 'medium'
  },
  {
    id: 38,
    type: 'multiple_choice',
    question: 'Which of these predefined style classes of the button component exist in SAP Build Apps?',
    options: ['Primary Button', 'Secondary Button', 'Access Button', 'Danger Button'],
    correctAnswers: [0, 1, 3],
    explanation: 'SAP Build Apps中存在Primary、Secondary和Danger按钮样式类，这些是标准的设计系统样式分类。',
    difficulty: 'easy'
  },
  {
    id: 39,
    type: 'multiple_choice',
    question: 'Which components can be made dialable?',
    options: ['Button components', 'Card components', 'Only button and list components', 'Title components'],
    correctAnswers: [0, 1, 3],
    explanation: '在SAP Build Apps中，所有组件都可以被设置为可拨打的，不仅限于按钮和列表组件，这体现了平台的灵活性。',
    difficulty: 'medium'
  },

  // Unit 3 Questions
  {
    id: 40,
    type: 'single_choice',
    question: 'What is the main difference between an app variable and a page variable?',
    options: [
      'An app variable can have fewer data types than a page variable',
      'An app variable\'s value can be set once and not changed',
      'An app variable can be referenced anywhere, but a page variable can only be referenced in a particular page',
      'You can have only one app variable but many page variables'
    ],
    correctAnswers: [2],
    explanation: '这是应用变量和页面变量的根本区别，应用变量具有全局作用域可在任何地方引用，而页面变量只能在特定页面中引用。',
    difficulty: 'medium'
  },
  {
    id: 41,
    type: 'multiple_choice',
    question: 'What are the reasons for using variables?',
    options: [
      'To connect to the back-end data',
      'To store temporary data, such as user preferences',
      'To store data retrieved from back-end data source',
      'To define application logic'
    ],
    correctAnswers: [1, 2],
    explanation: '变量的两个核心使用目的是存储临时数据（如用户偏好）和存储从后端数据源检索的数据，这体现了变量作为数据容器的基本功能。',
    difficulty: 'medium'
  },
  {
    id: 42,
    type: 'single_choice',
    question: 'Which variable do you use to store information retrieved from a back-end system?',
    options: ['App variable', 'Page parameter', 'Page variable', 'Data variable'],
    correctAnswers: [3],
    explanation: '数据变量专门用于存储从后端系统检索的信息，这是其设计的主要目的和最佳实践用法。',
    difficulty: 'medium'
  },
  {
    id: 43,
    type: 'single_choice',
    question: 'Which of the following will guide you if you try to set a variable with a value that does not conform to its data type?',
    options: ['Marketplace', 'Lobby', 'Formula editor', 'Data tab'],
    correctAnswers: [2],
    explanation: '公式编辑器在设置不符合数据类型的变量值时提供类型检查和指导，帮助开发者避免数据类型不匹配的问题。',
    difficulty: 'medium'
  },

  // Unit 4 Questions
  {
    id: 44,
    type: 'single_choice',
    question: 'Which logical operation is \'true\' if two arguments are \'false\'?',
    options: ['OR', 'NOT', 'AND'],
    correctAnswers: [1],
    explanation: 'NOT运算在两个参数都为\'false\'时返回\'true\'。这是逻辑非运算符的基本特性，它将false值反转为true。',
    difficulty: 'medium'
  },
  {
    id: 45,
    type: 'true_false',
    question: 'Flow functions are used to perform mathematical calculations.',
    options: ['True', 'False'],
    correctAnswers: [1],
    explanation: '数学计算是在公式编辑器中使用公式函数执行的，而不是流程函数。流程函数主要用于创建应用逻辑和工作流程。',
    difficulty: 'medium'
  },
  {
    id: 46,
    type: 'multiple_choice',
    question: 'What are the different types of Logic Canvas in SAP Build Apps?',
    options: ['Process Logic Canvas', 'Page Logic Canvas', 'Global Logic Canvas', 'Component Logic Canvas'],
    correctAnswers: [1, 2, 3],
    explanation: 'SAP Build Apps提供三种类型的逻辑画布：页面逻辑画布用于页面级别逻辑、全局逻辑画布用于应用级别逻辑、组件逻辑画布用于组件级别逻辑。',
    difficulty: 'medium'
  },

  // Unit 5 Questions
  {
    id: 47,
    type: 'single_choice',
    question: 'Why would you need to define a data resource?',
    options: [
      'To define valid values for a variable',
      'To retrieve data from a back-end system',
      'To define the look and feel of the user interface',
      'To define the logic for app and user events'
    ],
    correctAnswers: [1],
    explanation: '数据资源的主要目的是从后端系统检索数据，这是数据资源连接的核心功能。',
    difficulty: 'medium'
  },
  {
    id: 48,
    type: 'true_false',
    question: 'The available data section in the Marketplace of SAP Build Apps is only used to test functions of the app.',
    options: ['True', 'False'],
    correctAnswers: [1],
    explanation: '市场中的可用数据部分不仅仅用于测试应用功能，它还提供可重用的数据资源，可以在实际项目中使用。',
    difficulty: 'medium'
  },
  {
    id: 49,
    type: 'single_choice',
    question: 'When setting up a data resource, you can define and enable its actions. Which one of the following actions you cannot enable?',
    options: ['Retrieve All Records', 'Get Record', 'Create Record', 'Update Record'],
    correctAnswers: [0],
    explanation: '"Retrieve All Records"不是可以启用的操作。可用的标准操作包括获取记录、创建记录和更新记录。',
    difficulty: 'medium'
  },
  {
    id: 50,
    type: 'single_choice',
    question: 'Which of the following is not a type of data resource?',
    options: ['OData', 'REST', 'SQL', 'On-device'],
    correctAnswers: [2],
    explanation: 'SQL不是SAP Build Apps中的数据资源类型。支持的类型包括OData、REST和设备存储（On-device）。',
    difficulty: 'medium'
  },
  {
    id: 51,
    type: 'single_choice',
    question: 'What is the benefit of using on-device storage versus an OData or REST data resource?',
    options: [
      'It has more data types',
      'It is available offline without backend calls',
      'It can hold more data',
      'It can be accessed by the UI'
    ],
    correctAnswers: [1],
    explanation: '设备存储相比OData或REST数据资源的主要优势是离线可用性，无需后端调用即可访问数据。',
    difficulty: 'medium'
  }
]