
import React from 'react'

export default function Gohome() {

    const changeHome=()=>{
        const lPagina='http://localhost:3000?0'
        window.open(lPagina,'_self')             
    }

    return (
        <>             
            <button onClick={()=>changeHome()}>Home</button>
        </>
    );
  }  

