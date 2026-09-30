/**
 * Projects data — append an object to PROJECTS_RAW to add a project.
 *
 * Required: name, desc, tech, category, date
 * Optional: link (omit if no GitHub/live URL), image, type
 *
 * id is assigned automatically. Missing image → default placeholder.
 * Missing type → derived from category. Missing/empty link → "Coming Soon" UI.
 */

const DEFAULT_IMAGE = '/images/pose/pose_m18.png';

const CATEGORY_TYPE = {
  frontend: 'Frontend',
  backend: 'Backend API',
  fullstack: 'Full Stack',
  infrastructure: 'Infrastructure',
};

const PROJECTS_RAW = [
  {
    name: 'Microservices with Node.js & React',
    type: 'Full Stack',
    link: 'https://github.com/Shivam327/Microservice-with-Node-JS-and-React',
    desc: 'Scalable microservices app with Node.js, React, Next.js, MongoDB, Docker, and Kubernetes.',
    tech: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Docker', 'Kubernetes', 'TypeScript'],
    image: '/images/pose/pose_m18.png',
    category: 'fullstack',
    date: 'December 2024',
  },
  {
    name: 'Car-Value API',
    type: 'Backend API',
    link: 'https://github.com/Shivam327/Used-car-API-NestJS',
    desc: 'Backend API for a used car marketplace with NestJS, TypeORM, and PostgreSQL. Optimized for production performance.',
    tech: ['NestJS', 'TypeScript', 'TypeORM', 'PostgreSQL', 'SQLite'],
    image: '/images/pose/pose_m19.png',
    category: 'backend',
    date: 'November 2024',
  },
  {
    name: 'Blog with NestJS & Angular',
    type: 'Full Stack',
    link: 'https://github.com/Shivam327/Blog-with-NestJS-and-Angular',
    desc: 'Dockerized blog platform with NestJS (Observables) backend and Angular frontend. Auth, article management, Markdown.',
    tech: ['NestJS', 'Angular', 'TypeScript', 'Docker', 'RxJS'],
    image: '/images/pose/pose_m20.png',
    category: 'fullstack',
    date: 'October 2024',
  },
  {
    name: 'Out of Loop',
    type: 'Full Stack',
    link: 'https://github.com/Shivam327/Out-of-Loop',
    desc: 'Reduce noise. See clearly. TypeScript productivity tool for focused work.',
    tech: ['TypeScript', 'React', 'Node.js'],
    image: '/images/pose/pose_m21.png',
    category: 'fullstack',
    date: 'September 2024',
  },
  {
    name: '2D Metaverse',
    type: 'Full Stack',
    link: 'https://github.com/Shivam327/2d-metaverse',
    desc: '2D multiplayer metaverse experiment — real-time shared virtual space.',
    tech: ['JavaScript', 'WebSocket', 'Canvas API'],
    image: '/images/pose/pose_m22.png',
    category: 'fullstack',
    date: 'August 2024',
  },
  {
    name: 'Infrastructure Monitoring',
    type: 'Infrastructure',
    desc: 'Real-time monitoring stack with Grafana, Prometheus, Docker, and Kubernetes.',
    tech: ['Grafana', 'Prometheus', 'Docker', 'Kubernetes', 'Shell'],
    image: '/images/pose/pose_m18.png',
    category: 'infrastructure',
    date: 'July 2024',
  },
];

const normalizeProject = (project, index) => {
  const link = project.link && project.link !== '#' ? project.link : null;
  return {
    ...project,
    id: index + 1,
    link,
    hasLink: Boolean(link),
    image: project.image || DEFAULT_IMAGE,
    type: project.type || CATEGORY_TYPE[project.category] || 'Project',
    tech: project.tech || [],
  };
};

export const PROJECTS = PROJECTS_RAW.map(normalizeProject);

export const PROJECT_CATEGORIES = {
  ALL: 'all',
  FRONTEND: 'frontend',
  BACKEND: 'backend',
  FULLSTACK: 'fullstack',
  INFRASTRUCTURE: 'infrastructure',
};

export const getProjectsByCategory = (category) => {
  if (category === PROJECT_CATEGORIES.ALL) {
    return PROJECTS;
  }
  return PROJECTS.filter((project) => project.category === category);
};

export const getProjectById = (id) =>
  PROJECTS.find((project) => project.id === Number(id));
