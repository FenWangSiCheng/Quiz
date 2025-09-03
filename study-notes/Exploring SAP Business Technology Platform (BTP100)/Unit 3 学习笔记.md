# Unit 3: Application Development and Automation in SAP BTP - 学习笔记

## 第一课：Discovering Application Development and Automation

### 学习目标
- 发现应用程序开发
- 发现自动化
- 分析应用程序开发和自动化中的角色

### 关键概念

#### 1. 应用程序开发 (Application Development)
- 从本地部署转向SaaS解决方案需要新的开发方法
- SAP BTP为前端和后端开发人员提供工具
- 支持专业开发和低代码/无代码开发体验

#### 2. 自动化概述 (Automation Overview)
- **超自动化 (Hyperautomation)：** "组织实施的一种战略，旨在快速识别并自动化尽可能多的流程"
- 使用AI、机器学习、RPA和业务流程管理等技术
- 旨在简化工作流程并减少手动任务

#### 3. 关键角色 (Key Roles)

##### a) 专业开发人员 (Professional Developers)
- 处理复杂的开发项目
- 提供高级编程专业知识

##### b) 公民开发人员 (Citizen Developers)  
- 使用无代码/低代码工具
- 利用业务知识创建应用程序
- 可以在技术技能最少的情况下进行开发

##### c) 管理员 (Administrators)
- 管理操作任务
- 处理授权和开发工具访问
- 管理服务实例和云连接

#### 4. 融合团队概念 (Fusion Teams)
- 结合专业开发人员、公民开发人员和业务专家
- 促进跨功能协作
- 实现创新和高效的解决方案开发

**关键要点：** 现代企业技术中灵活、可访问的开发方法的重要性。

---

## 第二课：Analyzing Development Tools and Frameworks

### 学习目标
- 分析开发框架
- 介绍SAP BTP指导框架

### SAP关键开发框架

#### 1. SAPUI5
- 用于Web应用程序的现代HTML5框架
- 基于模型-视图-控制器原则
- 开源版本（OpenUI5）也可用

#### 2. Java and Spring
- 在Cloud Foundry或Kyma运行时开发基于Java的项目
- 可与企业环境和SAP BTP服务集成

#### 3. SAP Fiori用户体验 (SAP Fiori UX)
- 包括用于Web、移动和对话界面的设计语言
- 支持多种技术，以SAPUI5作为参考Web技术

#### 4. 移动开发工具 (Mobile Development Tools)
- **SAP Mobile Development Kit (MDK)：** 多渠道应用开发
- **SAP BTP SDK for iOS：** 使用Swift进行原生应用开发
- **SAP BTP SDK for Android：** 使用Android Studio进行原生应用开发

#### 5. ABAP RESTful Application Programming Model (RAP)
- 开发SAP HANA优化OData服务的框架
- 支持Fiori应用程序和Web API发布
- 使用核心数据服务（CDS）进行数据建模

#### 6. SAP Cloud Application Programming Model
- 企业应用程序开发的综合框架
- 支持Node.js和Java
- 支持创建OData服务
- 与SAP Fiori、BTP和HANA服务集成

#### 7. SAP BTP指导框架 (SAP BTP Guidance Framework)
为在SAP BTP上开发提供决策指导、参考架构、方法论和最佳实践的中央访问点。

---

## 第三课：Analyzing Low-Code/No-Code with SAP Build

### 学习目标
分析SAP BUILD的低代码/无代码开发能力。

### 关键概念

#### 1. 低代码开发优势
- 通过赋能非开发人员创建应用程序和自动化来解决技术专业知识缺口

#### 2. SAP BUILD组件

##### a) SAP BUILD APPS
- 拖放界面，无需编码经验即可构建应用程序
- 支持Web、iOS、Android平台
- 通过API和预定义功能启用数据绑定和处理

