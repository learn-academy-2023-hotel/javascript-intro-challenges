// 1st Loop Challange 
// Create a for loop that logs each number from 1 - 20.
// const myNum = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// for (let i = 0; i < myNum.length; i++){
//     console.log(myNum[i])
// }
// Create a for loop that logs every other number from 1 - 20.
// const myNum = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// for (let i = 0; i < myNum.length; i+= 2){
//     console.log(myNum[i])
// }
// Create a for loop that logs the result of each number from 1 - 20 tripled.
// const myNum = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
//     for (let i = 0; i < myNum.length; i++ ){
//     console.log(myNum[i] * 3)

// Create a for loop that logs each even number from 1-20, and in the place of every odd number, returns the word "ODD".
// Expected output: ODD, 2, ODD, 4, ODD, 6 ...etc
// const myNum = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
//     for (let i = 0; i <= myNum.length; i++ ){
//         if (myNum[i] % 2 !== 0) {
//            console.log(i)
//         } else 
//            console.log("ODD")
//     }



const nums = [3, 57, -9, 20, 67]
let bigNum = 0
// Create the code that will log the largest number from the array.
for (let i = 0; i < nums.length; i++) {
  if (nums[i] > bigNum) 
  bigNum = nums[i]
  }
    console.log(bigNum)
  
 

// Create the code that will log the smallest number from the array.

// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === -9) {
//       console.log(nums[i])
//     }
//   }
// Create the code that will log the remainder of each number when divided by 2.

// for (let i = 0; i < nums.length; i++) {
//       console.log(nums[i] % 2)
//     }
  

// Expected output: 1, 1, -1, 0, 1
