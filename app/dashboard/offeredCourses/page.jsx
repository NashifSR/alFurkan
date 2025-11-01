"use client";
import React, { useState } from "react";
import CourseCard from "./courseCard";

const OfferedCourses = () => {
  const [loadingCourse, setLoadingCourse] = useState(null);

  const courses = [
    {
      name: "Computer Operation",
      description:
        "Learn fundamental computer operations and basic troubleshooting.",
      duration: "4 weeks",
      mode: "Offline",
      fee: "1500",
      totalClasses: 8,
      slug: "computer-operation-basics",
    },
    {
      name: "Microsoft Office Professional",
      description: "Master Word, Excel, PowerPoint, and other MS Office tools.",
      duration: "12 weeks",
      mode: "Offline",
      fee: "3000",
      totalClasses: 24,
      slug: "microsoft-office",
    },
    {
      name: "Graphic Design Basics",
      description:
        "Learn design principles and tools like Photoshop and Illustrator.",
      duration: "12 weeks",
      mode: "Offline",
      fee: "3500",
      totalClasses: 24,
      slug: "graphic-design-basics",
    },
    {
      name: "Digital Marketing Basics",
      description:
        "Get started with SEO, social media marketing, and Google Ads.",
      duration: "12 weeks",
      mode: "Offline",
      fee: "5000",
      totalClasses: 24,
      slug: "digital-marketing-basics",
    },
    {
      name: "Web Design & Development Basics",
      description: "Learn HTML, CSS, and basic JavaScript for web development.",
      duration: "12 weeks",
      mode: "Offline",
      fee: "6000",
      totalClasses: 24,
      slug: "web-development-basics",
    },
  ];

  const handleEnroll = (course) => {
    setLoadingCourse(course.slug);
    // Enrollment logic...
    setTimeout(() => setLoadingCourse(null), 1000); // demo
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen flex flex-wrap gap-4">
      {courses.map((course) => (
        <CourseCard
          key={course.slug}
          course={course}
          loadingCourse={loadingCourse}
          onEnroll={handleEnroll}
        />
      ))}
    </div>
  );
};

export default OfferedCourses;
