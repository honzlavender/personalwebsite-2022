import React from "react";
import "../CSS/Footer.css";
import pp from "../Graphics/Home/pp.jpg";
import blm from "../Graphics/Home/blm.jpg";
import pride from "../Graphics/Home/pride.jpg";
//icons
import { RiTwitterLine, RiInstagramLine } from "react-icons/ri";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-social">
          <a href="https://www.instagram.com/honz.art/" target="_blank" className="social" rel="noreferrer"><RiInstagramLine/></a>
          <a href="https://twitter.com/honzlavender" className="social" target="_blank" rel="noreferrer"><RiTwitterLine/></a>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <img className="imgMain" src={pride} alt="pride" />
            <img className="imgMain" src={pp} alt="pp" />
            <img className="imgMain" src={blm} alt="blm" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

/*
  <footer className="container">
    <div className="row-footer">
      <img className="imgMain" src={pride} alt="pride" />
      <img className="imgMain" src={pp} alt="pp" />
      <img className="imgMain" src={blm} alt="blm" />
    </div>
    <div className="row-footer">
        
    </div>
  </footer>
      */
