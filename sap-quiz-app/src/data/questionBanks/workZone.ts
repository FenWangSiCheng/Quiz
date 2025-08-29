import type { Question } from '../questions'

export const workZoneQuestions: Question[] = [
  {
    id: 22,
    type: 'true_false',
    question: 'Workpages in SAP Build Work Zone can only display content from SAP applications.',
    options: ['True', 'False'],
    correctAnswers: [1],
    explanation: '工作页面可以显示多种类型的内容，包括第三方应用程序、小部件和UI Integration Cards，不仅限于SAP应用程序。',
    difficulty: 'medium'
  },
  {
    id: 23,
    type: 'single_choice',
    question: 'What is the purpose of customizing the Site Menu in SAP Build Work Zone?',
    options: [
      'To integrate third-party applications only',
      'To provide a navigation framework that enhances user experience',
      'To restrict user access to applications',
      'To manage workspace templates'
    ],
    correctAnswers: [1],
    explanation: '定制站点菜单的目的是提供增强用户体验的导航框架，作为Work Zone的核心导航工具。',
    difficulty: 'medium'
  },
  {
    id: 24,
    type: 'true_false',
    question: 'SAP Build Work Zone allows for manual integration of third-party applications to enhance workspace functionality.',
    options: ['True', 'False'],
    correctAnswers: [0],
    explanation: 'SAP Build Work Zone支持通过手动集成方式添加第三方应用程序来增强工作空间功能。',
    difficulty: 'medium'
  },
  {
    id: 25,
    type: 'single_choice',
    question: 'How can applications enhance the functionality of SAP Build Work Zone?',
    options: [
      'By providing additional navigation options in the Site Menu',
      'Through customization of user settings and preferences',
      'By enriching workspaces and workpages with specialized functionalities',
      'By automating the creation of workspaces'
    ],
    correctAnswers: [2],
    explanation: '应用程序通过专门功能丰富工作空间和工作页面来增强SAP Build Work Zone的整体功能。',
    difficulty: 'medium'
  },
  {
    id: 26,
    type: 'single_choice',
    question: 'What user settings can be configured from the SAP Build Work Zone header bar?',
    options: [
      'Only language and formatting preferences',
      'Theme or display settings and language and formatting preferences',
      'Workspace template management',
      'Direct application integration settings'
    ],
    correctAnswers: [1],
    explanation: '从SAP Build Work Zone顶栏可以配置主题或显示设置以及语言和格式偏好等用户个人设置。',
    difficulty: 'easy'
  },
  {
    id: 27,
    type: 'true_false',
    question: 'The Site Menu in SAP Build Work Zone can be customized to include external links, improving access to non-SAP resources.',
    options: ['True', 'False'],
    correctAnswers: [0],
    explanation: 'SAP Build Work Zone的站点菜单支持Custom类型，可以链接外部URL和资源，提升对非SAP资源的访问。',
    difficulty: 'medium'
  },
  {
    id: 28,
    type: 'single_choice',
    question: 'What is a key feature of Workpages in SAP Build Work Zone?',
    options: [
      'They serve as the primary navigation interface',
      'They can be customized with widgets and applications',
      'They are automatically generated for each user',
      'They restrict access to external applications'
    ],
    correctAnswers: [1],
    explanation: 'SAP Build Work Zone工作页面的关键特性是可以通过部件和应用程序进行定制，提供无代码页面构建体验。',
    difficulty: 'medium'
  },
  {
    id: 29,
    type: 'true_false',
    question: 'All workspaces in SAP Build Work Zone are private by default and require an invitation for access.',
    options: ['True', 'False'],
    correctAnswers: [1],
    explanation: 'SAP Build Work Zone中的工作空间有三种类型：个人工作空间、公开工作空间和私有工作空间，不是所有都默认私有。',
    difficulty: 'medium'
  },
  {
    id: 30,
    type: 'multiple_choice',
    question: 'What can be optionally enabled by a workspace administrator in SAP Build Work Zone?',
    options: [
      'Forums',
      'Knowledge Base',
      'External user authentication',
      'Site Menu modifications'
    ],
    correctAnswers: [0, 1],
    explanation: '工作空间管理员可以选择性启用论坛和知识库功能，以支持团队协作和知识管理。',
    difficulty: 'medium'
  },
  {
    id: 31,
    type: 'true_false',
    question: 'SAP Build Work Zone supports the integration of applications solely through direct installation.',
    options: ['True', 'False'],
    correctAnswers: [1],
    explanation: 'SAP Build Work Zone支持多种集成方法包括手动集成、内容联邦和内容包等，不仅仅是直接安装。',
    difficulty: 'hard'
  }
]