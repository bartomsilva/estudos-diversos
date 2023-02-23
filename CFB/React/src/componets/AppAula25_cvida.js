import React from 'react'

export default class AppAula25_cvida extends React.Component{
    constructor(props){
        super(props)
        this.state={
            'vida':''
        }
        this.salvaVidas=this.salvaVida.bind(this)
    }

    monstrarOcultar=()=>{
        
    }
    salvaVida=()=>{
        this.setState({vida:'ssss'})
    }

    // na montagem
    componentDidMount(){
        console.log('montado o componente')
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
            <h1>Ciclo de Vida do Componentes - Aula 25</h1>
            <button onClick={this.salvaVidas}>teste</button>
            </>
        )
    }


}