"use client";
import React from "react";

const CourseCard = ({ course, loadingCourse, onEnroll }) => {
  return (
    <div className="flex flex-col bg-white p-4 md:p-5 rounded-lg shadow-md hover:shadow-xl transition w-full max-w-[400px] h-48 overflow-hidden">
      {/* Title section */}
      <h2 className="text-lg md:text-xl font-bold text-indigo-600 w-full mb-3">
        {course.name}
      </h2>

      {/* Main content: description + action */}
      <div className="flex flex-1 gap-4">
        {/* Description section */}
        <div className="flex-1 flex flex-col justify-between">
          <p className="text-gray-700 text-sm line-clamp-4">
            {course.description}
          </p>

          <div className="flex flex-wrap gap-3 text-sm mt-2">
            <p className="text-green-600">
              <span className="font-semibold">Duration:</span> {course.duration}
            </p>
            <p className="text-blue-500">
              <span className="font-semibold">Mode:</span> {course.mode}
            </p>
            <p className="text-yellow-600">
              <span className="font-semibold">Classes:</span> {course.totalClasses}
            </p>
          </div>
        </div>

        {/* Action section */}
        <div className="flex flex-col justify-center items-center w-32">
          <p className="text-red-600 font-bold text-lg md:text-xl mb-3">
            {course.fee} BDT
          </p>

          <button
            onClick={() => onEnroll(course)}
            disabled={loadingCourse === course.slug}
            className={`${
              loadingCourse === course.slug
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            } text-white px-4 py-2 rounded-md transition w-full text-sm`}
          >
            {loadingCourse === course.slug ? "Enrolling..." : "Enroll"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
