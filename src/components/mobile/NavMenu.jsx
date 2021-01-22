import React from 'react';
import { Link } from 'react-router-dom';
import { NAVLINKS } from '../../constants/NAVLINKS';

const NavMenu = () => {
	return (
		<div className="navmenu nav-links list-group">
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
	);
};

export default NavMenu;
