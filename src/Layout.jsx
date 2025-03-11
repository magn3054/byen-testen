import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Gif from "./components/Bajer";

function Layout() {
    return (
        <>
            <Header />
            <main className="mainpart">
                <Outlet />
                {/* <Gif /> */}
            </main>
            <Footer />
        </>
    );
}

export default Layout;
