function one() {
  const username = "Sid"
  function two() {
    const website = "www.youtube.in"
    console.log(username);
  }
  // console.log(website);// gives error due to functional scope and the program breaks at this point
  two()
}
one()

if (true) {
  const username = "Sid"
  if (username === "Sid") {
    const website = "youtube"
    console.log(username);
  }
  // console.log(website);
}
// console.log(username);

console.log(addOne(9));
function addOne(num) {
  return num + 1
}

// console.log(addTwo(9));// throws error as it is being accessed before intialization and function is stored inside a variable
const addTwo = function (num) {
  return num + 1
}


