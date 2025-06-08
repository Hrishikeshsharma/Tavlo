import React from "react";
import LoginFormat from "./LoginFormat";

function RestoLogin() {
  return (
    <div>
      <LoginFormat
        url={"https://tavloserver.onrender.com/owner/login"}
        logintype={"Resturant Log In"}
        to={"restosignup"}
        next={"/restodashboard"}
      ></LoginFormat>
    </div>
  );
}

export default RestoLogin;
