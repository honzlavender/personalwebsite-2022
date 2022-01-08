//import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Popup from "../Components/Popup";
import "../CSS/Cards.css";

//make prop linkTo to fill link to project
function Cards({ image, image2, projectName, title2, name }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="card" class="card bg-none text-white">
            <img
              className="engineerCard"
              class="card-img"
              src={image}
              alt="portfolio"
            />
            <div class="card-img-overlay">
                <div className="text-center">
                  <button
                    className="cardButton"
                    type="button"
                    class="btnButton btn-rounded"
                  >
                    <Popup projectName={projectName}/>
                  </button>
                </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" class="card bg-none text-white">
            <img
              className="engineerCard"
              class="card-img"
              src={image2}
              alt="portfolio"
            />
            <div class="card-img-overlay">
              <Link to="/aboutcontact">
                <div className="text-center">
                  <button
                    className="cardButton"
                    type="button"
                    class="btnButton btn-rounded"
                  >
                    {title2}
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
