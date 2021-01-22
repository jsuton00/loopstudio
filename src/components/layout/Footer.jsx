import React from 'react';
import { Link } from 'react-router-dom';
import { NAVLINKS } from '../../constants/NAVLINKS';
import '../../styles/layouts/footer.css';

const Footer = () => {
	return (
		<footer id="footer" className="footer container-fluid">
			<div className="footer-content row">
				<div className="footer-content-col footer-nav">
					<div className="footer-brand-nav-item row">
						<Link to="/" className="nav-link-button">
							<h1 className="brand-nav-name">LoopStudios</h1>
						</Link>
					</div>
					<div className="footer-nav-items row">
						{NAVLINKS.length > 0 &&
							NAVLINKS.map((link, index) => {
								return (
									<div key={index} className="footer-nav-link-item">
										<Link to={`/${link}`} className="footer-nav-link-button">
											<p className="nav-link-label">{link}</p>
										</Link>
									</div>
								);
							})}
					</div>
				</div>
				<div className="footer-content-col footer-social"></div>
			</div>
		</footer>
	);
};

export default Footer;
