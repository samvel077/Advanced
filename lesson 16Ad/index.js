// SINGELTON 
class Database {
    constructor(data) {
        if (Database.exict) {
            return Database.instance
        }
        Database.exict = true
        Database.instance = this
        this.data = data
    }
}

const mySQL = new Database('mySQL')
console.log(mySQL);
const mongoDB = new Database('mongoDB')
console.log(mongoDB);






// function Fetch(api) {
//     return new Promise((resolve, reject) => {
//         var xhttp = new XMLHttpRequest();
//         xhttp.open("GET", api, true)
//         xhttp.onreadystatechange = function () {
//             if (this.readyState == 4 && this.status == 200) {
//                 resolve(JSON.parse(this.response))
//             } else {
//                 reject(JSON.parse(this.response))
//             }
//         }
//         xhttp.send();
//     })
// }
// const userData = Fetch('https://randomuser.me/api/');






// PROXY
// let obj = {
//     name: 'aaa',
//     lastName: 'bbb',
//     _password: '123456',
//     checkedPassword(value) {
//         return value === this._password
//     }
// }

// function getter(target, params) {
//     if (params.startsWith('_')) {
//         throw new Error()
//     }
//     return typeof target[params] === 'function' ? target[params].bind(target) : target[params]
// }

// function setter(target, params, value) {
//     if (params.startsWith('_')) {
//         throw new Error()
//     }
//     if (typeof value === 'number' && value < 100 && value > 18) {
//         target[params] = value;
//         return true
//     } else {
//         throw new Error()
//     }
// }

// function deleteProp(target, params) {
//     if (params.startsWith('_')) {
//         throw new Error()
//     }
//     delete target[params]
//     return true
// }

// let a = new Proxy(obj, {
//     get: getter,
//     set: setter,
//     deleteProperty: deleteProp
// })

// var bool = a.checkedPassword('123456')
// console.log(bool)






// const Array = []
// const arr = ["Aram", "Davit", "Hovhannes","Vardan"] 

// arr.sort(function(a, b){
//     return b.length - a.length
// })

// for (let i = 0; i < arr.length; i++) {
//     if (arr[0].length === arr[i].length) {
//         Array.push(arr[i])
//     }
// }

// console.log(Array);






// let strArray = []
// let numArray = []
// let boolArray = []
// const arr = [true,NaN,'Hello',3, false, 'JavaScript', 8, NaN];

// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === 'string') {
//         strArray.push(arr[i])
//     }
//     if (typeof arr[i] === 'number') {
//         numArray.push(arr[i])
//     }
//     if (typeof arr[i] === 'boolean') {
//         boolArray.push(arr[i])
//     }
//     if (Number.isNaN(arr[i])) {
//         numArray.pop(arr[i])
//     }
// }

// console.log(strArray, numArray, boolArray);







// let count = 0
// let arrAll = []
// let result = []
// let arr = [4, 8, 3]
// arr.sort((a, b) => a - b)

// // for (let i = arr[0]; i <= arr[arr.length - 1]; i++) {
// //    arrAll.push(i)
// // }

// // arrAll.filter(item => {
// //     if (arr.includes(item) === false) {
// //         result.push(item)
// //         count = result.length
// //     }
// // })

// for (let i = arr[0]; i <= arr[arr.length - 1]; i++) {
//     result.push(i)
// }

// result = result.filter(item => !arr.includes(item))

// count = result.length
// console.log(result, count);






// function foo(bar1, bar2) {
//     bar1Split = bar1.split("")
//     bar2Split = bar2.split("")
//     let result = 0
//     bar1Split.filter(item => {
//         if (bar2Split.includes(item)) {
//             result++
//         }
//     })
//     console.log(result);
// }

// foo('volvo', 'tesla')







// function compareArray(a, b) {
//     let aSort = a.sort((a, b) => b - a).toString()
//     let bSort = b.sort((a, b) => b - a).toString()
//     if (aSort === bSort) {
//         console.log(true);
//     }
//     else {
//         console.log(false);
//     }
// }

// compareArray([1, 2, 3], [3, 2, 1])







// let filterResult = []
// const searchUser = (param) => {
//     const user = [{ firstName: 'Davit', lastName: 'Sargsyan', age: 20, },
//     { firstName: 'Ani', lastName: 'Hovsepyan', age: 40 },
//     { firstName: 'Anna', lastName: 'Tashchyan', age: 50 },
//     { firstName: 'Aram', lastName: 'Nazaryan', age: 70 },
//     { firstName: 'Hhovo', lastName: 'Manukyan', age: 30 },
//     { firstName: 'Rafo', lastName: 'Safaryan', age: 18 }]

//     for (let i = 0; i < user.length; i++) {
//         if (user[i].firstName.toLowerCase().startsWith(param)) {
//             filterResult.push(user[i])
//         }
//         else if(user[i].age === param) {
//             filterResult.push(user[i])
//         }
//     }
// }
// console.log(filterResult);
// searchUser('an')