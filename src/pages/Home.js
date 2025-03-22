import Mensagem from "../components/bem_vindo";
import Botao from "../components/botao";
function Home() {
    return (
        <div>
            <h1>Produtos Disponíveis</h1>
            <p>Lista de produtos para doação e venda.</p>
            <Mensagem />
            <Botao link="/doacao" texto="Cadastrar Doação" />
        </div>
    );
}
export default Home;
