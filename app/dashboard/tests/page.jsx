"use client";
import React, { useEffect, useState } from "react";

const Tests = ({ userName, userPhone }) => {
  const [testHistory, setTestHistory] = useState([]);

  useEffect(() => {
    // Replace this with actual API call
    // Example: fetch(`/api/tests?name=${userName}&phone=${userPhone}`)
    const fetchTests = async () => {
      const data = [
        {
          id: 1,
          questionSet: "Math Test 1",
          date: "2025-07-01",
          score: 85,
        },
        {
          id: 2,
          questionSet: "English Test 1",
          date: "2025-06-25",
          score: 78,
        },
        {
          id: 3,
          questionSet: "Science Test 1",
          date: "2025-06-20",
          score: 90,
        },
      ];

      setTestHistory(data);
    };

    fetchTests();
  }, [userName, userPhone]);

  return (
    <div className="p-4 md:p-8 min-h-screen bg-gray-50 text-gray-900">
      <h1 className="text-2xl md:text-3xl font-semibold mb-6 text-center md:text-left">
        Test History
      </h1>

      {testHistory.length === 0 ? (
        <p className="text-center text-gray-700 text-sm md:text-base">
          No tests found for this student.
        </p>
      ) : (
        <div className="overflow-x-auto rounded shadow-md bg-white">
          <table className="min-w-full table-auto border-collapse border border-gray-300 text-sm md:text-base">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="border border-gray-300 px-3 md:px-4 py-2 text-left">
                  Question Set
                </th>
                <th className="border border-gray-300 px-3 md:px-4 py-2 text-left">
                  Date
                </th>
                <th className="border border-gray-300 px-3 md:px-4 py-2 text-left">
                  Score
                </th>
              </tr>
            </thead>
            <tbody>
              {testHistory.map(({ id, questionSet, date, score }) => (
                // console.log(date)
                <tr
                  key={id}
                  className="even:bg-gray-100 hover:bg-gray-50 transition"
                >
                  <td className="border border-gray-300 px-3 md:px-4 py-2">
                    {questionSet}
                  </td>
                  <td className="border border-gray-300 px-3 md:px-4 py-2">
                    {date}
                  </td>
                  <td className="border border-gray-300 px-3 md:px-4 py-2">
                    {score}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Tests;
