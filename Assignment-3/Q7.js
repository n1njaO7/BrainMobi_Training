//calculating length
function CollatzNumberCount(num){
    let count = 1;
    while(num!==1){
        if(num%2===0){
            num=num/2;
        }else{
            num=3*num+1;
        }
        count++
    }
    return count
}

let longestNumber = 1;
let longestLength = 1;
for(let i = 1; i<=30 ; i++){
    let count = CollatzNumberCount(i);
    if(count> longestLength){
        longestNumber = i //for largest number
        longestLength = count // for longest count
    }
}

console.log("Collatz Number Largest Number "+longestNumber)
console.log("Collatz Number Longest count "+longestLength)
