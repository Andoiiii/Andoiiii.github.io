/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import './themeProvider.css';

export const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
    // Match Media Bool -> Theme String
    const matchQueryToString = () => window.matchMedia("(prefers-color-scheme: light)").matches ? 'light' : 'dark';
    
    const [ themeClass, setThemeClass ] = useState(matchQueryToString());
    
    // Sync Up Browser's Default Color Changes to React State
    useEffect(() => {
        const handleDefaultColorChange = (event) => { console.log('changed!'); setThemeClass(matchQueryToString(event)) };

        const themeQuery = window.matchMedia("(prefers-color-scheme: light)");
        const listener = themeQuery.addEventListener('change', handleDefaultColorChange);

        return () => themeQuery.removeEventListener('change', listener);
    }, []);

    // Prevent Really Far Away Theme Setting Dependency through Context
    return <ThemeContext.Provider value={setThemeClass}>
        <div id='ThemeWrapper' className={`${themeClass}`}>
            { children }
        </div>
    </ThemeContext.Provider>;
}