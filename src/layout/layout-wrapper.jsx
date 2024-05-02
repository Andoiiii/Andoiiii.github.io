import { Outlet } from "react-router-dom";

export default function LayoutWrapper() {
    return (
        <>
            <h3>Here is the Navbar</h3>

            <Outlet />
            
            <h5>And here is the footer</h5>
        </>
    );
}
