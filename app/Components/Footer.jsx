'use client';
import React from 'react';
import Link from 'next/link';
import theme from '../../theme'; // adjust path if needed

const Footer = () => {
  return (
    <footer
      className="py-6 shadow-inner border-t"
      style={{
        backgroundColor: theme.colors.background,
        color: theme.colors.primaryText,
        borderColor: theme.colors.primaryHoverBg,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} Student Portal. All rights reserved. <br />
          Created by <strong>Ahmed Nashif</strong>
        </p>

        <div className="flex gap-6 font-semibold">
          {["privacy", "terms", "contact"].map((page) => (
            <Link
              key={page}
              href={`/${page}`}
              style={{ color: theme.colors.primaryText }}
              onMouseEnter={(e) => (e.target.style.color = theme.colors.primaryHoverBg)}
              onMouseLeave={(e) => (e.target.style.color = theme.colors.primaryText)}
              className="hover:underline"
            >
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
