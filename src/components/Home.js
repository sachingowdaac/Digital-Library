import React, { useState } from 'react';
import BooksComponent from './books';
import Books from '../books.json';
import Pagination from './pagination';

const Home = () => {
  const [query, setQuery] = useState('');
  const [offset, setOffset] = useState(0);
  const [postsPerPage] = useState(8);
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
      <hr className="m-3" />
      <div>
        <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
      </div>
    </div>
  );
};
export default Home;
