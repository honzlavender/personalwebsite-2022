import "../CSS/Cards.css";
import Cards from "./Cards";
import img2 from "../Graphics/img2.jpg";

function Art() {
  return (
    <div className="row">
    <Cards image = {img2} image2={img2}/>
    <Cards image = {img2} image2={img2}/>
    </div>
  );
}

export default Art;