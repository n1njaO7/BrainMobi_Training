Q11. Memoization. Write memoize(fn) that caches results by arguments. Use it on a recursive fibonacci and compare the number of calls for fib(35) with and without memoization. Count calls using a counter variable.
 
Q12. Template literal engine. Write render(template, data) that replaces {{key}} placeholders in a string with values from data (support nested keys such as {{user.name}}). Then use template literals to print a formatted multi-line invoice.
 
Q13. Function expression vs declaration vs arrow. Create a table (as code comments) comparing the three on: hoisting, this behavior, usability as a constructor, and access to arguments. Then write a short code example proving each difference.
 
Q14. Currying. Write curry(fn) that converts a function f(a, b, c) so it can be called as f(1)(2)(3), f(1, 2)(3), or f(1)(2, 3). (Hint: compare fn.length with the number of collected arguments.)
 
Q15. Implement from scratch. Without using the built-in methods, write your own versions of myMap, myFilter, and myReduce as standalone functions taking (array, callback, initialValue?). myReduce must correctly handle the case where no initial value is given and the array is empty (throw a TypeError).
 
Q16. Array rotation and chunking.
(a) Rotate an array right by k positions in place, with k possibly larger than the array length, using only splice/slice.
(b) Write chunk(arr, size) that splits an array into sub-arrays. chunk([1,2,3,4,5], 2) → [[1,2],[3,4],[5]].
 
Q17. Remove duplicates three ways. Remove duplicates from [1, "1", 2, 2, NaN, NaN, "a", "a", 3] using 
(i) filter + findIndex, 
(ii) reduce + includes, 
(iii) a plain loop with a lookup object. Explain why indexOf fails for NaN while includes works.
 
Q18. Data analysis (real-world). Given:
const orders = [
 { id: 1, customer: "Asha",  items: [{ name: "Pen", price: 10, qty: 5 }, { name: "Book", price: 250, qty: 2 }], status: "delivered" },
 { id: 2, customer: "Ravi",  items: [{ name: "Bag", price: 900, qty: 1 }], status: "cancelled" },
 { id: 3, customer: "Asha",  items: [{ name: "Pen", price: 10, qty: 10 }], status: "delivered" },
 { id: 4, customer: "Meera", items: [{ name: "Book", price: 250, qty: 4 }, { name: "Bag", price: 900, qty: 2 }], status: "delivered" },
 { id: 5, customer: "Ravi",  items: [{ name: "Pen", price: 10, qty: 3 }], status: "pending" }
];
Using only filter, map, reduce, find, findIndex, and includes:
Total revenue from delivered orders only.
An object mapping each customer to their total spend (exclude cancelled).
The most-sold item by total quantity (excluding cancelled).
The customer with the highest single-order value.
A flat array of unique item names across all non-cancelled orders, sorted alphabetically.
Whether any order contains an item with qty > 3 and price > 500.
 
Q19. Flatten and deep clone. Write flatten(arr) that flattens an array of any depth (e.g. [1,[2,[3,[4]]]] → [1,2,3,4]) using recursion and reduce. Then write deepClone(obj) that handles nested objects and arrays without using JSON.parse(JSON.stringify()).
 
Q20. Two-sum and variants.
(a) Return indices of two numbers adding up to a target. Brute-force first, then optimize to O(n) with an object.
(b) Find the longest consecutive subsequence length in an unsorted array (e.g.  [100, 4, 200, 1, 3, 2] → 4).

 
Q21. Group anagrams. Group words that are anagrams of each other: ["eat","tea","tan","ate","nat","bat"] → [["eat","tea","ate"],["tan","nat"],["bat"]].
 
Q22. Matrix operations. Using nested arrays: (a) transpose a matrix, (b) rotate an N×N matrix 90° clockwise, (c) print a matrix in spiral order.
 
Q23. Pagination and search. Given an array of 50 product objects, write getPage(products, page, perPage, searchTerm) that filters by name (case-insensitive, using includes), paginates, and returns { data, currentPage, totalPages, hasNext, hasPrev }. Handle invalid pages gracefully.
 
Q24. Mini inventory system. Build a menu-less, function-based inventory manager using one array of objects: addItem, removeItem(id), updateStock(id, delta) (never allow negative stock), lowStock(threshold), totalValue(), and searchByName(term). Use closures to keep the array private, template literals for a report, and at least one use of each of map, filter, reduce, find, findIndex, and splice. Write 10 test calls with console.log showing edge cases.