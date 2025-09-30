const text = document.getElementById("text");
const load = document.querySelector(".loading");

document.querySelector("#btn").addEventListener("click", async (e) => {
  try {
    loader(load);
    let result = await fetch("https://api.adviceslip.com/advice");
    let data = await result.json();
    loader(load);
    text.innerHTML = data.slip.advice;
  } catch (e) {
    text.innerHTML = `An error has occured: Check your connection.`;
  }
});

function loader(load) {
  load.classList.toggle("show");
  text.innerHTML = "";
}
