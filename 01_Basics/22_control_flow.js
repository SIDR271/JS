if (true) console.log("sid"),
  console.log("without {}");

const month = 3
switch (month) {
  case 1:
    console.log("Jan");
    break;
  case 3:
    console.log("Mar");
    break;
  default:
    break;
}

// truthy value

const Name = "sid"

if (Name) {
  console.log("Truthy value");
} else {
  console.log("falsey value");
}

// Truthy values => Other than falsey values , "0", 'false', ' ', [], {}, function(){}
// Falsey values => false, 0, -0, BigInt 0n, "", null, undefined. NaN 

const myObj = {}

if (Object.keys(myObj).length === 0) {
  console.log("Object is empty");
}

// fasle == 0, false == '', 0 == '' are true

// Nullish Coalescing Operator (??) : null undefined

let val1;

val1 = 5 ?? 10 // 5
val1 = null ?? 10 // 10
val1 = undefined ?? 10 // 10 , it is for null and undefined check

console.log(val1);
