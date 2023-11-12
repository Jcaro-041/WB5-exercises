let cart = [
    {item: "Bread", price: 3.29, quantity: 2},
    {item: "Milk", price: 4.09, quantity: 1},
    {item: "T-Bone Steak", price: 12.99, quantity: 2},
    {item: "Baking Potato", price: 1.89, quantity: 6},
    {item: "Iceberg Lettuce", price: 2.06, quantity: 1},
    {item: "Ice Cream - Vanilla", price: 6.81, quantity: 1},
    {item: "Apples", price: 0.66, quantity: 6}
    ];

// A. Write code that displays only the items from the array
function convertReceiptToItems(cart){
    return cart.item
}
let items = cart.map(convertReceiptToItems);
console.log(items)

// B. Write code that uses reduce() to display the total of everything in the cart with quantities used too
function giveTotal(sum, currentItem){
    const itemCost = currentItem.price * currentItem.quantity;
    return sum + itemCost;
}
totalCost = cart.reduce(giveTotal, 0);
console.log(`Total cost: $ ${totalCost.toFixed(2)}`);