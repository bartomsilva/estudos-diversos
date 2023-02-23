
export default function AppAula17_notas(props){

    return(
        <div>
            <label>Informe a nota {props.numNota}: </label>
            <input style={{textAlign:'right'}} name={props.nome} type='text' size='5' value={props.nota} onChange={(e)=>props.setNota(e)} ></input>
        </div>
    )
}