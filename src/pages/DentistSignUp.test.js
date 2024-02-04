import Theme from "../components/Theme";
const { createMemoryRouter, RouterProvider } = require("react-router-dom");
const { default: DentistSignUp } = require("./DentistSignUp");
const { render, screen } = require("@testing-library/react");
const { Fragment } = require("react");
const { default: GlobalStyle } = require("../components/GlobalStyle");

const routes = [{ path: "/signup", element: <DentistSignUp></DentistSignUp> }];

const renderSignUp = () => {
  const router = createMemoryRouter(routes, {
    initialEntries: ["/signUp"],
    initialIndex: 0,
  });

  return render(
    <Fragment>
      <Theme>
        <GlobalStyle></GlobalStyle>
        <RouterProvider router={router}></RouterProvider>
      </Theme>
    </Fragment>
  );
};

test("On signUp page, firstName should be rendered with placeholder name", () => {
  renderSignUp();
  const firstNameInputEl = screen.getByTestId("name");
  expect(firstNameInputEl).toBeInTheDocument();
});

test("On signUp page, LastName should be rendered with  data-test lastName", () => {
  renderSignUp();
  const lastNameInputEl = screen.getByTestId("lastName");
  expect(lastNameInputEl).toBeInTheDocument();
});

test("On signUpPage, Gender ComboBox should be rendered with data-testId gender", () => {
  renderSignUp();
  const genderMaleComboBox = screen.getByTestId("genderMale");
  const genderFemaleComboBox = screen.getByTestId("genderFemale");
  expect(genderFemaleComboBox).toBeInTheDocument();
  expect(genderMaleComboBox).toBeInTheDocument();
});

test("On signUpPage, Birth Date should be rendered with data-testId dateBirth", () => {
  renderSignUp();
  const dateBirthEl = screen.getByTestId("dateBirth");
  expect(dateBirthEl).toBeInTheDocument();
});

test("On signup page, Phone number should be rendered with date-testId phoneNumber", () => {
  renderSignUp();
  const phoneNumberEl = screen.getByTestId("phoneNumber");
  expect(phoneNumberEl).toBeInTheDocument();
});

test("On signup page, Email should be rendered with data-testId email", () => {
  renderSignUp();
  const emailEl = screen.getByTestId("email");
  expect(emailEl).toBeInTheDocument();
});


