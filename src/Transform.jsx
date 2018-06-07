import React, { Component } from "react";

class Transform extends Component {

	constructor(props) {
		super(props);
			this.state = { 
				input: 0
			};
		this.handleUpdate = this.handleUpdate.bind(this);
	}

	handleUpdate(e) {
		let { input } = this.state;
		let output = this.props.transform(+e.target.value);
		this.setState( { input: output } )
	}

	render() {
		return ( 
			<React.Fragment>
				<h1>Squaring a number</h1>
				<input type="number" onChange={ this.handleUpdate } ></input> 
				<p>{this.state.input}</p>
			</React.Fragment>
		)
	};
}

export default Transform;