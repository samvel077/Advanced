// let text = 'coords myObject coords help help coords help'.split(' ');
// function foo (myText) {
//     let obj = {};
//     for(let i = 0; i < myText.length; i++) {
//         if(obj[myText[i]]) {
//             obj[myText[i]] += 1;
//         }
//         else {
//             obj[myText[i]] = 1;
//         }
//     }
//     console.log(obj)
// }
// foo(text)


// let a = 'Hello hello aaa bbb sss fff asda dsf aaa bbb ssss'
// let arr = a.split(' ')
// let obj = arr.reduce((acumulator,current)=>{
//      acumulator[current] ? acumulator[current] += 1 : acumulator[current]=1
//      return acumulator
// },{})
// console.log(obj)



// var arr = [
//     {
//         name:'aaa',
//         lastName:'bbb',
//         age:25,
//         complete:true,
//     },
//     {
//         name:'cc',
//         lastName:'aaa',
//         age:18,
//         complete:false,
//     },
//     {
//         name:'nnn',
//         lastName:'aaaa',
//         age:18,
//         complete:true,
//     },
//     {
//         name:'lll',
//         lastName:'kkkk',
//         age:19,
//         complete:false,
//     },
// ]
// let obj = arr.reduce((acumulator,current) =>{
//     if (current.complete) {
//         acumulator.done.push(current)
//     }
//     else {
//         acumulator.failed.push(current)
//     }
//     return acumulator
// },{
//     done:[],
//     failed:[]
// }) 

// console.log(obj);



// function sum(a , b) {
//     if(b){
//         return a + b
//     }
//     return function (c) {
//         return a + c
//     }
// }

// let a = sum(2,3)
// let b = sum(2)(3)

// console.log(a,b);



// function foo() {
//     console.log('aaaaa');
//     foo =  function () {
//         console.log('bbbb');
//     }
// }

// foo()
// foo()
// foo()
// foo()
// foo()



// function fn(string1, string2) {
//     let arr1 = string1.split('');
//     let arr2 = string2.split('');
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length;) {
//             if (arr1[i] === arr2[j]) {
//                 arr1.splice(i,1)
//                 arr2.splice(j,1)
//                 j=0
//             }else{
//                 j++
//             }
//         }
//     }
//     if(!arr1.length && !arr2.length){
//         return true
//     }else {
//         return false
//     }
// }
// var a = fn('vacav', 'cavav')



// var string1 = 'avbcsa'
// var string2 = 'vbscaa'
// function foo(a,b){
//     if(a.split('').sort().join('')===b.split('').sort().join('')){
//         return true
//     }else {
//         return false
//     }
// }



// Array.prototype.myMap = function(callback){
//     let arr = []
//     for(let i=0;i<this.length;i++){
//             arr.push(callback(this[i], i, this))
//     }
//     return arr
// }

