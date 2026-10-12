//INTRO -
// let team = "BrainMobi Team"
// console.log(`Hello ${team} . This is my Firt Assignmet `)

// VARIABLES - LET , VAR AND CONST
// if (true) {
//     var a = 10;
//     let b = 20;
//     const c = 30;
// }

// console.log(a); // 10
// console.log(b); // ReferenceError
// console.log(c); // ReferenceError

// DATA TYPES 

// let name = "Ashmit";
// let age = 22;
// let isStudent = true;
// let result;
// let selectedValue = null;
// let bigNumber = 12345678901234567890n;
// let id = Symbol("id");

// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof isStudent);
// console.log(typeof result);
// console.log(typeof selectedValue);
// console.log(typeof bigNumber);
// console.log(typeof id);

//Primitive Data type
// let a = 10;
// let b = a;

// b = 20;

// console.log(a);
// console.log(b);

//non primitive 
let user1 = { name: "Ashmit" };
let user2 = user1;

user2.name = "Rahul";

console.log(user1.name);
console.log(user2.name);

