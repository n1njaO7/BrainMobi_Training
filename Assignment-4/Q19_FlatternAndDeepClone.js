//Flatten Clone

function flatten(arr) {
    return arr.reduce((result, item) => {
        if (Array.isArray(item)) {
            return result.concat(flatten(item));
        }

        return result.concat(item);
    }, []);
}

console.log(flatten([1, [2, [3, [4]]]]));
// [1, 2, 3, 4]

console.log(flatten([1, [2, 3], [4, 5]]));
// [1, 2, 3, 4, 5]

console.log(flatten([[1, 2], [[3]], 4]));
// [1, 2, 3, 4]

//=======================================================

//Deep Clone

function deepClone(obj) {
    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    if (Array.isArray(obj)) {
        return obj.map(item => deepClone(item));
    }

    const clonedObj = {};

    Object.keys(obj).forEach(key => {
        clonedObj[key] = deepClone(obj[key]);
    });

    return clonedObj;
}

const original = {
    name: "Ashmit",
    address: {
        city: "Lucknow"
    }
};

const copy = deepClone(original);

copy.address.city = "Delhi";

console.log(original.address.city); // "Lucknow"
console.log(copy.address.city);     // "Delhi"
