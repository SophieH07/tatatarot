import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavMenu from "./components/NavMenu";
import { Home } from "./components/Home";
import { Cards } from "./components/Cards";
import {Card} from "./components/Card";
import { Generator } from "./components/Generator";
import { Description } from "./components/Description";

export default class App extends Component {
  render() {
    return (
      <Router>
        <header>
          <NavMenu />
        </header>
        <Route exact path="/" component={Home} />
        <Route path="/cards" component={Cards} />
        <Route path="/description" component={Description} />
        <Route path="/generator" component={Generator} />
        <Route path="/card/:name" component={Card} />
      </Router>
    );
  }
}
