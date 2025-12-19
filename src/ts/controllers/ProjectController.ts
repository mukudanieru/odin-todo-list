import Project from "../models/Project.ts";
import ProjectRepository from "../services/ProjectRepository.ts";
import ProjectView from "../views/ProjectView.ts";

export default function ProjectController() {
  const projectRepository = ProjectRepository();
  const projectView = ProjectView();

  // Initial Rendering
  projectView.render(projectRepository.getAll());

  return {
    handleProjectFormSubmission() {
      const projectFormSubmission = document.querySelector<HTMLFormElement>(
        "#project-form-submission"
      );
      if (!projectFormSubmission) return;

      const nameInput = document.querySelector<HTMLInputElement>("#name");
      if (!nameInput) return;

      const cancelProjectForm = document.querySelector<HTMLButtonElement>(
        "#cancel-create-project"
      );
      if (!cancelProjectForm) return;

      const errorDiv = document.querySelector<HTMLDivElement>("#error-message");
      if (!errorDiv) return;

      // FORM SUBMISSION EVENT
      projectFormSubmission.addEventListener("submit", (e) => {
        e.preventDefault();

        const id = crypto.randomUUID();

        const name = nameInput.value.trim();

        if (name === "") {
          nameInput.classList.remove("border-muted", "dark:border-muted-dark");
          nameInput.classList.add("border-red-500", "dark:border-red-400");
          errorDiv.innerHTML = "Project name cannot be blank";
          errorDiv.classList.remove("hidden");

          return;
        }

        projectRepository.add(Project({ id, name }));
        projectView.render(projectRepository.getAll());

        nameInput.value = "";
        projectFormSubmission.closest("dialog")?.close();
      });

      // INPUT HANDLING SUBMISSION
      nameInput.addEventListener("keydown", () => {
        nameInput.classList.remove("border-red-500", "dark:border-red-400");
        nameInput.classList.add("border-muted", "dark:border-muted-dark");
        errorDiv.innerHTML = "";
        errorDiv.classList.add("hidden");
      });

      // CANCEL PROJECT FORM EVENT
      cancelProjectForm.addEventListener("click", () => {
        cancelProjectForm.closest("dialog")?.close();
        nameInput.value = "";

        nameInput.classList.remove("border-red-500", "dark:border-red-400");
        nameInput.classList.add("border-muted", "dark:border-muted-dark");
        errorDiv.innerHTML = "";
        errorDiv.classList.add("hidden");
      });
    },
  };
}
