import React, { useState } from "react";
import { Link } from "react-router-dom";
import Accounts from "./Accounts";
import "./TopNav.css";

function TopNav({ one, two, three, four, ol, tl, thl, fl }) {
  const [logOut, setLogOut] = useState(false);
  const [brandName] = useState("𝕋𝕒𝕧𝕝𝕠");

  const handleLogOut = () => {
    setLogOut(!logOut);
  };

  return (
    <div className="topnav-container">
      <div className="topnav">
        <Link className="fancy" to={"/tavlo"}>
          {brandName}
        </Link>
        <Link className="navbut" to={`/${ol}`}>
          {one}
        </Link>
        <Link className="navbut" to={`/${tl}`}>
          {two}
        </Link>
        <Link className="navbut" to={`/${thl}`}>
          {three}
        </Link>
        <Link className="navbut" to={`/${fl}`}>
          {four}
        </Link>
        <div className="user-wrapper">
          <div className="usericon">
            <img
              src="/user-3296.png"
              alt="user icon"
              onClick={handleLogOut}
              width="35"
              height="35"
            />
          </div>
          {logOut && (
            <div className="accounts-popup">
              <Accounts />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TopNav;
