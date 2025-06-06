import React from "react";
import "./PureVegSwitch.css";

function PureVegSwitch({ handleToggle, label, isOn }) {
  return (
    <div className="toggle-container">
      {label && <span className="label">{label}</span>}
      <div className="toggle-switch">
        <input
          checked={isOn}
          onChange={handleToggle}
          className="toggle-input"
          type="checkbox"
          id={`toggle-${label}`}
        />
        <label className="toggle-label" htmlFor={`toggle-${label}`}></label>
      </div>
    </div>
  );
}

export default PureVegSwitch;
