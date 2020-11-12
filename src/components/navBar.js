import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <nav className=" bg-purple-600 p-4 mt-0 fixed w-full top-0 shadow">
    <ul className="flex justify-end space-x-5 items-center text-purple-300 font-bold">
      <li className="mr-auto">
        <h1 className="font-bold text-2xl text-blue-200 font-serif">
          Book's Library
        </h1>
      </li>
      <li>
        <NavLink
          exact
          to="/"
          activeClassName=" text-purple-100 border-b-2 "
          className="hover:text-purple-200"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          exact
          to="/about"
          activeClassName=" text-purple-100 border-b-2"
          className="hover:text-purple-200"
        >
          About
        </NavLink>
      </li>
      <li>
        <input
          type="search"
          placeholder="Search..."
          className="p-1 rounded-full focus:outline-none focus:shadow-outline focus:border-purple-500 bg-transparent bg-purple-800 text-white hover:bg-purple-500"
        />
      </li>
    </ul>
  </nav>
);

export default NavBar;
