import React from 'react';
import Navigation from '../Navigation';
import '../../styles/components/header.css';
import JumboText from '../JumboText';

const Header = () => {
	return (
		<header id="header" className="header header-bg-image container-fluid">
			<Navigation />
			<div className="jumbo-row row">
				<JumboText />
			</div>
		</header>
	);
};

export default Header;
