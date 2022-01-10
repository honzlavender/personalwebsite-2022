import React, { useState } from "react";
import Project from "../Cards/ProjectPopup";
import "../CSS/Popup.css";

import { RiGithubFill } from "react-icons/ri";

//image imports
//import babypic from "../Graphics/Home/babypic.jpg";

//images in project card popups start here inside the prop 'pic'
//they are passed through Cards.js into <Popup /> props

function Popup({ 
  projectName, 
  pic1, 
  pic2, 
  pic3, 
  pic4, 
  pic5, 
  pic6, 
  github, 
  description,
 }) {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="poop">
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
              <button type="button" class="btn">
                <a
                  href={github}
                  target="_blank"
                  className="resume"
                  rel="noreferrer"
                  style={{textDecoration: 'none'}}
                >
                  {" "}
              <RiGithubFill /> github repo
                </a>
              </button>
              <p className="projectDescription">{description}</p>
              <img src={pic1} class="picCard" alt="pic1" />
              <img src={pic2} class="picCard" alt="pic2" />
              <img src={pic3} class="picCard" alt="pic3" />
              <img src={pic4} class="picCard" alt="pic4" />
              <img src={pic5} class="picCard" alt="pic5" />
              <img src={pic6} class="picCard" alt="pic6" />
            </div>
          }
          handleClose={togglePopup}
        />
      )}
    </div>
  );
}

export default Popup;
