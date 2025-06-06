import React from "react";
import LoginFormat from "./LoginFormat";

function RestoLogin() {
  return (
    <div>
      <LoginFormat
        url={"http://localhost:8080/owner/login"}
        logintype={"Resturant Log In"}
        to={"restosignup"}
        next={"/restodashboard"}
      ></LoginFormat>
    </div>
  );
}

export default RestoLogin;
