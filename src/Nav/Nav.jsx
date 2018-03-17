import React from 'react';
import './Nav.css';

class Nav extends React.Component{
	render(){
		return(
			<ul className = 'Nav'>
				<li>ABOUT</li>
				<li>BROWSE</li>
				<li>LOGIN</li>
			</ul>
		)
	}
}

export default Nav;