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
        <h5>about && contact</h5>
        </Link>
        <br />
        <h1 className="name">Honz Williams</h1>
        <Switch toggleTheme={toggleTheme}/>
        
        <Footer />
      </div>
    </div>
  );
}

export default Home;
