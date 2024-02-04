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
  font-weight: bold;
  color: #0d4373;
`;

const StyledFormControl = styled(Form.Control)`
  /* width: 40rem; */
  background: ${(props) => props.theme.colors.inputBackground};
  color: ${(props) => props.theme.colors.inputFontColor};
  
  &:-webkit-autofill,
  &:-webkit-autofill:focus {
    color: ${(props) => props.theme.colors.inputFontColor};
  }

  &:focus {
    background: ${(props) => props.theme.colors.inputBackground};
  }
`;

const StyledFormCheck = styled(Form.Check)``;

const StyledFormSelect = styled(Form.Select)`
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

const StyledInlineFormGroup = styled(Form.Group)`
  display: inline-flex;

  & label {
    display: flex;
    margin-right: 1rem;
    white-space: nowrap;
  }
`;

const StyledGroup = styled(Form.Group)`
  width: 100%;
`;

export {
  StyledForm,
  StyledFormLabel,
  StyledFormControl,
  StyledFormCheck,
  StyledInlineFormGroup,
  StyledGroup,
  StyledFormSelect,
};
