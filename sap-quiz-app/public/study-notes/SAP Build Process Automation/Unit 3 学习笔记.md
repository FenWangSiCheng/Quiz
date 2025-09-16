# Performing Basic Process Building in SAP Build Process Automation
— Unit 3 学习笔记
（Basic Process Building）

- 适用考试：SPA400（Business process automation，21%–30%）
- 单元构成与建议顺序：
  1) Introducing the Sales Order Management Process Use Case
  2) Creating the Process Project
  3) Digitalizing User Interactions with Forms
  4) Using Conditions to Control the Process Flow
  5) Releasing, Deploying, Running, and Monitoring the Process
- 官方页面：
  - Sales Order Use Case：[链接](https://learning.sap.com/learning-journeys/create-processes-and-automations-with-sap-build-process-automation/introducing-the-sales-order-management-process-use-case_ffdc8dd2-dad9-426d-bf3f-5b55acca6eb7)
  - Create Process Project：[链接](https://learning.sap.com/learning-journeys/create-processes-and-automations-with-sap-build-process-automation/creating-the-process-project_a3990392-d0e3-473d-9608-64b6629ed311)
  - Forms（Digitalize Interactions）：[链接](https://learning.sap.com/learning-journeys/create-processes-and-automations-with-sap-build-process-automation/digitalizing-user-interactions-with-forms_d0e78947-8cff-45f0-9b85-d82c1ed0394e)
  - Conditions（Control Flow）：[链接](https://learning.sap.com/learning-journeys/create-processes-and-automations-with-sap-build-process-automation/using-conditions-to-control-the-process-flow_df45b353-142d-42a3-91e4-4c8d13a1aace)
  - Release/Deploy/Run/Monitor：[链接](https://learning.sap.com/learning-journeys/create-processes-and-automations-with-sap-build-process-automation/releasing-deploying-running-and-monitoring-the-process_adf38db3-e91e-4c64-a3bb-5d2a8fb93325)

---

## 1. 用例导入（Sales Order Management）
- 现状问题：人工抄录、邮件往返、审批人查找分散、超时提醒困难、订单易延迟或丢失。
- 目标方案：以 SBPA 构建端到端流程——表单触发 → 条件分流（按金额/规则）→ 审批 → 通知 → 写入后端系统（如 S/4HANA）。
- 设计要点：
  - 明确业务数据模型（订单号、金额、期望交付日期、买家信息等）
  - 定义审批策略与阈值（如 ≥ 10,000 走两级审批）
  - 统一通知模版（通过表单或邮件任务）
  - 为后续可观测性埋点关键指标（状态、时延、通过率）
- 参考：[Sales Order Use Case](https://learning.sap.com/learning-journeys/create-processes-and-automations-with-sap-build-process-automation/introducing-the-sales-order-management-process-use-case_ffdc8dd2-dad9-426d-bf3f-5b55acca6eb7)

---

## 2. 创建 Process Project（Project 基础）
- Lobby：集中管理你创建/共享/导入/Store 导入的项目。
- 项目类型：
  - Business Process Project：创建、部署、运行流程（投资申请、发票审批、销售订单审批等）。
  - Actions Project：导入 OpenAPI（.json），封装外部系统能力供流程调用。
  - Task Automation：创建并运行机器人（RPA）。
- 起步步骤：
  1) 在 Lobby 新建 Business Process Project
  2) 创建 Process、Forms、Decisions 等工件
  3) 组织项目结构与命名，规划输入/输出变量
- 参考：[Create Process Project](https://learning.sap.com/learning-journeys/create-processes-and-automations-with-sap-build-process-automation/creating-the-process-project_a3990392-d0e3-473d-9608-64b6629ed311)

---

## 3. 数字化交互（Forms）
- 触发方式：
  - Event Trigger：监听外部系统事件触发流程/自动化
  - Form Trigger：通过公开链接或嵌入 Work Zone 启动流程
  - API Trigger：通过 API 启动流程（定义输入参数并映射）
- 表单类型：触发表单、审批表单、通知表单。
- 设计与映射：
  - 使用布局与字段（文本、下拉、复选、数字、日期、文件上传等）
  - 设置 Required/Read-only/格式校验
  - 明确 Inputs/Outputs，并与流程上下文映射
- 实操建议：复用字段组与命名规范；将“系统回填”字段设为只读；审批表单默认提供 Approve/Reject 动作与通知。
- 参考：[Digitalizing Forms](https://learning.sap.com/learning-journeys/create-processes-and-automations-with-sap-build-process-automation/digitalizing-user-interactions-with-forms_d0e78947-8cff-45f0-9b85-d82c1ed0394e)

---

## 4. 条件控制（Conditions）
- 作用：基于表单输入、上下文变量、决策结果进行条件分流与编排（如金额阈值、多级审批）。
- 要点：
  - 在流程变量中集中管理用于分流的关键字段
  - 条件表达清晰、可读性高（推荐命名变量表达业务语义）
  - 复杂策略外置到 Decisions，条件网关保持简洁
- 检查点：分支覆盖、默认分支安全、边界值（=、>、≥）一致性、空值与异常输入处理。
- 参考：[Using Conditions](https://learning.sap.com/learning-journeys/create-processes-and-automations-with-sap-build-process-automation/using-conditions-to-control-the-process-flow_df45b353-142d-42a3-91e4-4c8d13a1aace)

---

## 5. 发布、部署、运行与监控（Release/Deploy/Run/Monitor）
- 发布与部署：
  - 在项目中创建版本、发布变更、部署到运行时
  - 配置角色与访问（发起者、审批者等）
- 运行：
  - 通过触发方式启动实例（Form/API/Event）
  - 在收件人或收件箱中处理任务与审批
- 监控与可观测性：
  - 查看实例状态、日志、错误信息与时延
  - 结合 Visibility（若有）进行 KPI/里程碑监控与趋势分析
- 变更管理：小步发布、记录版本说明、验证回滚路径。
- 参考：[Release/Deploy/Run/Monitor](https://learning.sap.com/learning-journeys/create-processes-and-automations-with-sap-build-process-automation/releasing-deploying-running-and-monitoring-the-process_adf38db3-e91e-4c64-a3bb-5d2a8fb93325)

---

## 6. 术语速记（Glossary）
- Lobby：项目主页，集中查看与管理项目
- Business Process Project：流程编排项目类型
- Actions Project：封装外部 API 能力的项目
- Form Trigger / Event Trigger / API Trigger：三类流程触发方式
- Condition：条件网关/分支控制
- Release/Deploy：发布与部署流程版本到运行时
- Instance：流程实例；Task：流程任务

---


## 附：Unit 3 Quiz – Performing Basic Process Building in SAP Build Process Automation

- Source: [Knowledge quiz](https://learning.sap.com/learning-journeys/create-processes-and-automations-with-sap-build-process-automation/performing-basic-process-building-in-sap-build-process-automation_27858926-aaaa-3032-ad64-253da8b027d7)

1) Where can an end user work on forms?
   - ChatBot  
   - Monitor Workflow Application  
   - My Inbox  
   - Process Workspace  
   建议答案：My Inbox。  
   解释：终端用户在 My Inbox 处理任务与表单；监控应用用于运维与可观测性。

2) What are the benefits of using forms? (Three correct answers)
   - Quick, simple, and easy way to create interactive UI.  
   - Create documents for the process.  
   - One layout, one access, and traceable action.  
   - Streamline approvals in the business process.  
   - Send e-mail templates to users.  
   建议答案：Quick, simple, and easy way to create interactive UI; One layout, one access, and traceable action; Streamline approvals in the business process。  
   解释：Forms 提供低门槛交互界面、统一入口与可追溯操作，并支撑审批环节；邮件模版与文档生成不属于表单本身能力。[参考](https://learning.sap.com/learning-journeys/create-processes-and-automations-with-sap-build-process-automation/digitalizing-user-interactions-with-forms_d0e78947-8cff-45f0-9b85-d82c1ed0394e)

3) With SAP Build Process Automation, you can create and amend Sales Order processes only.
   - True / False  
   建议答案：False。  
   解释：SBPA 可构建各类业务流程，不限于销售订单场景。[参考](https://learning.sap.com/learning-journeys/create-processes-and-automations-with-sap-build-process-automation/creating-the-process-project_a3990392-d0e3-473d-9608-64b6629ed311)

4) Which sequence of steps needs to be followed to deploy your created Process?
   - Create Process Project → Release Process Project → Design Process → Deploy Process Project  
   - Create Process Project →Design Process → Release Process Project → Deploy Process Project  
   - Release Process Project → Create Process Project → Design Process → Deploy Process Project  
   - Release Process Project →Deploy Process Project → Create Process Project → Design Process  
   建议答案：Create Process Project → Design Process → Release Process Project → Deploy Process Project。  
   解释：先创建与设计，再发布版本，然后部署到运行时。[参考](https://learning.sap.com/learning-journeys/create-processes-and-automations-with-sap-build-process-automation/releasing-deploying-running-and-monitoring-the-process_adf38db3-e91e-4c64-a3bb-5d2a8fb93325)

5) Which types of forms can be added to your business process? (Three correct answers)
   - Trigger  
   - Approval  
   - Cancellation  
   - Notification  
   - Lobby  
   建议答案：Trigger; Approval; Notification。  
   解释：常见为触发表单、审批表单与通知表单；Cancellation 并非表单类型，Lobby 为项目主页。[参考](https://learning.sap.com/learning-journeys/create-processes-and-automations-with-sap-build-process-automation/digitalizing-user-interactions-with-forms_d0e78947-8cff-45f0-9b85-d82c1ed0394e)

6) Where can you use SAP Build Process Automation?
   - Only in sales departments  
   - Only in the automotive industry  
   - Only in banking  
   - In every industry and line of business  
   建议答案：In every industry and line of business。  
   解释：SBPA 面向通用业务流程编排与自动化，适用于各行业与 LoB。

7) After logging into the SAP Build Process Automation Homepage, where do you have to navigate to be able to create a process project?
   - Entrance  
   - Monitor  
   - Homepage  
   - Lobby  
   建议答案：Lobby。  
   解释：在 Lobby 创建与管理 Process/Actions/Automation 项目。[参考](https://learning.sap.com/learning-journeys/create-processes-and-automations-with-sap-build-process-automation/creating-the-process-project_a3990392-d0e3-473d-9608-64b6629ed311)

8) What are you able to achieve with SAP Build Process Automation? (Three correct answers)
   - Automate faster  
   - Simplify automation  
   - Operate confidently  
   - Keep more manual steps  
   - Slow down a process  
   建议答案：Automate faster; Simplify automation; Operate confidently。  
   解释：SBPA 提升自动化速度、简化实施、增强可运维性；目标并非保留更多人工步骤或放慢流程。[参考](https://learning.sap.com/learning-journeys/create-processes-and-automations-with-sap-build-process-automation/releasing-deploying-running-and-monitoring-the-process_adf38db3-e91e-4c64-a3bb-5d2a8fb93325)

9) What are the different ways in which forms can be used? (Two correct answers)
   - For sending e-mail  
   - For approving a sales order  
   - For sending a notification to the requestor  
   - For accessing automation  
   建议答案：For approving a sales order; For sending a notification to the requestor。  
   解释：表单可用于审批与通知等人机交互场景；发送邮件与直接“访问自动化”并非表单用途本身。[参考](https://learning.sap.com/learning-journeys/create-processes-and-automations-with-sap-build-process-automation/digitalizing-user-interactions-with-forms_d0e78947-8cff-45f0-9b85-d82c1ed0394e)

10) Which configurations are necessary for process conditions? (Three correct answers)
   - Add a condition to the process.  
   - Configure If and else conditions.  
   - Define the process flow for different conditional paths.  
   - Map the condition input with process content.  
   - Add environment variables.  
   建议答案：Add a condition to the process; Configure If and else conditions; Define the process flow for different conditional paths。  
   解释：条件配置包含添加条件节点、设置分支、并定义不同路径上的流程；环境变量不是必需项。[参考](https://learning.sap.com/learning-journeys/create-processes-and-automations-with-sap-build-process-automation/using-conditions-to-control-the-process-flow_df45b353-142d-42a3-91e4-4c8d13a1aace)


