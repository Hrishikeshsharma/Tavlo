import React from "react";
import SignupFormat from "./SignupFormat";
function RestoSignup() {
  return (
    <div>
      <SignupFormat
        url={"http://localhost:8080/owner/signup"}
        signuptype={"Restaurant SignUp"}
        to={"/restologin"}
      ></SignupFormat>
    </div>
  );
}

export default RestoSignup;
