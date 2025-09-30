/* 
  primative as an object

  primative it primative, u can't change it,
  primative dont have any method unlike objets that allows you to create 
  function inside it (methods)

  but ther's called special wrapper called "object wrapper" that allows
  us to call and use methos to primatives like str.toUpperCase etc

  let str = "Hello";

  alert( str.toUpperCase() ); // HELLO
  Simple, right? Here’s what actually happens in str.toUpperCase():

  The string str is a primitive. So in the moment of accessing its property, a special object is created that knows the value of the string, and has useful methods, like toUpperCase().
  That method runs and returns a new string (shown by alert).
  The special object is destroyed, leaving the primitive str alone.

  when a method is called 

  et str = "Hello";

  str.test = 5; // (*)

  alert(str.test);
  Depending on whether you have use strict or not, the result may be:

  undefined (no strict mode)
  An error (strict mode).
  Why? Let’s replay what’s happening at line (*):

  When a property of str is accessed, a “wrapper object” is created.
  In strict mode, writing into it is an error.
  Otherwise, the operation with the property is carried on, the object gets the test property, but after that the “wrapper object” disappears, so in the last line str has no trace of the property.
  This example clearly shows that primitives are not objects.

  They can’t store additional data.

  
*/

let name= "Nigga";
console.log(Object.keys(name));
console.log(Object.values(name));