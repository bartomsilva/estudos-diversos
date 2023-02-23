import React from "react"
import Logo from '../image/f4.jpg' // src
import Logo2 from './image/f4.jpg' // componentes

export default function Header(){
    const canal='CFB Cursos'
    return (
        <header>
            <p>Nome do Canal: {canal}</p>
            <p>{'Nome do Canal: '+canal}</p>
            <img src={Logo}/>
            <img src={Logo2}/>
            <br/>
            <img src="/img/eu.png"/>  
        </header>
    )
}