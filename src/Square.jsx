import React from "react";


const Square = props => {
	const divStyle = {
	  backgroundColor: props.color,
	  height: '200px',
	  width: '200px',
	};
	return <div style={divStyle}></div>
};

// Square.defaultProps = {
// 	color = "red"
// };

export default Square;