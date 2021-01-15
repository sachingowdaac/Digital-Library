import React, { useState } from 'react';
import BooksComponent from './books';
import Books from '../books.json';
import Pagination from './pagination';

const Home = () => {
  const [query, setQuery] = useState('');
  const [offset, setOffset] = useState(0);
  const [postsPerPage] = useState(12);
  const [pageCount] = useState(Math.ceil(Books.length / postsPerPage));

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setQuery({
      [name]: value.toLowerCase(),
    });
  };

  const currentPosts = Books.slice(offset, offset + postsPerPage);
  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * postsPerPage;
    setOffset(offset);
  };

  return (
    <div className="min-h-0 mb-5 items-center justify-center mt-16 md:w-4/5 mx-auto">
      <div className="fixed w-full md:w-4/5 p-2">
        <div className="relative flex w-full flex-wrap items-stretch mb-3">
          <span className="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-2">
            <i>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </i>
          </span>
          <input
            type="text"
            aria-label="Search"
            placeholder="Search..."
            name="author"
            value={query.author || ''}
            onChange={handleChange}
            className="px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10 focus:ring-2 focus:ring-purple-600"
          />
        </div>
      </div>
      <div>
        <BooksComponent Books={currentPosts} query={query} />
      </div>
      <hr className="m-3" />
      <div>
        <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
      </div>
    </div>
  );
};
export default Home;
