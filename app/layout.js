// app/layout.js
import "./globals.css";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";

export const metadata = {
  title: "Al Furkan Girls Madrasa",
  description:
    "Empowering the next generation of righteous and educated women through faith and learning.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="flex flex-col min-h-screen bg-gradient-to-b from-emerald-50 via-white to-teal-500 text-gray-900 font-sans antialiased">
        {/* Navbar - floating */}
        <header className="fixed inset-x-0 top-2 z-50 pointer-events-auto px-4 sm:px-6 lg:px-12">
          <Navbar />
        </header>

        {/* Main Content */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <footer className="mt-auto">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
