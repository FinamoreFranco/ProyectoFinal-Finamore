
document.addEventListener("DOMContentLoaded", () => {
    const navHTML = `
        <nav class="navbar">
            <ul class="navbar-list">
                <li><a href="index.html">Inicio</a></li>
                <li><a href="cotizador.html">Cotizador</a></li>
            </ul>
        </nav>
    `;

    const navContainer = document.getElementById("app-nav");
    if (navContainer) {
        navContainer.innerHTML = navHTML;
    }
});