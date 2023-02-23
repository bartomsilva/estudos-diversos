import React, {useState} from 'react'

const tabelaIMC=()=>{
    return(
        <table border='1' style={{borderCollapse:'collapse'}}>
            <thead>
                <tr>
                    <th>Classificação</th>
                    <th>Imc</th> 
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Abaixo do Peso</td>
                    <td>Abaixo do 18,5</td>
                </tr>
                <tr>
                    <td>Peso Normal</td>
                    <td>Entre 18,5 e 24,9</td>
                </tr>
                <tr>
                    <td>Sobrepeso</td>
                    <td>Entre 25 e 29,9</td>
                </tr>
                <tr>
                    <td>Obesidade Grau I</td>
                    <td>Entre 30 e 34,9</td>
                </tr>
                <tr>
                    <td>Obesidade Grau II</td>
                    <td>Entre 35 e 39,9</td>
                </tr>
                <tr>
                    <td>Obesidade Grau III ou Mórbida</td>
                    <td>Maior que 40</td>
                </tr>
            </tbody>
         </table>
    )
}

const informarDados=(peso,setPeso,altura,setAltura)=>{
    return(
        <div>
            <label>Peso =</label>
            <input type='text' value={peso} onChange={(e)=>setPeso(e.target.value)}/>
            <br/>
            <label>Altura =</label>
            <input type='text' value={altura} onChange={(e)=>setAltura(e.target.value)}/>            
        </div>
    )
}

const calcularIMC=(peso,altura,setImc)=>{
    const calculo=()=>{
        setImc((peso/(altura*altura)).toFixed(2))
    }
    return(   
        <button onClick={()=>calculo()}>Calcular IMC</button>        
    )

}
const mostrarIMC=(imc)=>{
    return(
        <div> 
            <h3>IMC: {imc} </h3>            
        </div> 
    )
}

export default function AppAula30() {

    const [peso,setPeso]=useState(0)
    const [altura,setAltura]=useState(0)
    const [imc,setImc]=useState(0)
    
    return(
      <>
          {informarDados(peso,setPeso,altura,setAltura)}  
          {calcularIMC(peso,altura,setImc)}
          {mostrarIMC(imc)}   
          {tabelaIMC()}

      </>
    )
  

}