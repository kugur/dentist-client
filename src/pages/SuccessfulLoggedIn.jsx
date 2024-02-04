import React, { useEffect } from "react";
import AxiosWrapper from "../utils/AxiosWrapper";
import { useNavigate } from "react-router-dom";



const SuccessfullLoggedIn = () => {
    const navigate = useNavigate();
    useEffect( () => {
        AxiosWrapper.get("/api/user").then(response => {
            global.localStorage.setItem("userInfo", JSON.stringify(response.data));
            
            if (response.data.roles.indexOf("ROLE_PRE_USER") > -1) {
                navigate("/dentistSignUp")
            } else {
                navigate("/");
            }
           
        })
    }, []);
    return (
        <></>
    );
};

export default SuccessfullLoggedIn; 