import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Header />
        </div>
      </Router>
    );
  }
}

export default App;
