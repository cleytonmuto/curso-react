import './App.css';
import Evento from './components/Evento';
import Form from './components/Form';

function AppDuplicated2() {
  const URL = 'https://placehold.co/320x240/lightblue/lightyellow?text=Hello\\nWorld&font=playfair-display';
  const PHOTO_URL = 'https://placehold.co/240x320/lightblue/lightyellow?text=Foto&font=playfair-display';
  return (
    <div className="App">
      <h1>Teste de Eventos</h1>
      <Evento numero="1"/>
      <Form />
    </div>
  );
}

export default AppDuplicated2;
