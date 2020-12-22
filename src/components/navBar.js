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
    <nav className="w-full h-20 mb-0 fixed top-0 bg-purple-600 text-purple-800 shadow">
      <div className="flex items-center justify-around sm:justify-between p-3 w-4/5 mx-auto">
        <div>
          <NavLink
            exact
            to="/"
            className="font-bold sm:text-2xl text-blue-200 font-serif"
          >
            Book's Library
          </NavLink>
        </div>
        <div>
          <ul className="flex font-bold items-center space-x-1">
            <li>
              <NavLink
                exact
                to="/"
                activeClassName="text-purple-100"
                className="text-black hover:text-purple-200 p-2"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/about"
                activeClassName="text-purple-100"
                className="text-black hover:text-purple-200 p-2"
              >
                About
              </NavLink>
            </li>
            <li>
              <form>
                <input
                  onChange={handleChange}
                  placeholder="Search..."
                  className="w-20 sm:w-full p-1 rounded-full focus:outline-none focus:shadow-outline focus:border-purple-500 bg-transparent bg-purple-800 text-white hover:bg-purple-500"
                />
              </form>
            </li>
          </ul>
        </div>
      </div>
      <div className="dark-mode fixed buttom-4 right-4 bg-transparent p-2">
        <button
          style={
            darkTheme
              ? { backgroundColor: '#312b47' }
              : { backgroundColor: '#0073e5' }
          }
          className="p-2 bg-purple-700 rounded-full focus:outline-none  bg-transparent text-white hover:bg-purple-900"
          onClick={onThemeChange}
        >
          {darkTheme ? <Brightness4Icon /> : <BrightnessHighIcon />}
        </button>
      </div>
    </nav>
  );
};
export default NavBar;
