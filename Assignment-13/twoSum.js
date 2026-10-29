/*
Problem 1: Return the indices of two numbers whose sum equals the target (using map)
 
Example: nums = [2, 7, 11, 15], target = 9
Output: [0, 1]
*/

function twoSum(num,target){

    if (
    !Array.isArray(num) ||
    !Number.isFinite(target) ||
    !num.every(Number.isFinite)
    ) {
        return [];
    }

    const map= new Map();
    for(let i=0;i<num.length;i++){
        const complement = target - num[i];
        if(map.has(complement)){
            return [map.get(complement),i]
        }
        map.set(num[i],i)
    }
    return []
}
const num = [2, 7, 11, 15];

console.log(twoSum(num,9))