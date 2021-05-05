// Array.prototype.myFilter = function (callback) {
//     let arr = [];
//     for (let i = 0; i < this.length; i++) {
//         if (callback(this[i], i, this)) {
//             arr.push(this[i])
//         }

//     }
//     return arr

// }

// var arr = [1,2,0,3,""]

// var newArr = arr.myFilter(item => item)

let elemLeft, elemTop, maxElementLeft, maxElementTop, elemRight, elemBottom
let obj = {
    sum: 0,
    time: 0,
}
let elem = document.getElementById("div");
let button = document.querySelector("button");
let p = document.getElementById("p2")
let clicks = document.getElementById("p")
let body = document.querySelector('body')
// elem.addEventListener("mousemove",() => {
// maxElementLeft = 1400
// maxElementTop = 650
// elemLeft = Math.random() * maxElementLeft;
// elem.style.left = elemLeft + 'px';
// elemTop = Math.random() * maxElementTop;
// elem.style.top = elemTop + 'px'
// elemRight = Math.random() * 600;
// elem.style.right = elemRight + 'px';
// elemBottom = Math.random() * 600;
// elem.style.bottom = elemBottom + 'px';
// })
button.addEventListener('click', function start() {
    elem.style.display = 'inline'
    button.style.display = 'none'
    p2.style.opacity = 1
    clicks.style.opacity = 1
    body.style.backgroundImage = "url(https://ethnomir.ru/upload/medialibrary/1a4/pustynya_sahara_2.jpg)"
    foo()
})
function foo(){
    setInterval(function game() {
        if (button.style.display === 'none') {
            obj.time++
        }
        console.log('interval')
        if (obj.time === 20) {
            alert('!!YOU LOSE!!  TRY AGINE')
            window.location.reload()
        }
        maxElementLeft = 1300
        maxElementTop = 600
        var randomNumberLeft = Math.round(Math.random()*1000+100)
        var randomNumberTop = Math.round(Math.random()*1000+100)
        elemLeft = randomNumberLeft+70 >1042 ? 1042-100:randomNumberLeft;
        elem.style.left = elemLeft + 'px';
        elemTop = randomNumberTop+70> 720 ? 720-100 : randomNumberTop;
        elem.style.top = elemTop + 'px'
        console.log(elemLeft,'elemLeft')
        console.log(elemTop,'elemTop')
    }, 800);
}
elem.addEventListener('click', () => {
    obj.sum++
    if (obj.sum > 0) {
        clicks.innerHTML = obj.sum
    }
    if (obj.sum === 5) {
        alert('!!YOU WIN!!')
        window.location.reload()
    }
})



let newObject = {}

Object.defineProperty(newObject, 'a', {
    value: 'sam',
    writable: true, // or false
    enumerable: true, // or false
    configurable: true // or false
})

console.log(newObject.a);


// ex. zamikanie
function fnZamikaniye(n) {
    return function (num) {
        console.log(num * n);
    }
}

let fnSum = fnZamikaniye(10)
fnSum(10)

