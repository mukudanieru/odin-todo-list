export interface ProjectData {
  id: string;
  name: string;
}

export interface ProjectInstance {
  getID(): string;
  getName(): string;
  setName(newName: string): void;
  toJSON(): ProjectData;
}

export default function Project(project: ProjectData): ProjectInstance {
  const id = project.id;
  let _name: string = project.name;

  return {
    getID: () => id,
    getName: () => _name,

    setName(newName: string): void {
      _name = newName;
    },

    toJSON(): ProjectData {
      return {
        id,
        name: _name,
      };
    },
  };
}
