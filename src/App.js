import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/About';
import Footer from './components/footer';
import Home from './components/Home';
import NavBar from './components/navBar';
import SignUp from './components/signup';
import Books from './books.json';
export const ThemeContext = React.createContext();

const App = () => {
  const [books, setBooks] = useState(Books);
  const [darkTheme, setDarkTheme] = useState(true);

  const changeTheme = () => {
    setDarkTheme((preDarkTheme) => !preDarkTheme);
  };
  const searchBook = (book) => {
    setBooks((prev) => {
      return prev.filter((item) =>
        item.author.toLowerCase().includes(book.toLowerCase())
      );
    });
  };
  const darkThemes = useContext(ThemeContext);
  const themeStyles = {
    backgroundColor: darkTheme ? '#fff' : '#312b47',
    color: darkTheme ? 'black' : '#fff',
  };
  return (
    <ThemeContext.Provider value={darkThemes}>
      <div className="book-container " style={themeStyles}>
        <Router>
          <NavBar
            onBookSearch={searchBook}
            onThemeChange={changeTheme}
            darkTheme={darkTheme}
          />
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/">
              <Home books={books} />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
