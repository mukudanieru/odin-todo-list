import type { ProjectInstance } from "../models/Project";
import type { TaskInstance } from "../models/Task";

function dropDownMenuComponent(): HTMLDivElement {
  const dropDown = document.createElement("div");
  dropDown.id = "project-dropdown-menu";
  dropDown.className = "dropdown-menu self-end";

  dropDown.innerHTML = `
  <!-- TRIGGER -->
  <button
    type="button"
    id="project-dropdown-menu-trigger"
    aria-haspopup="menu"
    aria-controls="project-dropdown-menu-menu"
    aria-expanded="false"
    class="flex justify-center items-center size-3.5"
  >
    <svg
      class="size-3.5 text-dark dark:text-light"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-ellipsis-vertical-icon lucide-ellipsis-vertical"
    >
      <circle cx="12" cy="12" r="1" />
      <circle cx="12" cy="5" r="1" />
      <circle cx="12" cy="19" r="1" />
    </svg>
  </button>

  <!-- POPOVER -->
  <div
    class="bg-light dark:bg-dark border-primary dark:border-primary-dark"
    id="project-dropdown-menu-popover"
    data-popover
    aria-hidden="true"
    data-side="left"
  >
    <div
      class="text-primary-dark"
      role="menu"
      id="project-dropdown-menu-menu"
      aria-labelledby="project-dropdown-menu-trigger"
    >
      <div
        class="dark:text-primary hover:bg-muted/65 hover:dark:bg-muted-dark/65"
        role="menuitem"
      >
        Edit
      </div>

      <div
        class="dark:text-primary hover:bg-muted/65 hover:dark:bg-muted-dark/65"
        role="menuitem"
      >
        Delete
      </div>
    </div>
  </div>
  `;

  return dropDown;
}

function headerComponent(
  projectObject: ProjectInstance,
  tasks: TaskInstance[]
) {
  const header = document.createElement("header");
  header.className = "flex flex-col gap-5";

  const topSection = document.createElement("div");
  topSection.className = "flex flex-col gap-2.5";

  const titleRow = document.createElement("div");
  titleRow.className = "flex justify-between";

  const h1 = document.createElement("h1");
  h1.className = "text-5xl font-bold text-dark dark:text-light";
  h1.textContent = projectObject.getName();

  titleRow.appendChild(h1);
  titleRow.appendChild(dropDownMenuComponent());

  const statusText = document.createElement("span");
  statusText.className = "text-base font-medium text-dark dark:text-light";

  if (tasks.length === 0) {
    statusText.textContent = `There are currently no tasks.`;
  } else {
    statusText.textContent = `2 of ${tasks.length} tasks completed`;
  }

  topSection.appendChild(titleRow);
  topSection.appendChild(statusText);

  header.appendChild(topSection);

  return header;
}

export default function TaskView() {
  const taskContainer =
    document.querySelector<HTMLDivElement>("#task-container");

  return {
    renderHeader(projectObject: ProjectInstance, tasks: TaskInstance[]) {
      taskContainer?.replaceChildren();

      taskContainer?.appendChild(headerComponent(projectObject, tasks));
    },
  };
}
