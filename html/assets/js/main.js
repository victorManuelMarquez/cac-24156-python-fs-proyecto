// MENU RESPONSIVO
let botonesResponsive = document.querySelectorAll('button[type="button"]');

function controlarContenedor(colapsable) {
    if (colapsable.classList.contains("mostrar"))
        colapsable.classList.remove("mostrar");
    else
        colapsable.classList.add("mostrar");
}

botonesResponsive.forEach((btn) => {
    let colapsable = document.querySelector(btn.dataset.colapsarContenedor);
    btn.addEventListener("click", () => controlarContenedor(colapsable));
    colapsable.querySelectorAll('.menu-link').forEach((enlace) => {
        enlace.addEventListener("click", () => controlarContenedor(colapsable));
    });
});
// FIN DEL MENU RESPONSIVO