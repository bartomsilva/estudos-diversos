import { useState } from "react"

export default function AppAula14(){

    const [nome,setNome]=useState()
    const [carro,setCarro]=useState()

    const handleChanceNome=(e)=>{
        setNome(e.target.value)
    }
    return(
        <>
            <label>Digite seu Nome:</label>
            <input type='text' name='fnome' value={nome} onChange={(e)=>handleChanceNome(e)}/>
            <p>Nome digitado: {nome}</p>
            <p>Carro Selecionado: {carro}</p>
            <br/>
            <label>Selecione um carro:</label>
            <select value={carro} onChange={(e)=>setCarro(e.target.value)}>
                <option value='HRV'>HRV</option>
                <option value='Golf'>Golf</option>
                <option value='Cruze'>Cruze</option>
                <option value='Argo'>Argo</option>
            </select>       
        </>
    )
}