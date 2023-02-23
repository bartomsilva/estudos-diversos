import React from 'react'
import IMCinformarDadosC from './componets/IMCinformarDadosC'
import IMCtabelaC from './componets/IMCtabelaC'
import IMCcalcularC from './componets/IMCcalcularC'
import IMCexibirC from './componets/IMCexibirC'

export default class AppAula32 extends React.Component{
    constructor(){
        super()
        this.state={ 
            peso:0,
            altura:0,
            imc:0,                        
        }                    
    }

    atuDados(e_state,v_state){
        
        if (e_state=='imc'){
            this.setState( (state)=>({imc:v_state}) )       
        }else if (e_state=='peso'){              
            this.setState( (state)=>({peso:v_state}) )
        }else if (e_state=='altura'){      
            this.setState( (state)=>({altura:v_state}) )
        }else {
            alert('parametro inválido') // debug
        }
     }

    render(){    
        
        return(
            <>
                <p>Deus é fiel</p>
                <IMCexibirC imc={this.state.imc}/>
                <IMCinformarDadosC peso={this.peso} altura={this.altura}
                                    atuDados={this.atuDados.bind(this)}/>
                <IMCcalcularC atuDados={this.atuDados.bind(this)} peso={this.state.peso} altura={this.state.altura}/>
                <IMCtabelaC/>  

                
            </>
        )
    }
}