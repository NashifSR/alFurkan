"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import SectionToggle from "../Components/SectionToggle";

const categories = [
  { name: "Graphic Design", slug: "graphic_design" },
  { name: "Computer Operation", slug: "computer_operation" },
  { name: "Digital Marketing", slug: "digital_marketing" },
  { name: "Web Development", slug: "web_development" },
];

const WrittenTests = () => {
  const router = useRouter();
  const [section, setSection] = useState("answers"); // default, or could rely solely on toggle

  return (
    <div className="min-h-screen p-8 bg-white text-black flex flex-col items-center gap-8">
      <h1 className="text-3xl font-bold mb-4">Written Test Portal</h1>

      {/* Section Toggle with parent callback */}
      <SectionToggle defaultSection="answers" onChange={setSection} />

      {/* Categories Buttons */}
      <div className="w-full flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-6 capitalize">
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => router.push(`/writtenTests/${cat.slug}/${section}`)}
              className={`px-4 py-2 rounded shadow font-semibold text-black ${
                section === "answers"
                  ? "bg-green-300 border border-green-300 hover:bg-green-200"
                  : "bg-blue-100 border border-blue-300 hover:bg-blue-200"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WrittenTests;
