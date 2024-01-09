import React, { useState } from "react";
import styled from "styled-components";
import StyledInput from "../components/Input.style";
import GoogleSignButton from "../components/GoogleSignButton";
import AxiosWrapper from "../utils/AxiosWrapper";
import StyledButton from "../components/Button.style";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginWrapper = styled.form`
  border: 1px;
  padding: 5rem;
  background-color: ${(props) => props.theme.colors.inputBackground};
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
`;

const InputWrapper = styled.div`
  margin: 1rem;
`;

const LoginButtonWrapper = styled.div`
  padding-inline: 1rem;
`;

const LoginButton = styled(StyledButton)`
  width: 100%;
`;

const SocialLoginWrapper = styled.div`
  margin: 1rem;
`;

const ErrorMessage = styled.div`
  color: red;
`;
const Login = () => {
  // console.log("Login rendering");
  const [loginInput, setLoginInput] = useState({ username: "", password: "" });
  const [errorMessageVisible, setErrorMessageVisible] = useState(false);
  const navigate = useNavigate();
  const loginButtonDisabled =
    loginInput.username && loginInput.password ? false : true;

  const handleLogin = (e) => {
    // console.log("username :: " + username + " password  " + password);
    e.preventDefault();
    AxiosWrapper.login(loginInput.username, loginInput.password)
      .then((response) => {
        global.localStorage.setItem("userInfo", JSON.stringify(response.data));
        navigate("/");
      })
      .catch((error) => {
        console.log(`error: ${error}`);
        setErrorMessageVisible(true);
        global.localStorage.removeItem("userInfo");
      });
  };

  const handleInput = (value, key) => {
    setLoginInput((loginInput) => ({ ...loginInput, [key]: value }));
    setErrorMessageVisible(false);
  };

  return (
    <Container>
      <LoginWrapper>
        <InputWrapper>
          <StyledInput
            placeholder="email"
            onChange={(e) => {
              e.preventDefault();
              handleInput(e.target.value, "username");
            }}
            value={loginInput.username}
          ></StyledInput>
        </InputWrapper>
        <InputWrapper>
          <StyledInput
            placeholder="password"
            type="password"
            onChange={(e) => handleInput(e.target.value, "password")}
            value={loginInput.password}
          ></StyledInput>
        </InputWrapper>
        <ErrorMessage
          data-testid="errorMessage"
          style={{ display: errorMessageVisible ? "block" : "none" }}
        >
          Yanlis Girdin Amk
        </ErrorMessage>
        <LoginButtonWrapper>
          <LoginButton
            data-testid="loginButton"
            onClick={(e) => handleLogin(e)}
            disabled={loginButtonDisabled}
          >
            Giris Yap
          </LoginButton>
        </LoginButtonWrapper>
        <SocialLoginWrapper>
          <GoogleSignButton></GoogleSignButton>
        </SocialLoginWrapper>
      </LoginWrapper>
    </Container>
  );
};
export default Login;

// return (
//   <div>
//     <div>
//       username: <input placeholder="email"></input>
//     </div>
//     <div>
//       password: <input></input>
//     </div>
//     <div>
//       <button onClick={(e) => handleSocialLogin(e)}>Google Button</button>
//       <a href="http://localhost:8585/oauth2/authorization/google">
//         Login by google Link
//       </a>
//     </div>
//     <div>
//       <button onClick={e => getToken(e)}>Get Token</button>
//       {token}
//     </div>
//     <div>
//       <button onClick={e => getPatient(e)}> Get Patient</button>
//     </div>
//     <div>
//       <button onClick={e => getTokenWithUserPassword(e)}>Get token with user-password</button>
//     </div>
//     <div>
//       <button onClick={e => logout(e)}>Logout </button>
//     </div>
//   </div>
// );

// const handleSocialLogin = (e) => {

// const myHeaders = new Headers();
// myHeaders.append(
//   "Access-Control-Allow-Origin",
//   "https://accounts.google.com/o/oauth2/v2/auth",
//   "accounts.google.com",
//   "google.com",
//   "https://accounts.google.com",
//   "localhost:3000, localhost:8181, http://localhost:3000, http://localhost:8181"
// );
// myHeaders.append(
//   "Access-Control-Allow-Methods",
//   "GET, POST, PUT, DELETE, PATCH"
// );
// const myRequest = new Request(
//   "http://localhost:8181/oauth2/authorization/google"
// );
// const myInit = {
//   method: "GET",
//   headers: myHeaders,
//   mode: "cors",
// };

