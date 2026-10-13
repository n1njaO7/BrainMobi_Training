// Arrays and Array Indexing
const orderss = [
    { id: 101, amount: 2500, status: "completed" },
    { id: 102, amount: 1800, status: "pending" },
    { id: 103, amount: 3200, status: "completed" }
];

console.log(orderss[0]);
console.log(orderss[1].amount);
console.log(orderss.length);


// Accessing and updating elements
const cart = ["Laptop", "Mouse", "Keyboard"];

cart[1] = "Wireless Mouse";

console.log(cart);
console.log(cart[3]);

const roles = ["user", "editor"];

roles.push("admin");  // Allowed
roles[0] = "member";  // Allowed
console.log(roles);

// roles = [];        // TypeError: reassignment is not allowed
console.log(roles);

// Negative indexing
const scores = [72, 85, 91, 96];

console.log(scores[-1]);   
console.log(scores.at(-1));     
console.log(scores.at(-2)); 

// push() — Add elements at the end
const taskQueue = ["Validate Order", "Process Payment"];

const newLeength = taskQueue.push("Generate Invoice");

console.log(taskQueue);
console.log(newLeength);

const permissions = ["read"];

permissions.push("write", "delete");

console.log(permissions);

// pop() — Remove the last element
const pendingTasks = [
    "Validate Order",
    "Process Payment",
    "Generate Invoice"
];
const removedTask = pendingTasks.pop();
console.log(removedTask);
console.log(pendingTasks);

// shift() — Remove the first element
const requests = [
    "Request A",
    "Request B",
    "Request C"
];
const processedRequest = requests.shift();
console.log(processedRequest);
console.log(requests);

// unshift() — Add elements at the beginning
const notifications = [
    "Payment received",
    "Invoice generated"
];
const newLength = notifications.unshift("New order received");

console.log(notifications);
console.log(newLength);

// Combined practical example
const supportQueue = ["Ticket-101", "Ticket-102"];

supportQueue.push("Ticket-103");
console.log(supportQueue);

const currentTicket = supportQueue.shift();
console.log("Processing:", currentTicket);

supportQueue.unshift("Urgent-Ticket-104");
console.log("Updated queue:", supportQueue);


// Slice Example: Extract products for a page
const productss = [
    "Laptop",
    "Monitor",
    "Keyboard",
    "Mouse",
    "Webcam"
];
const pageProducts = productss.slice(1, 4);
console.log(pageProducts);
console.log(productss);

// Negative indexes with slice()
const months = ["Jan", "Feb", "Mar", "Apr", "May"];

console.log(months.slice(-2));
console.log(months.slice(1, -1));
console.log(months.slice());

// Spice 
// Remove discontinued products
const invntory = [
    "Laptop",
    "Old Monitor",
    "Keyboard",
    "Mouse"
];
const removedItems = invntory.splice(1, 1);
console.log(removedItems);
console.log(invntory);

// Insert a product
const inventry = ["Laptop", "Mouse"];
inventry.splice(1, 0, "Monitor");
console.log(inventry);

// Replace an element 
const inventoryy = ["Laptop", "Old Monitor", "Mouse"];

const removedItemss = inventoryy.splice(1, 1, "4K Monitor");
console.log(removedItemss);
console.log(inventoryy);

// Important difference
const original = [10, 20, 30, 40];
const sliced = original.slice(1, 3);
const spliced = original.splice(1, 2);

console.log(sliced);
console.log(spliced);
console.log(original);

// Shallow Copy
const users = [
    { id: 1, role: "user" },
    { id: 2, role: "admin" }
];

const copiedUsers = users.slice();
copiedUsers[0].role = "editor";
console.log(users[0].role); 

//DATASET
const orders = [
    { id: 101, customer: "Aman", amount: 2500, status: "completed" },
    { id: 102, customer: "Priya", amount: 1800, status: "pending" },
    { id: 103, customer: "Rahul", amount: 3200, status: "completed" },
    { id: 104, customer: "Neha", amount: 1200, status: "cancelled" }
];
//Map(): Create a response containing only order IDs and amounts
const orderSummaries = orders.map(order => ({
    orderId: order.id,
    total: order.amount
}));
console.log(orderSummaries);

// FILTER(): Find completed orders worth at least ₹2,000
const eligibleOrders = orders.filter(order => {
    return order.status === "completed" && order.amount >= 2000;
});

console.log(eligibleOrders);

//REDUCE()
//Example A: Calculate total completed-order revenue
const totalRevenue = orders.reduce((total, order) => {
    if (order.status === "completed") {
        return total + order.amount;
    }

    return total;
}, 0);

console.log(totalRevenue);


//Example B: Build a revenue summary by status
const revenueByStatus = orders.reduce((summary, order) => {
    summary[order.status] =
        (summary[order.status] || 0) + order.amount;

    return summary;
}, {});

console.log(revenueByStatus);

//find() — Return the first matching element
const Users = [
    { id: 11, name: "Aman", role: "user" },
    { id: 12, name: "Priya", role: "admin" },
    { id: 13, name: "Rahul", role: "admin" }
];

const admin = Users.find(user => user.role === "admin");

console.log(admin);

//findIndex() - Return the first matching index
const products = [
    { id: "P101", stock: 12 },
    { id: "P102", stock: 0 },
    { id: "P103", stock: 7 }
];
const outOfStockindex = products.findIndex(product => product.stock === 0);

console.log(outOfStockindex);

//includes() — Check for an exact value
const allowedRoles = ["admin", "editor", "manager"];

console.log(allowedRoles.includes("editor")); // true
console.log(allowedRoles.includes("guest"));  // false

//difference: objects and includes()
const user = [
    { id: 1, name: "Aman" }
];
console.log(user.includes({ id: 1, name: "Aman" }));

