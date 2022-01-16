import React from "react";
import { RiCloseCircleFill } from "react-icons/ri";
//resume popup

const Project = props => {
  return (
    <div className="popup-project">
      <div className="box-project">
        <span className="close-icon2" onClick={props.handleClose}><RiCloseCircleFill/></span>
        {props.content}
      </div>
    </div>
  );
};

export default Project;