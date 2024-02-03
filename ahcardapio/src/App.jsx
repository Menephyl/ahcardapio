 import Hashtaurante  from "./assets/hashtaurante.webp";
import '../src/App.css';
import {Navegacao} from './navegacao.jsx';
import { ItemCardapio } from "./itemcardapio.jsx";


export function App(){  
  return <>
        <img src={Hashtaurante} alt="" className="capa" />
      <Navegacao/>
        <div  className="menu">
          <ItemCardapio/>
          
        </div>

  </>
}