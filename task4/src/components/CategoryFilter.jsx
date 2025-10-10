import React from 'react';

const categories = ['All', 'Tech', 'Travel', 'Food'];

const CategoryFilter = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="flex justify-center gap-4 my-4 flex-wrap">
      {categories.map(category => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`px-4 py-2 rounded-full font-medium transition 
            ${selectedCategory === category
              ? 'bg-gradient-to-r from-[#914659] to-[#DB9B8D] text-white shadow-[0_4px_10px_rgba(95,33,62,0.3)]'
              : 'bg-[#DB9B8D] text-[#5F213E] hover:bg-gradient-to-r hover:from-[#914659] hover:to-[#DB9B8D] hover:text-white'}`
          }
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
