import styles from "./Bajer.module.css"; // Importer CSS-modulet korrekt
import gif from "../assets/magnusbajer.mp4"; // Importer videoen korrekt

export default function Gif() {
    return (
        <video autoPlay loop muted className={styles.videoGif}>
            <source src={gif} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
}

