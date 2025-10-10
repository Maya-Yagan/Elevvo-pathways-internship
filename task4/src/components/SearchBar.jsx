import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="flex justify-center my-4">
      <div className="relative w-80">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search posts..."
          className="w-full px-4 py-2 rounded-full border-2 border-[#DB9B8D] focus:outline-none focus:ring-2 focus:ring-[#914659] transition"
        />
        <Search className="absolute right-3 top-2.5 text-[#914659]" size={20} />
      </div>
    </div>
  );
};

export default SearchBar;