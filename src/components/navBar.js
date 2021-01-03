import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { SignOut } from './authentication';
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { auth } from '../firebase';

const NavBar = ({ onBookSearch, onThemeChange, darkTheme, usersIs }) => {
  const [user, setUser] = useState();
  console.log({ auth });
  auth.onAuthStateChanged((user) => {
    let sessionTimeout = null;

    if (user) {
      console.log('user loged in');
      setUser(true);
      user.getIdTokenResult().then((idTokenResult) => {
        console.log(idTokenResult);
        const authTime = idTokenResult.claims.auth_time * 1000;
        const sessionDuration = 1000 * 60;
        const millisecondsUntilExpiration =
          sessionDuration - (Date.now() - authTime);
        console.log(millisecondsUntilExpiration);
        setTimeout(() => auth.signOut(), millisecondsUntilExpiration);
      });
    } else {
      console.log('user sign out');
      setUser(false);
      sessionTimeout && clearTimeout(sessionTimeout);
      sessionTimeout = null;
    }
    usersIs(user);
  });
  const handleChange = (event) => {
    const book = event.target.value;
    onBookSearch(book);
  };

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 border h-16">
      <div className="flex flex-col items-center mx-auto sm:w-4/5 p-2">
        <div className="flex w-full items-center justify-between ">
          <div>
            <NavLink exact to="/" className="font-bold-400 font-serif">
              B'L
            </NavLink>
          </div>
          <div>
            <NavLink
              exact
              to="/"
              activeClassName="font-bold"
              className="font-bold-400 hover:text-purple-200 font-serif"
            >
              Home
            </NavLink>
          </div>
          <div>
            <NavLink
              exact
              to="/about"
              activeClassName="font-bold"
              className="font-bold-400 hover:text-purple-200 font-serif"
            >
              About
            </NavLink>
          </div>
          <div>
            <form>
              <input
                onChange={handleChange}
                placeholder="Search..."
                className="w-20 sm:w-full p-1 rounded-full border  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </form>
          </div>
          <div className={user ? 'hidden' : 'block'}>
            <NavLink
              exact
              to={user ? '/' : '/signup'}
              activeClassName="font-bold"
              className="font-bold-400 font-serif hover:text-purple-200"
            >
              SignUp
            </NavLink>
          </div>
          <div className={user ? 'hidden' : 'block'}>
            <NavLink
              exact
              to={user ? '/' : '/login'}
              activeClassName="font-bold"
              className="font-bold-400 font-serif hover:text-purple-200"
            >
              Login
            </NavLink>
          </div>
          <div className={user ? 'block' : 'hidden'}>
            <button
              className="font-bold-400 font-serif hover:text-purple-200 p-2 rounded-full focus:outline-none focus:shadow-outline focus:border-purple-500 focus:text-white bg-transparent bg-purple-200 hover:bg-purple-500"
              onClick={SignOut}
            >
              Logout
            </button>
          </div>
          <div className="dark-mode fixed buttom-4 right-4 bg-transparent">
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
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
