import React from "react";

let names = ["James P. Sullivan", "Mike Wazowski", "Boo", 
"Randall Boggs", "Roz", "Fungus"];

const People = () => (
    <ul className="list-group">
        { names.map(i => 
            <li class="list-group-item" key={ i }>
                { i }
            </li> 
        )}
    </ul>
);


export default People;
