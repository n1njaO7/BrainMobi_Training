//Brute-force approach


function twoSumBruteForce(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
return [];
}

console.log(twoSumBruteForce([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSumBruteForce([3, 2, 4], 6)); // [1, 2]

//===============================================================

//Optimized approach


function twoSum(nums, target) {
    const seen = Object.create(null);

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (seen[complement] !== undefined) {
            return [seen[complement], i];
        }

        seen[nums[i]] = i;
    }

    return [];
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]

console.log(twoSum([3, 2, 4], 6)); // [1, 2]

console.log(twoSum([3, 3], 6)); // [0, 1]

//========================================================

//Longest Consecutive Subsequence


function longestConsecutive(nums) {
    const numSet = new Set(nums);
    let longest = 0;

    for (const num of numSet) {
        // Start counting only when num is the
        // beginning of a consecutive sequence.
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentLength = 1;

            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentLength++;
            }

            longest = Math.max(longest, currentLength);
        }
    }

    return longest;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); //4

console.log(longestConsecutive([9, 1, 4, 7, 3, 2, 6, 5])); //6

console.log(longestConsecutive([10, 30, 20])); //1

console.log(longestConsecutive([])); //0


