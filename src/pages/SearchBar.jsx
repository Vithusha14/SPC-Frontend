// components/SearchBar.jsx
import React from "react";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="mt-6 w-full max-w-3xl relative mx-auto">
      <input
        className="w-full rounded-full border border-gray-200 py-3 pl-12 pr-12 shadow-sm focus:border-orange-500 focus:ring-orange-500"
        placeholder="Search a beverage"
      />
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
      <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-gray-800 text-white rounded-full w-9 h-9 flex items-center justify-center">
        <span className="text-sm">⏎</span>
      </button>
    </div>
  );
};

export default SearchBar;
