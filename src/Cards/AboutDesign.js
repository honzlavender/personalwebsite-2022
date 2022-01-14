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
            I'm Honz (she/they) <br /> I'm an illustrator & painter inspired by
            people and the stories attached to them
            <br/>
            <br/>
            {/* There are 3 persons in me: The Queer, The Artist, & The Software Engineer */}
            <p className="paragraph">
              I like to think of myself as a multi-media artist though I spend most of my time illustrating. <br/>
            <br/>
              Technically I'm a full-stack engineer but my passion is in
              front-end & design.
            </p>
          </p>
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