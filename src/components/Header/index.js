import React from 'react';
import Logo from '../../assets/logo.png';

import { Container } from './styles';

function Header() {
	return (
		<Container>
			<div>
				<h1>
					todo<span>list</span>
				</h1>
				<img src={Logo} alt="Logo" />
			</div>
		</Container>
	);
}

export default Header;
