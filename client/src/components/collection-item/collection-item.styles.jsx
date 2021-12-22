import styled from "styled-components";

import CustomButton from "../custom-button/custom-button.component";

export const CollectionItemContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 22vw;
	height: 400px;
	align-items: center;
	position: relative;
	&:hover {
		.image {
			opacity: 0.8;
		}

		button {
			opacity: 0.85;
			display: flex;
		}
	}

	@media screen and (max-width: 800px) {
		width: 40vw;

		&:hover {
			.image {
				opacity: unset;
			}

			button {
				opacity: unset;
			}
		}
	}
`;

export const ItemImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 0.35rem;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`

export const AddButton = styled(CustomButton)`
	width: 80%;
	opacity: 0.7;
	position: absolute;
	bottom: 3rem;
	display: none;

	@media screen and (max-width: 800px) {
		display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px;
	}
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 1.3rem;
`

export const ItemName = styled.span`
  width: 85%;
  margin-bottom: 1rem;
`

export const ItemPrice = styled.span`
  width: 15%;
  display: flex;
  justify-content: flex-end;
`