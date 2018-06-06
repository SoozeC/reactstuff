import React, { Component } from "react";

class StepCounter extends Component {

	constructor(props) {
		super(props);
		this.state = { 
			count: 0
		};
		this.handleClickAdd = this.handleClickAdd.bind(this);
		this.handleClickSub = this.handleClickSub.bind(this);
		}

	handleClickAdd() {
		let { count } = this.state;
		const newCount = count >= this.props.max ? count : count + this.props.step ;
		this.setState( { count: newCount } )
		}

	handleClickSub() {
		let { count } = this.state;
		const newCount = count <= 0 ? count : count - this.props.step ;
		this.setState( { count: newCount } )
		}

	render() {
		// const { max, step } = this.props;
		const frag = <React.Fragment>
						<p> { this.state.count } </p>
						<button onClick={ this.handleClickAdd }>+</button> 
						<button onClick={ this.handleClickSub }>-</button>
					</React.Fragment>;
		return frag
	};
}

export default StepCounter;