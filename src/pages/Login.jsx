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

const Login = () => {
  // console.log("Login rendering");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const loginButtonDisabled = username && password ? false : true;

  const handleLogin = (e) => {
    // console.log("username :: " + username + " password  " + password);
    e.preventDefault();
    AxiosWrapper.login(username, password).then((response) => {
      navigate("/");
    })
    .catch(error => {

    });
  };

  return (
    <Container>
      <LoginWrapper>
        <InputWrapper>
          <StyledInput
            placeholder="email"
            onChange={(e) => {
              e.preventDefault();
              setUsername(e.target.value);
            }}
           value={username}
          ></StyledInput>
        </InputWrapper>
        <InputWrapper>
          <StyledInput
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          ></StyledInput>
        </InputWrapper>
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
