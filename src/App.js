import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Patient from "./pages/Patient";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Theme from "./components/Theme";
import GlobalStyle from "./components/GlobalStyle";
import { Fragment } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  { path: "/patient", element: <Patient></Patient> },
  { path: "/login", element: <Login></Login> },
  { path: "/signup", element: <SignUp></SignUp> },
]);

function App() {
  return (
    <Fragment>
      <Theme>
        <GlobalStyle></GlobalStyle>
        <div className="App">
          <RouterProvider router={router} />
        </div>
      </Theme>
    </Fragment>
  );
}

export default App;
