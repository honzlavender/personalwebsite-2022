//import { Card, Button } from "react-bootstrap";
import Popup from "../Components/Popup";
import "../CSS/Cards.css";

//images for popup cards are passed through this file under prop 'pic'
//each file Engineer.js and Art.js hold the source of each pic


function Cards({
  cover,
  projectName,
  pic1,
  pic2,
  pic3,
  pic4,
  pic5,
  pic6,
  pic7,
  pic8,
  pic9,
  pic10,
  pic11,
  pic12,
  github,
  description,
  buttLabel
}) {
  return (
          <div className="card" class="card bg-none text-white">
            
            <img
              className="engineerCard"
              class="card-img"
              src={cover}
              alt="portfolio"
            />
            <div class="card-img-overlay">
              <div className="text-center">
                <button
                  className="cardButton"
                  type="button"
                  class="btnButton btn-rounded"
                >
                  <Popup
                    projectName={projectName}
                    github={github}
                    buttLabel={buttLabel}
                    pic1={pic1}
                    pic2={pic2}
                    pic3={pic3}
                    pic4={pic4}
                    pic5={pic5}
                    pic6={pic6}
                    pic7={pic7}
                    pic8={pic8}
                    pic9={pic9}
                    pic10={pic10}
                    pic11={pic11}
                    pic12={pic12}
                    description={description}
                  />
                </button>
              </div>
            </div>
          </div>

        
  );
}

export default Cards;
