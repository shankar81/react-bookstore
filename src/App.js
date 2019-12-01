import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Landing from "./components/Landing/Landing";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          <Switch>
            <Route path="/" component={Landing} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
