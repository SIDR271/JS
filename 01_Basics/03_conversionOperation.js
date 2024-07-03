let score = "Siddharth"

console.log(typeof(score));

let valueInNumber = Number(score)

console.log(typeof(valueInNumber));
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN(not a number)
// true => 1; false => 0
//null => 0
//undefined => NaN

let isLoggedIn = undefined
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(typeof(booleanIsLoggedIn));
console.log(booleanIsLoggedIn);

// 1 => true, 0 => false
// null => false
// undefined =>
// "" => fasle
// "Sid" => true

let num = 34

let stringNumber = String(num);
console.log(typeof(stringNumber));
console.log(stringNumber);