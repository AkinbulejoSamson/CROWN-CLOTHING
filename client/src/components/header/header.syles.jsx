import styled, {css} from "styled-components";
import { Link } from "react-router-dom";

const OptionContainerStyles = css`
  padding: .8rem 1rem;
  position: relative;
  font-size: 1.3rem;
  cursor: pointer;
  &::before {
    content: '';
    height: .1rem;
    position: absolute;
    display: block;
    bottom: .7rem;
    left: 0.5rem;
    right: 0.5rem;
    background: black;
    transform: scale(0,1);
    transition: transform ease-in-out 250ms;
  }
  &:hover::before {
    transform: scale(1,1);
  }
`

export const HeaderContainer = styled.div`
  height: 4.5rem;
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 5;
  background-color: white;
`

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 4.5rem;
  padding: 1.5rem;
`

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`

export const OptionLink = styled(Link)`
  ${OptionContainerStyles}
`

export const OptionDiv = styled.div`
  ${OptionContainerStyles}
`