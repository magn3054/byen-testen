import { Link } from "react-router-dom";
import mystyle from "./Header.module.css";

export default function Header() {

    return (
        <header>
            <nav className={mystyle.navigation}>
                <p>
                    <Link className={mystyle.linktext} to="/">Hjem</Link>
                </p>
                <p>
                    <Link className={mystyle.linktext} to="/first">Studierabatter</Link>
                </p>
                <p>
                    <Link className={mystyle.linktext} to="/second">Fredagsbarer</Link>
                </p>
                {/* <p>
                    <Link className={mystyle.linktext} to="/third"></Link>
                </p> */}
            </nav>
        </header>
    )
}