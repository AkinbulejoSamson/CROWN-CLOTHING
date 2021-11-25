import styled, { css } from 'styled-components';

const ButtonStyles = css`
  background-color: black;
  color: white;
  border: none;
  outline: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`

const InvertedButtonStyles = css`
  background-color: white;
  color: black;
  border:none;

  &:hover {
    background-color: black;
    color: white;
    border:none;
  }
`

const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;
  border: none;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`

const getButtonStyles = props => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  return props.inverted ? InvertedButtonStyles : ButtonStyles;
}

export const CustomButtonContainer = styled.button`
  min-width: 8rem;
  width: auto;
  height: 50px;
  letter-spacing: .5px;
  line-height: 3rem;
  padding: 0 2rem;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: bolder;
  font-family: 'Open Sans Condensed';
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${getButtonStyles}
`