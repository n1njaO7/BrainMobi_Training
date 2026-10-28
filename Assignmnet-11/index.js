//1. Enhanced Object Literals
const name = "Ashmit";
const role = "Backend Developer";
const id = "userId";
// Property shorthand
// Instead of { name: name, role: role }
const user = {
    name,
    role,

    // 2. Method shorthand
    introduce() {
        return `I am ${this.name}, a ${this.role}.`;
    },

    // 3. Computed property name
    [id]: 101,

    // 4. Computed method name
    ["get" + "Role"]() {
        return this.role;
    }
};
console.log(user.name);         //Ashmit
console.log(user.introduce());  //I am Ashmit, a Backend Developer.
console.log(user.userId);       //101
console.log(user.getRole());    //Backend Developer
