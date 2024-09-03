let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());

let myCreatedDate = new Date(2023,0,23) // Middle parameter is of month and it starts with 0
console.log(myCreatedDate.toLocaleString());

let myCreatedDate2 = new Date(2023,0,23,5,3)
console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date("03-31-2023");
console.log(myCreatedDate3.toLocaleString());

let myTimeStamp = Date.now();
console.log(Math.floor(myTimeStamp/1000)); // time is milliSeconds calculated from 1st Jan 1970

console.log(myCreatedDate.getDate());
console.log(myCreatedDate.getMonth()+1);
console.log(myCreatedDate.getDay());


console.log(
  myCreatedDate.toLocaleString('default',{
    weekday: "long",
  }));





