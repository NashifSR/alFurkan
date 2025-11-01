'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import useUser from '../Hooks/useUser';

// Nav items defined outside the component
const NAV_ITEMS = [
  { href: '/resources', label: 'Resources' },
  { href: '/courseResources', label: 'Course Resources' },
  { href: '/mcqTests', label: 'MCQ' },
  { href: '/writtenTests', label: 'Written' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/logout', label: 'Logout', red: true },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, loading } = useUser() // Replace with actual user ID

  console.log("user in page",user)

  return (
    <nav className="shadow-md border-b bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Brand / Logo */}
        <Link href="/" className="text-2xl font-extrabold tracking-wide select-none">
          EDUNITE
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-sm font-semibold items-center">
          {NAV_ITEMS.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-4 py-2 rounded-md transition-colors duration-200 select-none cursor-pointer text-center md:text-left ${
                item.red ? 'text-red-500 hover:text-red-400' : 'text-gray-900 hover:bg-gray-100'
              }`}
            >
              {item.label}
            </Link>
          ))}

          {/* User Name */}
          {loading ? (
            <span className="ml-4 text-gray-500">Loading...</span>
          ) : (
            <span className="ml-4 font-semibold">{user?.name || 'Student'}</span>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden font-bold px-3 py-1 border rounded-md"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3">
          {NAV_ITEMS.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-4 py-2 rounded-md transition-colors duration-200 select-none cursor-pointer text-center md:text-left ${
                item.red ? 'text-red-500 hover:text-red-400' : 'text-gray-900 hover:bg-gray-100'
              }`}
            >
              {item.label}
            </Link>
          ))}
          {loading ? (
            <span className="mt-2 text-gray-500">Loading...</span>
          ) : (
            <span className="mt-2 font-semibold">{user?.name || 'Student'}</span>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
