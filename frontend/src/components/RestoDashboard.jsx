import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./RestoDashboard.css";

function RestoDashboard() {
  const navigate = useNavigate();
  return (
    <div className="back">
      <div className="linkbox">
        <p className="heading">Links for Restaurant management</p>
        <ul>
          <li className="dot">
            <Link to={"/addresto"} className="onelink">
              Add Restaurant
            </Link>
          </li>
          <br />
          <li className="dot">
            <Link to={"/manageresto"} className="onelink">
              Manage Restaurant
            </Link>
          </li>
          <br></br>
          <li className="dot">
            <Link to={"/restosignup"} className="onelink">
              Restaurant sign up
            </Link>
          </li>
          <br />
          <li className="dot">
            <Link to={"/restologin"} className="onelink">
              Restaurant log in
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default RestoDashboard;
