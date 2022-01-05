//import { Card, Button } from "react-bootstrap";
import "../CSS/Cards.css";
import Cards from "./Cards";
import img1 from "../Graphics/img1.JPG";

function Engineer() {
  return (
    <div className="grid">
      <div className="row">
      <h6>some info about me as an engineer</h6>
        <Cards
          image={img1}
          image2={img1}
          title1="Portfolio"
          title2="pomodoro"
        />
        <Cards
          image={img1}
          image2={img1}
          title1="flashcards"
          title2="grubdash"
        />
      </div>
    </div>
  );
}

export default Engineer;

/*
      <Card className="engineerCard">
        <Card.Img variant="top" src={img1} />
        <Card.Body>
          <Card.Title style={{fontSize: '3vw'}}>Project 1</Card.Title>
          <Card.Text style={{fontSize: '2vw'}}>
            my portfolio!
          </Card.Text>
          <div className="text-center">
          <Button className="butt" variant="primary" style={{fontSize: '2vw'}}>Go somewhere</Button>
          </div>
        </Card.Body>
      </Card>
      */
