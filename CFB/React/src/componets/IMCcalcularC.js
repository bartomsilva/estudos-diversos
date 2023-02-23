import React from "react"

export default class IMCcalcularC extends React.Component{
    constructor(){
        super()   
        this.imc = 100   
     }
    
    calculo(){
        const imc=(this.props.peso/
              (this.props.altura*this.props.altura)).toFixed(2)
        this.props.atuDados('imc',imc)
    }    

    render(){        
        return(   
            <button onClick={()=>this.calculo()}>Calcular IMC</button>        
        )
    }
}
