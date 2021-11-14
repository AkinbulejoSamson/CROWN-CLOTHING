import styled,{css} from "styled-components";

const subColor = 'grey';
const mainColor = 'black';

const shrinkLabel = css`
  top: -.9rem;
  font-size: .9rem;
  color: ${mainColor};
`;

export const GroupContainer = styled.div`
  position: relative;
  margin: 3rem 0;
  input[type='password'] {
    letter-spacing: .3em;
  }
`;

export const FormInputContainer = styled.input`
  border: none;
  border-bottom: 1px solid ${subColor};
  border-radius: 0;
  width: 100%;
  background: none;
  background-color: white;
  font-size: 1.2rem;
  padding: 10px 10px 10px 5px;
  display: block;
  margin: 1.5rem 0;
  color: ${subColor};
  &:focus {
    outline: none;
  }
  &:focus ~ label {
    ${shrinkLabel}
  }
`;

export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 1rem;
  font-weight: normal;
  pointer-events: none;
  position: absolute;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  &.shrink {
    ${shrinkLabel}
  }
`;