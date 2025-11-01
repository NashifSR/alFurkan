"use client";

import React, { useState, useEffect } from "react";
import useShortQuestions from "@/app/Hooks/useShortQuestions";
import ButtonDesigns from "@/app/Components/ButtonDesigns";

const QuestionPage = ({ params }) => {
  const { category: cat } = React.use(params);
  const { shortQuestions } = useShortQuestions();
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [randomQuestions, setRandomQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [timePerQuestion, setTimePerQuestion] = useState(60); // default 1 minute
  const [timeLeft, setTimeLeft] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const categoryQuestions = shortQuestions?.[cat] || [];
  const units = [...new Set(categoryQuestions.map((q) => q.unit))];

  // Pick max 10 random questions
  const getRandomQuestions = (questions) => {
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 10);
  };

  const handleUnitSelect = (unit) => {
    setSelectedUnit(unit);
    const unitQuestions = categoryQuestions.filter((q) => q.unit === unit);
    const randomQs = getRandomQuestions(unitQuestions);
    setRandomQuestions(randomQs);
    setAnswers({});
    setQuizStarted(false);
    setQuizSubmitted(false);
    setTimeLeft(timePerQuestion * randomQs.length); // total timer
  };

  const handleAnswerChange = (id, value) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  // Total timer logic
  useEffect(() => {
    if (!quizStarted || randomQuestions.length === 0 || quizSubmitted) return;
    if (timeLeft === 0) {
      setQuizStarted(false);
      return;
    }

    const timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, quizStarted, randomQuestions, quizSubmitted]);

  const startQuiz = () => {
    setQuizStarted(true);
    setTimeLeft(timePerQuestion * randomQuestions.length);
  };

  const submitQuiz = () => {
    setQuizSubmitted(true);
    setQuizStarted(false);
  };

  return (
    <div className="min-h-screen p-8 text-black flex flex-col items-center gap-8">
      <h1 className="text-2xl font-semibold mb-6 capitalize">
        {cat} - Questions
      </h1>

      {/* Unit selection */}
      <div className="flex flex-wrap gap-4 mb-6">
        {units.map((unit) => (
          <ButtonDesigns
            key={unit}
            label={unit}
            variant={selectedUnit === unit ? "primary" : "soft"}
            onClick={() => handleUnitSelect(unit)}
          />
        ))}
      </div>

      {/* Time selection */}
      {selectedUnit && !quizStarted && !quizSubmitted && (
        <div className="flex flex-col items-center mb-6 gap-4">
          <p>Select time per question:</p>
          <div className="flex gap-4">
            {[60, 90, 120, 180].map((sec) => (
              <ButtonDesigns
                key={sec}
                label={`${sec / 60} min`}
                variant={timePerQuestion === sec ? "primary" : "soft"}
                onClick={() => setTimePerQuestion(sec)}
              />
            ))}
          </div>
          <ButtonDesigns label="Start Quiz" variant="success" onClick={startQuiz} />
        </div>
      )}

      {/* Questions display */}
      {quizStarted && randomQuestions.length > 0 && (
        <div className="w-full max-w-2xl space-y-6">
          <p className="font-semibold text-right">
            Time left: {Math.floor(timeLeft / 60)}:
            {String(timeLeft % 60).padStart(2, "0")}
          </p>

          {randomQuestions.map((q, index) => (
            <div key={q.id} className="border p-4 rounded shadow bg-white">
              <p className="font-semibold">
                Q{index + 1} (ID: {q.id}): {q.question}
              </p>
              <textarea
                className="mt-2 w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                rows={3}
                placeholder="Type your answer here..."
                value={answers[q.id] || ""}
                onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                disabled={quizSubmitted}
              />
            </div>
          ))}

          {/* Submit Button */}
          {!quizSubmitted && (
            <div className="flex justify-center mt-4">
              <ButtonDesigns label="Submit Quiz" variant="success" onClick={submitQuiz} />
            </div>
          )}
        </div>
      )}

      {/* After submission */}
      {quizSubmitted && (
        <div className="mt-6 p-4 border rounded bg-green-100 w-full text-center">
          <h2 className="text-xl font-semibold mb-2">Quiz Submitted!</h2>
          <p>You answered {Object.keys(answers).length} questions.</p>
        </div>
      )}
    </div>
  );
};

export default QuestionPage;
