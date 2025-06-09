import React from "react";
import LoginFormat from "./LoginFormat";

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
      ></LoginFormat>
    </div>
  );
}

export default LogIn;
