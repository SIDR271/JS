const accountId = 148984
let accountEmail = "sliglo@gmail.com"
var accountPassword = "2939"
accountCity = "Jaipur"
let accountState

//accountId = 12078//Not allowed as it is const declared

accountEmail = "sid@gmail.com"
accountPassword = "sid"
accountCity = "dehradun"
/*
It is not recommended to use var because of block scope and functional scope issue.
*/
console.table([accountEmail, accountPassword, accountCity, accountState])
