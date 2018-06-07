import React, { Component } from "react";
import Button from "./Button";

class Buttons extends Component {
    constructor(props) {
        super(props);
        this.state = { selected: 1 };
    }

    handleClick(button) {
        this.setState({ selected: button })
    }

    render() {
        return (
            <React.Fragment>
                <h1>An amazing game of red button, blue button</h1>
                <Button name="First" selected={ this.state.selected === 1 } onClick={ () => this.handleClick(1) } />
                <Button name="Second" selected={ this.state.selected === 2 } onClick={ () => this.handleClick(2) } />
            </React.Fragment>
        );
    }
}

export default Buttons;