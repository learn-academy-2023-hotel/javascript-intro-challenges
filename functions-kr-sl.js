// const returnPolo = () => {
//     return "polo"
// }
// console.log(returnPolo)


// const someGreeting = (name) => {
//     return `Welcome, ${name}`
// }
// console.log(someGreeting("KEvin"))

// const oddOrEven = (number) => {
//     if (number %2 === 0){
//         return "even"
//     }else{
//         return "odd"
//     }
// }
// console.log(oddOrEven(3))


// const triple = (number) => {
//     return number * 3
// }
// console.log(triple(3))


// const multNum = (numOne, numTwo) => {
//     return numOne * numTwo
// }
// console.log(multNum(2,3))


// const divisibleBy = (numOne, numTwo) => {
//     if (numOne % numTwo === 0){
//         return `${numOne} is evenly divisible by ${numTwo}`
//     }
// }
// console.log(divisibleBy(10,5))

// const assignGrade = (number) => {
//     if (number > 90){
//         return "Letter grade: A"
//     }else if (number <= 89 && number >= 60){
//         return "Letter grade: B"
//     }else{
//         return "Letter grade: C"
//     }
// }
// console.log(assignGrade(70))


// const isLonger = (stringOne, stringTwo) => {
//     if (stringOne.length > stringTwo.length){
//         return `${stringOne} is greater with ${stringOne.length} characters`
//     }else{
//         return `${stringTwo} is greater with ${stringTwo.length} characers `
//     }
// }
// console.log(isLonger("dog", "pidgeon"))


// const greaterNum = (numOne, numTwo) => {
//     if (numOne> numTwo){
//         return `${numOne} is greater`
//     }else{
//         return `${numTwo} is greater`
//     }
// }
// console.log(greaterNum(5, 3))


// const yelling = (someString) => {
//     return someString.toUpperCase()
// }
// console.log(yelling("fog"))

const helloWorld = (language) => {
        for (i= language; (i.length -1) < 6; i++){
            if(i === "en"){
                return "Hello World"
            }else if( i === "sp"){
                return "Hola, Mundo"
            }else if ( i === 'fr'){
                return "Salut Tout Le Monde"
            }else if ( i === 'pt'){
                return "Ola, Mundo"
            }else if ( i === 'de'){
                return " Hallo Welt"
            }

        }
    }

console.log(helloWorld("fr"))
