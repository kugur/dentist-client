import React, { useEffect } from "react";
import AxiosWrapper from "../utils/AxiosWrapper";

const Home = () => {
    useEffect(() => {
        AxiosWrapper.get("/")
    },[]);
    return (
        <h1> Home Page</h1>
    )
};

export default Home;