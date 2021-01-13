import React, { useState } from 'react';
import uuid from 'react-uuid';
import Modal from './Modal';

const BooksComponent = ({ Books, query }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState();

  const items = Books.filter((data) => {
    if (query.author == null) {
      return data;
    } else {
      return data.author.toLowerCase().indexOf(query.author) !== -1;
    }
  });

  const handleOpen = (id) => {
    const item = Books.filter((book, index) => index === id);
    setSelected(item);
    setIsOpen(true);
  };

  return (
    <div className="flex flex-wrap mb-5 items-center justify-center">
      {items.map((data, index) => {
        const { author, imageLink } = data;
        return (
          <div
            key={uuid()}
            className="grid mt-16 w-80 md:w-48 m-5 rounded-lg shadow-2xl overflow-hidden"
          >
            <div>
              <img
                loading="lazy"
                className="object-fit h-64 w-80 md:w-48 overflow-hidden"
                src={imageLink}
                alt={author}
              />
            </div>
            <div className="flex p-2 justify-between">
              <h1 className="text-xl overflow-hidden">Author: {author}</h1>
              <button title="Details" onClick={() => handleOpen(index)}>
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
                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>
              </button>
            </div>
          </div>
        );
      })}
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        selectedItems={selected}
      />
    </div>
  );
};
export default BooksComponent;
