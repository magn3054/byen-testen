import { Link } from "react-router-dom"
import mystyle from "./DefaultPage.module.css";

export default function DefaultPage() {

    const itemlist = [
        { id: "forward", name: "Gik du kold i går?", desc: "Spørg vores " },
        { id: "backward", name: "Skal du tage hjem?", desc: "item 2 description" },
    ]

    return (
        <section style={{ border: "red solid 1px" }}>
            <h1>Default page</h1>
            <div className={mystyle.flexcards}>
                {itemlist.map((item, index) => (
                    <div key={index} className={mystyle.card}>
                        <Link to={`/${item.id}`}>
                            <h1>{item.name}</h1>
                            <p>{item.desc}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    )
}