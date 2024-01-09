import axios from "axios";
// import { __esModule } from "@testing-library/jest-dom/dist/matchers";
import AxiosWrapper from "./AxiosWrapper";

jest.mock('axios', () => ({
  create: jest.fn()
}));

afterEach(() => {
  jest.clearAllMocks();
});

test("When login called, should call http://localhost:8181/api/login with user/password header", () => {
  //Initialize
  const username = "ugur@gmail.com";
  const password = "1234";
  axios.post = jest.fn(() => {return new Promise((resolve, reject) => {
    resolve({data: "userInfo"})
  })});

  //Run Test
  AxiosWrapper.login(username, password);

  //Verify
  expect(axios.post.mock.calls).toHaveLength(1);
  expect(axios.post).toHaveBeenCalledWith("http://localhost:8181/api/login", null, {
    headers: {
      Authorization: `Basic ${btoa(`${username}:${password}`)}`,
    },
  });
});

