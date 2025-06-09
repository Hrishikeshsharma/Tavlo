import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginFormat from "./LoginFormat";
import { useAuth } from "../contexts/AuthContext";

function LogIn() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/browse", { replace: true });
    }
  }, [user, navigate]);

  return (
    <div>
      <LoginFormat
        url={"https://tavloserver.onrender.com/autho/login"}
        logintype={"Log In"}
        to={"/signup"}
        next={"/browse"}
      />
    </div>
  );
}

export default LogIn;
