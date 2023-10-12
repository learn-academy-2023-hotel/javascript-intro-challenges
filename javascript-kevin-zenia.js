// Write the code that will add "soda" to the end of the original array.
// Write the code that will add "granola" to the end of the array without altering the original array.
// Write the code that will return a subset of the array containing only "chips" and "dip".
// Write the code that will add "beans" to the "chips" and "dip" array.

var groceryList = ["chips", "dip", "cookies"]
console.log(groceryList.push("soda"))
console.log(groceryList)

var newList = ["granola"]
var comboArrays = groceryList.concat(newList)
console.log(comboArrays)

console.log(groceryList.slice(0,2))

var mySubset = groceryList.slice(0,2)
console.log(mySubset.push("beans", "chips", "dip"))
console.log(mySubset)