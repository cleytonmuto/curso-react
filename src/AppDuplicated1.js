import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';

function AppDuplicated1() {
  const URL = 'https://placehold.co/320x240/lightblue/lightyellow?text=Hello\\nWorld&font=playfair-display';
  const PHOTO_URL = 'https://placehold.co/240x320/lightblue/lightyellow?text=Foto&font=playfair-display';
  return (
    <div className="App">
      <Frase greetings="ok"/>
      <Frase greetings="good"/>
      <HelloWorld />
      <img src={URL} alt="imagem" title="component <App>"/>
      <SayMyName nome="Buddy" />
      <Pessoa nome="Rodrigo" idade="28" profissao="Programador" foto={PHOTO_URL}/>
      <List />
    </div>
  );
}

export default AppDuplicated1;
