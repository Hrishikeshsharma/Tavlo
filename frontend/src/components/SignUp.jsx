import React from "react";
import SignupFormat from "./SignupFormat";

function SignUp() {
  return (
    <div>
      <SignupFormat
        url={"http://tavlo.onrender.com/autho/signup"}
        signuptype={"Sign Up"}
        to={"/login"}
      ></SignupFormat>
    </div>
  );
}

export default SignUp;
