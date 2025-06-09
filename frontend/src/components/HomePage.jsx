import React from "react";
import "./HomePage.css";
import TopNav from "./TopNav";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="background">
      <div>
        <TopNav
          one={"Log in"}
          two={"Sign up"}
          three={"Quick links"}
          ol={"login"}
          tl={"signup"}
          thl={"quicklinks"}
        />
        <br />
        <img
          src="/imagesforapp/tavlo.jpg"
          alt="tavlo image"
          className="tavlo"
        />
        <h1 className="backhead">
          Book table at your
          <div>
            <span className="favor">Favorite</span>&nbsp; Restaurant
          </div>
        </h1>

        <div className="logsign">
          <button className="signlog" onClick={() => navigate("/signup")}>
            Sign Up
          </button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button className="signlog" onClick={() => navigate("/login")}>
            Log In
          </button>
        </div>
      </div>

      <div className="rightsbox">
        <p className="rights">
          By continuing past this page, you agree to our Terms of Service,
          Cookie Policy, Privacy Policy and Content Policies. All trademarks are
          properties of their respective owners 2008-2025 © Tavlo™ Ltd. All
          rights reserved.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
