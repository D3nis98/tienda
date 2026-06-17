document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("toggle-theme");
    const html = document.documentElement;

    // 1. Al cargar la página, aplicar el tema guardado (si existe)
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        html.setAttribute("data-bs-theme", savedTheme);
    }

    // 2. Escuchar el click para alternar y guardar
    btn.addEventListener("click", function () {
        const current = html.getAttribute("data-bs-theme");
        
        const next = current === "dark" 
            ? "light" 
            : "dark";

        html.setAttribute("data-bs-theme", next);

        // Guardar la elección en el navegador
        localStorage.setItem("theme", next);
    });
});