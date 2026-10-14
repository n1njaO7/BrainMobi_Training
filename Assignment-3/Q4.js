for(let n = 1; n<=100; n++ ){
    //loop termination code if divisiby by 97
    if(n % 97 === 0){
        break
    }
    //Skip part containing digit 4
    if(String(n).includes("4")){
        continue;
    }
    //priting value 
    if(n%3===0 && n%5===0 && n%7===0){
        console.log(`${n} is FizzBuzzBang`);
    }
    else if(n%3===0 && n%5===0 ){
        console.log(`${n} is FizzBuzz`);
    }
    else if(n%3===0){
        console.log(`${n} is Fizz`);
    }
    else if(n%5===0){
        console.log(`${n} is Buzz`);
    }
    else if(n%7===0){
        console.log(`${n} is Bang`);
    }
    else{
        console.log(n)
    }
}