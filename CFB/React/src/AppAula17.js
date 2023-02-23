
import {useState} from 'react'
import Notas from './componets/AppAula17_notas'
import Resultado from './componets/AppAula17_resultado'

export default function AppAula17(){

    // state Notas
    const [notas,setNotas]=useState({'nota1':'0','nota2':'0','nota3':'0','nota4':'0'})

    // setNotas
    const handleSetNotas=(e)=>{
        // das duas formas abaixo funcionam 
        //setNotas({...notas,[e.currentTarget.name]: e.currentTarget.value})
        setNotas({...notas,[e.target.getAttribute('name')]: e.currentTarget.value})
    }
    
    return(
        <div>
            <h1>Desafio Aula 17</h1>
            <Notas numNota={'1'} nome={'nota1'} nota={notas.nota1} setNota={handleSetNotas}/>
            <Notas numNota={'2'} nome={'nota2'} nota={notas.nota2} setNota={handleSetNotas}/>
            <Notas numNota={'3'} nome={'nota3'} nota={notas.nota3} setNota={handleSetNotas}/>
            <Notas numNota={'4'} nome={'nota4'} nota={notas.nota4} setNota={handleSetNotas}/>     
            <h4>Resultado</h4>       
            <Resultado soma={parseFloat(notas.nota1)+parseFloat(notas.nota2)+parseFloat(notas.nota3)+parseFloat(notas.nota4)}/>
        </div>
    )
}