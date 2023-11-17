import React, { useEffect, useState } from "react";
import axios from "axios";

const Patient = () => {
  const [patient, setPatient] = useState("");
  const [postResult, setPostResult] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:8181/api/patient")
      .then(function (response) {
        console.log("response");
        setPatient(JSON.stringify(response.data));
      })
      .catch(function (error) {
        setPatient(JSON.stringify(error));
        console.log("error" + JSON.stringify(error));
      })
      .finally(function () {});
  }, []);

  const handleButtonClick = () => {
    const data = new FormData();
    data.append("name", "deneme");
    data.append("id", "124");
    axios.post("http://localhost:8181/api/patient", data)
    .then(function(response) {
      setPostResult(JSON.stringify(response.data));
    }).catch(function(error) {
      setPostResult("error: " + JSON.stringify(error.message));
    })
  };

  return (
    <>
      <h1>Patient Sayfasi</h1>
      <div>{patient}</div>
      <div>{postResult}</div>
      <button onClick={() =>  handleButtonClick()}>Post Gonder</button>
    </>
  );
};

export default Patient;
