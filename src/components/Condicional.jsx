import {useState, React} from 'react';

const Condicional = () => {

  const [email, setEmail] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const enviarEmail = (e) => {
    e.preventDefault();
    setUserEmail(email);
    console.log(userEmail);
  };

  const limparEmail = () => {
    setUserEmail('');
  };

  return (
    <div>
      <h2>Cadastre seu email</h2>
      <form>
        <input type="email" placeholder="Digite seu email" onChange={(e) => setEmail(e.target.value)}/>
        <button onClick={enviarEmail}>Enviar email</button>
      </form>
      {userEmail && (
        <div>
          <p>O email do usuário é <strong>{userEmail}</strong></p>
          <button onClick={limparEmail}>Limpar email</button>
        </div>
      )}
    </div>
  );
}

export default Condicional;