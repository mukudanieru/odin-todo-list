export function initTheme() {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add(savedTheme);
    }
}

export function themeToggle() {
    const themeToggleBtn = document.querySelector("#theme-toggle");

    themeToggleBtn.addEventListener("click", () => {
        console.log(localStorage);
        document.body.classList.toggle("dark");
        localStorage.setItem(
            "theme",
            document.body.classList.contains("dark") ? "dark" : "light"
        );
    });
}
