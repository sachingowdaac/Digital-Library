import React, { useState } from 'react';
import BooksComponent from './books';
import Books from '../books.json';

const Home = () => {
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setQuery({
      [name]: value.toLowerCase(),
    });
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = Books.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="min-h-0 mb-5 items-center justify-center mt-16 md:w-4/5 mx-auto">
      <div className="fixed w-full md:w-4/5 p-1">
        <form>
          <label>
            <input
              type="text"
              aria-label="Search"
              name="author"
              value={query.author || ''}
              onChange={handleChange}
              placeholder="Search..."
              className="dark:text-black bg-gray-300 w-full p-1 rounded border  focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </label>
        </form>
      </div>
      <div>
        <BooksComponent Books={currentPosts} query={query} />
      </div>
      <div className="flex items-center justify-center">
        <button
          onClick={() => setCurrentPage((old) => Math.max(old - 1, 1))}
          className="bg-indigo-400 p-1 rounded"
        >
          Previous page
        </button>
        <span className="m-4 p-1 bg-purple-500 rounded-full h-9 w-9 flex items-center justify-center">
          {currentPage}
        </span>
        <button
          onClick={() =>
            setCurrentPage((old) =>
              Math.ceil(Books.length / postsPerPage) <= currentPage
                ? old
                : old + 1
            )
          }
          className="bg-green-400 p-1 rounded"
        >
          Next page
        </button>
      </div>
    </div>
  );
};
export default Home;
