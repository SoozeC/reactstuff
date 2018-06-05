import React, { Component } from "react";

class Square extends Component {

  constructor(props) {
    super(props);
    this.state = { clicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { clicked } = this.state;
    clicked ? this.setState( { clicked: false }) : this.setState( { clicked: true });
  }

  render() {
	const { clicked } = this.state;
	const colour = clicked ? "white " : "hotpink";
	const divStyle = {
		backgroundColor: colour,
		border: "10px solid black",
		height: '200px',
		width: '200px',
	};

    return <div style={divStyle} onClick={ this.handleClick } ></div>;
  }
}

export default Square;