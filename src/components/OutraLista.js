import React from 'react';

const OutraLista = ({ itens }) => {
  return (
    <div>
      <h3>Lista de coisas boas</h3>
      { itens.length > 0 ?
        itens.map((item, index) => {
          return (
            <p key={index}>{item}</p>
          )}) : (
            <p>Não há itens na lista!</p>
          )
      }
    </div>
  );
}

export default OutraLista;