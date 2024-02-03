/* para novo componente que funcione com inteligencia e interação visual */
/* padrao react defaultChecked */
/* é melhor colocar comentarios dentro de funções */
export function Navegacao(){
    return <div className="navegacao">
        <input type="radio" name="opcao-pagina" id="página-0" defaultChecked /> 
        <label htmlFor="pagina-0">Pratos Principais</label>
        <input type="radio" name="opcao-pagina" id="página-1" />
        <label htmlFor="pagina-1">Sobremesas</label>
        <input type="radio" name="opcao-pagina" id="página-2" />
        <label htmlFor="pagina-2">Bebidas</label>
    </div>
}