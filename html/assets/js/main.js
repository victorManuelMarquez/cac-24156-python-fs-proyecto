// VARIABLES
let breakpoint_lg = getComputedStyle(document.documentElement).getPropertyValue('--breakpoint-lg').replace("px", "");
let mainMenuToggler = document.querySelector('button[data-collapse="menu-container"]');
let mainMenuContainer = document.querySelector(mainMenuToggler.dataset.target);
let mainMenu = mainMenuContainer.querySelector(".menu");
let menuLinks = mainMenu.querySelectorAll('.menu-item');

// Agrego el evento que colapsará o no el menú desplegable
mainMenuToggler.addEventListener('click', () => {
    // se agrega hasta el siguiente click la clase "transform" la cual es un selector que hará el
    // efecto de "X" en el botón del menú
    mainMenuToggler.classList.toggle("transform");
    // Si el menú ya está desplegado se definirán nuevos valores según corresponda a ambos estados
    if (mainMenuToggler.dataset.menuExpanded === "true") {
        mainMenuContainer.style.height = "";
        mainMenuToggler.dataset.menuExpanded = "false";
    } else {
        mainMenuToggler.dataset.menuExpanded = "true";
        mainMenu.classList.add("show");
        mainMenuContainer.style.height = mainMenu.offsetHeight + "px";
    }
});

// Agrego un evento que al finalizar la transición (mientras colapsa el menú) se elimina la clase "show"
// la cual sirve de bandera para ocultar el desplegable (solución a otro bug visual cuando no tenía dicha clase)
mainMenuContainer.addEventListener('transitionend', () => {
    if (mainMenuToggler.dataset.menuExpanded === "false") {
        mainMenu.classList.remove("show");
    }
})

// Agrego un evento para que cada enlace al ser clickeado devuelva al menú a su estado inicial (colapsado)
menuLinks.forEach((anchor) => {
    anchor.addEventListener('click', () => {
        if (window.innerWidth < breakpoint_lg) {
            // invoco al evento del botón del menú desplegable
            mainMenuToggler.dispatchEvent(new Event('click'));
        }
    });
});

// Evento al escalar la pantalla
window.addEventListener('resize', () => {
    // si la pantalla está dentro del rango "large"
    if (window.innerWidth >= breakpoint_lg) {
        // evito un bug visual
        mainMenuContainer.style.height = "";
    } else {
        // restauro las dimensiones en el modo responsive
        mainMenuContainer.style.height = mainMenu.offsetHeight + "px";
    }
});