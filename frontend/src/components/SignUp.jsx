import React from "react";
import SignupFormat from "./SignupFormat";

function SignUp() {
  return (
    <div>
      <SignupFormat
        url={"http://localhost:8080/autho/signup"}
        signuptype={"Sign Up"}
        to={"/login"}
      ></SignupFormat>
    </div>
  );
}

export default SignUp;
