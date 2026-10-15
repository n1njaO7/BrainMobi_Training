// Fibonacci without memoization

let withoutCachecount =0

function Fibonaci(num){
    
    withoutCachecount++

    if(num===0){
        return 0;
    }
    if(num===1){
        return 1;
    }
    return Fibonaci(num-1) + Fibonaci(num-2);
}

console.log("Without Memoization:");
console.log("Result:", Fibonaci(5));
console.log("Function calls:", withoutCachecount);


// Fibonacci with memoization

let withCachecount =0

function memorize(fn){
        
    const cache = new Map();

    return (value)=>{

        if(cache.has(value)){
            return cache.get(value)
        }

        withCachecount++;
        
        const result = fn(value);
        cache.set(value,result)

        return result
    }
}

const memorizedFibonaci = memorize((num)=>{
    if (num === 0) return 0;
    if (num === 1) return 1;

    return memorizedFibonaci(num - 1) + memorizedFibonaci(num - 2);
})

console.log("With Memoization:");
console.log("Result:", memorizedFibonaci(5));
console.log("Function calls:", withCachecount);


