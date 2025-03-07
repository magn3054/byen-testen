import AccordionItem from "../components/AccordionItem";

function FirstPage() {

    const itemlist = [
        { id: "1", name: "", desc: "item 1 description" },
        { id: "2", name: "item 2", desc: "item 2 description" },
        { id: "3", name: "item 3", desc: "item 3 description" },
    ]

    return (
        <section>
            <h1>Fredagsbarer</h1>
            <div>
                {itemlist.map((item, index) => (
                    <AccordionItem key={index} oneitem={item} />
                ))}
            </div>
        </section>
    )
}

export default FirstPage;