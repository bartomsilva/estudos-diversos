import React,{useId} from "react"

function ListaNumeros(props){
    const num=props.numeros
    
    const lista_numeros=num.map(
        (n)=>{
            const $key=useId()
            //return <li key={n} >{n}</li> // duplicdade de chave
            return <li key={$key} >{n}-{$key}</li>
        }
        
    )
    return <ul className='l-numeros'>{lista_numeros}</ul>
}


export default function AppAula43(){
    
    const array_numeros=[1,2,2,3,4,5,6,7,8,9,0]
    return(
        <>
            <header>
                <h1>Aula 43 - Atributo Key</h1>
            </header>
            <main>
                {array_numeros}
                <ListaNumeros numeros={array_numeros}/>
            </main>
        </>
    );
}