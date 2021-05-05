var arr = [ {
    name : "Jill",
    lastName : "Smith",
    language : "js",
    age: 60
},
{
    name : "Eve",
    lastName : "Jackson",
    language : "html",
    age: 20
},
{
    name :  "John",
    lastName : "Doe",
    language : "css",
    age: 15
},
{
    name :  "Vahe",
    lastName : "Bagratyan",
    language : "js",
    age: 23
},
{
    name :  "Arman",
    lastName : "Harutyunyan",
    language : "css",
    age: 18
},
{
    name :  "Tigran",
    lastName : "Avetisyan",
    language : "html",
    age: 21
},
{
    name :  "Narek",
    lastName : "Poghosyan",
    language : "html",
    age: 16
},
{
    name :  "Levon",
    lastName : "Harutyunyan",
    language : "css",
    age: 45
},
{
    name :  "Manvel",
    lastName : "Davtyan",
    language : "js",
    age: 37
},
{
    name :  "Manuk",
    lastName : "Xachatryan",
    language : "css",
    age: 21
},
{
    name :  "Sveta",
    lastName : "Petrosyan",
    language : "js",
    age: 23
},
{
    name :  "Artak",
    lastName : "Abrahamyan",
    language : "html",
    age: 19
},
{
    name :  "Lyova",
    lastName : "Ohanyan",
    language : "html",
    age: 17
},
{
    name :  "Alik",
    lastName : "Araqelyan",
    language : "js",
    age: 41
},
{
    name :  "Hasmik",
    lastName : "Hayrapetyan",
    language : "css",
    age: 43
}
];
var currentArray = arr;


var tBody = document.querySelector('tbody')
var select = document.querySelector('select')
var input = document.querySelector('input')
var titels = document.querySelectorAll('th')

window.onload = function(){
    let value = localStorage.getItem('language')
    if(value){
        currentArray = arr.filter(item => item.language===value)
        select.value = value
        drowUsers(currentArray)
    }else{
        drowUsers(arr)
    }
}


select.addEventListener('change',(e)=>{
    if(e.target.value==='all'){
        currentArray=arr
        drowUsers(arr)
    }else {
        currentArray = arr.filter(item => item.language===e.target.value)
        drowUsers(currentArray)
    }
    localStorage.setItem('language',e.target.value)
})


function drowUsers(array){
    tBody.innerText =''
    for(let i=0;i<array.length;i++){
        let tr = document.createElement('tr')
        let tdName = document.createElement('td')
        let tdLastName = document.createElement('td')
        let tdPrograming = document.createElement('td')
        let tdAge = document.createElement('td')

        tdAge.innerHTML = array[i].age;
        tdName.innerText = array[i].name;
        tdLastName.innerText = array[i].lastName;
        tdPrograming.innerText = array[i].language
        
        tr.append(tdName,tdLastName,tdPrograming,tdAge)
        tBody.appendChild(tr)
    }
}

