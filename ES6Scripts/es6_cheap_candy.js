let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    {product: "Warheads", price: 1.59},
    {product: "Laughy Taffy", price: 2.49},
    {product: "Snickers", price: 6.29},
    {product: "3 Musketeers", price: 2.99},
    {product: "Almond Joy", price: 5.99},
    {product: "Starburst", price: 0.59},
    // TODO:fill the array with 10 candies of various
    // price ranges
];
// Exercise 1 
let cheapC = products.filter(c => c.price < 5);
console.table(cheapC);

let mAndM = products.find(m => m.product == "M&M");
console.log(mAndM);

let hasFish = products.find(m => m.product =="Swedish Fish");
console.log(hasFish);