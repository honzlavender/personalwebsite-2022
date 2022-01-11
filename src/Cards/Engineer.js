//import { Card, Button } from "react-bootstrap";
import "../CSS/Cards.css";
import Cards from "./Cards";

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
import display from "../Graphics/Engineer/Portfolio/display.jpeg";
//project images
import aboutme from "../Graphics/Engineer/Portfolio/aboutme.jpg";
import artProject from "../Graphics/Engineer/Portfolio/artProject.jpg";
import artToggle from "../Graphics/Engineer/Portfolio/artToggle.JPG";
import devProject from "../Graphics/Engineer/Portfolio/devProject.jpg";
import devToggle from "../Graphics/Engineer/Portfolio/devToggle.JPG";
import sillySketch from "../Graphics/Engineer/Portfolio/sillySketch.jpg";
/**WE LOVE MOVIES */
//display
import moviesIphone from "../Graphics/Engineer/WeLoveMovies/moviesIphone.jpg";
import moviesIpad from "../Graphics/Engineer/WeLoveMovies/moviesIpad.jpg";
import moviesDesktop from "../Graphics/Engineer/WeLoveMovies/moviesDesktop.png";
/**FLASHCARD APP */
import alert from "../Graphics/Engineer/FlashcardApp/alert.png"
import card from "../Graphics/Engineer/FlashcardApp/card.png"
import deckCards from "../Graphics/Engineer/FlashcardApp/deckCards.png"
import editcard from "../Graphics/Engineer/FlashcardApp/editcard.png"
import flashcard from "../Graphics/Engineer/FlashcardApp/flashcard.png"
import flashcards404 from "../Graphics/Engineer/FlashcardApp/flashcards404.png"



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
          cover={display}
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
          cover={moviesDesktop}
          projectName="we love movies"
          pic1={moviesIphone}
          pic2={moviesIpad}
          pic3={moviesDesktop}
          pic4=""
          pic5=""
          pic6=""
          github="https://github.com/honzlavender/WeLoveMovies.git"
          description={`Back-End project using Node.js, Express, and Postgres. Built an API following RESTful design principles, created & customized a knexfile.js, connected databases, joined and nested data, and wrote database migrations using Knex. Connected to front-end react app and deployed to Heroku (cloud service)`}
        />
      </div>

      <div className="row-cards">
      <Cards
          cover={flashcard}
          projectName="flashcard app"
          pic1={flashcard}
          pic2={alert}
          pic3={deckCards}
          pic4={editcard}
          pic5={card}
          pic6={flashcards404}
          github="https://github.com/honzlavender/personal-website2022.git"
          description={`sketches for this very website, illustrated in procreate, 2021`}
        />
        <Cards
          cover={moviesDesktop}
          projectName="we love movies"
          pic1={moviesIphone}
          pic2={moviesIpad}
          pic3={moviesDesktop}
          pic4=""
          pic5=""
          pic6=""
          github="https://github.com/honzlavender/WeLoveMovies.git"
          description={`Back-End project using Node.js, Express, and Postgres. Built an API following RESTful design principles, created & customized a knexfile.js, connected databases, joined and nested data, and wrote database migrations using Knex. Connected to front-end react app and deployed to Heroku (cloud service)`}
        />
      </div>
    </div>
  );
}

export default Engineer;
