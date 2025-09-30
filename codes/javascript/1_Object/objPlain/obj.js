/*  
 obj has a property(key:value) while key is the property name and the value is in the right side
 a property value can have any data types (str, num, bool, ...etc) 
*/

let user1 = {
  name: "John",
  age: 18,
  isDead: false,

  // multi word property must be place inside a dbl quote
  "likes programming": true,
};

// delete user.age; deletes the obj property
console.log(user1.age); // dot notarion for simple property
console.log(user1["likes programming"]); // square bracket notation for multi word property

// ========================================== multi words

/*  
 multi words is more flexible, u can put a variable ins a bracket 
 let key = prompt("What do you want to know about the user?", "name");
*/

let key = "likes programming";
console.log(user1[key]);

/* 
  computed properties (prop name that came from a variable) 

  let fruit = prompt("Which fruit to buy?", "apple");
  let bag = {
    [fruit]: 5,  the name of the property is taken from the variable fruit
  };
  alert( bag.apple ); // 5 if fruit="apple" 

*/

// ========================================== Property value shorthand

function makeUser(name, age, hobby) {
  return {
    /*  
        name: name,
        age: age,
        hobby: hobby, 
      */

    // == short hand

    name,
    age,
    hobby,
  };
}

// ========================================== checks if property exist

let userInfo = makeUser("Jee", 17, "Games");

console.log(userInfo);

let userCheck = {
  name: undefined,
  age: 18,
};

console.log(userCheck.age === undefined); // false, age is defined
console.log(userCheck.hobby); // false, hobby doesnt exist
console.log("name" in userCheck); // special operator that check if the property exists

let obj = {
  test: undefined,
};
console.log(obj.test); // it's undefined, so - no such property?
console.log("test" in obj); // true, the property does exist!

let user__ = {
  name: "Ace",
  age: 10,
  isAdult: false,
};

for (let key in user__) {
  console.log(key); // returns the key (prop name)
  console.log(user__[key]); // returns the value
}
