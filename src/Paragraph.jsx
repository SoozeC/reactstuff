import React from "react";

const Paragraph = props => (

         props.title ? <p>{ props.title }</p> : <p>Default text as nothing entered :S</p>

);
export default Paragraph;

