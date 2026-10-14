//checking Prime Number
function isPrime(num){
    if(num<2){
        return false
    }
    for(let n=2 ; n <= Math.sqrt(num);n++){
        if(num%n===0){
            return false
        }
    }
    return true
}


//checking Palindrome Number and also those number only which are prime
function isPalindrome(num){
    if(!isPrime(num))//checking only number which is prime
    {
        return false
    }
    reverseDigit=0;
    for(let n = num ; n>0;n=Math.floor(n/10)){
        let digit = n%10;
        reverseDigit = (reverseDigit*10)+digit;
    }
    if(num===reverseDigit){
        return true;
    }
    return false;
}
// checking Palindrome number 
function isPerfectNumber(num){

    if (num <= 1) {
        return false;
    }

    let sum = 0;

    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }

    return sum === num;
}


console.log("Number which are Prime and Palindrome");
for(let i = 1 ; i<=500 ; i++){
    if(isPalindrome(i)){
        console.log(i);
    }
}

console.log("Number which are Perfect Number");
for(let i = 1 ; i<=10000 ; i++){
    if(isPerfectNumber(i)){
        console.log(i);
    }
}


