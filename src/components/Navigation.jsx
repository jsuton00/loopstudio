import React from 'react';
import { Link } from 'react-router-dom';
import { NAVLINKS } from '../constants/NAVLINKS';
import '../styles/components/navigation.css';

const Navigation = () => {
	return (
		<nav id="nav" role="navigation" className="nav navbar row">
			<div className="navbar-item brand-nav">
				<div className="brand-nav-item">
					<Link to="/" className="nav-link-button">
						<h1 className="brand-nav-name">LoopStudios</h1>
					</Link>
				</div>
			</div>
			<div className="navbar-item nav-links row">
				{NAVLINKS.length > 0 &&
					NAVLINKS.map((link, index) => {
						return (
							<div key={index} className="nav-link-item">
								<Link to={`/${link}`} className="nav-link-button">
									<p className="nav-link-label">{link}</p>
								</Link>
							</div>
						);
					})}
			</div>
		</nav>
	);
};

export default Navigation;
