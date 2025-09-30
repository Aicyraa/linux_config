/* 
  array is and ordered collection
  2 types of array declaration
  let arr = []
  let arr = new array[]
*/

let fruits = ['Apple', 'Grapes', 'Orange'];

console.log(fruits[0]); // accesing the value of array
console.log(fruits[1] = 'Mango'); // replacing the value from Grapes to Mango
console.log(fruits[3] = 'Lemon'); // Adding value, arrays starts from 0 index, since out array is up to 2 only, we can add the fourt one which is [3]
console.log(fruits.length); // returns the total elemens stored
console.log(fruits[fruits.length - 1]) // accessing the last array
console.log(fruits.at(-1)) // accessing the last array, same as line 13 

// An array can store any types of value and can access it using the indexes
let arrOfTypes = ['John', 18, {height: "5'11"}, function sayHi(){}]

/* 
  2 common use cases of array
  queue: pus h- appends an element to the end, shift - get an element from the beginning
  stack: push add and element to the end, pop - returns the last and element and removes it
*/

let array = ['first', 'second', 'third'];

console.log(array); // push, unshift can add multple element at the same time
console.log(array.push('fourth', 'fifth')); // added this element in the end of an array
console.log(array.unshift('-one', '-two')); // added this element in the start of an array
console.log(array);

// for of - uses to iterates array

for(let number of array){
    console.log(number); // just like for in, number represents the el in array
}

/* 
  Array is a special kind of object, suited to storing and managing ordered data items.

The declaration:

// square brackets (usual)
let arr = [item1, item2...];

// new Array (exceptionally rare)
let arr = new Array(item1, item2...);
The call to new Array(number) creates an array with the given length, but without elements.

The length property is the array length or, to be precise, its last numeric index plus one. It is auto-adjusted by array methods.
If we shorten length manually, the array is truncated.
Getting the elements:

we can get element by its index, like arr[0]
also we can use at(i) method that allows negative indexes. For negative values of i, it steps back from the end of the array. If i >= 0, it works same as arr[i].
We can use an array as a deque with the following operations:

push(...items) adds items to the end.
pop() removes the element from the end and returns it.
shift() removes the element from the beginning and returns it.
unshift(...items) adds items to the beginning.
To loop over the elements of the array:

for (let i=0; i<arr.length; i++) – works fastest, old-browser-compatible.
for (let item of arr) – the modern syntax for items only,
for (let i in arr) – never use.
To compare arrays, don’t use the == operator (as well as >, < and others), as they have no special treatment for arrays. They handle them as any objects, and it’s not what we usually want.

Instead you can use for..of loop to compare arrays item-by-item.
*/

