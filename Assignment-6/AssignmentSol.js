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

// //2. for...in and for...of
// const parent = { country: "India" };

// const user = Object.create(parent);
// user.name = "Ashmit";
// user.age = 22;

// console.log("for...in:");

// for (const key in user) {
//     console.log(key, user[key]);
// }
// // name Ashmit
// // age 22
// // country India

// console.log("Own properties only:");

// for (const key in user) {
//     if (Object.hasOwn(user, key)) {
//         console.log(key, user[key]);
//     }
// }
// // name Ashmit
// // age 22

// const skills = ["JavaScript", "Node.js", "React"];

// console.log("for...of:");

// for (const skill of skills) {
//     console.log(skill);
// }
// // JavaScript
// // Node.js
// // React

// // Iterating over an ordinary object with for...of throws TypeError.
// // Use Object.entries() instead.
// for (const [key, value] of Object.entries(user)) {
//     console.log(key, value);
// }

// // Strings are iterable.
// for (const char of "JS") {
//     console.log(char); // J, S
// }

// //===============================================================

// //3. Callbacks
// function processUser(name, callback) {
//     console.log(`Processing ${name}`);
//     callback(null, name.toUpperCase());
// }
// processUser("Ashmit", (error, result) => {
//     if (error) {
//         console.log(error.message);
//         return;
//     }

//     console.log(result);
// });
// // Callback with an error
// function divide(a, b, callback) {
//     if (b === 0) {
//         callback(new Error("Division by zero"), null);
//         return;
//     }

//     callback(null, a / b);
// }
// divide(10, 2, (error, result) => {
//     if (error) {
//         console.log(error.message);
//         return;
//     }
//     console.log(result); // 5
// });
// divide(10, 0, (error, result) => {
//     console.log(error?.message ?? result);
//     // Division by zero
// });
// // Passing a function is different from calling it.
// function greet() {
//     console.log("Hello!");
// }
// function execute(callback) {
//     callback();
// }
// execute(greet); // Hello!

// // execute(greet()) calls greet immediately and passes undefined.

// //==============================================================================

// //4. Higher-Order Functions
// const numbers = [1, 2, 3, 4, 5];

// function calculate(numbers, operation) {
//     return numbers.map(operation);
// }

// // A function passed to another function
// console.log(calculate(numbers, n => n * 2));
// // [2, 4, 6, 8, 10]

// console.log(numbers.filter(n => n % 2 === 0));
// // [2, 4]

// console.log(numbers.reduce((sum, n) => sum + n, 0));
// // 15

// console.log(numbers.some(n => n > 4));
// // true

// console.log(numbers.every(n => n > 0));
// // true

// // Empty array edge cases
// console.log([].some(n => n > 0));  // false
// console.log([].every(n => n > 0)); // true
// console.log([].reduce((a, b) => a + b, 0)); // 0

// // Returning a function
// function multiplier(factor) {
//     return number => number * factor;
// }

// const double = multiplier(2);
// console.log(double(5)); // 10

// // sort() mutates the original array
// const values = [10, 2, 30];
// const sorted = [...values].sort((a, b) => a - b);

// console.log(sorted); // [2, 10, 30]
// console.log(values); // [10, 2, 30]

////=====================================================================================

// //5. Lexical Scope
// const message = "Global";
// function outer() {
//     const message = "Outer";
//     let count = 10;

//     function inner() {
//         const message = "Inner";

//         console.log(message); // Inner
//         console.log(count);   // 10
//     }

//     inner();
//     console.log(message); // Outer
// }
// outer();
// console.log(message); // Global

// // Lexical scope depends on where a function is defined.
// const value = "Global";

// function showValue() {
//     console.log(value);
// }
// function caller() {
//     const value = "Local";
//     showValue();
// }

// caller(); // Global

// // Block scope
// if (true) {
//     let blockValue = 20;
//     var functionValue = 30;
// }

// // console.log(blockValue); // ReferenceError
// console.log(functionValue); // 30

// // Temporal Dead Zone
// // console.log(age); // ReferenceError
// let age = 22;

////==================================================================================================

//Closures
function createCounter(initialValue) {
    let count = initialValue;

    return {
        increment() {
            count++;
            return count;
        },

        getCount() {
            return count;
        }
    };
}

const counter1 = createCounter(0);
const counter2 = createCounter(10);

console.log(counter1.increment()); // 1
console.log(counter1.increment()); // 2
console.log(counter2.increment()); // 11

console.log(counter1.getCount()); // 2
console.log(counter1.count);      // undefined

// Closures retain variable bindings, not frozen values.
function createMessage() {
    let message = "Hello";

    return {
        show: () => console.log(message),
        update: value => {
            message = value;
        }
    };
}

const result = createMessage();

result.update("Welcome");
result.show(); // Welcome

// var loop problem
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log("var:", i), 0);
}
// var: 3
// var: 3
// var: 3

// let creates a separate binding for each iteration
for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log("let:", j), 0);
}
// let: 0
// let: 1
// let: 2


