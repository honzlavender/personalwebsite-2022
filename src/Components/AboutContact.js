import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
//image
import babypic from "../Graphics/Home/babypic.jpg";
import resume from "../Graphics/Home/resume.pdf";
//css
import "../CSS/About.css";

function AboutContact() {
  return (
    <>
      <body className="about">
        <Link to="/" className="backHome">
          <h1>home</h1>
        </Link>
<embed src={resume} type="pdf" className="pdf"/>

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
              <br />
              <p>
                I like to think of myself as a multiimedium artist though I
                spend a lot of my time illustrating.{" "}
              </p>
              <br />
              <p>
                I'm technically a full-stack engineer but my passion lies in
                front-end developement & design.
              </p>
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
