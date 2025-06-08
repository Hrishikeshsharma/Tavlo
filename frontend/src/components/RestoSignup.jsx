import React from "react";
import SignupFormat from "./SignupFormat";
function RestoSignup() {
  return (
    <div>
      <SignupFormat
        url={"https://tavloserver.onrender.com/owner/signup"}
        signuptype={"Restaurant SignUp"}
        to={"/restologin"}
      ></SignupFormat>
    </div>
  );
}

export default RestoSignup;
