const shoppingList=["Bread", "Spread", "Juice"];
const shoppingBasket=[...shoppingList]
let n=prompt("Enter number of items to be added","Enter the number")
for(let i=0;i<n;i++){
    let enter=prompt("Enter the new product in the list", "Enter product name")
    shoppingBasket.push(enter)
}
console.log(shoppingBasket)