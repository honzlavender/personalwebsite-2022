//import { Card, Button } from "react-bootstrap";
import "../CSS/Cards.css";
import Cards from "./Cards";
import img1 from "../Graphics/img1.JPG";

//this file host the cards that appear on the toggle pages: Engineer & Artist
//using image props i will insert each projects display image
//project card 1: portfolio/website - graphics
import code from "../Graphics/Home/code.png"; //display image

//links for each project

//each <Card/> function has two cards
//both cards have the same prop function but different label
//example: image1, image2 - same job but different projects
//every different photo in each project will need its own prop
//for consistency i'm starting with 6 (pic1-pic6)
//***PORTFOLIO */
//display image
import devProjectPage from "../Graphics/Engineer/devProjectPage.jpg";
//project images
import aboutme from "../Graphics/Engineer/Portfolio/aboutme.jpg"
import artProject from "../Graphics/Engineer/Portfolio/artProject.jpg"
import artToggle from "../Graphics/Engineer/Portfolio/artToggle.JPG"
import devProject from "../Graphics/Engineer/Portfolio/devProject.jpg"
import devToggle from "../Graphics/Engineer/Portfolio/devToggle.JPG"
import sillySketch from "../Graphics/Engineer/Portfolio/sillySketch.jpg"



function Engineer() {
  return (
    <div className="col-cards">
      <div className="row-blurb">
        <img src={code} alt="selfie" class="engineer" />
        <h6 class="blurb">
          Technically.. I'm a full-stack engineer but my passion is in front-end
          developement & design.
        </h6>
      </div>
      <div className="row-cards">
        <Cards
          cover={sillySketch}
          projectName="portfolio"
          pic1={artToggle}
          pic2={artProject}
          pic3={aboutme}
          pic4={devProject}
          pic5={devToggle}
          pic6={sillySketch}
          github="https://github.com/honzlavender/personal-website2022.git"
          description={`sketches for this very website, illustrated in procreate, 2021`}
        />
        <Cards
          cover={devProjectPage}
          projectName="portfolio"
        />
      </div>

      <div className="row-cards">
        <Cards
          cover={devProjectPage}
          projectName="portfolio"
        />
        <Cards
          cover={devProjectPage}
          projectName="portfolio"
        />
      </div>
    </div>
  );
}

export default Engineer;

/*
        <div className="blurb">
          <img src={code} alt="selfie" class="engineer" />
          <h6 class="blurb">
            Technically.. I'm a full-stack engineer but my passion is in
            front-end developement & design.
          </h6>
        </div>
        *
            <Cards
              image={devProjectPage}
              image2={img1}
              title2="pomodoro"
              projectName="portfolio"
            />
            */
