import type { ProjectInstance } from "../models/Project";

export default function ProjectRepository() {
  const projects: Map<string, ProjectInstance> = new Map();

  return {
    add: (project: ProjectInstance) => {
      // RETURNS the MAP
      return projects.set(project.getID(), project);
    },

    remove: (projectID: string) => {
      // TRUE, if ID existed and was removed
      // FALSE, if ID did not exist
      return projects.delete(projectID);
    },

    findByID: (projectID: string) => {
      // RETURNS the object
      return projects.get(projectID);
    },

    updateName: (projectID: string, newTitle: string) => {
      const projectData = projects.get(projectID);

      if (projectData == undefined) return;

      return projectData.setName(newTitle);
    },

    getAll: () => {
      return Array.from(projects.values());
    },

    isEmpty: () => {
      return projects.size === 0;
    },
  };
}
