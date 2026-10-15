//Array Rotaion using Splice()

function rotateRight(arr, k) {
    const n = arr.length;

    if (n === 0) return arr;

    k = k % n;

    const lastElements = arr.splice(n - k, k);
    arr.splice(0, 0, ...lastElements);

    return arr;
}

const arr = [1, 2, 3, 4, 5];

console.log(rotateRight(arr, 2));
// [4, 5, 1, 2, 3]

console.log(arr);
// [4, 5, 1, 2, 3] - original array changed

//===============================================

//chunk function using slice

function chunk(arr, size) {
    if (!Number.isInteger(size) || size <= 0) {
        throw new RangeError("Size must be a positive integer");
    }

    const result = [];

    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }

    return result;
}

console.log(chunk([1, 2, 3, 4, 5], 2));
// [[1, 2], [3, 4], [5]]

console.log(chunk([1, 2, 3, 4, 5, 6], 3));
// [[1, 2, 3], [4, 5, 6]]

console.log(chunk([1, 2, 3], 1));
// [[1], [2], [3]]

