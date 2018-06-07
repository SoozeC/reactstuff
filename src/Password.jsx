import React from "react";

const Password = ({ box1, box2, passwordEntered }) => {
  const borderStyle = box1 === box2 ? "1px solid black" : "5px solid red";
  const boxStyle = { border: borderStyle };

 return <input style={boxStyle} passwordEntered={passwordEntered}></input>
}

export default Password;