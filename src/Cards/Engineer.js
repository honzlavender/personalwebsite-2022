//import { Card, Button } from "react-bootstrap";
import "../CSS/Cards.css";
import Cards from "./Cards";
import img1 from "../Graphics/img1.JPG";
import devProjectPage from "../Graphics/Engineer/devProjectPage.jpg";

//this file host the cards that appear on the toggle pages: Engineer & Artist
//using image props i will insert each projects display image
//project card 1: portfolio/website - graphics
import code from "../Graphics/Home/code.png"; //display image

//links for each project

//each <Card/> function has two cards
//both cards have the same prop function but different label
//example: image1, image2 - same job but different projects

function Engineer() {
  return (
    <div className="grid">
      <div className="row">
        <div className="blurb">
          <img src={code} alt="selfie" class="engineer" />
          <h6 class="blurb">
            Technically.. I'm a full-stack engineer but my passion is in
            front-end developement & design.
          </h6>
        </div>
        <Cards
          image={devProjectPage}
          image2={img1}
          title2="pomodoro"
          projectName= "portfolio"
        />
        <Cards
          image={img1}
          image2={img1}
          title1="flashcards"
          title2="grubdash"
          projectName="butthole"
        />
      </div>
    </div>
  );
}

export default Engineer;
