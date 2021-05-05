// let animal = {
//   name: 'aryuc',
//   foo3: function foo3() {
//     return this.name
//   }
// };
// let rabbit = {
//   __proto__: animal,
//   name: 'vagr'
// };

// console.log(rabbit.name);


// let animal = {
//   eats: true
// };

// let rabbit = {
//   jumps: true,
//   __proto__: animal
// };

// for (let prop in rabbit) {
//   let isOwn = rabbit.hasOwnProperty(prop);

//   if (isOwn) {
//     alert(`Our: ${prop}`); // Our: jumps
//   } else {
//     alert(`Inherited: ${prop}`); // Inherited: eats
//   }
// }




// class Person {
//   constructor(name, lastName, age) {
//     this.lastName = lastName;
//     this.name = name;
//     this.age = age
//   }
//   sayHello() {
//     console.log(`hello ${this.name}`)
//   }
//   barev = () => {
//     console.log(`barev ${this.name}`)
//   }
// }
// class Teacher extends Person {
//   constructor(name, lastName, age, subject) {
//     super(name, lastName, age)
//     this.subject = subject
//   }
//   static number = 20
//   foo() {
//     super.sayHello()
//   }
//   goo() {
//     super.barev()
//   }
// }
// const a = new Teacher('aaa', 'bbb', 'aa', 'aaa')
// a.foo()
// a.goo()




// class Person {
//   constructor(name, lastName, age) {
//     this.lastName = lastName;
//     this.name = name;
//     this.age = age
//   }
//   static sayHello() {
//     console.log(`hello ${this.name}`)
//   }
//   barev = () => {
//     console.log(`barev ${this.name}`)
//   }
// }
// class Teacher extends Person {
//   constructor(name, lastName, age, subject) {
//     super(name, lastName, age)
//     this.subject = subject
//   }
//   foo() {
//     super.sayHello()
//   }
//   goo() {
//     super.barev()
//   }
// }



// // ex. deep copy 
// var obj = {
//   fullName:  {
//     name: 'aa',
//     lastName:'bb'
//   }
// }

// function deepCopy(object) {
//   let newObject = {}
//   for(const key in object) {
//     if (typeof object[key] === 'object' && object[key]) {
//       newObject[key] = object[key]
//     }
//   }
//   return newObject
// }

// var a = deepCopy(obj)





// function Person(name, lastName, age) {
//     this.name = name;
//     this.lastName = lastName;
//     this.age = age
// }
// function Teacher(name, lastName, age, subject) {
//     Person.call(this, name, lastName, age)
//     this.subject = subject
// }
// var a = new Teacher('aaa', 'bbbb', 25, 'cccc')
// console.log(a)





// function Person(name, lastName, age) {
//     this.name = name;
//     this.lastName = lastName;
//     this.age = age
// }
// Person.prototype.sayHello = function () {
//     console.log(`Hello ${this.name}`)
// }
// function Teacher(name, lastName, age, subject) {
//     Person.call(this, name, lastName, age)
//     this.subject = subject
// }
// var b = new Teacher('mmmm', 'bbbb', 25, 'cccc')
// Teacher.prototype = Object.create(Person.prototype)
// Teacher.prototype.constructor = Teacher
// var a = new Teacher('aaa', 'bbbb', 25, 'cccc')
// console.log(b.__proto__.constructor)
// console.log(a.__proto__.constructor)







// // ex. deep copy
// function deepCopyFunction(inObject){

//     if (typeof inObject !== "object" || inObject === null) {
//       return inObject 
//     }

//     let outObject = Array.isArray(inObject) ? [] : {}

//     for (let key in inObject) {
//       outObject[key] = deepCopyFunction(inObject[key])
//     }

//     return outObject
// }


//   let originalArray = [37, 3700, { hello: "world" }]

//   let shallowCopiedArray = originalArray.slice()
//   let deepCopiedArray = deepCopyFunction(originalArray)

//   originalArray[1] = 0 
//   originalArray[2].hello = "moon"

//   console.log("Original array:", originalArray)
//   console.log("Shallow copy:", shallowCopiedArray) 
//   console.log("Deep copy:", deepCopiedArray) 




