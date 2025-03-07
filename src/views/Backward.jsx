import { useState } from 'react';
import mystyle from "./Backward.module.css";

function SecondPage() {
    const itemlist = [
        { id: "1", name: "item 1", desc: "item 1 description. A fja laædsj æaljf puæaasr." },
        { id: "2", name: "item 2", desc: "item 2 description. A fgsugf lkhdj klahdj dkhf." },
        { id: "3", name: "item 3", desc: "item 3 description. A kpidf kfd jfkji uows lsr." },
    ];

    const [bcolor, setBcolor] = useState("white");
    const [tcolor, setTcolor] = useState("black");
    const [message, setMessage] = useState("Click on an item to see its details");

    const handleClick = (item) => {
        setMessage(`Details for ${item.name} is: ${item.desc}`);
    };

    const changeColor = () => {
        if (bcolor === "green") {
            setBcolor("white");
            setTcolor("black");
        } else {
            setBcolor("green")
            setTcolor("white");
        }
    }

    return (
        <div style={{ backgroundColor: bcolor, color: tcolor }}>
            <h1>Eventhandlers and useState</h1>
            <ul>
                {itemlist.map((item) => (
                    <li className={mystyle.cursor} key={item.id} onClick={() => handleClick(item)}>
                        {item.name}
                    </li>
                ))}
            </ul>
            {message}

            <p><button onClick={changeColor}>Change color to green</button></p>
        </div>
    );
};

export default SecondPage;
