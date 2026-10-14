function printPattern(n)
{
    if (!Number.isInteger(n) || n < 1) {
        console.log("NaN");
        return
    }

        //First HAlf of the pattern
        for(let i = 1; i<=n ;i++)//started from 1 to n as in the first half value is increasing
            {
            let line = ""//used to print digit with space
            for (let j = 1; j<=i ; j++)//it runs from 1 to i so as to store the value upto i
            {
                line += i+ " "; //here i is used as number is not changing in a row and it stores value untill the inner loop runs
            }
            console.log(line); //changes line after every print   
        }

        // second half of the patern
        for(let i = n-1; i>=1 ;i--)//started from 4 to 1 as in the second half value is decresing
            {
            let line = ""
            for (let j = 1; j<=i ; j++){
                line += i+ " ";
            }
            console.log(line);    
        }
}

printPattern(5);


