let questions = [
  {
    question: "What is the capital of Japan?",
    choices: [
      { chs: "Beijing", key: 'z3b1r2' },
      { chs: "Seoul", key: 'z3b1r2' },
      { chs: "Tokyo", key: 'zb1r2' },
      { chs: "Bangkok", key: 'z3b1r2' },
    ],
  },
  {
    question: "Which continent is Brazil in?",
    choices: [
      { chs: "Europe", key: 'z3b1r2' },
      { chs: "Africa", key: 'z3b1r2' },
      { chs: "South America", key: 'zb1r2' },
      { chs: "Asia", key: 'z3b1r2' },
    ],
  },
  {
    question: "What ocean lies on the east coast of the United States?",
    choices: [
      { chs: "Pacific Ocean", key: 'z3b1r2' },
      { chs: "Atlantic Ocean", key: 'zb1r2' },
      { chs: "Indian Ocean", key: 'z3b1r2' },
      { chs: "Arctic Ocean", key: 'z3b1r2' },
    ],
  },
  {
    question: "Which country has the largest population?",
    choices: [
      { chs: "India", key: 'zb1r2' },
      { chs: "USA", key: 'z3b1r2' },
      { chs: "China", key: 'z3b1r2' },
      { chs: "Russia", key: 'z3b1r2' },
    ],
  },
  {
    question: "Which desert is the largest in the world?",
    choices: [
      { chs: "Gobi", key: 'z3b1r2' },
      { chs: "Sahara", key: 'zb1r2' },
      { chs: "Kalahari", key: 'z3b1r2' },
      { chs: "Thar", key: 'z3b1r2' },
    ],
  },
];


const savedQuestions = JSON.parse(localStorage.getItem("savedQuestions"));
if (savedQuestions) {
  questions = questions.concat(savedQuestions.filter(sq => !questions.some(q => q.question === sq.question)));
}

document.addEventListener("DOMContentLoaded", () => {
  const closeModal = document.querySelector(".close-modal");
  const addQuestionBtn = document.getElementById("add-question-btn");
  const questionModal = document.getElementById("question-modal");
  
  if (closeModal) {
    closeModal.addEventListener("click", () => {
      questionModal.style.display = "none";
    });
  }
  
  window.addEventListener("click", (e) => {
    if (e.target === questionModal) {
      questionModal.style.display = "none";
    }
  });
  
  if (addQuestionBtn) {
    addQuestionBtn.addEventListener("click", () => {
      const questionText = document.getElementById("new-question").value.trim();
      const choiceInputs = document.querySelectorAll(".choice-input");
      const correctAnswerRadio = document.querySelector('input[name="correct-answer"]:checked');
      
      if (!questionText) {
        alert("Please enter a question");
        return;
      }
      
      let allChoicesFilled = true;
      choiceInputs.forEach(input => {
        if (!input.value.trim()) {
          allChoicesFilled = false;
        }
      });
      
      if (!allChoicesFilled) {
        alert("Please fill in all choices");
        return;
      }
      
      const correctIndex = parseInt(correctAnswerRadio.value);
      
      const choices = [];
      choiceInputs.forEach((input, index) => {
        choices.push({
          text: input.value.trim(),
          isCorrect: index === correctIndex
        });
      });
      
      const newQuestion = new Question(questionText, choices);
      
      let currentlySaved = JSON.parse(localStorage.getItem("savedQuestions")) || [];
      
      currentlySaved.push(newQuestion);
      
      localStorage.setItem("savedQuestions", JSON.stringify(currentlySaved));

      questions.push(newQuestion);
      
      document.getElementById("new-question").value = "";
      choiceInputs.forEach(input => {
        input.value = "";
      });
      document.querySelector('input[name="correct-answer"][value="0"]').checked = true;
      
      questionModal.style.display = "none";
      
      alert("Question added successfully!");
    });
  }
});