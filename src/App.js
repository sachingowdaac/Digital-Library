import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/About';
import Footer from './components/footer';
import Home from './components/Home';
import NavBar from './components/navBar';
import SignUp from './components/signup';
import Login from './components/login';
import Books from './books.json';
import 'tailwindcss/tailwind.css';

const App = () => {
  const [books, setBooks] = useState(Books);
  const [darkTheme, setDarkTheme] = useState(true);
  const [userIn, setUserIn] = useState();

  const [theme, setTheme] = useState(localStorage.theme);
  const colorTheme = theme === 'dark' ? 'light' : 'dark';
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme, colorTheme]);

  const changeTheme = () => {
    setDarkTheme((preDarkTheme) => !preDarkTheme);
    let htmlClasses = document.querySelector('html').classList;
    if (localStorage.theme === 'dark') {
      htmlClasses.remove('dark');
      localStorage.removeItem('theme');
    } else {
      htmlClasses.add('dark');
      localStorage.theme = 'dark';
    }
    return [colorTheme, setTheme];
  };
  const searchBook = (book) => {
    setBooks((prev) => {
      return prev.filter((item) =>
        item.author.toLowerCase().includes(book.toLowerCase())
      );
    });
  };
  console.log(userIn);
  const user = (user) => {
    setUserIn(user);
  };
  return (
    <div className="bg-white text-black dark:bg-gray-800 dark:text-white">
      <Router>
        <NavBar
          onBookSearch={searchBook}
          onThemeChange={changeTheme}
          usersIs={user}
          darkTheme={darkTheme}
        />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home books={books} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
