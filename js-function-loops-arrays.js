// const testArr1 = [3, 9, 15, 4, 10]
// const TestResults = (array) => {
// let numsMult = []
// for(let i = 0; i < array.length; i++){
//     numsMult.push(array[i] * 3)
// }
// return numsMult
// }
// console.log(TestResults(testArr1))

// output: [9, 27, 45, 12, 30]

// ----------------------------------

// const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
// const TestResults = (array) => {
// let emptyArray = []
// for(let i = 0; i < array.length; i++){
//     if(array[i] % 2 !== 0){
//     emptyArray.push(array[i])
// }
// }
// return emptyArray
// }
// console.log(TestResults(testArr2))

// output: [-7, 3, 5, 13]

// -------------------------------------

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

  const letters = (array) => {
  let finalLetters = []
  for(let i = 0; i < array.length; i++){
    if(typeof array[i] === "string") {
        finalLetters.push(array[i])
    }
  }
  return finalLetters.join("")
}
console.log(letters(comboArr))

  // output: "nicework"
