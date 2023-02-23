import React from 'react'

export default class AppAula26_base_classe extends React.Component{
    constructor(props){
        super(props)
        this.state={
            base:true,
            nome:this.props.nome
        }

        this.salvaBaseB=this.salvaBase.bind(this)
    }

    monstrarOcultar=()=>{
        
    }
    salvaBase=()=>{
        this.setState(
            (state)=>({base:!this.state.base})
        )
    }

    // na montagem
    componentDidMount(){
        console.log('componente montado')
    }

    // na atualização
    componentDidUpdate(){
        console.log('componente atualizado')
    }

    // na remoção
    componentWillUnmount(){
        console.log('componente removido')
    }

    render(){
        return(
            <>
            <h1>CFB Cursos</h1>
            <h2>Componentes de Classe (Modelo)</h2>
            <p>vem como props (texto) = {this.props.texto}</p>
            <p>vem como props (nome) = {this.props.nome}</p>
            <p>State alimentado com props: {this.state.nome}</p>
            <p>valor do state (base) = {this.state.base?'on':'off'}</p>
            <button onClick={this.salvaBaseB}>com bind</button>
            <button onClick={()=>this.salvaBase()}>sem bind</button>
            </>
        )
    }
}