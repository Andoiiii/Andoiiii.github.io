import { Outlet } from "react-router-dom";
import { ThemeProvider } from "./theme/themeProvider";

export default function LayoutWrapper() {
    return (
        <ThemeProvider>
            <h3>Here is the Navbar</h3>

            <Outlet />

            <h5>And here is the footer</h5>
        </ThemeProvider>
    );
}
