function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn(...args);
        }

        return function (...nextArgs) {
            return curried(...args, ...nextArgs);
        };
    };
}


// Original function
function add(a, b, c) {
    return a + b + c;
}


// Convert the normal function into a curried function
const curriedAdd = curry(add);


// Different calling styles
console.log(curriedAdd(1)(2)(3)); // 6

console.log(curriedAdd(1, 2)(3)); // 6

console.log(curriedAdd(1)(2, 3)); // 6

console.log(curriedAdd(1, 2, 3)); // 6