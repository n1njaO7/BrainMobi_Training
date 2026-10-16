const orders = [
{ id: 1, customer: "Asha", items: [{ name: "Pen", price: 10, qty: 5 }, { name: "Book", price: 250, qty: 2 }], status: "delivered" },
{ id: 2, customer: "Ravi", items: [{ name: "Bag", price: 900, qty: 1 }], status: "cancelled" },
{ id: 3, customer: "Asha", items: [{ name: "Pen", price: 10, qty: 10 }], status: "delivered" },
{ id: 4, customer: "Meera", items: [{ name: "Book", price: 250, qty: 4 }, { name: "Bag", price: 900, qty: 2 }], status: "delivered" },
{ id: 5, customer: "Ravi", items: [{ name: "Pen", price: 10, qty: 3 }], status: "pending" }
];

//Filtering delivered order in terms of Status
const deliveredOrder = orders.filter((order)=>{
    return order.status === "delivered"

})

//Filtering not cancelled order in terms of Status
const notCancelledOrder = orders.filter((order)=>{
    return order.status !== "cancelled"
})

//helper Function to calculate each customer Order Price
const singleCustomerTotal = order=>{
    return order.items.reduce((total,item)=>{
        total += item.qty * item.price
        return total
    },0)
} 

//======================================================================

//1-Calculating Total revenue of Delivered items
const TotalRevenue = deliveredOrder.reduce((total,order)=>{
    total += singleCustomerTotal(order)
    return total
},0)
console.log("Total revenue:", TotalRevenue);

//=======================================================================


//2-each customer to their total spend
const eachCustomerTotal = notCancelledOrder.reduce((result,order)=>{
    const orderValue= singleCustomerTotal(order)
           
    result[order.customer]= (result[order.customer] || 0) + orderValue

    return result
},{})
console.log("Customer spend:", eachCustomerTotal);


//==========================================================================


//3-The most-sold item by total quantity (excluding cancelled).

const itemQuantities  = notCancelledOrder.reduce((result,order)=>{
    order.items.forEach((item)=>{
        result[item.name]=(result[item.name]||0) + item.qty
    })
    return result   
},{})

//Object.entries convert every key:value pair into smaller array
const maxQuantity = Object.entries(itemQuantities).reduce((max,item)=>{
    return (item[1]>max[1])?item: max
})

console.log(`Best selling item: ${maxQuantity[0]}`);
console.log(`Quantity sold: ${maxQuantity[1]}`);

//===================================================================

//4-The customer with the highest single-order value.

const highestOrder = notCancelledOrder.reduce((best,order)=>{
    return singleCustomerTotal(order)>singleCustomerTotal(best) ? order:best
})
console.log("Highest-order customer:", highestOrder.customer);
console.log("Order ID:", highestOrder.id);
console.log("Order value:", singleCustomerTotal(highestOrder));


//====================================================================

//5- A flat array of unique item names across all non-cancelled orders, sorted alphabetically.

const uniqueNames = notCancelledOrder.reduce((names, order) => {
        return order.items.reduce((result, item) => {
            return result.includes(item.name)
                ? result
                : [...result, item.name];
        }, names);
    }, []).sort()

console.log("Unique item names:", uniqueNames);

//===================================================================================

//6- Whether any order contains an item with qty > 3 and price > 500

const hasExpensiveHighQuantityItem = orders
    .reduce((items, order) => [...items, ...order.items], [])
    .find(item => item.qty > 3 && item.price > 500) !== undefined;

console.log("Matching item exists:", hasExpensiveHighQuantityItem);

// console.log(deliveredOrder[0].items[0].price);
// // console.log(notCancelledOrder);
// console.log(TotalRevenue);
// console.log(eachCustomerTotal);
// console.log(mostSolditem);




