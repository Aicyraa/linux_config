/* 
  Symbol is a primitive type for unique identifiers.

  Symbols are created with Symbol() call with an optional description (name).
  Symbols are always different values, even if they have the same name. If we want same-named symbols to be equal, then we should use the global registry: Symbol.for(key) returns (creates if needed) a global symbol with key as the name. Multiple calls of Symbol.for with the same key return exactly the same symbol.
  Symbols have two main use cases:

  “Hidden” object properties.
  If we want to add a property into an object that “belongs” to another script or a library, we can create a symbol and use it as a property key. A symbolic property does not appear in for..in, so it won’t be accidentally processed together with other properties. Also it won’t be accessed directly, because another script does not have our symbol. So the property will be protected from accidental use or overwrite.
  So we can “covertly” hide something into objects that we need, but others should not see, using symbolic properties.
  There are many system symbols used by JavaScript which are accessible as Symbol.*. We can use them to alter some built-in behaviors. For instance, later in the tutorial we’ll use Symbol.iterator for iterables, Symbol.toPrimitive to setup object-to-primitive conversion and so on.
  Technically, symbols are not 100% hidden. There is a built-in method Object.getOwnPropertySymbols(obj) that allows us to get all symbols. Also there is a method named Reflect.ownKeys(obj) that returns all keys of an object including symbolic ones. But most libraries, built-in functions and syntax constructs don’t use these methods.

  There are many system symbols used by JavaScript which are accessible as Symbol.*. We can use them to alter some built-in behaviors. For instance, later in the tutorial we’ll use Symbol.iterator for iterables, Symbol.toPrimitive to setup object-to-primitive conversion and so on.
  Technically, symbols are not 100% hidden. There is a built-in method
  */

let user_id = Symbol("id");
let admin_id = Symbol("id"); // doesnt matter if have the same id
console.log(user_id === admin_id); // primitive unique value

// Symbols is not auto conveted in String so you need to explicit
// If we really want to show a symbol, we need to explicitly call .toString() on it, like here:

let id = Symbol("id");
alert(id.toString()); // Symbol(id), now it works

// Or get symbol.description property to show the description only:

let id1 = Symbol("id");
alert(id.description); // id

// Hidden property
// This allows object to have a property that cannot be over written accidently or third party code

let user = {
  
};

let id_user = Symbol("id");
user[id_user] = 1;
console.log(user[id_user]); // we can access this data using the symbol as the key

let fruitId = Symbol('id')

let bag = {
  [fruitId]: 3, // we can put symbols inside template literl
}

for (let key in bag) alert(key); // name, age (no symbols)

// the direct access by the symbol works
alert( "Direct: " + fruitId[fruitId] ); // Direct: 3

// global variable for sysmbol, it is use to access same symbol trough global registry

let id_mo = Symbol.for("id");
let id_ko = Symbol.for('id')

console.log(id_mo === id_ko) // true;

let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");

alert( Symbol.keyFor(globalSymbol) ); // name, global symbol - pang global lang
alert( Symbol.keyFor(localSymbol) ); // undefined, d sya global

alert( localSymbol.description ); // name - pang global lang