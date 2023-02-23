import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function listaCarrosF(){

    const [carros, setCarros]=useState([])
    
    useEffect(()=>{
        axios.get('https://primeiraapiexemplo.bartomsilva.repl.co')
            .then(res=>{
                const dadosCarros=res.data
                setCarros(dadosCarros)
            })
        }    
    )
    
    return(
        <div>
            <p>Deus é fiel</p>
            {carros.map(
                carro=><div key={carro.id}>{carro.id} - {carro.marca} - {carro.modelo}</div>
            )}
        </div>
    )
}

