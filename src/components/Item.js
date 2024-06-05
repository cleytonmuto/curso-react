import React from 'react';
import styles from './Item.module.css';
import PropTypes from 'prop-types';

const Item = ({marca, ano_lancamento}) => {
  return (
    <>
      <li className={styles.listItem}>{marca} - {ano_lancamento}</li>
    </>
  );
}

Item.propTypes = {
  marca: PropTypes.string.isRequired,
  ano_lancamento: PropTypes.number
};

Item.defaultProps = {
  marca: 'faltou a marca',
  ano_lancamento: 0
};

export default Item;