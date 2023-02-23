import { useState } from "react"

export default function AppAula14(){

    const [form,setForm]=useState({'nome':'','curso':'','ano':''})

    const handleChanceForm=(e)=>{
        // no currentTarget.name vem: fnome, fcurso e fano dai tira a primeira letra
        setForm({...form,[e.currentTarget.name.substr(1)]: e.currentTarget.value})
        // Créditos ao Fessor Bruno no vo Curso de JavaScrip (Operador Spread)
        // @Ronaldo Firpo e @Geydson Albuquerque (nos comentários)
        // das duas idéias mas a aula do novo curso de javascripe do fessor bruno montei meu código.
    }
    
    return(
        <>
            <h1>Aula 15 </h1>
            <label>Nome:</label>
            <input type='text' name='fnome' value={form.nome} onChange={(e)=>handleChanceForm(e)}/>
            <br/>
            <label>Curso:</label>
            <input type='text' name='fcurso' value={form.curso} onChange={(e)=>handleChanceForm(e)}/>
            <br/>
            <label>Ano:</label>
            <input type='text' name='fano' value={form.ano} onChange={(e)=>handleChanceForm(e)}/>

            <div>
                <p id='divx'>Nome digitado: {form.nome}</p>
                <p>Curso digitado: {form.curso}</p>
                <p>Ano digitado: {form.ano}</p>
            </div>           

        </>
    )
}