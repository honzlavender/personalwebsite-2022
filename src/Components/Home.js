import "../CSS/Name.css";
import "../CSS/Home.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Themes } from "./Theme";
import Switch from "./Switch";
import Footer from "./Footer";
//cards
import { RiBug2Line } from "react-icons/ri";

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
        <div className="aboutbox">
          <Link to="/aboutcontact" className="aboutcontact">
            {/* <h5>about && contact</h5> */}
            about && contact
          </Link>
        </div>
        <h1 className="bugs">
          <em>h</em>
          <em>o</em>
          {/*<em class="planet left">o</em>*/}
          <em>nz</em>
          <em class="planet right">
            <RiBug2Line />
          </em>
          <em>williams</em>
        </h1>
        <h1>
          <em class="planet left">
            <RiBug2Line />
          </em>
        </h1>

        <Switch toggleTheme={toggleTheme} />
        <h1>
          <em class="planet left" style={{ fontSize: "8vw" }}>
            <RiBug2Line />
          </em>
          <em class="planet right" style={{ fontSize: "12vw" }}>
            <RiBug2Line />
          </em>
        </h1>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
/*
        <div className="chunk">
        <h1 className="name">Honz Williams</h1>
        </div>
        */
