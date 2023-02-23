import React from 'react'
import axios from 'axios'

export default class listaCarros extends React.Component{

    state={ 
        carros:[]
    }

    componentDidMount(){
        axios.get('https://primeiraapiexemplo.bartomsilva.repl.co').then(res=>{
            const dadosCarros=res.data
            this.setState({carros:dadosCarros})
        })
    }
    render(){
        return(
            <div>
                <p>Deus é fiel</p>
                {this.state.carros.map(
                    carro=><div key={carro.id}>{carro.id} - {carro.marca} - {carro.modelo}</div>
                )}
            </div>
        )
    }
}

