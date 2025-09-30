let market = {
  apple: 45,
  orange: 15,
  grapes: 30,
  mango: 10,
  durian: 30,
};

console.log(Object.entries(market)) // returns an array of key, value pairs 
console.log(Object.keys(market)); // returns an array of keys
console.log(Object.values(market)); // returns an array of values
console.log(Object.fromEntries(Object.entries(market))); // makes an object from a key, value pairs of iterable or array
