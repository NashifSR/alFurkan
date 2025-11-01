"use client";
import React, { useState } from "react";
import Sidebar from "./Sidebar.jsx/page";

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-gray-50 text-gray-900">
      {/* Mobile toggle button */}

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} />

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content Area */}
      <main
        className={`flex-1 mt-6 transition-all duration-300 ${
          sidebarOpen ? "ml-64" : "ml-0"
        } md:ml-64 p-6`}
      >
        {children}
      </main>
    </div>
  );
}
