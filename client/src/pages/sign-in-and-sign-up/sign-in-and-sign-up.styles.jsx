import styled from "styled-components";

export const SignInAndSignUpPageContainer = styled.div`
	width: 85vw;
	display: flex;
	align-items: baseline;
	justify-content: space-between;
	margin: 2rem auto;

	@media screen and (max-width: 800px) {
		flex-direction: column;
    align-items: center;
	}
`;
