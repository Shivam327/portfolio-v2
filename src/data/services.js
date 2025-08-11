

export const SERVICES = [
  {
    id: 1,
    title: 'Web App Development',
    description: 'Full-stack web applications with modern frameworks and responsive design',
    icon: '',
    features: ['React/Next.js frontends', 'Node.js backends', 'Database design', 'API integration']
  },
  {
    id: 2,
    title: 'API Development',
    description: 'Robust backend APIs and microservices architecture',
    icon: '',
    features: ['RESTful APIs', 'GraphQL', 'Authentication', 'Rate limiting']
  },
  {
    id: 3,
    title: 'Infrastructure Monitoring',
    description: 'Real-time monitoring and alerting systems',
    icon: '',
    features: ['Grafana dashboards', 'Prometheus metrics', 'Docker monitoring', 'K8s insights']
  },
  {
    id: 4,
    title: 'ERP/CRM Customization',
    description: 'Custom business process automation and workflow tools',
    icon: '',
    features: ['Process automation', 'Custom dashboards', 'Integration APIs', 'User management']
  },
  {
    id: 5,
    title: 'CI/CD & DevOps',
    description: 'Automated deployment pipelines and infrastructure as code',
    icon: '',
    features: ['Docker containers', 'Kubernetes orchestration', 'GitHub Actions', 'AWS/Azure setup']
  }
];

export const getServiceById = (id) => SERVICES.find(service => service.id === id);