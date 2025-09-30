let user = {
  name: "Alice",
  getName: function () {
    return this.name;
  },
};

let getName = user.getName;

console.log(getName()); // What will this show?
console.log(user.getName()); // What will this show?

let calculator = {
  a: 10,
  b: 20,
  sum() {
    return this.a + this.b;
  },
};

let standaloneSum = calculator.sum;

console.log(calculator.sum()); // ?
console.log(standaloneSum()); // ?
