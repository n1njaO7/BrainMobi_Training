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
let page = 1;
const totalPages = 0;

do {
    console.log(`Processing page ${page}`);
    page++;
} while (page <= totalPages);