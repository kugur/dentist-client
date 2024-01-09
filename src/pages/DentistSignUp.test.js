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
  const firstNameInputEl = screen.getByPlaceholderText(/name/i);
  expect(firstNameInputEl).toBeInTheDocument();
});
