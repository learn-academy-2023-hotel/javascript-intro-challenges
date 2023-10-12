var groceryList = ["chips", "dip", "cookies"]

// Write the code that will add "soda" to the end of the original array.
groceryList.push("soda")
console.log(groceryList)

// Write the code that will add "granola" to the end of the array without altering the original array.
console.log(groceryList + " ,gronola")

// Write the code that will return a subset of the array containing only "chips" and "dip".
var newList = groceryList.slice(0,2)
console.log(newList)

// Write the code that will add "beans" to the "chips" and "dip" array.
newList.push("beans")
console.log(newList)