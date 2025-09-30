let str_1 = "Hello World";

console.log(str_1.length); // accessing the length of a string - but the index starts with zero
console.log(str_1.at(-2)); // accessing the character, can read negative value
console.log(str_1[1]); // accessing the character

// iterating through characters

for (let char of str_1) {
  console.log(char);
}

str_1[0] = "h"; // error strings are immutable, u can change a char by creating a new variable and assigning it to it

/* 
  tolowerCase and toUpperCase;
*/

let str_2 = "Widget with id";

console.log(str_2.indexOf("id")); // W"id"get kaya 1
console.log(str_2.indexOf("id", 2)); // 12 kasi nag start ysa mag hanap sa index 2

/* 
  If we’re interested in all occurrences, 
  we can run indexOf in a loop. 
  Every new call is made with the position after the previous match:
 */

let strr = "As sly as a fox, as strong as an ox";
let target = "as"; // let's look for it
let pos = 0;
while (true) {
  let foundPos = strr.indexOf(target, pos);
  if (foundPos == -1) break;

  console.log(`Found at ${foundPos}`);
  pos = foundPos + 1; // continue the search from the next position
}

// str.lastIndexOf(substr, position) does the same but reverse
// The same algorithm can be layed out shorter:

let strrr = "As sly as a fox, as strong as an ox";
let targett = "as";

let poss = -1;
while ((poss = strrr.indexOf(targett, poss + 1)) != -1) {
  console.log(poss);
}

/* 
  startsWith, endWith, includes returns true or false
*/

console.log("Hello".includes("Bye")); // false
console.log("Widget with id".includes("Widget", 0)); // true
console.log("Widget width".startsWith("Wid")); // true, "Widget" starts with "Wid"
console.log("Widget".endsWith("get")); // true, "Widget" ends with "get"

/* 
  3 methods for getting a substring, substring, substr, slice 
*/

let sub = 'Hello Everyone!, Goodmorning!';

console.log(sub.slice(6, 15)); // returns Everyone!, starts from ind 6 which is "E" end with 15 which is "," but its no included
console.log(sub.substring(6, 15)); // returns veryone!, ,same with slice but the starting index charcter is not included
console.log(sub.substr(6, 5)); // this one returns the substr, first param is index position and the second is the length of characters that it will get
                               // this returns Every since "E" starts in ind 6 and 4 characters from the right is very so its 5 including the first charcter


