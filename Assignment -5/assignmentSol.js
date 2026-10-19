// Some ()
// const users = [
//     { name: "Rahul", age: 17, active: true },
//     { name: "Aman", age: 24, active: true },
//     { name: "Priya", age: 19, active: false }
// ];

// const hasAdult = users.some(user => user.age >= 18); // true
// const hasInactive = users.some(user => !user.active); // true
// const hasAdmin = users.some(user => user.isAdmin); // false
// const emptyResult = [].some(x => x > 0); // false

// // index and array parameters
// const hasMatch = [10, 20, 30].some((value, index, arr) =>
//     value === 20 && index === 1 && arr.length === 3
// ); // true

// console.log(hasAdult)
// console.log(hasInactive)
// console.log(hasAdmin)
// console.log(emptyResult)
// console.log(hasMatch)

//every()
// const users = [
//     { name: "Aman", age: 24, active: true },
//     { name: "Priya", age: 19, active: true },
//     { name: "Rahul", age: 17, active: false }
// ];

// const allAdults = users.every(user => user.age >= 18); // false
// const allHaveNames = users.every(user => Boolean(user.name)); // true
// const allActive = users.every(user => user.active); // false
// const emptyResult = [].every(x => x > 0); // true

// const result = [10, 20, 30].every((value, index, arr) =>
//     value > 0 && index < arr.length
// ); // true

////=============================================================

// //sort()
// const values = [100, 4, 25, 9, 4];

// values.sort((a, b) => a - b);
// console.log(values); // [4, 4, 9, 25, 100] ascending

// values.sort((a, b) => b - a);
// console.log(values); // [100, 25, 9, 4, 4] descending

// const names = ["Zara", "aman", "Aman", "Bob"];
// names.sort((a, b) => a.localeCompare(b, undefined, {
//     sensitivity: "base"
// }));
// // Case-insensitive alphabetical ordering

// const users = [
//     { name: "Priya", age: 19 },
//     { name: "Aman", age: 24 },
//     { name: "Rahul", age: 17 }
// ];
// users.sort((a, b) => a.age - b.age);
// // Sort objects by age ascending

// const original = [3, 1, 2];
// const sortedCopy = [...original].sort((a, b) => a - b);
// // original remains [3, 1, 2]

////==================================================================

// //Object and Object Properties
// const user = {
//     name: "Aman",
//     age: 24,
//     "home city": "Ayodhya",
//     isActive: true
// };

// // Read properties
// console.log(user.name);        // "Aman"
// console.log(user["home city"]); // "Ayodhya"

// // Add and update properties
// user.email = "aman@example.com";
// user.age = 25;

// // Check whether a property exists directly on the object
// console.log(Object.hasOwn(user, "name")); // true
// console.log(Object.hasOwn(user, "phone")); // false

// // Delete a property
// delete user.isActive;

// // Get keys, values, and key-value pairs
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// // Destructuring-like property access isn't required to read values
// console.log("email" in user); // true

////======================================================================

// //Object Methods
// const user = {
//     id: 101,
//     name: "Ashmit",
//     age: 22,
//     address: {
//         city: "Kanpur",
//         country: "India"
//     },
//     skills: ["JavaScript", "React"]
// };
// // 1. Dot notation
// console.log(user.name); // "Ashmit"

// // 2. Bracket notation
// const key = "age";
// console.log(user[key]); // 22

// // 3. Add and update properties
// user.email = "ashmit@example.com";
// user.age = 23;

// // 4. Delete a property
// delete user.email;

// // 5. Check property existence (own + inherited)
// console.log("name" in user); // true

// // 6. Check own property
// console.log(Object.hasOwn(user, "id")); // true

// // 7. Missing property edge case
// user.nickname = undefined;
// console.log(user.nickname); // undefined
// console.log(Object.hasOwn(user, "nickname")); // true
// console.log(Object.hasOwn(user, "email"));    // false

// // 8. Nested properties
// console.log(user.address.city); // "Kanpur"

// // 9. Optional chaining
// console.log(user.contact?.email); // undefined

// // 10. Object references
// const reference = user;
// reference.age = 24;
// console.log(user.age); // 24

// // 11. Destructuring
// const { name, age } = user;
// console.log(name, age); // "Ashmit" 24

// // 12. Spread: shallow copy + update
// const updatedUser = { ...user, age: 25 };
// console.log(updatedUser.age); // 25
// console.log(updatedUser !== user); // true

// // 13. Computed property names
// const property = "role";
// user[property] = "Developer";
// console.log(user.role); // "Developer"

// // 14. Keys, values, and entries
// console.log(Object.keys(user));    // Property names
// console.log(Object.values(user));  // Property values
// console.log(Object.entries(user)); // [key, value] pairs

// // 15. Enumeration edge case: own enumerable string keys
// const parent = { countryCode: "IN" };
// const child = Object.create(parent);
// child.name = "Ashmit";

// console.log("countryCode" in child);          // true
// console.log(Object.hasOwn(child, "countryCode")); // false
// console.log(Object.keys(child));             // ["name"]

////===============================================================

// // Nested Object and Array
// const user = {
//     name: "Ashmit",

//     address: {
//         city: "Kanpur",
//         pin: 208001
//     },

//     skills: ["JavaScript", "React"],

//     projects: [
//         { name: "Chat App", status: "Completed" },
//         { name: "E-commerce", status: "In Progress" }
//     ]
// };

// console.log(user.address.city);          // "Kanpur"
// console.log(user.skills[0]);             // "JavaScript"
// console.log(user.projects[0].name);      // "Chat App"
// console.log(user.projects[1].status);    // "In Progress"

// // Modify nested values
// user.address.city = "Lucknow";
// user.skills.push("Node.js");
// user.projects[0].status = "Deployed";

// // Safely access a potentially missing property
// console.log(user.company?.name);         // undefined
// console.log(user);

//Object And Array Destructuring
const user = {
    name: "Ashmit",
    address: {
        city: "Kanpur"
    },
    skills: ["JavaScript", "React", "Node.js"],
    projects: [
        { name: "Chat App", status: "Completed" },
        { name: "E-commerce", status: "In Progress" }
    ]
};

// Object destructuring
const { name, address } = user;

// Nested object destructuring
const { city } = address;

// Array destructuring
const [firstSkill, secondSkill] = user.skills;

// Object inside an array
const [{ name: projectName, status }] = user.projects;

console.log(name);        // "Ashmit"
console.log(city);        // "Kanpur"
console.log(firstSkill);  // "JavaScript"
console.log(secondSkill); // "React"
console.log(projectName); // "Chat App"
console.log(status);      // "Completed"