import React from "react";
//import { useContext } from "react";
import "../CSS/Switch.css";
import { RiMoonClearFill, RiSunLine } from "react-icons/ri";
import { FaSun } from "react-icons/fa"
import Art from "../Cards/Art";
import Engineer from "../Cards/Engineer";
//import { Themes } from "./Theme";

const Switch = ({toggleTheme}) => {
  const [isOn, toggleIsOn] = useToggle();


//content on toggle: art or engineer projects
  function useToggle(initialValue = false) {
    const [value, setValue] = React.useState(initialValue);
    const toggle = React.useCallback(() => {
      setValue((v) => !v);
    }, []);
    return [value, toggle];
  }

  //when isOn is true it displays artist
//  console.log(isOn)


  return (
    <>
    <div className="toggle">
    <span className="icon-dark">
        <RiMoonClearFill />
      </span>
      <h6 className="label-dark-engineer">Engineer</h6>

      <input
        onClick={function (event) {
          toggleTheme();
          toggleIsOn();
        }}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      ></input>
      
      <label className="react-switch-label" htmlFor={`react-switch-new`}>
        <span className={`react-switch-button`}></span>
      </label>
      <h6 className="label-light-artist">Artist</h6>
      <span className="icon-light">
        <FaSun />
      </span>
    </div>
    
    <div className="cards">
      {isOn ? <Art /> : <Engineer />}
      </div>
    </>
  );
};

export default Switch;