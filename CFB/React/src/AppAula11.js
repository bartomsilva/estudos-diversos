
import {useState} from 'react'
import Leds from './componets/AppAula11_leds'

export default function AppAula11(){

    const [ligado,setLigado]=useState(false)

    const ligarDesligar=()=>{
        setLigado(!ligado)
    }

    const cancelar=(e)=>{
        return e.preventDefault()
        //return false // não funciona no react
    }

    return(

        <>
           <Leds ligado={ligado} ligarDesligar={ligarDesligar}/>  
           <br/>
           <a href='http://youtube.com/cfbcursos' target='_blank' onClick={(e)=>cancelar(e)}>
            CFB Cursos - (preventDefault)</a>      

        </>

    )

}