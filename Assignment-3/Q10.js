//function composition from Right to Left
function compose(...fns){
    return (value)=>{
        return fns.reduceRight( (result,fn) => fn(result) , value )//reduceRight runs from right to left
    }
}

//Pipe from Left to Right
function pipe(...fns){
    return(value)=>{
        return fns.reduce( (result,fn) => fn(result),value)//reduce naturally run from left to right
    }
}
/*EXPLANATION :-
    Here (...fns) is an array of any no. of function given by user
    return (value) is a value passed by varibale which store a (...fns) and this value be passed to callback fun
    In reduce () = it consist of three thngs
                -result = which store all the calculated value
                -fn = initial/last index of array based on type of reduce
                -value = initial value which will be used in funs of array
*/

// Example functions
const addOne = (n) => n + 1;
const double = (n) => n * 2;
const square = (n) => n * n;

// Testing compose
console.log(compose(addOne, double, square)(3));//19

// Testing pipe
console.log(pipe(addOne, double, square)(3));//64


//uderstand function call with a example
/*
    function outer() {
        return (value) => {
            console.log(value);
        };
    }
    const inner = outer();
    inner(3); // 3
*/


