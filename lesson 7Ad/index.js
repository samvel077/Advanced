// switch(1) {
//     case 2 : console.log(2); break;
//     default: console.log(3);
//     case 4: console.log(4)
// }
// function foo() {
//     console.log(this)
// }
// function goo() {
//     return arguments[0]()
// }   
// goo(foo)
// const showCase = value => {
//     switch(value) {
//     case 'A':
//         console.log('Case A');
//         break;
//     case 'B':
//         console.log('Case B');
//         break;
//     case undefined:
//         console.log('undefined');
//         break;
//     default:
//         console.log('Do not know!');
//     }
// }
// showCase(String('A'))
// const a = [0];
// if ([0]) {
//     console.log(a == true);
// } else {
//     console.log("boom");
// }

var arr = [{
    name: "Jill",
    lastName: "Smith",
    language: "js",
    age: 16
},
{
    name: "Eve",
    lastName: "Jackson",
    language: "html",
    age: 18
},
{
    name: "John",
    lastName: "Doe",
    language: "css",
    age: 20
},
{
    name: "Vahe",
    lastName: "Bagratyan",
    language: "js",
    age: 21
},
{
    name: "Arman",
    lastName: "Harutyunyan",
    language: "css",
    age: 23
},
{
    name: "Tigran",
    lastName: "Avetisyan",
    language: "html",
    age: 24
},
{
    name: "Narek",
    lastName: "Poghosyan",
    language: "html",
    age: 25
},
{
    name: "Levon",
    lastName: "Harutyunyan",
    language: "css",
    age: 16
},
{
    name: "Manvel",
    lastName: "Davtyan",
    language: "js",
    age: 21
},
{
    name: "Manuk",
    lastName: "Xachatryan",
    language: "css",
    age: 30
},
{
    name: "Sveta",
    lastName: "Petrosyan",
    language: "js",
    age: 18
},
{
    name: "Artak",
    lastName: "Abrahamyan",
    language: "html",
    age: 24
},
{
    name: "Lyova",
    lastName: "Ohanyan",
    language: "html",
    age: 27
},
{
    name: "Alik",
    lastName: "Araqelyan",
    language: "js",
    age: 31
},
{
    name: "Hasmik",
    lastName: "Hayrapetyan",
    language: "css",
    age: 18
}
];

// var currentData = arr
var currentData = []
var nweArr = arr.slice()

var tbody = document.querySelector('tbody')
var select = document.querySelector('select')
// var input = document.querySelector('input')
var checkbox = document.querySelectorAll('input')
var titles = document.querySelectorAll('th')
var button = document.querySelector('button')
var reverse = {
    byName:false,
    byLastName:false,
    byAge:false
}


button.addEventListener('click', () => {
    currentData = nweArr
    drowTable(currentData)
})

for (let i = 0; i < titles.length; i++) {
    titles[i].addEventListener('click', foo)
}

function foo(e) {
    if (this.getAttribute('data-name')) {
        var newArr = arr.sort((a, b) => a.age - b.age)
        if(reverse.byAge){
            currentData = newArr.reverse()
            reverse = {
                ...reverse,
                byAge:false
            }
        }else {
            currentData = newArr
            reverse = {
                ...reverse,
                byAge:true
            }
        }
    }
    else {
        var arrByName = arr.map(item => item.name).sort()
        currentData = arrByName.reduce((acumulyator, current) => {
            arr.forEach(item => {
                if (item.name === current) {
                    acumulyator.push(item)
                }
            })
            return acumulyator
        }, [])
    }
    drowTable(currentData)
}



// for (let i = 0; i < checkbox.length; i++) {
//     checkbox[i].addEventListener('change', foo)

// }

// function foo(e) {
//     if (e.target.checked) {
//         var newArray = arr.filter(item => item.language === e.target.value)
//         currentData = [...currentData, ...newArray]
//     }
//     else {
//         currentData = currentData.filter(item => item.language !== e.target.value)
//         if (!currentData.length) {
//             return drowTable(arr)
//         }
//     }
//     drowTable(currentData)
// }



// input.addEventListener('input', (e) => {
//     var { value } = e.target
//     var arrByName = currentData.filter(({ name }) => name.toLowerCase().startsWith(value.toLowerCase()))
//     drowTable(arrByName)
// })

// select.addEventListener('change', (e) => {
//     if (e.target.value === 'all') {
//         currentData = arr
//         drowTable(arr)
//     }
//     else {
//         currentData = arr.filter(item => item.language === e.target.value)
//         drowTable(currentData)
//     }
// })

function drowTable(array) {
    tbody.innerText = ''
    for (let i = 0; i < array.length; i++) {
        let tr = document.createElement('tr')
        let tdName = document.createElement('td')
        let tdLastName = document.createElement('td')
        let tdLanguage = document.createElement('td')
        let tdAge = document.createElement('td')
        tdName.innerText = array[i].name
        tdLastName.innerText = array[i].lastName
        tdLanguage.innerText = array[i].language
        tdAge.innerText = array[i].age
        tr.append(tdName, tdLastName, tdLanguage, tdAge)
        tbody.appendChild(tr)
    }
}

drowTable(arr)


//erku nuyn anuni handipelu depqum es kodov sxal chi linelu
// var sortArr = arr.map(item => item.name).sort();
//         var fakeArr = [...arr]
//         var newArr = sortArr.reduce((acum,current)=>{
//             var index = fakeArr.findIndex(item => item.name===current)
//             if(index>-1){
//                 acum.push(fakeArr[index])
//                 fakeArr.splice(index,1)
//             }
//             return acum
//         },[])
