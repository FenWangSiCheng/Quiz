import type { Question } from '../questions'

export const processAutomationQuestions: Question[] = [
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
  }
]