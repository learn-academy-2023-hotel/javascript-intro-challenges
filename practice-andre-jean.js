// // 1st chanllenge 
// Write the code that will add "soda" to the end of the original array.
// var groceryList = ["chips","dip","cookies"]
// console.log(groceryList.push("soda"))
// console.log(groceryList)
// Write the code that will add "granola" to the end of the array without altering the original array.
// var groceryList = ["chips","dip","cookies"]
// console.log(groceryList.push("granola"))
// console.log(groceryList)
// Write the code that will return a subset of the array containing only "chips" and "dip".
// var groceryList = ["chips","dip","cookies"]
// console.log(groceryList.pop("cookies"))
// console.log(groceryList)
// Write the code that will add "beans" to the "chips" and "dip" array.
// var groceryList = ["chips","dip","cookies"]
// console.log(groceryList.pop("cookies"),groceryList.push("beans"))
// console.log(groceryList)

//var numbers = [2, 4, 6, 8, 10]
// Write the code that will add the number 0 to the beginning of the array.
// var numbers = [2, 4, 6, 8, 10]
// console.log(numbers.unshift(0))
// console.log(numbers)
// Write the code that will add the number 12 to the end of the array.
// var numbers = [2, 4, 6, 8, 10]
// console.log(numbers.push(12))
// console.log(numbers)
// Write the code that will remove the first number from the array.
// var numbers = [2, 4, 6, 8, 10]
// console.log(numbers.shift())
// console.log(numbers)
// Write the code that will add the number 0 to the beginning of the array without altering the original array. HINT: it's not .unshift You'll have to get creative! ;)
var numbers = [2, 4, 6, 8, 10]
console.log(numbers.push(0),numbers.sort((a, b) => a - b))
console.log(numbers)