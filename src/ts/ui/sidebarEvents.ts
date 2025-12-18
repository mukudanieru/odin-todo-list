export function sidebarEvents() {
  const sidebarToggleBtn = document.querySelector("#sidebar-toggle");

  if (!sidebarToggleBtn) return;

  sidebarToggleBtn.addEventListener("click", () => {
    if (window.innerWidth > 768) {
      document.body.classList.toggle("sidebar-closed");
    } else {
      document.body.classList.toggle("sidebar-open");
    }
  });

  document.addEventListener("click", (e: MouseEvent) => {
    const target = e.target as HTMLElement;

    if (
      window.innerWidth <= 768 &&
      document.body.classList.contains("sidebar-open") &&
      !target.closest(".page-sidebar") &&
      !target.closest("#sidebar-toggle")
    ) {
      document.body.classList.remove("sidebar-open");
    }
  });
}
