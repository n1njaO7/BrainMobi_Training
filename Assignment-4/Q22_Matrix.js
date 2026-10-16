//Transpose a matrix


function transpose(matrix) {
    const rows = matrix.length;

    if (rows === 0) return [];

    const cols = matrix[0].length;
    const result = [];

    for (let j = 0; j < cols; j++) {
        const newRow = [];

        for (let i = 0; i < rows; i++) {
            newRow.push(matrix[i][j]);
        }

        result.push(newRow);
    }

    return result;
}

const matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(transpose(matrix1));

// [
//   [1, 4, 7],
//   [2, 5, 8],
//   [3, 6, 9]
// ]

//=============================================================

//Rotate an N*N matrix 90 clockwise


function rotateClockwise(matrix) {
    const n = matrix.length;
    const result = [];

    for (let i = 0; i < n; i++) {
        result.push([]);
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            result[j][n - 1 - i] = matrix[i][j];
        }
    }

    return result;
}

const matrix2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(rotateClockwise(matrix2));

// [
//   [7, 4, 1],
//   [8, 5, 2],
//   [9, 6, 3]
// ]

//========================================================

//Print a matrix in spiral order


function spiralOrder(matrix) {
    if (matrix.length === 0 || matrix[0].length === 0) {
        return [];
    }

    const result = [];

    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;

    while (top <= bottom && left <= right) {
        // 1. Traverse the top row: left to right
        for (let j = left; j <= right; j++) {
            result.push(matrix[top][j]);
        }
        top++;

        // 2. Traverse the right column: top to bottom
        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        right--;

        // 3. Traverse the bottom row: right to left
        if (top <= bottom) {
            for (let j = right; j >= left; j--) {
                result.push(matrix[bottom][j]);
            }
            bottom--;
        }

        // 4. Traverse the left column: bottom to top
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left++;
        }
    }

    return result;
}

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(spiralOrder(matrix));

// [1, 2, 3, 6, 9, 8, 7, 4, 5]

