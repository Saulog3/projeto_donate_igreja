import "./HeroSection.css";
import banner from "../assets/banner.png";

function HeroSection() {
    return (
        <section className="hero">
            <img className="Banner" src={banner} alt="Banner Solidário" />
            <div className="hero-content">
                <img src="/assets/banner.png" alt="Banner Solidário" className="hero-image"/>
                <div className="hero-text">
                    <h1>Para quem é</h1>
                    <p>
                        Na <strong>Solidário</strong>, transparência e conexões são prioridades...
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
