const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const startBtn = document.getElementById("getQuestion");
const quesContainer = document.getElementById("question-container");
let scoreElement = document.getElementById("score");
let outOf = document.getElementById("outOf");

let userAnswer;
let currentAnswer;
let currentScore = 0;

yesBtn.addEventListener("click", () => {
  checkAnswer(1);
});

noBtn.addEventListener("click", () => {
  checkAnswer(0);
});

function checkAnswer(answer = false) {
  userAnswer = answer === 1 ? "yes" : "no";
  console.log(userAnswer);
  finalAnswer(currentAnswer, askQuestion);
}
startBtn.addEventListener("click", askQuestion);

let questions = [
  { question: "Is 5 greater than 3?", answer: "yes" },
  { question: "Is 10 less than 5?", answer: "no" },
  { question: "Is 'Jee' equal to 'jee'?", answer: "no" },
  { question: "Is 0 a positive number?", answer: "no" },
  { question: "Is JavaScript a programming language?", answer: "yes" },
  { question: "Is 100 divided by 4 equal to 25?", answer: "yes" },
  { question: "Is the sky green?", answer: "no" },
  { question: "Is 7 an odd number?", answer: "yes" },
  { question: "Does 'Hello' === 'hello'?", answer: "no" },
  { question: "Is 2 + 2 equal to 5?", answer: "no" },
  { question: "Is water wet?", answer: "yes" },
  { question: "Is 15 less than 10?", answer: "no" },
  { question: "Is 8 divisible by 2?", answer: "yes" },
  { question: "Is the opposite of hot cold?", answer: "yes" },
  { question: "Is 3 * 3 equal to 9?", answer: "yes" },
  { question: "Is 'dog' longer than 'cat'?", answer: "no" },
  { question: "Is 50 greater than or equal to 50?", answer: "yes" },
  { question: "Is -1 a positive number?", answer: "no" },
];

function outof() {
  outOf.textContent = questions.length;
}

outof();

function askQuestion() {
  let randomizer = Math.floor(Math.random() * questions.length);
  quesContainer.textContent = questions[randomizer].question;
  currentAnswer = questions[randomizer].answer;
}

function finalAnswer(answer, reroll) {
  if (userAnswer !== answer) {
    alert("Wrong");
    reroll();
  } else {
    alert("Correct");
    ++currentScore;
    scoreElement.textContent = currentScore;
    reroll();
  }
}
