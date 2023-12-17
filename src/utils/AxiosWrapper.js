import axios from "axios";


const AxiosWrapper = {
    login: function(username, password) {
       
        return axios.post("http://localhost:8181/api/login", null, {
            headers: {
                Authorization: `Basic ${btoa(`${username}:${password}`)}`,
              }
        })
    }
}

export default AxiosWrapper;