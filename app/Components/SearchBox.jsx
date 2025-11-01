"use client";

import React from "react";
import ButtonDesigns from "@/app/Components/ButtonDesigns";

const SearchBox = ({ value, onChange, placeholder = "Search...", onClear }) => {
  return (
    <div className="mb-6 w-full max-w-2xl flex gap-2">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {onClear && (
        <ButtonDesigns
          label="Clear"
          variant="outline"
          onClick={onClear}
        />
      )}
    </div>
  );
};

export default SearchBox;
