# Unit 2: Deep Dive into SAP Business Technology Platform - 学习笔记

## 第一课：Introducing SAP BTP Commercial Models

### 学习目标
完成本课程后，学员将能够"介绍SAP BTP商业模式"。

### 关键概念

#### 1. SAP BTP商业模式

##### a) Pay-As-You-Go (PAYG) - 按使用付费模式
- 无前期成本
- 无最低使用量要求
- 仅为实际使用量付费
- 灵活扩展
- 可访问免费层服务计划

##### b) BTPEA (Enterprise Agreement) - 企业协议
- 基于实际使用量消耗云积分
- 预付费模式
- 一份合同即可访问所有服务
- 实时服务使用情况监控
- 持续访问新服务

##### c) Subscription - 订阅模式
- 固定费率的固定服务集合
- 预设的服务授权
- 可增加许可证数量
- 预算可预测性
- 成本优化

#### 2. 免费层服务特点
- 有限的月度使用容量
- 不会过期
- PAYG/BTPEA账户可访问
- 可升级到付费计划

**关键要点：** "SAP Business Technology Platform是整个SAP生态系统的统一、以业务为中心的开放平台"，提供灵活的商业模式以满足不同的业务需求。

---

## 第二课：Illustrating the Architecture of SAP BTP

### 学习目标
"说明SAP BTP的架构"。

### 关键架构组件

#### 1. Global Account - 全局账户
- 代表与SAP的合同
- 用于管理目录、子账户、成员、权限和配额

#### 2. Directories - 目录
- 可选的组织层
- 可创建多达7层深度的层次结构
- 帮助按技术和业务需求组织子账户

#### 3. Subaccounts - 子账户
- 全局账户内的独立单元
- 部署应用程序和管理服务
- 与特定区域关联

#### 4. Regions - 区域
- 托管应用程序和服务的地理位置
- 由SAP或IaaS合作伙伴（AWS、Azure、Google Cloud、阿里云）提供

#### 5. Environments - 环境
可用的开发环境：
- **Cloud Foundry：** 多语言云应用程序平台
- **Kyma：** 基于Kubernetes的微服务运行时
- **ABAP：** 用于扩展基于ABAP产品的云环境

**关键要点：** "与SAP签订合同后，您将获得一个全局账户，该账户位于SAP BTP账户结构的顶层。"

架构为组织提供了结构化云资源、开发环境和应用程序部署的灵活性。

---

## 第三课：Demonstrating the SAP BTP Cockpit

### 学习目标
完成本课程后，学员将能够"演示SAP BTP Cockpit"。

### 关键概念

#### 1. SAP BTP Cockpit访问
- URL格式：`https://<Region>.cockpit.btp.cloud.sap`
- 区域包括eu10、us10、ap10等
- 主要面向平台用户和管理员

#### 2. Cockpit功能
- 管理SAP BTP账户的中央用户界面
- 允许在全局账户间切换
- 提供账户资源管理器、安全配置和服务管理

#### 3. SAP BTP Cockpit的替代方案
- SAP BTP CLI（命令行界面）
- Kyma Dashboard
- Kubernetes命令行工具（kubectl）
- Cloud Foundry CLI（cf cli）
- ABAP环境管理工具

**关键要点：** "SAP BTP cockpit首先是管理员和其他平台用户的工具"，具有管理账户、探索服务和配置安全设置的功能。

注意：业务用户通常不需要直接访问cockpit，而是使用特定的功能URL。

---

## 第四课：Identifying the Services in SAP BTP

### 学习目标
- 识别SAP BTP中的服务
- 演示SAP Discovery Center

### 关键概念

#### 1. SAP BTP中的服务类型
- 两种主要服务类型：实例（Instances）和订阅（Subscriptions）
- "服务实例是通过API和/或绑定消费的一组功能"
- "服务订阅是独立运行的，无需额外的运行时环境"

#### 2. 服务使用案例示例
开发者场景演示服务使用：
- 使用SAP Business Application Studio作为IDE
- 持续集成和交付服务
- Cloud Foundry环境
- SAP HANA Cloud用于数据存储
- 授权和信任管理服务
- 应用程序日志服务
- 应用程序自动扩展

#### 3. SAP Discovery Center - SAP发现中心
主要功能：
- 包含工具和应用程序信息的服务目录
- 包含实施项目的任务目录
- 学习材料和指导
- 社区支持

优势：
- 提供按需支持
- 加速创新
- 自助服务在线工具

**关键要点：** "SAP为多个用例提供了大量可订阅或实例化的服务"，Discovery Center提供指导和信息。

---

## 第五课：Analyzing Connectivity in SAP BTP

### 学习目标
完成本课程后，学员将能够"分析SAP BTP中的连接性"。

### 关键连接概念

#### 1. 为什么需要连接性
"作为智能、可持续的企业，您遵循清洁核心战略。您希望构建并行扩展或自定义开发项目，但将它们集成到来自互联网或本地系统环境的功能或数据中。"

#### 2. 连接服务
- SAP Connectivity service通过Cloud Connector提供访问本地资源的代理
- SAP Destination service帮助存储连接到远程服务的技术信息

#### 3. Cloud Connector - 云连接器
- 通过加密隧道将SAP本地后端连接到SAP BTP子账户
- 双向连接
- 允许共享特定系统资源
- 作为本地网络和SAP BTP之间的"反向调用代理"

#### 4. 连接类型
两种主要连接类型：
- 互联网连接（通过HTTPS）
- 云到本地连接

**关键要点：** "SAP BTP提供连接功能，使您能够连接云到本地软件...Cloud Connector的优势在于它创建了安全连接，SAP产品可以通过加密隧道与SAP BTP交互。"

---

## Unit 2 Quiz - SAP BTP Architecture and Services

### Question 1
**Destinations are key building blocks in SAP BTP and are used to define connections for outbound communication from your application to remote systems.**
- **Options:** True / False
- **Correct Answer:** True
- **Explanation:** Destinations are key building blocks in SAP BTP and are used to define connections for outbound communication from your application to remote systems.

### Question 2
**SAP BTP accounts can only get administrated with the SAP BTP cockpit.**
- **Options:** True / False
- **Correct Answer:** False
- **Explanation:** Besides the SAP BTP cockpit, you can use command line tools like btp cli or cf cli to administrate your SAP BTP accounts.

### Question 3
**In the SAP Discovery Center you can find information of SAP BTP services.**
- **Options:** True / False
- **Correct Answer:** True
- **Explanation:** In the SAP Discovery Center you can find relevant information about services from the SAP BTP.

### Question 4
**Before using services in SAP BTP, what are the possible actions that may need to be completed?**
- **Options:** Create an instance, Deploy the service, Copy an instance, Subscribe to the service
- **Correct Answers:** Create an instance, Subscribe to the service
- **Explanation:** Depending on the service, you need to create an instance of the service or subscribe to it.

### Question 5
**You can transfer free-tier service plans to paid service plans with a technical migration.**
- **Options:** True / False
- **Correct Answer:** False
- **Explanation:** You can transfer free-tier service plans to paid service plans without a technical migration - you need to change the service plan to a paid one.

### Question 6
**You need to enable the Cloud Foundry runtime inside the subaccount before the first use.**
- **Options:** True / False
- **Correct Answer:** True
- **Explanation:** Before you can use the Cloud Foundry environment inside of spaces, you need to activate Cloud Foundry in the subaccount.