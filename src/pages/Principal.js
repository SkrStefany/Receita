import React from 'react';
import './Principal.css';
import { Link } from 'react-router-dom';
import Mascote1 from "../img/mascote1.png" ;


function Principal() {
  return (
    <div className="App">
    <div className='Header'>
     <h1 className='TituloPrincipal'>Bem vindo(a) </h1> <br></br>
     <h1 className='TituloPrincipal'>SKRFOOD </h1> 
     <h2 className='TituloPrincipal1'>Aqui você encontra as melhores receitas</h2>
     <img className='Mascote1' src={Mascote1} title='mascote'/>
     <div className='casaBotao'><button className='Botao'><Link className='Link' to={"Pagina2"}>Começar</Link></button></div>
     

    </div>
    </div>
  );
}

export default Principal;