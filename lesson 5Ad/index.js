// const arr = [
//     {
//         name: 'Anna',
//         id: 'c'
//     },
//     {
//         name: 'Bob',
//         id: 'b'
//     },
//     {
//         name: 'Karen',
//         id: 'a'
//     },
// ]

// const sorting = [ 'a', 'b', 'c',];
// const a = sorting.reduce((acumulyator, current) => {
//     acumulyator.push(arr.find(item => item.id === current))
//     return acumulyator
// }, [])

// console.log(a);


// function foo(arr,sorting) {
//     return sorting.map(item => arr.find(obj => obj.id === item))
// }

// let result = foo(arr,sorting)

// console.log(result);




let ball = document.getElementById('ball');

ball.onmousedown = function (e) { // 1. отследить нажатие

    var coords = getCoords(ball);
    var shiftX = e.pageX - coords.left;
    var shiftY = e.pageY - coords.top;

    document.body.appendChild(ball);
    moveAt(e);

    // function moveAt(e) {
    //     ball.style.left = e.pageX - ball.offsetWidth / 2 + 'px';
    //     ball.style.top = e.pageY - ball.offsetHeight / 2 + 'px';
    // }

    function moveAt(e) {
        ball.style.left = e.pageX - shiftX + 'px';
        ball.style.top = e.pageY - shiftY + 'px';
      }

    // 3, перемещать по экрану
    document.onmousemove = function (e) {
        moveAt(e);
    }

    // 4. отследить окончание переноса
    ball.onmouseup = function () {
        document.onmousemove = null;
        ball.onmouseup = null;
    }
}

ball.ondragstart = function () {
    return false;
};

function getCoords(elem) {   // кроме IE8-
    var box = elem.getBoundingClientRect();
    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };
}







