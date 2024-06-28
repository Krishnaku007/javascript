const accountId=14534
let accountEmail="Krishan@google.com"
var accountPassword="32143"
accountCity="Patna"

// accountId=2  //not allowed
accountEmail="kc@kc.com"
accountPassword="73465"
accountCity="gaya"
console.log(accountId);
/*
prefer not to use var beacuse of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity])