import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


//import components
import Home from "./Components/Home";
import AboutContact from "./Components/AboutContact";

function App() {
  return (

    
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutcontact" element={<AboutContact />} />
        </Routes>
      </Router>
  );
}

export default App;

/*
  const isSmartPhone = useMediaQuery({ query: '(min-width: 480px)' })
  const isTablet = useMediaQuery({ query: '(min-width: 767px)' })
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
  return (
        <><div>
          {isSmartPhone}
          {isTablet}
          {isDesktopOrLaptop}
          {isBigScreen}
          {isPortrait}
          {isRetina}
    </div>

        <><div>
          {isSmartPhone}
          {isTablet}
          {isDesktopOrLaptop}
          {isBigScreen}
          {isPortrait}
          {isRetina}
    </div>
    //////

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
  const isMobile = useMediaQuery(200)
  const isTablet = useMediaQuery(768);
  const isDesktop = useMediaQuery(1200);
  /////
        className={classNames([
        isDesktopOrLaptop,
        isBigScreen,
        isTablet,
        isTabletOrMobile,
        isPortrait,
        isRetina,
        isMobile,
        isDesktop,
      ])}
      */
