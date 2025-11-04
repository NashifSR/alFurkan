import React from "react";
import { BookOpen, UserCheck, Home, Star } from "lucide-react";

const WhyChooseUs = () => {
  const points = [
    {
      icon: <BookOpen className="w-8 h-8 text-green-600" />,
      title: "Balanced Curriculum",
      description:
        "Combines Islamic education with academic and practical skills for holistic student development.",
    },
    {
      icon: <UserCheck className="w-8 h-8 text-green-600" />,
      title: "Qualified Teachers",
      description:
        "Experienced and caring female teachers dedicated to nurturing knowledge, character, and confidence.",
    },
    {
      icon: <Home className="w-8 h-8 text-green-600" />,
      title: "Safe & Inspiring Environment",
      description:
        "A secure, positive, and nurturing space for students to learn, grow, and thrive.",
    },
    {
      icon: <Star className="w-8 h-8 text-green-600" />,
      title: "Focus on Character",
      description:
        "Emphasizes akhlaq, discipline, and leadership alongside academic excellence.",
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="py-20 px-6 sm:px-12 bg-white text-center relative bg-gradient-to-b from-transparent via-white to-emerald-50 rounded-b-2xl shadow"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-emerald-800 mb-6">
        Why Choose Us
      </h2>
      <p className="max-w-2xl mx-auto text-gray-600 mb-12 text-base sm:text-lg">
        At Al Furkan Girls Madrasa, we strive to provide the perfect balance of
        knowledge, values, and personal growth for every student.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {points.map((point, index) => (
          <div
            key={index}
            className="bg-emerald-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all"
          >
            <div className="flex justify-center mb-4">{point.icon}</div>
            <h3 className="text-xl font-semibold text-emerald-800 mb-2">
              {point.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">{point.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
