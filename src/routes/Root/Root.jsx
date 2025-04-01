import { Outlet, Link } from "react-router-dom";

function Root() {
    return (
        <div className="container">
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}

export default Root;