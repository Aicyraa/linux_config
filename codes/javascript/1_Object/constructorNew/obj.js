/*  
 a constucter is just a reg fun There are two conventions though
 The first letter should be capital
 they can only be executed using new
*/

/* 
  new keyword allows to create many object with one block of func
  new User('Jee') or new User('John'), its much shorter than making 
  a object literal per user (object)
 */

function User(name) {
  // creates this literal e.g this = { }

  // add properties
  this.name = name;
  this.isAdmin = false;

  // return this
}

// executed with new
console.log(new User('Jee'));
console.log(new User('John'));

/* 
  adv stuff - new.target returns undefined when the constructor is called without 'new' otherwise it returns the function
 */

function Fruits(fruit){
    if(!new.target) {
       return console.log('u didnt called this constructor using the new keyword ');
    }
/* 
    if(!new.target) {
      return new Fruits(fruit); if we include this, we can call the constructor
    }                           withous using the new keyword but this is not good practice
 */
    this.fruit = fruit;
    console.log('u Called this using the new keyword');
    
}

let fruit_name = new Fruits('Apple');
// let fruit_name =  Fruits('Apple');
console.log(fruit_name);

/* 
  constructor dont have return method if it has
  it overides the this 
*/

function BigUser(){
    this.fruit = 'apple';
    return {fruit : 'orange'}
}
console.log(BigUser());

