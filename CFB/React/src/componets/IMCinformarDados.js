
export default function IMCinformarDados(props) {
    return(
        <div>
            <label>Peso =</label>
            <input type='text' value={props.peso} onChange={(e)=>props.setPeso(e.target.value)}/>
            <br/>
            <label>Altura =</label>
            <input type='text' value={props.altura} onChange={(e)=>props.setAltura(e.target.value)}/>            
        </div>
    )
}
