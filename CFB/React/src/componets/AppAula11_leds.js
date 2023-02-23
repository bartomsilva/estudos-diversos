
import ledVermelho from './image/led_vermelho.png'
import ledVerde from './image/led_verde.png'

export default function AppAula11_leds(props){

    return(
        <>
           <img style={{width:'50px'}} onClick={()=>props.ligarDesligar()} src={props.ligado?ledVerde:ledVermelho}/>
           <br/>
           <input type="button" onClick={()=>props.ligarDesligar()} value={!props.ligado?'Ligar':'Desligar'}/>
           {/* <span>button=</span><button onClick={()=>props.ligarDesligar()} >{!props.ligado?'Ligar':'Desligar'}</button>         */}
        </>

    )

}