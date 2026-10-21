// //1. Nullish Coalescing Operator (??)
// const user = {
//     name: "",
//     age: 0,
//     isAdmin: false,
//     city: null,
//     country: undefined
// };

// console.log(user.name ?? "Guest");       // ""
// console.log(user.age ?? 18);             // 0
// console.log(user.isAdmin ?? true);       // false
// console.log(user.city ?? "Unknown");     // "Unknown"
// console.log(user.country ?? "India");    // "India"

// // Difference between ?? and ||
// console.log(user.age || 18);             // 18
// console.log(user.age ?? 18);             // 0

// // Combining with logical operators requires parentheses
// console.log((user.city || user.country) ?? "Default"); // "Default"

// //=====================================================================

//2. for...in and for...of
const parent = { country: "India" };

const user = Object.create(parent);
user.name = "Ashmit";
user.age = 22;

console.log("for...in:");

for (const key in user) {
    console.log(key, user[key]);
}
// name Ashmit
// age 22
// country India

console.log("Own properties only:");

for (const key in user) {
    if (Object.hasOwn(user, key)) {
        console.log(key, user[key]);
    }
}
// name Ashmit
// age 22

const skills = ["JavaScript", "Node.js", "React"];

console.log("for...of:");

for (const skill of skills) {
    console.log(skill);
}
// JavaScript
// Node.js
// React

// Iterating over an ordinary object with for...of throws TypeError.
// Use Object.entries() instead.
for (const [key, value] of Object.entries(user)) {
    console.log(key, value);
}

// Strings are iterable.
for (const char of "JS") {
    console.log(char); // J, S
}

