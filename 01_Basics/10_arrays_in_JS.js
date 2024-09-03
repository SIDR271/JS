// Shallow copies are made for all array-copy related operations which means 
// , copy of an object shares the same reference.

const myArr = [1, 2, 3, "sid"]

const arr = new Array(1,2,3,4)

arr.push(5)
console.log(arr);
arr.pop()
console.log(arr);
myArr.unshift(9) // Not Recommended
console.log(myArr);
myArr.shift()
console.log(myArr);

const newArr = arr.join('|')
console.log(newArr);

const myn1 = arr.slice(1,3);
console.log(myn1);
console.log(arr);


const myn2 = arr.splice(1,3)
console.log(myn2);
console.log(arr);



