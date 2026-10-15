
const arr = [1, "1", 2, 2, NaN, NaN, "a", "a", 3];


// METHOD 1: filter() + findIndex()

const unique1 = arr.filter((value, index) => {
    if (Number.isNaN(value)) {
        return arr.findIndex(item => Number.isNaN(item)) === index;
    }

    return arr.findIndex(item => item === value) === index;
});

console.log("Method 1:", unique1);// [1, "1", 2, NaN, "a", 3]



// METHOD 2: reduce() + includes()

const unique2 = arr.reduce((result, value) => {
    if (!result.includes(value)) {
        result.push(value);
    }

    return result;
}, []);

console.log("Method 2:", unique2);// [1, "1", 2, NaN, "a", 3]



// METHOD 3: Plain loop + lookup object

const unique3 = [];
const seen = Object.create(null);

for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    const key = typeof value + ":" + String(value);

    if (!seen[key]) {
        seen[key] = true;
        unique3.push(value);
    }
}

console.log("Method 3:", unique3);// [1, "1", 2, NaN, "a", 3] 


/*
## Explanation

1. filter() + findIndex(): Keeps only the first occurrence of each value. We handle NaN separately because NaN === NaN is false.
2. reduce() + includes(): Builds a new array and adds a value only if it is not already present. includes() correctly detects NaN.
3. Plain loop + lookup object: Stores a key for each value in seen and adds only values whose keys have not appeared before. The type prefix distinguishes 1 from "1".

Why indexOf() fails: indexOf() cannot find NaN because NaN is not strictly equal to itself. includes() uses SameValueZero comparison, which treats NaN as equal to NaN.

*/ 