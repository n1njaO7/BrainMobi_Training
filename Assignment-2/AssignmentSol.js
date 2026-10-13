//Arrays and Array Indexing
// const orders = [
//     { id: 101, amount: 2500, status: "completed" },
//     { id: 102, amount: 1800, status: "pending" },
//     { id: 103, amount: 3200, status: "completed" }
// ];

// console.log(orders[0]);
// console.log(orders[1].amount);
// console.log(orders.length);


//Accessing and updating elements
// const cart = ["Laptop", "Mouse", "Keyboard"];

// cart[1] = "Wireless Mouse";

// console.log(cart);
// console.log(cart[3]);

// const roles = ["user", "editor"];

// roles.push("admin");  // Allowed
// roles[0] = "member";  // Allowed
// console.log(roles);

// // roles = [];        // TypeError: reassignment is not allowed
// console.log(roles);

// Negative indexing
// const scores = [72, 85, 91, 96];

// console.log(scores[-1]);   
// console.log(scores.at(-1));     
// console.log(scores.at(-2)); 

//push() — Add elements at the end
const taskQueue = ["Validate Order", "Process Payment"];

const newLength = taskQueue.push("Generate Invoice");

console.log(taskQueue);
console.log(newLength);

const permissions = ["read"];

permissions.push("write", "delete");

console.log(permissions);




