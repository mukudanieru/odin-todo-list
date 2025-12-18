export interface TaskData {
  id: string;
  projectID: string;
  title: string;
  description: string;
  dueDate: Date;
  priority: string;
  completed: boolean;
}

export interface TaskInstance {
  getID(): string;
  getProjectID(): string;
  getTitle(): string;
  getDescription(): string;
  getDueDate(): Date;
  getPriority(): string;
  isCompleted(): boolean;
  setTitle(newTitle: string): void;
  setDescription(newDescription: string): void;
  toggleCompleted(): void;
  toJSON(): TaskData;
}

export default function Task(task: TaskData): TaskInstance {
  const id = task.id;
  let _title = task.title;
  let _description = task.description;
  let _completed = task.completed;

  return {
    getID: () => id,
    getProjectID: () => task.projectID,
    getTitle: () => _title,
    getDescription: () => _description,
    getDueDate: () => task.dueDate,
    getPriority: () => task.priority,
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

    toJSON() {
      return {
        id,
        projectID: task.projectID,
        title: _title,
        description: _description,
        dueDate: task.dueDate,
        priority: task.priority,
        completed: _completed,
      };
    },
  };
}
