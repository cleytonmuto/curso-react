import React from 'react';
import Button from './evento/Button';

const Evento = ({ numero }) => {
  
  const meuEvento = () => {
    console.log('Ativado primeiro evento!');
  }

  const segundoEvento = () => {
    console.log('Ativado o segundo evento!');
  }

  return (
    <div>
      <p>Clique para disparar um evento:</p>
      <Button event={meuEvento} text="Primeiro Evento" />
      <Button event={segundoEvento} text="Segundo Evento" />
    </div>
  );
};

export default Evento;