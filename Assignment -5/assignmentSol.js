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


//sort()
const values = [100, 4, 25, 9, 4];

values.sort((a, b) => a - b);
console.log(values); // [4, 4, 9, 25, 100] ascending

values.sort((a, b) => b - a);
console.log(values); // [100, 25, 9, 4, 4] descending

const names = ["Zara", "aman", "Aman", "Bob"];
names.sort((a, b) => a.localeCompare(b, undefined, {
    sensitivity: "base"
}));
// Case-insensitive alphabetical ordering

const users = [
    { name: "Priya", age: 19 },
    { name: "Aman", age: 24 },
    { name: "Rahul", age: 17 }
];
users.sort((a, b) => a.age - b.age);
// Sort objects by age ascending

const original = [3, 1, 2];
const sortedCopy = [...original].sort((a, b) => a - b);
// original remains [3, 1, 2]