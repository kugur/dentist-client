import { Fragment } from "react";
import Theme from "../components/Theme";
import GlobalStyle from "../components/GlobalStyle";
import { render, screen, act, waitFor } from "@testing-library/react";
import Login from "./Login";
import AxiosWrapper from "../utils/AxiosWrapper";
import userEvent from "@testing-library/user-event";
import { useNavigate } from "react-router-dom";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

const renderLogin = () =>
  render(
    <Fragment>
      <Theme>
        <GlobalStyle></GlobalStyle>
        <Login></Login>
      </Theme>
    </Fragment>
  );

test("username input should be rendered with email placeholder", () => {
  renderLogin();
  const userInputEl = screen.getByPlaceholderText(/email/i);
  expect(userInputEl).toBeInTheDocument();
});

test("password input should be rendered with password placeholder", () => {
  renderLogin();
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  expect(passwordInputEl).toBeInTheDocument();
});

test("password input type should be password", () => {
  renderLogin();
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  expect(passwordInputEl).toHaveAttribute("type", "password");
});

test("Should have google sign button.", () => {
  renderLogin();
  const googleSignButton = screen.getByText("Google");
  expect(googleSignButton).toBeInTheDocument();
});

test("Google sign button linked to 'http://localhost:8080/oauth2/authorization/google'", () => {
  renderLogin();
  const googleSignButton = screen.getByTestId("googleSignInButton");
  expect(googleSignButton).toHaveAttribute(
    "href",
    "http://localhost:8080/oauth2/authorization/google"
  );
});

test("Should have login button wih 'Giris Yap' label", () => {
  renderLogin();
  const loginButton = screen.getByRole("button", { name: /Giris Yap/i });
  expect(loginButton).toBeInTheDocument();
});

test("When login button clicked, AxiosWrapper.Login method should be called.", async () => {
  const user = userEvent.setup();
  AxiosWrapper.login = jest.fn(() => Promise.resolve({ data: "userInfo" }));
  renderLogin();
  const userInputEl = screen.getByPlaceholderText(/email/i);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);

  //Run test
  await act(async () => {
    await user.type(userInputEl, "ugur@gmail.com");
    await user.type(passwordInputEl, "1234");
    await user.click(screen.getByRole("button", { name: /Giris Yap/i }));
  });

  expect(AxiosWrapper.login).toHaveBeenCalled();
});

test("If username and/or empty, login button should be disabled.", () => {
  //Initialize
  const user = userEvent.setup();
  renderLogin();
  const loginButton = screen.getByRole("button", { name: /Giris Yap/i });

  //Verify
  expect(loginButton).toBeDisabled();
});

test("User can type on username and password input", async () => {
  //Initialize
  const user = userEvent.setup();
  renderLogin();
  const userInputEl = screen.getByPlaceholderText(/email/i);
  const username = "ugur@gmail.com";
  //Run Test
  await act(async () => {
    await user.click(userInputEl);
    await user.keyboard(username);
  });
  //Verify Resutlt
  expect(userInputEl).toHaveValue(username);
});

test("If Login return 403, show error messaage", async () => {
  const user = userEvent.setup();
  const error = {
    message: "Request failed with status code 403",
    name: "AxiosError",
    code: "ERR_BAD_REQUEST",
    status: 403,
  };
  
  AxiosWrapper.login = jest.fn(() => Promise.reject(error));
  renderLogin();
  const userInputEl = screen.getByPlaceholderText(/email/i);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  const errorMessageEl = screen.getByTestId("errorMessage");

  //Run test
  await act(async () => {
    await user.type(userInputEl, "ugur@gmail.com");
    await user.type(passwordInputEl, "1234");
    await user.click(screen.getByRole("button", { name: /Giris Yap/i }));
  });

  await waitFor(() => expect(errorMessageEl).toBeVisible());
});

// test("After fill the username and password, login button should be active.", async () => {
//   //Initialize
//   const user = userEvent.setup();
//   renderLogin();
//   const loginButton = screen.getByRole("button", {name: /Giris Yap/i});
//   const passwordInputEl = screen.getByPlaceholderText(/password/i);
//   const userInputEl = screen.getByPlaceholderText(/email/i);

//   //Run Test
//   await user.pointer(passwordInputEl, '[MouseLeft]');

// });
