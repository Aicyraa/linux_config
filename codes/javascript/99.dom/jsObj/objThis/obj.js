let user_func = {
  name: "John",
  age: 18,

  /*   speak() {
        console.log("hello");
    } 
*/
  speak: function () {
    console.log("Hello");
  },
};
// console.log(user_func.speak());

// ========== the this keyword - this refer tho the object before "." e.g user.name = this.name = this is equals to user

let user = {
  name: "Jee",
  age: 18,
};

let admin = {
  name: "Admin",
  age: 18,
};

function sayHi() {
  console.log(this.name);
  console.log(this.age);
}

user.f = sayHi;
admin.f = sayHi;

user.f();
admin.f();

console.log(user);
/* 
    The rule is simple: if obj.f() is called,
    then this is obj during the call of f.
    So it’s either user or admin in the example above.

    only in js ha
*/

/* 
        In JavaScript this is “free”, its value is evaluated at call-time 
    and does not depend on where the method was declared, but rather on 
    what object is “before the dot”.
        The concept of run-time evaluated this has both pluses and minuses. 
    On the one hand, a function can be reused for different objects. 
    On the other hand, the greater flexibility creates more possibilities for mistakes.

    In many other languages (like Java, C#, Python),
    this (or self) always points to the object where the method was defined.
    
    - But in JavaScript,

        this is not permanently bound to the object where the method was created.
        Instead, this is determined when you CALL the function, by looking at what’s before the dot.
        So even if a function was defined inside user, if you call it differently, this will change.
*/


