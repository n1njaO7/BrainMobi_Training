/*
Problem 4: Find the target's index in a sorted array, or return -1.
 
Example: nums = [-1, 0, 3, 5, 9, 12], target = 9
*/

function search(num,target){
    let left = 0;
    let right = num.length -1 ;
    while(left<=right){
        const mid = Math.floor((right+left)/2)
        if(num[mid]=== target){
            return mid;
        }
        if(target > num[left]){
            left = mid + 1;
        }
        else{
            right = mid - 1;
        }
    }
    return -1;
}
console.log(search([-1, 0, 3, 5, 9, 12], 9)); // 4
console.log(search([-1, 0, 3, 5, 9, 12], 10)); // -1
