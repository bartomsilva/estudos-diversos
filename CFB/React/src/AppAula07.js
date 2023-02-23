import React from "react"
import Header from './componets/HeaderPropsFunc'

export default function AppAula07(){
    const canal=()=>{
        return 'CFB-Cursos'
    }
    const mensagem=()=>{
        return 'curso de React - Aula 07'
    }
    const enviandoResultadoPronto=()=>{
         return(10*100)
    }

    return(
        <section>
            <Header canal={canal} mensagem={mensagem} nota={enviandoResultadoPronto()}/>           
        </section>            
    )
}