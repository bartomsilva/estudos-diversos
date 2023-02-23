import React,{useState} from "react"

var num3,num4
num3=num4=0
var num2=0

const fontF={
    fontFamily: "source-code-pro, Menlo, Monaco, Consolas, 'Courier New'"           
}

export default function AppAula10(){

    const [num,setNum]=useState(0)
    const [teste,setTeste]=useState('nada')

    //cuidado nas variáveis aqui!
    // ao atualiar um state o react vai fazer uma varredura 
    // desde o início do codigo ( export para baixo)
        
    const atulizarValores=()=>{ 
        num2++
        num3=num2*2
        num4=num3*2
        // desnecessário com a atualização de estate no mesmo bloco
        //document.getElementById("vnum2").innerHTML = `${num2}`;
        //document.getElementById("vnum3").innerHTML = `${num3}`;
        //document.getElementById("vnum4").innerHTML = `${num4}`;
        setNum(num+1)            
    }   
    
    return(
        <>
            <header>
                <h1>CFB Cursos é o melhor, bora tacar LIKE ai!</h1>
            </header>
            <section>
                <div>
                    <p style={{color:'#448844'}}>Valor do State num = num+1:{' '+num}</p> 
                </div>
                <p style={fontF}>Valor de num2 = num2+1.....:<span id='vnum2'>{num2}</span></p>
                <p style={fontF}>Valor de num3 = num2*2.....:<span id='vnum3'>{num3}</span></p>
                <p style={fontF}>Valor de num4 = num3*2.....:<span id='vnum4'>{num4}</span></p>
                <input type="button" onClick={()=>atulizarValores()} value='Incrementar'/>
            </section>            
        </>            
    )
}