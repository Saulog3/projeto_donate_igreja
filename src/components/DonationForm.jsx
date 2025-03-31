import React from "react";
import "./DonationForm.css";

const DonationForm = () => {
  return (
    <section className="donation-container">
      {/* Bloco de Informações */}
      <div className="info-section">
        <h2>Conta Doadora</h2>
        <p><strong>Fazer doações:</strong> Você pode doar para instituições de caridade diretamente.</p>
        <p><strong>Criar uma vaquinha:</strong> Possibilidade de iniciar uma campanha para uma causa específica.</p>
        <p><strong>Contribuir para campanhas existentes:</strong> Apoiar arrecadações já em andamento.</p>
        <p><strong>Acompanhar doações:</strong> Um gráfico interativo exibe métricas detalhadas.</p>
        <p><strong>Detalhes disponíveis:</strong> Visualização de valores doados, datas e horários de cada transação.</p>
        <p><strong>Controle total:</strong> Histórico de contribuições acessível para monitoramento.</p>

        <h2>Conta Institucional</h2>
        <p><strong>Gerenciamento eficiente:</strong> Controle suas doações com um painel de análise financeira.</p>
        <p><strong>Acompanhamento em tempo real:</strong> Visualize os valores de entrada instantaneamente.</p>
        <p><strong>Gráfico detalhado:</strong> Monitore a evolução dos recebimentos ao longo do tempo.</p>
        <p><strong>Facilidade na gestão:</strong> Ferramentas que auxiliam no controle dos recursos.</p>
      </div>

      {/* Formulário */}
      <div className="form-section">
        <form>
          <div className="form-group">
            <label>De quanto você precisa?</label>
            <input type="text" placeholder="0,00" />
            <label>Qual o seu CPF?</label>
            <input type="text" placeholder="Insira seu CPF" />
          </div>

          <label>Dê um nome para a sua vaquinha</label>
          <input type="text" placeholder="Ex: Ajude o Isaque" />

          <label>Qual o seu e-mail?</label>
          <input type="email" placeholder="Insira seu e-mail" />

          <label>Qual o seu nome completo?</label>
          <input type="text" placeholder="Insira seu nome completo" />

          <div className="form-group">
            <label>Qual seu telefone?</label>
            <input type="text" placeholder="Insira seu telefone" />
            <label>Qual o seu CEP?</label>
            <input type="text" placeholder="Insira seu CEP" />
          </div>

          <button type="submit">Criar vaquinha</button>
        </form>
      </div>
    </section>
  );
};

export default DonationForm;
