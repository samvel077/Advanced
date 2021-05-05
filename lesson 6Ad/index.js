// var input = document.querySelector('input')
// var span = document.querySelector('span')

// input.addEventListener('input', (e) =>{
//     span.innerText = e.target.value
// })


// var inputs = document.querySelectorAll('input')

// function handleSelectCheckbox(event) {
//     console.log(event.target.checked);
//     if (event.target.checked)
//     console.log(event.target.value);
// }

// for (let i = 0; i < inputs.length; i++) {
//     inputs[i].addEventListener('input', handleSelectCheckbox)
// }


// var select = document.querySelector('select')

// select.addEventListener('change', (event)=>{
//     console.log(event.target.value);
// })


// var img = document.createElement('img')
// var div = document.querySelector('div')
// img.setAttribute('src','https://pbs.twimg.com/profile_images/823569976342773760/c2RLAG7h_400x400.jpg')

// div.appendChild(img)


let myTable = document.querySelector('#table')
var inputs = document.querySelectorAll('input')

let arr = [
    { name: 'Arsen', age: 30, language: 'PHP' },
    { name: 'Anna', age: 25, language: 'Java' },
    { name: 'Anahit', age: 23, language: 'JavaScript' },
    { name: 'Armen', age: 35, language: 'PHP' },
    { name: 'Suren', age: 19, language: 'Java' },
    { name: 'Lianna', age: 21, language: 'JavaScript' }
]

let headers = ['Name', 'Age', 'Language'];


let table = document.createElement('table');
let headerRow = document.createElement('tr');

headers.forEach(headerText => {
    let header = document.createElement('th');
    let textNode = document.createTextNode(headerText)
    header.appendChild(textNode)
    headerRow.appendChild(header)
})

table.appendChild(headerRow)

arr.forEach(el => {
    let row = document.createElement('tr')

    Object.values(el).forEach(text => {
        let cell = document.createElement('td');
        let textNode = document.createTextNode(text)
        cell.appendChild(textNode)
        row.appendChild(cell)
    })
    table.appendChild(row)
})

myTable.appendChild(table)

