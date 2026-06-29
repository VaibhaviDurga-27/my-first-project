const quiz = [
    {
      question: "What is the capital of India?",
      answers: ["Delhi", "Mumbai", "Chennai", "Hyderabad"],
      correct: "Delhi"
    },
    {
      question: "HTML stands for?",
      answers: [
        "Hyper Text Markup Language",
        "High Text Machine Language",
        "Home Tool Markup Language",
        "Hyper Tool Machine Language"
      ],
      correct: "Hyper Text Markup Language"
    },
    {
      question: "Which language is used for styling web pages?",
      answers: ["Python", "Java", "CSS", "C++"],
      correct: "CSS"
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionEl = document.getElementById("question");
  const answersEl = document.getElementById("answers");
  const nextBtn = document.getElementById("nextBtn");
  const scoreEl = document.getElementById("score");
  
  function loadQuestion() {
  
    answersEl.innerHTML = "";
  
    const q = quiz[currentQuestion];
    questionEl.textContent = q.question;
  
    q.answers.forEach(answer => {
      const btn = document.createElement("button");
  
      btn.textContent = answer;
      btn.classList.add("answer-btn");
  
      btn.onclick = () => {
  
        if (answer === q.correct) {
          score++;
        }
  
        nextBtn.style.display = "block";
  
        document
          .querySelectorAll(".answer-btn")
          .forEach(b => b.disabled = true);
      };
  
      answersEl.appendChild(btn);
    });
  
    nextBtn.style.display = "none";
  }
  
  nextBtn.onclick = () => {
  
    currentQuestion++;
  
    if (currentQuestion < quiz.length) {
      loadQuestion();
    } else {
  
      questionEl.textContent = "Quiz Finished!";
      answersEl.innerHTML = "";
  
      scoreEl.textContent =
        `Your Score: ${score} / ${quiz.length}`;
  
      nextBtn.style.display = "none";
    }
  };
  
  loadQuestion();