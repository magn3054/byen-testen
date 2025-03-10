import { Link } from "react-router-dom";
import mystyle from "./Header.module.css";
import logo from "../assets/byen-testen.svg";

export default function Header() {

    return (
        <header>
            <nav className={mystyle.navigation}>
                <p>
                    <Link className={mystyle.linktext} to="/"> <img src={logo} alt="logo"/></Link>
                </p>
                <p>
                    <Link className={mystyle.linktext} to="/forward">Gik du kold i går?</Link>
                </p>
                <p>
                    <Link className={mystyle.linktext} to="/backward">Skal du hjem?</Link>
                </p>
            </nav>
        </header>
    )
}