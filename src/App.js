import React from 'react';
import './App.css';

import Mascote1 from "./img/mascote1.png" ;

function App() {
  return (
    <div className="App">
    <div className='Header'>
     <h1 className='TituloPrincipal'>Bem vindo(a) </h1> <br></br>
     <h1 className='TituloPrincipal'>SKRFOOD </h1> 
     <h2 className='TituloPrincipal1'>Aqui você encontra as melhores receitas</h2>
     <img className='Mascote1' src={Mascote1} title='mascote'/>
     <div className='casaBotao'><button className='Botao'>Começar</button></div>
     
    </div>
    </div>
  );
}

export default App;
