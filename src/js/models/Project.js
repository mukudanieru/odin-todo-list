export default function Project({
    id = crypto.randomUUID(),
    name,
    tasks = [],
}) {
    let _name = name;
    let _tasks = [...tasks];

    return {
        getId: () => id,
        getName: () => _name,
        getTasks: () => [..._tasks],

        addTask(task) {
            _tasks.push(task);
        },

        removeTask(taskId) {
            _tasks = _tasks.filter((task) => task.getId() !== taskId);
        },
    };
}
