
export default function IMCcalcular(props){
    const calculo=()=>{
        props.setImc((props.peso/(props.altura*props.altura)).toFixed(2))
    }
    return(   
        <button onClick={()=>calculo()}>Calcular IMC</button>        
    )
}
