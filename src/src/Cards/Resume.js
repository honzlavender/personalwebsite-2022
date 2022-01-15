import React from "react";
import "../CSS/Resume.css"
import { RiCloseCircleFill } from "react-icons/ri";


const Resume = props => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}><RiCloseCircleFill/></span>
        {props.content}
      </div>
    </div>
  );
};

export default Resume;