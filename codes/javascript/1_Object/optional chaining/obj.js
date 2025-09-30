/* 
  if we want to access a nested property but its undefined it returns an error
  sure we can user logical op like ||, && or ? but is not food for readability
  optinal chaning "?" (not ternary) allows us to check the value exist 
  if true proceeed other wise stop the execution and return undefined

  new (might use polyfillers)
*/

let user = {
  address: {
    street: "", // returns true
  },
};

// console.log(user.address.street); // returns an error
console.log(user.address?.street); // returns undefined

/* 
  only works in declared variables, func parameters, [] notation
  can also user to check if a function exist 
*/

let userAdmin = {
  admin() {
    alert("I am admin");
  },
};

let userGuest = {};

userAdmin.admin?.(); // I am admin
userGuest.admin?.(); // nothing happens (no such method)

/* 
 SUMMARY

  The optional chaining ?. syntax has three forms:

  obj?.prop – returns obj.prop if obj exists, otherwise undefined.
  obj?.[prop] – returns obj[prop] if obj exists, otherwise undefined.
  obj.method?.() – calls obj.method() if obj.method exists, otherwise returns undefined.
  As we can see, all of them are straightforward and simple to use. The ?. checks the left part for null/undefined and allows the evaluation to proceed if it’s not so.

  A chain of ?. allows to safely access nested properties.
  Still, we should apply ?. carefully, only where it’s acceptable, according to our code logic, that the left part doesn’t exist. So that it won’t hide programming errors from us, if they occur.
*/
