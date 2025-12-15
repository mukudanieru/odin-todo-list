export default function ProjectRepository() {
    const projects = new Map();

    return {
        add: (project) => {
            // RETURNS the MAP
            return projects.set(project.getID(), project);
        },

        remove: (projectID) => {
            // TRUE, if ID existed and was removed
            // FALSE, if ID did not exist
            return projects.delete(projectID);
        },

        findByID: (projectID) => {
            // RETURNS the object
            return projects.get(projectID);
        },

        updateTitle: (projectID, newTitle) => {
            return projects.get(projectID).setTitle(newTitle);
        },

        getAll: () => {
            return Array.from(projects.values());
        },

        isEmpty: () => {
            return projects.size === 0;
        },
    };
}
