import type { Question } from '../questions'

// Exploring SAP Business Technology Platform (BTP100) 题库 - 来源于官方学习笔记Quiz
export const exploringBTPQuestions: Question[] = [
  // Unit 1 Quiz - SAP Strategy Overview
  {
    id: 1,
    type: 'true_false',
    question: 'The SAP Business Technology Platform is a software-as-a-service offering (SaaS).',
    options: ['True', 'False'],
    correctAnswers: [1],
    explanation: 'The SAP Business Technology Platform is a platform-as-a-service offering (PaaS).',
    difficulty: 'medium'
  },
  {
    id: 2,
    type: 'multiple_choice',
    question: 'The SAP Business Technology Platform is based on several pillars. Which of these are pillars of SAP BTP?',
    options: ['AI', 'Hire-to-Retire', 'Automation', 'SAP SuccessFactors'],
    correctAnswers: [0, 2],
    explanation: 'The pillars of the SAP Business Technology Platform are: App Dev, Automation, Integration, Data and Analytics, AI.',
    difficulty: 'medium'
  },
  {
    id: 3,
    type: 'multiple_choice',
    question: 'Which of the following are SAP-declared intelligent, sustainable enterprise business processes?',
    options: ['Lead to Cash', 'Recruit to Retire', 'Rent not Buy', 'Revenue to Profit'],
    correctAnswers: [0, 1],
    explanation: 'The four main business processes of an Intelligent, Sustainable Enterprise are Lead to Cash, Recruit to Retire, Source to Pay, Design to Operate.',
    difficulty: 'medium'
  },
  {
    id: 4,
    type: 'true_false',
    question: 'SAP partners with two well known hyperscalers.',
    options: ['True', 'False'],
    correctAnswers: [1],
    explanation: 'SAP partners with four hyperscalers: AWS, Microsoft Azure, Google Cloud Platform, and Alibaba Cloud.',
    difficulty: 'medium'
  },
  {
    id: 5,
    type: 'true_false',
    question: 'SAP Ariba is a cloud-based solution that makes it easier to manage the entire purchasing process.',
    options: ['True', 'False'],
    correctAnswers: [0],
    explanation: 'SAP Ariba does indeed help manage the purchasing process by providing visibility into spending and identifying new sources of savings.',
    difficulty: 'medium'
  },
  {
    id: 6,
    type: 'true_false',
    question: 'Cloud computing can lower your costs by allowing you to use only the resources you need on demand.',
    options: ['True', 'False'],
    correctAnswers: [0],
    explanation: 'Cloud computing enables cost reduction through on-demand resource consumption and pay-as-you-use models.',
    difficulty: 'medium'
  },
  {
    id: 7,
    type: 'true_false',
    question: 'The three key end-to-end scenarios of the SAP BTP are Integration, Data-to-Value, and Extensibility.',
    options: ['True', 'False'],
    correctAnswers: [0],
    explanation: 'SAP Business Technology Platform consists of three main scenarios: Integration, Data-to-Value, Extensibility.',
    difficulty: 'medium'
  },
  {
    id: 8,
    type: 'true_false',
    question: 'It is possible to integrate on-premise scenarios into cloud scenarios of your choice.',
    options: ['True', 'False'],
    correctAnswers: [0],
    explanation: 'Due to Hybrid scenarios, it is possible to integrate on-premise scenarios into cloud scenarios of your choice.',
    difficulty: 'medium'
  },

  // Unit 2 Quiz - SAP BTP Architecture and Services
  {
    id: 9,
    type: 'multiple_choice',
    question: 'Before using services in SAP BTP, what are the possible actions that may need to be completed?',
    options: ['Create an instance', 'Subscribe to the service', 'Configure the service', 'Install the service'],
    correctAnswers: [0, 1],
    explanation: 'Depending on the service, you need to create an instance of the service or subscribe to it.',
    difficulty: 'medium'
  },
  {
    id: 10,
    type: 'true_false',
    question: 'In the SAP Discovery Center you can find information of SAP BTP services.',
    options: ['True', 'False'],
    correctAnswers: [0],
    explanation: 'In the SAP Discovery Center you can find relevant information about services from the SAP BTP.',
    difficulty: 'medium'
  },
  {
    id: 11,
    type: 'true_false',
    question: 'SAP BTP accounts can only get administrated with the SAP BTP cockpit.',
    options: ['True', 'False'],
    correctAnswers: [1],
    explanation: 'Besides the SAP BTP cockpit, you can use command line tools like btp cli or cf cli to administrate your SAP BTP accounts.',
    difficulty: 'medium'
  },
  {
    id: 12,
    type: 'true_false',
    question: 'You need to enable the Cloud Foundry runtime inside the subaccount before the first use.',
    options: ['True', 'False'],
    correctAnswers: [0],
    explanation: 'Before you can use the Cloud Foundry environment inside of spaces, you need to activate Cloud Foundry in the subaccount.',
    difficulty: 'medium'
  },
  {
    id: 13,
    type: 'true_false',
    question: 'You can transfer free-tier service plans to paid service plans with a technical migration.',
    options: ['True', 'False'],
    correctAnswers: [1],
    explanation: 'You can transfer free-tier service plans to paid service plans without a technical migration - you need to change the service plan to a paid one.',
    difficulty: 'medium'
  },
  {
    id: 14,
    type: 'true_false',
    question: 'Destinations are key building blocks in SAP BTP and are used to define connections for outbound communication from your application to remote systems.',
    options: ['True', 'False'],
    correctAnswers: [0],
    explanation: 'Destinations are key building blocks in SAP BTP and are used to define connections for outbound communication from your application to remote systems.',
    difficulty: 'medium'
  },

  // Unit 3 Quiz - Application Development and Automation
  {
    id: 15,
    type: 'single_choice',
    question: 'What can you do with SAP BUILD Apps?',
    options: ['Create mobile apps with a visual editor', 'Create OData services', 'Create database artifacts', 'Create microservice back-ends'],
    correctAnswers: [0],
    explanation: 'With SAP BUILD Apps, you can build enterprise-grade mobile applications based on no-code composed with a visual editor.',
    difficulty: 'medium'
  },
  {
    id: 16,
    type: 'single_choice',
    question: 'Which tool is the new strategic IDE from SAP for Application Development?',
    options: ['SAP Web IDE', 'SAP BTP cockpit', 'SAP HANA Development Workbench', 'SAP Business Application Studio'],
    correctAnswers: [3],
    explanation: 'A modern, flexible, and extensible development environment for building applications for the intelligent, sustainable enterprise.',
    difficulty: 'medium'
  },
  {
    id: 17,
    type: 'true_false',
    question: 'Application Development with SAP BTP is a portfolio of solutions that help you simplify your development.',
    options: ['True', 'False'],
    correctAnswers: [0],
    explanation: 'Can help you simplify the development of your application extensions or custom applications.',
    difficulty: 'medium'
  },
  {
    id: 18,
    type: 'true_false',
    question: 'SAPUI5 is a framework to build native applications.',
    options: ['True', 'False'],
    correctAnswers: [1],
    explanation: 'SAPUI5 is a modern and flexible framework to build web applications for your business needs.',
    difficulty: 'medium'
  },
  {
    id: 19,
    type: 'multiple_choice',
    question: 'Which of the following roles can we typically identify regarding software development?',
    options: ['Professional Developer', 'Data Modeler', 'Administrator', 'Citizen Developer', 'System Architect'],
    correctAnswers: [0, 2, 3],
    explanation: 'The three typical roles in modern software development.',
    difficulty: 'medium'
  },
  {
    id: 20,
    type: 'true_false',
    question: 'No-code development is primarily intended for those who aren\'t comfortable with coding their own software.',
    options: ['True', 'False'],
    correctAnswers: [0],
    explanation: 'Primarily intended to help employees that are process experts to automate tasks, build applications, or optimize their business activities.',
    difficulty: 'medium'
  },

  // Unit 4 Quiz - Integration and APIs
  {
    id: 21,
    type: 'true_false',
    question: 'With the open connectors of the SAP Integration Suite, you can integrate third party applications.',
    options: ['True', 'False'],
    correctAnswers: [0],
    explanation: 'With the open connectors of the SAP Integration Suite, you can integrate third party applications.',
    difficulty: 'medium'
  },
  {
    id: 22,
    type: 'true_false',
    question: 'The SAP Business Accelerator Hub offers you a wide range of sandbox APIs for several SAP products like SAP S/4HANA, SAP BTP, SAP SuccessFactors, SAP Concur, and more.',
    options: ['True', 'False'],
    correctAnswers: [0],
    explanation: 'These sandbox APIs can be used for integration and extension scenarios.',
    difficulty: 'medium'
  },
  {
    id: 23,
    type: 'true_false',
    question: 'The acronym \'CRUD\' stands for COPY, READ, UPDATE, DELETE.',
    options: ['True', 'False'],
    correctAnswers: [1],
    explanation: 'The acronym \'CRUD\' stands for CREATE, READ, UPDATE, DELETE.',
    difficulty: 'medium'
  },
  {
    id: 24,
    type: 'multiple_choice',
    question: 'What are benefits of APIs?',
    options: ['Automation', 'Corporate design', 'Cost efficiency', 'Innovation'],
    correctAnswers: [0, 2, 3],
    explanation: 'Benefits of APIs are an easier and faster integration, automation, and more profitability and cost efficiency with increased efficiency and innovation.',
    difficulty: 'medium'
  },
  {
    id: 25,
    type: 'true_false',
    question: 'API is an acronym for \'Application Programming Interaction.\'',
    options: ['True', 'False'],
    correctAnswers: [1],
    explanation: 'API is an acronym for \'Application Programming Interface.\'',
    difficulty: 'medium'
  },
  {
    id: 26,
    type: 'true_false',
    question: 'You can use the open connector capabilities from the SAP Integration Suite to integrate non-SAP applications.',
    options: ['True', 'False'],
    correctAnswers: [0],
    explanation: 'You can use the open connector capabilities from the SAP Integration Suite to integrate non-SAP applications.',
    difficulty: 'medium'
  },

  // Unit 5 Quiz - Data and Analytics
  {
    id: 27,
    type: 'true_false',
    question: 'Calculation views are defined on top of tables to provide the data processing layer.',
    options: ['True', 'False'],
    correctAnswers: [1],
    explanation: 'Calculation views do not store data but calculate results on-the-fly based on live data in source tables.',
    difficulty: 'medium'
  },
  {
    id: 28,
    type: 'multiple_choice',
    question: 'Why might customers choose to implement SAP HANA Cloud instead of SAP HANA on premise?',
    options: ['Reduced administration effort on customer side', 'Easy to scale', 'Fast deployment', 'Control the lifecycle of SAP HANA Cloud'],
    correctAnswers: [0, 1, 2],
    explanation: 'SAP HANA Cloud is managed by SAP and partners, easy to scale, and can be deployed quickly.',
    difficulty: 'medium'
  },
  {
    id: 29,
    type: 'single_choice',
    question: 'What is the concept behind Data-To-Value?',
    options: ['Collect and distribute data to partners', 'Collect and analyze data to gather value out of it', 'Collect and sell data to gather money out of it'],
    correctAnswers: [1],
    explanation: 'The data-to-value portfolio provides the complete pathway for extracting business value from previously collected data.',
    difficulty: 'medium'
  },
  {
    id: 30,
    type: 'multiple_choice',
    question: 'Which of the following are capabilities from the SAP Analytics Cloud?',
    options: ['Business Intelligence', 'Business Reporting', 'Augmented Analytics', 'Enterprise Planning', 'Augmented Data'],
    correctAnswers: [0, 2, 3],
    explanation: 'The three main capabilities are Business Intelligence, Augmented Analytics, and Enterprise Planning.',
    difficulty: 'medium'
  },
  {
    id: 31,
    type: 'true_false',
    question: 'SAP BTP does not allow you to use other databases like SAP HANA Cloud.',
    options: ['True', 'False'],
    correctAnswers: [1],
    explanation: 'Data capabilities can be implemented using services like Object Store, Redis, hyperscaler option, or PostgreSQL Service.',
    difficulty: 'medium'
  },
  {
    id: 32,
    type: 'true_false',
    question: 'SAP Datasphere unifies data and analytics in a public cloud solution that covers data warehousing, and analytics capabilities for a data-driven enterprise.',
    options: ['True', 'False'],
    correctAnswers: [0],
    explanation: 'SAP Datasphere provides unified data and analytics capabilities in a public cloud solution for enterprise data warehousing and analytics.',
    difficulty: 'medium'
  },

  // Unit 6 Quiz - Artificial Intelligence (AI)
  {
    id: 33,
    type: 'true_false',
    question: 'You can use the SAP AI Business Services through their API\'s.',
    options: ['True', 'False'],
    correctAnswers: [0],
    explanation: 'SAP AI Business Services offering AI capabilities for several use cases which you consume through their API\'s.',
    difficulty: 'medium'
  },
  {
    id: 34,
    type: 'single_choice',
    question: 'With SAP AI Launchpad you can:',
    options: ['Centralize your AI deployments in a single tool', 'Centralize your AI projects source code in a single tool', 'Centralize your AI lifecycle management in a single tool'],
    correctAnswers: [2],
    explanation: 'SAP AI Launchpad is the central application to access and manage your AI use cases.',
    difficulty: 'medium'
  },
  {
    id: 35,
    type: 'true_false',
    question: 'When you want to utilize artificial intelligence in your business you can\'t work with the SAP BTP.',
    options: ['True', 'False'],
    correctAnswers: [1],
    explanation: 'SAP BTP offers a range of services and solutions for utilizing Artificial Intelligence.',
    difficulty: 'medium'
  },
  {
    id: 36,
    type: 'true_false',
    question: 'SAP is utilizing artificial intelligence in several products of the portfolio.',
    options: ['True', 'False'],
    correctAnswers: [0],
    explanation: 'SAP utilizes artificial intelligence in several products like SAP S/4HANA, SAP Ariba, SAP SuccessFactors.',
    difficulty: 'medium'
  },
  {
    id: 37,
    type: 'true_false',
    question: 'SAP AI Core runs AI models cost-efficiently at scale while preserving privacy and compliance, and integrates natively with SAP applications.',
    options: ['True', 'False'],
    correctAnswers: [0],
    explanation: 'SAP AI Core runs AI models cost-efficiently at scale while preserving privacy and compliance, and integrates natively with SAP applications.',
    difficulty: 'medium'
  },
  {
    id: 38,
    type: 'true_false',
    question: 'With the AI API you can implement AI runtimes in an unified way into your scenarios.',
    options: ['True', 'False'],
    correctAnswers: [0],
    explanation: 'The AI API is a unified API definition that AI runtimes implement.',
    difficulty: 'medium'
  },

  // Unit 7 Quiz - Security Fundamentals
  {
    id: 38,
    type: 'true_false',
    question: 'The XSUAA service stores user record data.',
    options: ['True', 'False'],
    correctAnswers: [1],
    explanation: 'XSUAA service does not store user records. It communicates with identity providers to work with or validate user data.',
    difficulty: 'medium'
  },
  {
    id: 39,
    type: 'true_false',
    question: 'When a global account administrator creates a subaccount, they automatically become the administrator of the subaccount.',
    options: ['True', 'False'],
    correctAnswers: [0],
    explanation: 'When a global account administrator creates a subaccount, they automatically become the administrator.',
    difficulty: 'medium'
  },
  {
    id: 40,
    type: 'multiple_choice',
    question: 'Which of the following tasks is an App Router used to?',
    options: ['Serve static content or files', 'Authenticate users', 'Dispatch request to back-end applications', 'Manage global and sub-accounts'],
    correctAnswers: [0, 1, 2],
    explanation: 'An App Router is used to serve static content or files, authenticate users, and dispatch request to back-end applications (micro-services).',
    difficulty: 'medium'
  },
  {
    id: 41,
    type: 'multiple_choice',
    question: 'Which of the following tasks is the Identity Authentication service mainly responsible for?',
    options: ['Authentication', 'Encryption', 'Single Sign-On', 'Trust configuration'],
    correctAnswers: [0, 2],
    explanation: 'Identity Authentication service is mainly responsible for Authentication and Single Sign-On.',
    difficulty: 'medium'
  },
  {
    id: 42,
    type: 'true_false',
    question: 'SAP ID Service is the default identity provider in SAP BTP.',
    options: ['True', 'False'],
    correctAnswers: [0],
    explanation: 'SAP ID Service is the default identity provider in SAP BTP... pre-configured, standard SAP public IdP.',
    difficulty: 'medium'
  },
  {
    id: 43,
    type: 'true_false',
    question: 'Role Collections consist of multiple individual roles.',
    options: ['True', 'False'],
    correctAnswers: [0],
    explanation: 'Role collections consist of individual roles that combine authorizations for resources and services on SAP BTP.',
    difficulty: 'medium'
  },

  // Unit 8 Quiz - SAP Cloud for Sustainable Enterprises  
  {
    id: 44,
    type: 'multiple_choice',
    question: 'With which methods can you integrate data into your SAP Responsible design and Production?',
    options: ['Connect SAP ERP or SAP Lifecycle Management', 'Use Microsoft Excel files with specific templates', 'Connect to third party systems (Non-SAP)', 'Use only SAP solutions'],
    correctAnswers: [0, 1, 2],
    explanation: 'You can import data from SAP ERP, SAP Lifecycle Management, or Microsoft Excel files with specific templates or through connected third party systems.',
    difficulty: 'medium'
  },
  {
    id: 45,
    type: 'single_choice',
    question: 'How do SAP Sustainability solutions contribute to SAP\'s cloud strategy?',
    options: ['SAP Sustainability solutions are primarily cloud-based, in order to provide integrated capabilities for tracking and mitigating the various sustainability challenges, while supporting opportunities for implementing new sustainable business models.'],
    correctAnswers: [0],
    explanation: 'SAP Sustainability solutions are primarily cloud-based, in order to provide integrated capabilities for tracking and mitigating the various sustainability challenges, while supporting opportunities for implementing new sustainable business models.',
    difficulty: 'medium'
  },
  {
    id: 46,
    type: 'true_false',
    question: 'SAP\'s strategy for the SAP Cloud for Sustainable Enterprises is to include sustainability capabilities in existing SAP products in addition to standalone solutions.',
    options: ['True', 'False'],
    correctAnswers: [0],
    explanation: 'SAP\'s goal is to support your sustainability needs with new software solutions or with including sustainability capabilities inside existing products.',
    difficulty: 'medium'
  },
  {
    id: 47,
    type: 'multiple_choice',
    question: 'Which are part of SAP\'s Three Zero Strategy?',
    options: ['Zero Emissions', 'Zero Waste', 'Zero Inequalities', 'Zero Profit'],
    correctAnswers: [0, 1, 2],
    explanation: 'SAP\'s Three Zero Strategy focuses on Zero Emissions, Zero Waste, and Zero Inequalities.',
    difficulty: 'medium'
  },
  {
    id: 48,
    type: 'true_false',
    question: 'In SAP Product Footprint Management, you can import data from SAP S/4HANA.',
    options: ['True', 'False'],
    correctAnswers: [0],
    explanation: 'SAP Product Footprint Management supports the integration with business systems (for example, SAP S/4HANA Cloud) to import your business data.',
    difficulty: 'medium'
  },
  {
    id: 49,
    type: 'true_false',
    question: 'The green line adds a sustainability dimension to the top and bottom line of enterprise.',
    options: ['True', 'False'],
    correctAnswers: [0],
    explanation: 'The green line is adding a sustainability dimension to the enterprise.',
    difficulty: 'medium'
  }
]