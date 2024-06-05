import React from 'react';
import styles from './SayMyName.module.css';

const SayMyName = (props) => {
  return (
    <div>
      <h2>Hello, <span title="props.nome">{props.nome}</span>! Component &lt;SayMyName&gt;</h2>
    </div>
  )
}

export default SayMyName;