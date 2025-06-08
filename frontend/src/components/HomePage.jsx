import React from "react";
import "./HomePage.css";
import { useState } from "react";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import TopNav from "./TopNav";

function HomePage() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogIn, setShowLogIn] = useState(false);

  function handChange() {
    setShowSignUp(true);
  }

  function handchangetwo() {
    setShowLogIn(true);
  }

  return (
    <div className="background">
      {showSignUp ? (
        <SignUp></SignUp>
      ) : showLogIn ? (
        <LogIn></LogIn>
      ) : (
        <div>
          <TopNav
            one={"Log in"}
            two={"Sign up"}
            three={"Quick links"}
            ol={"login"}
            tl={"signup"}
            thl={"quicklinks"}
          ></TopNav>
          <br />
          <h1 className="backhead">
            Book table at your
            <div>
              <span className="favor">Favorite</span>&nbsp; Restaurant
            </div>
          </h1>
          <div className="logsign">
            <span onClick={handChange} className="signlog">
              SignUp
            </span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span onClick={handchangetwo} className="signlog">
              LogIn
            </span>
          </div>
        </div>
      )}
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
