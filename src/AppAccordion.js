import React from 'react';
import Accordion from './components/Accordion';
import './App.css';

function AppAccordion() {
  return (
    <div className="App">
      <h1>Exemplo de State Lift</h1>
      <Accordion />
    </div>
  );
}

export default AppAccordion;