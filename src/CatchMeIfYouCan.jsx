import React, { Component } from "react";

class CatchMeIfYouCan extends Component {

	constructor(props) {
		super(props);
			this.state = { 
			jump: 0
		};
		this.handleClick = this.handleClick.bind(this);
		}

	handleClick() {
		let { jump } = this.state;
		const newJump = jump + this.props.jump;
		this.setState( { jump: newJump } )
		}

	render() {
		const { jump } = this.props;
		const frag = <React.Fragment>
			<button onClick={ this.handleClick } style ={{position: "absolute", top: this.state.jump}}  >{ this.state.jump }</button> 
			</React.Fragment>;
		return frag
	};
}

export default CatchMeIfYouCan;