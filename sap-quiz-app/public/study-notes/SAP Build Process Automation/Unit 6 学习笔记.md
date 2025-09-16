# Uusingsing APIs for Integration in SAP Build Process Automation
— Unit 6 学习笔记
（SBPA REST APIs & Integration）

- 适用考试：SPA400（Business process automation，21%–30%）
- 单元构成与建议顺序：
  1) Leveraging SAP Build Process Automation APIs
  2) Using APIs for Integration（Knowledge quiz）
- 官方页面：
  - Leveraging SBPA APIs：[链接](https://learning.sap.com/learning-journeys/create-processes-and-automations-with-sap-build-process-automation/leveraging-sap-build-process-automation-apis_f3a73b24-9cdb-4549-bf53-c21edb63a1f0)
  - Using APIs for Integration（Quiz）：[链接](https://learning.sap.com/learning-journeys/create-processes-and-automations-with-sap-build-process-automation/using-apis-for-integration_077f405e-8c81-3807-b68f-1935f223e4ce)

---

## 1. SBPA REST APIs 概览（Leveraging APIs）
- 基础概念：
  - REST：强调基于 HTTP 的资源风格与约束；API 以资源与动词（GET/POST/…）进行交互。
  - REST Client：用于测试/调试/调用 REST API 的工具（如 Postman/curl），便于在应用未就绪时进行验证。
- API 包（SAP Business Accelerator Hub 中的 SBPA API Package 常见能力）：
  - Automation Execution：以按钮/外部系统触发自动化任务
  - Automation Monitoring：检索自动化运行日志并集成到外部运维工具
  - Decisions：以 REST 执行规则服务，验证决策输出
  - Inbox：自定义 Inbox 体验（通常与 Processes & Workflows API 结合）
  - Workflows：由外部应用触发新流程/工作流实例
  - Visibility Scenarios：从非 SAP 系统推送事件，统一可视化流程
  - Visibility Workspace：按用户权限查询可见的可视化场景
- 在 Business Accelerator Hub 中查找端点：
  1) 搜索“SAP Build Process Automation” → 进入 API Package
  2) 选择 `Workflows REST API` → API Reference
  3) 打开 `Workflow Instances` → `POST` 启动实例端点 → 查看所需 scopes/roles 与请求参数
- 令牌与权限（要点）：
  - 使用合适的身份认证（如 OAuth 2.0 流程）获取访问令牌
  - 根据 API 文档配置所需的角色/范围（scopes）
- 适用场景：
  - 外部应用触发流程/自动化、调用决策、集成自定义 Inbox 或可视化看板
- 参考：[Leveraging SBPA APIs](https://learning.sap.com/learning-journeys/create-processes-and-automations-with-sap-build-process-automation/leveraging-sap-build-process-automation-apis_f3a73b24-9cdb-4549-bf53-c21edb63a1f0)

---

## 2. 实践要点（Integration Tips）
- 端点选择：按用例选择 Workflows/Decisions/Automation/Visibility 等对应 API
- 契约与映射：严格遵循请求/响应 Schema；在调用前准备好输入数据模型
- 安全与治理：
  - 最小权限原则，细化 Role/Scope；隔离不同环境的凭据
  - 审计与日志采集，记录关键调用信息（不泄露机密）
- 稳健性：
  - 超时与重试（指数退避）；幂等性设计；错误分类与补偿路径
- 工具链：
  - 开发期使用 REST Client（Postman/curl）调试；CI/CD 中用脚本化测试校验 API 可用性

---

## 3. 术语速记（Glossary）
- REST API：遵循 REST 架构约束的接口风格
- REST Client：用于调用/调试 HTTP(S) API 的客户端工具
- SAP Business Accelerator Hub：SAP 官方 API 索引与文档门户
- Workflows API：启动/管理流程实例的 REST 接口集合
- Scopes/Roles：访问控制所需的权限范围与角色

---

## 4. 速查清单（Checklist）
- 是否在 Business Accelerator Hub 查到正确 API 包与端点？
- 是否具备所需角色/范围并正确获取访问令牌？
- 请求体/查询参数是否按 Schema 构造？
- 是否设置了重试/超时与错误处理？
- 是否在非生产环境先行验证与回归测试？

---

## 附：Unit 6 Quiz – Using APIs for Integration

- Source: [Knowledge quiz](https://learning.sap.com/learning-journeys/create-processes-and-automations-with-sap-build-process-automation/using-apis-for-integration_077f405e-8c81-3807-b68f-1935f223e4ce)

1) In SAP Business Accelerator Hub, you can find the REST APIs for SAP Build Process Automation.
   - True / False  
   建议答案：True。  
   解释：SBPA 的 REST APIs 可在 SAP Business Accelerator Hub 中检索与查看文档。

2) What does a REST client do?
   - It simplifies technical communication with REST APIs.  
   - It helps you to automate high-value activities.  
   - It helps you to make business rules.  
   - It gives cloud application end-users access to the application.  
   建议答案：It simplifies technical communication with REST APIs。  
   解释：REST Client 用于便捷调用与调试 REST API；非用于规则编制或面向终端用户的业务访问。


