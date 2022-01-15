
import React from 'react';
import { createContext, useState, useEffect } from 'react';

//import Portfolio from '../Cards/Portfolio';
//import AboutContact from './AboutContact';


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

export const Themes = createContext();

export const ThemeProvider = ({children}) => {
    const [isDark, setIsDark] =useState(true);
    const toggleTheme = () => {
        localStorage.setItem("isDark", JSON.stringify(!isDark));
        setIsDark(!isDark);
    };




    const theme = isDark ? themes.engineer : themes.artist;

    useEffect(() => {
        const isDark = localStorage.getItem("isDark") === "true";
        setIsDark(isDark);
    }, []);

    return (
        
        <Themes.Provider value={[{ theme, isDark }, toggleTheme]}>
            {children}
        </Themes.Provider>
    );
};