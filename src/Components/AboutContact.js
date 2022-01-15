/* eslint-disable jsx-a11y/alt-text */
import { Link } from "react-router-dom";
import Footer from "./Footer";

//css
import "../CSS/About.css";
//icon
import { RiHomeHeartLine } from "react-icons/ri";
import AboutDesign from "../Cards/AboutDesign"
// import Playing from "../Cards/Playing";

function AboutContact() {
  return (
    <div className="AboutContact">
      <body className="about">
        <Link to="/" className="backHome">
            <RiHomeHeartLine />
        </Link>
        <AboutDesign /> {/*about me container */}
      </body>
      <Footer />
    </div>
  );
}

export default AboutContact;
