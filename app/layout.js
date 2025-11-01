// app/layout.js
import './globals.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

export const metadata = {
  title: 'Student Portal',
  description: 'Access your courses, tests, and progress',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
        {/* Navbar */}
        <div className="sticky top-0 z-30">
          <Navbar />
        </div>

        {/* Main content */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <div className="bottom-0 shadow-inner border-t border-gray-300">
          <Footer />
        </div>
      </body>
    </html>
  );
}
