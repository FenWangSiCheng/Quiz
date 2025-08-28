import type { Question } from '../questions'

export const workZoneQuestions: Question[] = [
  {
    id: 22,
    type: 'true_false',
    question: 'The Site Menu in SAP Build Work Zone can be customized to include external links, improving access to non-SAP resources.',
    options: ['True', 'False'],
    correctAnswers: [0],
    explanation: 'SAP Build Work Zone的站点菜单支持Custom类型，可以链接外部URL和资源，提升对非SAP资源的访问能力。',
    difficulty: 'medium'
  },
  {
    id: 23,
    type: 'single_choice',
    question: 'What user settings can be configured from the SAP Build Work Zone header bar?',
    options: [
      'Only language preferences',
      'Theme or display settings and language and formatting preferences',
      'Only theme settings',
      'Application permissions only'
    ],
    correctAnswers: [1],
    explanation: '从SAP Build Work Zone顶栏可以配置主题/显示设置和语言/格式偏好等多种用户设置。',
    difficulty: 'easy'
  },
  {
    id: 24,
    type: 'single_choice',
    question: 'What is a key feature of Workpages in SAP Build Work Zone?',
    options: [
      'They are static and cannot be modified',
      'They can be customized with widgets and applications',
      'They only support text content',
      'They require coding skills to create'
    ],
    correctAnswers: [1],
    explanation: 'SAP Build Work Zone工作页面的关键特性是可以通过部件和应用程序进行定制，提供无代码页面构建体验。',
    difficulty: 'medium'
  },
  {
    id: 25,
    type: 'single_choice',
    question: 'What can be optionally enabled by a workspace administrator?',
    options: [
      'User authentication only',
      'Forums and Knowledge Base',
      'External system connections only',
      'Site Menu modifications'
    ],
    correctAnswers: [1],
    explanation: '工作区管理员可以选择性启用论坛和知识库功能，以支持团队协作和知识管理。',
    difficulty: 'medium'
  },
  {
    id: 26,
    type: 'true_false',
    question: 'SAP Build Work Zone supports the integration of applications solely through direct installation.',
    options: ['True', 'False'],
    correctAnswers: [1],
    explanation: 'SAP Build Work Zone支持多种集成方法，包括Manual Integration、Content Federation、Content Packages等，不仅仅是直接安装。',
    difficulty: 'hard'
  },
  {
    id: 27,
    type: 'single_choice',
    question: 'How many types of workspace visibility are available in SAP Build Work Zone?',
    options: [
      '2 types (Public, Private)',
      '3 types (My Workspace, Public, Private)',
      '4 types (Personal, Team, Public, Private)',
      'Only Public workspaces'
    ],
    correctAnswers: [1],
    explanation: 'SAP Build Work Zone提供3种工作区可见性类型：个人工作区(My Workspace)、公开工作区(Public)和私有工作区(Private)。',
    difficulty: 'medium'
  },
  {
    id: 28,
    type: 'single_choice',
    question: 'What is the primary purpose of Content Federation in SAP Build Work Zone?',
    options: [
      'To create new applications',
      'To integrate and expose content from external systems',
      'To manage user permissions only',
      'To backup data'
    ],
    correctAnswers: [1],
    explanation: 'Content Federation的主要目的是集成和暴露来自外部系统的内容，实现系统间的标准化连接。',
    difficulty: 'hard'
  },
  {
    id: 29,
    type: 'single_choice',
    question: 'How are UI Integration Cards typically deployed in SAP Build Work Zone?',
    options: [
      'Through manual coding only',
      'Via Content Packages as ZIP files',
      'Through database scripts',
      'By email attachments'
    ],
    correctAnswers: [1],
    explanation: 'UI Integration Cards通常通过内容包以ZIP文件形式部署，支持标准化打包和环境迁移。',
    difficulty: 'medium'
  },
  {
    id: 30,
    type: 'single_choice',
    question: 'Which user type has the highest level of privileges in SAP Build Work Zone?',
    options: [
      'End Users',
      'Key Users',
      'Administrators',
      'External Users'
    ],
    correctAnswers: [2],
    explanation: 'Administrators（管理员）拥有最高级别的权限，包括完整平台配置权限、全局设置管理和用户权限分配。',
    difficulty: 'easy'
  },
  {
    id: 31,
    type: 'single_choice',
    question: 'What does the Feed Updates feature in Workspaces provide?',
    options: [
      'RSS feed integration only',
      'Chronological interaction tracking and social collaboration',
      'Email notifications only',
      'File sharing capabilities'
    ],
    correctAnswers: [1],
    explanation: '工作区中的Feed Updates功能提供时间轴交互跟踪和社交化协作，类似社交媒体的信息流设计。',
    difficulty: 'medium'
  }
]