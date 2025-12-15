export default function TaskRepository() {
    const tasks = new Map();

    return {
        add: (task) => {
            // RETURNS the MAP
            return tasks.set(task.getID(), task);
        },

        remove: (taskID) => {
            // TRUE, if ID existed and was removed
            // FALSE, if ID did not exist
            return tasks.delete(taskID);
        },

        findByID: (taskID) => {
            // RETURNS the object
            return tasks.get(taskID);
        },

        updateTitle: (taskID, newTitle) => {
            return tasks.get(taskID).setTitle(newTitle);
        },

        updateDescription: (taskID, newTitle) => {
            return tasks.get(taskID).setDescription(newTitle);
        },

        toggleTask: (taskID) => {
            return tasks.get(taskID).toggleCompleted();
        },

        getAll: () => {
            return Array.from(tasks.values());
        },

        getByProjectID: (projectID) => {
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
