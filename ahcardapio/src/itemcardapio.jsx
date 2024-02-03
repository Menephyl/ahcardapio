// import { enroladinhoMignon } from "./cardapio"; ctrl b kkk
import { Navegacao } from "./navegacao";


export function  ItemCardapio(props) {
     return  <div className="container-item-cardapio"> 
        
        <div>
            <h2>{props.nome} </h2>
            <p>{props.preco}</p>
            <p>{props.descricao}</p>
        </div>
        <img src={props.imagem} alt="enroladinhoa" />

        </div>
}