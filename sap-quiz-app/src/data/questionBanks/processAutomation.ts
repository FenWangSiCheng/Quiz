import type { Question } from '../questions'

// SAP Build Process Automation 题库 - 来源于官方学习笔记Quiz
export const processAutomationQuestions: Question[] = [
  // Unit 1 Quiz - Explaining SAP Build Process Automation
  {
    id: 1,
    type: 'true_false',
    question: 'SAP Build Process Automation has more than one Working Mode.',
    options: ['True', 'False'],
    correctAnswers: [0],
    explanation: 'SBPA 存在多种工作模式（Store 导入、自建流程、复用 WFM、复用 iRPA、混合模式）。',
    difficulty: 'medium'
  },
  {
    id: 2,
    type: 'multiple_choice',
    question: 'Which of the following are stages in the Business Process Management practice?',
    options: ['Design', 'Communication', 'Implement', 'Optimize', 'Form Creation'],
    correctAnswers: [0, 2, 3],
    explanation: 'BPM 生命周期常见为识别/分析/设计/实施/执行/监控/优化等阶段；Communication 与 Form Creation 不是标准阶段。',
    difficulty: 'medium'
  },
  {
    id: 3,
    type: 'true_false',
    question: 'The Decision Maker involved in a Business Process is responsible for taking decisions that influence the direction of the process.',
    options: ['True', 'False'],
    correctAnswers: [0],
    explanation: 'Decision Maker 负责审批/决策，直接影响流程分支与走向。',
    difficulty: 'medium'
  },
  {
    id: 4,
    type: 'true_false',
    question: 'The Business Process Management (BPM) lifecycle consists of four stages that should be undertaken by a company.',
    options: ['True', 'False'],
    correctAnswers: [1],
    explanation: '通常为六个及以上阶段（如识别、分析/设计、实施、执行、监控、优化），而非仅四个。',
    difficulty: 'medium'
  },
  {
    id: 5,
    type: 'true_false',
    question: 'There\'s a possibility to combine SAP Workflow Management content with SAP Build Process Automation artifacts.',
    options: ['True', 'False'],
    correctAnswers: [0],
    explanation: 'SBPA 兼容并可复用 WFM 工作流与 iRPA 自动化资产，可与新建构件混合使用。',
    difficulty: 'medium'
  },
  {
    id: 6,
    type: 'single_choice',
    question: 'Which role is overall responsible for a process from the business perspective?',
    options: ['Decision Maker', 'Process Participant', 'Process Initiator', 'Process Owner'],
    correctAnswers: [3],
    explanation: 'Process Owner 对流程的业务目标与合规整体负责。',
    difficulty: 'medium'
  },
  {
    id: 7,
    type: 'multiple_choice',
    question: 'Which of the following SAP BTP services are integrated into SAP Build Process Automation?',
    options: ['SAP Workflow Management', 'SAP Conversational AI', 'SAP Intelligent Robotic Process Automation', 'SAP Cloud Transport Management'],
    correctAnswers: [0, 2],
    explanation: 'SBPA 由 WFM 与 iRPA 演进融合而来；Conversational AI 与 CTMS 非其内置核心组件。',
    difficulty: 'hard'
  },
  // Unit 2 Quiz - Reusing Existing SAP Build Process Automation Content
  {
    id: 8,
    type: 'true_false',
    question: 'The SAP Build Process Automation Store is a central component of SAP Build Process Automation that contains pre-built automations only.',
    options: ['True', 'False'],
    correctAnswers: [1],
    explanation: 'Store 不仅包含 automations，还提供 workflows/processes、process visibility dashboards、forms、actions 等可复用资产。',
    difficulty: 'medium'
  },
  {
    id: 9,
    type: 'multiple_choice',
    question: 'Which of the following artifacts are usually part of an added Live Process from the SAP Build Process Automation Store?',
    options: ['Decision', 'Preconfigured APIs', 'Visibility Scenario', 'Monitoring Metrics'],
    correctAnswers: [0, 2],
    explanation: 'Live Process 通常交付 Process Template、Decisions 与 Visibility Scenario 三类工件；"Preconfigured APIs""Monitoring Metrics"不属于标准工件名称。',
    difficulty: 'hard'
  },
  {
    id: 10,
    type: 'true_false',
    question: 'To be able to share an SAP Build Process Automation project with another developer, you always have to re-create the initial project.',
    options: ['True', 'False'],
    correctAnswers: [1],
    explanation: '支持 Import/Export，将项目导出为归档并在目标环境导入，无需重建初始项目。',
    difficulty: 'medium'
  },
  {
    id: 11,
    type: 'multiple_choice',
    question: 'Which of the following answers are benefits of SAP Build Process Automation?',
    options: ['Faster way to build workflows', 'To set up a collaboration platform', 'To innovate business processes', 'Faster way to create web applications'],
    correctAnswers: [0, 2],
    explanation: 'SBPA 的价值在于加速工作流与自动化构建、推动业务流程创新；并非通用协作平台，也非用于通用 Web 应用快速开发。',
    difficulty: 'medium'
  },
  // Unit 3 Quiz - Performing Basic Process Building
  {
    id: 12,
    type: 'single_choice',
    question: 'Where can an end user work on forms?',
    options: ['ChatBot', 'Monitor Workflow Application', 'My Inbox', 'Process Workspace'],
    correctAnswers: [2],
    explanation: '终端用户在 My Inbox 处理任务与表单；监控应用用于运维与可观测性。',
    difficulty: 'easy'
  },
  {
    id: 13,
    type: 'multiple_choice',
    question: 'What are the benefits of using forms?',
    options: ['Quick, simple, and easy way to create interactive UI', 'Create documents for the process', 'One layout, one access, and traceable action', 'Streamline approvals in the business process', 'Send e-mail templates to users'],
    correctAnswers: [0, 2, 3],
    explanation: 'Forms 提供低门槛交互界面、统一入口与可追溯操作，并支撑审批环节；邮件模版与文档生成不属于表单本身能力。',
    difficulty: 'medium'
  },
  {
    id: 14,
    type: 'true_false',
    question: 'With SAP Build Process Automation, you can create and amend Sales Order processes only.',
    options: ['True', 'False'],
    correctAnswers: [1],
    explanation: 'SBPA 可构建各类业务流程，不限于销售订单场景。',
    difficulty: 'easy'
  },
  {
    id: 15,
    type: 'single_choice',
    question: 'Which sequence of steps needs to be followed to deploy your created Process?',
    options: ['Create Process Project → Release Process Project → Design Process → Deploy Process Project', 'Create Process Project →Design Process → Release Process Project → Deploy Process Project', 'Release Process Project → Create Process Project → Design Process → Deploy Process Project', 'Release Process Project →Deploy Process Project → Create Process Project → Design Process'],
    correctAnswers: [1],
    explanation: '先创建与设计，再发布版本，然后部署到运行时。',
    difficulty: 'medium'
  },
  {
    id: 16,
    type: 'multiple_choice',
    question: 'Which types of forms can be added to your business process?',
    options: ['Trigger', 'Approval', 'Cancellation', 'Notification', 'Lobby'],
    correctAnswers: [0, 1, 3],
    explanation: '常见为触发表单、审批表单与通知表单；Cancellation 并非表单类型，Lobby 为项目主页。',
    difficulty: 'medium'
  },
  {
    id: 17,
    type: 'single_choice',
    question: 'Where can you use SAP Build Process Automation?',
    options: ['Only in sales departments', 'Only in the automotive industry', 'Only in banking', 'In every industry and line of business'],
    correctAnswers: [3],
    explanation: 'SBPA 面向通用业务流程编排与自动化，适用于各行业与 LoB。',
    difficulty: 'easy'
  },
  {
    id: 18,
    type: 'single_choice',
    question: 'After logging into the SAP Build Process Automation Homepage, where do you have to navigate to be able to create a process project?',
    options: ['Entrance', 'Monitor', 'Homepage', 'Lobby'],
    correctAnswers: [3],
    explanation: '在 Lobby 创建与管理 Process/Actions/Automation 项目。',
    difficulty: 'easy'
  },
  {
    id: 19,
    type: 'multiple_choice',
    question: 'What are you able to achieve with SAP Build Process Automation?',
    options: ['Automate faster', 'Simplify automation', 'Operate confidently', 'Keep more manual steps', 'Slow down a process'],
    correctAnswers: [0, 1, 2],
    explanation: 'SBPA 提升自动化速度、简化实施、增强可运维性；目标并非保留更多人工步骤或放慢流程。',
    difficulty: 'medium'
  },
  {
    id: 20,
    type: 'multiple_choice',
    question: 'What are the different ways in which forms can be used?',
    options: ['For sending e-mail', 'For approving a sales order', 'For sending a notification to the requestor', 'For accessing automation'],
    correctAnswers: [1, 2],
    explanation: '表单可用于审批与通知等人机交互场景；发送邮件与直接"访问自动化"并非表单用途本身。',
    difficulty: 'medium'
  },
  {
    id: 21,
    type: 'multiple_choice',
    question: 'Which configurations are necessary for process conditions?',
    options: ['Add a condition to the process', 'Configure If and else conditions', 'Define the process flow for different conditional paths', 'Map the condition input with process content', 'Add environment variables'],
    correctAnswers: [0, 1, 2],
    explanation: '条件配置包含添加条件节点、设置分支、并定义不同路径上的流程；环境变量不是必需项。',
    difficulty: 'hard'
  },
  // Unit 4 Quiz - Explaining Automations in an Overview
  {
    id: 22,
    type: 'true_false',
    question: 'The Desktop agent is an pre-installed component embedded in SAP Build Process Automation.',
    options: ['True', 'False'],
    correctAnswers: [1],
    explanation: 'Desktop Agent 需在本地（通常为 Windows）单独安装与配置，并非随 SBPA 云端预装组件。',
    difficulty: 'medium'
  },
  {
    id: 23,
    type: 'multiple_choice',
    question: 'What are the business benefits of SAP Build Process Automation?',
    options: ['Increase repetitive manual tasks', 'Enable parallelization', 'Reduce process execution time', 'Ensure immediate savings'],
    correctAnswers: [1, 2, 3],
    explanation: '自动化可并行处理、缩短执行时长并带来成本节约；不会增加人工重复任务。',
    difficulty: 'medium'
  },
  {
    id: 24,
    type: 'true_false',
    question: 'A process can be easily improved by adding a new web app to be able to fill in the necessary information in the appropriate form.',
    options: ['True', 'False'],
    correctAnswers: [1],
    explanation: '改进流程优先使用表单、自动化与编排；从零构建 Web 应用并非"轻量改进"。',
    difficulty: 'medium'
  },
  {
    id: 25,
    type: 'single_choice',
    question: 'Which tool is needed to add a new automation to your business process?',
    options: ['Process Builder', 'SAP Business Application Studio', 'Automation Editor', 'SAP Build Process Automation Homepage'],
    correctAnswers: [2],
    explanation: '新增与编辑自动化需在 Automation Editor 中完成；Process Builder 负责流程编排。',
    difficulty: 'medium'
  },
  // Unit 5 Quiz - Using Features of Advanced Process Building
  {
    id: 26,
    type: 'true_false',
    question: 'The Text Rule is a collection of input and output rule expressions in a tabular representation.',
    options: ['True', 'False'],
    correctAnswers: [0],
    explanation: 'Text Rule 以表格方式维护条件与结论（输入/输出表达式），便于业务人员可读与维护。',
    difficulty: 'medium'
  },
  {
    id: 27,
    type: 'single_choice',
    question: 'What do you have to verify before you run a business process that contains one or more automation in it?',
    options: ['The Desktop Agent settings and registration', 'The complete installation of a web server', 'The configuration of an email server', 'The integration of a chatbot with your business process'],
    correctAnswers: [0],
    explanation: '含自动化（RPA）的流程需本地 Desktop Agent 就绪并已注册。',
    difficulty: 'medium'
  },
  {
    id: 28,
    type: 'single_choice',
    question: 'Which of the following is the last step required to make defined Actions in an Actions project available in the Actions Library?',
    options: ['Publish', 'Release', 'Deploy', 'Test'],
    correctAnswers: [1],
    explanation: '在 Actions Project 中，完成开发后需 Release 才能在 Actions Library 中可用。',
    difficulty: 'medium'
  },
  {
    id: 29,
    type: 'multiple_choice',
    question: 'What additional configuration steps are required on an Action after you have added it to a process?',
    options: ['Map process content to Input parameters', 'Map Output parameters to process content', 'Define a business logic', 'Define a destination variable'],
    correctAnswers: [0, 1],
    explanation: '在流程中要完成输入映射（来自表单/决策/前序步骤）与输出映射（写回流程上下文）；业务逻辑与目的地在 Actions/Destination 侧定义。',
    difficulty: 'hard'
  },
  // Unit 6 Quiz - Using APIs for Integration
  {
    id: 30,
    type: 'true_false',
    question: 'In SAP Business Accelerator Hub, you can find the REST APIs for SAP Build Process Automation.',
    options: ['True', 'False'],
    correctAnswers: [0],
    explanation: 'SBPA 的 REST APIs 可在 SAP Business Accelerator Hub 中检索与查看文档。',
    difficulty: 'easy'
  },
  {
    id: 31,
    type: 'single_choice',
    question: 'What does a REST client do?',
    options: ['It simplifies technical communication with REST APIs', 'It helps you to automate high-value activities', 'It helps you to make business rules', 'It gives cloud application end-users access to the application'],
    correctAnswers: [0],
    explanation: 'REST Client 用于便捷调用与调试 REST API；非用于规则编制或面向终端用户的业务访问。',
    difficulty: 'medium'
  }
]