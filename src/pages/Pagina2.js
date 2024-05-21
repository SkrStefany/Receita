import React from "react";
import './Pagina2.css';

import Doces from "../img/Doces.png" ;
import Salgado from "../img/Salgado.png" ;
import Drink from "../img/Drink.png" ;
import Saudavel from "../img/Saudavel.png" ;
import Gordura from "../img/Gordura.png" ;
import { Link } from "react-router-dom";

function Pagina2(){
    return(
        <div className="Pagina">
            <h1 className="Texto">Receitas</h1>
            <h4 className="Text01">O que deseja ↓</h4>
            
            <Link className="Link" to={"/Doce"}>
            <div className="caixa">
            <img className='mascote' src={Doces} title='Doce'/>
            <h3>DOCES</h3>
            </div>
            </Link>
           
            <Link  className="Link" to={"#"}>
            <div className="caixa">
            <img className='mascote' src={Salgado} title='Salgado'/>
            <h3>Salgados</h3>
            </div>
            </Link>

            <Link  className="Link" to={"#"}>
            <div className="caixa">
            <img className='mascote' src={Drink} title='Drink'/>
            <h3>Drink</h3>
            </div>
            </Link>
            
            <Link  className="Link" to={"#"}>
            <div className="caixa">
            <img className='mascote' src={Saudavel} title='Saudavel'/>
            <h3>Saúdavel</h3>
            </div>
            </Link>

            <Link  className="Link" to={"#"}>
            <div className="caixa">
            <img className='mascote' src={Gordura} title='Gordura'/>
            <h3>Gordura</h3>
            </div>
            </Link>
            
           
            

            

        </div>
    )
}

export default Pagina2;