
import {useState} from 'react'

export default function AppAula12(){

    // orimeira parte da aula cumprimento
    const [log,setLog]=useState(false)
    const msgLogin=()=>{return 'usuário logado'}
    const msgLogoff=()=>{return 'favor logar'}

    const cumprimento=()=>{
        const hora=new Date().getHours()
        if(hora < 13){
            return <p>Bom Dia</p>
        }else if(hora < 18){
            return <p>Boa Tarde</p>            
        }else{
            return <p>Boa Noite</p>  
        }       
    }
    
    /// segunda parte da aula muda cor
    const [cor,setCor]=useState(0) // 0 a 3
    //array de cores
    const cores=[{color:"#000"},{color:"#f00"},{color:"#0f0"},{color:"#00f"}]

    const retCor=(c)=>{
        return cores[cor]
    }

    const mudaCor=()=>{
        // operador ternário
        setCor(cor==3?0:cor+1)        
    }

    return(
        <>
            <h1 style={retCor(cor)}>CFB Cursos</h1>
            {cumprimento()}
            <p>{log?msgLogin():msgLogoff()}</p>
            <button onClick={()=>setLog(!log)}>{log?'logoff':'login'}</button>
            
            <br/><br/>
            
            <button onClick={()=>mudaCor()}>Muda Cor</button>

        </>
    )
}