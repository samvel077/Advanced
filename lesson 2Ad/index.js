// const arrImages = ["./1.jpg", "./2.png", "./3.jpg", "./4.jpg"];
// const images = document.querySelectorAll('img')
// const buttons = document.querySelectorAll('button')
// function selectImage(id) {
//     let randomNumber = Math.round(Math.random() * (arrImages.length - 1))
//     images[id].setAttribute('src', arrImages[randomNumber])
//     arrImages.splice(randomNumber, 1)
//     buttons[id].setAttribute('disabled', true)
//     images[id].style.transform = 'translateY(0)';
//     images[id].style.transition = '2000ms'
// }



// var obj = {
//     fullName: {
//         name: "aaa",
//         lastName: 'bbb'
//     },
//     age: 25
// }

// function deepCopy(object) {
//     let newObject = {};
//     for (const iterator in object) {
//         if (typeof object[iterator] === 'object' && object[iterator]) {
//             newObject[iterator] = deepCopy(object[iterator])
//         }
//         else {
//             newObject[iterator] = object[iterator]
//         }
//     }
//     return newObject
// }

// var a = deepCopy(obj)
// a.fullName.name = 'fsasvjh'
// console.log(a.fullName.name);
// console.log(obj.fullName.name);



// var a = 10;
// var b = 20;
// [a,b] = [b,a]
// console.log(a)
// console.log(b)



// var x;
// var y;
// var z;
// var k;
// [x,y,z,k] = [1,2,3,4];
// console.log(x,'xxx')
// console.log(y,'yyy')
// console.log(z,'zzz')