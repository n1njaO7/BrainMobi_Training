/*
Problem 3: Check whether brackets are correctly matched and nested.
 
Example: s = "()[]{}"
 
Output: true
 
 s = "()[]{{{{{)))}}"
 
Output: false
*/

function isValid(str) {
    if (typeof str !== "string") return false;

    const stack = []
    const pair = {
        ")": "(",
        "}": "{",
        "]": "["
    }

    for (const char of str) {
        if (char === "(" || char === "[" || char === "{") {
            stack.push(char)
        } 
        else if (char in pair) {
            if (stack.length === 0) return false;

            if (stack.pop() !== pair[char]) 
                return false;
        } 
        else {
            return false;
        }
    }

    return stack.length === 0;
}


console.log(isValid("()[]{}"));       // true
console.log(isValid("()[]{{{{{)))}}")); // false
console.log(isValid(")"));  //false