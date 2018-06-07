import React from "react";

const Button = ({ name, selected, onClick }) => (
    <button
        className={ "btn " + (selected ? "btn-danger" : "btn-primary") }
        onClick={ onClick }
    >
        { name }
    </button>
);
export default Button;