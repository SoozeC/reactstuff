import React from 'react';
import Header from './Header';
import Paragraph from './Paragraph';
import Square from './Square';
import People from './People';

const Stuff = () => (
	<div>
	    <Header title="This title goes into the h1"/>
	    <Paragraph title="There is text in here"/>
	    <Square color="purple" />
	    <People names= { ['A', 'B', 'C', 'D'] } />
	</div>
);

export default Stuff;