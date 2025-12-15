import { initTheme, themeToggle } from "./ui/themeEvents";
import { sidebarEvents } from "./ui/sidebarEvents";
import "basecoat-css/all";

document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    themeToggle();
    sidebarEvents();
});
