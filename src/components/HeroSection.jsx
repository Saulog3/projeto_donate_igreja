import "./HeroSection.css";
import banner from "../assets/banner.png";




function HeroSection() {

    return (
        <section className="hero">
            <div className="hero-content">
                <img className="hero-image" src={banner} alt="Banner Solidário" />
                {/* <img src="../assets/banner.png" alt="Banner Solidário" className="hero-image"/> */}
                <div className="hero-text">
                    <h1>Para quem é</h1>
                    <p>
                        <strong>Solidário</strong>, transparência e conexões são prioridades...
                    </p>
                    <div className="hero-buttons">
                        <button className="primary">Quero Doar</button>
                        <button className="secondary">Criar Doação</button>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default HeroSection;
