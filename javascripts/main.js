
const changeColorTheme = (selectedColorTheme) => {
    let htmlElement = document.getElementsByTagName('html')[0];
    htmlElement.className = selectedColorTheme
}

const addColorThemeClickEvents = () => {
    const colorThemeButtons = document.querySelectorAll("colorThemebtn");

    colorThemeButtons.forEach(button => {
        button.addEventListener('click', changeColorTheme);
    })
} 

const addClickEvents = () => {
    addColorThemeClickEvents();
}

const init = () => {
    addClickEvents();
}

init();