import React, { useState } from 'react';
import Header from './components/Header';
import BlogCard from './components/BlogCard';
import CategoryFilter from './components/CategoryFilter';
import SearchBar from './components/SearchBar';
import Pagination from './components/Pagination';
import postsData from './data/posts';

const POSTS_PER_PAGE = 6;

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = postsData
    .filter(post => selectedCategory === 'All' || post.category === selectedCategory)
    .filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()));

  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <div className="min-h-screen">
      <Header />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <CategoryFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {paginatedPosts.map(post => (
          <BlogCard key={post.id} {...post} />
        ))}
      </div>

      <Pagination
        totalPosts={filteredPosts.length}
        postsPerPage={POSTS_PER_PAGE}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default App;