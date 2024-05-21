import React from "react";
import Doces from "../img/Doces.png" ;
import Bolo from "../imgReceita/bolodecenoura.jpeg" ;
import "./Doce.css"

function Doce (){
    return (
        <div className="Pagina"> 
           <div className="header">
           <img className='mascote' src={Doces} title='Doce'/>
           <h1>DOCE</h1>
           </div>
           <hr/>

           <div className="Receita">
            <h1>Bolo de cenora</h1>
            <img className="mascote" src={Bolo} title="Bolo"/>
            <h2>Receita..</h2>

            <div className="Espaco">
            <div className="P1">
            <ul>
                <h4>Massa</h4>
                <li>
                1/2 xícara (chá) de óleo
                </li>
                <li>4 ovos</li>
                <li>2 e 1/2 xícaras (chá) de farinha</li>
                <li>3 cenouras médias raladas</li>
                <li>2 xícaras (chá) de açúcar</li>
                <li>1 colher (sopa) de fermento em pó</li>
            </ul>
            </div>
            <div className="P2">
            <ul>
                <h4>Cobertura</h4>
                <li>1 colher (sopa) de manteiga</li>
                <li>1 xícara (chá) de açúcar</li>
                <li>3 colheres (sopa) de chocolate em pó</li>
                <li>1 xícara (chá) de leite</li>
            </ul>
            </div>

            </div>
           
           

           </div>
        </div>
    );
}

export default Doce;