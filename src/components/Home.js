import React from 'react';
import uuid from 'react-uuid';

const Home = ({ books }) => {
  return (
    <div className="flex flex-wrap p-5 justify-center">
      {books.map((book) => {
        const { author, country, imageLink, pages, link, title, year } = book;
        return (
          <div
            key={uuid()}
            className="max-w-sm m-3 bg-orange-600 rounded-lg shadow-xl overflow-hidden"
          >
            <a href={link} rel="noreferrer" target="_blank">
              <div>
                <img
                  className="object-cover w-full"
                  src={imageLink}
                  alt={author}
                />
              </div>
              <div className="p-2">
                <h1 className="text-pink-200 text-xl font-serif">
                  Author: {author}
                </h1>
                <p className="font-bold text-purple-900 font-normal italic text-xl">
                  Titel: {title}
                </p>
                <div className="font-hairline font-black inline-block">
                  <span>Year-{year}</span>
                  <span>Country-{country}</span>
                  <span>Pages-{pages}</span>
                </div>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
