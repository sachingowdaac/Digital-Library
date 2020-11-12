import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/About';
import Footer from './components/footer';
import Home from './components/Home';
import NavBar from './components/navBar';

const App = () => {
  return (
    <div className="flex flex-col mt-20 min-h-screen">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
