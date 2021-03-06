import styled from "styled-components";

import CustomButton from "../custom-button/custom-button.component";

export const CartDropdownContainer = styled.div`
	position: absolute;
	width: 15rem;
	height: 21rem;
	display: flex;
	flex-direction: column;
	border: 1px solid black;
	background-color: white;
	z-index: 5;
	top: 4.5rem;
	right: 0rem;
	padding: 20px;

	@media screen and (max-width: 800px) {
    height: 15rem;
    width: 10rem;
		padding: 5px;
	}
`;

export const CartItemsContainer = styled.div`
  height: 15rem;
  display: flex;
  flex-direction: column;
  overflow: auto ;
  font-family: 'Open Sans Condensed';

  &::-webkit-scrollbar {
    width: .7em;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.0);
  }

  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
  }
`

export const EmptyMessageContainer = styled.span`
	font-size: 1.5rem;
	margin: 6rem auto;

	@media screen and (max-width: 800px) {
		font-size: 1.2rem;
    margin: auto;
	}
`;

export const CartDropdownButton = styled(CustomButton)`
  margin-top: auto; 
`