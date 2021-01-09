import React, { useState } from 'react';
import BooksComponent from './books';

const Home = () => {
  const [query, setQuery] = useState('');

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setQuery({
      [name]: value.toLowerCase(),
    });
  };
  return (
    <div className="min-h-0 mb-5 items-center justify-center mt-16 md:w-4/5 mx-auto">
      <div className="fixed w-full md:w-4/5 p-1">
        <form>
          <label>
            <input
              type="text"
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
        <BooksComponent query={query} />
      </div>
    </div>
  );
};
export default Home;
