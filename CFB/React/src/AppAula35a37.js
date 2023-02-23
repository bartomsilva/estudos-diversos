import React, {useState} from "react";
import './styles/AppCFB.css'

export default function AppAula35a37() {

    // casa que vai receber cor de status para vitoria
    //////////////
    // ESTILOS CSS
    const tabu={
        display:'flex',
        flexDirection:'column',   
        marginTop:5,
    }
    const cores={
        color:'#008000'
    }
    const tabuLinha={
         display:'flex',
         flexDirection:'row',
         justifyContent:'center',
    }    
    const escoreBotao={
        display:'flex',
        flexDirection:'column',  
        alignItems:'center',     
        marginTop:10
    }
    const casa={
         width:100,
         height:100,
         display:'flex',
         justifyContent:'center',
         alignItems:'center',
         flexDirection:'row',
         cursor:'pointer',
         fontSize:60,
         border:'1px solid #000'
    }
    // FIM ESTILOS CSS

    /////////
    // STATES 
    // Estado inicial
    const jogoInicial= [['','',''],['','',''],['','','']]
    
    // Registro jogadas no tabuleiro
    const [jogo,setJogo]=useState([['','',''],['','',''],['','','']])
    
    // Simbolo do jogador Atual
    const [simboloAtual,setSimboloAtual]=useState('X')
    
    // Para controle de paraga se houver empate/ganhador
    const [jogando,setJogando]=useState(true)
     
    // Nome do Ganhador (simbolo + legenda)
    const [ganhador,setGanhador]=useState('')

    // jogada Vencedora
    const [jogoVencedor,setJogoVencedor]=useState(['','',''])

    // pontos por jogador 
    const [pontosx,setPontosx]=useState(0)
    const [pontosy,setPontosy]=useState(0)   


    //////////////
    // COMPONENTES

       // STATUS DO JOGO
    const score=(s,g)=>{
        return(
        <div style={escoreBotao }>
              <h4>Jogando: {s}</h4>
              <h4>Placar</h4>
              <p>{'Jogador X: '}{pontosx}</p>
              <p>{'Jogador O: '}{pontosy}</p>
              <h3>{g}</h3>
        </div>)
    }
        // DESENHO DO TABULEIRO
    const tabuleiro=(jogo)=>{
        return(
            <div style={tabu}>    
                <div style={tabuLinha}>            
                    <div className='corOff' id='c00' style={casa} data-pos='00' onClick={(e)=>efetuaJogada(e)}>{jogo[0][0]}</div>
                    <div className='corOff' id='c01' style={casa} data-pos='01' onClick={(e)=>efetuaJogada(e)}>{jogo[0][1]}</div>
                    <div className='corOff' id='c02' style={casa} data-pos='02' onClick={(e)=>efetuaJogada(e)}>{jogo[0][2]}</div>
                </div>

                <div style={tabuLinha}>            
                    <div className='corOff' id='c10' style={casa} data-pos='10' onClick={(e)=>efetuaJogada(e)}>{jogo[1][0]}</div>
                    <div className='corOff' id='c11' style={casa} data-pos='11' onClick={(e)=>efetuaJogada(e)}>{jogo[1][1]}</div>
                    <div className='corOff' id='c12' style={casa} data-pos='12' onClick={(e)=>efetuaJogada(e)}>{jogo[1][2]}</div>
                </div>

                <div style={tabuLinha}>            
                    <div className='corOff' id='c20' style={casa} data-pos='20' onClick={(e)=>efetuaJogada(e)}>{jogo[2][0]}</div>
                    <div className='corOff' id='c21' style={casa} data-pos='21' onClick={(e)=>efetuaJogada(e)}>{jogo[2][1]}</div>
                    <div className='corOff' id='c22' style={casa} data-pos='22' onClick={(e)=>efetuaJogada(e)}>{jogo[2][2]}</div>
                </div>
                
            </div>
        )
    }
        
        // CAPTURA DA POSIÇÃO JOGADA 
    const retPos=(e)=>{
        const posicao = e.target.getAttribute("data-pos")
        const jogada=[parseInt(posicao.substring(0,1)),parseInt(posicao.substring(1,2))]
        return jogada
    }

        // TROCA DE JOGADOR
    const trocaJogador=()=>{
        simboloAtual=='X'?setSimboloAtual('O'):setSimboloAtual('X')
    }
        
        // EFETUA JOGADA
    const efetuaJogada=(e)=>{
        const row=retPos(e)[0] // linha clicada
        const col=retPos(e)[1] // colouna clicada
        
        if(!jogando) return // jogo paralizado não permite ação

        if (jogo[row][col]==''){ // testa a disponibilidade do espaço
            jogo[row][col]=simboloAtual // atribui ao objeto o simboloAtual                       
            // testa pra ver se houve vencedor
            if (verificaVitoria()){
                setGanhador('o Jogador '+simboloAtual+' veceu!')   
                setJogando(false)                             
            }else {
                trocaJogador()
            }            
        }else {
            alert('Posição não Disponível!')
        }          
    }

    // VERIFICA ESTADO DO JOGO ( GANHADOR / EMPATE / SEGUE )
    const verificaVitoria=()=>{
        let pontos=0
        let vitoria=false
        let pO=0 // posicoes ocupadas (para uso em caso de empate)
        
        // Verificação de linhas (horizontal)
        for (let l=0;l<3;l++)
        {
            pontos=0
            for (let c=0;c<3;c++)
            {
                if (jogo[l][c]==simboloAtual)
                { 
                    pontos++ 
                }
                if (jogo[l][c]!='') pO++ // somas os espaços utilizados               
            }
            if (pontos==3)
            {
                registraPotoVitoria(simboloAtual)
                statusCor(l+'0',l+'1',l+'2')
                return true // vitória em linha               
            }
        } // fim da verificação de linhas

       // verificação de colunas (vertical)
       for (let c=0;c<3;c++)
       {
            pontos=0
            for (let l=0;l<3;l++)
            {
                if (jogo[l][c]==simboloAtual)
                {
                    pontos++
                }
                if (jogo[l][c]!='') pO++ // soma os espaços utilizados                
            }
            if (pontos==3)
            {
                registraPotoVitoria(simboloAtual)
                statusCor('0'+c,'1'+c,'2'+c)
                return true // vitória em colunas               
            }
       } // fim verifação de colunas
        
        // verificação de diagonais (as duas cruzadas)       
       const v_diagonal1=(jogo[0][0]==simboloAtual && jogo[1][1]==simboloAtual && jogo[2][2]==simboloAtual)?true:false 
       const v_diagonal2=(jogo[2][0]==simboloAtual && jogo[1][1]==simboloAtual && jogo[0][2]==simboloAtual)?true:false
       
       // testa ocorrencia de empate
       // usei do novo curso de javascript >>
       if ((pO>>1) == 9 && !v_diagonal1 && !v_diagonal2){
          setJogando(false)
          setGanhador('HOUVE UM EMPATE')
          setJogoVencedor=setJogoVencedor(['','',''])
          reeniciarJogo()
          return false
       }
       if ( v_diagonal1 ){     
          registraPotoVitoria(simboloAtual)     
          statusCor('00','11','22')
          return true
       } else if (v_diagonal2){
          registraPotoVitoria(simboloAtual)
          statusCor('20','11','02')
          return true
       }  
       return false // 

    } // fim verificação de vitória


     // COR NO STATUS
     const statusCor=(c1,c2,c3)=>{
        
        const casa1=document.querySelector('#c'+c1)  
        const casa2=document.querySelector('#c'+c2) 
        const casa3=document.querySelector('#c'+c3) 
        
        if (c1=='') return

        if ( casa1.className!='cores'){
            casa1.className = casa1.className.replace("corOff", "cores");
            casa2.className = casa2.className.replace("corOff", "cores");
            casa3.className = casa3.className.replace("corOff", "cores");    
            jogoVencedor[0]=c1
            jogoVencedor[1]=c2
            jogoVencedor[2]=c3          
        } else {
            casa1.className = casa1.className.replace("cores", "corOff");
            casa2.className = casa2.className.replace("cores", "corOff");
            casa3.className = casa3.className.replace("cores", "corOff");    
         }    
    }

    // regista o ponto 
    const registraPotoVitoria=()=>{
        const pontosX=pontosx+1
        const pontosY=pontosy+1 
        simboloAtual=='X'?setPontosx(pontosX):setPontosy(pontosY)
    }

    // REINICIO DO JOGO
    const reeniciarJogo=()=>{
        const reset=()=>{
            setJogando(true)
            setJogo(jogoInicial)
            setGanhador('')
            trocaJogador()
            statusCor(jogoVencedor[0],jogoVencedor[1],jogoVencedor[2])
        }
        if (!jogando){ // habilita o botão em caso de Empate ou Vitória
            return(
                <div style={escoreBotao}>              
                    <button onClick={()=>reset()}>Jogar Novamente</button>
                </div> 
            )
        }
    }

    // RETORNO PARA O DOM 
    return(
        <>  
            {score(simboloAtual,ganhador)}
            {tabuleiro(jogo)}
            {reeniciarJogo()}
        </>
    )
}