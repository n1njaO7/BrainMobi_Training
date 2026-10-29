// //1. super Keyword
// class User {
//     constructor(name, role) {
//         this.name = name;
//         this.role = role;
//     }

//     introduce() {
//         return `I am ${this.name}, a ${this.role}.`;
//     }
// }

// class Developer extends User {
//     constructor(name, language) {
//         super(name, "Developer");

//         this.language = language;
//     }

//     introduce() {
//         // Call the parent implementation.
//         const parentMessage = super.introduce();

//         return `${parentMessage} I use ${this.language}.`;
//     }
// }

// const developer = new Developer("Ashmit", "JavaScript");

// console.log(developer.introduce()); //I am Ashmit, a Developer. I use JavaScript.
// console.log(developer.name);        //Ashmit
// console.log(developer.language);    //JavaScript

// //===========================================================================================

// //2. Getters and Setters
// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     // Getter
//     get details() {
//         return `${this.name} is ${this.age} years old.`;
//     }

//     // Setter with validation
//     set userAge(value) {
//         if (!Number.isInteger(value) || value < 0) {
//             throw new Error("Age must be a non-negative integer.");
//         }

//         this.age = value;
//     }
// }

// const user = new User("Ashmit", 22);

// console.log(user.details);   //Ashmit is 22 years old.

// user.userAge = 23;
// console.log(user.details);  //Ashmit is 22 years old.

// try {
//     user.userAge = -5;
// } catch (error) {
//     console.log(error.message);  //Age must be a non-negative integer.
// }

// //==========================================================================================

// //3. Static Methods
// class Calculator {
//     static add(a, b) {
//         return a + b;
//     }

//     static multiply(a, b) {
//         return a * b;
//     }

//     static isNumber(value) {
//         return typeof value === "number" &&
//                Number.isFinite(value);
//     }
// }

// console.log(Calculator.add(10, 20));         //30
// console.log(Calculator.multiply(4, 5));      //20
// console.log(Calculator.isNumber(10));        //true
// console.log(Calculator.isNumber(Infinity));  //false

// const calc = new Calculator();

// // console.log(calc.add(10, 20)); // TypeError

// //=======================================================================

// //4. Prototypes and Prototype Chain
// function User(name) {
//     this.name = name;
// }

// User.prototype.greet = function () {
//     return `Hello, ${this.name}`;
// };

// const user1 = new User("Ashmit");
// const user2 = new User("Rahul");

// console.log(user1.greet());         //Hello, Ashmit
// console.log(user2.greet());         //Hello, Rahul

// console.log(Object.hasOwn(user1, "name"));    //true
// console.log(Object.hasOwn(user1, "greet"));   //false

// console.log(Object.getPrototypeOf(user1) === User.prototype);   //true
// console.log(user1 instanceof User);       //true

// //==================================================================================

//5. Built-in Objects - Date, Math, and JSON
//A. Date
const now = new Date();

console.log(now instanceof Date); // true

const date = new Date("2026-10-29T10:00:00Z");

console.log(date.toISOString());        //2026-10-29T10:00:00.000Z
console.log(date.getUTCFullYear());     //2026
console.log(date.getTime());            //1793268000000

const invalidDate = new Date("not-a-date");

console.log(Number.isNaN(invalidDate.getTime())); // true

//B. Math
console.log(Math.PI);           //3.141592653589793
console.log(Math.round(4.6));   //5
console.log(Math.floor(4.9));   //4
console.log(Math.ceil(4.1));    //5
console.log(Math.max(10, 25, 5));   //25
console.log(Math.min(10, 25, 5));   //5
console.log(Math.sqrt(81));         //9
console.log(Math.abs(-12));         //12

// Random integer from 1 to 10, inclusive
const randomNumber = Math.floor(Math.random() * 10) + 1; //It gives random integer between 1 and 10
console.log(randomNumber);     //7 

//C. JSON
const user = {
    name: "Ashmit",
    skills: ["JavaScript", "Node.js"],
    active: true
};

// JavaScript object → JSON string
const json = JSON.stringify(user);

console.log(json);      //{"name":"Ashmit","skills":["JavaScript","Node.js"],"active":true}

// JSON string → JavaScript object
const parsed = JSON.parse(json);

console.log(parsed.name);       //Ashmit
console.log(parsed.skills[1]);  //Node.js
