import React, { Component } from "react";
import Password from './Password';

class SignUp extends Component {

	constructor(props) {
        super(props);
        this.state = { 
        	box1: 0, 
        	box2: 0 
        };
        this.checkLengthBox1 = this.checkLengthBox1.bind(this);
		this.checkLengthBox2 = this.checkLengthBox2.bind(this);
    }

	checkLengthBox1(e) {
        this.setState({ box1: e.target.value.length })
    }

	checkLengthBox2(e) {
        this.setState({ box2: e.target.value.length })
    }

	render() {
        return (
            <React.Fragment>
	            <h1>Sign up</h1>
            	<label>Password</label>
	            <Password passwordEntered={ () => this.checkLengthBox1 } />
	            <p>{this.state.box1}</p>
	            <br/ > <br />
	            <label>Confirm Password</label>
                <Password passwordEntered={ () => this.checkLengthBox2 } />
                <p>{this.state.box2}</p>
            </React.Fragment>
        );
    }
}

export default SignUp
