import React from "react";
import LoginFormat from "./LoginFormat";

function LogIn() {
  return (
    <div>
      <LoginFormat
        url={"http://tavloserver.onrender.com/autho/login"}
        logintype={"Log In"}
        to={"/signup"}
        next={"/browse"}
      ></LoginFormat>
    </div>
  );
}

export default LogIn;
