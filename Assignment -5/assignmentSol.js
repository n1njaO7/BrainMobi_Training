// Some 
const users = [
    { name: "Rahul", age: 17, active: true },
    { name: "Aman", age: 24, active: true },
    { name: "Priya", age: 19, active: false }
];

const hasAdult = users.some(user => user.age >= 18); // true
const hasInactive = users.some(user => !user.active); // true
const hasAdmin = users.some(user => user.isAdmin); // false
const emptyResult = [].some(x => x > 0); // false

// index and array parameters
const hasMatch = [10, 20, 30].some((value, index, arr) =>
    value === 20 && index === 1 && arr.length === 3
); // true

console.log(hasAdult)
console.log(hasInactive)
console.log(hasAdmin)
console.log(emptyResult)
console.log(hasMatch)

