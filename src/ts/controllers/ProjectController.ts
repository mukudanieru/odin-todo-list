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

      projectFormSubmission.addEventListener("submit", (e) => {
        e.preventDefault();

        const id = crypto.randomUUID();
        const nameInput = document.querySelector<HTMLInputElement>("#name");
        if (!nameInput) return;

        const name = nameInput.value.trim();

        projectRepository.add(Project({ id, name }));
        projectView.render(projectRepository.getAll());

        nameInput.value = "";
      });
    },
  };
}
