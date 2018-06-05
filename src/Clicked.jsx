import React, { Component } from "react";

class Clicked extends Component {
  constructor(props) {
    super(props); //sends props through to the component
    this.state = { // set a flag equal to false
      clicked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ //changes state
      clicked: true
    });
  }

  render() {
    const { clicked } = this.state; // links to the state set up in constructor
    return <p onClick={this.handleClick}>{clicked ? "Clicked" : "Not Clicked"}</p>;
  }
}

export default Clicked;