export interface Service {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  icon: string;
}

export const services: Service[] = [
  {
    id: 'ai-strategy',
    title: 'AI Strategy & Roadmapping',
    category: 'Core AI Services',
    description: 'Assess your current processes and design a comprehensive AI adoption roadmap tailored to your business objectives.',
    features: [
      'Current process assessment',
      'AI opportunity identification',
      'Implementation roadmap',
      'ROI analysis and projections'
    ],
    icon: 'Route'
  },
  {
    id: 'custom-ai',
    title: 'Custom AI Model Development',
    category: 'Core AI Services',
    description: 'Build NLP, computer vision, forecasting, and recommendation models tailored to your specific business needs.',
    features: [
      'Natural Language Processing',
      'Computer Vision solutions',
      'Forecasting models',
      'Recommendation systems'
    ],
    icon: 'Brain'
  },
  {
    id: 'chatbots',
    title: 'AI Chatbots & Virtual Assistants',
    category: 'Core AI Services',
    description: '24/7 support bots for websites, WhatsApp, mobile apps, and internal tools to enhance customer engagement.',
    features: [
      'Multi-channel support',
      '24/7 availability',
      'Natural conversation flow',
      'Integration with existing systems'
    ],
    icon: 'MessageSquare'
  },
  {
    id: 'automation',
    title: 'Process Automation (RPA + AI)',
    category: 'Core AI Services',
    description: 'Automate repetitive tasks like data entry, report generation, approvals, and more to boost efficiency.',
    features: [
      'Data entry automation',
      'Report generation',
      'Approval workflows',
      'Document processing'
    ],
    icon: 'Zap'
  },
  {
    id: 'predictive-analytics',
    title: 'Predictive Analytics & Forecasting',
    category: 'Core AI Services',
    description: 'Demand forecasting, churn prediction, sales forecasting, and risk scoring powered by advanced AI.',
    features: [
      'Demand forecasting',
      'Churn prediction',
      'Sales forecasting',
      'Risk scoring'
    ],
    icon: 'TrendingUp'
  },
  {
    id: 'ai-integration',
    title: 'AI Integration & MLOps',
    category: 'Core AI Services',
    description: 'Deploy, monitor, and maintain AI models in production with seamless integration to existing systems.',
    features: [
      'Model deployment',
      'Performance monitoring',
      'CRM/ERP integration',
      'Continuous optimization'
    ],
    icon: 'GitBranch'
  },
  {
    id: 'retail-recommendations',
    title: 'AI Product Recommendation Engine',
    category: 'Retail & E-Commerce',
    description: 'Boost sales with intelligent product recommendations that understand customer preferences.',
    features: [
      'Personalized recommendations',
      'Cross-sell opportunities',
      'Real-time adaptation',
      'A/B testing capabilities'
    ],
    icon: 'ShoppingCart'
  },
  {
    id: 'dynamic-pricing',
    title: 'Dynamic Pricing & Promotion Optimization',
    category: 'Retail & E-Commerce',
    description: 'Optimize pricing and promotions in real-time based on market conditions and customer behavior.',
    features: [
      'Real-time price optimization',
      'Promotion effectiveness analysis',
      'Competitor pricing insights',
      'Revenue maximization'
    ],
    icon: 'DollarSign'
  },
  {
    id: 'customer-segmentation',
    title: 'Customer Segmentation & CLV Analytics',
    category: 'Retail & E-Commerce',
    description: 'Understand your customers better with advanced segmentation and customer lifetime value analysis.',
    features: [
      'Behavioral segmentation',
      'CLV prediction',
      'Targeted marketing insights',
      'Retention strategies'
    ],
    icon: 'Users'
  },
  {
    id: 'inventory-forecasting',
    title: 'Inventory & Demand Forecasting',
    category: 'Retail & E-Commerce',
    description: 'Prevent stockouts and overstock with AI-powered inventory and demand forecasting.',
    features: [
      'Stock level optimization',
      'Seasonal demand prediction',
      'Supply chain insights',
      'Automated reordering'
    ],
    icon: 'Package'
  },
  {
    id: 'patient-triage',
    title: 'AI Patient Triage & Appointment Assistant',
    category: 'Healthcare',
    description: 'Streamline patient intake and appointment scheduling with intelligent automation.',
    features: [
      'Symptom assessment',
      'Priority scheduling',
      'Appointment reminders',
      'Patient communication'
    ],
    icon: 'Stethoscope'
  },
  {
    id: 'medical-reports',
    title: 'Medical Report Summarization',
    category: 'Healthcare',
    description: 'Automatically summarize medical reports and automate healthcare documentation.',
    features: [
      'Report summarization',
      'Document automation',
      'Data extraction',
      'Compliance management'
    ],
    icon: 'FileText'
  },
  {
    id: 'healthcare-prediction',
    title: 'Predictive Healthcare Analytics',
    category: 'Healthcare',
    description: 'Predict no-shows and readmission risks to optimize healthcare operations.',
    features: [
      'No-show prediction',
      'Readmission analysis',
      'Resource optimization',
      'Patient risk scoring'
    ],
    icon: 'Activity'
  },
  {
    id: 'ai-tutoring',
    title: 'AI Tutoring & Doubt-Solving Chatbots',
    category: 'Education & Training',
    description: 'Provide personalized learning support with AI-powered tutoring for students.',
    features: [
      ' 24/7 doubt solving',
      'Personalized explanations',
      'Multi-subject support',
      'Progress tracking'
    ],
    icon: 'BookOpen'
  },
  {
    id: 'adaptive-learning',
    title: 'Adaptive Learning Platforms',
    category: 'Education & Training',
    description: 'Create personalized learning paths that adapt to each student\'s pace and style.',
    features: [
      'Personalized learning paths',
      'Skill gap analysis',
      'Adaptive content delivery',
      'Performance analytics'
    ],
    icon: 'GraduationCap'
  },
  {
    id: 'automated-evaluation',
    title: 'Automated Evaluation & Plagiarism Detection',
    category: 'Education & Training',
    description: 'Streamline grading and ensure academic integrity with automated evaluation tools.',
    features: [
      'Automated grading',
      'Plagiarism detection',
      'Similarity analysis',
      'Detailed feedback'
    ],
    icon: 'CheckCircle'
  },
  {
    id: 'fraud-detection',
    title: 'AI Fraud Detection & Risk Scoring',
    category: 'Finance & Insurance',
    description: 'Protect your business with advanced fraud detection and risk assessment.',
    features: [
      'Real-time fraud detection',
      'Risk scoring models',
      'Anomaly detection',
      'Transaction monitoring'
    ],
    icon: 'Shield'
  },
  {
    id: 'document-reading',
    title: 'Automated Document Reading',
    category: 'Finance & Insurance',
    description: 'Extract data from invoices, KYC documents, and bank statements automatically.',
    features: [
      'Invoice processing',
      'KYC automation',
      'Bank statement analysis',
      'Data validation'
    ],
    icon: 'ScanText'
  },
  {
    id: 'credit-scoring',
    title: 'Credit Scoring & Risk Profiling',
    category: 'Finance & Insurance',
    description: 'Make informed lending decisions with AI-powered credit scoring and risk analysis.',
    features: [
      'Credit risk assessment',
      'Alternative data analysis',
      'Default prediction',
      'Portfolio management'
    ],
    icon: 'PieChart'
  },
  {
    id: 'property-chatbots',
    title: 'Lead Qualification Chatbots',
    category: 'Real Estate',
    description: 'Qualify and engage property leads automatically with intelligent chatbots.',
    features: [
      'Lead qualification',
      'Property recommendations',
      '24/7 availability',
      'CRM integration'
    ],
    icon: 'Home'
  },
  {
    id: 'price-prediction',
    title: 'Rental Yield & Price Prediction',
    category: 'Real Estate',
    description: 'Predict property values and rental yields with advanced AI models.',
    features: [
      'Price prediction',
      'Rental yield analysis',
      'Market trend insights',
      'Investment optimization'
    ],
    icon: 'TrendingUp'
  },
  {
    id: 'tenant-screening',
    title: 'Tenant Screening & Risk Analysis',
    category: 'Real Estate',
    description: 'Screen tenants and assess risks with comprehensive AI-powered analysis.',
    features: [
      'Background verification',
      'Risk assessment',
      'Credit checks',
      'Behavioral analysis'
    ],
    icon: 'UserCheck'
  },
  {
    id: 'predictive-maintenance',
    title: 'Predictive Maintenance',
    category: 'Manufacturing & Logistics',
    description: 'Prevent machine downtime with AI-powered predictive maintenance.',
    features: [
      'Failure prediction',
      'Maintenance scheduling',
      'Cost optimization',
      'Equipment monitoring'
    ],
    icon: 'Wrench'
  },
  {
    id: 'supply-chain',
    title: 'Supply Chain Optimization',
    category: 'Manufacturing & Logistics',
    description: 'Optimize supply chain operations and route planning with AI.',
    features: [
      'Route optimization',
      'Demand planning',
      'Inventory management',
      'Logistics optimization'
    ],
    icon: 'Truck'
  },
  {
    id: 'quality-inspection',
    title: 'Quality Inspection using Computer Vision',
    category: 'Manufacturing & Logistics',
    description: 'Automate quality control with AI-powered visual inspection.',
    features: [
      'Defect detection',
      'Real-time inspection',
      'Quality metrics',
      'Automated reporting'
    ],
    icon: 'Eye'
  },
  {
    id: 'app-development',
    title: 'Custom Mobile & Web App Development',
    category: 'App Building Services',
    description: 'End-to-end mobile and web app development from UX/UI to deployment.',
    features: [
      'Cross-platform development',
      'UX/UI design',
      'App Store deployment',
      'Maintenance & support'
    ],
    icon: 'Smartphone'
  },
  {
    id: 'ai-enhanced-apps',
    title: 'AI-Enhanced Applications',
    category: 'App Building Services',
    description: 'Build apps with integrated chatbots, voice assistants, and AI-powered features.',
    features: [
      'Chatbot integration',
      'Voice assistants',
      'AI search',
      'Smart recommendations'
    ],
    icon: 'Sparkles'
  },
  {
    id: 'sector-apps',
    title: 'Sector-Specific Applications',
    category: 'App Building Services',
    description: 'Custom apps for schools, hospitals, real estate, dealers, and distributors.',
    features: [
      'Industry-specific features',
      'Customizable workflows',
      'Role-based access',
      'Integration capabilities'
    ],
    icon: 'Briefcase'
  },
  {
    id: 'legacy-modernization',
    title: 'Legacy System Modernization',
    category: 'App Building Services',
    description: 'Convert old desktop tools and Excel processes into modern web/mobile apps.',
    features: [
      'System migration',
      'Data preservation',
      'Modern interfaces',
      'Cloud deployment'
    ],
    icon: 'RefreshCw'
  },
  {
    id: 'billing-software',
    title: 'Custom Billing & Invoicing Software',
    category: 'Billing & ERP',
    description: 'GST-compliant billing, invoicing, quotations, and recurring billing solutions.',
    features: [
      'GST compliance',
      'Automated invoicing',
      'Quotation management',
      'Payment tracking'
    ],
    icon: 'Receipt'
  },
  {
    id: 'pos-systems',
    title: 'POS Systems',
    category: 'Billing & ERP',
    description: 'Point of sale systems for shops and restaurants with inventory integration.',
    features: [
      'Sales processing',
      'Inventory tracking',
      'Customer management',
      'Analytics dashboard'
    ],
    icon: 'CreditCard'
  },
  {
    id: 'subscription-billing',
    title: 'Subscription & SaaS Billing Platform',
    category: 'Billing & ERP',
    description: 'Automated recurring payments, plan management, and dunning workflows.',
    features: [
      'Recurring billing',
      'Plan management',
      'Payment reminders',
      'Revenue analytics'
    ],
    icon: 'Repeat'
  },
  {
    id: 'accounting-dashboard',
    title: 'Integrated Accounting Dashboards',
    category: 'Billing & ERP',
    description: 'Real-time revenue, expenses, and profit analytics in one place.',
    features: [
      'Real-time reporting',
      'Expense tracking',
      'Profit analysis',
      'Financial insights'
    ],
    icon: 'BarChart3'
  },
  {
    id: 'ai-billing',
    title: 'AI-Assisted Billing & Collections',
    category: 'Billing & ERP',
    description: 'Smart reminders for overdue payments with optimal follow-up timing.',
    features: [
      'Smart reminders',
      'Payment prediction',
      'Automated follow-ups',
      'Collection optimization'
    ],
    icon: 'Bell'
  },
  {
    id: 'billing-integration',
    title: 'Billing System Integration',
    category: 'Billing & ERP',
    description: 'Integration with Tally, Zoho, QuickBooks, payment gateways, and CRM.',
    features: [
      'ERP integration',
      'Payment gateway setup',
      'CRM connectivity',
      'Data synchronization'
    ],
    icon: 'Link'
  },
  {
    id: 'data-warehouse',
    title: 'Data Warehousing',
    category: 'Data & Insights',
    description: 'Set up a single source of truth for all your business data.',
    features: [
      'Data centralization',
      'ETL pipelines',
      'Data governance',
      'Scalable architecture'
    ],
    icon: 'Database'
  },
  {
    id: 'data-cleaning',
    title: 'Data Cleaning & Migration',
    category: 'Data & Insights',
    description: 'Clean, migrate, and ensure quality of your business data.',
    features: [
      'Data cleansing',
      'Quality checks',
      'Migration support',
      'Validation rules'
    ],
    icon: 'FilterX'
  },
  {
    id: 'bi-dashboards',
    title: 'Self-Service BI Dashboards',
    category: 'Data & Insights',
    description: 'Power BI, Tableau, and Looker-style dashboards for business insights.',
    features: [
      'Interactive dashboards',
      'Custom visualizations',
      'Real-time updates',
      'Export capabilities'
    ],
    icon: 'LayoutDashboard'
  },
  {
    id: 'document-search',
    title: 'AI-Powered Document Search',
    category: 'Data & Insights',
    description: 'Search across knowledge bases, policy documents, and SOPs with AI.',
    features: [
      'Semantic search',
      'Document indexing',
      'Quick retrieval',
      'Smart suggestions'
    ],
    icon: 'Search'
  }
];

export const serviceCategories = [
  'Core AI Services',
  'Retail & E-Commerce',
  'Healthcare',
  'Education & Training',
  'Finance & Insurance',
  'Real Estate',
  'Manufacturing & Logistics',
  'App Building Services',
  'Billing & ERP',
  'Data & Insights'
];
