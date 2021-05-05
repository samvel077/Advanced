var input = document.getElementsByClassName('name')
var nameDiv = document.getElementById('nameDiv')
var lastNameDiv = document.getElementById('lastNameDiv')
var mailDiv = document.getElementById('mailDiv')
var inputMail = document.getElementById('mail')
var info = document.getElementById('info')

inputMail.addEventListener('input', checkedMail)

for (let i = 0; i < input.length; i++) {
    input[i].addEventListener('input', checkedName)
}

var user = {
    name: '',
    lastName: '',
    mail: ''
}

function selectInfo(valueObj, firstElement, secondElement) {
    user = {
        ...user,
        ...valueObj
    }
    firstElement.style.display = 'none'
    secondElement.style.display = 'flex'
}

function checkedName(e) {
    var dataName = this.getAttribute('data-name')
    var { value } = e.target
    var button = this.nextElementSibling
    var bool = value.split('').every(item => item.charCodeAt() > 64 && item.charCodeAt() < 120)
    if (bool && value.length > 6) {
        button.disabled = false
        if (dataName === 'inputName') {
            button.addEventListener('click', () => selectInfo({ name: value }, nameDiv, lastNameDiv))
        }
        else {
            button.addEventListener('click', () => selectInfo({ lastName: value }, lastNameDiv, mailDiv))

        }
    }
    else {
        button.disabled = true
    }
}

function checkedMail(e) {
    var dataName = this.getAttribute('data-name')
    var { value } = e.target
    var button = this.nextElementSibling
    var bool = value.endsWith('@gmail.com')
    if (bool) {
        button.disabled = false
        button.addEventListener('click', function (e) {
            user = {
                ...user,
                mail:value
            }
            mailDiv.style.display = 'none'
            info.style.display = 'flex'
            info.children[0].innerText += '  ' + user.name
            info.children[1].innerText += '  ' + user.lastName
            info.children[2].innerText += '  ' + user.mail
        })
    }
};




var obj = [
    [1,2,3,5,4,1],
    [3,6,5,1,2,1],
    [1,2,3,4,4,1],
    [1,9,3,5,4,1],
    [1,8,6,1,4,2],
    [1,8,3,3,6,1],
]

var arr = []
var sum = 0

// for (let i = 0; i < obj.length - 2; i++) {
//     for (let j = 0; j < obj[i].length - 2; j++) {
//         sum = arr[i][j] + arr[i + 1][j] + arr[i + 2][j] + arr[i][j + 1] + arr[i][j + 2]
        
//     }
    
// }

for(let i =0;i<obj.length-2;i++){
    for(let j=0;j<obj[i].length-2;j++){
        for(let b=i+2;b>=i;b--){
            for(let a=j+2;a>=j;a--){
                sum += obj[b][a]
            }
        }
        arr.push(sum)
        sum=0
    }
}


var arr = [
    [1,4,1],
    [3,6,'o'],
    [4,'o',1],
    [5,4,1],
    [1,'o',2],
]
var sum =0
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
        if(typeof arr[i][j]!=='string'){
            if(i>0 &&  typeof arr[i-1][j]!=='string'){
                sum+=arr[i][j]
            }else if(i===0){
                sum+=arr[i][j]
            }
        }
    }
}
console.log(sum)