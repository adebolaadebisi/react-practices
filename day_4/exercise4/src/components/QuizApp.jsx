import React, { useState } from "react";
import Question from "./Question";
import ScoreBoard from "./ScoreBoard";
import AnswerFeedback from "./AnswerFeedback";
import "./QuizApp.css"

function QuizApp() {
  const questions = [
    {
      question: "What is the capital of Kaduna State?",
      options: ["Zaria", "Kaduna", "Kafanchan", "Kagoro"],
      answer: "Kaduna",
    },
    {
      question: "What is the capital of Anambra State?",
      options: ["Onitsha", "Awka", "Nnewi", "Aguata"],
      answer: "Awka",
    },
    {
      question: "What is the capital of Edo State?",
      options: ["Benin City", "Ekpoma", "Auchi", "Uromi"],
      answer: "Benin City",
    },
    {
      question: "What is the capital of Borno State?",
      options: ["Biu", "Maiduguri", "Chibok", "Gwoza"],
      answer: "Maiduguri",
    },
    {
      question: "What is the capital of Cross River State?",
      options: ["Calabar", "Ogoja", "Ikom", "Obudu"],
      answer: "Calabar",
    },
  ];
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isFinished, setIsFinished] = useState(false);
  const handleSubmit = () => {
    if (!selected) return;
    const isCorrect = selected === questions[current].answer;
    if (isCorrect) setScore(score + 1);
    setFeedback(isCorrect ? " Correct!" : " Wrong!");
    setTimeout(() => {
      if (current + 1 < questions.length) {
        setCurrent(current + 1);
        setSelected("");
        setFeedback("");
      } else {
        setIsFinished(true);
      }
    }, 1000);
  };
  const restartQuiz = () => {
    setCurrent(0);
    setScore(0);
    setSelected("");
    setFeedback("");
    setIsFinished(false);
  };
  if (isFinished) {
    return (
      <div className="quiz-container">
        <h2> Quiz Completed!</h2>
        <p>Your Final Score: {score}/{questions.length}</p>
        <button onClick={restartQuiz}>Restart Quiz</button>
      </div>
    );
  }
  return (
    <div className="quiz-container">
      <h2>Nigerian States Quiz</h2>
      <ScoreBoard score={score} total={questions.length} />
      <Question
        data={questions[current]}
        selected={selected}
        setSelected={setSelected}
      />
      <button onClick={handleSubmit}>Submit Answer</button>
      <AnswerFeedback feedback={feedback} />
    </div>
  );
}
export default QuizApp;
