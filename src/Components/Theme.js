// //theme js

import { createContext, useState } from "react";

//import Portfolio from '../Cards/Portfolio';
//import AboutContact from './AboutContact';
//import Art from "../Cards/Art";
//import Engineer from "../Cards/Engineer";

export let themes = {
  engineer: {
    backgroundColor: "#17333e",
    color: "#bfd7e3",
  },
  artist: {
    backgroundColor: "#bfd7e3",
    color: "#17333e",
  },
};

const initialValue = {
    engineer: true,
    theme: themes.engineer,
    toggleTheme: () => {}
}

export const Themes = createContext();

export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState("dark");

  const toggleTheme = (initialValue = true) => {
    // const isDark = !dark
  sessionStorage.setItem("dark", JSON.stringify(dark));
  setDark(!dark);
};


//true = dark
 console.log(dark)

  // useEffect(() => {
  //   const dark = localStorage.getItem("dark") === "true";
  //   setDark(!dark);
  // }, []);



  const theme = dark ? themes.engineer : themes.artist;

  return (
     <Themes.Provider value={[{ theme }, toggleTheme]}> 
      {children}
    </Themes.Provider>
  );
};

