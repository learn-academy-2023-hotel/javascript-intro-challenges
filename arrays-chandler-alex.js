var groceryList = ["chips", "dip", "cookies"]
// Write the code that will add "soda" to the end of the original array.
groceryList.push("soda")
console.log(groceryList)
// Write the code that will add "granola" to the end of the array without altering the original array.
groceryList.push("granola")
console.log(groceryList)
// Write the code that will return a subset of the array containing only "chips" and "dip".
groceryList.slice(0, 2)
console.log(groceryList.slice(0, 2))
// Write the code that will add "beans" to the "chips" and "dip" array.
var listAdd = groceryList.slice(0, 2)
listAdd.push("beans")
console.log(listAdd)

var numbers = [2, 4, 6, 8, 10]
// Write the code that will add the number 0 to the beginning of the array.
numbers.unshift(0)
console.log(numbers)
// Write the code that will add the number 12 to the end of the array.
numbers.push(12)
console.log(numbers)
// Write the code that will remove the first number from the array.
numbers.shift()
console.log(numbers)
// Write the code that will add the number 0 to the beginning of the array without altering the original array. HINT: it's not .unshift You'll have to get creative! ;)
numbers.reverse().push(0)
numbers.reverse()
console.log(numbers)