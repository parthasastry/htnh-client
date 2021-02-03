import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import M from "materialize-css/dist/js/materialize.min.js";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Deities from "./components/Deities";
import Priests from "./components/Priests";
import Events from "./components/Events";
import Donate from "./components/Donate";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  useEffect(() => {
    //initialize materialize
    M.AutoInit();
  });

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

        <Route exact path="/priests">
          <Priests />
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
};

export default App;
