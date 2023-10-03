import React, { useState } from 'react';
import './App.css';
import logo from './assets/calculator.png'

function App() {
  const [anoNascimento, setAnoNascimento] = useState('');
  const [idade, setIdade] = useState(0); // Inicializado com 0
  const [nome, setNome] = useState('');

  const calcularIdade = () => {
    const anoAtual = new Date().getFullYear();
    const idadeCalculada = anoAtual - parseInt(anoNascimento, 10);
    setIdade(idadeCalculada);
  };

  return (

    <div className="App">

      <img className='logo' src={logo}
      alt="Logo Calculadora fofa"/>

      <h1>Calculadora de Idade</h1>
      <label>
        Seu Nome:
        <input type="text"
        onChange={(e) => setNome(e.target.value)}/>
      </label>
      <label>
        Ano de Nascimento:
        <input
          type="number"
          value={anoNascimento}
          onChange={(e) => setAnoNascimento(e.target.value)}
        />
      </label>
      <button onClick={calcularIdade}>Calcular</button>
      {idade !== 0 && <p><strong>{nome}</strong> sua idade é: {idade} anos!</p>}
    </div>
  );
}

export default App;