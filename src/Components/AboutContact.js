/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

//image
import babypic from "../Graphics/Home/babypic.jpg";
import resume from "../Graphics/Home/resume.jpg";
import resumePDF from "../Graphics/Home/resumePDF.pdf";
//css
import "../CSS/About.css";
import Resume from "../Cards/Resume";
//icon
import { RiHomeHeartLine } from "react-icons/ri";

function AboutContact() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <body className="about">
        <Link to="/" className="backHome">
          <h1>
            <RiHomeHeartLine />
          </h1>
        </Link>

        <div className="row">
          <div className="col">
            <img src={babypic} alt="babypic" className="babypic" />
          </div>

          <div className="col">
            <div className="copy">
              <p>
                My name is Honz, my pronouns are she/they, and I’m an artist &
                software engineer based in Brooklyn, USA.
              </p>

               <div className="poop">
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
                        <img src={resume} class="pic" />
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
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </body>
    </>
  );
}

export default AboutContact;

//  <Link to="/">{<Home />}</Link>
/*
                    <a className="resume"
                      href={resumePDF}
                      download="ResumeOfficial.pdf"
                    >
                      Download Resume
                    </a>*/
