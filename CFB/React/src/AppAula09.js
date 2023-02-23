import React,{useState} from "react"

export default function AppAula09(){
    const canal=()=>{
        return 'CFB-Cursos'
    }
    const mensagem=()=>{
        return 'Curso de React - Aula 09'
    }
    const estilos={
        textAlign: 'center'        
    }

    const [hora,setHora]=useState(new Date().toLocaleTimeString())
    //recurso da aula 10     

    // atualizando o state de 1 em 1 segundo
    setInterval(() => {
        setHora(new Date().toLocaleTimeString())  
    }, 1000);                  

    return(
        <>
            <section style={estilos}> 
                <p>{hora}</p>                
                <h1>{canal()}</h1>   
                <h2>{mensagem()}</h2>   
                <h3>fessor Bruno é show!!!</h3>
                <h4>CFB Cursos é o melhor bora tacar LIKE ai!</h4>
                <a href='https://www.youtube.com/cfbcursos' target='_blank'>CFB Cursos</a>
            </section>
        </>            
    )
}