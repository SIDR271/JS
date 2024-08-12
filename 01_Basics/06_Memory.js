// Stack(Primitive), Heap(Non-Primitive)

let first_name = "Siddharth"

let anotherName = first_name;

anotherName = "Sliglo"

console.log(first_name);
console.log(anotherName);

let userOne ={
  email: "user@gmail.com",
  upi : "708@ybl"
}

console.log(userOne);


let userTwo = userOne

userTwo.email = "Sid@gmail.com";

console.log(userTwo);
console.log(userOne);


