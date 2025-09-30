const text = document.querySelector("#text-result");
document.querySelector("#text-input").addEventListener("input", (e) => {
  text.textContent = e.target.value;

  // non-method
  let nonMethodCollection = changeNonMethod(e.target.value);
  const nonMethod = document.querySelectorAll(".nonMethod");
  for (let i = 0; i < nonMethodCollection.length; i++) {
    nonMethod[i].value = nonMethodCollection[i];
  }

  // with method
  let inputs = document.querySelectorAll(".numbers");
  let method = document.querySelectorAll(".methods");
  let storage = [];
  for (let vals of inputs) {
    storage.push(vals.value);
  }

  let methodCollection = changeMethods(e.target.value, storage);
  for (let i = 0; i < methodCollection.length; i++) {
    method[i].value = methodCollection[i];
  }
  console.log(methodCollection);
});

const changeNonMethod = (text) => {
  let text_collection = [];
  let length = text.length;
  let upper = text.toUpperCase();
  let lower = text.toLowerCase();
  text_collection.push(length, upper, lower);

  return text_collection;
};

const changeMethods = (text, val) => {
  let text_collection = [];

  let string_1 = text[val[0]];
  let string_2 = text.at(val[1]);
  let slice = text.slice(val[2], val[3]);
  let index = text.indexOf(val[4]);
  let includes = text.includes(val[5], val[6]);

  text_collection.push(string_1, string_2, slice, index, includes);

  return text_collection;
};
