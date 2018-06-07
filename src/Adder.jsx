import React, { Component } from "react";

class Adder extends Component {

	constructor(props) {
		super(props);
			this.state = { 
				arrayOfNums: [],
				total: 0,
				enteredNum: 0
				};
		this.handleUpdate = this.handleUpdate.bind(this);
		this.handleAdd = this.handleAdd.bind(this);
		this.handleTotal = this.handleTotal.bind(this);
	}

	handleUpdate(e){
		this.setState( { enteredNum: +e.target.value } )
	}

	handleAdd(){
		let { arrayOfNums, enteredNum } = this.state;
		this.setState( { arrayOfNums: arrayOfNums.concat([enteredNum]) } )
	}

	handleTotal() {
		let { arrayOfNums } = this.state;
		this.setState( { total: arrayOfNums.reduce((totes, item) => totes += item, 0 )} )
	}

	render() {
		return ( 
			<React.Fragment>
				<h1>Adding up some numbers</h1>
				<input onChange={ this.handleUpdate } ></input> 
				<button onClick={ this.handleAdd } >Add another number</button>
				<button onClick={ this.handleTotal } >Total all numbers</button>
				<ul>
					{this.state.arrayOfNums.map((item, index) => <li key={index}>{item} </li>)}
				</ul>
				<p>{this.state.total}</p>
			</React.Fragment>
		)
	};
}

export default Adder;