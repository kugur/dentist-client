import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Patient from "./pages/Patient";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Theme from "./components/Theme";
import GlobalStyle from "./components/GlobalStyle";
import { Fragment } from "react";
import SuccessfullLoggedIn from "./pages/SuccessfulLoggedIn";
import SelectRole from "./pages/DentistSignUp";
import withPermission from "./utils/WithPermission";
import 'bootstrap/dist/css/bootstrap.min.css';

const HomeWithPermission = withPermission(Home, ["ROLE_USER"], "/SelectRole");
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeWithPermission></HomeWithPermission>,
  },
  {
    path: "/successfulLogin",
    element: <SuccessfullLoggedIn></SuccessfullLoggedIn>,
  },
  { path: "/patient", element: <Patient></Patient> },
  { path: "/login", element: <Login></Login> },
  { path: "/signup", element: <SignUp></SignUp> },
  { path: "/selectRole", element: <SelectRole></SelectRole> },
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
