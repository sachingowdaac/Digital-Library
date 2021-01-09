import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const About = lazy(() => import('./components/About'));
const Footer = lazy(() => import('./components/footer'));
const Home = lazy(() => import('./components/Home'));
const NavBar = lazy(() => import('./components/navBar'));
const SignUp = lazy(() => import('./components/signup'));
const Login = lazy(() => import('./components/login'));

const renderLoader = () => <p>Loading</p>;
const App = () => {
  return (
    <div className="bg-white text-black dark:bg-gray-800 dark:text-white">
      <Router>
        <Suspense fallback={renderLoader()}>
          <NavBar />
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
              <Home />
            </Route>
          </Switch>
          <Footer />
        </Suspense>
      </Router>
    </div>
  );
};

export default App;
