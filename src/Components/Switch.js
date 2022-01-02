import React from "react";
import "../CSS/Switch.css";
import { RiMoonClearLine, RiSunLine } from "react-icons/ri";

const Switch = ({ toggleTheme }) => {
  return (
      <div className="toggle">
        <h6 className="label-dark-engineer">Engineer</h6>
        <span className="icon-dark">
          <RiMoonClearLine />
        </span>
        <input
          onChange={toggleTheme}
          className="react-switch-checkbox"
          id={`react-switch-new`}
          type="checkbox"
        />
        <label className="react-switch-label" htmlFor={`react-switch-new`}>
          <span className={`react-switch-button`}></span>
        </label>
        <span className="icon-light">
          <RiSunLine />
        </span>
        <h6 className="label-light-artist">Artist</h6>
      </div>
  );
};

export default Switch;
