/* eslint-disable jsx-a11y/alt-text */
import { Link } from "react-router-dom";
import Footer from "./Footer";

import { RiBug2Line } from "react-icons/ri";

//image

//css
import "../CSS/About.css";
//icon
import { RiHomeHeartLine } from "react-icons/ri";
import Playing from "../Cards/Playing";
// import Playing from "../Cards/Playing";

function AboutContact() {
  return (
    <div className="AboutContact">
      <body className="about">
        <Link to="/" className="backHome">
          <h1 className="backHome">
            <RiHomeHeartLine />
          </h1>
        </Link>
        <Playing /> {/*about me container */}
      </body>
      <Footer />
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
