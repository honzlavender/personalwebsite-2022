import "../CSS/Cards.css";
import Cards from "./Cards";
import img2 from "../Graphics/img2.jpg";
//import selfie2 from "../Graphics/Home/selfie2.png"
import art from "../Graphics/Home/art.png";

function Art() {
  return (
    <div className="col-cards">
    <div className="row-blurb">
      <h6 class="blurb-art">
      I like to think of myself as a multi-media artist though I spend most of my time illustrating.
      </h6>
      <img src={art} alt="selfie" class="artist" />
    </div>
    <div className="row-cards">
      <Cards
        image={img2}
        image2={img2}
        title2="pomodoro"
        projectName="portfolio"
      />
      <Cards
        image={img2}
        image2={img2}
        title2="pomodoro"
        projectName="portfolio"
      />
    </div>
  </div>
  );
}

export default Art;