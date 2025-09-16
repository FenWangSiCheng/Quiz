# Develop and automate with SAP Build - Unit 2 学习笔记

## 概述

Unit 2 专注于 SAP Build Apps 的深入介绍和实际应用，全面展示了这一低代码/无代码开发平台的核心功能、开发方法和实践应用。本单元从平台概览转向具体的应用开发实践，教授如何通过可视化开发环境构建企业级移动和网页应用程序。

## 1. SAP Build Apps 平台概览 (Presenting SAP Build Apps at a Glance)

### 1.1 核心定义与特性

#### 平台定义
- **可视化开发解决方案**：用于创建企业应用程序的可视化开发解决方案
- **无代码开发**：实现"无需编写代码"的应用程序创建
- **预制组件系统**：支持拖拽预制组件并配置组件和应用逻辑

#### 核心特性
- **移动应用为主**：主要设计用于移动应用开发
- **多平台支持**：可创建网页和移动应用程序
- **全栈开发能力**：支持前端和后端开发
- **灵活画布**：为不同设备类型（移动、平板、网页）提供灵活画布

### 1.2 技术能力

#### 集成能力
- **多数据源连接**：连接各种后端数据源，包括 SAP 系统
- **SAP BTP 目标支持**：支持 SAP Business Technology Platform 目标
- **JavaScript 模块增强**：允许开发者添加小型 JavaScript 模块增强功能
- **自定义后端构建**：支持为特定应用需求构建自定义后端

#### 协作开发特性
- **多用户协作**：支持业务用户和专业开发人员之间的协作
- **项目共享能力**：提供项目共享功能
- **加速开发时间**：显著加快应用程序开发时间

### 1.3 核心优势

#### 开发优势
- **低代码/无代码方法**：降低开发门槛
- **企业级应用创建**：支持企业级应用程序开发
- **无缝系统集成**：与 SAP 和非 SAP 系统无缝集成
- **快速原型设计**：支持快速原型设计和开发
- **用户友好性**：技术和非技术用户均可使用

## 2. 应用程序开发结构 (Creating Applications Using SAP Build Apps)

### 2.1 应用程序三要素

#### 用户界面 (User Interface - UI)
- **用户交互决定**：决定用户与应用程序的交互方式
- **组件布局设计**：决定组件布局、设计和配置
- **界面元素包含**：包括"输入文本、列表注释、保存和删除控制"等元素

#### 数据 (Data)
- **信息存储管理**：存储和管理应用程序信息
- **多源数据支持**：可包括来自 SAP 系统和外部 API 的数据
- **数据连接配置**：需要指定数据导入和连接详细信息

#### 逻辑 (Logic)
- **应用行为定义**：定义应用程序行为和业务规则
- **逻辑窗格创建**：在带有流程函数的逻辑窗格中创建
- **事件处理**：处理按钮点击、变量更改等事件
- **云函数支持**：可包括服务器端"可视化云函数"以提高安全性和性能

### 2.2 开发原则

#### 核心开发理念
- **低代码/无代码平台**：减少编程障碍
- **应用设计概念理解**：专注于理解应用程序设计概念
- **平台无关方法**：设计方法与平台无关
- **跨环境灵活性**：在不同开发环境中保持灵活性

#### 实际应用示例
使用笔记应用程序来说明这些原则，展示 UI、数据和逻辑如何相互连接以创建功能性应用程序

## 3. SAP Build Apps 界面导览 (Taking a Tour of SAP Build Apps)

### 3.1 平台起始界面

#### SAP Build 大厅
- **项目管理中心**：用户管理不同项目类型的起始点
- **统一入口**：创建网页和移动应用程序的统一访问点

### 3.2 关键界面组件

#### 页面选择器 (Page Selector)
- **功能描述**："让您创建新页面并切换显示哪个页面"
- **页面管理**：支持多页面应用程序的创建和导航

#### 集成选项卡 (Integration Tab)
- **功能描述**："用于将数据导入应用程序，以及启动和测试应用程序"
- **连接支持**：
  - 设备存储
  - SAP 系统
  - REST/OData 服务

#### 画布 (Canvas)
- **功能描述**："构建用户将看到并与之交互的用户界面的地方"
- **可视化设计**：提供可视化界面设计环境

#### 组件区域 (Components Area)
- **UI 元素容器**：包含按钮和图像等 UI 元素
- **三个选项卡**：
  - **Core**：基础组件
  - **Marketplace**：复杂组件
  - **Installed**：先前添加的组件

#### 逻辑窗格 (Logic Pane)
- **功能描述**："告诉应用程序在不同事件发生时要做什么的地方"
- **动作流创建**：通过连接事件和函数来创建动作流

