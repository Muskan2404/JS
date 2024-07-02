// console.log(2>1);
// console.log(2>=1);
// console.log(2<=1);
// console.log(2==1);
// console.log(2!=1);

// console.log("2">1);
// console.log("02">1);
// console.log(2 > "1");


// console.log(null>0);
// console.log(null==0);
// console.log(null>=0);
// console.log(null<=0);
// console.log(null<0);

/* 

The reason is that an equality check (==) and comparisons < > <= >= 
are treated differently. Comparisons convert null to a number and treat it as 0.
That is why null>=0 is true and null > 0 is false.

 */

//   console.log(undefined>0);
//   console.log(undefined>=0);
//   console.log(undefined<=0);
//   console.log(undefined==0);
//   console.log(undefined<0);


// === 
// This not only checks the value but also checks the datatype.


console.log("2" ==  2);  //give result true because "2" is converted.
console.log("2" ===  2);  //give result false because datatype is also checked.
