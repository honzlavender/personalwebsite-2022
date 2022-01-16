import "../CSS/playing.css";
import React, { useState } from "react";
import Resume from "./Resume";

//RESUME AND BOX BLURB WITH ABOUT ME INFO

import { RiBug2Line } from "react-icons/ri";

import resume from "../Graphics/Home/resume.jpg";
import resumePDF from "../Graphics/Home/resumePDF.pdf";

function Playing() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="boxBoy">
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
          <p className="hi">Hi!</p>
          <p className="copy">
            I'm Honz (she/they) <br /> I'm an illustrator, painter, and software engineer inspired by
            people and the stories attached to them.
            <br/>
            Based in Brooklyn, USA
          </p>
          <div className="bothButtons">
            <div className="emailButton">
              <button type="button" class="email">
                <a
                  className="email"
                  target="_blank"
                  href="mailto:hellohonz@gmail.com?body=Hi Honz!"
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
          <p className="psh">
            "I know I wasn't as handsome as some other guys, but I was OK with
            that."
            <br />
            -Philip Seymour Hoffman
          </p>
        </p>
      </div>
    </div>
  );
}

export default Playing;