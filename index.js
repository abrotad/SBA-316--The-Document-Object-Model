const question = document.querySelector(".question");
const answerInput = document.getElementById("answer");
const feedback = document.querySelector(".feedback");

const questions = [
  { question: "2 + 2", answer: "4" },
  { question: "18 - 9", answer: "9" },
  { question: "5 * 6", answer: "30" },
  { question: "25 / 5", answer: "5" },
];

let currentQuestionIndex = 0;
let correctAnswers = 0;

function displayQuestion() {
  question.textContent = questions[currentQuestionIndex].question;
  answerInput.value = "";
  feedback.textContent = "";
}

function checkAnswer() {
  const userAnswer = answerInput.value.trim();
  const correctAnswer = questions[currentQuestionIndex].answer;

  if (userAnswer === correctAnswer) {
    feedback.textContent = "Correct!";
    correctAnswers++;
  } else {
    feedback.textContent = "Incorrect. The correct answer is: " + correctAnswer;
  }

  // Move to the next question or end the quiz
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    question.textContent = "Quiz Complete";
    answerInput.style.display = "none";

    if (correctAnswers === questions.length) {
      feedback.textContent = "Congratulations! You are a math guru!";
    } else {
      feedback.textContent = `You answered ${correctAnswers} out of ${questions.length} questions correctly.`;
    }
  }
}

displayQuestion();
