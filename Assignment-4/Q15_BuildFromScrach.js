
// 1. IMPLEMENTATION OF myMap()

function myMap(array, callback) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array));
    }

    return result;
}


// Example
const numbers = [1, 2, 3, 4, 5];

const doubled = myMap(numbers, function (num) {
    return num * 2;
});

console.log(doubled);
// Output: [2, 4, 6, 8, 10]


// 2. IMPLEMENTATION OF myFilter()

function myFilter(array, callback) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            result.push(array[i]);
        }
    }

    return result;
}


// Example
const evenNumbers = myFilter(numbers, function (num) {
    return num % 2 === 0;
});

console.log(evenNumbers);
// Output: [2, 4]


// 3. IMPLEMENTATION OF myReduce()

function myReduce(array, callback, initialValue) {
    let accumulator;
    let startIndex;

    if (arguments.length >= 3) {
        accumulator = initialValue;
        startIndex = 0;
    } else {
        if (array.length === 0) {
            throw new TypeError(
                "Reduce of empty array with no initial value"
            );
        }

        accumulator = array[0];
        startIndex = 1;
    }

    for (let i = startIndex; i < array.length; i++) {
        accumulator = callback(
            accumulator,
            array[i],
            i,
            array
        );
    }

    return accumulator;
}


// Example 1: With initial value
const sum = myReduce(numbers, function (acc, num) {
    return acc + num;
}, 0);

console.log(sum);
// Output: 15


// Example 2: Without initial value
const product = myReduce([1, 2, 3, 4], function (acc, num) {
    return acc * num;
});

console.log(product);
// Output: 24


// Example 3: Empty array without initial value
try {
    console.log(myReduce([], function (acc, num) {
        return acc + num;
    }));
} catch (error) {
    console.log(error.name);
    // Output: TypeError
}


// Example 4: Empty array with initial value
console.log(myReduce([], function (acc, num) {
    return acc + num;
}, 100));

// Output: 100
