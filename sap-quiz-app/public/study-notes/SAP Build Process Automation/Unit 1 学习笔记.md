# Explaining SAP Build Process Automation
— Unit 1 学习笔记
（Explaining SAP Build Process Automation）

- 适用考试：SPA400（Business process automation，21%–30%）
- 单元构成与建议顺序：
  1) Describing the Path to SAP Build Process Automation（10m）
  2) Managing Business Processes with Business Process Management Software（40m）
  3) Reviewing the Roles Involved in Business Processes（5m）
  4) Evaluating the Different Working Modes in SAP Build Process Automation（10m）
- 官方页面：
  - Describing the Path…：[链接](https://learning.sap.com/learning-journeys/create-processes-and-automations-with-sap-build-process-automation/describing-the-path-to-sap-build-process-automation_b937f72a-1d68-4203-8c88-e5e03c210aa7)
  - Managing BPMS…：[链接](https://learning.sap.com/learning-journeys/create-processes-and-automations-with-sap-build-process-automation/managing-business-processes-with-business-process-management-software_a821bfc8-6a73-4c1b-9000-98e8d9bd1680)
  - Reviewing the Roles…：[链接](https://learning.sap.com/learning-journeys/create-processes-and-automations-with-sap-build-process-automation/reviewing-the-roles-involved-in-business-processes_d6b5b3e5-7dfc-4c98-905e-9f450b53afa4)
  - Evaluating Working Modes…：[链接](https://learning.sap.com/learning-journeys/create-processes-and-automations-with-sap-build-process-automation/evaluating-the-different-working-modes-in-sap-build-process-automation_c106dde3-fa5f-43cb-a576-8feac3dc6174)

---

## 1. 概览与定位（Describing the Path…）
- 演进：由 SAP Workflow Management（WFM）与 SAP Intelligent RPA 融合而来，提供面向公民开发者的新体验；既有 workflow/automation 工件可复用与迁移。
- 三大能力视角：
  - 流程（Process/Workflow）：以表单、人工任务、系统任务、决策等建模端到端流程。
  - 自动化（Automation/RPA）：录制/编排机器人，处理重复性任务，支援无人/有人模式。
  - 可复用构件与集成：决策表/业务规则、动作/目的地（APIs）、可观测性与监控。
- 选型指引（从企业起点出发）：
  - 有存量 WFM/iRPA：优先复用/迁移；在 Build 中整合与扩展。
  - 无存量：先查找内容商店（Store）的预构建包；不足再自建流程与自动化；必要时混合方案。
- 关键结论：SBPA 完整兼容既有资产，复用优先，自建补齐，混合落地。

---

## 2. BPM 与 BPMS（Managing Business Processes with BPMS）
- 为什么需要 BPMS：
  - 管理海量流程，提升可见性与可控性，防止“影子流程/低效协作/不可追溯”等问题。
- BPM 定义与生命周期（六阶段，闭环改进）：
  1) 识别/发现（Identify/Discover）
  2) 分析与建模（Analyze & Model/Design）
  3) 实施与集成（Implement/Integrate）
  4) 执行与协作（Execute/Orchestrate）
  5) 监控与度量（Monitor/Measure）
  6) 分析与优化（Analyze/Optimize）
- 收益（对考试的表达要点）：
  - 可见性与控制；瓶颈识别与降本；跨部门协作；敏捷性；组织效率。
- BPMS 核心要素 → 在 SAP Build 中的对应
  - 流程建模与运行时 → Process/Workflow、人工任务、系统任务
  - 表单与数据采集 → Forms、流程输入/输出变量
  - 规则与决策 → Decisions/Business Rules、分支条件
  - 自动化 → Automations（RPA 机器人、异常处理与重试）
  - 集成与连接 → Destinations/Actions、API 集成
  - 可观测性 → 实例监控、日志、指标与审计

---

## 3. 角色与职责（Reviewing the Roles…）
- 角色分组：Primary、Secondary、Stakeholders
- 关键角色与职责边界：
  - Process Owner：业务责任人，目标/合规/优化的最终责任；触发与审批改进。
  - Process Initiator：流程启动者（显式/隐式触发）。
  - Decision Maker：审批人/决策人，决定分支与结果。
  - Process Participants：执行流程任务（人或系统任务）。
  - Process Instance Reviewer：关注特定实例的运行质量。
  - Process Metrics Reviewer：关注总体流程指标与趋势。
