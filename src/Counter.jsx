import React, { Component } from "react";

class Counter extends Component {

	constructor(props) {
		super(props);
		// const initial = this.props.initial;
		this.state = { 
			count: this.props.initial 
		};
		this.handleClickAdd = this.handleClickAdd.bind(this);
		this.handleClickSub = this.handleClickSub.bind(this);
		}

	handleClickAdd() {
		let { count } = this.state;
		const newCount = count >= this.props.max ? count : count + 1 ;
		this.setState( { count: newCount } )
		// const { clicked } = this.state;
		// clicked ? this.setState( { clicked: false }) : this.setState( { clicked: true });
		}

	handleClickSub() {
		let { count } = this.state;
		const newCount = count <= 0 ? count : count - 1 ;
		this.setState( { count: newCount } )
		// const { clicked } = this.state;
		// clicked ? this.setState( { clicked: false }) : this.setState( { clicked: true });
		}

	render() {
		const { initial, max } = this.props;
		const frag = <React.Fragment>
						<p> { this.state.count } </p>
						<button onClick={ this.handleClickAdd }>+</button> 
						<button onClick={ this.handleClickSub }>-</button>
					</React.Fragment>;
		return frag
	};
}

export default Counter;