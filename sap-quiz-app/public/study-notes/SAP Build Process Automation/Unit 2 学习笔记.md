# Reusing Existing SAP Build Process Automation Content
— Unit 2 学习笔记
（Reusing Existing Content & Hands-on Setup）

- 适用考试：SPA400（Business process automation，21%–30%）
- 单元构成与建议顺序：
  1) Subscribing to SAP Build Process Automation Using Booster in SAP BTP Free Tier
  2) Activating Process Automation Content（Store）
  3) Outlining the Concept of Process Variants in Live Process Content
  4) Importing and Exporting SAP Build Process Automation Projects
- 官方页面：
  - Subscribing via Booster（Free Tier）：[链接](https://learning.sap.com/learning-journeys/create-processes-and-automations-with-sap-build-process-automation/subscribing-to-sap-build-process-automation-using-booster-in-sap-btp-free-tier_defa8a0a-50d7-4a2a-902c-42648680d1e0)
  - Activating Store Content：[链接](https://learning.sap.com/learning-journeys/create-processes-and-automations-with-sap-build-process-automation/activating-process-automation-content_c9a67d2c-3b58-4288-8e5b-ccb71ca81010)
  - Live Process Variants：[链接](https://learning.sap.com/learning-journeys/create-processes-and-automations-with-sap-build-process-automation/outlining-the-concept-of-process-variants-in-live-process-content_d4e1edfb-7086-4165-bada-1619c19964b5)
  - Import & Export Projects：[链接](https://learning.sap.com/learning-journeys/create-processes-and-automations-with-sap-build-process-automation/importing-and-exporting-sap-build-process-automation-projects_e1768046-fbfc-4808-a092-4ffb10abdb85)

---

## 1. Booster 订阅与开通（Free Tier）
- 目标：通过 SAP BTP Booster 一键订阅并初始化 SAP Build Process Automation（Free Tier）。
- 前置与要点：
  - 准备 BTP 全局账户与子账户（选择可用区域），确保有 Free Tier 权益（Entitlements）。
  - 运行 Booster（快速引导）自动完成：订阅 SBPA、分配 Role Collection、配置目标子账户与实例绑定。
  - 常见角色集合：Admin、Developer、Viewer（登录后在 `Security → Role Collections` 分配至用户）。
- 参考练习：
  - Free Tier 账户教程：<https://developers.sap.com/tutorials/btp-free-tier-account.html>
  - 订阅与 Booster：<https://developers.sap.com/tutorials/spa-subscribe-booster.html>

---

## 2. 激活内容（Store：Activating Process Automation Content）
- Store 作用：集中提供 SAP 官方预构建内容（自动化、流程、可视化、Forms、Actions 等），免费可用，可作为模板快速启动。
- 典型场景：从 Excel 物料清单自动创建 S/4HANA 采购申请（PR）。先在 Store 搜索模板 → 激活 → 作为模板创建项目 → 按需微调参数与步骤。
- 实操任务流：
  1) 在 Store 浏览并定位需要的 Task Automation 内容
  2) 打开并导入内容到 Lobby
  3) 以模板创建新项目（Project from Template）
  4) 导出项目文件（便于共享/迁移）

---

## 3. Live Process：流程变体（Process Variants）
- Live Process 内容构成：
  - Process Template（含最小可行流程的预配置变体）
  - Decisions（业务规则，如“确定执行哪一流程变体”）
  - Visibility Scenario（预配置的可视化监控）
- 流程变体概念：
  - 以“步骤积木 + 约束（出现次数、位置）”方式生成不同用例的变体。
  - 例如：金额 < 10,000 仅 1 级审批；金额 ≥ 10,000 需 2 级审批。
  - 在无代码编辑器中拖拽配置 → 保存 → 激活。
- 建议：将通用步骤沉淀为模板；将分支逻辑外置在 Decisions 中，以便业务规则维护与复用。

---

## 4. 项目导入与导出（Importing & Exporting Projects）
- 业务需求：在不同 BTP 账号/租户之间共享、复用项目，无需从零重建。
- 步骤概览：
  - 导出：在源租户 Lobby 选择项目 → Export（下载归档文件）
  - 导入：在目标租户 Lobby → Import（上传归档文件）→ 校验依赖与目的地配置
- 实务提示：
  - 版本管理与命名规范，便于团队协作与回滚。
  - 跨账号迁移时，检查 Destinations、身份与权限映射、环境变量。

---

## 5. 术语速记（Glossary）
- Booster：BTP 引导工具，自动化订阅、服务实例、角色分配等初始配置。
- Entitlements：服务配额/权益，用于子账户启用服务与计划（含 Free Tier）。
- Role Collection：角色集合，在子账户层面将权限映射到用户。
- Store：预构建流程/自动化/可视化/Actions 内容市场。
- Live Process：以模板+规则+可视化交付的预构建流程包。
- Process Variant：在模板与约束下配置出的具体流程用例。
- Decisions/Business Rules：外置业务规则，决定路由/步骤/阈值等。
- Visibility Scenario：流程可视化监控场景（指标、里程碑、SLA）。
- Import/Export：项目归档的跨环境迁移与共享能力。




---

## 附：Unit 2 Quiz – Reusing Existing SAP Build Process Automation Content

- Source: [Knowledge quiz](https://learning.sap.com/learning-journeys/create-processes-and-automations-with-sap-build-process-automation/reusing-existing-sap-build-process-automation-content_635249e5-1569-344f-a585-2b0748e5f2bf)

1) The SAP Build Process Automation Store is a central component of SAP Build Process Automation that contains pre-built automations only.
   - True / False  
   建议答案：False。  
   解释：Store 不仅包含 automations，还提供 workflows/processes、process visibility dashboards、forms、actions 等可复用资产。[参考](https://learning.sap.com/learning-journeys/create-processes-and-automations-with-sap-build-process-automation/activating-process-automation-content_c9a67d2c-3b58-4288-8e5b-ccb71ca81010)

2) Which of the following artifacts are usually part of an added Live Process from the SAP Build Process Automation Store? (Two correct answers)
   - Decision  
   - Preconfigured APIs  
   - Visibility Scenario  
   - Monitoring Metrics  
   建议答案：Decision, Visibility Scenario。  
   解释：Live Process 通常交付 Process Template、Decisions 与 Visibility Scenario 三类工件；“Preconfigured APIs”“Monitoring Metrics”不属于标准工件名称。[参考](https://learning.sap.com/learning-journeys/create-processes-and-automations-with-sap-build-process-automation/outlining-the-concept-of-process-variants-in-live-process-content_d4e1edfb-7086-4165-bada-1619c19964b5)

3) To be able to share an SAP Build Process Automation project with another developer, you always have to re-create the initial project.
   - True / False  
   建议答案：False。  
   解释：支持 Import/Export，将项目导出为归档并在目标环境导入，无需重建初始项目。[参考](https://learning.sap.com/learning-journeys/create-processes-and-automations-with-sap-build-process-automation/importing-and-exporting-sap-build-process-automation-projects_e1768046-fbfc-4808-a092-4ffb10abdb85)

4) Which of the following answers are benefits of SAP Build Process Automation? (Two correct answers)
   - Faster way to build workflows.  
   - To set up a collaboration platform.  
   - To innovate business processes.  
   - Faster way to create web applications.  
   建议答案：Faster way to build workflows; To innovate business processes。  
   解释：SBPA 的价值在于加速工作流与自动化构建、推动业务流程创新；并非通用协作平台，也非用于通用 Web 应用快速开发。  
