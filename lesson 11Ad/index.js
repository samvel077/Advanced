let cube = document.getElementsByClassName('cube')
let cubes = document.querySelectorAll('.cube')
let texts = document.querySelectorAll('.text')
let text1 = document.querySelector('.text1')
let tittle = document.querySelector('h3')
let span = document.querySelector('.span1')
let color = document.querySelectorAll('.color')
let body = document.querySelector('body')
let button1 = document.querySelector('.button1')
let button2 = document.querySelector('.button2')
let circleDiv1 = document.querySelector('.circle1')
let circleDiv2 = document.querySelector('.circle2')
let circleDiv3 = document.querySelector('.circle3')
let sum = 1
let sum2 = 0
let sum3 = 0
let player = 'x'
let stat = {
   x: 0,
   o: 0,
   d: 0
}
let winIndex = [
   [1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]
]
for (let i = 0; i < cube.length; i++) {
   cube[i].addEventListener('click', cubeClick)
   function cubeClick() {
      let data = []

      if (this.innerHTML) {
         alert('no')
         // if (player === 'x') {
         //    player = 'o'
         // }
         // else {
         //    player = 'x'
         // }

         player = player === 'x' ? 'o' : 'x'
      }
      else if (sum === 1) {
         cube[i].classList.add('x')
         this.innerHTML = player
         span.innerText = 'Player: O'
         sum += 1
      }
      else {
         cube[i].classList.add('o')
         this.innerHTML = player
         span.innerText = 'Player: X'
         sum -= 1
      }

      for (let i in cube) {
         if (cube[i].innerHTML === player) {
            data.push(parseInt(cube[i].getAttribute('pos')));
         }
      }

      if (checkWin(data)) {
         setTimeout(() => {
            alert('Win' + " player " + player.toUpperCase())
            restart()
         }, 50);
         if (player === 'x') {
            stat.x += 1
         }
         else {
            stat.o += 1
         }
      }
      else {
         let draw = true
         for (let i in cube) {
            if (cube[i].innerHTML === '') {
               draw = false
            }
         }
         if (draw) {
            stat.d += 1
            setTimeout(() => {
               alert('Its Draw')
               restart()
            }, 50);
         }
      }
      setTimeout(() => {
         player = player === 'x' ? 'o' : 'x'
      }, 100);
      win()
      updateStat()
      if (sum2 === 1) {
         colorChange1()
      }
      else if (sum2 === 2) {
         colorChange2()
      }
      else if (sum2 === 3) {
         colorChange3()
      }
   }
}

function updateStat() {
   document.getElementById('sX').innerText = stat.x
   document.getElementById('sO').innerText = stat.o
   document.getElementById('sD').innerText = stat.d
}

function restart() {
   for (let i = 0; i < cube.length; i++) {
      cube[i].innerHTML = ''
      cube[i].classList.remove('x')
      cube[i].classList.remove('o')
      cube[i].classList.remove('win')
   }
}

function checkWin(data) {
   for (var i in winIndex) {
      var win = true;
      for (var j in winIndex[i]) {
         var id = winIndex[i][j];
         var ind = data.indexOf(id);
         if (ind === -1) {
            win = false
         }
      }
      if (win) {
         return true;
      }
   }
   return false;
}

button1.addEventListener('click', () => {
   body.style.backgroundColor = 'black'
   sum3 = 1
   for (let i = 0; i < color.length; i++) {
      tittle.style.color = ' white'
      text1.style.color = 'white'
      circleDiv1.style.backgroundColor = 'white'
      circleDiv2.style.backgroundColor = 'white'
      circleDiv3.style.backgroundColor = 'white'
      color[i].style.color = 'white'
      color[i].style.border = '4px solid white'
   }
})
button2.addEventListener('click', () => {
   body.style.backgroundColor = 'white'
   sum3 = 0
   for (let i = 0; i < color.length; i++) {
      tittle.style.color = 'black'
      text1.style.color = 'black'
      circleDiv1.style.backgroundColor = 'black'
      circleDiv2.style.backgroundColor = 'black'
      circleDiv3.style.backgroundColor = 'black'
      color[i].style.color = 'black'
      color[i].style.border = '4px solid black'
   }
})

