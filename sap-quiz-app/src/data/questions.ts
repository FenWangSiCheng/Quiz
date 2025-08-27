// SAP Quiz 题库数据
export interface Question {
  id: number
  type: 'true_false' | 'single_choice' | 'multiple_choice'
  question: string
  options: string[]
  correctAnswers: number[]
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
}

export const questions: Question[] = [
  {
    id: 1,
    type: 'multiple_choice',
    question: 'Which of the following are stages in the Business Process Management practice?',
    options: ['Design', 'Communication', 'Implement', 'Optimize', 'Form Creation'],
    correctAnswers: [0, 2, 3],
    explanation: 'BPM生命周期包括设计(Design)、实施(Implement)、优化(Optimize)等阶段。Communication和Form Creation不是标准BPM阶段。',
    difficulty: 'medium'
  },
  {
    id: 2,
    type: 'true_false',
    question: 'SAP Build Process Automation requires coding skills to create business processes.',
    options: ['True', 'False'],
    correctAnswers: [1],
    explanation: 'SAP Build Process Automation是低代码/无代码平台，不需要编程技能就能创建业务流程。',
    difficulty: 'easy'
  },
  {
    id: 3,
    type: 'single_choice',
    question: 'What is the primary purpose of the SAP Build Process Automation Store?',
    options: [
      'To purchase SAP software',
      'To share and reuse process content and automations',
      'To store business data',
      'To manage user accounts'
    ],
    correctAnswers: [1],
    explanation: 'SAP Build Process Automation Store的主要目的是分享和重用流程内容及自动化组件。',
    difficulty: 'medium'
  },
  {
    id: 4,
    type: 'multiple_choice',
    question: 'Which components can be found in the SAP Build Process Automation Store?',
    options: [
      'Business Process templates',
      'Decision tables',
      'RPA bots',
      'Custom connectors',
      'User manuals'
    ],
    correctAnswers: [0, 1, 2, 3],
    explanation: 'Store中包含业务流程模板、决策表、RPA机器人、自定义连接器等组件，但不包含用户手册。',
    difficulty: 'hard'
  },
  {
    id: 5,
    type: 'true_false',
    question: 'Process templates in the Store can be directly deployed to production without modification.',
    options: ['True', 'False'],
    correctAnswers: [1],
    explanation: 'Store中的流程模板通常需要根据具体业务需求进行配置和修改后才能部署到生产环境。',
    difficulty: 'medium'
  },
  {
    id: 6,
    type: 'single_choice',
    question: 'In SAP Build Process Automation, what is a "Decision"?',
    options: [
      'A manual approval step',
      'An automated business rule evaluation',
      'A user interface form',
      'A data storage component'
    ],
    correctAnswers: [1],
    explanation: 'Decision是自动化的业务规则评估组件，用于根据预定义规则自动做出决策。',
    difficulty: 'medium'
  },
  {
    id: 7,
    type: 'multiple_choice',
    question: 'Which of the following are valid trigger types for SAP Build Process Automation processes?',
    options: [
      'API trigger',
      'Email trigger',
      'Schedule trigger',
      'Form trigger',
      'Database trigger'
    ],
    correctAnswers: [0, 1, 2, 3],
    explanation: 'SAP Build Process Automation支持API、邮件、计划和表单触发器，但不直接支持数据库触发器。',
    difficulty: 'hard'
  },
  {
    id: 8,
    type: 'true_false',
    question: 'RPA bots in SAP Build Process Automation can interact with both SAP and non-SAP applications.',
    options: ['True', 'False'],
    correctAnswers: [0],
    explanation: 'RPA机器人可以与SAP和非SAP应用程序交互，这是RPA技术的核心优势之一。',
    difficulty: 'easy'
  },
  {
    id: 9,
    type: 'single_choice',
    question: 'What is the main advantage of using pre-built content from the Store?',
    options: [
      'It is always free',
      'It reduces development time and effort',
      'It guarantees perfect performance',
      'It eliminates the need for testing'
    ],
    correctAnswers: [1],
    explanation: '使用Store中预构建内容的主要优势是减少开发时间和工作量，提高开发效率。',
    difficulty: 'easy'
  },
  {
    id: 10,
    type: 'multiple_choice',
    question: 'Which roles are typically involved in SAP Build Process Automation projects?',
    options: [
      'Process Owner',
      'Citizen Developer', 
      'IT Administrator',
      'End User',
      'Database Administrator'
    ],
    correctAnswers: [0, 1, 2, 3],
    explanation: '典型角色包括流程负责人、公民开发者、IT管理员和最终用户。数据库管理员通常不直接参与。',
    difficulty: 'medium'
  },
  {
    id: 11,
    type: 'true_false',
    question: 'Process visibility and monitoring are built-in features of SAP Build Process Automation.',
    options: ['True', 'False'],
    correctAnswers: [0],
    explanation: 'SAP Build Process Automation内置了流程可视性和监控功能，支持实时跟踪流程执行。',
    difficulty: 'easy'
  },
  {
    id: 12,
    type: 'single_choice',
    question: 'In the context of process automation, what does "Citizen Developer" refer to?',
    options: [
      'A professional software developer',
      'A business user who creates applications with low-code tools',
      'An IT support specialist',
      'A process consultant'
    ],
    correctAnswers: [1],
    explanation: 'Citizen Developer指使用低代码工具创建应用程序的业务用户，而非专业开发人员。',
    difficulty: 'medium'
  },
  {
    id: 13,
    type: 'multiple_choice',
    question: 'Which integration capabilities does SAP Build Process Automation provide?',
    options: [
      'REST API integration',
      'SOAP web services',
      'Database connectivity',
      'File system integration',
      'Blockchain integration'
    ],
    correctAnswers: [0, 1, 2, 3],
    explanation: 'SAP Build Process Automation提供REST API、SOAP、数据库和文件系统集成能力，但不直接支持区块链集成。',
    difficulty: 'hard'
  },
  {
    id: 14,
    type: 'true_false',
    question: 'All processes created in SAP Build Process Automation must follow a linear workflow pattern.',
    options: ['True', 'False'],
    correctAnswers: [1],
    explanation: 'SAP Build Process Automation支持复杂的工作流模式，包括并行处理、条件分支、循环等非线性模式。',
    difficulty: 'medium'
  },
  {
    id: 15,
    type: 'single_choice',
    question: 'What is the purpose of process variants in SAP Build Process Automation?',
    options: [
      'To create backup copies of processes',
      'To handle different business scenarios within the same process',
      'To test processes in development',
      'To archive old processes'
    ],
    correctAnswers: [1],
    explanation: '流程变体用于在同一个流程中处理不同的业务场景，提供灵活性。',
    difficulty: 'medium'
  },
  {
    id: 16,
    type: 'multiple_choice',
    question: 'Which of the following can be automated using RPA in SAP Build Process Automation?',
    options: [
      'Data entry tasks',
      'Report generation',
      'Email processing',
      'System navigation',
      'Strategic decision making'
    ],
    correctAnswers: [0, 1, 2, 3],
    explanation: 'RPA可以自动化数据录入、报表生成、邮件处理和系统导航等重复性任务，但不能进行战略决策。',
    difficulty: 'medium'
  },
  {
    id: 17,
    type: 'true_false',
    question: 'SAP Build Process Automation supports both attended and unattended RPA execution.',
    options: ['True', 'False'],
    correctAnswers: [0],
    explanation: 'SAP Build Process Automation同时支持有人值守(attended)和无人值守(unattended)的RPA执行模式。',
    difficulty: 'easy'
  },
  {
    id: 18,
    type: 'single_choice',
    question: 'In process modeling, what does a "Gateway" element represent?',
    options: [
      'The start of a process',
      'A decision point or parallel processing',
      'The end of a process',
      'A data storage location'
    ],
    correctAnswers: [1],
    explanation: '网关(Gateway)元素表示决策点或并行处理，用于控制流程的分支和合并。',
    difficulty: 'medium'
  },
  {
    id: 19,
    type: 'multiple_choice',
    question: 'Which security features are available in SAP Build Process Automation?',
    options: [
      'Role-based access control',
      'Data encryption',
      'Audit logging',
      'Single sign-on integration',
      'Biometric authentication'
    ],
    correctAnswers: [0, 1, 2, 3],
    explanation: '安全功能包括基于角色的访问控制、数据加密、审计日志和单点登录集成，但不包括生物识别认证。',
    difficulty: 'hard'
  },
  {
    id: 20,
    type: 'true_false',
    question: 'Process instances can be monitored and managed in real-time through the SAP Build Process Automation cockpit.',
    options: ['True', 'False'],
    correctAnswers: [0],
    explanation: 'SAP Build Process Automation控制台支持实时监控和管理流程实例。',
    difficulty: 'easy'
  },
  {
    id: 21,
    type: 'single_choice',
    question: 'What is the recommended approach for testing processes before production deployment?',
    options: [
      'Deploy directly to production',
      'Test only with synthetic data',
      'Use development and staging environments',
      'Test only critical paths'
    ],
    correctAnswers: [2],
    explanation: '推荐使用开发和测试环境进行充分测试后再部署到生产环境。',
    difficulty: 'easy'
  },
  // SAP Build Work Zone Questions (Unit 1)
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

// 工具函数：打乱数组顺序
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

// 工具函数：根据ID获取题目
export function getQuestionById(id: number): Question | undefined {
  return questions.find(q => q.id === id)
}