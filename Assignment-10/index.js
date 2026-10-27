// //1.A Promise.all()
// const userPromise = Promise.resolve({ id: 1, name: "Ashmit" });
// const postsPromise = Promise.resolve(["Post 1", "Post 2"]);
// const settingsPromise = Promise.resolve({ theme: "dark" });

// Promise.all([userPromise, postsPromise, settingsPromise])
//     .then(([user, posts, settings]) => {
//         console.log("User:", user);
//         console.log("Posts:", posts);
//         console.log("Settings:", settings);
//     })
//     .catch(error => {
//         console.log("Request failed:", error.message);
//     });

// //1.B Promise.allSettled()
// const tasks = [
//     Promise.resolve("User loaded"),
//     Promise.reject(new Error("Posts failed")),
//     Promise.resolve("Settings loaded")
// ];

// Promise.allSettled(tasks).then(results => {
//     results.forEach((result, index) => {
//         if (result.status === "fulfilled") {
//             console.log(index, "Success:", result.value);
//         } else {
//             console.log(index, "Error:", result.reason.message);
//         }
//     });
// });

// //=========================================================================

// //2.A. Promise.race()
// const slowRequest = new Promise(resolve => {
//     setTimeout(() => resolve("Slow request succeeded"), 1000);
// });

// const fastRequest = new Promise(resolve => {
//     setTimeout(() => resolve("Fast request succeeded"), 200);
// });

// Promise.race([slowRequest, fastRequest])
//     .then(console.log)
//     .catch(error => console.log("Error:", error.message));

// //2.B. Promise.any()
// const requests = [
//     Promise.reject(new Error("Server A failed")),
//     new Promise(resolve => {
//         setTimeout(() => resolve("Server B succeeded"), 300);
//     }),
//     new Promise(resolve => {
//         setTimeout(() => resolve("Server C succeeded"), 600);
//     })
// ];

// Promise.any(requests)
//     .then(console.log)
//     .catch(error => {
//         console.log(error.name);
//         console.log(error.errors.map(err => err.message));
//     });

// //==========================================================================

// //3.Fetch Api
// async function getUser(userId) {
//     try {
//         const response = await fetch(
//             `https://jsonplaceholder.typicode.com/users/${userId}`
//         );

//         // fetch() does not reject just because the server returns 404 or 500.
//         if (!response.ok) {
//             throw new Error(`HTTP Error: ${response.status}`);
//         }

//         const user = await response.json();

//         console.log("Name:", user.name);
//         console.log("Email:", user.email);

//         return user;
//     } catch (error) {
//         console.error("Failed to fetch user:", error.message);
//     } finally {
//         console.log("Fetch operation completed.");
//     }
// }
// getUser(1);

// //Example: Send a POST request
// async function createUser() {
//     try {
//         const response = await fetch(
//             "https://jsonplaceholder.typicode.com/users",
//             {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify({
//                     name: "Ashmit",
//                     email: "ashmit@example.com"
//                 })
//             }
//         );

//         if (!response.ok) {
//             throw new Error(`HTTP Error: ${response.status}`);
//         }

//         const createdUser = await response.json();
//         console.log("Created user:", createdUser);
//     } catch (error) {
//         console.error(error.message);
//     }
// }
// createUser(); //Created user: { name: 'Ashmit', email: 'ashmit@example.com', id: 11 }

// //==============================================================================================

// //4. API Requests and JSON

// const user = {
//     id: 1,
//     name: "Ashmit",
//     skills: ["JavaScript", "Node.js"]
// };

// // JavaScript object → JSON string
// const jsonString = JSON.stringify(user);
// console.log(jsonString);

// // JSON string → JavaScript object
// const parsedUser = JSON.parse(jsonString);
// console.log(parsedUser.name);
// console.log(parsedUser.skills[0]);

// /*OUTPUT
//  {"id":1,"name":"Ashmit","skills":["JavaScript","Node.js"]}
//  Ashmit
//  JavaScript
// */ 

