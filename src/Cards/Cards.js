//import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../CSS/Cards.css";
import { RiEmotionHappyLine } from "react-icons/ri";


function Cards({image, image2, title1, title2}) {
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
              <Link to="/">
                <div className="text-center">
                  <button type="button" class="btn btn-primary btn-rounded">
                    {title1}
                  </button>
                </div>
              </Link>
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
                  <button type="button" class="btn btn-primary btn-rounded">
                    {title2}
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
)
}

export default Cards;