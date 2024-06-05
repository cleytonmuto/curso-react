import React from 'react';
import Frase from './Frase';

const HelloWorld = () => {
  return (
    <div>
      <h1>Meu primeiro componente &lt;HelloWorld&gt;</h1>
      <Frase greetings="inside HelloWorld"/>
    </div>
  );
}

export default HelloWorld;
