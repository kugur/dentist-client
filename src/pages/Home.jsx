import React, { useEffect } from "react";
import AxiosWrapper from "../utils/AxiosWrapper";

const Home = () => {
       
    return (
        <>
        <h1> Home Page</h1>
        <div>
            {localStorage.getItem("userInfo")}
        </div>
        </>
    )
};

export default Home;