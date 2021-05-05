// function validate() {
//     const form = document.getElementById('form')
//     const email = document.getElementById('email').value
//     const pattern = /^[^ ]+@[^]+\.[a-z]{2,3}$/

//     if (email.match(pattern)) {
//         form.classList.add('valid')
//         form.classList.remove('invalid')
//     }
//     else {
//         form.classList.add('invalid')
//         form.classList.remove('valid')
//     }
//     if (email === "") {
//         form.classList.remove('valid')
//         form.classList.remove('invalid')
//     }
// }






let span = document.querySelector('span')
let resulte

function stugum() {
    if (isNaN(resulte)) {
        setTimeout(() => {
            span.innerHTML = 'RESULT =' + ' ' + ''
            alert('Its Not a NUMBER')
        }, 100);
    }
    span.innerHTML =span.innerHTML + resulte
}

function sum() {
    let value1 = document.getElementById('value1').value
    let value2 = document.getElementById('value2').value
    resulte = parseInt(value1) + parseInt(value2)
    stugum()
}

function hanum() {
    let value1 = document.getElementById('value1').value
    let value2 = document.getElementById('value2').value
    resulte = parseInt(value1) - parseInt(value2)
    stugum()
}

function bazmapatkum() {
    let value1 = document.getElementById('value1').value
    let value2 = document.getElementById('value2').value
    resulte = parseInt(value1) * parseInt(value2)
    stugum()
}

function bashanum() {
    let value1 = document.getElementById('value1').value
    let value2 = document.getElementById('value2').value
    resulte = parseInt(value1) / parseInt(value2)
    stugum()
}

function jnjel() {
    span.innerHTML = 'RESULT =' + ' ' + ''
}