/* 
    primative values (str, num, ...etc) are copies as a whole value
    e.g - let str = 'Hello';
          let str2 = str;  

          both var is now independent, they have their own 'hello' value,
          if us edit or concat something into str2 it wont affect str
*/
/* 
    objects are copied by reference
    e.g - let user = { name: 'Jee'}
          let admin = user;

          admin var only copied the user reference which is 'user' 
          both var now can access the same property, 
          like if u change the the value of 'name' into john using admin var
          it will change the property value of name inside user var, because they have the same value

          think of it like a cabinet with 2 key
*/
/* 
   obj declared as const can be change
*/

let user_1 = {
  name: "Jee",
  age: 18,
  isAdult: false,
};

// let admin = user_1;
// console.log((admin.name = "john"));
// console.log(user_1.name); // 'John'
// console.log(user_1 === admin); // True

// ======================================== CLoning

let user__2 = {
  name: "Jee",
  age: 18,
  isAdult: false,
  sizes: {
    height: '150',
    width: '250'
  } 
};

/* 
    we can iterate in our orig obj and copy its properties 
    to clone obj using for in
*/
let clone = {}
for(let key in user__2){
    clone[key] = user__2[key];
}
console.log(clone.age);

/* 
    we can also use the built in assign method to copy our 
    other obj prop to our orig obj (user__2)
*/

let userHobby = { hobby: 'Gaming'}
let userHeight = { height: "+5'6"}

Object.assign(user__2, userHobby, userHeight); 
//object.assign(dest, ...obj) first arg is target obj and the other 
// is the list of obj u want the property to be copied
console.log(user__2.hobby);

let clone__2 = Object.assign({}, user__2) // copies all user__@ prop
Object.assign(clone__2, {name: 'Yehaw'})
console.log(clone__2.name); // overides the name

// structured cloding, copies all obj with nested properties
console.log(user__2.sizes === clone__2.sizes);

let clone__3 = structuredClone(user__2)

console.log(user__2.sizes === clone__3.sizes);



