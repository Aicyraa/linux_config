/* function camelize(str) {
  let camelSto = [];
  let arr = str.split("-");
  let camel = arr.splice(1);

  camel.forEach((str) => {
    str = str.split("");
    let firstLet = str.splice(0, 1);
    firstLet = firstLet[0].toUpperCase();
    str.unshift(firstLet);
    let camel = str.join("");
    camelSto.push(camel);
  });
  
  let newCamelize = arr.concat(camelSto)
  return newCamelize.join('')
}
 */

function camelize(str) {
  return str
    .split("-")
    .map((word, index) =>
      index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("");
}
console.log(camelize("max-andre-daza"));

// task 2
let task2 = [1, 2, 3, 4, 5, 6];

function filterRangeInPlace(arr, a, b) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] <= a || arr[i] >= b) {
      arr.splice(i, 1);
    }
  }
}

filterRangeInPlace(task2, 3, 5);

// task 3

let task3 = [5, 2, 1, -10, 8];
console.log(task2.sort((a, b) => b - a));

// task4

let task4 = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
  return arr.map(String).sort((a, b) => a.localeCompare(b));
}

let copy = copySorted(task4);
console.log(copy);
console.log(task4);

// task 5 skipped

// task 6
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

let names = users.map((value) => value.name);
console.log(names);

// task 7

let John = { name: "John", surname: "Smith", id: 1 };
let Pete = { name: "Pete", surname: "Hunt", id: 2 };
let Mary = { name: "Mary", surname: "Key", id: 3 };

let Users = [John, Pete, Mary];

let usersMapped = Users.map((value) => ({
  fullname: `${value.name} ${value.surname}`,
  id: value.id,
}));

// when returning an object without an return in arrow function wrap it inside ()

console.log(usersMapped);

//task 6

function Calculator() {
  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
  };

  this.calculate = function (str) {
    let split = str.split(" "),
      a = +split[0],
      op = split[1],
      b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  };

  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}

// task 7

let ivan = { name: "John", age: 25 };
let jee = { name: "Pete", age: 30 };
let patrick = { name: "Mary", age: 28 };

let arr = [ivan, jee, patrick];

function sortByAge(arr) {
  return arr.sort((a, b) => a.age - b.age);
}

console.log(sortByAge(arr));

// task 8

let num = [1, 2, 3];

function shuffle(arr) {
  
}
