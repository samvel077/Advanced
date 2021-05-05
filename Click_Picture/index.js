document.addEventListener("mousemove", (e) => {
    let body = document.querySelector('body')
    let bubbles = document.createElement('span')

    let num = Math.random() * 10

    let x = e.offsetX
    let y = e.offsetY
    let size = Math.random() * 100

    bubbles.style.left = x + 'px'
    bubbles.style.top = y + 'px'
    bubbles.style.width = 30 + size + 'px'
    bubbles.style.height = 30 + size + 'px'

    if (num >= 0 && num < 1) {
        bubbles.style.backgroundImage = 'url(./smile1.png)'
    }
    if (num >= 1 && num < 2) {
        bubbles.style.backgroundImage = 'url(./smile2.png)'
    }
    if (num >= 2 && num < 3) {
        bubbles.style.backgroundImage = 'url(./smile3.png)'
    }
    if (num >= 3 && num < 4) {
        bubbles.style.backgroundImage = 'url(./smile4.png)'
    }
    if (num >= 4 && num < 5) {
        bubbles.style.backgroundImage = 'url(./smile5.png)'
    }
    if (num >= 5 && num < 6) {
        bubbles.style.backgroundImage = 'url(./smile6.png)'
    }
    if (num >= 6 && num < 7) {
        bubbles.style.backgroundImage = 'url(./smile7.png)'
    }
    if (num >= 7 && num < 8) {
        bubbles.style.backgroundImage = 'url(./smile8.png)'
    }
    if (num >= 8 && num < 9) {
        bubbles.style.backgroundImage = 'url(./smile9.png)'
    }
    if (num >= 9 && num < 10) {
        bubbles.style.backgroundImage = 'url(./smile10.png)'
    }

    setTimeout(() => {
        bubbles.remove()
    }, 3500);

    body.appendChild(bubbles)
})