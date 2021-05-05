// let img1 = document.getElementById('img1')
// let img2 = document.getElementById('img2')
// let x = 180
// let y = -90
// let z = 0

// img2.addEventListener('click', () => {
//     img1.style.transform = 'rotateY(' + z + 'deg)'
//     img2.style.transform = 'rotateY(' + y + 'deg)'
//     img1.style.transition = '1000ms'
// })

// img1.addEventListener('click', () => {
//     img2.style.transform = 'rotateY(' + z + 'deg)'
//     img1.style.transform = 'rotateY(' + x + 'deg)'
//     img2.style.transition = '1000ms'/
// })


let cards = document.querySelectorAll('#img')

function flipCard() {
    this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', flipCard));
