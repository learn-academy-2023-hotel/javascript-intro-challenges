// Create a for loop that logs each number from 1 - 20.
// for (let i = 1; i < 21; i++) {
//     console.log(i)
// }

// Create a for loop that logs every other number from 1 - 20.
// for (let i = 1; i < 21; i++){
//     if (i % 2 !== 0){
//         console.log(i)
//     }
// }

// Create a for loop that logs the result of each number from 1 - 20 tripled.
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i] * 3)
// }

// Create a for loop that logs each even number from 1-20, and in the place of every odd number, returns the word "ODD".
// Expected output: ODD, 2, ODD, 4, ODD, 6 ...etc
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//         console.log("ODD")
//     }
//     else (console.log(arr[i]))

// }



const nums = [3, 57, -9, 20, 67]
// Create the code that will log the largest number from the array.
console.log(nums[4])
// Create the code that will log the smallest number from the array.
console.log(nums[2])
// Create the code that will log the remainder of each number when divided by 2.
for (let i = 0 ; i < nums.length; i++){
    console.log(nums[i] % 2)
}
// Expected output: 1, 1, -1, 0, 1


 const myString = "learn student"
// Create the code that will log the number of times the letter "e" occurs in the string.
let count = 0
for (let i = 0 ; i < myString.length; i++){
    if(myString[i] === "e"){
        count ++
    }
}
console.log(count)
// Create the code that will log every other character in the string.
for (let i = 0 ; i < myString.length; i++){
    if(i % 2 === 0){
        console.log(myString[i])
    }
}
