import React from "react";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row items-center justify-center gap-10 py-20 px-6 sm:px-12 relative bg-gradient-to-b from-transparent via-white to-emerald-50 rounded-b-2xl shadow"
    >
      {/* Left: Image or Illustration */}
      <div className="w-full md:w-1/2 flex justify-center relative">
        <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-lg border-4 border-emerald-200">
          <img
            src="/images/about-madrasa.jpg"
            alt="Students studying Qur'an"
            className="object-cover w-full h-full"
          />
        </div>
        {/* Decorative circle */}
        <div className="absolute -z-10 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-40" />
      </div>

      {/* Right: Text */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-emerald-800">
          About Our Madrasa
        </h2>

        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          <strong>Al Furkan Girls Madrasa</strong> is dedicated to cultivating
          both <em>deen</em> and <em>dunya</em> — nurturing young women in faith,
          intellect, and character. Our mission is to inspire a generation of
          educated, confident, and spiritually grounded Muslim women.
        </p>

        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          We provide a holistic environment where Qur’anic teachings meet
          practical skills, blending traditional Islamic education with modern
          learning opportunities. Through knowledge, discipline, and compassion,
          we prepare our students to lead with faith and integrity.
        </p>

        <div className="pt-4">
          <a
            href="#programs"
            className="inline-block px-6 py-3 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-700 transition-all shadow-md"
          >
            Explore Our Programs
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
