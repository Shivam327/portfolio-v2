export const PROJECTS = [
  {
    id: 1,
    name: "Infrastructure Monitoring System",
    link: "https://github.com/Shivam327/Infrastructure-Monitoring",
    desc: "Real-time monitoring using Grafana, Prometheus, Docker, and K8s.",
    tech: ["React", "Docker", "Grafana", "Prometheus", "Kubernetes"],
    image: "/images/pose/pose_m18.png",
    category: "infrastructure",
    date: "December 2024"
  },
  {
    id: 2,
    name: "Used Car API",
    link: "https://github.com/Shivam327/Used-car-API-NestJS",
    desc: "Backend API with NestJS, PostgreSQL, and TypeORM.",
    tech: ["NestJS", "PostgreSQL", "TypeORM", "Node.js"],
    image: "/images/pose/pose_m19.png",
    category: "backend",
    date: "November 2024"
  },
  {
    id: 3,
    name: "E-commerce Platform",
    link: "#",
    desc: "Full-stack e-commerce solution with React frontend and Node.js backend.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    image: "/images/pose/pose_m20.png",
    category: "fullstack",
    date: "October 2024"
  },
  {
    id: 4,
    name: "Dashboard Analytics",
    link: "#",
    desc: "Real-time analytics dashboard with interactive charts and data visualization.",
    tech: ["React", "Chart.js", "Socket.io", "Node.js"],
    image: "/images/pose/pose_m21.png",
    category: "frontend",
    date: "September 2024"
  },
  {
    id: 5,
    name: "Task Management App",
    link: "#",
    desc: "Collaborative task management application with real-time updates.",
    tech: ["React", "Firebase", "Material-UI", "Redux"],
    image: "/images/pose/pose_m22.png",
    category: "fullstack",
    date: "August 2024"
  }
];

export const PROJECT_CATEGORIES = {
  ALL: 'all',
  FRONTEND: 'frontend',
  BACKEND: 'backend',
  FULLSTACK: 'fullstack',
  INFRASTRUCTURE: 'infrastructure'
};

export const getProjectsByCategory = (category) => {
  if (category === PROJECT_CATEGORIES.ALL) {
    return PROJECTS;
  }
  return PROJECTS.filter(project => project.category === category);
};
