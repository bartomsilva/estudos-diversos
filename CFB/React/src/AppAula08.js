import React from "react"
import estilos from './styles/aula08.css'

export default function AppAula08(){
    const canal=()=>{
        return 'CFB-Cursos'
    }
    const mensagem=()=>{
        return 'Curso de React - Aula 08'
    }
    const estilos={
        color:'#00f',
        fontSize:'3em',       
    }

    // CSS PODE SER USADO
    // inline/incorporado: exemplo: font-size fica fontSize e usa , (virgula para separar) 
    // inline utiliza style={{color:'#000'}}  são duas chaves
    // incorporado utiliza style={constante}  apenas uma chave
    // no CSS externo: font-size e usa ; (padrão css normal)
    // no externo no react importar assim: ( import estilos from './styles/aula08.css')
    // direto no html usa assim:   <link rel="stylesheet" href="arquivo.css">

    return(
        <>
            <section className="caixa">
                <h1 style={{color:'#f00',fontSize:'5em'}}>{canal()} </h1>   
                <h2 style={estilos}>{mensagem()}</h2>   
                <h3 className="texto">fessor Bruno é show!!!</h3>
                <a href='https://www.youtube.com/cfbcursos' target='_blank'>CFB Cursos</a>
            </section>
        </>            
    )
}