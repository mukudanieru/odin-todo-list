export default function Task({
    id = crypto.randomUUID(),
    title,
    description,
    dueDate = null,
    priority,
    completed = false,
    listId,
}) {
    let _completed = completed;
    let _title = title;
    let _description = description;

    return {
        getId: () => id,
        getTitle: () => _title,
        getDescription: () => _description,
        getDueDate: () => dueDate,
        getPriority: () => priority,
        getListId: () => listId,
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
