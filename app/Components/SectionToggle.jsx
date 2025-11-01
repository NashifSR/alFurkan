"use client";

import React, { useState, useEffect } from "react";

const SectionToggle = ({ options = ["Answers", "Tests"], defaultSection = "answers", onChange }) => {
  const [selected, setSelected] = useState(defaultSection);

  const handleClick = (option) => {
    const lowerOption = option.toLowerCase();
    setSelected(lowerOption);
    if (onChange) onChange(lowerOption); // notify parent
  };

  return (
    <div className="flex gap-4 mb-8">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => handleClick(option)}
          className={`px-4 py-2 rounded font-semibold shadow transition-colors duration-200 ${
            selected === option.toLowerCase()
              ? option.toLowerCase() === "answers"
                ? "bg-green-400 text-white"
                : "bg-blue-400 text-white"
              : option.toLowerCase() === "answers"
              ? "bg-green-100 text-black hover:bg-green-200"
              : "bg-blue-100 text-black hover:bg-blue-200"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default SectionToggle;
