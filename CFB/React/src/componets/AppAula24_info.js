
import React from 'react'

export default class AppAula24_info extends  React.Component{
    constructor(props){
        super(props)
        this.modelo='HRV' // variável
        this.state={      // state
            ligado:false,
            velAtual: 0            
        }      

        this.ld = this.ligarDesligar.bind(this)        
    }
    
    // metodo - seguro devido a delay ????
    ligarDesligar(){

        this.setState({ligado:!this.state.ligado})

        // this.setState(
        //      (state)=>({ligado:!state.ligado})
        //  )

        //this.setState(
        //    function(state){
        //        return {ligado:!state.ligado}
        //     }
        //)
    }    

    render(){

        return(
            <div>
                <h1>Meu Carro - Aula 24</h1>
                <p>Modelo: {this.modelo}</p>
                <p>Status: {this.state.ligado?'ligado':'desligado'}</p>
                <p>Velocidade Atual: {this.state.velAtual}</p>
                <button onClick={this.ld}>{this.state.ligado?'Desligar Carro':'Ligar Carro'}</button>                       
            </div>
        )
    }

}

