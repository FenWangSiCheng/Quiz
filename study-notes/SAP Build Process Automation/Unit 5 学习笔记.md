# Using Features of Advanced Process Building in SAP Build Process Automation
— Unit 5 学习笔记
（Decisions & Actions Integration）

- 适用考试：SPA400（Business process automation，21%–30%）
- 单元构成与建议顺序：
  1) Improving the Sales Order Management Process with Decision Logic
  2) Encapsulating the APIs of Remote Systems using Actions Projects
  3) Calling APIs of Remote Systems using Actions in a Process
- 官方页面：
  - Decision Logic（Improve Process）：[链接](https://learning.sap.com/learning-journeys/create-processes-and-automations-with-sap-build-process-automation/improving-the-sales-order-management-process-with-decision-logic_e13b26bd-9ba6-48ba-a7f0-d8879c1bb14f)
  - Actions Project（Encapsulate APIs）：[链接](https://learning.sap.com/learning-journeys/create-processes-and-automations-with-sap-build-process-automation/encapsulating-the-apis-of-remote-systems-using-actions-projects_d102638b-94d7-4c2e-9547-bb344e9aa9de)
  - Call Actions in Process：[链接](https://learning.sap.com/learning-journeys/create-processes-and-automations-with-sap-build-process-automation/calling-apis-of-remote-systems-using-actions-in-a-process_e33106b5-2c6e-445a-8cc6-4dc9839c1cd5)

---

## 1. 用 Decision Logic 改进流程（Decisions）
- 概念结构：Decision 包含一个或多个 Policy；每个 Policy 由多条 Rule 组成；通过规则自动化审批/路由判断。
- 数据建模：
  - 定义 Data Types（如 SalesOrder、Approver）
  - 配置 Input/Output Parameters（如 Sales Order Input → Approver Output）
- 典型规则：
  - 当 orderAmount ≤ 100000 且 shippingCountry ∈ [United Kingdom, India, Germany] → Approver.Email='john.doe@sap.com', UserGroup='SO_APPROVER'
  - 当 orderAmount > 100000 → Approver.UserGroup='SO_MGMNT'
- 与流程集成：
  - 在流程中新增 Decision 步骤，将表单/自动化输出变量映射为 Decision 输入，决策结果映射至后续审批任务的受理人/用户组。
- 最佳实践：
  - 外置复杂分支逻辑至 Decisions，保持流程图简洁
  - 规则命名与注释清晰、避免硬编码人员邮箱，优先基于角色/组
  - 建立规则版本化与回归测试集
- 参考：[Decision Logic](https://learning.sap.com/learning-journeys/create-processes-and-automations-with-sap-build-process-automation/improving-the-sales-order-management-process-with-decision-logic_e13b26bd-9ba6-48ba-a7f0-d8879c1bb14f)

---

## 2. 使用 Actions Project 封装远端 API（Encapsulate APIs）
- 目标：将远端系统的 OpenAPI（.json）/Swagger 导入为可复用的 Actions，统一鉴权与调用参数定义。
- 步骤概览：
  1) 新建 Actions Project → 导入 OpenAPI 规范
  2) 配置 Destination 与认证（如 OAuth2 Client Credentials、API Key）
  3) 生成/校验各 Action 的输入/输出 Schema
  4) 发布（Release）与共享供流程项目复用
- 注意要点：
  - 在 BTP 子账户配置 Destination（URL、Auth、Headers）并与 Action 绑定
  - 将环境差异（Dev/Test/Prod）通过 Destination 名称区分
  - 谨慎处理敏感信息（Secret Manager/环境变量），避免硬编码
- 参考：[Actions Project](https://learning.sap.com/learning-journeys/create-processes-and-automations-with-sap-build-process-automation/encapsulating-the-apis-of-remote-systems-using-actions-projects_d102638b-94d7-4c2e-9547-bb344e9aa9de)

---

## 3. 在流程中调用 Actions（Call APIs in Process）
- 场景：在业务流程中调用封装后的远端 API（如创建订单、查询状态、写回结果）。
- 实施步骤：
  1) 在流程设计器中添加 Action 步骤
  2) 选择已发布的 Action 并映射输入（来自表单、决策或前序步骤输出）
  3) 映射输出至流程上下文，供后续条件/审批/可视化使用
- 稳健性：
  - 超时与重试策略；幂等性（Idempotency-Key）
  - 错误处理与补偿步骤（分支捕获、告警、人工兜底）
  - 速率限制与并发控制（Backoff、限流）
- 安全与治理：
  - 基于角色的访问控制与审计日志
  - 遵循最小权限原则，隔离不同环境的凭据
- 参考：[Call Actions in Process](https://learning.sap.com/learning-journeys/create-processes-and-automations-with-sap-build-process-automation/calling-apis-of-remote-systems-using-actions-in-a-process_e33106b5-2c6e-445a-8cc6-4dc9839c1cd5)

---

## 4. 组合模式（Decisions × Actions）
- 常见流程编排：
  - Form 触发 → Decision 判定审批级别/路由 → Action 调用后端 API（创建/查询/更新）→ 通知与可视化
- 设计建议：
  - 将业务规则放入 Decisions；将系统整合放入 Actions；保持职责清晰
  - 使用流程变量统一承载上下文，避免重复映射
  - 将可观测性指标与关键输出写入 Visibility 以便监控

---

## 5. 术语速记（Glossary）
- Decision / Policy / Rule：决策/策略/规则三层结构
- Data Type：用于建模规则输入输出的数据结构
- Actions Project：以 OpenAPI 为源，封装远端 API 的可复用动作集合
- Destination：BTP 中的目标系统连接与认证配置
- OpenAPI / Swagger：API 合同描述规范
- OAuth2 Client Credentials：常用的机器对机器鉴权方式
- Idempotency：同一请求多次执行结果一致的性质

---



## 附：Unit 5 Quiz – Using Features of Advanced Process Building

- Source: [Knowledge quiz](https://learning.sap.com/learning-journeys/create-processes-and-automations-with-sap-build-process-automation/using-features-of-advanced-process-building-in-sap-build-process-automation_3d6e6a91-7595-3cdc-a600-993b0ee7bdd2)

1) The Text Rule is a collection of input and output rule expressions in a tabular representation.
   - True / False  
   建议答案：True。  
   解释：Text Rule 以表格方式维护条件与结论（输入/输出表达式），便于业务人员可读与维护。

2) What do you have to verify before you run a business process that contains one or more automation in it?
   - The Desktop Agent settings and registration.  
   - The complete installation of a web server.  
   - The configuration of an email server.  
   - The integration of a chatbot with your business process.  
   建议答案：The Desktop Agent settings and registration。  
   解释：含自动化（RPA）的流程需本地 Desktop Agent 就绪并已注册。

3) Which of the following is the last step required to make defined Actions in an Actions project available in the Actions Library?
   - Publish  
   - Release  
   - Deploy  
   - Test  
   建议答案：Release。  
   解释：在 Actions Project 中，完成开发后需 Release 才能在 Actions Library 中可用。

4) What additional configuration steps are required on an Action after you have added it to a process? (Two correct answers)
   - Map process content to Input parameters  
   - Map Output parameters to process content  
   - Define a business logic  
   - Define a destination variable  
   建议答案：Map process content to Input parameters; Map Output parameters to process content。  
   解释：在流程中要完成输入映射（来自表单/决策/前序步骤）与输出映射（写回流程上下文）；业务逻辑与目的地在 Actions/Destination 侧定义。

