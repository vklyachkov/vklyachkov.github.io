import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css"

export default function Header() {
    return (
      <header className={styles.Header}>
        <h1>OPI<span>UI</span></h1>
        <ul type="none">
            <li>
                <Link to="/catalog">Каталог</Link>
            </li>
            <li>
                <Link to="/aboutus">О нас</Link>
            </li>
        </ul>
      </header>
    )
}
