//A. Immutability
// 1. Primitive values are immutable
let name = "Ashmit";
name.toUpperCase();

console.log(name); // "Ashmit" (original unchanged)

name = name.toUpperCase();
console.log(name); // "ASHMIT"

// 2. Objects are mutable by default
const user = {
    name: "Ashmit",
    address: { city: "Basti" }
};

user.name = "Rahul"; // Allowed
user.address.city = "Lucknow"; // Allowed

console.log(user.name); // Rahul

// 3. Creating a new object instead of modifying the original
const updatedUser = {
    ...user,
    name: "Aman"
};

console.log(user.name);        // Rahul
console.log(updatedUser.name); // Aman

// 4. Spread creates only a shallow copy
updatedUser.address.city = "Delhi";

console.log(user.address.city); // Delhi
// Nested address is shared between both objects.

// 5. Creating a new nested object
const safeUpdate = {
    ...user,
    address: {
        ...user.address,
        city: "Mumbai"
    }
};

console.log(user.address.city);      // Delhi
console.log(safeUpdate.address.city); // Mumbai

// 6. Object.freeze() is shallow
const product = Object.freeze({
    price: 100,
    details: { stock: 5 }
});

product.price = 200;        // Fails silently in non-strict code
product.details.stock = 0;  // Allowed: nested object isn't frozen

console.log(product.price);         // 100
console.log(product.details.stock); // 0