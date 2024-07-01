const accountId = 445566;
let  accountEmail = "cheese24@gmail.com";
var accountPassword = "12345";

/*prefer not to use var
because of block scope and functional scope */
accountCity = "Kolkata";

let accountState;

//accountId = 4; || won't change constant 

accountEmail = "abcd@gmail.com";
accountPassword = "323434";
accountCity = "Patna";


console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);