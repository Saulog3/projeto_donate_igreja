import "./FormularioVaquinha.css";

function FormularioVaquinha() {
    return (
        <section className="form-section">
            <h2>Criar vaquinha</h2>
            <form>
                <input type="text" placeholder="De quanto você precisa?" />
                <input type="text" placeholder="Qual o seu CPF?" />
                <input type="text" placeholder="Dê um nome para a sua vaquinha" />
                <input type="email" placeholder="Qual o seu e-mail?" />
                <input type="text" placeholder="Qual o seu nome completo?" />
                <input type="tel" placeholder="Qual o seu telefone?" />
                <input type="text" placeholder="Qual o seu CEP?" />
                <button type="submit" className="submit-btn">Criar vaquinha</button>
            </form>
        </section>
    );
}

export default FormularioVaquinha;
