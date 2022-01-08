import React, { useState } from "react";
import Project from "../Cards/ProjectPopup";
import "../CSS/Popup.css"

//image imports
import babypic from "../Graphics/Home/babypic.jpg";


function Popup({ title1, projectName }) {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <input
        className="popup"
        type="button"
        value={projectName}
        onClick={togglePopup}
      />
      {isOpen && (
        <Project
          content={
            <div className="pop">
              <img src={babypic} class="picCard" alt="" />
            </div>
          }
          handleClose={togglePopup}
        />
      )}
    </div>
  );
}

export default Popup;
