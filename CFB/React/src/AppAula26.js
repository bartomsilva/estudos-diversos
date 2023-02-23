import React, {useState} from 'react'
import ClasseBase from './componets/AppAula26_base_classe'

export default function AppAula26(){
    const [vivo,SetVida]=useState(true)

    return(
        <>
            {vivo?<ClasseBase texto='fessor bruno é muito top' nome='Bart'/>:''}
            <br/>
            <button onClick={()=>SetVida(!vivo)}>{vivo?'Ocultar':'Mostrar'}</button>
        </>
    )    
}