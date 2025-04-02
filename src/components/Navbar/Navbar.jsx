import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"

export function Navbar() {
    return (
        <nav role="nav" className={styles.nav}>
            <h1>SHOP</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
            </ul>
        </nav>
    )
}

