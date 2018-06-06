import React, { Component } from "react";

class List extends Component {

	constructor(props) {
		super(props);
			this.state = { 
				arrayOfItems: [],
				listItem: ''
			};
		this.handleClick = this.handleClick.bind(this);
		this.handleUpdate = this.handleUpdate.bind(this);
	}

	handleUpdate(e){
		// let { listItem } = this.state;
		this.setState( { listItem: e.target.value } )
	}

	handleClick() {
		let { arrayOfItems } = this.state;
		this.setState( { arrayOfItems: arrayOfItems.concat([this.state.listItem]) } )
	}

	render() {
		return ( 
			<React.Fragment>
				<p>Enter a list item</p>
				<input onChange={ this.handleUpdate } ></input> 
				<button onClick={ this.handleClick } >Add a list item</button>
				<ul>
					{this.state.arrayOfItems.map(
						(item, index) => <li key={index} >{item}</li>)}
				</ul>
			</React.Fragment>
		)
	};
}

export default List;