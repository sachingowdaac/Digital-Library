import React, { useState } from 'react';
import { db } from '../firebase';

const MyBooksCart = () => {
  const [books, setBooks] = useState();

  db.collection('MyBooks')
    .get()
    .then((snapshot) => {
      const books = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        books.push(data);
      });
      setBooks(books);
    });

  return (
    <div className="min-h-0 mb-5 items-center justify-center mt-16 md:w-4/5 mx-auto">
      <div className="flex flex-wrap mt-20 items-center justify-center">
        {books &&
          books.map((book, id) => {
            const {
              author,
              pages,
              country,
              link,
              title,
              year,
              imageLink,
            } = book;
            return (
              <div
                key={id}
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
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default MyBooksCart;
