const checkBox = document.querySelector("#theme-switch");
const bodyTheme = document.body;
const LS_KEY = 'switch';

document.addEventListener('DOMContentLoaded', checkLocalStorage);

checkBox.addEventListener('click', event => {
    const checkTogle = event.target.checked;
    if (checkTogle) {
        bodyTheme.classList.replace('light', 'dark');
        localStorage.setItem(LS_KEY, 'dark');
    } else {
        bodyTheme.classList.replace("dark", "light");
        localStorage.setItem(LS_KEY, "light");
    }
});

function checkLocalStorage() {
    const saveData = localStorage.getItem(LS_KEY);
    if (saveData === 'dark') {
        bodyTheme.classList.replace("light", "dark");
        checkBox.checked = true;
    } else {
        bodyTheme.classList.replace("dark", "light");
    }
}