import React from "react";

const Project = props => {
  return (
    <div className="popup-project">
      <div className="box-project">
        <span className="close-icon2" onClick={props.handleClose}>x</span>
        {props.content}
      </div>
    </div>
  );
};

export default Project;