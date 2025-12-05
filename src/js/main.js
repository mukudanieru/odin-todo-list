import "basecoat-css/all";

const toggleBtn = document.querySelector("#theme-toggle");

toggleBtn.addEventListener("click", () => {
    console.log(localStorage);
    document.body.classList.toggle("dark");
    localStorage.setItem(
        "theme",
        document.body.classList.contains("dark") ? "dark" : "light"
    );
});
