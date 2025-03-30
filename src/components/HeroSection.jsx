import "./HeroSection.css";
import banner from "../assets/banner.png";
import Carousel from "./Carousel";



function HeroSection() {
    const images = [
        "https://via.placeholder.com/800x400?text=Slide+1",
        "https://via.placeholder.com/800x400?text=Slide+2",
        "https://via.placeholder.com/800x400?text=Slide+3",
      ];
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
            <div className="carousel-container">
                <Carousel images={images} />
            </div>
        </section>
    );
}

export default HeroSection;
