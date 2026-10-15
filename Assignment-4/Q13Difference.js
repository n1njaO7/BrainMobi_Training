/*
Feature                 Function Declaration    Function Expression      Arrow Function
------------------------------------------------------------------------------------------------
Syntax                  function foo() {}       const foo = function(){} const foo = () => {}

Hoisting                Fully hoisted           Depends on variable      Depends on variable
                                                declaration              declaration

this behavior           Own/dynamic this        Own/dynamic this         Lexical this

Constructor             Yes                     Yes, for normal         No
                                                function expressions

arguments object        Available               Available for normal    No own arguments object
                                                function expressions

Return syntax           Explicit return         Explicit return          Implicit return possible
                                                                         for single expressions
*/


// ============================================
// A. FUNCTION DECLARATION
// ============================================

// Example 1: Hoisting
// Function declarations can be called before their definition.

console.log(add(10, 20)); // 30

function add(a, b) {
    return a + b;
}


// Example 2: this behavior
// A normal function's this depends on how it is called.

const person1 = {
    name: "Ashmit",

    greet: function () {
        console.log(this.name);
    }
};

person1.greet(); // Ashmit


// Example 3: Constructor
// Function declarations can be used with new.

function User(name) {
    this.name = name;
}

const user1 = new User("Rahul");

console.log(user1.name); // Rahul


// Example 4: arguments object
// Normal functions have their own arguments object.

function showArguments(a, b) {
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
}

showArguments(10, 20, 30);

// Output:
// 3
// 10
// 20
// 30



// ============================================
// B. FUNCTION EXPRESSION
// ============================================

// Example 1: Hoisting
// A const variable cannot be accessed before initialization.

const subtract = function (a, b) {
    return a - b;
};

console.log(subtract(20, 5)); // 15

// Calling subtract before its initialization would throw
// a ReferenceError because it is declared using const.


// Example 2: this behavior
// A normal function expression also has dynamic this.

const person2 = {
    name: "Ashmit",

    greet: function () {
        console.log(this.name);
    }
};

person2.greet(); // Ashmit


// Example 3: Constructor
// A normal function expression can be used with new.

const Employee = function (name) {
    this.name = name;
};

const employee1 = new Employee("Aman");

console.log(employee1.name); // Aman


// Example 4: arguments object
// Normal function expressions have their own arguments object.

const showExpressionArguments = function (a, b) {
    console.log(arguments.length);
    console.log(arguments[2]);
};

showExpressionArguments(10, 20, 30);

// Output:
// 3
// 30



// ============================================
// C. ARROW FUNCTION
// ============================================

// Example 1: Hoisting
// Arrow functions assigned to const variables cannot
// be accessed before initialization.

const multiply = (a, b) => a * b;

console.log(multiply(5, 4)); // 20


// Example 2: this behavior
// Arrow functions inherit this from their surrounding scope.

const person3 = {
    name: "Ashmit",

    regularFunction: function () {
        console.log(this.name);
    },

    arrowFunction: () => {
        console.log(this.name);
    }
};

person3.regularFunction(); // Ashmit
person3.arrowFunction();   // Usually undefined in a normal script

// The arrow function does not get its this from person3.
// It inherits this from the surrounding scope.


// Example 3: Constructor
// Arrow functions cannot be used as constructors.

const Student = (name) => {
    this.name = name;
};

// const student1 = new Student("Rohit");
// TypeError: Student is not a constructor


// Example 4: arguments object
// Arrow functions do not have their own arguments object.
// Use rest parameters instead.

const showArrowArguments = (...args) => {
    console.log(args.length);
    console.log(args[2]);
};

showArrowArguments(10, 20, 30);

// Output:
// 3
// 30