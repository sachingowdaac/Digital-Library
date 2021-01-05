import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/About';
import Footer from './components/footer';
import Home from './components/Home';
import NavBar from './components/navBar';
import SignUp from './components/signup';
import Login from './components/login';
import Books from './books.json';

const App = () => {
  const [books, setBooks] = useState(Books);
  const [userIn, setUserIn] = useState();

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
        <NavBar onBookSearch={searchBook} usersIs={user} />
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
