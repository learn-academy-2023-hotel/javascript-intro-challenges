// const marco = (lastName) => {
//     return `${lastName}`
// }
// console.log(marco("polo"))

// const greetings = (theirName) => {
//     return `Welcome, ${theirName}`
// }
// console.log(greetings("Jackson"))

const oddOrEven = (aNumbers) => {
    if(aNumbers % 2 === 0) {
      return `${aNumbers} is even`
    } else if (aNumbers % 2 === 1){
      return `${aNumbers} is odd`
    }
  }

console.log(oddOrEven(404))
console.log(oddOrEven(55))