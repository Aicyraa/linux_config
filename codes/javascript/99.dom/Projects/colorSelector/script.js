let btns = document.querySelectorAll(".item");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let id = e.target;
    let colInp = btn.querySelector("input").value;   
    console.log(id);

    if (e.target.tagName.toLowerCase() === "input") return;
    isEmpty(id, colInp, changeColor);
  });
});

let changeColor = (input, id) => id.style.backgroundColor = input;

let isEmpty = (id, inputs, func) => {
  if (inputs.length === 7 && inputs.length !== "") func(inputs, id);
  else alert("Fill inputs first");
};

