import React from "react"

export default class IMCinformarDadosC extends React.Component{
    constructor(){
        super()
        // props: peso / setpeso / altura / setaltura
    }
    render(){
        return(
            <div>
                <label>Peso =</label>
                <input type='text' value={this.props.peso} onChange={(e)=>this.props.atuDados('peso',e.target.value)}/>
                <br/>
                <label>Altura =</label>
                <input type='text' value={this.props.altura} onChange={(e)=>this.props.atuDados('altura',e.target.value)}/>            
            </div>
        )
    }
}
