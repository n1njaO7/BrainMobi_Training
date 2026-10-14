function createCounter(start,step){
    let count = start;// function scope
    //All these function uses Closure Scope
    function increment(){
        count = count+step;
    }
    function decrement(){
        count = count-step;
    }
    function reset(){
        count = start;
    }
    function value(){
        return count;
    }
    // it return in form of object 
    return{
        increment,
        decrement,
        reset,
        value
    }
}

//Test Case
const counter =createCounter(10,2)
console.log(counter)
counter.increment()//12
counter.increment()//14
counter.decrement()//12
console.log(counter.value())//12
counter.reset()//10
console.log(counter.value())//10


/*  Function Scope: The count variable is declared inside createCounter(), 
    so it cannot be accessed directly from outside the function.
*/
/*  Closure Scope :It  is used in inner function which retains the value of 
    outer function even after outer function finishes executing 
*/