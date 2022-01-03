import "../CSS/Home.css";
import { Link } from "react-router-dom";
import AboutContact from "./AboutContact";
import { useContext } from "react";
//import { Themes } from "/Theme";
import { Themes } from "./Theme";
import Switch from "./Switch";
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
          {<AboutContact />}
        </Link>
        <br />
        <h1 className="name">Honz Lavender</h1>
        <Switch toggleTheme={toggleTheme}/>
      </div>
    </div>
  );
}

export default Home;
