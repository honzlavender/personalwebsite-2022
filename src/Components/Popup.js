import React, { useState } from "react";
import Project from "../Cards/ProjectPopup";
import "../CSS/Popup.css";

//import { RiGithubFill } from "react-icons/ri";

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
  pic7,
  pic8,
  pic9,
  pic10,
  pic11,
  pic12,
  github, 
  buttLabel,
  description,
  thisLink
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
              {buttLabel}
                </a>
              </button>
              <p className="projectDescription">{description}</p>
              <img src={pic1} className="picCard" alt="" />
              <img src={pic2} className="picCard" alt="" />
              <img src={pic3} className="picCard" alt="" />
              <img src={pic4} className="picCard" alt="" />
              <img src={pic5} className="picCard" alt="" />
              <img src={pic6} className="picCard" alt="" />
              <img src={pic7} className="picCard" alt="" />
              <img src={pic8} className="picCard" alt="" />
              <img src={pic9} className="picCard" alt="" />
              <img src={pic10} className="picCard" alt="" />
              <img src={pic11} className="picCard" alt="" />
              <img src={pic12} className="picCard" alt="" />
            </div>
          }
          handleClose={togglePopup}
        />
      )}
    </div>
  );
}

export default Popup;
//<Button thisLink={thisLink} buttLabel={buttLabel}/>
//<RiGithubFill /> github repo
