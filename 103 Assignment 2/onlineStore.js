
    // getting the description
    //getting the price
    //getting the qty
//calculationg the subtotal (price * qty)
//caluclating the total including taxes 
//display the result (in console) or try doing it in the html using document.write
//*research about Number() (number function in JS - may need to use it in this code - it transforms text into a number)
let price = 0;
let description; 
let quantity = 0;
const tax = 0.16;
let total = 0

function app(){
    console.log("Buying...");
    let description = prompt("Add the product's name");
    let price = prompt("Add the product's price")
    let quantity = prompt("Add how many you want to purchase");
    let subtotal = price*quantity;
    let total =  (subtotal*tax)+subtotal;
    console.log(description);
    console.log(price);
    console.log(quantity);
    console.log("The subtotal is $" + subtotal);
    console.log("The total is $" + total);
    document.write(`
    <p>Product name: ${description} </p>
    <p>Product quantity ${quantity} </p>
    <p>Price $${price} </p>
    <p>Subtotal: $${subtotal}</p>
    <p>Tax: ${tax}</p>
    <p>The total is $${total}</p>`)
}

    


// function subtotal(){
//     let result=price*quantity;
//     return console.log(result)
// }
// subtotal
// console.log(subtotal);

// function total(){
//     let result=subtotal*taxes;
//     return result
// }
// console.log(total);