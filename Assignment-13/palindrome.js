/*
Problem 2: Check whether an integer is Palindrome Number or not(reads the same backward and forward)
 
Example: x = 121
 
Output: true
 
x= 984 Output = false
*/

function palindrome(num){
    
    if (num < 0) return false;
    
    let reverse = 0;
    
    for(let i = num ; i > 0; i = Math.floor(i / 10)){
        reverse = (reverse*10) + i%10
    }
    return num === reverse
}

console.log(palindrome(121)); //true
console.log(palindrome(984)); //false
