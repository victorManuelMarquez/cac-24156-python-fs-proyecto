let breakpoint_lg = getComputedStyle(document.documentElement).getPropertyValue('--breakpoint-lg').replace("px", "");
let mainMenuToggler = document.querySelector('button[data-collapse="menu-container"]');
let mainMenuContainer = document.querySelector(mainMenuToggler.dataset.target);
let mainMenu = mainMenuContainer.querySelector(".menu");

mainMenuToggler.addEventListener('click', () => {
    mainMenuToggler.classList.toggle("transform");
    if (mainMenuToggler.dataset.menuExpanded === "true") {
        mainMenuContainer.style.height = "";
        mainMenuToggler.dataset.menuExpanded = "false";
    } else {
        mainMenuToggler.dataset.menuExpanded = "true";
        mainMenu.classList.add("show");
        mainMenuContainer.style.height = mainMenu.offsetHeight + "px";
    }
});

mainMenuContainer.addEventListener('transitionend', () => {
    if (mainMenuToggler.dataset.menuExpanded === "false") {
        mainMenu.classList.remove("show");
    }
})

window.addEventListener('resize', () => {
    if (window.innerWidth >= breakpoint_lg) {
        if (mainMenuToggler.dataset.menuExpanded === "true") {
            mainMenuToggler.dispatchEvent(new Event('click'));
        }
    }
});