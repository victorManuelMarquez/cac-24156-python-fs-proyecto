let button = document.getElementById("changeTheme");
const data = "data-blog-theme";
const lightIcon = "bi-sun-fill";
const darkIcon = "bi-moon-stars-fill";

button.addEventListener('click', () => {
    let icon = button.getElementsByTagName('i')[0];
    if (document.documentElement.dataset.blogTheme === "light") {
        document.documentElement.setAttribute(data, "dark");
        icon.classList.remove(lightIcon);
        icon.classList.add(darkIcon);
    } else {
        document.documentElement.setAttribute(data, "light");
        icon.classList.remove(darkIcon);
        icon.classList.add(lightIcon);
    }
});

function hideMenu(value) {
    let menuResponsive = document.querySelector(value);
    if (menuResponsive.classList.contains("show"))
        menuResponsive.classList.remove("show");
    else
        menuResponsive.classList.add("show");
}

let menuButton = document.getElementById("menuButton");
menuButton.addEventListener('click', () => hideMenu(menuButton.dataset.idMenu));

let collapsibleContainer = document.querySelector(menuButton.dataset.idMenu);
let collapsibleContainerLinks = collapsibleContainer.querySelectorAll(".nav-link");
collapsibleContainerLinks.forEach(link => {
    link.addEventListener("click", () => hideMenu(menuButton.dataset.idMenu));
})