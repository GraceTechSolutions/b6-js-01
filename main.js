/*
document.write('HELLO')
document.write('HELLO')
document.write('HELLO')
document.write('HELLO')
document.write('HELLO')
*/

// 1. case sensitive
// aa
// AA
// 2. contains numbers alpbahets _
// 3. can't start from number
// 4. can't contain space
// 5. avoid reserved keywords

// let
// var

// let name = 'JAY'
// var amount = 200000

// let name = 'Rahul'
// var age = 30

// const
// const PI = 3.1416
// let marks = 20

// {
//     let marks = 98
//     var res = 'A+'
//     console.log(marks);
// }

// datatypes
// Number
// let n = 1
// let n2 = 1.5
// let n3 = 0xa
// n4 = NaN

// String
// s1 = 'Hello'
// s2 = "World"
// s3 = `${s1} JavaScript`

// s4 = "Don\'t do \t this"

// Boolean
// b1 = true
// b2 = false

// null
// n1 = null

// undefined
// let u1;

// Sequence
// array
let arr1 = [1,2,3,4,5]

// sayHii()
// say()

// Function without parameter
function say(){
    console.log('Good Morning');
}


// Function with parameter
function greet(name, age) {
    let data = `Hello my name is: ${name}\nI am ${age}`
    say()
    console.log(data);
}


// arrow function
const sayHii = () => {
    console.log('I am a arrow function...');
}

// alert
// prompt
// confirm
// eval
// isNaN
// parseInt
// parseFloat
// Number


// timer function
// let timeout = setTimeout(say, 1000*5)
// let timer = setInterval(()=>{greet('Jay', 50)}, 1000*3)


// Operators

// Artihmatic
// +
// -
// *
// **
// /
// %
// ++
// --

// Assignmant
// =
// +=
// -=
// *=
// /=
// %=
// **=


// Comparision
// let x = 20
// let y = '20'
// let z = 30
// console.log(`x: ${x}, y: ${y}, z: ${z}`);
// ==
// ===
// !=
// !==
// >
// >=
// <
// <=
// ?


// Logical
// &&
// ||
// !


// Bitwise
// 0000000000000000011
// &
// 1    =   0000001
// 2    =   0000010
//          0000000 

// |
// 1    =   0000001
// 2    =   0000010
//          0000011 

// ^
// 1    =   0000001
// 2    =   0000010
//          0000011

// ~
// 1    =   0000001
//          1111110

// <<
// -1   =   1111110
//          1111100

// >>
// -2   =   1111101
//          1111110

// >>>
// -2   =   0111110


// Control Statement

// Condition
// if
// else if
// else

// const checkVote = (age) => {

//     if (age >= 18){
//         console.log('You can vote');
//     } else {
//         console.log('You can\'t vote');
//     }

// }

// function checkGrade(totalNumber){
//     let precent = totalNumber/5
//     console.log(`${precent}%`);
//     let grade;
//     if (precent >= 95) {
//         grade = 'A+'
//     }else if(precent >= 80) {
//         grade = 'A'
//     } else if (precent >= 65) {
//         grade = 'B'
//     } else if (precent>= 40) {
//         grade = 'C'
//     } else {
//         console.log('You Faield');
//         grade = 'D'
//     }
//     console.log(`Grade ${grade}`);
// }

// Loop
// while
// let n = 5000

// while (n <= 10) { // false
//     console.log(n);
//     n++ // 11
// }

// // do while
// do {
//     console.log(n);
//     n++ // 11
// } while (n<=10);

// for
// for (let n = 0; n<=10; n++) {
//     console.log(n);
// }

// let print = (element) => {
//     console.log(element);
// }

// arr1 = [1,2,3,4,5]
// foreach
// arr1.forEach(print)


// let btn111 = document.getElementById('btn')
// let input = document.getElementById('inp')

// btn111.addEventListener('click', ()=> {
//     console.log(input.value);
// })

let screen = document.getElementById('screen')
let form = document.getElementsByTagName('form')[0]
let inp = document.getElementById('inp')
let btn = document.getElementById('btn')

function updateScreen(value) {
    screen.innerText = value
}

// const updateScreen = (value)=>{
//     screen.innerText = value
// }


// let n = 1;
// btn.addEventListener('mousemove', ()=>{
//     updateScreen('Mouse Moved ' + n + ' Times');
//     n++
// })

// btn.addEventListener('mouseout', ()=>{
//     console.log('out' + n);
//     n++
// })

// btn.addEventListener('mousedown', ()=> console.log('Mouse Down'))

// btn.addEventListener('mouseup', ()=> console.log('Mouse UP'))

// inp.addEventListener('keydown', ()=>{
//     console.log('KEY DOWN');
// })

// inp.addEventListener('keyup', ()=>{
//     console.log('KEY UP');
// })

// inp.addEventListener('keyup', ()=>{
//     screen.innerText = inp.value
// })

// inp.addEventListener('select', (e)=>{
//     console.log('Selected..');
// })

// form.addEventListener('submit', (e)=>{
//     e.preventDefault()
//     console.log('Success..');
// })

// inp.addEventListener('invalid', (e)=>{
//     alert('Invalid..')
//     e.preventDefault()
// })

// inp.addEventListener('focus', (e)=>{
//     console.log('Start Typing..');
// })

// inp.addEventListener('blur', (e)=>{
//     console.log('Submit now..');
// })

// inp.addEventListener('change', (e)=>{
//     console.log(inp.value);
// })

// Object
// let student = {
//     firetName: 'Jay',
//     lastName: 'Singh',
//     totalMarks: 580,
//     calcGrade: function() {
//         let avgMarks = this.totalMarks/6
//         if (avgMarks>90) {
//             return 'A+'
//         } else if (avgMarks>80) {
//             return 'A'
//         } else if(avgMarks>70) {
//             return 'B'
//         } else if(avgMarks>60) {
//             return 'C'
//         } else {
//             return 'D'
//         }
//     }
// }

// let car = new Object()

// car.name = 'Swift'
// car.price = 6000000
// car.model = 'LXI'
// car.addDiscount = function(){
//     return (this.price/100)*2
// }
