// String methods allows us to manipulate strings
let string_1 = 'Hello World and Everyone!';
console.log(string_1.length); // returns the length starting from 0
console.log(string_1[1]); // returns the character at index 1
console.log(string_1.at(-1)); // same as [] but accepts negative
console.log(string_1.slice(5, 11)); // extracted "World" and make a new string, the last index character is excluded
console.log(string_1.indexOf(' ', 0)); // returns the first white space found, returns -1 if didnt found anything
console.log(string_1.includes('World')); // true, check if string containes World
console.log(string_1.toUpperCase()); // uppercase
console.log(string_1.toLowerCase()); // lowercase


