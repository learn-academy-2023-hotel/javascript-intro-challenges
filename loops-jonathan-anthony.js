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
