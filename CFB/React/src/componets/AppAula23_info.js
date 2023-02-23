
import React from 'react'

export default class AppAula23_info extends  React.Component{
    constructor(props){
        super(props)
        this.modelo='HRV' // variável
        this.state={      // state
            ligado:false,
            velAtual: 0            
        }       
    }
    
    // metodo - seguro devido a delay ????
    ligarDesligar(){

        // this.setState(
        //      (state)=>({ligado:!state.ligado})
        //  )

        this.setState(
            function(state){
                return {ligado:!state.ligado}
            }
        )
    }    

    
    render(){

        return(
            <div>
                <h1>Meu Carro - Aula 23</h1>
                <p>Modelo: {this.modelo}</p>
                <p>Status: {this.state.ligado?'ligado':'desligado'}</p>
                <p>Velocidade Atual: {this.state.velAtual}</p>
                <button onClick={()=>this.ligarDesligar()}>{this.state.ligado?'Desligar Carro':'Ligar Carro'}</button>                       
            </div>
        )
    }

}

