// == 1 == 1 == 1

function camelize(words) {
  return words
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join("");
}
console.log(camelize("darlwyn-jee-daguman"));

// == 2 == 2 == 2

function filterInRange(arr, a, b) {
  let newarray = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= a && arr[i] <= b) {
      newarray.push(arr[i]);
    }
  }

  return newarray;
}
console.log(filterInRange([5, 3, 8, 1], 1, 4));

// == 3 == 3 == 3
function copySorted(arr) {
  return arr.slice().sort();
}
let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
// alert(sorted);
// alert(arr);

// == 4 == 4 == 4 == 4

class Calculator {
  methods = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
  };

  calculate(str_e) {
    let equation = str_e.split(" ");
    return this.methods[equation[1]](+equation[0], +equation[2]);
  }

  addMethod(name, func) {
    this.methods[name] = func;
  }
}

let supercalc = new Calculator();
console.log(supercalc.calculate("10 + 1"));
console.log(supercalc.calculate("10 - 2"));
supercalc.addMethod("*", (a, b) => a * b);
console.log(supercalc.calculate("5 * 6"));

// == 5 == 5 == 5 == 55
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [john, pete, mary];

// let names = users.map((obj) => obj.name);
// console.log(names);

// 6 == 6 == 6 == 6

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };
let users = [john, pete, mary];
let mappedUsers = users.map(user => {return {fullname: `${user.name} ${user.surname}`, id: user.id}})
console.log(mappedUsers);

//
//
//
//
//
