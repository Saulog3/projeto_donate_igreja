import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FormularioVaquinha from "./components/FormularioVaquinha";
import Footer from "./components/Footer";
import "./styles.css";
// import Carousel from "./components/Carousel";



function App() {
    return (
        <div>
            <Navbar />
            <div className="conteiner">
                <HeroSection />
                {/* <Carousel /> */}
            </div>
            <FormularioVaquinha />
            <Footer />
        </div>
    );
}

export default App;
