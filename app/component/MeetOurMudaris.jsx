import React from "react";

const MeetOurMudaris = () => {
  const teachers = [
    {
      name: "Fatima Rahman",
      role: "Qur'an & Tajweed Teacher",
      photo: "/teachers/fatima.jpg",
      bio: "Over 10 years of experience in teaching Quran and Tajweed with passion and care.",
    },
    {
      name: "Ayesha Siddique",
      role: "Islamic Studies & Hadith Teacher",
      photo: "/teachers/ayesha.jpg",
      bio: "Dedicated to nurturing young minds with deep knowledge of Seerah and Hadith.",
    },
    {
      name: "Mariam Karim",
      role: "Computer Skills Instructor",
      photo: "/teachers/mariam.jpg",
      bio: "Empowers students with essential computer skills and digital literacy for modern life.",
    },
    {
      name: "Zainab Amin",
      role: "Character & Akhlaq Mentor",
      photo: "/teachers/zainab.jpg",
      bio: "Focuses on moral development, discipline, and leadership skills among students.",
    },
  ];

  return (
    <section
        className="py-20 px-6 sm:px-12 text-center bg-gradient-to-b from-transparent via-white to-emerald-50 rounded-b-2xl shadow"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-emerald-800 mb-6">
        Meet Our Ustads
      </h2>
      <p className="max-w-2xl mx-auto text-gray-600 mb-12 text-base sm:text-lg">
        Our highly qualified teachers are committed to providing the best
        Islamic and academic education for your daughters.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teachers.map((teacher, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all overflow-hidden"
          >
            <img
              src={teacher.photo}
              alt={teacher.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-emerald-800 mb-1">
                {teacher.name}
              </h3>
              <p className="text-sm text-gray-500 mb-2">{teacher.role}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{teacher.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetOurMudaris;
