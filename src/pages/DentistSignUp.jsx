import { Formik } from "formik";
import * as yup from "yup";
import { Container, Row, Col, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Gender } from "../constants/Gender";
import {
  StyledForm,
  StyledFormCheck,
  StyledFormControl,
  StyledFormLabel,
  StyledFormSelect,
  StyledGroup,
  StyledInlineFormGroup,
} from "../components/Form.style";
import { dateToString } from "../utils/DateUtils";
import styled from "styled-components";
import { DentalSpecialization } from "../constants/DentalSpecializtions";

const LeftAlignCol = styled(Col)`
  display: flex;
  align-items: center;
  width: 100%;
`;

const StyledRow = styled(Row)`
  margin: 1rem;
`;

const SubmitButton = styled(Button)`
  max-width: 10rem;
`;

const SubmitButtonWrapper = styled(StyledRow)`
  display: flex;
  align-items: center;
  margin-top: 3rem;
`;

const DentistSignUp = () => {
  const signUpSchema = yup.object().shape({
    email: yup.string().email().required("Valid Email is required!"),
    firstName: yup.string().required("isim yazsana oc"),
  });

  const signUp = (signUpData) => {
    console.log(`signUp Data ${signUpData}`);
  };

  return (
    <Container>
      <Formik
        validationSchema={signUpSchema}
        onSubmit={signUp}
        initialValues={{
          firstName: "",
          lastName: "",
          dateBirth: "",
          phoneNumber: "",
          email: "",
          dentalSpecialization: "",
          graduatedUniversity: "",
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setFieldValue,
          /* and other goodies */
        }) => (
          <StyledForm noValidate onSubmit={handleSubmit}>
            <Container>
              <StyledRow>
                <LeftAlignCol>
                  <StyledGroup>
                    <StyledFormLabel>Name</StyledFormLabel>
                    <StyledFormControl
                      name="firstName"
                      value={values.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={errors.firstName}
                      placeholder="name"
                      data-testid="name"
                    ></StyledFormControl>
                    <Form.Control.Feedback type="invalid">
                      {errors.firstName}
                    </Form.Control.Feedback>
                  </StyledGroup>
                </LeftAlignCol>
                <Col>
                  <Form.Group>
                    <StyledFormLabel>Last Name</StyledFormLabel>
                    <StyledFormControl
                      name="lastName"
                      value={values.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={errors.lastName}
                      placeholder="lastName"
                      data-testid="lastName"
                    ></StyledFormControl>
                    <Form.Control.Feedback type="invalid">
                      SoyIsim Zorunlu
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </StyledRow>
              <StyledRow>
                <LeftAlignCol>
                  <StyledInlineFormGroup key="inline-checkbox">
                    <StyledFormLabel>Last Name</StyledFormLabel>
                    <StyledFormCheck
                      data-testid="genderMale"
                      name="gender"
                      type="radio"
                      id="male"
                      label="Erkek"
                      value={Gender.Male}
                      checked={Gender.Male === values.gender}
                      onChange={handleChange}
                    ></StyledFormCheck>
                    <StyledFormCheck
                      data-testid="genderFemale"
                      name="gender"
                      type="radio"
                      id="female"
                      label="Kadin"
                      value={Gender.Female}
                      checked={Gender.Female === values.gender}
                      onChange={handleChange}
                    ></StyledFormCheck>
                  </StyledInlineFormGroup>
                </LeftAlignCol>

                <LeftAlignCol>
                  <StyledInlineFormGroup>
                    <StyledFormLabel>Birth of Date</StyledFormLabel>
                    <StyledFormControl
                      name="dateBirth"
                      dta-testid="dateBirth"
                      id="dateBirth"
                      type="date"
                      value={dateToString(values.dateBirth)}
                      onChange={(e) => {
                        setFieldValue("dateBirth", e.target.valueAsDate);
                      }}
                    ></StyledFormControl>
                  </StyledInlineFormGroup>
                </LeftAlignCol>
              </StyledRow>
              <StyledRow>
                <Col>
                  <Form.Group>
                    <StyledFormLabel>Phone Number</StyledFormLabel>
                    <StyledFormControl
                      name="phoneNumber"
                      data-testid="phoneNumber"
                      value={values.phoneNumber}
                      onChange={(e) => {
                        const { value } = e.target;
                        const regex = /^[0-9]+$/;
                        if (!value || regex.test(value)) {
                          setFieldValue("phoneNumber", value);
                        }
                      }}
                    ></StyledFormControl>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <StyledFormLabel>Email</StyledFormLabel>
                    <StyledFormControl
                      name="email"
                      data-testid="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={errors.email}
                    ></StyledFormControl>
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </StyledRow>
              <StyledRow>
                <LeftAlignCol>
                  <StyledGroup>
                    <StyledFormLabel>Graduated University</StyledFormLabel>
                    <StyledFormControl
                      name="graduatedUniversity"
                      date-testid="graduatedUniversity"
                      value={values.graduatedUniversity}
                      onChange={handleChange}
                    ></StyledFormControl>
                  </StyledGroup>
                </LeftAlignCol>
                <LeftAlignCol>
                  <StyledGroup>
                    <StyledFormLabel>Dental Specialization</StyledFormLabel>
                    <StyledFormSelect
                      name="dentalSpecialization"
                      value={values.dentalSpecialization}
                      onChange={handleChange}
                    >
                      {DentalSpecialization.map((spec) => {
                        return (
                          <option value={spec.value} key={spec.value}>
                            {spec.name}
                          </option>
                        );
                      })}
                    </StyledFormSelect>
                  </StyledGroup>
                </LeftAlignCol>
              </StyledRow>
              <SubmitButtonWrapper>
                <SubmitButton type="submit">Sign Up</SubmitButton>
              </SubmitButtonWrapper>
            </Container>
          </StyledForm>
        )}
      </Formik>
    </Container>
  );
};

export default DentistSignUp;
