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

let responsiveButton = document.getElementById("responsiveButton");
responsiveButton.addEventListener('click', () => {
});