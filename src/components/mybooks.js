import React from 'react';
import { db } from '../firebase';
import useDB from '../utilities/useDB';

const MyBooksCart = () => {
  const { books } = useDB();
  const handleDelete = (id) => {
    db.collection('MyBooks').doc(id).delete();
  };

  return (
    <div className="min-h-0 mb-5 items-center justify-center mt-16 md:w-4/5 mx-auto">
      <div className="flex flex-wrap mt-20 items-center justify-center">
        {books &&
          books.map((book, index) => {
            const {
              author,
              pages,
              country,
              link,
              title,
              year,
              imageLink,
              id,
            } = book;
            return (
              <div
                key={index}
                className="grid w-80 m-5 rounded-lg shadow-2xl overflow-hidden"
              >
                <div>
                  <img
                    loading="lazy"
                    className="object-fit h-64 w-80 overflow-hidden"
                    src={imageLink}
                    alt={author}
                  />
                </div>
                <div className="flex items-center justify-between m-4">
                  <div>
                    <h1 className="text-xl p-2 overflow-hidden">
                      Author: {author}
                    </h1>
                    <div className="p-2">
                      <a href={link} rel="noreferrer" target="_blank">
                        <p className="font-bold text-purple-900  text-xl">
                          Title: {title}
                        </p>
                      </a>
                      <div className="font-black">
                        <span>Year-{year} </span>
                        <span>Country-{country} </span>
                        <span>Pages-{pages}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button
                      title="Delete"
                      onClick={() => handleDelete(id)}
                      className="p-1 rounded-full bg-transparent bg-gray-400 focus:outline-none focus:shadow-outline hover:bg-purple-500"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default MyBooksCart;
