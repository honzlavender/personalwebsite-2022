import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import components
import Home from "./Components/Home";
import AboutContact from "./Components/AboutContact";

function App({ poop }) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutcontact" handler={poop} element={<AboutContact />} />
      </Routes>
    </Router>
  );
}

export default App;