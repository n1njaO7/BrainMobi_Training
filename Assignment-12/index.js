// //1. super Keyword
// class User {
//     constructor(name, role) {
//         this.name = name;
//         this.role = role;
//     }

//     introduce() {
//         return `I am ${this.name}, a ${this.role}.`;
//     }
// }

// class Developer extends User {
//     constructor(name, language) {
//         super(name, "Developer");

//         this.language = language;
//     }

//     introduce() {
//         // Call the parent implementation.
//         const parentMessage = super.introduce();

//         return `${parentMessage} I use ${this.language}.`;
//     }
// }

// const developer = new Developer("Ashmit", "JavaScript");

// console.log(developer.introduce()); //I am Ashmit, a Developer. I use JavaScript.
// console.log(developer.name);        //Ashmit
// console.log(developer.language);    //JavaScript

// //===========================================================================================

// //2. Getters and Setters
// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     // Getter
//     get details() {
//         return `${this.name} is ${this.age} years old.`;
//     }

//     // Setter with validation
//     set userAge(value) {
//         if (!Number.isInteger(value) || value < 0) {
//             throw new Error("Age must be a non-negative integer.");
//         }

//         this.age = value;
//     }
// }

// const user = new User("Ashmit", 22);

// console.log(user.details);   //Ashmit is 22 years old.

// user.userAge = 23;
// console.log(user.details);  //Ashmit is 22 years old.

// try {
//     user.userAge = -5;
// } catch (error) {
//     console.log(error.message);  //Age must be a non-negative integer.
// }

// //==========================================================================================

//3. Static Methods
class Calculator {
    static add(a, b) {
        return a + b;
    }

    static multiply(a, b) {
        return a * b;
    }

    static isNumber(value) {
        return typeof value === "number" &&
               Number.isFinite(value);
    }
}

console.log(Calculator.add(10, 20));         //30
console.log(Calculator.multiply(4, 5));      //20
console.log(Calculator.isNumber(10));        //true
console.log(Calculator.isNumber(Infinity));  //false

const calc = new Calculator();

// console.log(calc.add(10, 20)); // TypeError