// Primitive - These are call by value.

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const name = "Siddharth"
let number = 100.34
let isLoggedIn = true
let temp = null
let day = undefined
const lightYears = 123456789876543256n
console.log(typeof lightYears);
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);// evnthough the value passed is same the variables hold 2 diff values


// Reference (Non primitive) - These are call by reference

// Array, Objects, Functions

let car = ["BMW", "Audi"]

let myObj = {
  name: "Sliglo",
  phoneNo: 7895510452
}

console.log(typeof myObj);

const myFunction = function () {
  console.log("Hi Players");
}

console.log(typeof myFunction);

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function (It is actually object only)
//        Object  =>  object