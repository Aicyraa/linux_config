/* 
  there are 3 types of conversion 
  - string, number, default -> these are called hints
  
  "string" (for alert and other operations that need a string)
  "number" (for maths)
  "default" (few operators, usually objects implement it the same way as "number")
            Occurs in rare cases when the operator is “not sure” what type to expect.
            For instance, binary plus + can work both with strings (concatenates them) and numbers (adds them). So if a binary plus gets an object as an argument, it uses the "default" hint to convert it.
            Also, if an object is compared using == with a string, number or a symbol, it’s also unclear which conversion should be done, so the "default" hint is used.  
*/

let user = {
    name: 'John',
    money: 1000,

    // eto parang combination ng toString tas valueOf
    // [Symbol.toPrimitive](hint){
    //   alert(`hint: ${hint}`);
    //   return hint == 'string' ? `name: ${this.name}` : this.money    
    // }
}

/* 
  object has a default toString and valueOf and returns object Object
*/
alert(user.name);

