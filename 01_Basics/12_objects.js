// singelton way to create object 
// Object.create(user)

// Object literals

const sym = Symbol("sid")

const JsUser = {
  age : 23,
  location : "Dehradun",
  email : "sidd@gmail.com",
  lastLoginDays : ["Mon","Sat"],
  [sym] : "Mykey"
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser[sym]); // for symbol [] should be used.

JsUser.email = "sidd@moto.com"
// Object.freeze(JsUser)
JsUser.email = "sidd@google.com"
console.log(JsUser);

JsUser.greeting = function(){
  console.log(`Hello Js user , ${this.age}`);
}

JsUser.greeting()





