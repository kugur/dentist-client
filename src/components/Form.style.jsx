import Form from "react-bootstrap/Form";
import styled from "styled-components";

const StyledForm = styled(Form)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledFormLabel = styled(Form.Label)`
  display: flex;
  padding-left: 0.5rem;
  font-weight: 500;
  color: #0d4373;
`;

const StyledFormControl = styled(Form.Control)`
  width: 40rem;
  background: ${(props) => props.theme.colors.inputBackground};
  color: #0d4373;

  &:-webkit-autofill,
  &:-webkit-autofill:focus {
    color: ${(props) => props.theme.colors.inputFontColor};
  }

  &:focus {
    background: ${(props) => props.theme.colors.inputBackground};
  }
`;

export { StyledForm, StyledFormLabel, StyledFormControl };
