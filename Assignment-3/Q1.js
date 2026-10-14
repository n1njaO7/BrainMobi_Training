function safeEqual(a,b){
    return (Object.is(a,b))
}

//Object.is() compares two values using its own precise equality rules.

console.log(safeEqual(NaN, NaN)); 
console.log(safeEqual(0, -0));    
console.log(safeEqual("0", 0));   
console.log(safeEqual(5, 5));  

/*It is stricter than === because it distinguishes between NaN and NaN 
(treating them as equal) and between +0 and -0 (treating them as different). 
Unlike ==, it performs no type coercion, but unlike ===, it follows precise 
equality rules for these two edge cases.
*/