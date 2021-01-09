import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { SignOut } from './authentication';
import { auth } from '../firebase';

const NavBar = () => {
  const [user, setUser] = useState();
  const [theme, setTheme] = useState(localStorage.theme);
  const [darkTheme, setDarkTheme] = useState(theme === 'dark' ? false : true);

  const colorTheme = theme === 'dark' ? 'light' : 'dark';
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme, colorTheme]);

  const changeTheme = () => {
    let htmlClasses = document.querySelector('html').classList;
    if (localStorage.theme === 'dark') {
      htmlClasses.remove('dark');
      localStorage.removeItem('theme');
      setDarkTheme(true);
    } else {
      htmlClasses.add('dark');
      localStorage.theme = 'dark';
      setDarkTheme(false);
    }
    return [colorTheme, setTheme];
  };

  auth.onAuthStateChanged((user) => {
    if (user) {
      console.log('user loged in');
      setUser(true);
    } else {
      console.log('user sign out');
      setUser(false);
    }
  });

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 h-16 shadow">
      <div className="flex flex-col items-center mx-auto sm:w-4/5 p-2">
        <div className="flex w-full items-center justify-between ">
          <div>
            <NavLink exact to="/">
              <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                ></path>
              </svg>
            </NavLink>
          </div>
          <div className={user ? 'block' : 'hidden'}>
            <NavLink
              exact
              to="/"
              activeClassName="font-black text-purple-600"
              className="hover:text-purple-900"
            >
              Home
            </NavLink>
          </div>
          <div>
            <NavLink
              exact
              to="/about"
              activeClassName="font-black text-purple-600"
              className="hover:text-purple-900"
            >
              About
            </NavLink>
          </div>
          <div className={user ? 'hidden' : 'block'}>
            <NavLink
              exact
              to="/signup"
              activeClassName="font-black text-purple-600"
              className="hover:text-purple-900"
            >
              SignUp
            </NavLink>
          </div>
          <div className={user ? 'hidden' : 'block'}>
            <NavLink
              exact
              to="/login"
              activeClassName="font-black text-purple-600"
              className="hover:text-purple-900"
            >
              Login
            </NavLink>
          </div>
          <div className={user ? 'block' : 'hidden'}>
            <button
              className="p-2 bg-gray-500 rounded-full focus:outline-none focus:shadow-outline bg-transparent hover:bg-purple-500"
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
              onClick={changeTheme}
            >
              {darkTheme ? (
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
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  ></path>
                </svg>
              ) : (
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
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  ></path>
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
