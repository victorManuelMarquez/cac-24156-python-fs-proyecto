let breakpoint_lg = getComputedStyle(document.documentElement).getPropertyValue('--breakpoint-lg').replace("px", "");
let mainMenuToggler = document.querySelector('button[data-collapse="menu-container"]');
let mainMenuContainer = document.querySelector(mainMenuToggler.dataset.target);
let mainMenu = mainMenuContainer.querySelector(".menu");
let menuLinks = mainMenu.querySelectorAll('.menu-item');

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

menuLinks.forEach((anchor) => {
    anchor.addEventListener('click', () => {
        if (window.innerWidth < breakpoint_lg) {
            mainMenuToggler.dispatchEvent(new Event('click'));
        }
    });
});

window.addEventListener('resize', () => {
    if (window.innerWidth >= breakpoint_lg) {
        if (mainMenuToggler.dataset.menuExpanded === "true") {
            mainMenuToggler.dispatchEvent(new Event('click'));
        }
    }
});