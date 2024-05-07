import { useContext } from "react";
import { ThemeContext } from "../layout/theme/themeProvider";

import home from './home.module.css'

export default function Homepage() {
    const setThemeFn = useContext(ThemeContext);

    return (
        <>
            <h1>Hello World!</h1>
            {["light", "dark", "grayscale", "neon"].map((str) => {
                return (
                    <button key={str} onClick={() => setThemeFn(str)}>
                        Set Theme to {str}
                    </button>
                );
            })}
            <div className={home.text}>
                <button onClick={() => {}} className={home.primaryBg}>Primary Button</button>
                <button onClick={() => {}} className={home.secondaryBg}>Secondary Button</button>
                <p>This is some <span className={home.accent}>ACCENTED</span> text</p>
            </div>
        </>
    );
}