function win() {
   let comb = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
   ]
   for (let i = 0; i < comb.length; i++) {
      if (cubes[comb[i][0]].classList.contains('x')
         && cubes[comb[i][1]].classList.contains('x')
         && cubes[comb[i][2]].classList.contains('x')) {
         cubes[comb[i][0]].classList.add('win')
         cubes[comb[i][1]].classList.add('win')
         cubes[comb[i][2]].classList.add('win')
      }
      else if (cubes[comb[i][0]].classList.contains('o')
         && cubes[comb[i][1]].classList.contains('o')
         && cubes[comb[i][2]].classList.contains('o')) {
         cubes[comb[i][0]].classList.add('win')
         cubes[comb[i][1]].classList.add('win')
         cubes[comb[i][2]].classList.add('win')
      }
   }

}

texts[0].addEventListener('click', colorChange1)
function colorChange1() {
   sum2 = 1
   for (let i = 0; i < cube.length; i++) {
      if (cube[i].innerHTML === 'x') {
         cube[i].style.color = 'black'
      }
      else if (cube[i].innerHTML === 'o') {
         cube[i].style.color = 'black'
      }
      circleDiv1.style.display = 'inline-block'
      circleDiv2.style.display = 'none'
      circleDiv3.style.display = 'none'
      if (sum3 === 1) {
         if (cube[i].innerHTML === 'x') {
            cube[i].style.color = 'white'
         }
         else if (cube[i].innerHTML === 'o') {
            cube[i].style.color = 'white'
         }
      }
   }
}

texts[1].addEventListener('click', colorChange2)
function colorChange2() {
   sum2 = 2
   for (let i = 0; i < cube.length; i++) {
      if (cube[i].innerHTML === 'x') {
         cube[i].style.color = 'red'
      }
      else if (cube[i].innerHTML === 'o') {
         cube[i].style.color = 'blue'
      }
      circleDiv1.style.display = 'none'
      circleDiv3.style.display = 'none'
      circleDiv2.style.display = 'inline-block'
   }
}

texts[2].addEventListener('click', colorChange3)
function colorChange3() {
   sum2 = 3
   for (let i = 0; i < cube.length; i++) {
      if (cube[i].innerHTML === 'x') {
         cube[i].style.color = 'green'
      }
      else if (cube[i].innerHTML === 'o') {
         cube[i].style.color = 'yellow'
      }
      circleDiv1.style.display = 'none'
      circleDiv2.style.display = 'none'
      circleDiv3.style.display = 'inline-block'
   }
}





// function cubeClick() {
//     let data = []

//     if (this.innerHTML) {
//         alert('no')
//         if (player === 'x') {
//             player = 'o'
//         }
//         else {
//             player = 'x'
//         }
//     }
//     else if (sum === 1) {
//         this.innerHTML = player
//         span.innerText = 'Player: O'
//         sum += 1
//     }
//     else {
//         this.innerHTML = player
//         span.innerText = 'Player: X'
//         sum -= 1
//     }

//     for (let i in cube) {
//         if (cube[i].innerHTML === player) {
//             data.push(parseInt(cube[i].getAttribute('pos')));
//         }
//     }

//     if (checkWin(data)) {
//         setTimeout(() => {
//             alert('Win' + " player " + player.toUpperCase())
//             restart()
//         }, 50);
//         if (player === 'x') {
//             stat.x += 1
//         }
//         else {
//             stat.o += 1
//         }
//     }
//     else {
//         let draw = true
//         for (let i in cube) {
//             if (cube[i].innerHTML === '') {
//                 draw = false
//             }
//         }
//         if (draw) {
//             stat.d += 1
//             setTimeout(() => {
//                 alert('Its Draw')
//                 restart()
//             }, 50);
//         }
//     }

//     setTimeout(() => {
//         player = player === 'x' ? 'o' : 'x'
//     }, 100);

//     updateStat()
// }