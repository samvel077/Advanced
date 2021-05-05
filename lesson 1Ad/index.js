let array = [function () { }, 1, 2, 3, 'a']
console.log(array)


Array.prototype.foo = function () {
    alert('Hello')
}


Array.prototype.fnpop = function () {
    let arm = this[this.length - 1]
    this.length = this.length - 1
    return arm
}


Array.prototype.fnpush = function (num) {
    this[this.length] = num;
    return this.length
}


// Array.prototype.fnShift = function(){
//     let a = this[0];
//     let x = [];
//     let j = 0;
//     for (let i = 0; i < this.length - 1; i++) {
//        j++ 
//         x[i] = this[j]
//     }
//     for (let i = 0; i < x.length; i++) {
//         this[i] = x[i]
//     }
//     this.length -= 1
//     return a
// }


Array.prototype.fnShift = function () {
    let x = this[0]
    this.reverse();
    this.length -= 1;
    this.reverse()
    return x
}


Array.prototype.fnunshift = function (num) {
    this.reverse();
    this[this.length] = num;
    this.reverse();
    return this.length
}


let arr = [1, 2, 3];

Array.prototype.shiftMy = function () {
    let a = this[0]
    for (let i = 0; i < this.length; i++) {
        this[i] = this[i + 1]
    }
    this.length = this.length - 1
    return a
}


Array.prototype.unshiftMy = function (n) {
    let ar = [n];
    for (let i = 1; i < this.length + 1; i++) {
        ar[i] = this[i - 1]
    }
    for (let i = 0; i < ar.length; i++) {
        this[i] = ar[i]
    }
    return this.length
}


let users = [
    {
        name: "John",
        surName: "Smith",
        age: 24,
        budget: 300
    },
    {
        name: "Jane",
        surName: "Smith",
        age: 23,
        budget: 1000
    },
    {
        name: "Jack",
        surName: "Reacher",
        age: 32,
        budget: 12300
    },
    {
        name: "Richie",
        surName: "Sambora",
        age: 17,
        budget: 10
    },
];

let users2 = [
    56, 56
]

let john = {
    name: "John",
    surName: "Smith",
    age: 24,
    budget: 300
};


Array.prototype.fnpush = function (...num) {
    for (let i = 0; i < num.length; i++) {
        this[this.length] = num[i]
    }
    return this.length
}

let x = { ...john, budget: 2000, asd: 15 }



// ex. spread
// let ce = [1, 1, [3, [4, 5]]];
// let de = [...ce];
// de[2] = [...ce[2]];
// de[2][0] = 6
// console.log(ce);



let arr3 = [1, 2, 3, 'a', 4, 9];
Array.prototype.fnIndexOf = function (num) {
    let an;
    arr3.forEach((el, index) => {
        if (el === num) {
            an = index;
        }
        else if (typeof an === "undefined") {
            an = -1;
        }
    })
    return an
}


// ex. rest
function showName(firsteName, lastName, ...titles) {
    console.log(firsteName + " " + lastName);
    console.log(titles.length);
    console.log(titles);
    console.log(titles[0]);
    console.log(titles[1]);
}

showName('a', 'b', 'c', 'd')



// ex. reduce
let arr4 = [1, 2, 3, 4, 5, 6]

let result = arr4.reduce((sum, current, index, arr) => {

    // if (sum < 0 || current < 0) {
    //     return new TypeError("Wrong Number")
    //     console.log("Wrong Nmber");
    //     return "wrong Number"
    // }
    // else {
    //     return sum + current;
    // }

    return sum + current
}, 0)

let result2 = arr4.reduce((sum, current, index, arr) => {
    return index
})

console.log(result, result2);



// ex. flat withe reduce and concat
let arr5 = [[1, 2, 3], [4, 5], [6]];

console.log(arr5.reduce((flat, current) => flat.concat(current), []))


// ex. flat withe reduce and concat recursion
let arr6 = [1, 2, 3, [1, 2, 3, 4, [2, 3, 4]]];

function fnFlat(arr6) {

    return arr6.reduce((flat, current) => Array.isArray(current) ? flat.concat(fnFlat(current)) : flat.concat(current), [])

}

