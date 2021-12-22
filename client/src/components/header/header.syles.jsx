import styled, {css} from "styled-components";
import { Link } from "react-router-dom";

const OptionContainerStyles = css`
	padding: 0.8rem 1rem;
	position: relative;
	font-size: 1.3rem;
	cursor: pointer;
	&::before {
		content: "";
		height: 0.15rem;
		position: absolute;
		display: block;
		bottom: 0.7rem;
		left: 0.5rem;
		right: 0.5rem;
		background: black;
		transform: scale(0, 1);
		transition: transform ease-in-out 250ms;
	}
	&:hover::before {
		transform: scale(1, 1);
	}

	@media screen and (max-width: 800px) {
    padding: 0.5rem 0.7rem;
    font-size: 1.1rem ;

    &::before {
      height: .2rem;
      bottom: 0.5rem
    }
  }
`;

export const HeaderContainer = styled.div`
	height: 4.5rem;
  width: 100%;
	display: flex;
	justify-content: space-between;
  top: 0;
	position: sticky;
	z-index: 5;
	background-color: white;
  margin-bottom: 25px;

	@media screen and (max-width: 800px) {
		height: 60px;
    padding: 10px;
    margin-bottom: 15px
	}
`;

export const LogoContainer = styled(Link)`
	height: 100%;
	width: 4.5rem;
	padding: 1.5rem;

	@media screen and (max-width: 800px) {
    width: 3rem;
    padding: 0
  }
`;

export const OptionsContainer = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	@media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const OptionLink = styled(Link)`
	${OptionContainerStyles}
`;

export const OptionDiv = styled.div`
	${OptionContainerStyles}
`;