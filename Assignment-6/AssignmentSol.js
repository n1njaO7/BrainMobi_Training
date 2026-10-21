//1. Nullish Coalescing Operator (??)
const user = {
    name: "",
    age: 0,
    isAdmin: false,
    city: null,
    country: undefined
};

console.log(user.name ?? "Guest");       // ""
console.log(user.age ?? 18);             // 0
console.log(user.isAdmin ?? true);       // false
console.log(user.city ?? "Unknown");     // "Unknown"
console.log(user.country ?? "India");    // "India"

// Difference between ?? and ||
console.log(user.age || 18);             // 18
console.log(user.age ?? 18);             // 0

// Combining with logical operators requires parentheses
console.log((user.city || user.country) ?? "Default"); // "Default"

