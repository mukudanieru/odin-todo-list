export default function Task({
    id = crypto.randomUUID(),
    projectID,
    title,
    description,
    dueDate = null,
    priority,
    completed = false,
}) {
    let _completed = completed;
    let _title = title;
    let _description = description;

    return {
        getID: () => id,
        getProjectID: () => projectID,
        getTitle: () => _title,
        getDescription: () => _description,
        getDueDate: () => dueDate,
        getPriority: () => priority,
        isCompleted: () => _completed,

        setTitle(newTitle) {
            _title = newTitle;
        },

        setDescription(newDescription) {
            _description = newDescription;
        },

        toggleCompleted() {
            _completed = !_completed;
        },
    };
}
