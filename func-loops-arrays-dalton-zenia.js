// Function, Loops, Arrays Challenges

// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.

//  const testArr1 = [3, 9, 15, 4, 10]

// // Pseudo Code: 
// // input array - [[3, 9, 15, 4, 10]
// // output: [9, 27, 45, 12, 30]

// const times3 = (array) => {
//     let times3Arr = [] 
//     for(let i=0; i < array.length; i++) {
//         times3Arr.push(array[i] * 3)
//     }
//     return times3Arr
// }
// console.log(times3(testArr1))

// Pseudo Code: 
// input array - [[3, 9, 15, 4, 10]
// create function that takes array as a parameter > constt times 3 = (array)
// use for loop to access each element in the array 
// add modified elements to new array > .push 
// return new array 
// invoke modified array > console.log
// output - [9, 27, 45, 12, 30]


// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
// output: [-7, 3, 5, 13]

const onlyOdd = (array) => {
    let newArr = []
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 !== 0) {
        newArr.push(array[i])
      }
    }
    return newArr
  }
  
  console.log(onlyOdd(testArr2))

    //   Pseudo Code: 
    // input array - [0, 2, -7, 3, 5, 8, 10, 13]
    // create function that takes array as a parameter > const onlyOdd 
    // use for loop to access each element in the array and finds the odd numbers
    // add modified elements to new array > .push 
    // return new array 
    // invoke modified array > console.log
    // output - [ -7, 3, 5, 13 ]

    // Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.