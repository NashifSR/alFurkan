import React from "react";

const Landing = () => {
  return (
    <main className="flex-grow flex flex-col items-center justify-center px-6 py-16 max-w-4xl mx-auto">
      <h1
        className="text-5xl font-extrabold mb-8 drop-shadow-md text-center"
        style={{ color: theme.colors.headingText }}
      >
        Welcome to the Student Portal
      </h1>
      <p className="max-w-xl text-center text-lg italic mb-10">
        “Knowledge is the crown of the mind.” <br />
        Access your courses, take tests, and track your progress — all in a
        sacred golden space.
      </p>
      <Link href="/dashboard">
        <button
          className="font-semibold px-10 py-3 rounded-lg shadow-lg hover:brightness-110 transition transform hover:-translate-y-1"
          style={{
            background: `linear-gradient(to right, ${theme.colors.buttonGradientStart}, ${theme.colors.buttonGradientMid}, ${theme.colors.buttonGradientEnd})`,
            color: `${theme.colors.logoutHoverText}`,
          }}
        >
          Enter the Portal
        </button>
      </Link>
    </main>
  );
};

export default Landing;
