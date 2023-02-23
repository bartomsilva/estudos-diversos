import { useState, useRef} from "react"

export default function AppAula14useref(){

    const nome = useRef('')
    const carro = useRef(null)

    console.log('renderizado')
    console.log(nome.current.nome)


    const infoDados = () => {
        console.log(`Nome Digitado: ${nome.current.value}`)
        console.log(`Carro Selecionado: ${carro.current.value}`)
        nome.current
    }
    return(
        <>
            <label>Digite seu Nome:</label>
            <input type='text' name='fnome' ref={nome}/>
            <br/>
            <label>Selecione um carro:</label>
            <select ref={carro}>
                <option value=''>Nenhum</option>
                <option value='HRV'>HRV</option>
                <option value='Golf'>Golf</option>
                <option value='Cruze'>Cruze</option>
                <option value='Argo'>Argo</option>
            </select>   
            <button onClick={infoDados}>Dados Selecionados</button>    
        </>
    )
}