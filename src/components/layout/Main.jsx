import React from 'react';

const Main = (props) => {
	const { children } = props;
	return (
		<main id="main" className="main container-fluid">
			{children}
		</main>
	);
};

export default Main;
