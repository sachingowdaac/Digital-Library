import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Books from '../books.json';
import { db } from '../firebase';

const BooksDetails = () => {
  const [addToCart, setAddToCart] = useState(false);
  const { author } = useParams();

  const item = Books.filter((book) => book.author === author);
  const handleCart = (index) => {
    db.collection('MyBooks').add(item[index]);
    alert('Book add to cart');
    setAddToCart(true);
  };
  const history = useHistory();
  const handleHistory = () => {
    history.goBack();
  };

  return (
    <div className="min-h-0 mb-5 items-center justify-center mt-16 md:w-4/5">
      {item &&
        item.map((book, index) => {
          const { author, pages, country, link, title, year, imageLink } = book;
          return (
            <div
              key={index}
              className="grid w-72 mt-20 rounded-lg shadow-2xl overflow-hidden  mx-auto"
            >
              <div>
                <img
                  loading="lazy"
                  className="object-fit h-64 w-72 overflow-hidden"
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
              <hr className="m-1" />
              <div className="flex justify-between w-4/5 mx-auto p-1">
                <button onClick={handleHistory}>
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                </button>
                <button onClick={() => handleCart(index)}>
                  {addToCart ? (
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
                        strokeWidth="2"
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      className="w-7 h-7"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  )}
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default BooksDetails;
