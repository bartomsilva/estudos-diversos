import React from "react"

export default class IMCexibirC extends React.Component {
    constructor(){
        super()        
    }
    render(){
        return(
            <div> 
                <h3>IMC: {this.props.imc} </h3>            
            </div> 
        )
    }
}
