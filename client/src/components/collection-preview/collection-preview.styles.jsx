import styled from "styled-components";

export const CollectionPreviewContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 2rem;

	@media screen and (max-width: 800px) {
		align-items: center;
	}
`;

export const TitleContainer = styled.h1`
  cursor: pointer;
  font-size: 30px;
  margin-bottom: 1.5rem;

  &:hover {
    color: grey;
  }
`

export const PreviewContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media screen and (max-width: 800px) {
		display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
	}
`;
