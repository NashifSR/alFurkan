"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/dashboard/myProfile", label: "My Profile" },
    { href: "/dashboard/courses", label: "My Courses" },
    { href: "/dashboard/offeredCourses", label: "All Courses" },
    { href: "/dashboard/tests", label: "Tests" },
    { href: "/logout", label: "Logout", red: true },
  ];

  const pathname = usePathname();

  const handleLinkClick = () => {
    // Close sidebar on mobile after clicking a link
    setIsOpen(false);
  };

  return (
    <div className="bg-red-400">
      {/* Mobile toggle button */}
      <button
        className="md:hidden fixed top-20 left-4 z-50 bg-gray-800 text-white px-3 py-2 rounded-md shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Close" : "Menu"}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-20 left-0 h-screen p-6 bg-gray-800 text-white shadow-lg transform transition-transform duration-300 md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } w-64 flex flex-col space-y-6 z-40`}
      >
        <h2 className="text-2xl font-bold tracking-wide">Student Portal</h2>

        <nav className="flex flex-col space-y-2">
          {links.map((item, index) => (
            <Link key={index} href={item.href} onClick={handleLinkClick}>
              <p
                className={`block px-4 py-2 rounded-md transition-all duration-200 hover:-translate-y-[1px] hover:brightness-110 ${
                  pathname === item.href
                    ? "bg-gray-700"
                    : item.red
                    ? "text-red-400 hover:text-red-300"
                    : "text-white hover:bg-gray-700"
                }`}
              >
                {item.label}
              </p>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Overlay for mobile when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default Sidebar;
