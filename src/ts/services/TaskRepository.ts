import type { TaskInstance } from "../models/Task";

export default function TaskRepository() {
  const tasks: Map<string, TaskInstance> = new Map();

  return {
    add: (task: TaskInstance) => {
      // RETURNS the MAP
      return tasks.set(task.getID(), task);
    },

    remove: (taskID: string) => {
      // TRUE, if ID existed and was removed
      // FALSE, if ID did not exist
      return tasks.delete(taskID);
    },

    findByID: (taskID: string) => {
      // RETURNS the object
      return tasks.get(taskID);
    },

    updateTitle: (taskID: string, newTitle: string) => {
      const taskData = tasks.get(taskID);

      if (taskData === undefined) return;

      return taskData.setTitle(newTitle);
    },

    updateDescription: (taskID: string, newDescription: string) => {
      const taskData = tasks.get(taskID);

      if (taskData === undefined) return;

      return taskData.setDescription(newDescription);
    },

    toggleTask: (taskID: string) => {
      const taskData = tasks.get(taskID);

      if (taskData === undefined) return;

      return taskData.toggleCompleted();
    },

    getAll: () => {
      return Array.from(tasks.values());
    },

    getByProjectID: (projectID: string) => {
      const getByProject = Array.from(tasks.values());

      return getByProject.filter((task) => {
        return projectID === task.getProjectID();
      });
    },

    isEmpty: () => {
      return tasks.size === 0;
    },
  };
}
