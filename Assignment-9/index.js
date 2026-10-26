// //1. Call Stack and Task Queues
// console.log("1. Start");

// function first() {
//     console.log("2. First function");
//     second();
//     console.log("4. First function ends");
// }

// function second() {
//     console.log("3. Second function");
// }

// first();

// setTimeout(() => {
//     console.log("6. Timer callback");
// }, 0);

// Promise.resolve().then(() => {
//     console.log("5. Promise callback");
// });

// console.log("7. End");

// // Output:
// // 1. Start
// // 2. First function
// // 3. Second function
// // 4. First function ends
// // 7. End
// // 5. Promise callback
// // 6. Timer callback

// //==============================================================

// //2. Microtasks vs Macrotasks
// console.log("1. Start");

// setTimeout(() => {
//     console.log("6. Timer");

//     Promise.resolve().then(() => {
//         console.log("7. Promise inside timer");
//     });
// }, 0);

// Promise.resolve().then(() => {
//     console.log("3. First Promise");

//     queueMicrotask(() => {
//         console.log("5. Nested microtask");
//     });
// });

// queueMicrotask(() => {
//     console.log("4. Second microtask");
// });

// console.log("2. End");

// // Typical browser output:
// // 1. Start
// // 2. End
// // 3. First Promise
// // 4. Second microtask
// // 5. Nested microtask
// // 6. Timer
// // 7. Promise inside timer

// //===========================================================

// //3. Promises
// function fetchUser(id) {
//     return new Promise((resolve, reject) => {
//         if (id <= 0) {
//             reject(new Error("Invalid user ID"));
//             return;
//         }

//         // Simulates an asynchronous operation.
//         setTimeout(() => {
//             resolve({
//                 id,
//                 name: "Ashmit"
//             });
//         }, 500);
//     });
// }

// fetchUser(1)
//     .then(user => {
//         console.log("User:", user);
//         return user.name;
//     })
//     .then(name => {
//         console.log("Name:", name);
//     })
//     .catch(error => {
//         console.error("Error:", error.message);
//     });

// // Invalid ID example
// fetchUser(0)
//     .then(user => console.log(user))
//     .catch(error => console.error(error.message));

// // Output includes:
// // Error: Invalid user ID
// // User: { id: 1, name: 'Ashmit' }
// // Name: Ashmit

// //====================================================================

//4. Promise States
const pendingPromise = new Promise(() => {
    // Neither resolve nor reject is called.
});

const fulfilledPromise = Promise.resolve("Success");

const rejectedPromise = Promise.reject(
    new Error("Something went wrong")
);

pendingPromise.then(
    value => console.log(value),
    error => console.log(error)
);
// No output: remains pending.

fulfilledPromise.then(value => {
    console.log(value); // Success
});

rejectedPromise.catch(error => {
    console.log(error.message); // Something went wrong
});

// Only the first settlement takes effect.
const promise = new Promise((resolve, reject) => {
    resolve("First result");
    reject(new Error("Ignored rejection"));
});

promise.then(value => console.log(value));
// First result

