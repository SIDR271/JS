const user = {
  username: "sid",
  price: 199,
  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    console.log(this);

  }
}

// user.welcomeMessage()
// user.username = "Sliglo"
// user.welcomeMessage()

// console.log(this);// In browser the global object Window is returned

function juice() {
  console.log(this);// gives a global object
}

juice()

function juice2() {
  let username = "siddharth"
  console.log(this.username);// undefined as this is used only for object
}

juice2()

const guice = () => {
  console.log(this);// gives an empty object
}

guice()

const addtwoNumbers = (num1, num2) => {
  return num1 + num2
}

console.log(addtwoNumbers(3, 4));

const addtwoNumbers2 = (num1, num2) => (num1 + num2) // Implicit return

console.log(addtwoNumbers2(7, 8));
