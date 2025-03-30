import "./HeroSection.css";
import banner from "../assets/banner.png";
import Corousel from "./Carousel";




function HeroSection() {

    return (
        <section className="hero">
            <div className="hero-content">
                <img className="hero-image" src={banner} alt="Banner Solidário" />
                {/* <img src="../assets/banner.png" alt="Banner Solidário" className="hero-image"/> */}
                <div className="hero-text">
                    <h1>Para quem é</h1>
                    <p>
                        Na <em><strong>Solidário</strong></em>, Na Solidário+, transparência e controle são prioridades. 
                        Por isso, tanto doadores quanto instituições têm acesso a análises detalhadas
                         para acompanhar suas transações de forma clara e intuitiva.
                    </p>
                    <p>
                        <strong>Conta Doadora</strong> – Além de fazer doações para instituições, 
                        você também pode criar uma vaquinha para causas específicas ou contribuir 
                        para campanhas já existentes. Acompanhe suas doações com um gráfico interativo, 
                        que exibe métricas detalhadas, como valores doados, datas e horários de cada transação, 
                        garantindo total controle sobre seu histórico de contribuições.
                    </p>
                    <p>Junte-se à <strong><em>Solidario+</em></strong> e transforme vidas com apenas alguns cliques.</p>
                    <div className="hero-buttons">
                        <button className="primary">Quero Doar</button>
                        <button className="secondary">Criar Doação</button>
                    </div>
                    <Corousel />
                </div>
            </div>

        </section>
    );
}

export default HeroSection;
