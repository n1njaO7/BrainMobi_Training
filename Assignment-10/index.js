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

//1.B Promise.allSettled()
const tasks = [
    Promise.resolve("User loaded"),
    Promise.reject(new Error("Posts failed")),
    Promise.resolve("Settings loaded")
];

Promise.allSettled(tasks).then(results => {
    results.forEach((result, index) => {
        if (result.status === "fulfilled") {
            console.log(index, "Success:", result.value);
        } else {
            console.log(index, "Error:", result.reason.message);
        }
    });
});