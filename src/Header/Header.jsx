import React from 'react';
import Nav from '../Nav/Nav'
import './Header.css';

class Header extends React.Component {
	render(){
		return(
		<div className = 'Header'>
		<h1 >
				Movie Mate
			</h1>
			<Nav />
		</div>
		)
	}
}

export default Header;