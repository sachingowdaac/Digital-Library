import React from 'react';
import Paginate from 'react-paginate';

const Pagination = ({ pageCount, handlePageClick }) => {
  return (
    <div>
      <Paginate
        previousLabel={
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
            />
          </svg>
        }
        nextLabel={
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
            />
          </svg>
        }
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={
          'flex flex-wrap items-center justify-center space-x-4'
        }
        subContainerClassName={'items-center justify-center'}
        activeClassName={'shadow font-black text-purple-600'}
        previousClassName={'shadow p-2 rounded-full'}
        nextClassName={'shadow p-2 rounded-full'}
      />
    </div>
  );
};
export default Pagination;
