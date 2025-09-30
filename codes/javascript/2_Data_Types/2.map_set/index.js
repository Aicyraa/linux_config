// map can set any datatypes into keys unlike object
let map = new Map();

map.set(true, "You are in"); // setting new key value pairs
map.set(123, "You are out");
console.log(map.get(true)); // return the value by the key
console.log(map.has(123)); // returns true if its exist

// map uses SameValueZero to compare keys
// we can chain a method in map since it returns its self

let recipeMap = new Map([
  // use an iterable like an array for initializing value upon creation of MAP
  ["cucumber", 500],
  ["tomatoes", 350],
  ["onion", 50],
]);

console.log(recipeMap.size); // returns the length of key value pairs

// iterate over keys (vegetables)
for (let vegetable of recipeMap.keys()) {
  console.log(vegetable); // cucumber, tomatoes, onion
}

// iterate over values (amounts)
for (let amount of recipeMap.values()) {
  console.log(amount); // 500, 350, 50
}

// iterate over [key, value] entries
for (let entry of recipeMap) {
  // the same as of recipeMap.entries()
  console.log(entry); // cucumber,500 (and so on)
}

//
let user = {
  user: "john",
  age: 18,
};

let objTOmap = new Map(Object.entries(user)); // turns an object into a map
let mapTOobj = Object.fromEntries(objTOmap.entries()); // turns map into a obj

// set is a special type of collection, it contains values withous pairs and each value can only occur once

let set_iterable = new Set(["a", "b", "c", "d", "e"]); // iterables or set
let set = new Set();

let john = {name: 'John'}
let lenny = {name: 'lennt'}
let dwight = {name: 'dwight'}


set.add(john).add(lenny).add(dwight) // for adding value in set

for (let value of set){
    console.log(value);
}

// set also has set.values set.keys and entries()

// 
// SUMMARY
// 

// new Map([iterable]) – creates the map, with optional iterable (e.g. array) of [key,value] pairs for initialization.
// map.set(key, value) – stores the value by the key, returns the map itself.
// map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
// map.has(key) – returns true if the key exists, false otherwise.
// map.delete(key) – removes the element by the key, returns true if key existed at the moment of the call, otherwise false.
// map.clear() – removes everything from the map.
// map.size – returns the current element count.
// The differences from a regular Object:

// Any keys, objects can be keys.
// Additional convenient methods, the size property.
// Set – is a collection of unique values.

// Methods and properties:

// new Set([iterable]) – creates the set, with optional iterable (e.g. array) of values for initialization.
// set.add(value) – adds a value (does nothing if value exists), returns the set itself.
// set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
// set.has(value) – returns true if the value exists in the set, otherwise false.
// set.clear() – removes everything from the set.
// set.size – is the elements count.

