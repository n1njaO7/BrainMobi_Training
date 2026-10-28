// //1. Enhanced Object Literals
// const name = "Ashmit";
// const role = "Backend Developer";
// const id = "userId";
// // Property shorthand
// // Instead of { name: name, role: role }
// const user = {
//     name,
//     role,

//     // 2. Method shorthand
//     introduce() {
//         return `I am ${this.name}, a ${this.role}.`;
//     },

//     // 3. Computed property name
//     [id]: 101,

//     // 4. Computed method name
//     ["get" + "Role"]() {
//         return this.role;
//     }
// };
// console.log(user.name);         //Ashmit
// console.log(user.introduce());  //I am Ashmit, a Backend Developer.
// console.log(user.userId);       //101
// console.log(user.getRole());    //Backend Developer

// //========================================================================

// //2.Modules — import and export
// //File 1 - math.js
// //File 2 - index.js

// import { PI, add, multiply } from "./math.js";

// console.log(PI);                //3.14159
// console.log(add(10, 20));       //30 
// console.log(multiply(4, 5));    //20

// //=================================================================

//3.Using Named and Default Exports
//index.js
import getUser, { role } from "./user.js";

console.log(getUser());     //{ name: 'Ashmit', role: 'Developer' }
console.log(role);          //Developer