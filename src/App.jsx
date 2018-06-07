import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";
import Adder from './Adder';
import Transform from './Transform';
import Buttons from './Buttons';
import Squares from './Squares';
import SignUp from './SignUp';
import Links from './Links';
import FourOhFour from './FourOhFour';



<Switch>
    <Route exact path="/" component={ Buttons }/>
    <Route component={ FourOhFour }/>
</Switch>

let fn = x => x * x

const App = () => (
    <Router>
	    <React.Fragment>
		    <Switch>
        
				<Route path="/adder" render={ () => (
					<Adder />
				)}/>
				<Route path="/transform" render={ () => (
					<Transform transform={ fn } />
				)}/>
				<Route path="/buttons" render={ () => (
					<Buttons />
				)}/>

				<Route path="/squares/:colour" render={ ({ match }) => (
				    <Squares colour={ match.params.colour } />
				)} />
				<Route path="/squares" render={ () => (
					<Squares />
				)}/>
				<Route path="/signup" render={ () => (
					<SignUp minimumLength={ 12 } />
				)}/>
				<Route component={ FourOhFour }/>
			</Switch>
			<Links />
	    </React.Fragment>
    </Router>
);




export default App;