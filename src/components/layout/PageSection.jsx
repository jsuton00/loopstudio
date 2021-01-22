import React from 'react';
import '../../styles/layouts/pageSection.css';

const PageSection = (props) => {
	const { children, additionalClassNames } = props;
	return (
		<div
			id="page-section"
			className={`page-section ${additionalClassNames} container-fluid`}
		>
			<div className="page-section-content container-fluid">{children}</div>
		</div>
	);
};

export default PageSection;
