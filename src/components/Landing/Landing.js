import React, { Component } from "react";
import Hero from "../Hero/Hero";
import Feature from "../Feature/Feature";
import Story from "../Story/Story";

export default class Landing extends Component {
  render() {
    return (
      <div className="container">
        <Hero />
        <Feature />
        <Story />
      </div>
    );
  }
}
