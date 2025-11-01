import React from "react";

export default function DashboardPage() {
  const studentData = {
    name: "Student Name",
    joiningDate: "2025-10-31",
    batchName: "Batch A - Morning",
    testsTaken: 5,
    coursesEnrolled: 3,
  };

  // Convert studentData into array for info cards
  const infoCards = [
    { title: "Joining Date", content: studentData.joiningDate },
    { title: "Batch Name", content: studentData.batchName },
    { title: "Tests Taken", content: studentData.testsTaken },
    { title: "Courses Enrolled", content: studentData.coursesEnrolled },
  ];

  return (
    <div className="p-8 min-h-screen bg-gray-50 text-gray-900">
      <h1 className="text-3xl font-semibold mb-8">
        Welcome, {studentData.name}!
      </h1>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {infoCards.map((item) => (
          <div key={item.title} className="rounded p-6 bg-white shadow-md">
            <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
            <p>{item.content}</p>
          </div>
        ))}
      </div>

      {/* Placeholder for future components */}
      <div className="rounded p-6 text-center bg-white shadow-md text-gray-600">
        More dashboard components will load here when data is available.
      </div>
    </div>
  );
}
