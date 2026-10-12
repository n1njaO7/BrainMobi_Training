//INTRO -
// let team = "BrainMobi Team"
// console.log(`Hello ${team} . This is my Firt Assignmet `)

// VARIABLES - LET , VAR AND CONST
// if (true) {
//     var a = 10;
//     let b = 20;
//     const c = 30;
// }

// console.log(a); // 10
// console.log(b); // ReferenceError
// console.log(c); // ReferenceError

// DATA TYPES 

// let name = "Ashmit";
// let age = 22;
// let isStudent = true;
// let result;
// let selectedValue = null;
// let bigNumber = 12345678901234567890n;
// let id = Symbol("id");

// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof isStudent);
// console.log(typeof result);
// console.log(typeof selectedValue);
// console.log(typeof bigNumber);
// console.log(typeof id);

//Primitive Data type
// let a = 10;
// let b = a;

// b = 20;

// console.log(a);
// console.log(b);

//non primitive 
// let user1 = { name: "Ashmit" };
// let user2 = user1;

// user2.name = "Rahul";

// console.log(user1.name);
// console.log(user2.name);

//Airthmetic operator
// let a = 10;
// let b = 3;

// console.log(a + b);  
// console.log(a - b);  
// console.log(a * b);  
// console.log(a / b);  
// console.log(a % b);  
// console.log(a ** b); 

//COMPARISION OPERATOR
// console.log(5 > 3);   
// console.log(5 < 3);   
// console.log(5 == "5");  
// console.log(5 === "5"); 
// console.log(5 !== 3); 

//LOGICAL OPERATOR
// let age = 22;
// let hasID = true;

// console.log(age >= 18 && hasID);
// console.log(age < 18 || hasID);  
// console.log(!hasID);

//Explicit conversion
// let value = "100";

// let numberValue = Number(value);
// let stringValue = String(500);

// console.log(numberValue);
// console.log(typeof numberValue);
// console.log(stringValue);
// console.log(typeof stringValue);

//Type coercion
// console.log("5" + 2);
// console.log("5" - 2);
// console.log(true + 1);

//ADDITIONAL EXAMPLES  
// console.log(Number("hello"));
// console.log(Boolean(""));
// console.log(Boolean("false"));

//IF-ELSE
// const user = {
//     email: "ashmit@example.com",
//     password: "secure123",
//     isVerified: true
// };

// if (!user.email || !user.password) {
//     console.log("Email and password are required");
// } else if (!user.isVerified) {
//     console.log("Please verify your account");
// } else {
//     console.log("Login validation successful");
// }

//SWITCH
// const statusCode = 404;
// switch (statusCode) {
//     case 200:
//         console.log("Request successful");
//         break;
//     case 401:
//         console.log("Unauthorized access");
//         break;
//     case 404:
//         console.log("Resource not found");
//         break;
//     case 500:
//         console.log("Internal server error");
//         break;
//     default:
//         console.log("Unknown status code");
// }

//FOR LOOP
// const orders = [
//     { id: 101, amount: 1500 },
//     { id: 102, amount: 2500 },
//     { id: 103, amount: 1000 }
// ];

// let total = 0;

// for (let i = 0; i < orders.length; i++) {
//     total += orders[i].amount;
// }

// console.log("Total order amount:", total);

//WHILE LOOP
// let attempts = 0;
// const maxAttempts = 3;

// while (attempts < maxAttempts) {
//     attempts++;
//     console.log(`Attempt ${attempts}`);

//     // Simulate a failed attempt.
// }

// console.log("Maximum attempts reached");

//DO-WHILE
// let page = 1;
// const totalPages = 0;

// do {
//     console.log(`Processing page ${page}`);
//     page++;
// } while (page <= totalPages);

//BREAK
// const users = [
//     { id: 1, name: "Rahul" },
//     { id: 2, name: "Ashmit" },
//     { id: 3, name: "Priya" }
// ];

// const targetId = 2;
// let foundUser = null;

// for (const user of users) {
//     if (user.id === targetId) {
//         foundUser = user;
//         break;
//     }
// }

// console.log(foundUser);

//SKIP
// const transactions = [1200, -500, 800, 0, 1500];

// let validTotal = 0;

// for (const amount of transactions) {
//     if (amount <= 0) {
//         continue;
//     }

//     validTotal += amount;
// }

// console.log("Valid total:", validTotal);

//FUNCTION 
//Example 1: Calculate an Order Total

// function calculateOrderTotal(price, quantity, discount = 0) {
//     const subtotal = price * quantity;
//     return subtotal - discount;
// }

// console.log(calculateOrderTotal(1000, 3, 500));
// console.log(calculateOrderTotal(1000, 2));

//Example 2: Validate Required User Fields
// function validateUser(name, email) {
//     if (!name || !email) {
//         return "Name and email are required";
//     }

//     return "User data is valid";
// }

// console.log(validateUser("Ashmit", "ashmit@example.com"));
// console.log(validateUser("", "ashmit@example.com"));

//FUNCTION EXPRESSION
// Example 1: Store Business Logic in a Variable
// const calculateTax = function (amount, taxRate) {
//     return amount * taxRate / 100;
// };

// console.log(calculateTax(5000, 18));

//Example 2: Pass a Function as an Argument
// const processPayment = function (amount, callback) {
//     console.log(`Processing payment of ₹${amount}`);
//     callback(amount);
// };

// processPayment(2500, function (amount) {
//     console.log(`Payment of ₹${amount} processed`);
// });

//ARROW
//Example 1: Filter Active Users

// const users = [
//     { name: "Ashmit", active: true },
//     { name: "Rahul", active: false },
//     { name: "Priya", active: true }
// ];

// const activeUsers = users.filter(user => user.active);

// console.log(activeUsers);

//Example 2: Calculate Total Revenue
const orders = [
    { amount: 1200 },
    { amount: 1800 },
    { amount: 2000 }
];

const totalRevenue = orders.reduce(
    (total, order) => total + order.amount,
    0
);

console.log(totalRevenue);