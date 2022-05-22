
const colorThemeChange = (selectedColorTheme) => {
    let htmlElement = document.getElementsByTagName('html')[0];
    htmlElement.className = selectedColorTheme
}


const AddEventListeners = () => {
    const colorThemeButtons = document.getElementsByClassName("colorThemebtn")
    colorThemeButtons.forEach(button => {
        button.addEventListener('click', colorThemeChange)
    });
}


const init = () => {
    AddEventListeners();
}


init();