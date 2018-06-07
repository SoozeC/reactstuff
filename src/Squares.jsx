import React, { Component } from "react";
import Square from './Square';

class Squares extends Component {
	constructor(props) {
        super(props);
        this.state = { selected: 1 };
    }

	 handleClick(square) {
        this.setState({ selected: square })
    }

    render() {
        return (
            <React.Fragment>
                <h1>Pink square, white square</h1>
                <Square selected={ this.state.selected === 1 } handleClick={ () => this.handleClick(1) } />
                <Square selected={ this.state.selected === 2 } handleClick={ () => this.handleClick(2) } />
            </React.Fragment>
        );
    }
}

export default Squares;
