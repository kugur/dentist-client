import styled from "styled-components";

const StyledInput = styled.input`
  height: 1.5rem;
  padding: 0.5rem;
  font-size: large;
  color: ${props => props.theme.colors.inputFontColor};
  border-radius: 0.5rem;

  &:-internal-autofill-selected {
    color: ${props => props.theme.colors.inputFontColor};
  }

  &:-webkit-autofill,
  &:-webkit-autofill:focus {
    color: ${props => props.theme.colors.inputFontColor};
  }
`;

export default StyledInput;
