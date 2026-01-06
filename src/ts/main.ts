import { initTheme, themeToggle } from "./ui/themeEvents.ts";
import { sidebarEvents } from "./ui/sidebarEvents.ts";
import "basecoat-css/all";
import Controller from "./controllers/Controller.ts";

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  themeToggle();
  sidebarEvents();
});

// setTimeout(() => {
//   document.getElementById("demo-progress").style.width = `${(2 / 5) * 100}%`;
// }, 500);

const projectController = Controller();
projectController.handleProjectEvent();
projectController.handleProjectFormSubmission();
