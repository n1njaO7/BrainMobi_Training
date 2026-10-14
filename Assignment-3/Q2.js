function strToNum(str){
    if(typeof str!= "string" || str.length===0){
        return NaN
    }
    
    let sign =1;
    let index = 0;

    if(str[0]==="-"){
        sign = -1;
        index = 1;
    }
    else if(str[0]==="+"){
        index = 1;
    }

    if(index === str.length){
        return NaN
    }

    let result = 0;
    for( ; index<str.length ; index++){
    
        const value = str.charCodeAt(index);
        //ASCII code of 0 is 48 and 9 is 57
        if(value < 48 || value > 57){
            return NaN
        }

        const digit = value - 48;
        result = result*10 + digit;
    }

    return sign * result;
}

console.log(strToNum("123"));   // 123
console.log(strToNum("-45"));   // -45
console.log(strToNum("0"));     // 0
console.log(strToNum("-0"));    // -0
console.log(strToNum("+78"));   // 78
console.log(strToNum("12a"));   // NaN
console.log(strToNum(""));      // NaN
console.log(strToNum("-"));     // NaN