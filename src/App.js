import { useState } from 'react';
import './style.css';
import api from './services/api';

function App() {

  const [input, setInput] = useState('')
  const [cep, setCep] = useState({})


  async function handleSearch(){
    

    if(input === ""){
      alert('preencha com o CEP')
      return;
    }

    try{
      const response = await api.get(`${input}/json`);
      setCep(response.data)
      setInput("")

    }catch{
      alert("erro ao buscar");
      setInput("")
    }

  }

  return (
    <div className="caixa">
      <h1 classNmae="title">Localizador</h1>

      <div className="caixaInput">
        <input 
        type="text" 
        placeholder="digite o CEP"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />

        <button className="buttonSearch" onClick={handleSearch}>Procurar</button>
      </div>
      <div className="main">
        <h2>CEP: {cep.cep}</h2>
        <span>Rua: {cep.logradouro}</span>
        <span>Complemento: {cep.complemento}</span>
        <span>{cep.bairro}</span>
        <span>{cep.localidade}- {cep.uf}</span>
      </div>
    </div>
  );
}

export default App;

