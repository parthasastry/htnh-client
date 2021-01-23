import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Deities from "./components/Deities";
import Events from "./components/Events";
import Donate from "./components/Donate";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/events">
          <Events />
        </Route>

        <Route exact path="/deities">
          <Deities />
        </Route>

        <Route exact path="/donate">
          <Donate />
        </Route>

        <Route exact path="/contact">
          <Contact />
        </Route>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
