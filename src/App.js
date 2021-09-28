import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Navigation from "./components/inc/Navigation";

function App() {
  return (
    <div>
      <Router>
        <Navigation />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/About" exact component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
