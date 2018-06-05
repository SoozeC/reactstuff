import React from "react";

// const People = props => (

// 	props.names ? <p> yes names exists</p> : <p>Nothing to see here</p>

// );

// index is elements number (eg 0, 1, 2)
// n will be name
// you need to tell React the key so it can compare to previous renders
// if data has not been updated then it won't re-render the screen
// if it's not changed it won't update page - this is why we use a key

const People = ( { names } ) => (
	names ? (
		<ul className="list-group">
			{ names.map((n, index) => {
			return <li key={index} className="list-group-item">{ n }</li>;
			})}
		</ul>
	) : <p>nothing to see here</p>
);

export default People;
