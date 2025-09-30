/* function delayedGreet(name) {
  return new Promise((resolve, reject) => {
    if (name !== undefined) {
      return setTimeout(() => {
        resolve(`Hello, ${name}`);
      }, 2000);
    }
    reject("Error: Name is required!");
  });
}

delayedGreet("Jee")
  .then((data) => {
    console.log(data);
  })
  .catch((data) => {
    console.log(data);
  }); */

fetch("https://dog.ceo/api/breed/bulldog/images")
.then(data => data.json())
.then(data => console.log(data));

