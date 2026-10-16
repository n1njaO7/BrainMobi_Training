
function groupAnagrams(words) {
    const groups = {};

    for (const word of words) {
        // Sort the letters to create a common key.
        const key = word.split("").sort().join("");

        // Create a group if this key does not exist.
        if (!groups[key]) {
            groups[key] = [];
        }

        // Add the original word to its group.
        groups[key].push(word);
    }

    return Object.values(groups);
}

const words = ["eat", "tea", "tan", "ate", "nat", "bat"];

console.log(groupAnagrams(words));

// Output:
// [
//   ["eat", "tea", "ate"],
//   ["tan", "nat"],
//   ["bat"]
// ]
