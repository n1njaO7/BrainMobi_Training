// //1. call(), apply(), and bind()
// "use strict";

// function introduce(city, country) {
//     console.log(
//         `${this.name} is from ${city}, ${country}`
//     );
// }

// const user = { name: "Ashmit" };

// // call(): individual arguments
// introduce.call(user, "Basti", "India");
// // Ashmit is from Basti, India

// // apply(): arguments in an array
// introduce.apply(user, ["Delhi", "India"]);
// // Ashmit is from Delhi, India

// // bind(): creates a new function
// const boundIntroduce = introduce.bind(user, "Mumbai");

// boundIntroduce("India");
// // Ashmit is from Mumbai, India

// // bind() does not invoke the function immediately.
// const anotherFunction = introduce.bind(user, "Lucknow", "India");

// // this remains bound even if another object is supplied.
// anotherFunction.call({ name: "Rahul" });
// // Ashmit is from Lucknow, India

// // Arrow functions ignore these methods when setting this.
// const arrow = () => console.log(this);

// arrow.call({ name: "Test" }); // Logs the lexical this, not the supplied object

// //==========================================================================================

// //2. Execution Context
// var globalValue = 10;
// let globalName = "Ashmit";

// function outer() {
//     var outerValue = 20;

//     function inner() {
//         let innerValue = 30;

//         console.log(globalValue); // 10
//         console.log(outerValue);  // 20
//         console.log(innerValue);  // 30
//     }

//     inner();
// }

// outer();

// //=======================================================================

// //3. Call Stack
// function first() {
//     console.log("First starts");
//     second();
//     console.log("First ends");
// }

// function second() {
//     console.log("Second starts");
//     third();
//     console.log("Second ends");
// }

// function third() {
//     console.log("Third executes");
// }

// first();

// // Output:
// // First starts
// // Second starts
// // Third executes
// // Second ends
// // First ends

// //=========================================================================

// //4. Lexical Environment
// const globalMessage = "Global";

// function outer() {
//     const outerMessage = "Outer";

//     function inner() {
//         const innerMessage = "Inner";

//         console.log(innerMessage); // Inner
//         console.log(outerMessage); // Outer
//         console.log(globalMessage); // Global
//     }

//     inner();
// }

// outer();

// // Variable shadowing
// const value = "Global value";

// function showValue() {
//     const value = "Local value";
//     console.log(value); // Local value
// }

// showValue();
// console.log(value); // Global value

// // Temporal Dead Zone
// {
//     // console.log(age); // ReferenceError
//     let age = 22;
//     console.log(age); // 22
// }

// //===========================================================================

//6. Shallow Copy vs Deep Copy
const original = {
    name: "Ashmit",
    address: {
        city: "Basti"
    },
    skills: ["JavaScript", "React"]
};

// Shallow copy using spread syntax
const shallow = { ...original };

shallow.name = "Rahul";
shallow.address.city = "Delhi";
shallow.skills.push("Node.js");

console.log(original.name);           // Ashmit
console.log(original.address.city);   // Delhi
console.log(original.skills);         // ["JavaScript", "React", "Node.js"]

// Deep copy using structuredClone()
const deep = structuredClone(original);

deep.name = "Aman";
deep.address.city = "Lucknow";
deep.skills.push("MongoDB");

console.log(original.name);         // Ashmit
console.log(original.address.city); // Delhi
console.log(original.skills);       // ["JavaScript", "React", "Node.js"]

console.log(deep.name);         // Aman
console.log(deep.address.city); // Lucknow
console.log(deep.skills);       // ["JavaScript", "React", "Node.js", "MongoDB"]

// JSON-based copying has limitations.
const data = {
    date: new Date("2025-01-01"),
    value: undefined
};

const jsonCopy = JSON.parse(JSON.stringify(data));

console.log(jsonCopy.date);  // String, not Date
console.log(jsonCopy.value); // undefined property is omitted

