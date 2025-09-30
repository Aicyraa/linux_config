const proceedBtn = document.getElementById("Proceed");
const overlay = document.querySelector(".username_overlay");
const userDisplay = document.getElementById("user");
const mainContainer = document.querySelector('.container');
const quizContainer = document.getElementById('quiz-container');
const checkUser = localStorage.getItem("user");
const user = document.getElementById("user");;
const viewScoreBtn = document.getElementById("viewScore");
const sidebar = document.querySelector(".sidebar_score");
const closeSidebarBtn = document.querySelector(".close-sidebar");

if (checkUser === null) {
  proceedBtn.addEventListener("click", () => {
    const name = document.getElementById("username");

    if (name.value.trim() !== "" && name.value.trim().length <= 15) {
      localStorage.setItem("user", username.value.trim());
      user.textContent = name.value;
      overlay.classList.add("start");
      mainContainer.classList.add('hide');
      user.value = "";
    } else {
      return alert("Enter your name!");
    }
  });
} else {
  overlay.classList.add("start");
  user.textContent = checkUser;
  mainContainer.classList.add('hide');
}

viewScoreBtn.addEventListener("click", () => {
    sidebar.classList.toggle('expand');
});

closeSidebarBtn.addEventListener("click", () => {
    sidebar.classList.remove('expand');
});
