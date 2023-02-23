import React from "react"
import Header from './componets/HeaderProps'
import Foto from './image/f4.jpg'

export default function AppAula06(){

    return(
        <section>
            <Header canal='CFB Cursos' mensagem='Curso de React' foto={Foto}/>           
        </section>            
    )
}