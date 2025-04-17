const quizData = [
    {
      question: "What does JS stand for?",
      options: ["JavaScript", "JustScript", "JavaSyntax", "JsonScript"],
      answer: "JavaScript"
    },
    {
      question: "Which symbol is used for comments in JS?",
      options: ["<!-->", "//", "/* */", "#"],
      answer: "//"
    },
    {
      question: "What is a closure?",
      options: ["An object", "A function inside a function", "A class", "None"],
      answer: "A function inside a function"
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const nextBtn = document.getElementById("next-btn");
  const scoreEl = document.getElementById("score");
  
  function loadQuestion() {
    resetState();
    const q = quizData[currentQuestion];
    questionEl.textContent = q.question;
  
    q.options.forEach(option => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.classList.add("option-btn");
      btn.addEventListener("click", () => checkAnswer(btn, q.answer));
      optionsEl.appendChild(btn);
    });
  }
  
  function resetState() {
    optionsEl.innerHTML = "";
    nextBtn.style.display = "none";
    scoreEl.textContent = "";
  }
  
  function checkAnswer(button, correctAnswer) {
    const allButtons = document.querySelectorAll(".option-btn");
    allButtons.forEach(btn => btn.disabled = true);
  
    if (button.textContent === correctAnswer) {
      button.classList.add("correct");
      score++;
    } else {
      button.classList.add("wrong");
      allButtons.forEach(btn => {
        if (btn.textContent === correctAnswer) btn.classList.add("correct");
      });
    }
  
    nextBtn.style.display = "inline-block";
  }
  
  nextBtn.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showScore();
    }
  });
  
  function showScore() {
    questionEl.textContent = "Quiz Completed!";
    optionsEl.innerHTML = "";
    nextBtn.style.display = "none";
    scoreEl.textContent = `Your Score: ${score} / ${quizData.length}`;
  }
  
  loadQuestion(); // ✅ Initial load
  