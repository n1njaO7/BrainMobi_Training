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

//3. Call Stack
function first() {
    console.log("First starts");
    second();
    console.log("First ends");
}

function second() {
    console.log("Second starts");
    third();
    console.log("Second ends");
}

function third() {
    console.log("Third executes");
}

first();

// Output:
// First starts
// Second starts
// Third executes
// Second ends
// First ends