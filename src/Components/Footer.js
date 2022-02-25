import React from "react";
import "../CSS/Footer.css";
//are these images performative? probably
// import pp from "../Graphics/Home/pp.jpg";
// import blm from "../Graphics/Home/blm.jpg";
// import pride from "../Graphics/Home/pride.jpg";
//icons
import { RiLinkedinBoxFill, RiInstagramLine, RiGithubFill } from "react-icons/ri";

function Footer() {
  return (
    <footer>
      <div className="container-footer">
        <div className="col">
          <div className="social">
            <a
              href="https://www.instagram.com/honz.art/"
              target="_blank"
              className="social"
              rel="noreferrer"
            >
              <RiInstagramLine />
            </a>
            <a
              href="https://github.com/honzlavender"
              className="social"
              target="_blank"
              rel="noreferrer"
            >
              <RiGithubFill />
            </a>
            <a
              href="https://www.linkedin.com/in/honz/"
              className="social"
              target="_blank"
              rel="noreferrer"
            >
              <RiLinkedinBoxFill />
            </a>
          </div>
          {/* <img className="imgMain" src={pride} alt="pride" />
          <img className="imgMain" src={pp} alt="pp" />
          <img className="imgMain" src={blm} alt="blm" /> */}
        </div>
        <p className="copyright">
          © 2022 • Honz Williams • All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;

