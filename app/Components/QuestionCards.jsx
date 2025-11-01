import React from 'react'

const QuestionCards = ({ question, index, selectedOption, onSelect }) => {
  return (
    <div className="border p-4 rounded shadow bg-white">
    <p className="font-semibold mb-3">Q{index + 1}: {question.question}</p>
    <div className="space-y-2">
      {question.options.map((option, i) => (
        <label key={i} className="flex items-center space-x-2 cursor-pointer">
          <input
            type="radio"
            name={`question-${question.id}`}
            value={option}
            checked={selectedOption === option}
            onChange={() => onSelect(question.id, option)}
            className="form-radio"
          />
          <span>{option}</span>
        </label>
      ))}
    </div>
  </div>
  )
}

export default QuestionCards

