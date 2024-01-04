import * as cardBuilder from "./cardBuilder.js";


// const changeColorTheme = (selectedColorTheme) => {
//         let htmlElement = document.getElementsByTagName('html')[0];
//         htmlElement.className = selectedColorTheme
// }

// const addColorThemeClickEvents = () => {
//     const colorThemeButtons = document.querySelectorAll("button.colorThemebtn");

//     colorThemeButtons.forEach(button => {
//         button.addEventListener('click', changeColorTheme);
//     })
// } 

const addClickEvents = () => {
    //addColorThemeClickEvents();
}

const printCards = () => {
    cardBuilder.buildWorkHistoryCards();
    cardBuilder.buildEducationCards();
}

const init = () => {
    //addClickEvents();
    printCards();
}

init();