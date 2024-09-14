const user = {};

user.id = 1;
user.name = "Siddharth";
user.gender = 'Male';

console.log(user);

const foodDish = {
  price : 1000,
  Cuisine : "Indian",
  Spices: {
    Dry : "cardamon",
    Wet : "tamraindSauce"
  }
}

console.log(foodDish.Spices.Wet);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

const obj3 = { obj1, obj2}

const obj4 = Object.assign({},obj1,obj2); // Source,Target

const obj5 = {...obj1,...obj2};

console.log(obj3,obj4,obj5);

console.log(Object.keys(user));

console.log(Object.values(user));

console.log(Object.entries(user));

console.log(user.hasOwnProperty("id"));