// //Combined example: Make an API request and process JSON

// async function loadPosts() {
//     try {
//         const response = await fetch(
//             "https://jsonplaceholder.typicode.com/posts"
//         );

//         if (!response.ok) {
//             throw new Error(`Request failed: ${response.status}`);
//         }

//         const posts = await response.json();

//         // API returned an array of objects.
//         const firstPost = posts[0];

//         console.log("Post ID:", firstPost.id);
//         console.log("Title:", firstPost.title);

//         // Convert an object to JSON for storage or transmission.
//         const savedData = JSON.stringify(firstPost);
//         console.log("JSON string:", savedData);
//     } catch (error) {
//         console.error("Could not load posts:", error.message);
//     }
// }
// loadPosts();

// /*OUTPUT
// Post ID: 1
// Title: sunt aut facere repellat provident occaecati excepturi optio reprehenderit
// JSON string: {"userId":1,"id":1,"title":"sunt aut facere repellat provident occaecati 
// excepturi optio reprehenderit","body":"quia et suscipit\nsuscipit recusandae consequuntur 
// expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"}
// */

// //==================================================================================================================

// //5. ES6 Features Overview
// // 1. let and const
// const company = "BrainMobi";
// let employeeCount = 10;

// employeeCount++;

// // 2. Arrow function
// const add = (a, b) => a + b;

// // 3. Template literals
// const message = `Welcome to ${company}!`;

// // 4. Destructuring
// const user = {
//     name: "Ashmit",
//     role: "Developer"
// };

// const { name, role } = user;

// // 5. Spread operator
// const originalSkills = ["JavaScript", "React"];
// const skills = [...originalSkills, "Node.js"];

// // 6. Rest parameters
// function sum(...numbers) {
//     return numbers.reduce((total, number) => total + number, 0);
// }

// // 7. Default parameters
// function greet(person = "Guest") {
//     return `Hello, ${person}`;
// }

// // 8. Classes
// class Developer {
//     constructor(name) {
//         this.name = name;
//     }

//     introduce() {
//         return `I am ${this.name}`;
//     }
// }

// // 9. Map and Set
// const scores = new Map([["Ashmit", 90]]);
// const uniqueNumbers = new Set([1, 1, 2, 3]);

// // 10. Promise
// const result = Promise.resolve("Success");

// console.log(message);     //Welcome to BrainMobi!
// console.log(add(2, 3));   //5
// console.log(name, role);  //Ashmit Developer
// console.log(skills);      //[ 'JavaScript', 'React', 'Node.js' ]
// console.log(sum(10, 20, 30)); //60
// console.log(greet());         //Hello, Guest  
// console.log(new Developer("Ashmit").introduce()); //I am Ashmit
// console.log(scores.get("Ashmit"));   //90
// console.log([...uniqueNumbers]);     //[ 1, 2, 3 ]
// result.then(console.log);            //Success

// //======================================================================================================

//6. Default Parameters
function createUser(
    name = "Guest",
    role = "user",
    active = true
) {
    return {
        name,
        role,
        active
    };
}
console.log(createUser());             //{ name: 'Guest', role: 'user', active: true }

console.log(createUser("Ashmit"));     //{ name: 'Ashmit', role: 'user', active: true }   

console.log(createUser("Ashmit", "admin", false));         //{ name: 'Ashmit', role: 'admin', active: false }

// Explicit undefined triggers the default.
console.log(createUser(undefined, undefined, undefined));  //{ name: 'Guest', role: 'user', active: true }

// null does not trigger the default.
console.log(createUser(null, null, null));          //{ name: null, role: null, active: null }

// Zero, false, and an empty string are preserved.
function configure(limit = 10, enabled = true, label = "Default") {
    return { limit, enabled, label };
}

console.log(configure(0, false, ""));            //{ limit: 0, enabled: false, label: '' }

// Defaults can reference earlier parameters.
function calculatePrice(price, tax = price * 0.18) {
    return price + tax;
}
console.log(calculatePrice(100));        //118