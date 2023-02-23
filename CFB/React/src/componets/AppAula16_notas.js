
export default function AppAula16_notas(props){

    return(
        <div>
            <label>Informe a nota {props.numNota}: </label>
            <input style={{textAlign:'right'}} type='text' size='5' value={props.nota} onChange={(e)=>props.setNota(e.target.value)} ></input>
        </div>

    )
}