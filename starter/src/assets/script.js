/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
let products = [];
let totalPaid = 0;

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/
let product1 = {
    name: "Cherry",
    price: 1.50,
    quantity: 0,
    productId: 1,
    image: "./images/cherry.jpg"}

    let product2 = {
      name: "Strawberry",
      price: 2.50,
      quantity: 0,
      productId: 2,
      image: "./images/strawberry.jpg"}
  
let product3 = {
    name: "Orange",
    price: 3.00,
    quantity: 0,
    productId: 3,
    image: "./images/orange.jpg" }

products.push(product1, product2, product3);

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */
let cart = [];

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/

function addProductToCart(productId) {
  const product = products.find(p => p.productId === productId);
  if (product) {
    product.quantity++;
    if (!cart.includes(product)) {
      cart.push(product);
    }
  }
}


/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

function increaseQuantity(productId) {
  const product = cart.find(p => p.productId === productId);
  if (product) {
    product.quantity++;
  }
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

function decreaseQuantity(productId) {
  const product = cart.find(p => p.productId === productId);
  if (product) {
    product.quantity--;
    if (product.quantity === 0) {
      removeProductFromCart(productId);
    }
  }
}

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

function removeProductFromCart(productId) {
  const index = cart.findIndex(p => p.productId === productId);
  if (index !== -1) {
    cart[index].quantity = 0;  // Reset quantity
    cart.splice(index, 1);     // Remove from cart
  }
}


/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total cost of all products
  - cartTotal should return the total cost of the products in the cart
  Hint: price and quantity can be used to determine total cost
*/

function cartTotal() {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price * cart[i].quantity;
  }
  return total;  // Return as a number directly
}


/* Create a function called emptyCart that empties the products from the cart */

function emptyCart() {
  cart.forEach(item => item.quantity = 0);
  cart = [];
}


/* Create a function named pay that takes in an amount as an argument
  - amount is the money paid by customer
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
  Hint: cartTotal function gives us cost of all the products in the cart  
*/

function pay(amount) {

  // Add the current payment amount to the totalPaid variable
  totalPaid += amount

  // Calculate the difference between the totalPaid and the cartTotal
  let remaining = totalPaid - cartTotal();

  // Check if the remaining amount is greater than or equal to zero
  if (remaining >= 0) {
      // If so, reset the `totalPaid` to zero to prepare it for the next
      // payment, as the current payment is enough to cover the `cartTotal`.
      totalPaid = 0;
      emptyCart()
  }

  // Return the remaining (negative if payment is less than the cartTotal)
  return remaining;
}


/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/

/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
  
   /* Uncomment the following line if completing the currency converter bonus */
   // currency
}
