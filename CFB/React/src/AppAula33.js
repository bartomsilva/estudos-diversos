
import React, {useState} from 'react'

// calculadora baseada na Aula do professor Bruno
// fiz algumas funcionalidades de forma diferente
// no intuido de praticar o que ele tem ensinado.

// calculadora matemática simples
export default function AppAula33() {
    
    // STATES (valorTela, resultado, finalizado)
    // valor exibido na tela
    const [valorTela,setValorTela]=useState('')
    // resultado da operação
    const [resultado,setResultado]=useState(0)
    // controle de exibição do resultado apos pressionar =
    const [finalizado,setFinalizado]=useState(false)
             
    // COMPONENTES DA CALCULADORA
    // Desenho da tela/visor 
    const Tela=(valor,resultado)=>{
        return (
            <div style={cssTela}>
                <span style={cssTelaOperacao}>{valorTela}</span>
                <span style={cssTelaResultado}>{resultado}</span>
            </div>
        )
    }

    // Cria os elementos da calculadora (botões)
    const botao=(label,onClick)=> {
        return(
            <button style={cssBotao} onClick={onClick}>{label}</button>
        )
    }
    
    //FUNCÕES
    //verifica se foi digitado um operador matemático ou ponto
    //utilizado para prevenir repetição sequencial dos mesmos
    const checkOperador=(digito)=>{
        const operadores='+-*/.'
        return (operadores.includes(digito))
    }

    //Escrever o digito na tela
    const AddDigitoTela=(digito)=>{
        // captura o que está escrito na tela (visor) 
        let v_valorTela=valorTela
        // tamanho da string na tela
        const tamanho=v_valorTela.length
        // ultimo dídigo inserido
        const ultimoDigito=v_valorTela.substring(tamanho-1)
        // verifica se o digito atual(clicado) é um operador 
        if (checkOperador(digito)) {
            // verifica se o ultimo digito da tela também é um operador/ponto
            if (checkOperador(ultimoDigito)) {
            //sendo ambos operadores/ponto faz a remoção
            v_valorTela=v_valorTela.substring(0,tamanho-1)
            }     
        }  
        // inseri o o novo dígito na tela (visor)
        v_valorTela=v_valorTela+digito
        //Atualiza o valor da tela
        setValorTela(v_valorTela)    
        //verifica se ocorreu a finalização ( = )
        if (finalizado){
            setFinalizado(false)
            setResultado(0)
        }

    }    
    //AC - limpar memória (reset)
    const limparmemoria=()=>{
        setValorTela('')
        setResultado(0)
    }
    //Apagar o último digito da tela
    const apagarDigitoTela=()=>{
        let v_valorTela=valorTela
        v_valorTela=v_valorTela.substring(0,v_valorTela.length-1)
        setValorTela(v_valorTela)
        if (finalizado){
            setFinalizado(false)
            setResultado(0)
        }
    }       
    // Executa a operação ( = )
    const finalizaOperacao=(v_auto)=>{
        try{
            const v_resultado=eval(valorTela)
            if (v_resultado<=999999999.99){
                setResultado(v_resultado)
            }else {
                setResultado('Val.Excedido')
            }
            setFinalizado(true)
        }catch{
            setResultado('erro')           
        }
    }
    
    // Styles CSS 
    const cssTela={
        display:'flex',
        paddingLeft:20,
        paddingRight:20,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#444',
        flexDirection:'column',
        width:259
    }    
    const cssTelaOperacao={
        fontSize:20,
        color:'#fff',
        height:20,        
    }
    const cssTelaResultado={
        fontSize:50,
        color:'#fff',       
    }
    const cssBotao={
        fontSize:30,
        height:75,
        width:75,
        padding:20,
        backgroundColor:'#000',
        color:'#fff',
        borderColor:'#000',
        textAlign:'center',
        outline:'none',
    }    
    const cssContainer={
        margin: '0 auto',
        display:'flex',
        justifyContent:'flex-start',
        alignItems:'center',
        flexDirection:'column',
        width:300,
        border:'1px solid #000',
    }
    const cssBotoes={
        flexDirection:'row',
        flexWrap:'warp',
        width:300
    }

    return(
        <>
            <div style={cssContainer}> 
                <h3>Calculadora Matemática Simples</h3>     
                {Tela(valorTela,resultado)}
                <div style={cssBotoes}>
                    {botao('AC',limparmemoria)}
                    {botao('(',()=>AddDigitoTela('('))}
                    {botao(')',()=>AddDigitoTela(')'))}
                    {botao('/',()=>AddDigitoTela('/'))}
                    {botao('7',()=>AddDigitoTela('7'))}
                    {botao('8',()=>AddDigitoTela('8'))}
                    {botao('9',()=>AddDigitoTela('9'))}
                    {botao('*',()=>AddDigitoTela('*'))}
                    {botao('4',()=>AddDigitoTela('4'))}
                    {botao('5',()=>AddDigitoTela('5'))}
                    {botao('6',()=>AddDigitoTela('6'))}
                    {botao('-',()=>AddDigitoTela('-'))}
                    {botao('1',()=>AddDigitoTela('1'))}
                    {botao('2',()=>AddDigitoTela('2'))}
                    {botao('3',()=>AddDigitoTela('3'))}
                    {botao('+',()=>AddDigitoTela('+'))}
                    {botao('.',()=>AddDigitoTela('.'))}
                    {botao('0',()=>AddDigitoTela('0'))}
                    {botao('<-',apagarDigitoTela)}
                    {botao('=',finalizaOperacao)}
                </div>
                <p>Valor Máximo: 999999999.999</p>  
            </div>
        </>
    )
}