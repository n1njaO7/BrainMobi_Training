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

// //3.Using Named and Default Exports
// //index.js
// import getUser, { role } from "./user.js";

// console.log(getUser());     //{ name: 'Ashmit', role: 'Developer' }
// console.log(role);          //Developer

// //=====================================================================

//4. Classes and Objects
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    introduce() {
        return `I am ${this.name}`;
    }

    updateEmail(newEmail) {
        this.email = newEmail;
    }
}

const user1 = new User("Ashmit", "ashmit@example.com");
const user2 = new User("Rahul", "rahul@example.com");

console.log(user1.introduce());     //I am Ashmit
console.log(user2.introduce());     //I am Rahul

user1.updateEmail("ashmit.new@example.com");

console.log(user1.email);           //ashmit.new@example.com
console.log(user2.email);           //rahul@example.com

console.log(user1 instanceof User); //true
