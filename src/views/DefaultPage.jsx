import { Link } from "react-router-dom"
import mystyle from "./DefaultPage.module.css";


export default function DefaultPage() {

    const itemlist = [
        { id: "forward", name: "Gik du kold i går?", desc: "Find ud af om du gik kold igår " },
        { id: "backward", name: "Skal du tage hjem?", desc: "Hjælper dig med at beslutte om du burde tage hjem" },
    ]

    return (
        <div>
        <section style={{ }}>
            <h1>BYEN TESTEN</h1>
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

        </div>
        
    )


}