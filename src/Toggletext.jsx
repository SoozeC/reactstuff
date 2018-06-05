/*Create <ToggleText initial="Hello" alternate="World"> component. 
It should consist of a <p> and a <button>Toggle</button>. 
When the <button> is clicked the text of the <p> tag should alternate 
between initial and alternate.*/

import React, { Component } from "react";

class Toggletext extends Component {

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
		const { initial, alternate } = this.props;
		const message = clicked ? initial : alternate
		return <button onClick={this.handleClick}>{ message }</button>
		}
	}

export default Toggletext;