// //theme js

// import React from "react";
// import { createContext, useState, useEffect } from "react";

// //import Portfolio from '../Cards/Portfolio';
// //import AboutContact from './AboutContact';

// export let themes = {
//   engineer: {
//     backgroundColor: "#17333e",
//     color: "#bfd7e3",
//   },
//   artist: {
//     backgroundColor: "#bfd7e3",
//     color: "#17333e",
//   },
// };

// const initialState = {
//     engineer: false,
//     theme: themes.artist,
//     toggleTheme: () => {}
// }

// export const Themes = createContext(initialState);

// export const ThemeProvider = ({ children }) => {
//   const [dark, setDark] = useState(false);

//   useEffect(() => {
//     const isDark = localStorage.getItem("dark") === "true";
//     setDark(isDark);
//   }, [dark]);

//   const toggleTheme = () => {
//       const isDark = !dark
//     localStorage.setItem("dark", JSON.stringify(isDark));
//     setDark(isDark);
//   };

//   const theme = dark ? themes.engineer : themes.artist;


//   return (
//     <Themes.Provider value={[{ theme, dark }, toggleTheme]}>
//       {children}
//     </Themes.Provider>
//   );
// };


// //switch
// import React from "react";
// import { useContext } from "react";
// import "../CSS/Switch.css";
// import { RiMoonClearLine, RiSunLine } from "react-icons/ri";
// import Art from "../Cards/Art";
// import Engineer from "../Cards/Engineer";
// import { Themes } from "./Theme";

// const Switch = ({ toggleTheme }) => {
//   const [isOn, toggleIsOn] = useToggle();

//   const { theme } = useContext(Themes)

//   function useToggle(initialValue = false) {
//     const [value, setValue] = React.useState(initialValue);
//     const toggle = React.useCallback(() => {
//       setValue((v) => !v);
//     }, []);
//     return [value, toggle];
//   }



//   return (
//     <>
//     <div className="toggle">
//       <h6 className="label-dark-engineer">Engineer</h6>
//       <span className="icon-dark">
//         <RiMoonClearLine />
//       </span>

//       <input
//         onClick={function (event) {
//           toggleTheme();
//           toggleIsOn();
//         }}
//         // onClick={handleOnClick}
//         className="react-switch-checkbox"
//         id={`react-switch-new`}
//         type="checkbox"

//       ></input>
//       <label className="react-switch-label" htmlFor={`react-switch-new`}>
//         <span className={`react-switch-button`}></span>
//       </label>
//       <span className="icon-light">
//         <RiSunLine />
//       </span>
//       <h6 className="label-light-artist">Artist</h6>
//     </div>
//     <div className="cards">
//       {isOn ? <Art /> : <Engineer />}
//       </div>
//     </>
//   );
// };

// export default Switch;


// import React from "react";
// import { createContext, useState, useEffect } from "react";

// //import Portfolio from '../Cards/Portfolio';
// //import AboutContact from './AboutContact';

// export let themes = {
//   engineer: {
//     backgroundColor: "#17333e",
//     color: "#bfd7e3",
//   },
//   artist: {
//     backgroundColor: "#bfd7e3",
//     color: "#17333e",
//   },
// };

// export const Themes = createContext();

// export const ThemeProvider = ({ children }) => {
//   const [dark, setDark] = useState(false);

//   // useEffect(() => {
//   //   const dark = localStorage.getItem("dark") === "true";
//   //   setDark(dark);
//   // }, []);

//   const toggleTheme = () => {
//     localStorage.setItem("dark", JSON.stringify(!dark));
//     setDark(!dark);
//   };

// console.log(dark)
// //  const theme = dark ? themes.engineer : themes.artist;
//   const theme = dark ? themes.artist : themes.engineer;

//   return (
//     <Themes.Provider value={[{ theme, dark }, toggleTheme]}>
//       {children}
//     </Themes.Provider>
//   );
// };