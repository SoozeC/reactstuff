import React from 'react';

import { Link } from "react-router-dom";

const Links = () => (
	<div className="well">
	    <ul className="nav nav-pills">
	        <li className="list-group-item-danger"><Link to="/adder">Adder</Link></li>
			<li className="list-group-item-danger"><Link to="/transform">Transform</Link></li>
			<li className="list-group-item-danger"><Link to="/buttons">Buttons</Link></li>
			<li className="list-group-item-danger"><Link to="/squares">Squares</Link></li>
			<li clasNames="list-group-item-danger"><Link to="/signup">Sign-up</Link></li>
	    </ul>
    </div>

);
export default Links;