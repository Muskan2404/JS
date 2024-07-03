const name = "muskan";
const repoCount = 20;

//console.log(name + repoCount + " value");  //not recommended syntax

console.log(`Hello my name is ${name}. I have  ${repoCount} repositories.`);

const gameName = new String('obscure robot');

console.log(typeof gameName);

console.log(gameName [7]);
console.log(gameName.__proto__);

 console.log(gameName.length);
// console.log(gameName.toUpperCase());
 console.log(gameName.toLowerCase());
// console.log(gameName.toLocaleUpperCase());
 //console.log(gameName.charAt(2));
// console.log(gameName.indexOf('b'));


const newString = gameName.substring(0,6);
console.log(newString);

const anotherString = gameName.slice(-13, 4);
console.log(anotherString);


const newStringOne = "     muskan      ";
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://hogwarts.com/hogwarts%20world";

console.log(url.replace('%20', '-'));

console.log(url.includes('muskan'));

console.log(gameName.split(' ')); 