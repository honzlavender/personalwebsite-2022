import "../CSS/playing.css";
import React, { useState } from "react";
import Resume from "./Resume";

import { RiBug2Line } from "react-icons/ri";

// import babypic from "../Graphics/Home/babypic.jpg";
import resume from "../Graphics/Home/resume.jpg";
import resumePDF from "../Graphics/Home/resumePDF.pdf";

function Playing() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div class="container__play">
        <h1 className="homeBugs">
          <em class="planet right">
            <RiBug2Line />
          </em>
          <em class="planet left">
            <RiBug2Line />
          </em>
        </h1>
        <p className="play">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla harum
          eaque ipsam magni autem id quod quae quas, facere eius quam? Ullam,
          laboriosam.
          <div className="bothButtons">
            <div className="emailButton">
              <button type="button" class="email">
                <a
                  className="email"
                  target="_blank"
                  href="mailto:hellohonz@gmail.com?body=My custom mail body"
                  download="HonzWilliamsResume.pdf"
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  email me
                </a>
              </button>
              <input
                className="CV"
                type="button"
                value="resume"
                onClick={togglePopup}
              />
              {isOpen && (
                <Resume
                  content={
                    <div className="pop">
                      <img src={resume} class="pic" alt="" />
                      <br />
                      <div className="container-resume">
                        <button type="button" class="btn">
                          <a
                            className="resume"
                            href={resumePDF}
                            download="HonzWilliamsResume.pdf"
                          >
                            Download Resume
                          </a>
                        </button>
                        <button type="button" class="btn">
                          <a
                            href={resumePDF}
                            target="_blank"
                            className="resume"
                            rel="noreferrer"
                          >
                            {" "}
                            open in new tab
                          </a>
                        </button>
                      </div>
                    </div>
                  }
                  handleClose={togglePopup}
                />
              )}
            </div>
          </div>
          {/* <div class="container__play"> */}
          {/* <p className="play">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla harum
        eaque ipsam magni autem id quod quae quas, facere eius quam? Ullam,
        laboriosam. */}
        </p>
      </div>
    </>
  );
}

export default Playing;

// {/* <p>Hi hi! </p>
// <p>
//   My name is Honz, my pronouns are she/they, and I’m an artist &
//   software engineer based in Brooklyn, USA.
// </p>
// <br />
// <p style={{ textAlign: "right" }}>
//   I like to think of myself as a multi-media artist though I spend
//   most of my time illustrating.
// </p> */}
