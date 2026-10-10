import {Link} from "react-router-dom";
export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light border-bottom bg-white">
            <div className="container">
                
                <Link className="navbar-brand" to="/">
                    <img
                        src="/media/images/logo.svg"
                        alt="Logo"
                        style={{ width: "120px" }}
                    />
                </Link>

                {/* 3-line hamburger */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Dropdown menu */}
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item" >
                            <Link className="nav-link" to="/signup">Signup</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/product">Products</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/pricing">Pricing</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/support">Support</Link>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    );
}