- 实务建议：
  - 明确角色-任务映射与最小权限原则；定义审批门禁与升级路径；为 Reviewer 配置可观测性视图。

---

## 4. 工作模式（Evaluating Working Modes…）
- 可选工作模式（可单用或混合）：
  1) 内容商店（Store）导入预建包：LoB/行业/通用模板，配置少、上手快。
  2) 从零构建流程（Process Builder）：Forms、Approvals、Automations、Decisions、Actions、Controls 等。
  3) 复用 SAP Workflow Management（WFM）工作流：可在 BAS 新建/维护并部署到 Build。
  4) 复用 SAP Intelligent RPA（iRPA）项目：Cloud Studio 工件兼容，统一至 SBPA。
  5) 混合模式：Store + 自建流程 + 既有 WFM/iRPA 组合。
- 选择建议：
  - 优先复用（Store/存量资产）→ 不足再自建；
  - 流程复杂或需代码扩展时结合 BAS 工作流；
  - 涉及高重复性 UI/API 操作时叠加 RPA。

---

## 5. 术语速记（Glossary）
- BPM（Business Process Management）：识别-建模-执行-监控-优化的管理方法论。
- BPMS（BPM Software）：支持 BPM 生命周期的系统平台。
- Process/Workflow：端到端业务流程与任务编排。
- Forms：表单与数据采集构件。
- Decisions/Business Rules：规则与决策表，驱动条件分支与结论输出。
- Automations（RPA）：机器人自动化，支持有/无人模式。
- Destinations/Actions：到后端/第三方系统的连接与操作封装。
- Observability/Monitoring：实例跟踪、日志与指标面板。
- BAS（Business Application Studio）：用于扩展/开发工作流与集成的开发环境。
- Store（内容商店）：预构建流程/自动化包的“应用市场”。

---

## 附：Unit 1 Quiz – Explaining SAP Build Process Automation

- Source: [Explaining SAP Build Process Automation – Knowledge quiz](https://learning.sap.com/learning-journeys/create-processes-and-automations-with-sap-build-process-automation/explaining-sap-build-process-automation_ac70126c-36ad-3144-9421-8bf88ca9a202)

1) SAP Build Process Automation has more than one Working Mode.
   - True / False  
   建议答案：True。  
   解释：SBPA 存在多种工作模式（Store 导入、自建流程、复用 WFM、复用 iRPA、混合模式）。

2) Which of the following are stages in the Business Process Management practice? (Three correct answers)
   - Design  
   - Communication  
   - Implement  
   - Optimize  
   - Form Creation  
   建议答案：Design, Implement, Optimize。  
   解释：BPM 生命周期常见为识别/分析/设计/实施/执行/监控/优化等阶段；Communication 与 Form Creation 不是标准阶段。

3) The Decision Maker involved in a Business Process is responsible for taking decisions that influence the direction of the process.
   - True / False  
   建议答案：True。  
   解释：Decision Maker 负责审批/决策，直接影响流程分支与走向。

4) The Business Process Management (BPM) lifecycle consists of four stages that should be undertaken by a company.
   - True / False  
   建议答案：False。  
   解释：通常为六个及以上阶段（如识别、分析/设计、实施、执行、监控、优化），而非仅四个。

5) There's a possibility to combine SAP Workflow Management content with SAP Build Process Automation artifacts.
   - True / False  
   建议答案：True。  
   解释：SBPA 兼容并可复用 WFM 工作流与 iRPA 自动化资产，可与新建构件混合使用。

6) Which role is overall responsible for a process from the business perspective?
   - Decision Maker  
   - Process Participant  
   - Process Initiator  
   - Process Owner  
   建议答案：Process Owner。  
   解释：Process Owner 对流程的业务目标与合规整体负责。

7) Which of the following SAP BTP services are integrated into SAP Build Process Automation? (Two correct answers)
   - SAP Workflow Management  
   - SAP Conversational AI  
   - SAP Intelligent Robotic Process Automation  
   - SAP Cloud Transport Management  
   建议答案：SAP Workflow Management, SAP Intelligent Robotic Process Automation。  
   解释：SBPA 由 WFM 与 iRPA 演进融合而来；Conversational AI 与 CTMS 非其内置核心组件。
