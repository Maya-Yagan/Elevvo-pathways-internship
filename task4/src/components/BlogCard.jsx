import React from 'react';

const BlogCard = ({ title, image, description, date }) => {
  return (
    <div className="bg-white rounded-xl shadow-[0_10px_20px_rgba(95,33,62,0.3)] overflow-hidden transform hover:scale-105 hover:shadow-[0_20px_40px_rgba(95,33,62,0.3)] transition duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-[#5F213E] font-semibold text-xl mb-2">{title}</h2>
        <p className="text-[#BA8892] text-sm mb-2">{description}</p>
        <p className="text-sm text-gray-500">{date}</p>
      </div>
    </div>
  );
};

export default BlogCard;
