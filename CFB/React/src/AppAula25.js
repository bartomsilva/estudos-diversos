import React, {useState} from 'react'
import CicloVida from './componets/AppAula25_cvida'

export default function AppAula25(){
    const [vivo,SetVida]=useState(true)

    return(
        <>
            {vivo?<CicloVida/>:''}
            <br/>
            <button onClick={()=>SetVida(!vivo)}>{vivo?'Ocultar':'Mostrar'}</button>
        </>
    )
    
}