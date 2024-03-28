let responsiveBtn = document.getElementById("responsiveBtn");
let menuContainer = document.querySelector(responsiveBtn.dataset.collapseTarget);
let menu = menuContainer.querySelector('.menu');
let anchorTarget = "";

responsiveBtn.addEventListener('click', () => {
    if (responsiveBtn.dataset.targetCollapsed === "false") {
        responsiveBtn.dataset.targetCollapsed = "true";
    } else {
        responsiveBtn.dataset.targetCollapsed = "false";
    }
    if (responsiveBtn.dataset.targetCollapsed === "true") {
        menuContainer.style.height = "0px";
    } else {
        menuContainer.classList.add("show");
        let menuHeight = menu.offsetHeight;
        menuContainer.style.height = menuHeight + "px";
    }
    responsiveBtn.classList.toggle("transform");
});

menuContainer.addEventListener('transitionend', () => {
    if (responsiveBtn.dataset.targetCollapsed === "true") {
        menuContainer.classList.remove("show");
        menuContainer.style.height = "";
        if (anchorTarget) {
            let element = document.querySelector(anchorTarget);
            console.log(element);
            element.scrollTo(0, 0);
        }
    }
});

menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
        if (menuContainer.style.height !== "") {
            responsiveBtn.dispatchEvent(new Event('click'));
            anchorTarget = link.hash;
        }
    });
});

window.addEventListener('resize', () => {
    responsiveBtn.classList.remove("transform");
    responsiveBtn.dataset.targetCollapsed = "true";
    menuContainer.classList.remove("show");
    menuContainer.style.height = "";
});