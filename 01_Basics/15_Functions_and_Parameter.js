function addTwoNumbers(number1, number2) {
return number1 + number2;
}

const result = addTwoNumbers(5, 6);

console.log("Result is", result);

function LoginUserMessage(username){
  if(!username){
    console.log("Please enter a username");
    return
  }
  return `${username} just logged in`
}

console.log(LoginUserMessage("Siddharth"));
console.log(LoginUserMessage());


