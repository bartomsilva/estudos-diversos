import React, {useReducer} from "react"

//função ( sempre precisa retornar alguma coisa) 
// o nome da função pode ser qualque nome
// o mesmo que utilizar dentro do userReducer(nome da função, states)
function reducer(state, action) {
    switch(action.acao){         
        case 'somar':        
        return {
            counter: state.counter + 1,
            clicks: state.clicks + 1,
        }
        case 'subtrair':
            return {
                counter: state.counter - 1,
                clicks: state.clicks + 1,        }         
        default:
            return state      
    }
}

// valores states
// objeto literal 
const initialValue = {
    counter:0,
    clicks:0,    
}

///////////////////////
export default function AppUseReducer() {

       // state  //chama reducer          função  , valores/startes
    const [state, dispatch] = useReducer(reducer, initialValue)
             //   any nome               any nome

    const somar=()=>{
        dispatch( {acao: 'somar' , nome: 'param em um único objeto'} )
                 // 1 agrumento / objeto 
    }
   
    const diminuir=()=>{
        dispatch( {acao: 'subtrair', nome: 'bart'})
                 // 1 agrumento / objeto 
    }
  
    return (
      <div>
        <h1>{state.counter}</h1>
        <h4>Cliques: {state.clicks}</h4>
        <button onClick={somar}>+</button>
        <button onClick={diminuir}>-</button>

        </div>

    );
  }
  
