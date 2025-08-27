# Designing SAP Build Work Zone — Unit 1 学习笔记
（Exploring the Information Architecture）

- 单元构成与建议顺序：
  1) Explaining Features and Capabilities of SAP Build Work Zone  
  2) Mastering the Site Menu  
  3) Managing Workpages  
  4) Working with Workspaces  
  5) Integrating Applications  
  6) Navigating User Settings and Features in the SAP Build Work Zone Header Bar

- 官方页面：
  - Features & Capabilities：[链接](https://learning.sap.com/learning-journeys/designing-sap-build-work-zone/explaining-features-and-capabilities-of-sap-build-work-zone)
  - Site Menu：[链接](https://learning.sap.com/learning-journeys/designing-sap-build-work-zone/mastering-the-site-menu)
  - Workpages：[链接](https://learning.sap.com/learning-journeys/designing-sap-build-work-zone/managing-workpages)
  - Workspaces：[链接](https://learning.sap.com/learning-journeys/designing-sap-build-work-zone/working-with-workspaces)
  - Integrating Applications：[链接](https://learning.sap.com/learning-journeys/designing-sap-build-work-zone/integrating-applications)
  - Header Bar（用户设置与功能）：[链接](https://learning.sap.com/learning-journeys/designing-sap-build-work-zone/navigating-user-settings-and-features-in-the-sap-build-work-zone-header-bar)

---

## 1. 核心能力概览（Features & Capabilities）
- 个性化与统一入口：为终端用户提供个性化、易用的门户/内联网体验，在一个位置访问所有业务应用、流程与数据  
  参考：[Features & Capabilities](https://learning.sap.com/learning-journeys/designing-sap-build-work-zone/explaining-features-and-capabilities-of-sap-build-work-zone)
- 协作与信息连接：通过讨论区、新闻流、知识库与推荐，连接人员与信息，提升生产力
- 可组合式构建块：`Site Menu`、`Workpages`、`Workspaces`、`Applications` 构成整体信息架构
- 外观与体验：支持面向内部或外部用户的站点体验，按角色提供差异化导航与内容

---

## 2. 站点菜单（Site Menu）关键点
- 角色：Work Zone 的“主导航”，统一访问工作区、工作页、应用与工具  
  参考：[Mastering the Site Menu](https://learning.sap.com/learning-journeys/designing-sap-build-work-zone/mastering-the-site-menu)
- 配置入口：公司管理员在体验内打开菜单配置面板，查看并调整结构
- 菜单项管理：新增/删除/排序；为每个条目设置链接类型与可见权限
- 权限与可见性：为不同用户组配置可见性，保证“按角色可见”
- 菜单项类型：
  - Custom：链接自定义 URL 或菜单内容区内的工作页
  - Workspace：直达特定工作区
  - Application：直达单个应用（SAP 标准/自定义/第三方集成）
  - Predefined：系统生成项，如 `Recommendations`、公司级 `Knowledge Base` 等
- 推荐与知识库：
  - Recommendations：按点赞、浏览、关注、@提及等行为个性化推荐（支持按时段筛选）
  - Knowledge Base：公司级与工作区级知识库，支持模板、富文本、权限与生命周期
- 传输配置：支持在系统间导出/导入菜单配置，保持环境一致性

---

## 3. 工作页（Workpages）管理
- 定义：高度可定制的交互页面，承载应用、Widget 与 UI Integration Cards  
  参考：[Managing Workpages](https://learning.sap.com/learning-journeys/designing-sap-build-work-zone/managing-workpages)
- 布局：基于区块网格；每个区块最多六列，自由拖拽编排
- 内容目录（Widget Catalog）：提供标准卡片/部件（文本、列表、投票、Wiki、任务、日程、媒体等）
- 创建与维护：选择基底布局、命名、添加卡片/部件并配置；设置访问与编辑权限；支持版本与翻译
- 适用：企业首页、部门信息页、活动专题、团队协作空间等

---

## 4. 工作区（Workspaces）使用
- 定义：围绕项目/流程/团队的协作空间，集中访问相关应用、工作页与信息  
  参考：[Working with Workspaces](https://learning.sap.com/learning-journeys/designing-sap-build-work-zone/working-with-workspaces)
- 模板与治理：可基于模板创建；管理员控制功能开关（论坛、任务、知识库等）
- 权限与成员：基于成员与可见性配置管理访问；支持公开/受限等模式
- 协作功能：
  - 论坛（Questions/Ideas/Discussions）用于问答、创意与讨论
  - 任务板：分配/跟踪当前、逾期与已完成任务（可与 Task Center 集成）
  - 知识库：文章模板、富文本、标签、权限、延时发布与过期
  - 新闻与动态：信息发布与互动，提升参与度

---

## 5. 应用集成（Integrating Applications）
- 应用类型：SAP 标准应用、Fiori 应用、UI Integration Cards、自定义应用、第三方应用  
  参考：[Integrating Applications](https://learning.sap.com/learning-journeys/designing-sap-build-work-zone/integrating-applications)
- 集成位置：
  - `Site Menu` 中添加为 `Application` 类型菜单项
  - 在 `Workpages` 内以卡片/部件嵌入
- 管理要点：
  - 单点登录与目标映射（Destination/Role）
  - 访问控制（角色、群组、可见性）
  - 生命周期与传输（开发/测试/生产一致性）

---

## 6. 顶栏（Header Bar）与用户设置
- 作用：统一的全局访问入口与个人设置中心（如搜索、通知、收藏、个人资料、语言/主题等）  
  参考：[Header Bar](https://learning.sap.com/learning-journeys/designing-sap-build-work-zone/navigating-user-settings-and-features-in-the-sap-build-work-zone-header-bar)
- 体验要点：减少跳转、提升检索效率；个性化设定与快捷入口结合

---

## 权限与可见性要点
- 菜单与内容的“按角色可见”：确保用户仅看到与其职责相关的应用与资源
- 工作区成员与公开性：使用成员管理与公开/受限配置平衡易用与安全
- 知识库与推荐：公司级与工作区级的开启/关闭由管理员决定，并在菜单中配置入口

---

## 术语速记（Glossary）
- Site Menu：站点主导航，链接工作区/工作页/应用/工具
- Workpage：可视化、可配置的页面容器，支持卡片与部件
- Workspace：围绕业务主题/团队的协作空间，聚合内容与应用
- Application：在 Work Zone 中可访问与集成的功能性软件单元
- UI Integration Card：基于卡片的可重用 UI 单元，用于集成外部数据/应用
- Knowledge Base：知识文章库，支持模板、权限与生命周期
- Recommendations：基于交互行为生成的个性化推荐

---

## 速查清单（Checklist）
- 是否定义了信息架构的四要素：菜单、工作页、工作区、应用？
- 菜单项是否按角色与场景分类清晰（Custom/Workspace/Application/Predefined）？
- 是否开启并正确配置公司级/工作区级知识库与推荐？
- 关键工作页是否以网格布局清晰承载核心信息？
- 应用是否已完成权限、单点登录与环境传输配置？

---

## 小结
本单元聚焦 Work Zone 的信息架构与核心能力：以 `Site Menu` 统一导航、`Workpages` 承载内容、`Workspaces` 支撑协作、`Applications` 完成业务办理；通过知识库与推荐提升信息触达，并以权限与传输机制保证一致性与合规性。详见上述官方页面链接。


