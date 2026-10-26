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

//==============================================================

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

//===========================================================

//3. Promises
function fetchUser(id) {
    return new Promise((resolve, reject) => {
        if (id <= 0) {
            reject(new Error("Invalid user ID"));
            return;
        }

        // Simulates an asynchronous operation.
        setTimeout(() => {
            resolve({
                id,
                name: "Ashmit"
            });
        }, 500);
    });
}

fetchUser(1)
    .then(user => {
        console.log("User:", user);
        return user.name;
    })
    .then(name => {
        console.log("Name:", name);
    })
    .catch(error => {
        console.error("Error:", error.message);
    });

// Invalid ID example
fetchUser(0)
    .then(user => console.log(user))
    .catch(error => console.error(error.message));

// Output includes:
// Error: Invalid user ID
// User: { id: 1, name: 'Ashmit' }
// Name: Ashmit

//====================================================================

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

//====================================================================

//5. .then(), .catch(), and .finally()
Promise.resolve(10)
    .then(value => {
        console.log("Value:", value); // 10
        return value * 2;
    })
    .then(value => {
        console.log("Doubled:", value); // 20
        throw new Error("Processing failed");
    })
    .catch(error => {
        console.log("Caught:", error.message);
        return "Recovered";
    })
    .finally(() => {
        console.log("Cleanup completed");
    })
    .then(result => {
        console.log("Final result:", result);
    });

// Output:
// Value: 10
// Doubled: 20
// Caught: Processing failed
// Cleanup completed
// Final result: Recovered

//=========================================================

//6. Promise Chaining
function getUser() {
    return Promise.resolve({
        id: 1,
        name: "Ashmit"
    });
}

function getOrders(userId) {
    return Promise.resolve([
        { id: 101, userId, total: 500 },
        { id: 102, userId, total: 800 }
    ]);
}

getUser()
    .then(user => {
        console.log("User:", user.name);
        return getOrders(user.id);
    })
    .then(orders => {
        console.log("Orders:", orders.length);

        return orders.reduce(
            (total, order) => total + order.total,
            0
        );
    })
    .then(total => {
        console.log("Total:", total); // 1300
        return total * 1.18;
    })
    .then(totalWithTax => {
        console.log("Total with tax:", totalWithTax); // 1534
    })
    .catch(error => {
        console.error("Operation failed:", error.message);
    });

// Incorrect chaining: missing return
getUser()
    .then(user => {
        getOrders(user.id); // Promise is not returned
    })
    .then(result => {
        console.log(result); // undefined
    });

//=======================================================================    

//7. async, await, and Error Handling with try...catch
function fetchUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id <= 0) {
                reject(new Error("Invalid user ID"));
                return;
            }

            resolve({
                id,
                name: "Ashmit"
            });
        }, 300);
    });
}

async function getUserDetails(id) {
    try {
        console.log("Fetching user...");

        const user = await fetchUser(id);
        console.log("User:", user.name);

        return user;
    } catch (error) {
        console.error("Error:", error.message);
        return null;
    } finally {
        console.log("Request completed");
    }
}

getUserDetails(1).then(result => {
    console.log("Returned:", result);
});

getUserDetails(0).then(result => {
    console.log("Returned:", result); // null
});

// Handling a rejected async function
async function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }

    return a / b;
}

divide(10, 2).then(console.log); // 5

divide(10, 0).catch(error => {
    console.log(error.message);
    // Cannot divide by zero
});

