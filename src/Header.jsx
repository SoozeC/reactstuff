import React from "react";
// a component can only have one top-level element
// so we wrap everything in a <main> tag
const Header = props => (
	<h1>{ props.title }</h1>
);
export default Header;
