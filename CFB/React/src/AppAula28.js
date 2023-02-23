import React, {useState, useEffect} from 'react'
import Pagina1 from './componets/Pagina1'
import Pagina2 from './componets/Pagina2'


export default function AppAula28() {

  const [Pagina,setPagina]=useState(0)

  useEffect(
   ()=>{
      const url=window.location.href
      const resultado=url.split('?')
      setPagina(resultado[1]) 
   }
  )
  
  const linksPaginas=(p)=> {

    // esta parte código eu que fiz sozinho
    const lPagina='http://localhost:3000?'+p
    window.open(lPagina,'_self') 
    
    // o código original é esse abaixo
    /*
    if (p==1){
      window.open("http://localhost:3000?1",'_self') 
    } else if (p==2) {
      window.open("http://localhost:3000?2",'_self') 
    }
    */

  }

  const retornarPagina=()=>{
     if (Pagina==='1'){
      return <Pagina1/> 
    } else if (Pagina==2){
      return <Pagina2/>
    } else {
      return <div>
               <button onClick={()=>linksPaginas(1)}>Pagina 1</button>
               <button onClick={()=>linksPaginas(2)}>Pagina 2</button>
             </div>
    }
  }

  return (
    <>
      {retornarPagina()}
    </>
  );
}

