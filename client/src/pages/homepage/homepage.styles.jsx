import styled from 'styled-components';

export const HomePageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 55vh;
	margin-top: 8rem;

	@media screen and (max-width: 800px) {
		margin-top: unset;
	}
`;