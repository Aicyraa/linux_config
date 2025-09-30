// 1. array splice is a method that extract the value starting from (start, deleteCount, replacement...)
// start (the starting index), (how many elements u want to extract), (replacement is the value that is going to replace the extracetd values)

let array_1 = ["Hello", "Everyone", "I", "Love", "You", "All"];
let extracted = array_1.splice(0, 2, "Bonjour", "Todas"); // returns the extacted elements
// replace the extracted with bonjour and todas
console.log(array_1);

let array_2 = ["H", "E", "L", "L", "O"];
array_2.splice(2, 0, "L", "L", "Yea"); // adding elements without extracting
console.log(array_2);

let copy = array_2.slice(0, 4); // creates a new array within the indicated postion (0, 4) || (first, start)
console.log(copy);

// 2. array concat
// creates a new array with the added arg 1 and 2
let array_3 = ["H", "E", "L", "L", "O"];
console.log(["Hell"].concat("Y", "E", "A")); // hell Y E A
console.log(array_3.concat("Y", "E", "A")); // 'H', 'E', 'L', 'L', 'O', Y E A
// if use in object we can use Sysbom.isConcatSpreadable othewise it wll return add object object

let object_1 = {
  0: "A", // key must be a number idk why haha
  1: "B",

  [Symbol.isConcatSpreadable]: true,
  length: 2,
};
console.log(["Array"].concat(object_1));

// ex-3 , forEach

let array_4 = ["Apple", "Banana", "Cucumber", "Durian"];
array_4.forEach((value, index) => {
  // if u want to get the item, index, string you need to use parenthesis
  console.log(`
    Value: ${value} 
    Index: ${index}`);

    //  dont return anything
});

array_4.forEach((element) => {
  // if u only want the element u can omit the parenthesis
  console.log(element);
});

// array indexOf and includes excactly do the same with str counterparts

let array_5 = ["Apple", "Banana", "Cucumber", "Durian", "Banana"];
console.log(array_5.indexOf("Banana")); // 2
console.log(array_5.lastIndexOf("Apple")); // 5
console.log(array_5.includes("Mango")); // False

// array find method, always returns the first, returns -1 if flase

let array_6 = [
  { name: "John", id: 1 },
  { name: "Ace", id: 2 },
  { name: "Doe", id: 3 },
  { name: "John", id: 4 },
];

console.log(array_6.find((item) => item.id === 1)); // better to use if finding a spefic element, it returns the first it finds
console.log(array_6.findIndex((item) => item.name === "John")); // returns the first match
console.log(array_6.findLastIndex((item) => item.name === "John")); // returns the last match

// array filter, returns all matching elements

let array_7 = [
  { name: "John", id: 1 },
  { name: "Ace", id: 2 },
  { name: "Doe", id: 3 },
  { name: "John", id: 4 },
];

let filter = array_7.filter((item) => item.name == "John");
console.log(filter); // return john with id 1 and 4

// array map, creates an new array without affecting the original one

let array_8 = [
  { name: "John", id: 1 },
  { name: "Ace", id: 2 },
  { name: "Doe", id: 3 },
  { name: "John", id: 4 },
];

let map = array_8.map((item) => item.name = item.name + ' Nega');
console.log(map); // returns a new array with the modifies element

// array sort, default (converts elements to string), we can config and provide a function to sort it correctly

let array_9 = [1, 14, 43, 2, 5];
console.log(array_9.reverse()); // reverse the order
console.log(array_9.sort()); // 1, 14, 2, 43, 5
let sort = array_9.sort((a, b) => a - b); // 1,2,5,14,43
/* 
 basically we provided a function that sorted them correctly a - b
   if a - b , if a is less than b the result will be negative right? e.g
   40 - 100 = -60
   so a (40) will be first sorted then b,
   [a, b]

   while if a is greater than b e.g
   100 - 10 = 90, its postive
   b (10) will be sorted first
  [b, a]

   however if they are both equal no change will occur
*/
console.log(sort);
// - for strings better use localeCompare

let countries = ['Englang', 'Österreich', 'America',  'Vietnam']
console.log(countries.sort());
console.log(countries.sort((a, b) => a.localeCompare(b)));

// Split an Join Method

let names = 'John, Doe, Elio, Wayne'
let arr = names.split(', ') // John Doe Ellio Wayne into a array, 2nd arg can limit the split
let letters = names.split('') // split names into letters
console.log(arr);
console.log(letters);

let str = arr.join(' and ') // does the revese, returns a string of array, the array are glue and connected with "and"
console.log(str);




