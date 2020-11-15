import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/About';
import Footer from './components/footer';
import Home from './components/Home';
import NavBar from './components/navBar';
import Books from './books.json';

const App = () => {
  const [books, setBooks] = useState(Books);

  const searchBook = (book) => {
    setBooks((prev) => {
      return prev.filter((item) =>
        item.author.toLowerCase().includes(book.toLowerCase())
      );
    });
  };

  return (
    <div className="flex flex-col mt-20 min-h-screen">
      <Router>
        <NavBar onBookSearch={searchBook} />
        <Switch>
          <Route path="/about">
            <About />
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
