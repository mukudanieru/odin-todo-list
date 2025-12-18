import type { ProjectInstance } from "../models/Project";

function emptyProjectListComponent(): string {
  return `
    <div
        class="flex flex-col justify-center items-center w-full h-24 bg-primary dark:bg-primary-dark rounded-sm border-muted dark:border-muted-dark border-2 border-dashed"
    >
        <span class="text-sm font-semibold text-dark dark:text-light">Empty</span>
    </div>
    `;
}

function projectComponent(projectObject: ProjectInstance): HTMLButtonElement {
  const button = document.createElement("button");

  button.className =
    "flex justify-start items-center p-2 text-sm h-8 rounded-md bg-transparent text-dark dark:text-light cursor-pointer hover:bg-muted dark:hover:bg-muted-dark transition-colors";

  button.dataset.id = projectObject.getID();
  button.textContent = projectObject.getName();

  return button;
}

export default function ProjectView() {
  const projectContainer =
    document.querySelector<HTMLDivElement>("#project-container");

  return {
    render(projects: Array<ProjectInstance>) {
      projectContainer?.replaceChildren();

      if (projects.length === 0 && projectContainer) {
        projectContainer.innerHTML = emptyProjectListComponent();
      }

      for (const project of projects) {
        projectContainer?.appendChild(projectComponent(project));
      }
    },
  };
}
