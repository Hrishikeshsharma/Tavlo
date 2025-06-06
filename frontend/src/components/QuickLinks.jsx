import React from "react";
import { Link } from "react-router-dom";
import "./QuickLinks.css";

function QuickLinks() {
  return (
    <div className="bodyful">
      <div className="linkboxed">
        <div className="headparag">
          <p className="heading">Quick Links</p>
        </div>
        <ul>
          <li className="point">
            <Link to={"/home"} className="link">
              Home
            </Link>
          </li>
          <br />
          <li className="point">
            <Link to={"/signup"} className="link">
              Sign up
            </Link>
          </li>
          <br />
          <li className="point">
            <Link to={"/login"} className="link">
              Log in
            </Link>
          </li>
          <br />
          <li className="point">
            <Link to={"/restologin"} className="link">
              Restaurant Log in
            </Link>
          </li>
          <br />
          <li className="point">
            <Link to={"/restosignup"} className="link">
              Restaurant Sign up
            </Link>
          </li>
          <br />
          <li className="point">
            <Link to={"/restodashboard"} className="link">
              Restaurant Dashboard
            </Link>
          </li>
          <br />
        </ul>
      </div>
    </div>
  );
}
export default QuickLinks;
