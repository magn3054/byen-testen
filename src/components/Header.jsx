import { Link } from "react-router-dom";
import style from "./Header.module.css";
import logo from "../assets/byen-testen.svg";

export default function Header() {

    return (
        <header>
            <Link className={style.logo} to="/"><img src={logo} alt="logo"/></Link>
            <nav className={style.navigation}>
                <p>
                    <Link className={style.linktext} to="/forward">Gik du kold i går?</Link>
                </p>
                <p>
                    <Link className={style.linktext} to="/backward">Skal du hjem?</Link>
                </p>
            </nav>
        </header>
    )
}