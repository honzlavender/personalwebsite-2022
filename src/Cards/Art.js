import "../CSS/Cards.css";
import Cards from "./Cards";
import img2 from "../Graphics/img2.jpg";

function Art() {
  return (
    <div className="fuck">
      <div className="row">
        <Cards
          image={img2}
          image2={img2}
          title1="unearthed pleasures"
          title2="open smarter"
        />
        <Cards
          image={img2}
          image2={img2}
          title1="custom portraits"
          title2="kenneth play"
        />
      </div>
    </div>
  );
}

export default Art;