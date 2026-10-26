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

//2. Microtasks vs Macrotasks
console.log("1. Start");

setTimeout(() => {
    console.log("6. Timer");

    Promise.resolve().then(() => {
        console.log("7. Promise inside timer");
    });
}, 0);

Promise.resolve().then(() => {
    console.log("3. First Promise");

    queueMicrotask(() => {
        console.log("5. Nested microtask");
    });
});

queueMicrotask(() => {
    console.log("4. Second microtask");
});

console.log("2. End");

// Typical browser output:
// 1. Start
// 2. End
// 3. First Promise
// 4. Second microtask
// 5. Nested microtask
// 6. Timer
// 7. Promise inside timer














console.log("1. Start");

setTimeout(() => {
    console.log("6. Timer");

    Promise.resolve().then(() => {
        console.log("7. Promise inside timer");
    });
}, 0);

Promise.resolve().then(() => {
    console.log("3. First Promise");

    queueMicrotask(() => {
        console.log("5. Nested microtask");
    });
});

queueMicrotask(() => {
    console.log("4. Second microtask");
});

console.log("2. End");

// Typical browser output:
// 1. Start
// 2. End
// 3. First Promise
// 4. Second microtask
// 5. Nested microtask
// 6. Timer
// 7. Promise inside timer



