import { useMemo } from 'react';
import { PROJECTS, PROJECT_CATEGORIES } from '../data/projects';

export const useProjects = (category = PROJECT_CATEGORIES.ALL) => {
  return useMemo(() => {
    if (category === PROJECT_CATEGORIES.ALL) {
      return PROJECTS;
    }
    return PROJECTS.filter(project => project.category === category);
  }, [category]);
};

export const useProject = (id) => {
  return useMemo(() => PROJECTS.find(project => project.id === parseInt(id)), [id]);
};
