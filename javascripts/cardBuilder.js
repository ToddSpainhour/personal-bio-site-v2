import { workHistoryData } from "../data/workHistoryData.js" ;

const printToDom = (whereToPutIt, whatToPutThere) => {
    const selectedDivToPutContent = document.getElementById(whereToPutIt);
    selectedDivToPutContent.innerHTML = whatToPutThere;
}

const buildWorkHistoryCards = () => {
    let domString = '';

    for(let i = 0; i < workHistoryData.length; i++){
        
        if(workHistoryData[i].makeVisiableOnSite == true){
            domString += `<div class="work-history-card">`
            domString += `<h3>${workHistoryData[i].title}</h3>`
            domString += `<h5>${workHistoryData[i].organization}</h5>`
            domString += `<h6>${workHistoryData[i].dateRange}</h6>`

            for(let j = 0; j < workHistoryData[i].jobDetails.length; j++){
                domString += `<ul>`
                domString += `<li>${workHistoryData[i].jobDetails[j]}</li>`
                domString += `</ul>`
            }
            domString += `</div>`
        }
    }

    printToDom('work-history-container', domString)
}

export { buildWorkHistoryCards };