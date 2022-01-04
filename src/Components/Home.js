import "../CSS/Home.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
//import { Themes } from "/Theme";
import { Themes } from "./Theme";
import Switch from "./Switch";
import Footer from "./Footer";
//cards

function Home() {
  const [{ theme }, toggleTheme] = useContext(Themes);

  return (
    <div className="home">
      <div
        className="App"
        style={{
          backgroundColor: theme.backgroundColor,
          color: theme.color,
        }}
      >
        <Link to="/aboutcontact" className="aboutcontact">
        <h6>about && contact</h6>
        </Link>
        <br />
        <h1 className="name">Honz Lavender</h1>
        <Switch toggleTheme={toggleTheme}/>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
