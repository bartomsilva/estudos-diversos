
import React, {useEffect, useState} from "react"
export default function AppAula19(){

    const [contagem,setContagem]=useState(0)
    
    console.log('pagina carregada')        
    document.title="Contagem: "+contagem

    /* useEffect(  // comentado o código colocado acima faz o mesmo efeito aqui
        ()=>{
            console.log('pagina carregada')        
            document.title="Contagem: "+contagem
        }
    )*/
   
    return(        
        <>
            <p>Contagem: {contagem}</p>
            <button onClick={()=>setContagem(contagem+1)} >Incremento</button>
        </>
    )
}