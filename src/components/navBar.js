import React from 'react';
import { NavLink } from 'react-router-dom';
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import Brightness4Icon from '@material-ui/icons/Brightness4';

const NavBar = ({ onBookSearch, onThemeChange, darkTheme }) => {
  const handleChange = (event) => {
    const book = event.target.value;
    onBookSearch(book);
  };
  return (
    <nav className="bg-purple-600 p-2 sticky top-0  text-purple-800 shadow">
      <div className="w-4/5 mx-auto">
        <ul className="flex items-center justify-between text-purple-300 font-bold">
          <li>
            <NavLink
              exact
              to="/"
              className="font-bold text-2xl text-blue-200 font-serif"
            >
              Book's Library
            </NavLink>
          </li>
          <ul className="flex flex-wrap items-center space-x-5">
            <li>
              <NavLink
                exact
                to="/"
                activeClassName="text-purple-100"
                className="hover:text-purple-200 p-2"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/about"
                activeClassName="text-purple-100"
                className="hover:text-purple-200 p-2"
              >
                About
              </NavLink>
            </li>
            <li>
              <form>
                <input
                  onChange={handleChange}
                  placeholder="Search..."
                  className="p-1 rounded-full focus:outline-none focus:shadow-outline focus:border-purple-500 bg-transparent bg-purple-800 text-white hover:bg-purple-500"
                />
              </form>
            </li>
            <li>
              <button
                className="p-1 rounded-full focus:outline-none focus:shadow-outline focus:border-purple-500 bg-transparent bg-purple-800 text-white hover:bg-purple-500"
                onClick={onThemeChange}
              >
                {darkTheme ? <BrightnessHighIcon /> : <Brightness4Icon />}
              </button>
            </li>
          </ul>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
