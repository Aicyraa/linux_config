// userStorage = JSON.parse(localStorage.getItem("Users"));
const list = document.querySelector(".list");
let userStorage = [];
let id = 0;
loadUser();

// tempo
function reset() {
  localStorage.removeItem("id");
  id = 0;
}

document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".modal-container").classList.toggle("show");
  });
});

document.querySelector("#submit").addEventListener("click", () => {
  const name = document.getElementById("name");
  const age = document.getElementById("age");
  const bday = document.getElementById("bday");
  const gender = document.getElementById("gender");
  const status = document.getElementById("status");
  let savedID = localStorage.getItem("id");

  let idExist = false;
  if (savedID !== null) idExist = true;

  let new_user = processUser(
    name.value,
    +age.value,
    bday.value,
    gender.value,
    status.value,
    idExist
  );

  let append_user = displayUser(new_user);
  list.append(append_user);
  localStorage.setItem("users", JSON.stringify(new_user)); // saves the new_data array to local storage
});

function processUser(
  name = "Anonymous",
  age = "Private",
  birthday,
  gender,
  status,
  idExist
) {
  let isAdult;

  if (!idExist) {
    id++;
    localStorage.setItem("id", id);
    idExist = true;
  }

  id = localStorage.getItem("id");

  if (age < 18) isAdult = "Minor";
  else if (age >= 18 && age <= 20) isAdult = "Young Adult";
  else isAdult = "Adult";

  // passed the variables as arg to MakeUser function
  let new_user = new MakeUser(id, name, age, birthday, gender, status, isAdult);

  if (idExist) {
    id++;
    localStorage.setItem("id", id);
  }

  userStorage.push(new_user);

  return userStorage;
}

// function to load users every refresh
function loadUser() {
  let div;
  let savedData = JSON.parse(localStorage.getItem("users"));
  userStorage = savedData || [];
  if (savedData !== null) {
    savedData.forEach((data) => {
      div = document.createElement("div");
      div.classList.add("data", `data-${data.userID}`);

      div.innerHTML = `
      <div class="id" data-id="${data.userID}">${data.userID}</div>
      <div class="username" data-name="${data.name}">${data.name}</div>
      <div class="age" data-age="${data.age}"}>${data.age}</div>
      <div class="bday">${data.birtday}</div>
      <div class="gender" data-gender="${data.gender}"}>${data.gender}</div>
      <div class="status" data-status="${data.status}"}>${data.status}</div>
      <div class="isAdult" data-status="${data.isAdult}"}>${data.isAdult}</div>
      `;

      list.append(div);
    });
  } else {
    console.log("No data saved");
  }
}

// displays the user
function displayUser(data) {
  let div;
  for (let i = 0; i < data.length; i++) {
    div = document.createElement("div");
    div.classList.add("data", `data-${i + 1}`);

    div.innerHTML = `
    <div class="id" data-id="${data[i].userID}">${data[i].userID}</div>
    <div class="username" data-name="${data[i].name}">${data[i].name}</div>
    <div class="age" data-age="${data[i].age}"}>${data[i].age}</div>
    <div class="bday">${data[i].birtday}</div>
    <div class="gender" data-gender="${data[i].gender}"}>${data[i].gender}</div>
    <div class="status" data-status="${data[i].status}"}>${data[i].status}</div>
    <div class="isAdult" data-is-adult="${data[i].isAdult}"}>${data[i].isAdult}</div>
    `;
  }

  return div;
}

// construtor for users
function MakeUser(id, name, age, birtday, gender, status, isAdult) {
  this.userID = id;
  this.name = name;
  this.age = age;
  this.birtday = birtday;
  this.gender = gender;
  this.status = status;
  this.isAdult = isAdult;
}

const search = document.querySelector("#search");

search.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  const datas = document.querySelectorAll(".data");

  datas.forEach((data) => {
    const allData = Object.values(data.children)
    if (allData.includes(value)) {
      data.style.display = "flex"; // show
    } else {
      data.style.display = "none"; // hide
    }
  });
});
