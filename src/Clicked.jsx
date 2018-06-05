import React, { Component } from "react";

class Clicked extends Component {

	constructor(props){
		super(props);
		this.state = {clicked: false};
		this.clicked = this.clicked.bind(this);
	}

    clicked() {
        this.setState( {clicked: true} );
    }

    render() {
    	const {clicked} = this.state;
        return (
        	<p onClick={ this.clicked } >
	        	{ clicked ? 'Clicked' : 'Not clicked' }  
	    	</p>      
        );
    }
}

export default Clicked;