### 3.3 后端能力

#### 自定义数据源
- **数据源创建**：可以创建自定义数据源
- **数据库表设计**：设计数据库表（实体）
- **数据操作函数**：创建数据操作函数

#### 推荐应用场景
特别推荐给希望快速构建应用程序且编码需求最少的开发者

## 4. 首个应用程序创建 (Creating a First Application with SAP Build Apps)

### 4.1 业务场景

#### 移动应用开发教程
教程指导构建一个移动应用程序，具备以下功能：
- **条形码扫描**：扫描食品产品的条形码
- **API 调用**：调用 API 检索卡路里含量
- **信息显示**：显示产品名称和卡路里计数

### 4.2 先决条件

#### 平台准备
1. **SAP Build Apps 订阅创建**：
   - 通过 SAP BTP 子账户助推器
   - 免费试用注册

2. **SAP Build Apps 预览应用设置**：
   - iOS 平台配置
   - Android 平台配置

### 4.3 实施步骤

#### 教程流程
- **教程访问**：打开"使用 SAP Build Apps 创建应用程序"教程
- **步骤完成**：完成所有教程步骤
- **移动测试**：使用预览应用程序的 QR 码在移动设备上测试

#### 支持资源
- **学习社区帮助**：如在练习期间遇到问题，可在 SAP 学习小组中获得帮助

### 4.4 学习目标
提供使用低代码开发与 SAP Build Apps 构建简单移动应用程序的实践介绍

## 5. 技术架构与开发方法

### 5.1 架构特点

#### 平台架构
- **企业级开发平台**：提供企业级开发能力
- **多设备支持**：支持移动、平板和网页应用程序
- **云原生架构**：基于云的开发和部署环境

#### 开发方法论
- **可视化优先**：以可视化开发为核心
- **组件驱动开发**：基于预制组件的开发方式
- **事件驱动逻辑**：通过事件驱动的逻辑系统

### 5.2 集成生态系统

#### SAP 生态系统集成
- **SAP BTP 集成**：深度集成 SAP Business Technology Platform
- **SAP 系统连接**：支持各种 SAP 后端系统连接
- **身份认证集成**：支持 SAP 身份认证和授权

#### 第三方集成
- **REST API 支持**：支持标准 REST API 集成
- **OData 服务**：支持 OData 协议数据服务
- **外部数据源**：连接各种外部数据源和服务

## 6. 最佳实践与应用场景

### 6.1 推荐应用场景

#### 企业移动应用
- **员工自助服务应用**：人力资源管理应用
- **现场服务应用**：移动工作流程应用
- **库存管理应用**：仓库和库存追踪应用

#### 业务流程应用
- **审批流程应用**：各种业务审批流程
- **数据收集应用**：现场数据收集和报告
- **客户服务应用**：客户互动和服务管理

### 6.2 开发最佳实践

#### 设计原则
- **用户体验优先**：专注于用户友好的界面设计
- **移动优先设计**：优先考虑移动设备的用户体验
- **数据安全性**：确保企业数据的安全性和合规性

#### 开发建议
- **组件重用**：最大化利用预制组件
- **逐步开发**：采用迭代开发方法
- **测试驱动**：在多设备上进行充分测试

## 7. Unit 2 知识检测 Quiz

### Quiz 题目与答案解析

#### 题目 1：应用程序构建组成部分
**Question**: "What are the parts of an application that you can build?"
**Type**: Single Select (1 correct answer)

**All Options**:
1. User interface and the data with logic in both places
2. Front end and back end
3. Web and Mobile Applications and Application Backends
4. All of the above

**Correct Answer**:
- All of the above

**Incorrect Answers**:
- User interface and the data with logic in both places
- Front end and back end
- Web and Mobile Applications and Application Backends

**Explanation**: All the listed options represent different aspects of what can be built with SAP Build Apps - from UI/data/logic components to front-end/back-end architecture to various application types and backends.

#### 题目 2：应用程序开发三要素
**Question**: "What are the three main parts of application development, as understood after 40-50 years of development?"
**Type**: Multiple Select (3 correct answers)

**All Options**:
1. User interface
2. Variables
3. Data
4. Logic
5. Integration

**Correct Answers**:
- User interface
- Data
- Logic

**Incorrect Answers**:
- Variables
- Integration

**Explanation**: The three fundamental parts of application development that have been established over decades are User Interface (how users interact), Data (information storage and management), and Logic (application behavior and business rules).

#### 题目 3：逻辑流程触发器
**Question**: "When building logic, what generally triggers the flow of actions?"
**Type**: Single Select (1 correct answer)

