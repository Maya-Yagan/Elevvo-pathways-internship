import React from 'react';

const Pagination = ({ totalPosts, postsPerPage, currentPage, setCurrentPage }) => {
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  if (totalPages === 1) return null;

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="flex flex-wrap justify-center gap-2 my-6">
      <button
        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
        className={`px-3 py-1 rounded-full font-medium ${
          currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-gradient-to-r from-[#914659] to-[#DB9B8D] text-white'
        }`}
      >
        Prev
      </button>

      {pages.map(page => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`px-3 py-1 rounded-full font-medium ${
            page === currentPage
              ? 'bg-gradient-to-r from-[#914659] to-[#DB9B8D] text-white'
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
        className={`px-3 py-1 rounded-full font-medium ${
          currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-gradient-to-r from-[#914659] to-[#DB9B8D] text-white'
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;