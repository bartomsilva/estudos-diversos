
import {useState} from 'react'
import Notas from './componets/AppAula16_notas'
import Resultado from './componets/AppAula16_resultado'

export default function AppAula16(){

    const [nota1,setNota1]=useState(0)
    const [nota2,setNota2]=useState(0)
    const [nota3,setNota3]=useState(0)
    const [nota4,setNota4]=useState(0)

    return(
        <div>
            <h1>Elevação de State</h1>
            <Notas numNota={'1'} nota={nota1} setNota={setNota1}/>
            <Notas numNota={'2'} nota={nota2} setNota={setNota2}/>
            <Notas numNota={'3'} nota={nota3} setNota={setNota3}/>
            <Notas numNota={'4'} nota={nota4} setNota={setNota4}/>     
            <h4>Resultado</h4>       
            <Resultado soma={parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3)+parseFloat(nota4)}/>
        </div>
    )


}