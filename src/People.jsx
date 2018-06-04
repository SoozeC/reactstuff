import React from "react";

// const People = props => (

// 	props.names ? <p> yes names exists</p> : <p>Nothing to see here</p>

// );


const People = props => (
	props.names ? (
	    <ul>
	         { props.names.map((i, index) => (
	            <li key={ index }> { i }
	            </li>
	        ))}
	    </ul> 
    ) : <p>Nothing to see here</p>

);



export default People;
