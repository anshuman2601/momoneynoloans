import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
export const quiz = {
  topic: "Javascript",
  level: "Beginner",
  totalQuestions: 4,
  perQuestionScore: 5,
  questions: [
    {
      question: "1. Being on a budget means:",
      choices: [
        "a. You pay bills every month at the due date",
        "b. You made a plan of your expenses to be less than or equal to your income ",
        "c. You are earning enough money to be able to live well",
        "d. Your bills are generally paid by every due date",
      ],
    
      correctAnswer:
        "b. You made a plan of your expenses to be less than or equal to your income ",
    },
    {
      question: "2. What is considered an excellent credit score?",
      choices: [
        "a. 700 to 850 ",
        "b. 500 to 560",
        "c. 561 to 600",
        "d. 1000 to 1500",
      ],
      
      correctAnswer: "a. 700 to 850 ",
    },
    {
      question: "3. Which is a method to fund your college education?",
      choices: [
        "a. Apply for financial aid using the FAFSA and TAP applications",
        "b. Seek out less expensive college alternatives",
        "c. Seek out college scholarships",
        "d. All of the above",
      ],
      
      correctAnswer: "d. All of the above",
    },
    {
      question: "4. What is not a method to improve your credit score?",
      choices: [
        "a. Pay all your bills on time",
        "b. Maintain your older credit cards",
        "c. Keep your credit card balances under 30% of your credit limit",
        "d. Always pay in cash and do not get any credit cards",
      ],
      
      correctAnswer: "d. Always pay in cash and do not get any credit cards",
    },
  ],
};

const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const { questions } = quiz;
  const { question, choices, correctAnswer } = questions[activeQuestion];

  const onClickNext = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
  };

  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
    } else {
      setSelectedAnswer(false);
    }
  };

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

  return (
    <div>
      <Navbar />
      <main role="main" class="container">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto mt-5">
              <div className="card">
                <div className="card-header">
                  <h1 className="h3 mb-0">
                    <div>
                      <span className="active-question-no">
                        {addLeadingZero(activeQuestion + 1)}
                      </span>
                      <span className="total-question">
                        /{addLeadingZero(questions.length)}
                      </span>
                    </div>
                  </h1>
                </div>
                <div className="card-body">
                  <div className="quiz-container">
                    {!showResult ? (
                      <div>
                        <h2>{question}</h2>

                        <div class="list-group list-group-light">
                          {choices.map((answer, index) => (
                            <div key={index}>
                              <label>
                            <input 
                              type="radio"
                              name="answer"
                              value={answer}
                              onClick={() => onAnswerSelected(answer, index)}
                              checked={selectedAnswerIndex === index}
                            />
                            {answer}
                          </label><br /><br />
                            </div>
                          ))}
                        </div>

                        <br />
                        <div className="flex-right">
                          <button
                            className="btn btn-primary"
                            onClick={onClickNext}
                            disabled={selectedAnswerIndex === null}
                          >
                            {activeQuestion === questions.length - 1
                              ? "Finish"
                              : "Next"}
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="result">
                        <h3>Result</h3>
                        <p>
                          Total Question: <span>{questions.length}</span>
                        </p>
                        <p>
                          Total Score:<span> {result.score}</span>
                        </p>
                        <p>
                          Correct Answers:<span> {result.correctAnswers}</span>
                        </p>
                        <p>
                          Wrong Answers:<span> {result.wrongAnswers}</span>
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Quiz;
