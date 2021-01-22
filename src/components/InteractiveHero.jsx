import React from 'react';
import { interactiveText } from '../constants/texts';
import '../styles/components/interactiveHero.css';

const InteractiveHero = () => {
	return (
		<div id="interactive-hero" className="interactive-hero row">
			<div className="interactive-hero-col hero-image-col">
				<div className="interactive-hero-content hero-image">
					{interactiveText && (
						<img src={interactiveText.image} alt="Loopstudio About Us" />
					)}
				</div>
			</div>
			<div className="interactive-hero-col hero-text-col">
				<div className="interactive-hero-content hero-text">
					{interactiveText && (
						<>
							<h2 className="interactive-hero-text-title row">
								{interactiveText.title}
							</h2>
							<p className="interactive-hero-text-paragraph row">
								{interactiveText.text}
							</p>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default InteractiveHero;