##### b) SAP BUILD PROCESS AUTOMATION
- 允许公民开发人员可视化地自动化工作流程
- 包括带有拖放功能的流程和表单构建器
- 支持高级工作流程管理和机器人流程自动化

##### c) SAP BUILD WORK ZONE
- 集中访问业务应用程序和流程
- 集成SAP和第三方应用程序
- 提供协作工具，如调查、Wiki和任务管理

#### 3. 核心优势
- 加速应用程序开发
- 减少对专业开发人员的依赖
- 支持跨业务部门的创新
- 支持低代码和专业代码方法之间的"融合开发"

**关键要点：** "低代码/无代码开发可以帮助公民开发人员、专业开发人员和IT管理员自动化某些任务并加速他们的项目。"

---

## 第四课：Analyzing Pro-Code with SAP Build

### 学习目标
分析SAP BUILD Code的专业代码开发能力。

### 关键概念

#### 1. SAP BUILD Code概述
- 旨在提高开发人员生产力的综合开发环境
- 通过提供高级开发工具解决关键的IT技能短缺问题

#### 2. 核心功能

##### a) AI驱动的辅助 (AI-Powered Assistance)
使用Joule AI副驾驶员来：
- "生成代码和应用逻辑"
- 创建数据模型
- 生成单元测试

##### b) 开发能力 (Development Capabilities)
- 基于云的开发平台
- 支持多种开发场景：
  - 扩展SAP解决方案
  - 构建Fiori Web应用
  - 创建跨平台移动应用
  - 开发SAP HANA原生应用程序
  - 构建多租户SaaS应用程序

##### c) 生产力工具 (Productivity Tools)
- 预构建组件和模板
- 可视化编程工具
- 引导向导
- 集成CI/CD功能

##### d) 关键服务 (Key Services)
- SAP Cloud Application Programming Model (CAP)
- SAPUI5和SAP Fiori元素
- SAP Mobile Services
- 运行时服务，如持续集成和授权管理

**主要目标：** "通过生成式AI、生产力工具和应用程序生命周期管理优化开发人员效率"

**关键要点：** SAP BUILD Code提供了一个全面的专业开发环境，结合了AI辅助、预构建组件和完整的应用程序生命周期管理工具。

---

## Unit 3 Quiz - Application Development and Automation

### Question 1
**What can you do with SAP BUILD Apps?**
- **Options:** Create mobile apps with a visual editor, Create OData services, Create database artifacts, Create microservice back-ends
- **Correct Answer:** Create mobile apps with a visual editor
- **Explanation:** With SAP BUILD Apps, you can build enterprise-grade mobile applications based on no-code composed with a visual editor.

### Question 2
**Which tool is the new strategic IDE from SAP for Application Development?**
- **Options:** SAP Web IDE, SAP BTP cockpit, SAP HANA Development Workbench, SAP Business Application Studio
- **Correct Answer:** SAP Business Application Studio
- **Explanation:** A modern, flexible, and extensible development environment for building applications for the intelligent, sustainable enterprise.

### Question 3
**Application Development with SAP BTP is a portfolio of solutions that help you simplify your development.**
- **Options:** True / False
- **Correct Answer:** True
- **Explanation:** Can help you simplify the development of your application extensions or custom applications.

### Question 4
**SAPUI5 is a framework to build native applications.**
- **Options:** True / False
- **Correct Answer:** False
- **Explanation:** SAPUI5 is a modern and flexible framework to build web applications for your business needs.

### Question 5
**Which of the following roles can we typically identify regarding software development?**
- **Options:** Professional Developer, Data Modeler, Administrator, Citizen Developer, System Architect
- **Correct Answers:** Professional Developer, Citizen Developer, Administrator
- **Explanation:** The three typical roles in modern software development.

### Question 6
**No-code development is primarily intended for those who aren't comfortable with coding their own software.**
- **Options:** True / False
- **Correct Answer:** True
- **Explanation:** Primarily intended to help employees that are process experts to automate tasks, build applications, or optimize their business activities.