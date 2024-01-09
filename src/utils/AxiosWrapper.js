import axios from "axios";


const hostName = "http://localhost:8181";

const instance = axios.create({
    // baseURL: "http://" + process.env.REACT_APP_SERVER_URL,
    baseURL: hostName,
    headers: {
      "Access-Control-Allow-Origin": "localhost:8181, localhost:3000",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH",
      "Access-Control-Allow-Headers":
        "Content-Type, Content-Length, Accept, Authorization, X-Requested-With",
    },
    withCredentials: true,
  });
  
const AxiosWrapper = {
    
    login: function(username, password) {
       
        return axios.post("http://localhost:8181/api/login", null, {
            headers: {
                Authorization: `Basic ${btoa(`${username}:${password}`)}`,
              }
        })
    },

    get: function(url) {
        return instance.get(hostName + url);
    }
}

export default AxiosWrapper;