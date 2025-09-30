/* 
  reduce (accumilator, element, index, value)
  applies the function in every elemenet
*/

let arr_1 = [1, 2, 3, 4, 5];
console.log(arr_1.reduce((sum, current) => sum + current, 10)); // 25
/* 
 sum is accumilator and its value is 0 located at the right, we can also omit thT cuz reduce takes the fist element at first value
 current represents the current element

  the accumilator holds the returned value from the previous iterated element
  e.g 
  first iterate = sum => 0, current => 1 | sum + current => 1 // sum holds the value
  seond iterate = sum => 1, current => 2 | sum + current => 3 // sum hold the value
  and so on

  if the initial value (located at the right) is omited it takes the first value as initial value
  then procees to the 2nd element
*/

// try as string reduce right do the same but from right to left
let arrStr = ["Hello", "Hi", "Kamusta"];
let result = arrStr.reduceRight((holder, current) => holder.concat(current));
console.log(result);

// isArray returns true if the value is array, cuz typeof cannot distinguish arrays and objects


let arr = [

]
console.log(typeof(onj), typeof(arr)); // object object


// thisArg represents the thr given func as this
// some() if the function returns true it stops iterating throught element and returns it
// evey() if the function returns false it stops iterating throught element and returns it
let thisIsSome = [1, 11, 23, 10 ,4]
let func = (Element) => Element % 1 === 0;
console.log(thisIsSome.some(func));



