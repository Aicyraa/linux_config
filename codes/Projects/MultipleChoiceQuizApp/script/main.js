const startBtn = document.querySelector("#start");
const chs_container = document.querySelector(".chs_container");
const qst_container = document.querySelector(".qst_container");
const quiz_container = document.getElementById("quiz-container");
const main_container = document.querySelector(".container");
const currentQst = JSON.parse(localStorage.getItem("currentQst"));
const addQuesBtn = document.getElementById("addQues");
const sidebar_container = document.querySelector(".sidebar_container");

let currentScore = 0;
let totalQuestions = 0;

function Question(question, choices) {
  this.question = question;
  this.choices = choices.map((choice, index) => {
    return {
      chs: choice.text,
      key: choice.isCorrect ? "zb1r2" : "z3b1r2",
    };
  });
}

let completedQuestions =
  JSON.parse(localStorage.getItem("completedQuestions")) || [];

const loadCurrentQst = (qst) => {
  startBtn.classList.add("hide");
  startBtn.classList.remove("big-btn");
  main_container.classList.remove("hide");

  qst_container.innerHTML = "";
  chs_container.innerHTML = "";

  let p = document.createElement("p");
  p.textContent = qst.question;
  qst_container.append(p);

  qst.choices.forEach((choice) => {
    let div = document.createElement("div");
    div.setAttribute("class", "choices");
    div.textContent = choice.chs;
    div.dataset.key = choice.key;

    div.addEventListener("click", (e) => {
      startBtn.classList.remove("hide");
      startBtn.textContent = "Next Question";
      startBtn.classList.remove("big-btn");
      return ansChecker(e);
    });

    chs_container.append(div);
  });
};

if (currentQst !== null) {
  loadCurrentQst(currentQst);
} else {
  startBtn.classList.add("big-btn");
  main_container.classList.add("hide");
}

startBtn.addEventListener("click", () => {
  main_container.classList.remove("hide");
  localStorage.removeItem("currentQst");
  qst_container.innerHTML = "";
  chs_container.innerHTML = "";
  document.querySelector(".container").style.flexDirection = "column";

  let value = renderQst(questions);
});

const renderQst = (qst) => {
  startBtn.classList.add("hide");
  startBtn.classList.remove("big-btn");

  let elements = makeElement(qst);
  elements.forEach((el) => {
    if (el.tagName === "P") {
      qst_container.append(el);
    } else {
      el.addEventListener("click", (e) => {
        startBtn.classList.toggle("hide");
        startBtn.textContent = "Next Question";
        startBtn.classList.remove("big-btn");
        return ansChecker(e);
      });
      chs_container.append(el);
    }
  });
};

let storage = [];

const makeElement = (qst) => {
  let collection = [];
  let p = document.createElement("p");
  const qst_random = randomizer(qst, storage, completedQuestions);

  if (qst_random === -1) {
    p.textContent = "You've completed all available questions!";
    p.style.textAlign = "center";
    p.style.width = "100%";
    collection.push(p);
    startBtn.classList.remove("hide");
    startBtn.textContent = "Restart Quiz";
    startBtn.classList.remove("big-btn");
    startBtn.onclick = resetQuiz;

    main_container.classList.add("hide");

    return collection;
  }

  totalQuestions++;
  const selectedQst = qst[qst_random];
  p.textContent = selectedQst.question;
  collection.push(p);

  localStorage.setItem("currentQst", JSON.stringify(selectedQst));

  for (let j = 0; j < selectedQst.choices.length; j++) {
    let choices = selectedQst.choices[j].chs;
    let key = selectedQst.choices[j].key;
    let div = document.createElement("div");

    div.setAttribute("class", "choices");
    div.textContent = choices;
    div.dataset.key = key;

    collection.push(div);
  }

  return collection;
};

const ansChecker = (e) => {
  const isCorrect = e.target.dataset.key === "zb1r2";

  if (isCorrect) {
    e.target.classList.add("correct");
    currentScore++;
  } else {
    e.target.classList.add("wrong");

    const allChoices = document.querySelectorAll(".choices");
    allChoices.forEach((ele) => {
      if (ele.dataset.key === "zb1r2") {
        ele.classList.add("correct");
      }
    });
  }

  const currentQuestion = JSON.parse(localStorage.getItem("currentQst"));
  if (currentQuestion) {
    completedQuestions.push(currentQuestion.question);
    localStorage.setItem(
      "completedQuestions",
      JSON.stringify(completedQuestions)
    );
  }

  localStorage.removeItem("currentQst");
};

const randomizer = (questions, storage, completedQuestions) => {
  const availableQuestions = questions.filter(
    (q) =>
      !completedQuestions.includes(q.question) && !storage.includes(q.question)
  );

  if (availableQuestions.length === 0) {
    return -1;
  }

  const randomIndex = Math.floor(Math.random() * availableQuestions.length);
  const selectedQuestion = availableQuestions[randomIndex];

  const originalIndex = questions.findIndex(
    (q) => q.question === selectedQuestion.question
  );

  storage.push(selectedQuestion.question);

  return originalIndex;
};

function resetQuiz() {
  completedQuestions = [];
  localStorage.setItem(
    "completedQuestions",
    JSON.stringify(completedQuestions)
  );
  storage = [];
  saveScore(currentScore, totalQuestions);

  currentScore = 0;
  totalQuestions = 0;

  startBtn.textContent = "Start";
  startBtn.classList.add("big-btn");
  startBtn.onclick = null;
  qst_container.innerHTML = "";
  chs_container.innerHTML = "";

  main_container.classList.add("hide");
}

function saveScore(score, total) {
  const scores = JSON.parse(localStorage.getItem("quizScores")) || [];
  const timestamp = new Date().toLocaleString();

  scores.push({
    score: score,
    total: total,
    timestamp: timestamp,
  });

  localStorage.setItem("quizScores", JSON.stringify(scores));
  updateScoreSidebar();
}

function updateScoreSidebar() {
  const scores = JSON.parse(localStorage.getItem("quizScores")) || [];
  sidebar_container.innerHTML = "";

  scores.forEach((scoreData) => {
    const scoreDiv = document.createElement("div");
    scoreDiv.className = "item score";
    scoreDiv.textContent = `${scoreData.score}/${scoreData.total}`;

    const timeDiv = document.createElement("div");
    timeDiv.className = "item time";
    timeDiv.textContent = scoreData.timestamp;

    sidebar_container.appendChild(scoreDiv);
    sidebar_container.appendChild(timeDiv);
  });
}
updateScoreSidebar();

addQuesBtn.addEventListener("click", () => {
  document.getElementById("question-modal").style.display = "flex";
});
