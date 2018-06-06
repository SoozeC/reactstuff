import React, { Component } from "react";

class Length extends Component {

	constructor(props) {
		super(props);
			this.state = { 
				noOfChars: 0
			};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		let { noOfChars } = this.state;
		this.setState( { noOfChars: e.target.value.length } )
	}

	render() {
		const { label } = this.props;
		const frag = <React.Fragment>
			<p> { label } </p>
			<input onChange={ this.handleClick }></input> 
			<p>{ this.state.noOfChars }</p>
			</React.Fragment>;
		return frag
	};
}

export default Length;