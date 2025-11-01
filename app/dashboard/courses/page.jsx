'use client';
import React, { useEffect, useState } from 'react';

const MyCoursesPage = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  // Mock data
  const mockCourses = [
    {
      name: "Computer Operation Basics",
      duration: "4 weeks",
      mode: "Online",
      fee: "2500",
      totalClasses: 24,
      slug: "computer-operation-basics",
      month: "October",
      year: 2025,
    },
    {
      name: "Microsoft Office",
      duration: "6 weeks",
      mode: "Online",
      fee: "3000",
      totalClasses: 24,
      slug: "microsoft-office",
      month: "September",
      year: 2025,
    },
  ];

  useEffect(() => {
    setEnrolledCourses(mockCourses);
  }, []);

  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800">
        My Courses
      </h1>

      {enrolledCourses.length === 0 ? (
        <p className="text-center text-lg text-gray-700">
          You are not enrolled in any courses yet.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded-lg shadow-md">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th className="py-2 px-3 md:py-3 md:px-4 text-left text-sm md:text-base">Course Name</th>
                <th className="py-2 px-3 md:py-3 md:px-4 text-left text-sm md:text-base">Duration</th>
                <th className="py-2 px-3 md:py-3 md:px-4 text-center text-sm md:text-base">Mode</th>
                <th className="py-2 px-3 md:py-3 md:px-4 text-center text-sm md:text-base">Fee</th>
                <th className="py-2 px-3 md:py-3 md:px-4 text-center text-sm md:text-base">Total Classes</th>
                <th className="py-2 px-3 md:py-3 md:px-4 text-left text-sm md:text-base">Enrollment Session</th>
              </tr>
            </thead>
            <tbody className="text-gray-800">
              {enrolledCourses.map((course) => (
                <tr key={course.slug} className="border-b hover:bg-gray-50 transition">
                  <td className="py-2 px-3 md:py-3 md:px-4 font-semibold text-sm md:text-base">{course.name}</td>
                  <td className="py-2 px-3 md:py-3 md:px-4 text-sm md:text-base">{course.duration}</td>
                  <td className="py-2 px-3 md:py-3 md:px-4 text-center text-sm md:text-base">{course.mode}</td>
                  <td className="py-2 px-3 md:py-3 md:px-4 text-center text-sm md:text-base">{course.fee} BDT</td>
                  <td className="py-2 px-3 md:py-3 md:px-4 text-center text-sm md:text-base">{course.totalClasses}</td>
                  <td className="py-2 px-3 md:py-3 md:px-4 text-sm md:text-base">{course.month} {course.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyCoursesPage;
