import React from 'react';
import styles from './Frase.module.css';

const Frase = (props) => {
  return (
    <div className={styles.fraseContainer}>
      <h2 className={styles.fraseContent}>Este é um componente &lt;Frase&gt; {props.greetings}</h2>
    </div>
  )
}

export default Frase;