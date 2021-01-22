import React from 'react';
import { jumboText } from '../constants/texts';
import '../styles/components/jumboText.css';

const JumboText = () => {
	return (
		<div id="jumbo-text-container" className="jumbo-text-container">
			<h3 className="jumbo-text">{jumboText}</h3>
		</div>
	);
};

export default JumboText;
