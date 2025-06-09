import React from "react";
import LoginFormat from "./LoginFormat";

function LogIn() {
  return (
    <div>
      <LoginFormat
        url={"http://tavlo.onrender.comautho/login"}
        logintype={"Log In"}
        to={"/signup"}
        next={"/browse"}
      ></LoginFormat>
    </div>
  );
}

export default LogIn;
