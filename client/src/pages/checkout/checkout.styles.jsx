import styled from "styled-components";

export const CheckoutPageContainer = styled.div`
	width: 60%;
	min-height: 90vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 50px auto 0;
	button {
		margin-left: auto;
		margin-top: 3rem;
	}

	@media screen and (max-width: 800px) {
    width: 100%;
		padding: 10px;
    margin: 0;
	}
`;

export const CheckoutHeaderContainer = styled.div`
  width: 100%;
  height: 2.5rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
  pointer-events: none;
`;

export const HeaderBlockContainer = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;

export const TotalContainer = styled.div`
  margin: 2rem 0 0 auto;
  font-size: 2rem;
`;

export const TestWarningContainer = styled.div`
  text-align: center;
  margin-top: 2.5rem;
  font-size: 1.5rem;
  color: red;
`;