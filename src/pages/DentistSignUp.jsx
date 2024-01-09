import { Formik } from "formik";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import styled from "styled-components";
import { StyledForm, StyledFormControl, StyledFormLabel } from "../components/Form.style";

// const StyledForm = styled(Form)`
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const StyledFormLabel = styled(Form.Label)`
//   display: flex;
//   padding-left: 0.5rem;
//   font-weight: 500;
//   color: #0d4373;
// `;

// const StyledFormControl = styled(Form.Control)`
//   width: 40rem;
//   background: ${(props) => props.theme.colors.inputBackground};
//   color: #0d4373;

//   &:-webkit-autofill,
//   &:-webkit-autofill:focus {
//     color: ${(props) => props.theme.colors.inputFontColor};
//   }

//   &:focus {
//     background: ${(props) => props.theme.colors.inputBackground};
//   }
// `;

const DentistSignUp = () => {
  return (
    <Container>
      <Formik initialValues={{ firstName: "ugur", lastName: "kolip" }}>
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <StyledForm noValidate onSubmit={handleSubmit}>
            <Form.Group className="mb-3 loginForm" controlId="formBasicName">
              <StyledFormLabel>Name</StyledFormLabel>
              <StyledFormControl
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={errors.firstName}
                placeholder="name"
              ></StyledFormControl>
              <Form.Control.Feedback type="invalid">
                Isim Zorunlu
              </Form.Control.Feedback>
            </Form.Group>
          </StyledForm>
        )}
      </Formik>
    </Container>
  );
};

export default DentistSignUp;
