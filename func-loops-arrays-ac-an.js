// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.

// Pseudo code:

// Input: array testArr1 = [3, 9,15,4,10]
// Create a variable assigned to [] to store data.
// Create a function that takes in an array as a parameter.
// Use a for loop to access each element of array.
// Use iteration to multiply the current value by 3. Add new value to new array using push method.
// Once loop is complete, return new array with all the pushed in elements.

const testArr1 = [3, 9, 15, 4, 10]
const newArray = []

const times3 = (array) => {
    for (let i = 0; i < array.length; i++){
        newArray.push(array[i] * 3)
    }
    return newArray
}
console.log(times3(testArr1))

// output: [9, 27, 45, 12, 30]


// Write a function that takes in an array of numbers and returns a new array with only odd numbers.

// Pseudo code:
// Input: Array testArr2 = [0, 2, -7, 3, 5, 8, 10,13]
// Create a variable for the new array [] .
// Create a function to take in an array as a parameter.
// Use a for loop to access each element of the array.
// Use iteration to divide each element by 2 using modulo.
// Create conditional statement for if the remainder does not equal 0.
// Use push method to add these values into new array.
// Once loop is complete, return new array.

const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
const newArray2 = []

const oddNum = (array) => {
    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 !== 0){
            newArray2.push(array[i])
        }
    }
    return newArray2
}
console.log(oddNum(testArr2))

// output: [-7, 3, 5, 13]

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.

// Pseudo code:
// Input: Array comboArr = [7, "n", true, "i", "c", 10, "e", -388, "w", 3, "o", 0,"r", false, "k"]
// Create a variable for the new array.
// Create a funcation that takes in an array as the parameter.
// Create a for loop that accesses each element in the array.
// Create a conditional statement that if the element data type is a string then it gets pushed into the new array.
// Return the new array and use join method to combine the string elements.

const comboArr = [
  7,
  "n",
  true,
  "i",
  "c",
  10,
  "e",
  -388,
  "w",
  3,
  "o",
  0,
  "r",
  false,
  "k"
]
const newArr3 = []

const sortArr = (array) => {
    for (let i = 0; i < array.length; i++){
        if (typeof array[i] === "string"){
            newArr3.push(array[i])
        }
    }
    return newArr3.join("")
}
console.log(sortArr(comboArr))

// output: "nicework"

// Create a function that takes in an array of numbers and returns the sum.

const addThese1 = [1, 2, 3, 4]
let sum = 0
const sumTotal = (array) => {
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum
}
console.log(sumTotal(addThese1))
// output: 10

const addThese2 = []
// output: 0

// Create a function that takes in an array of numbers and returns the index of the largest number.


const indexHighestNumber = [1, 4, 2, 3]
const bigNum = (array) => {
    let largeNum = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i] > largeNum) {
            largeNum = array[i]
        }
    }
    return array.indexOf(largeNum)
}
console.log(bigNum(indexHighestNumber))

// output: 1