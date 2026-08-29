import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <nav>
                <div className="logo">
                    <Link to="/" className="logo-link">
                        Herbal Blend
                    </Link>
                </div>

                <ul className="navlist">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <a href="/#about">About</a>
                    </li>
                    <li>
                        <a href="/#services">Services</a>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;