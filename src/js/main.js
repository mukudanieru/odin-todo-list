import "basecoat-css/all";

const themeToggleBtn = document.querySelector("#theme-toggle");

themeToggleBtn.addEventListener("click", () => {
    console.log(localStorage);
    document.body.classList.toggle("dark");
    localStorage.setItem(
        "theme",
        document.body.classList.contains("dark") ? "dark" : "light"
    );
});

const sidebarToggleBtn = document.querySelector("#sidebar-toggle");

sidebarToggleBtn.addEventListener("click", () => {
    if (window.innerWidth > 768) {
        document.body.classList.toggle("sidebar-closed");
    } else {
        document.body.classList.toggle("sidebar-open");
    }
});

document.addEventListener("click", (e) => {
    if (
        window.innerWidth <= 768 &&
        document.body.classList.contains("sidebar-open") &&
        !e.target.closest(".page-sidebar") &&
        !e.target.closest("#sidebar-toggle")
    ) {
        document.body.classList.remove("sidebar-open");
    }
});
