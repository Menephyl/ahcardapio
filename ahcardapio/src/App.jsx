import {useState } from "react";
import Hashtaurante  from "./assets/hashtaurante.webp";
import '../src/App.css';
import {Navegacao} from './navegacao.jsx';
import { ItemCardapio } from "./itemcardapio.jsx";
import { pratosPrincipais, sobremesas,bebidas } from "./cardapio.js";
//map = adiciona um valor a varios objetos de uma lista array simultaneamente



export function App(){  
  const paginasMenu =[pratosPrincipais, sobremesas, bebidas];
    const [paginaSelecionda, atualizarPaginaSelecionada] = useState(0);//
  return <>
        <img src={Hashtaurante} alt="" className="capa" />
      <Navegacao atualizarPaginaSelecionada={atualizarPaginaSelecionada}/>
        <div  className="menu">
        {paginasMenu[paginaSelecionda].map(item=> <ItemCardapio nome={item.nome}descricao={item.descricao} preco={item.preco} imagem={item.imagem}/>)}
      
          
        </div>

  </>
}