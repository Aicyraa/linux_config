/* let user = {
    name: 'john',
    surname: 'Smith',
}

console.log(user.name);

user.name = 'Pete';

console.log(user.name);

delete user.name;

console.log(user.name); */

/* let schedule = {};

alert(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

alert(isEmpty(schedule)); // false

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
} */

/* let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;

for (let key in salaries) {
  let number = salaries[key];
  // console.log(number);
  sum += number;
}
console.log(sum);
 */

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

function multiplyNumeric(obj) {
  for (let key in obj) {
        let objVal = obj[key];

        if(typeof(objVal) !== 'string') console.log(objVal * 2);  
        else console.log(objVal);

  }
}

let multi = multiplyNumeric(menu);
