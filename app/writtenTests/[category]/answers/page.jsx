"use client";

import React, { useState } from "react";
import useShortQuestions from "@/app/Hooks/useShortQuestions";
import ButtonDesigns from "@/app/Components/ButtonDesigns";
import SearchBox from "@/app/Components/SearchBox";

const WrittenAnswerPage = ({ params }) => {
  const { category: cat } = React.use(params);
  const { shortQuestions } = useShortQuestions();
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [showEnglish, setShowEnglish] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const categoryQuestions = shortQuestions?.[cat] || [];
  const units = [...new Set(categoryQuestions.map(q => q.unit))];

  const filteredQuestions = selectedUnit
    ? categoryQuestions.filter(q => q.unit === selectedUnit)
    : [];

  const searchedQuestions = filteredQuestions.filter(q =>
    q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    q.id.toString() === searchQuery
  );

  return (
    <div className="min-h-screen p-8 text-black flex flex-col items-center">
      <h1 className="text-2xl font-semibold mb-6 capitalize">
        {cat} - Written Questions
      </h1>

      {/* Unit buttons */}
      <div className="flex flex-wrap gap-4 mb-6">
        {units.map(unit => (
          <ButtonDesigns
            key={unit}
            label={unit}
            variant={selectedUnit === unit ? "primary" : "soft"}
            onClick={() => setSelectedUnit(unit)}
          />
        ))}
      </div>

      {/* Search box */}
      {selectedUnit && (
        <SearchBox
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search by question or ID..."
          onClear={() => setSearchQuery("")}
        />
      )}

      {/* Language toggle */}
      {selectedUnit && (
        <div className="mb-6">
          <ButtonDesigns
            label={`Show ${showEnglish ? "Bangla" : "English"} Answers`}
            variant="outline"
            onClick={() => setShowEnglish(!showEnglish)}
          />
        </div>
      )}

      {/* Questions */}
      <div className="w-full max-w-2xl space-y-4">
        {searchedQuestions.length > 0 ? (
          searchedQuestions.map((q, index) => (
            <div key={q.id} className="border p-4 rounded shadow bg-white">
              <p className="font-semibold">
                Q{index + 1} (ID: {q.id}): {q.question}
              </p>
              <div className="mt-2 text-gray-700">
                <p>
                  <strong>Answer ({showEnglish ? "EN" : "BN"}):</strong>{" "}
                  {showEnglish ? q.answer.en : q.answer.bn}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No questions found.</p>
        )}
      </div>
    </div>
  );
};

export default WrittenAnswerPage;
