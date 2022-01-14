/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

import { RiBug2Line } from "react-icons/ri";

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
    <div className="App">
      <body className="about">
        <Link to="/" className="backHome">
          <h1 className="backHome">
            <RiHomeHeartLine />
          </h1>
        </Link>
        <h1 className="homeBugs">
          <em class="planet right">
            <RiBug2Line />
          </em>
          <em class="planet left">
            <RiBug2Line />
          </em>
        </h1>
        <div class="row" className="aboutBody">
          <div className="col-about">
            <img src={babypic} alt="babypic" className="babypic" />
          </div>

          <div className="col">
            <div className="copy">
              <p>
                My name is Honz, my pronouns are she/they, and I’m an artist &
                software engineer based in Brooklyn, USA.
              </p>
              <br />
              <p style={{ textAlign: "right" }}>
                I like to think of myself as a multi-media artist though I spend
                most of my time illustrating.
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
        </div>
        <br />
        <br />
        <br />
        <Footer />
      </body>
    </div>
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
