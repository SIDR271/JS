const score = 400
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNum = 123.5456;

console.log(otherNum.toPrecision(3));
console.log(otherNum.toPrecision(4));
console.log(otherNum.toPrecision(2));

const hundred = 1000000
console.log(hundred.toLocaleString('en-IN'));

// +++++++++++++++++ Maths +++++++++++++++++

console.log(Math.abs(-40));
console.log(Math.round(4.5));
console.log(Math.ceil(4.8));
console.log(Math.floor(9.1));
console.log(Math.min(9, 2, 3));
console.log(Math.random());// Value from 0 to 1 where 1 is inclusive
console.log((Math.random() * 10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);













