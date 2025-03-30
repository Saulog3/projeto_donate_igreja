import "./Navbar.css";
import logo from "../assets/logo2.png";

function Navbar() {
    return (
        <nav className="navbar">
            <img src={logo} alt="Solidário" className="navbar-logo" />
            <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">Contato</a></li>
                <li><a href="#">Doações</a></li>
            </ul>
            <button className="doar-btn">Quero Doar</button>
        </nav>
    );
}

export default Navbar;
