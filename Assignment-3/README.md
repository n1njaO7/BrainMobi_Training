# BrainMobi_Training
Training Assignment 

Questions :-
for today please work on these questions
 

Q1. Strict vs loose equality function. Write safeEqual(a, b) that returns true if two values are equal without using == or ===. (Hint: think about Object.is, and note where it differs from === for NaN and -0.) Test with NaN, 0, -0, "0".
 

Q2. Number utility. Without using parseInt, Number, or +, write a function strToNum(str) that converts strings like "123", "-45", "0" to numbers using only loops and character codes (charCodeAt). Return NaN for invalid input.
 

Q3. Leap year and day-of-year. Given a date as (day, month, year), return its day number in the year (1-366). Use switch for month lengths and handle leap years (divisible by 4, except centuries unless divisible by 400).
 

Q4. FizzBuzz variant. Print numbers 1-100 with these rules, checking in this priority order: multiples of 3 and 5 and 7 → "FizzBuzzBang"; multiples of 3 and 5 → "FizzBuzz"; multiples of 3 → "Fizz"; 5 → "Buzz"; 7 → "Bang". Skip every number that contains the digit 4 using continue, and stop the whole loop at the first number divisible by 97 using break.
 

Q5. Pattern printing. Using nested loops, print this pattern for any n (shown for n = 5). Use only string concatenation per row:
 1
 2 2
 3 3 3
4 4 4 4
5 5 5 5 5
4 4 4 4
 3 3 3
 2 2
 1
 

Q6. Prime and perfect numbers. Print all prime numbers between 1 and 500 that are also palindromes. Then find all perfect numbers below 10,000. Optimize the prime check to loop only up to √n.
 

Q7. Collatz sequence. For numbers 1 to 30, find the one that produces the longest Collatz sequence (if even → n/2, if odd → 3n+1, until 1). Print the number and the sequence length. Use a while loop.
 

Q8. do-while guessing game. Using do-while, simulate a number-guessing game: the secret is a random number 1-100 (Math.random). A “player” uses binary search to guess. Print each guess with “too high/low” and the total number of attempts. Prove the max attempts never exceeds 7.
 

Q9. Counter factory. Write createCounter(start, step) returning an object with increment(), decrement(), reset(), and value(). The count must be private (not directly accessible from outside). Explain which scope concept makes this work.
 

Q10. Function composition. Write compose(...fns), which takes any number of functions and returns a new function applying them right-to-left. Example: compose(addOne, double, square)(3) should compute addOne(double(square(3))). Use rest parameters and an arrow function. Also write pipe (left-to-right).
 



Q24. Mini inventory system. Build a menu-less, function-based inventory manager using one array of objects: addItem, removeItem(id), updateStock(id, delta) (never allow negative stock), lowStock(threshold), totalValue(), and searchByName(term). Use closures to keep the array private, template literals for a report, and at least one use of each of map, filter, reduce, find, findIndex, and splice. Write 10 test calls with console.log showing edge cases.
MARKAÐS MÁL VERKEFNA STÝRING – Object.is
Markmiðadrifin markaðsráðgjöf og verkefnastýring
 
