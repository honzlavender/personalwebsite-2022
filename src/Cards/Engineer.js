//import { Card, Button } from "react-bootstrap";
import "../CSS/Cards.css";
import Cards from "./Cards";
//import { RiGithubFill } from "react-icons/ri";

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
/**RESERVATION APP */
//display
import dashboard from "../Graphics/Engineer/ResApp/dashboard.png"
import newRes from "../Graphics/Engineer/ResApp/new-res.png"
import resCard from "../Graphics/Engineer/ResApp/res-card.png"
import search from "../Graphics/Engineer/ResApp/search.png"
import seated from "../Graphics/Engineer/ResApp/seated.png"
import recording from "../Graphics/Engineer/ResApp/recording.gif"
import sketch2 from "../Graphics/Engineer/ResApp/res-sketch2.jpg"
import sketch3 from "../Graphics/Engineer/ResApp/res-sketch3.jpg"
import { ResButton } from "../Components/OptionalLinks";
/**FLASHCARD APP */
import alert from "../Graphics/Engineer/FlashcardApp/alert.png";
import card from "../Graphics/Engineer/FlashcardApp/card.png";
import deckCards from "../Graphics/Engineer/FlashcardApp/deckCards.png";
import editcard from "../Graphics/Engineer/FlashcardApp/editcard.png";
import flashcard from "../Graphics/Engineer/FlashcardApp/flashcard.png";
import flashcards404 from "../Graphics/Engineer/FlashcardApp/flashcards404.png";
/**POMODORO TIMER */
import pomodoro from "../Graphics/Engineer/Pomodoro/pomodoro.png";
import onBreak from "../Graphics/Engineer/Pomodoro/onBreak.png";
import pause from "../Graphics/Engineer/Pomodoro/pause.png";
import working from "../Graphics/Engineer/Pomodoro/working.png";

function Engineer() {
  return (
    <div className="col-cards">
      <div className="row-blurb">
        <img src={code} alt="selfie" class="engineer" />
        <h6 class="blurb">
          Technically I'm a full-stack engineer but my passion is in front-end &
          design.
        </h6>
      </div>
      <div className="row-cards">
        <Cards
          cover={display}
          buttLabel="github repo"
          projectName="portfolio"
          pic1={artToggle}
          pic2={artProject}
          pic3={aboutme}
          pic4={devProject}
          pic5={devToggle}
          pic6={sillySketch}
          pic7=""
          pic8=""
          pic9=""
          pic10=""
          pic11=""
          pic12=""
          github="https://github.com/honzlavender/personalwebsite-2022.git"
          description={`this website right here was made with React using hooks, CSS, and patience, ideas and sketches illustrated in procreate. 2021`}
        />

        <Cards
          cover={sketch3}
          buttLabel="github repo"
          projectName="periodic tables"
          pic1=""
          pic2={sketch2}
          pic3={sketch3}
          pic4={recording}
          pic5={dashboard}
          pic6={resCard}
          pic7={newRes}
          pic8={seated}
          pic9={search}
          pic10=""
          pic11=""
          pic12=""
          github="https://github.com/honzlavender/reservation-app.git"
          description={`periodic tables is the final capstone project for thinkful's engineering bootcamp. A full-stack application that is intended for restaurants, bars, or any other spaces that take reservations. built using React and CSS for front-end, Node.js and Knex for back-end, and DBeaver for the databases.`}
          newLine={"sketches illustrated in procreate, 2022"}
          optionalLink={<ResButton/>}
        />
      </div>

      <div className="row-cards">
        <Cards
          cover={flashcard}
          projectName="flashcard app"
          buttLabel="github repo"
          pic1={flashcard}
          pic2={alert}
          pic3={deckCards}
          pic4={editcard}
          pic5={card}
          pic6={flashcards404}
          pic7=""
          pic8=""
          pic9=""
          pic10=""
          pic11=""
          pic12=""
          github="https://github.com/honzlavender/React-Flashcards.git"
          description={`a flashcard app that anyone can study and create, edit, and delete decks and cards via forms. utilizing react hooks, react routers, and inline styling. made with react, 2021`}
        />
        <Cards
          cover={pomodoro}
          buttLabel="github repo"
          projectName="pomodoro timer"
          pic1={working}
          pic2={pause}
          pic3={onBreak}
          pic4=""
          pic5=""
          pic6=""
          pic7=""
          pic8=""
          pic9=""
          pic10=""
          pic11=""
          pic12=""
          github="https://github.com/honzlavender/pomodoro.git"
          description={`the simplest and most modest pomodoro timer made with react, 2021`}
        />
      </div>
    </div>
  );
}

export default Engineer;
