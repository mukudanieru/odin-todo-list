import type { ProjectInstance } from "../models/Project";

export default function ProjectView() {}

function emptyProjectListComponent() {}

function projectComponent(projectObject: ProjectInstance) {
  return `
    <button
        class="flex justify-start items-center p-2 text-sm h-8 rounded-md bg-transparent text-dark dark:text-light cursor-pointer hover:bg-muted dark:hover:bg-muted-dark transition-colors"
        data-id="${projectObject.getID()}"
    >${projectObject.getName()}</button>
    `;
}
