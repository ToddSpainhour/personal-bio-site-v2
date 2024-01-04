import { workHistoryData } from "../data/workHistoryData.js" ;
import { educationData } from "../data/educationData.js";


const printToDom = (whereToPutIt, whatToPutThere) => {
    const selectedDivToPutContent = document.getElementById(whereToPutIt);
    selectedDivToPutContent.innerHTML = whatToPutThere;
}


const buildWorkHistoryCards = () => {
    let domString = '';

    for(let i = 0; i < workHistoryData.length; i++){
        if(workHistoryData[i].makeVisiableOnSite == true){
            
            domString += `<div class="card">`
                domString += `<div class="card-header">`
                    domString += `<img src="${workHistoryData[i].organizationLogo}" class="company-logo"></img>`
                    domString += `<h3 class="organization-name">${workHistoryData[i].organizationName}</h3>`
                        domString += `<div class="job-title-container">`
                    domString += `<h3 class="job-title">${workHistoryData[i].jobTitle}</h3>`
                    domString += `</div>`
                domString += `</div>`

                for(let j = 0; j < workHistoryData[i].jobDetails.length; j++){
                    domString += `<ul>`
                        domString += `<li>${workHistoryData[i].jobDetails[j]}</li>`
                    domString += `</ul>`
                }

                domString += `<div class="date-and-location-container">`
                domString += `<p class="date-range">${workHistoryData[i].dateRange}</p>`
                domString += `<p>${workHistoryData[i].organizationLocation}</p>`
                domString += `</div>`
            domString += `</div>`
        }
    }
    printToDom('work-history-container', domString)
}


const buildEducationCards = () => {
    let domString = '';

    for(let i = 0; i < educationData.length; i++){
        domString += `<div class="card">`
        domString += `<h3>${educationData[i].degreeName}</h3>`
        domString += `<h5>${educationData[i].schoolName}</h5>`
        domString += `<h6>${educationData[i].yearsAttended}</h6>`
        domString += `</div>`
    }
    printToDom('education-container', domString);
}


export { buildWorkHistoryCards, buildEducationCards };