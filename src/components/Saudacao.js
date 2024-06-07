import React from 'react';

const Saudacao = ({ nome }) => {
  const gerarSaudacao = (algumNome) => {
    return `Olá, ${algumNome}! Tudo bem?`;
  }
  return (
    <div>
      <p>{nome ? gerarSaudacao(nome) : 'Informe seu nome'}</p>
    </div>
  );
}

export default Saudacao;