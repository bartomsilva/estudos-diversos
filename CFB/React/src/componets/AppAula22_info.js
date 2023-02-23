
import React from 'react'

export default class AppAula22_info extends  React.Component{
    constructor(props){
        super(props)
        this.modelo='HRV' // variável
        this.state={      // state
            ligado:false,
            velAtual: 0            
        }       
    }
    
    // metodo
    ligarDesligar(){
        this.setState({ligado:!this.state.ligado})
    }    
    render(){

        return(
            <div>
                <h1>Meu Carro</h1>
                <p>Modelo: {this.modelo}</p>
                <p>Status: {this.state.ligado?'ligado':'desligado'}</p>
                <p>Velocidade Atual: {this.state.velAtual}</p>
                <button onClick={()=>this.ligarDesligar()}>{this.state.ligado?'Desligar Carro':'Ligar Carro'}</button>                       
            </div>
        )
    }

}

