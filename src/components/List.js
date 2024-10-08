import React from 'react';
import Item from './Item';
import styles from './List.module.css';

const List = () => {
  return (
    <>
      <h1>Minha Lista</h1>
      <ul>
        <Item marca="Ferrari" ano_lancamento={1985} />
        <Item marca="Fiat" ano_lancamento={1964} />
        <Item marca="Renault" ano_lancamento={2003} />
        <Item />
      </ul>
    </>
  );
}

export default List;