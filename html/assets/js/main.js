let menuToggler = document.querySelector('button[data-collapse="menu-container"]');
menuToggler.addEventListener('click', () => {
    menuToggler.classList.toggle("transform");
    let container = document.querySelector(menuToggler.dataset.target);
    if (menuToggler.dataset.menuExpanded === "true") {
        container.style.height = "";
        menuToggler.dataset.menuExpanded = "false";
    } else {
        menuToggler.dataset.menuExpanded = "true";
        let menu = container.querySelector(".menu");
        container.style.height = menu.offsetHeight + "px";
    }
});