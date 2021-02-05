import React from "react";
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import PortfolioPage from './pages/Portfolio';

function App() {
  return (
  <Router>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/portfolio" component={PortfolioPage} />
    <Route exact path="/about" component={AboutPage} />
  </Router>
  );
}

export default App;