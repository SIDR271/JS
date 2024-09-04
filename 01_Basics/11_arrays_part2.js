const evenNumbers = [0,2,4]
const oddNumbers = [1,3,5]

// evenNumbers.push(oddNumbers)

// console.log(evenNumbers);

// const wholeNumbers = evenNumbers.concat(oddNumbers)

// console.log(wholeNumbers);

// const wholeNumbers = [...evenNumbers,...oddNumbers]

// console.log(wholeNumbers);

const newArr = [1,2,3,[4,5,[6,7]]]

const flattedArr = newArr.flat(Infinity)

console.log(flattedArr);

console.log(Array.isArray("Sidd"));

console.log(Array.from("Sidd"));

console.log(Array.from({age : 23})); // Interesting how?

let score1 =10
let score2 =20
let score3 =30

console.log(Array.of(score1,score2,score3));








