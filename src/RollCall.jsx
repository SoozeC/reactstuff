import React, { Component } from "react";

class RollCall extends Component {

	constructor(props) {
		super(props);
			this.state = { 
			names: this.props.names,
			index: 0
		};
		this.handleClick = this.handleClick.bind(this);
		}

	handleClick() {
		let { index } = this.state;
		const newIndex = (index >= index.length ? index = 0 : index + 1);
		this.setState( { index: newIndex } )
		}

	render() {
		const { names } = this.props;
		const frag = <React.Fragment>
			<p>Roll call:</p>
			<button onClick={ this.handleClick } >NEXT, PLEASE!</button> 
			<h1>{ names[this.state.index] }</h1>
			</React.Fragment>;
		return frag
	};
}

export default RollCall;