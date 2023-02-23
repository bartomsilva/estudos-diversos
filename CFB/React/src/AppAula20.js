
import React, {useState} from "react"


export default function AppAula20(){
   
    const [nome,setNome]=useState('')

    const salvarChave=(chave,valor)=>{
        localStorage.setItem(chave,valor)
    }

    const consultarChave=(chave)=>{
        alert(localStorage.getItem(chave))
    }

    const removerChave=(chave)=>{
        localStorage.removeItem(chave)
    }

    return(
        <>
            <label>Digite um Nome: </label>
            <input type='text' value={nome} onChange={(e)=>setNome(e.target.value)}/>
            <br/>
            <button onClick={()=>salvarChave("ls_nome",nome)}>Salvar Chave</button>
            <button onClick={()=>consultarChave("ls_nome")}>Consultar Chave</button> 
            <button onClick={()=>removerChave("ls_nome")}>Remover Chave</button>                   
        </>
    )
}