export const SERVICES = [
  {
    title: 'Web App Development',
    description: 'Full-stack TypeScript applications with React frontends and NestJS backends',
    icon: '💻',
    features: ['React / NestJS / TypeScript', 'PostgreSQL / MongoDB / Redis', 'REST & GraphQL APIs', 'Responsive design']
  },
  {
    title: 'API & Microservices',
    description: 'Production-grade backend APIs and distributed service architecture',
    icon: '🔌',
    features: ['NestJS microservices', 'RabbitMQ / Kafka messaging', 'Redis caching strategies', 'Auth & rate limiting']
  },
  {
    title: 'Observability & Monitoring',
    description: 'End-to-end production visibility — metrics, logging, and alerting from scratch',
    icon: '📊',
    features: ['Prometheus + Grafana stacks', 'OpenTelemetry instrumentation', 'Structured logging', 'Real-time alerting']
  },
  {
    title: 'ERP & Process Automation',
    description: 'Custom business tools, ERPNext deployments, and Python automation pipelines',
    icon: '⚙️',
    features: ['ERPNext / Frappe customization', 'Python automation pipelines', 'Pentaho ETL', 'Custom admin dashboards']
  },
  {
    title: 'CI/CD & DevOps',
    description: 'Automated pipelines, containerized deployments, and infrastructure as code',
    icon: '🚀',
    features: ['GitHub Actions / GitLab CI', 'Docker + Kubernetes', 'Terraform IaC', 'AWS (S3, EC2, RDS, Lambda)']
  }
];

/** Normalize services — auto id from index so adding a row is enough */
export const getServices = () =>
  SERVICES.map((service, index) => ({
    ...service,
    id: index + 1,
    icon: service.icon || '🛠️',
  }));

export const getServiceById = (id) => getServices().find((service) => service.id === id);
