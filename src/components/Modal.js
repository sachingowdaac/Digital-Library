import React, { useState } from 'react';

const Modal = ({ open, children, onClose, selectedItems }) => {
  const {
    author,
    pages,
    country,
    link,
    title,
    year,
    imageLink,
  } = selectedItems;

  const [addToCart, setAddToCart] = useState(false);
  if (!open) return null;
  return (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-700 bg-opacity-70 z-50">
        <div className="fixed top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10 bg-white">
          {children}
          <div className="grid w-80 m-5 rounded-lg shadow-2xl overflow-hidden">
            <div>
              <img
                loading="lazy"
                className="object-fit h-64 w-80 overflow-hidden"
                src={imageLink}
                alt={author}
              />
            </div>
            <div>
              <h1 className="text-xl p-2 overflow-hidden">Author: {author}</h1>
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
              <button onClick={onClose}>
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
              <button onClick={() => setAddToCart((prev) => !prev)}>
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
        </div>
      </div>
    </>
  );
};
export default Modal;
