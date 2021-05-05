var obj = {
    name: 'aaa',
    lastName: 'aaaaaaaa',
    // foo(){},
    // b: null,
    // c: undefined,
    // b: Symbol()
}


// var obj1 = {
//     lastName: 'bbbb',
//     b: obj
// }

// obj.a = obj1

// var a = JSON.stringify(obj1,['name', 'lastName'])
// console.log(a);

// var a = JSON.stringify(obj)

// var c = JSON.parse(a)
// console.log(a);

// localStorage.setItem('anun', obj)



var a = JSON.stringify(obj)

localStorage.setItem('anun', a)

localStorage.removeItem('anun')
localStorage.clear()

var local = localStorage.getItem('anun')

var b = JSON.parse(local)

console.log(b);