import React from "react"
import Logo from './image/f4.jpg'

export default function AppAula04(){
    const hello=()=>{
        return 'Hello world!'
    }
    function alo(){
        return 'Alô Mundo!'
    }
    const canal='CFB Cursos'

    return(
        <section>
            <header>
                <p>Nome do Canal: {canal}</p>
                <p>{'Nome do Canal: '+canal}</p>
            </header>
            <main>
                <p>{hello()}</p>
                <p>{alo()}</p>
                <img src={Logo}/>
                <br/>
                <img src='/img/eu.png'/>  
                {/* apontamento direto pasta public */}
            </main>
        </section>
            
    )
}