import styled from "styled-components";

export const CollectionPageContainer = styled.div`
	display: flex;
	flex-direction: column;

	@media screen and (max-width: 800px) {
		align-items: center;
	}
`;

export const CollectionTitle = styled.h2`
  font-size: 2.5rem;
  margin: 0 auto 2rem;
`;

export const CollectionItemsContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-gap: 10px;

	& > div {
		margin-bottom: 2rem;
	}

	@media screen and (max-width: 800px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: .9rem;
	}
`;