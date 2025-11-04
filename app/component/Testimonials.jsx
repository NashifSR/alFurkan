import React from "react";
import { MessageSquare } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Fatima Rahman",
      relation: "Parent",
      text: "Al Furkan Girls Madrasa has truly transformed my daughter’s confidence and understanding of her deen. The teachers are so caring!",
    },
    {
      name: "Ayesha Siddique",
      relation: "Student",
      text: "I love the balance between Islamic education and modern subjects. The environment is peaceful and encouraging.",
    },
    {
      name: "Mrs. Karim",
      relation: "Parent",
      text: "The focus on character and discipline here is exceptional. My child has grown in both knowledge and manners.",
    },
    {
      name: "Zahra Amin",
      relation: "Student",
      text: "Learning Quran, computer skills, and other subjects all together makes me feel prepared for the future.",
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-6 sm:px-12 text-center bg-gradient-to-b from-transparent via-white to-emerald-50 rounded-b-2xl shadow">
      <h2 className="text-3xl sm:text-4xl font-bold text-emerald-800 mb-6">
        Testimonials
      </h2>
      <p className="max-w-2xl mx-auto text-gray-600 mb-12 text-base sm:text-lg">
        Hear what parents and students have to say about Al Furkan Girls Madrasa.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div className="mb-4">
              <MessageSquare className="w-6 h-6 text-green-600 mb-2" />
              <p className="text-gray-700 text-sm">{t.text}</p>
            </div>
            <div className="mt-4 text-left">
              <h3 className="text-md font-semibold text-emerald-800">{t.name}</h3>
              <p className="text-gray-500 text-sm">{t.relation}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
