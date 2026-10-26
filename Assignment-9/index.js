//1. Call Stack and Task Queues
console.log("1. Start");

function first() {
    console.log("2. First function");
    second();
    console.log("4. First function ends");
}

function second() {
    console.log("3. Second function");
}

first();

setTimeout(() => {
    console.log("6. Timer callback");
}, 0);

Promise.resolve().then(() => {
    console.log("5. Promise callback");
});

console.log("7. End");

// Output:
// 1. Start
// 2. First function
// 3. Second function
// 4. First function ends
// 7. End
// 5. Promise callback
// 6. Timer callback









