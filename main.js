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