**All Options**:
1. Event
2. Flow function
3. Component property

**Correct Answer**:
- Event

**Incorrect Answers**:
- Flow function
- Component property

**Explanation**: Events are the primary triggers that initiate logic flows in SAP Build Apps. When events occur (like button clicks, page loads, etc.), they trigger the subsequent flow of actions and functions.

#### 题目 4：SAP Build Apps 优势
**Question**: "Which of the following are the benefits of using SAP Build Apps?"
**Type**: Multiple Select (3 correct answers)

**All Options**:
1. Comes with data tables defined and populated
2. Includes preconfigured user interface components that you can drag and drop onto the canvas
3. Lets you connect to SAP systems and external REST APIs
4. Includes SAP S/4HANA system inside
5. Enables writing JavaScript code for advanced users

**Correct Answers**:
- Includes preconfigured user interface components that you can drag and drop onto the canvas
- Lets you connect to SAP systems and external REST APIs
- Enables writing JavaScript code for advanced users

**Incorrect Answers**:
- Comes with data tables defined and populated
- Includes SAP S/4HANA system inside

**Explanation**: SAP Build Apps provides drag-and-drop UI components, connectivity to various systems including SAP and REST APIs, and JavaScript capabilities for advanced customization. It does not include pre-populated data tables or embedded S/4HANA systems.

#### 题目 5：附加组件来源
**Question**: "Where can you find additional components or flow functions?"
**Type**: Single Select (1 correct answer)

**All Options**:
1. Page selector
2. Marketplace
3. Data tab
4. Properties pane
5. Tree view

**Correct Answer**:
- Marketplace

**Incorrect Answers**:
- Page selector
- Data tab
- Properties pane
- Tree view

**Explanation**: The Marketplace is the dedicated location where additional components and flow functions can be discovered and installed, extending the platform's capabilities beyond the core components.

#### 题目 6：协作开发特性
**Question**: "What feature enables business users and developers to collaborate and build apps?"
**Type**: Single Select (1 correct answer)

**All Options**:
1. Component library
2. Connectors to SAP systems
3. Front ends
4. Back ends
5. Sharing

**Correct Answer**:
- Sharing

**Incorrect Answers**:
- Component library
- Connectors to SAP systems
- Front ends
- Back ends

**Explanation**: The Sharing feature enables collaboration between business users and developers by allowing project sharing and collaborative development workflows within SAP Build Apps.

#### 题目 7：SAP Build Apps 工件类型
**Question**: "What are the two primary SAP Build Apps artifacts you can create in the lobby?"
**Type**: Single Select (1 correct answer)

**All Options**:
1. Automation and website
2. New components and new flow functions
3. Web/mobile application and application back end

**Correct Answer**:
- Web/mobile application and application back end

**Incorrect Answers**:
- Automation and website
- New components and new flow functions

**Explanation**: In the SAP Build Apps lobby, the two primary artifacts you can create are web/mobile applications (front-end) and application backends (back-end services and data management).

#### 题目 8：用户输入反应设计位置
**Question**: "Where do you design how the application reacts to user input?"
**Type**: Single Select (1 correct answer)

**All Options**:
1. Logic pane
2. Canvas
3. Data tab
4. Component pane

**Correct Answer**:
- Logic pane

**Incorrect Answers**:
- Canvas
- Data tab
- Component pane

**Explanation**: The Logic pane is where you design and configure how the application responds to user inputs and other events by creating logic flows and defining application behavior.

### Quiz 通过标准
- **及格要求**：至少答对 6 道题目才能通过此单元
- **题目总数**：8 道题目
- **建议**：深入理解应用程序三要素结构、平台界面组件、事件驱动逻辑、以及平台的协作和扩展能力

## 8. 学习要点总结

1. **平台理解**：深入理解 SAP Build Apps 作为可视化开发解决方案的核心价值
2. **三要素掌握**：掌握 UI、数据、逻辑三要素的协同开发方法
3. **界面熟悉**：熟悉平台界面组件和开发工具的使用
4. **实践应用**：通过首个应用程序创建获得实际开发经验
5. **架构认知**：理解平台的技术架构和集成能力
6. **最佳实践**：应用企业级应用开发的最佳实践原则
7. **移动开发**：重点掌握移动应用程序开发的特殊要求和方法
8. **Quiz重点掌握**：重点理解应用程序构建要素、事件驱动逻辑、平台优势特性、以及协作开发能力

---

*本笔记基于 SAP Learning 平台的 "Develop and automate with SAP Build" 学习路径的 Unit 2 内容整理*