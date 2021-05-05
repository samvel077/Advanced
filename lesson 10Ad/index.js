// window.addEventListener('load', shuffleAll);
let button = document.querySelector('button')
button.addEventListener('click', shuffleAll)
let twoSlices = []

function shuffleAll() {
    let levelDiv = document.getElementsByClassName('level-1')
    for (const levelDivImg of levelDiv) {
        let allSlices = levelDivImg.getElementsByClassName('img-holder')
        let orderArray = [];
        for (let i = 0; i < allSlices.length; i++) {
            orderArray.push(i + 1)
        }
        for (let i = 0; i < allSlices.length; i++) {
            let rand = Math.floor(Math.random() * orderArray.length)
            allSlices[i].style.order = orderArray[rand]
            orderArray.splice(rand, 1)
        }
    }
    addClicksToSlices()
}

function addClicksToSlices() {
    let allSlices = document.getElementsByClassName('img-holder')
    for (const slice of allSlices) {
        slice.addEventListener('click', selectMe)
    }
}

function selectMe() {
    this.style.border = '2px solid black'
    twoSlices.push(this)
    if (twoSlices.length === 2) {
        let orderFirst = window.getComputedStyle(twoSlices[0]).getPropertyValue('order')
        let orderSecond = window.getComputedStyle(twoSlices[1]).getPropertyValue('order')
        twoSlices[0].style.order = orderSecond
        twoSlices[1].style.order = orderFirst

        twoSlices[0].style.border = 'none'
        twoSlices[1].style.border = 'none'

        twoSlices.length = 0
    }
}

