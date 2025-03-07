import mystyle from "./Accordion.module.css";

export default function AccordionItem({ oneitem }) {
    return (
        <details key={oneitem.id} className={mystyle.accordionitem}>
            <summary className={mystyle.accordionheader}>{oneitem.name}</summary>
            <div className={mystyle.accordioncontent}>
                <p>{oneitem.desc}</p>
            </div>
        </details>
    )
}