// function A() {}
// function B() {}
// /* 
//   let a =  A();
//   let b =  B();
// */

// let a = new A();
// let b = new B();

// structuredClone(a, b);

// // console.log(a == b);

// function Calculator() {
//   this.read = function () {
//     this.a = +prompt("a", 0);
//     this.b = +prompt("b", 0);
//   };

//   this.sum = function () {
//     return alert(this.a + this.b);
//   };

//   this.mul = function () {
//     return alert(this.a * this.b);
//   };
// }

// const calculate = new Calculator();

//

function Accumulator(startingValue) {
  this.value = startingValue + Number(this.currentValue);


  this.read = function(){
    this.currentValue += +prompt('Add a value', 5);
  }
}

let accumulator = new Accumulator(1);

accumulator.read()
accumulator.read()
alert(accumulator.value)
console.log(accumulator);
