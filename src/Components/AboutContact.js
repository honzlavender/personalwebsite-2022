/* eslint-disable jsx-a11y/alt-text */
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { useNavigate } from "react-router";

//css
import "../CSS/About.css";
//icon
import { RiHomeHeartLine } from "react-icons/ri";
import AboutDesign from "../Cards/AboutDesign"
//import React, {useState} from "react";
// import Playing from "../Cards/Playing";

function AboutContact() {

  let navigate = useNavigate();

function handleClick() {
  navigate.push('/')
}

  return (
    <div className="AboutContact">
      <body className="about">
        <Link to="/" className="backHome" onClick={handleClick}>
            <RiHomeHeartLine />
        </Link>
        <AboutDesign /> {/*about me container */}
      </body>
      <Footer />
    </div>
  );
}

export default AboutContact;
