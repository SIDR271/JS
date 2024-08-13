const name = "Siddharth"
const repoCount = 50

console.log(`My name is ${name} and my repo Count is ${repoCount}.`);

let gameName = new String("Valo")

console.log(gameName.__proto__);

console.log(gameName[1]);
gameName = gameName.toUpperCase();
console.log(gameName);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('o'));

const newString = gameName.substring(0,1);
console.log(newString);

const anotherString = gameName.slice(-3 );
console.log(anotherString);

// trim(), replace(), includes(), split()








