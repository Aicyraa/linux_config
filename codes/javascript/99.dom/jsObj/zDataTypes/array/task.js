// let array = new Array(5);
// array = ['Jazz', 'Blues'];
// array.push('Rock-n-roll');

// console.log(getMiddle(array));

// function getMiddle(arr){
//     return arr[Math.floor((arr.length - 1) / 2)] = 'Classics';
// }

// console.log(array.shift());
// array.unshift('Rap, Reggae');
// console.log(array);

let array = [];

function sumInput(arr) {
  let sum = 0;

  while (true) {
    let value = prompt("Enter a value u want to add");

    if ((value === null) | (value === "") || isNaN(+value)) break;
    else arr.push(+value);
  }

  for(let num of array){
    sum += num
  }
  return sum
}

console.log(sumInput(array));


