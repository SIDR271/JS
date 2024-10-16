// for of
// Array
const arr = [1, 2, 3]
for (const element of arr) {
  console.log(element);
}

// String
const string = "siddharth raturi"
for (const element of string) {
  console.log(element);
}

// maps
const map = new Map()

map.set("1", "virat")
map.set("2", "dhoni")
map.set("3", "rohit")

console.log(map);


for (const [key, value] of map) {
  console.log(`key is ${key} and value is ${value}`);
}

// objects are not iterable using for of
const obj = {
  name: "sid",
  age: 23
}

// for in

// Object, works same for array as it has indexing
for (const key in obj) {
  console.log(`key is ${key} and value is ${obj[key]}`);
}

// forEach

const languages = ["java", "javaScript", "cpp"]

languages.forEach(function (val) {
  console.log(val);
})

languages.forEach((item) => {
  console.log(item);
})

const printMe = (item) => {
  console.log(item);
}

languages.forEach(printMe)

languages.forEach((item,ind,arr)=>{
  console.log(`${item},${ind},${arr}`); // toString() is called when in backsticks
  console.log(item,ind,arr);
} )

// array of objects

const Language = [
  {
    name : "java",
    extension : ".java"
  },
  {
    name : "C++",
    extension : "cpp"
  },
  {
    name : "JavaScript",
    extension : "js"
  }
]

Language.forEach((val)=>{
  console.log(val.extension);
})
