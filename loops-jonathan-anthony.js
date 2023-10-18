// Create a for loop that logs each number from 1 - 20.
let number = 1
for (i=0; i < 20; i++){
    console.log(number++)
}

// // Create a for loop that logs every other number from 1 - 20.
let secNum = 0
for (i=0; i < 20; i+=2){
    if (secNum % 2 === 0){
        console.log(secNum+=2)
    }
}

// Create a for loop that logs the result of each number from 1 - 20 tripled.
let thirNum = 0
for (i=0; i < 20; i++){
    thirNum++
    console.log(thirNum * 3)
}

// Create a for loop that logs each even number from 1-20, and in the place of every odd number, returns the word "ODD".

for (let i=1; i < 21; i++)
    if(i % 2 === 0){
        console.log(i)
    } else{
        console.log("ODD")
    }


    const nums = [3, 57, -9, 20, 67];

// Create the code that will log the largest number from the array.
console.log(Math.max(...nums));

// Create the code that will log the smallest number from the array.
console.log(Math.min(...nums));

// Create the code that will log the remainder of each number when divided by 2.
for (let i = 0; i < nums.length; i++){
    console.log(nums[i] % 2)
}
// Expected output: 1, 1, -1, 0, 1