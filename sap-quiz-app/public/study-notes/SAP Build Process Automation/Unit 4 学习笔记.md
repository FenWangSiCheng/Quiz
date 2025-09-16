# Explaining Automations in an Overview
— Unit 4 学习笔记
（Automations Overview & Desktop Agent）

- 适用考试：SPA400（Business process automation，21%–30%）
- 单元构成与建议顺序：
  1) Identifying the Need for Automations
  2) Evaluating Automation Use Cases
  3) Boosting the Sales Order Management Process with an Automation
  4) Preparing the Desktop for Executing the Sales Order Management Automation using the Desktop Agent
- 官方页面：
  - Identifying Need for Automations：[链接](https://learning.sap.com/learning-journeys/create-processes-and-automations-with-sap-build-process-automation/identifying-the-need-for-automations_c90c6ee5-01c8-4c2f-bae6-377306fb48ce)
  - Evaluating Use Cases：[链接](https://learning.sap.com/learning-journeys/create-processes-and-automations-with-sap-build-process-automation/evaluating-automation-use-cases_bea7b479-f776-419e-8b90-2f3ecf036e08)
  - Boosting Sales Order with Automation：[链接](https://learning.sap.com/learning-journeys/create-processes-and-automations-with-sap-build-process-automation/boosting-the-sales-order-management-process-with-an-automation_d01370b2-c68a-4997-baea-d4c178d8eb2d)
  - Preparing Desktop Agent：[链接](https://learning.sap.com/learning-journeys/create-processes-and-automations-with-sap-build-process-automation/preparing-the-desktop-for-executing-the-sales-order-management-automation-using-the-desktop-agent_e040e6ea-f96b-4d0e-8ae0-9488a598ddd1)

---

## 1. 识别自动化需求（Identifying the Need for Automations）
- 自动化定位：RPA 通过“录制/编排”复刻低附加值的重复操作；结合 Chatbots、API、ML/AI 提升可用性与智能化。
- 典型信号：
  - 高频、规则驱动、可标准化、跨应用“搬运”（Swivel-chair）
  - 缺乏 API 或短期内无法提供接口
  - 手工流程错误率高、合规与审计压力大
- 商业价值（四个视角，概念表达）：效率/成本、质量/合规、员工体验、业务连续性与韧性。
- 参考：[Identifying Need for Automations](https://learning.sap.com/learning-journeys/create-processes-and-automations-with-sap-build-process-automation/identifying-the-need-for-automations_c90c6ee5-01c8-4c2f-bae6-377306fb48ce)

---

## 2. 评估自动化用例（Evaluating Automation Use Cases）
- 常见用例：
  - 通过连接器抽取数据并写入财务系统
  - 在大量 ERP 实例中检索发票号
  - 登录多套 ECC 收集采购申请并分发
- 用例类型与规模效应：
  - “隐藏的微型任务”单次收益低，但若每日频繁、多人执行，总体节省显著
- 约束与取舍：
  - 缺乏 API、预算/周期有限、系统迁移尚未可行 → RPA 作为桥接手段
- 评估维度（建议）：频度与批量、规则稳定性、界面可识别性、异常与错误影响、合规与审计要求、潜在 ROI。
- 参考：[Evaluating Use Cases](https://learning.sap.com/learning-journeys/create-processes-and-automations-with-sap-build-process-automation/evaluating-automation-use-cases_bea7b479-f776-419e-8b90-2f3ecf036e08)

---

## 3. 用自动化增强销售订单流程（Boosting the Sales Order with Automation）
- 场景目标：用 RPA 从 Excel 提取订单明细，减少触发表单字段、降低人为出错。
- Automation Editor 四区：
  - Toolbar（保存/测试/撤销等）
  - Workflow（步骤序列）
  - Right Panel（Activities/Data/Controls）
  - Console（设计/测试日志与变量）
- 关键步骤：
  1) 准备 Excel（列格式：订单号/金额/日期/目的地/期望交付/状态）
  2) 在流程中插入 Automation，配置输入/输出与环境变量
  3) Excel SDK 活动：打开、读取、映射、关闭
  4) 使用循环与条件定位指定订单（如匹配触发表单中的订单号）
  5) 测试、简化、发布与部署
- Desktop Agent 运行模式：
  - Unattended：全自动运行，无人干预
  - Attended：人机协同，辅助式执行
- 注意：Desktop Agent 不支持原生 macOS，需 Windows 或虚拟桌面。[Boosting Sales Order](https://learning.sap.com/learning-journeys/create-processes-and-automations-with-sap-build-process-automation/boosting-the-sales-order-management-process-with-an-automation_d01370b2-c68a-4997-baea-d4c178d8eb2d)

---

## 4. 桌面代理准备与执行（Preparing the Desktop Agent）
- 前置要求：
  - Windows 环境（或 Mac 上的 Windows 虚拟化）
  - 安装 Desktop Agent（含运行时组件、浏览器扩展按需）
  - 网络与权限：可访问 SBPA 租户、登录凭据、必要端口与白名单
- 项目层配置：
  - 环境变量（如 Excel 路径、工作表名）
  - 输入/输出参数映射与异常处理策略（重试、超时、补偿）
- 最佳实践：
  - 按环境区分 Agent（Dev/Test/Prod），建立变更与发布流程
  - 加强日志与可观测性，关键步骤打点
  - 失败截图/证据保存，便于定位
- 参考：[Preparing Desktop Agent](https://learning.sap.com/learning-journeys/create-processes-and-automations-with-sap-build-process-automation/preparing-the-desktop-for-executing-the-sales-order-management-automation-using-the-desktop-agent_e040e6ea-f96b-4d0e-8ae0-9488a598ddd1)

---

## 5. 术语速记（Glossary）
- RPA（Robotic Process Automation）：通过 UI/API 自动执行重复性任务
- Desktop Agent：本地机器人执行宿主，支持 Attended/Unattended
- Attended / Unattended：有人协同 / 无人值守
- Automation Editor：自动化设计器（Toolbar/Workflow/Panel/Console）
- Excel SDK：Excel 集成操作活动集合
- Data Mapping：数据映射，将表格列映射为结构化类型
- Loop & Condition：循环与条件控制，用于定位/筛选数据
- Environment Variables：环境变量，控制路径/参数/开关

---




## 附：Unit 4 Quiz – Explaining Automations in an Overview

- Source: [Knowledge quiz](https://learning.sap.com/learning-journeys/create-processes-and-automations-with-sap-build-process-automation/explaining-automations-in-an-overview_e64d90fa-fec1-34e2-b458-2fde75c19151)

1) The Desktop agent is an pre-installed component embedded in SAP Build Process Automation.
   - True / False  
   建议答案：False。  
   解释：Desktop Agent 需在本地（通常为 Windows）单独安装与配置，并非随 SBPA 云端预装组件。

2) What are the business benefits of SAP Build Process Automation? (Three correct answers)
   - Increase repetitive manual tasks  
   - Enable parallelization  
   - Reduce process execution time  
   - Ensure immediate savings  
   建议答案：Enable parallelization; Reduce process execution time; Ensure immediate savings。  
   解释：自动化可并行处理、缩短执行时长并带来成本节约；不会增加人工重复任务。

3) A process can be easily improved by adding a new web app to be able to fill in the necessary information in the appropriate form.
   - True / False  
   建议答案：False。  
   解释：改进流程优先使用表单、自动化与编排；从零构建 Web 应用并非“轻量改进”。

4) Which tool is needed to add a new automation to your business process?
   - Process Builder  
   - SAP Business Application Studio  
   - Automation Editor  
   - SAP Build Process Automation Homepage  
   建议答案：Automation Editor。  
   解释：新增与编辑自动化需在 Automation Editor 中完成；Process Builder 负责流程编排。

