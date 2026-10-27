//1.A Promise.all()
const userPromise = Promise.resolve({ id: 1, name: "Ashmit" });
const postsPromise = Promise.resolve(["Post 1", "Post 2"]);
const settingsPromise = Promise.resolve({ theme: "dark" });

Promise.all([userPromise, postsPromise, settingsPromise])
    .then(([user, posts, settings]) => {
        console.log("User:", user);
        console.log("Posts:", posts);
        console.log("Settings:", settings);
    })
    .catch(error => {
        console.log("Request failed:", error.message);
    });