import React from "react";
import LoginFormat from "./LoginFormat";

function LogIn() {
  return (
    <div>
      <LoginFormat
        url={"http://localhost:8080/autho/login"}
        logintype={"Log In"}
        to={"/signup"}
        next={"/browse"}
      ></LoginFormat>
    </div>
  );
}

export default LogIn;
