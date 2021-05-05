// // deep copy with JSON
// arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// arr1 = JSON.parse(JSON.stringify(arr))
// arr[0][2] = 'c'
// console.log(arr, 'old');
// console.log(arr1, 'new');






// let obj = {
//     name: 'aaa',
//     lastName: 'bbb',
//     age: 25
// }

// function foo(object, before, after) {
//     let obj = {
//         ...object,
//         [after]: object[before]
//     }
//     delete obj[before]
//     return obj
// }

// let obj1 = foo(obj, 'name', 'anun')
// console.log(obj1);







// var arr = [2, 3, 50, 41, 36, 21]

// arr.sort((a, b) => Math.random() - 0.5)

// console.log(arr);







// let obj = {
//     lastName: 'bbbb',
//     name: 'aaaa'
// }

// let a = Object.freeze(obj)

// a.lastName = 'asdadsadasda'
// delete a.name

// console.log(Object.keys(a))
// console.log(Object.getOwnPropertyDescriptor(obj, 'lastName'));







// const fetchUrl = (url) => {
//     return `${url} response server`
// };
// let obj = {
//     fetchUrl(url) {
//         return `${url} response server`
//     }
// }
// const cache = new Set();
// const proxyFetch = new Proxy(obj.fetchUrl, {
//     apply(target, thisArgs, args) {
//         const url = args[0];
//         console.log(thisArgs, 'thisArgs')
//         if (cache.has(url)) {
//             // console.log('vercnuma cachic')
//             return (`${url} response cache`);
//         } else {
//             // console.log('vernceliua bazaic')
//             cache.add(url);
//             return target(url);
//         }
//     }
// })









// let arr = [1, -2, 10, 22, 22, -10, 10]

// let newArr = [...new Set(arr.filter(item => item > 0))]

// console.log(newArr)


// let newArr = arr.reduce((acumulyator, current) => {
//     if (!acumulyator.includes(current) && current > 0) {
//         acumulyator.push(current)
//     }
//     return acumulyator
// }, [])

// console.log(newArr);







// let arr = ['hwhjsj', 'sakj', 'shja', 'jksg']
// let obj = {}

// function foo(array) {
//     for (let i = 0; i < array.length; i++) {
//         obj[array[i]] = array[i]
//     }
// }

// console.log(obj);
// foo(arr)






// // ex. isNaN
// function foo(a) {
//     if (typeof a === 'number' && a !== 0 && !a) {
//         console.log(true);
//     }
//     else {
//         console.log(false);
//     }
// }

// foo(NaN)










// hercer
// function foo(el) {
//     console.log( el, this.id );
//    }
//    var obj = {
//     id: "awesome"
//    };
//    // Использовать `obj` как `this` для вызовов `foo(..)`
//    [1, 2, 3].forEach( foo, obj );
//    // 1 awesome 2 awesome 3 awesome








// function isNegZero(n) {
//     n = Number(n);
//     return (n === 0) && (1 / n === -Infinity);
// }
// isNegZero(-0); // true
// isNegZero(0 / -3); // true
// isNegZero(0); 









// var a = Array.apply( null, { length: 3 } );
// a; // [ undefined, undefined, undefined ]








// if (!Promise.first) {
//     Promise.first = function (prs) {
//         return new Promise(function (resolve, reject) {
//             // перебрать все обещания
//             prs.forEach(function (pr) {
//                 // нормализовать значение
//                 Promise.resolve(pr)
//                     // обещание, которое выполняется первым,
//                     // побеждает и может разрешить главное
//                     // обещание
//                     .then(resolve);
//             });
//         });
//     };
// }








// preobrozovateli
// function thunkify(fn) {
//     var args = [].slice.call(arguments, 1);
//     return function (cb) {
//         args.push(cb);
//         return fn.apply(null, args);
//     };
// }
// var fooThunk = thunkify(foo, 3, 4);
// // позднее
// fooThunk(function (sum) {
//     console.log(sum); // 7
// });





// let a = [2, 8, 16, 128]
// let b = a.map(el => {
//     if (Number.isInteger(Math.log2(el))) {
//         return Math.log2(el)
//     }
//     return false
// })

// console.log('b:' + " " + b);
// console.log('a:' + ' ' + a);