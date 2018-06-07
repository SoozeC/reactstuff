import React from "react";

const Square = ({ selected, handleClick }) => {
  const colour = selected ? "hotpink" : "white";
  const divStyle = {
    backgroundColor: colour,
    border: "10px solid black",
    height: '200px',
    width: '200px' };

 return <div style={divStyle} onClick={handleClick}></div>
}

export default Square;



