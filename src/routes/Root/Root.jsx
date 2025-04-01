import { Outlet} from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar.jsx"
import styles from "./Root.module.css"

function Root() {
    return (
        <div className={styles.container}>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default Root;