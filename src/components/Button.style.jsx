import styled from "styled-components";

const StyledButton = styled.button`
  background: ${props => props.theme.colors.buttonColor};
  color: ${props => props.theme.colors.white};
  font-size: large;
  width: 140px;
  height: 50px;
  border-radius: 5px;
  border: thin solid #888;
  white-space: nowrap;
  display: inline-block;
  padding-inline: 1rem;
`;

export default StyledButton;
