import React from "react";
import { useAuth } from "../contexts/authContext";
import "./Accounts.css";
import { useNavigate } from "react-router-dom";

function Accounts() {
  const navigate = useNavigate();
  const { user } = useAuth();
  function goTo() {
    navigate("/home");
  }
  return (
    <div>
      <div className="accbox">
        <img src="/user-3296.png" className="accicon"></img>
        <div className="mailbox">
          <p className="email">{user.email}</p>
        </div>
      </div>
      <div className="settingbox">
        <img src="/settings.png" alt="settings icon" className="setting"></img>
        <span className="setpara">Settings</span>
      </div>
      <div className="helpbox">
        <img src="/helpicon.png" className="help"></img>
        <span className="helppara">Help</span>
      </div>
      <div className="logoutbox">
        <button type="submit" className="logout" onClick={goTo}>
          Log out
        </button>
      </div>
    </div>
  );
}

export default Accounts;
