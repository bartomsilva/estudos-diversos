import React, {useState, useEffect} from 'react'

export default function listaCarros()
{

    const [carros, setCarros]=useState([])
    const [nomes, setNomes]=useState([])
    
    useEffect(
        ()=>{
        fetch('https://primeiraapiexemplo.bartomsilva.repl.co')
            .then(res=>res.json())
            .then(
                (res)=>{
                    setCarros(res)
                }
            )
            
            fetch('https://testedeApi.bartomsilva.repl.co')
            .then(res=>res.json())
            .then(
                 (res)=>{
                     setNomes(res)
                 }
            )                    
        }        
    )
    
    return(
    <div>
            <p>Deus é fiel - Aula 41</p>

            <div>                
                <p>Lista de Carros</p>
                {carros.map(carro=><div key={carro.id}>{carro.id} - {carro.marca} - {carro.modelo}</div>)}
            </div>
            <div>
                <p>Lista de Nomes</p>
                {nomes.map(nome=><div key={nome.id}>{nome.id} - {nome.nome} - {nome.idade}</div>)}
            </div>
    </div> )

}
