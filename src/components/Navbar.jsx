import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">Solidário</div>
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
