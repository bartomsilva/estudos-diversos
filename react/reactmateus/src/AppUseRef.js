import React, {useState, useEffect, useMemo, useCallback, useRef} from "react"

export default function AppUseRef() {

    console.log('renderizado')
     
    //const [number,setNumber ] = useState(0)
    // let number = 0 // fica zerando quando renderiza
    
    const number = useRef(0);
    const inputRef = useRef(null);
     
    function handleSetValue(){
        const nNumber = Math.round(Math.random()*(10-1)+1);
        number.current = nNumber;
    }
  
    function handlePrintValue() {
        console.log(`número ${number.current}`);
    }
         
    const handleClick=() =>{
      console.log(`Imput valor-> ${inputRef.current.value}`);
      inputRef.current.focus();
    }
    return (
      <div>
        <input ref={inputRef}/>
        <button onClick={handleSetValue}>Setar Valor</button>
        <button onClick={handlePrintValue}>Imprimir</button>
        <button onClick={handleClick}>Obter Valor</button>
        
      </div>
    );
0}

  
  
