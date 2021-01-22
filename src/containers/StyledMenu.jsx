import styled from 'styled-components';

export const StyledMenu = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 100vh;
	text-align: center;
	padding: 2rem;
	position: absolute;
	top: 0;
	left: 0;
	transition: transform 0.3s ease-in-out;

	@media (max-width: 576px) {
		width: 100%;
	}
`;
