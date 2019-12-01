import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Landing from "./components/Landing/Landing";
import Footer from "./components/Footer/Footer";
import Drawer from "./components/Drawer/Drawer";
import Backdrop from "./components/Backdrop/Backdrop";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDrawerOpen: false
    };
  }

  onCloseDrawer = () => {
    this.setState({ isDrawerOpen: false });
  };

  onOpenDrawer = () => {
    if (this.state.isDrawerOpen) {
      this.setState({ isDrawerOpen: false });
    } else {
      this.setState({ isDrawerOpen: true });
    }
  };
  render() {
    return (
      <Router>
        <div className="container">
          <Drawer visible={this.state.isDrawerOpen} />
          <Backdrop
            visible={this.state.isDrawerOpen}
            onPress={this.onCloseDrawer}
          />
          <Header
            visible={this.state.isDrawerOpen}
            onPress={this.onOpenDrawer}
          />
          <Switch>
            <Route path="/" component={Landing} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
