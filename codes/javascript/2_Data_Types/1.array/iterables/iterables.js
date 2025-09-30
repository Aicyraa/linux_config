let range = {
  from: 1,
  to: 10,

  // ver 2
  /*  
    same lang sa baba pero eto naman sa loob ng range object mismo
    cons nya is isang for of loop lang mag eexecute  
    [Symbol.iterator]() {
  
    return {
      current: this.from,
      return this; // ung range object na irereturn nya kasi asa loob naman nya ung next() unlike sa baba na wala sakanya ung next
    },
      next() {
        if (this.current <= this.last) {
          return { done: false, value: this.current++ }; // done = false means d pa tapos ung loop
        } else {
          return { done: true }; // means the loops is finished
        }
      },
    };
  }, */
};

range[Symbol.iterator] = function () {
  // 1. tatawagin ni for..of etong iterator (L6)
  // dapat mag return sya ng object

  // 2. sa object na nireturn ni iterator, dun na mag wwork si for..of
  return {
    current: this.from,
    last: this.to,

    // 3. next () evey iteration tatawagin ni for..of etong next() method
    next() {
      // 4. dapat mag return ng value na naka object
      if (this.current <= this.last) {
        return { done: false, value: this.current++ }; // done = false means d pa tapos ung loop
      } else {
        return { done: true }; // means the loops is finished
      }
    },
  };
};

for (let num of range) {
  console.log(num);
}

// for..of works in strings kasi built in iterables sya

let str = "Hello"

for(let char of str){
  console.log(char);
}

// array likes are objects that has index and length, it doesnt have an pop push, etc not a real array no array method
// iterables has a built in Symbol.iterator.,