import React, {useState} from "react"
import Globais from './componets/Globais'

export default function AppAula27(){
    const [resumo,setResumo]=useState(Globais.resumo)

    const gravarResumo=(e)=>{
        Globais.resumo=resumo
        document.getElementById("resumo").innerHTML = `${Globais.resumo}`
    }

    return(
        <>
            <h1>CFB Cursos</h1>
            <h3>Variáveis Globais</h3>
            <p>{'Canal:' + Globais.canal}</p>
            <p>{'Curso:' + Globais.curso}</p>
            <p>{'Ano:'+Globais.ano}</p>
            <p> {'Resumo State:'+resumo}</p>
            <p >{'Resumo Globais:'}<span id='resumo'>{Globais.resumo}</span></p>
            <input type='text' size='50' value={resumo} onChange={(e)=>setResumo(e.target.value)}/>
            <button onClick={()=>gravarResumo()}>Gravar Resumo em Globais</button>
        </>
    )

}
