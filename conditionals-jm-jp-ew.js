// Is 34 divided by 3 greater than 67 divided by 2?
console.log((34 / 3) > (67 / 2)) // false
// Does 5 evaluate to the same as "5"?
console.log(5 == "5") // true
// Does 5 strictly equal "5"?
console.log(5 === "5") //false
// Does !3 strictly equal 3?
console.log(3 !== 3) //false
// Does "LEARN".length strictly equal 5 AND "Student".length strictly equal 7?
var learn = "LEARN"
var student = "Student"
console.log(learn.length === 5 && student.length === 7) // true
// Does "LEARN".length strictly equal 5 OR "Student".length strictly equal 10?
console.log(learn.length === 5 || student.length === 10) // true
// Does "LEARN" contain the subset "RN"?
console.log(learn.includes("RN")) //true
// Does "LEARN" contain the subset "rn"?
console.log(learn.includes("rn")) //false
// Does "LEARN"[0] strictly equal "l"?
console.log(learn[0] === "l") //false
// Modify the code from the previous question to return true.
console.log(learn[0] === "L") //true
// Write a conditional statement for the following prompts. Make sure you try different options and change the variables to ensure properly working code.
// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
let item = 100
if (item <= 100){
    console.log("in budget")
}
// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
let hungry = "yes"
if (hungry === "yes"){
    console.log("eat food")
} else {
    console.log("keep coding")
}
//let hungry = "no"
// if (hungry === "yes"){
//     console.log("eat food")
// } else {
//     console.log("keep coding")
// }
// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
let trafficLight = "red"
if (trafficLight === "green"){
    console.log("go")
} else if (trafficLight === "yellow"){
    console.log("slow down")
} else if (trafficLight === "red"){
    console.log("stop")
}
// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".

// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.