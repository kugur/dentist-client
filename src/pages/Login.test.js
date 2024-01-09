import { Fragment } from "react";
import Theme from "../components/Theme";
import GlobalStyle from "../components/GlobalStyle";
import { render, screen, act, waitFor } from "@testing-library/react";

import AxiosWrapper from "../utils/AxiosWrapper";
import userEvent from "@testing-library/user-event";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import Login from "./Login";

jest.mock("../utils/AxiosWrapper", () => ({
  login: jest.fn(),
  get: jest.fn(),
}));

// jest.mock("react-router-dom", () => ({
//   useNavigate: jest.fn(),
// }));

// const localStorageMock = {
//   getItem: jest.fn(),
//   setItem: jest.fn(),
//   removeItem: jest.fn(),
//   clear: jest.fn(),
// };
// window.localStorage = localStorageMock;

const HomePage = () => <div data-testid="homePage">Home Page</div>;
const routes = [
  {
    path: "/",
    element: <HomePage></HomePage>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
];

const renderLogin = () => {
  const router = createMemoryRouter(routes, {
    initialEntries: ["/login"],
    initialIndex: 0,
  });

  return render(
    <>
      <Theme>
        <RouterProvider router={router} />
      </Theme>
    </>
  );
};

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

test("Google sign button linked to 'http://localhost:8181/oauth2/authorization/google'", () => {
  renderLogin();
  const googleSignButton = screen.getByTestId("googleSignInButton");
  expect(googleSignButton).toHaveAttribute(
    "href",
    "http://localhost:8181/oauth2/authorization/google"
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
  await renderLogin();
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

test("if Login return 200, user is sent to home page", async () => {
  //Initialize
  const user = userEvent.setup();
  const response = {
    data: { email: "deneme@gmail.com", roles: ["ROLE_USER"] },
    status: 200,
  };
  AxiosWrapper.login = jest.fn(() => Promise.resolve(response));
  renderLogin();
  const userInputEl = screen.getByPlaceholderText(/email/i);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  const loginButton = screen.getByRole("button", { name: /Giris Yap/i });

  //Run Test
  await act(async () => {
    await user.type(userInputEl, "ugur@gmail.com");
    await user.type(passwordInputEl, "1234");
    await user.click(loginButton);
  });

  expect(screen.getByTestId("homePage")).toBeInTheDocument();
});

test("After successful login, userInfo that respone from login, should be stored on localstorage", async () => {
  //Initialize
  const localStorageMock = jest.spyOn(Storage.prototype, "setItem");

  const user = userEvent.setup();
  const response = {
    data: { email: "deneme@gmail.com", roles: ["ROLE_USER"] },
    status: 200,
  };
  AxiosWrapper.login = jest.fn(() => Promise.resolve(response));
  renderLogin();
  const userInputEl = screen.getByPlaceholderText(/email/i);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  const loginButton = screen.getByRole("button", { name: /Giris Yap/i });

  //Run Test
  await act(async () => {
    await user.type(userInputEl, "ugur@gmail.com");
    await user.type(passwordInputEl, "1234");
    await user.click(loginButton);
  });

  //Verify Result
  expect(localStorageMock).toHaveBeenCalledWith(
    "userInfo",
    JSON.stringify(response.data)
  );
});

test("After failed login, userInfo should be removed from localstorage", async () => {
  //Initialize
  const localStorageMock = jest.spyOn(Storage.prototype, "removeItem");

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
  const loginButton = screen.getByRole("button", { name: /Giris Yap/i });

  //Run Test
  await act(async () => {
    await user.type(userInputEl, "ugur@gmail.com");
    await user.type(passwordInputEl, "1234");
    await user.click(loginButton);
  });

  //Verify Result
  expect(localStorageMock).toHaveBeenCalledWith("userInfo");
});
