let button = document.getElementById("changeTheme");
const data = "data-site-theme";
const lightIcon = "bi-sun-fill";
const darkIcon = "bi-moon-stars-fill";

button.addEventListener('click', () => {
    let icon = button.getElementsByTagName('i')[0];
    if (document.documentElement.dataset.siteTheme === "light") {
        document.documentElement.setAttribute(data, "dark");
        icon.classList.remove(lightIcon);
        icon.classList.add(darkIcon);
    } else {
        document.documentElement.setAttribute(data, "light");
        icon.classList.remove(darkIcon);
        icon.classList.add(lightIcon);
    }
});

let menuButton = document.getElementById("menuButton");
menuButton.addEventListener('click', () => {
    let menuResponsive = document.querySelector(menuButton.dataset.idMenu);
    if (menuResponsive.classList.contains("show"))
        menuResponsive.classList.remove("show");
    else
        menuResponsive.classList.add("show");
});