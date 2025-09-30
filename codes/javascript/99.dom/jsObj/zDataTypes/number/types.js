
let billion = 1_000;
let number = 1e6;
console.log(number);
/* 
we can use an unserscore as a sperator call "syntactic sugar"
for readability

  if we want to write a number in a short way we can use "e" to append after the number
  
  we can also reverse it like 1e-6 = 0.000001
  and specifying the zeros after
 
 */

// toString returns() string represantation depends on the base "(1-36 dault is 10)"

let num = 143;

/* 
  base = 16 ofr hex colors, charcter and encoding etc digits can be 0 - 9 , A - F
  basae = 2 is mostly for debugging bitwise operations
  base = 36 is the max, it can turn a long url into a short one

  when directly calling this methon in a number u need to add a 2 "."
*/
console.log(num.toString(36));

/* 
  Rounding
 One of the most used operations when working with numbers is rounding.

There are several built-in functions for rounding:

  Math.floor
  Rounds down: 3.1 becomes 3, and -1.1 becomes -2.

  Math.ceil
  Rounds up: 3.1 becomes 4, and -1.1 becomes -1.
  Math.round

  Rounds to the nearest integer: 3.1 becomes 3, 3.6 becomes 4. In the middle cases 3.5 rounds up to 4, and -3.5 rounds up to -3.
  
  Math.trunc (not supported by Internet Explorer)
  Removes anything after the decimal point without rounding: 3.1 becomes 3, -1.1 becomes -1.
*/



let number_1 = 1;
let str ='hi';
let floaters = 1.4

console.log(isNaN(number_1)); // false, 1 is a number
console.log(isNaN(str)); // true, str is converted to a number
console.log(number_1.toFixed(2)); 
console.log(Number.isNaN(str)); // false, cuz its more strict, it didnt converted str to number
console.log(isFinite(number_1)); // true, 1 is a number
console.log(parseInt(floaters)); // returns the integer part, we can use this to a value with str e.g "100px" it returns the integer 
console.log(parseFloat(floaters)); // return with the decimal point



