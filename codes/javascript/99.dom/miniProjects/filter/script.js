class Student {
  constructor(name, age, course) {
    this.name = name;
    this.age = age;
    this.course = course;
  }

  sayHi() {
    console.log(`
        Name: ${this.name}
        Age: ${this.age}
        Course: ${this.course}
        `);
  }
}


let storage = []

while (true) {
  let name = prompt('Enter name: ');
  let age = +prompt('Age: ', 0)
  let course = prompt('Course: ', )

  if(name == null || age == 0 || course == null) break

  let new_student = new Student(name, age, course)
  storage.push(new_student)
}

console.log(storage);

let search_input = document.querySelector('#search');

search_input.addEventListener('input', e => {
    console.log(e.target.value);
    
  storage.filter(data => {
       if(data.name == e.target.value ||
          data.age == e.target.value ||
          data.course == e.target.value
       ) {
          console.log(data);
          
       }
    })
})