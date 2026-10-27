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

//3.Fetch Api
async function getUser(userId) {
    try {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${userId}`
        );

        // fetch() does not reject just because the server returns 404 or 500.
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const user = await response.json();

        console.log("Name:", user.name);
        console.log("Email:", user.email);

        return user;
    } catch (error) {
        console.error("Failed to fetch user:", error.message);
    } finally {
        console.log("Fetch operation completed.");
    }
}
getUser(1);

//Example: Send a POST request
async function createUser() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: "Ashmit",
                    email: "ashmit@example.com"
                })
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const createdUser = await response.json();
        console.log("Created user:", createdUser);
    } catch (error) {
        console.error(error.message);
    }
}
createUser(); //Created user: { name: 'Ashmit', email: 'ashmit@example.com', id: 11 }
