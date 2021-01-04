import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { SignOut } from './authentication';
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
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 h-16 shadow-2xl">
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
                className="dark:text-black w-20 sm:w-full p-1 rounded-full border  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </form>
          </div>
          <div className={user ? 'hidden' : 'block'}>
            <NavLink
              exact
              to="/signup"
              activeClassName="font-bold"
              className="font-bold-400 font-serif hover:text-purple-200"
            >
              SignUp
            </NavLink>
          </div>
          <div className={user ? 'hidden' : 'block'}>
            <NavLink
              exact
              to="/login"
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
          <div className="fixed bottom-5 right-4 bg-transparent">
            <button
              style={
                darkTheme
                  ? { backgroundColor: '#312b47' }
                  : { backgroundColor: '#0073e5' }
              }
              className="p-2 w-10 h-10 bg-purple-700 rounded-full focus:outline-none  bg-transparent text-white hover:bg-purple-900"
              onClick={onThemeChange}
            >
              {darkTheme ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