// fetch(myRequest, myInit)
//   .then((response) => {
//     console.log("headers:: " + JSON.stringify(response.headers));
//   })
//   .catch((error) => {
//     console.log("errror ::: " + JSON.stringify(error));
//   });
// };

// const getTokenWithUserPassword = (e) => {
// const myHeaders = new Headers();
// myHeaders.append(
//   "Access-Control-Allow-Origin",
//   "https://accounts.google.com/o/oauth2/v2/auth",
//   "accounts.google.com",
//   "google.com",
//   "https://accounts.google.com",
//   "localhost:3000, localhost:8181, http://localhost:3000, http://localhost:8181"
// );
// myHeaders.append(
//   "Access-Control-Allow-Methods",
//   "GET, POST, PUT, DELETE, PATCH"
// );
// myHeaders.append("Authorization", "Basic ZGVuZW1AZ21haWwuY29tOjEyMzQ=");
// const myRequest = new Request("http://localhost:8181/api/token");
// const myInit = {
//   method: "POST",
//   headers: myHeaders,
//   mode: "cors",
//   credentials: "include",
// };

// fetch(myRequest, myInit)
//   .then((response) => {
//     setToken(JSON.stringify(response));
//   })
//   .catch((error) => {
//     console.log("token error::  " + JSON.stringify(error));
//   });
// };

// const getToken = (e) => {
// const myHeaders = new Headers();
// myHeaders.append(
//   "Access-Control-Allow-Origin",
//   "https://accounts.google.com/o/oauth2/v2/auth",
//   "accounts.google.com",
//   "google.com",
//   "https://accounts.google.com",
//   "localhost:3000, localhost:8181, http://localhost:3000, http://localhost:8181"
// );
// myHeaders.append(
//   "Access-Control-Allow-Methods",
//   "GET, POST, PUT, DELETE, PATCH"
// );
// const myRequest = new Request("http://localhost:8181/api/token");
// const myInit = {
//   method: "POST",
//   headers: myHeaders,
//   mode: "cors",
//   credentials: "include",
// };

// fetch(myRequest, myInit)
//   .then((response) => {
//     setToken(JSON.stringify(response));
//   })
//   .catch((error) => {
//     console.log("token error::  " + JSON.stringify(error));
//   });
// };

// const getPatient = (e) => {
// const myHeaders = new Headers();
// myHeaders.append(
//   "Access-Control-Allow-Origin",
//   "https://accounts.google.com/o/oauth2/v2/auth",
//   "accounts.google.com",
//   "google.com",
//   "https://accounts.google.com",
//   "localhost:3000, localhost:8181, http://localhost:3000, http://localhost:8181"
// );
// myHeaders.append(
//   "Access-Control-Allow-Methods",
//   "GET, POST, PUT, DELETE, PATCH"
// );
// const myRequest = new Request("http://localhost:8181/api/patient");
// const myInit = {
//   method: "GET",
//   headers: myHeaders,
//   mode: "cors",
//   credentials: "include",
// };

// fetch(myRequest, myInit)
//   .then((response) => {
//     setPatient(JSON.stringify(response));
//   })
//   .catch((error) => {
//     console.log("token error::  " + JSON.stringify(error));
//   });
// };

// const logout = (e) => {
// const myHeaders = new Headers();
// myHeaders.append(
//   "Access-Control-Allow-Origin",
//   "https://accounts.google.com/o/oauth2/v2/auth",
//   "accounts.google.com",
//   "google.com",
//   "https://accounts.google.com",
//   "localhost:3000, localhost:8181, http://localhost:3000, http://localhost:8181"
// );
// myHeaders.append(
//   "Access-Control-Allow-Methods",
//   "GET, POST, PUT, DELETE, PATCH"
// );
// const myRequest = new Request("http://localhost:8181/logout");
// const myInit = {
//   method: "GET",
//   headers: myHeaders,
//   mode: "cors",
//   credentials: "include",
// };

// fetch(myRequest, myInit)
//   .then((response) => {
//     setPatient(JSON.stringify(response));
//   })
//   .catch((error) => {
//     console.log("token error::  " + JSON.stringify(error));
//   });
// };
