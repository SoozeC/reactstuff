import React, { Component } from "react";

class TempConverter extends Component {

	constructor(props) {
		super(props);
			this.state = { 
				cent: 0,
				faren: 0
			};
		this.handleC = this.handleC.bind(this);
		this.handleF = this.handleF.bind(this);
	}

	handleC(e) {
		let { cent } = this.state;
		let output = (+e.target.value * 1.8) + 32;
		this.setState( { faren: output } )
	}

	handleF(e) {
		let { faren } = this.state;
		let output = (+e.target.value - 32) / 1.8;
		this.setState( { cent: output } )
	}

	render() {
		return ( 
			<React.Fragment>
				<label>C: </label>
				<input type="number" onChange={ this.handleC } ></input>
				<p>To F => {this.state.faren}</p>
				<br /> <br />
				<label>F: </label>
				<input type="number" onChange={ this.handleF } ></input> 
				<p>To C => {this.state.cent}</p>
				</React.Fragment>
		)
	};
}

export default TempConverter;