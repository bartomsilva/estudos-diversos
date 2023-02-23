import React, {useState, useEffect} from "react"

export default function AppUseState() {
    const [counter,setCounter ] = useState(0)
    const [name,setName] = useState('')
 
    // a itilização do prevState previne 
    // problems de time 
    const handlePlus=()=>{
      setTimeout(()=>{
      setCounter(prevState=> prevState+1)
    },0)
    }
   
    const handleMinus=()=>{
      setCounter((ps)=> ps-1)
    }
  
    return (
      <div>
        <p>useState</p>
        <h1>{counter}</h1>
        <button onClick={handlePlus}>+</button>
        <button onClick={handleMinus}>-</button>
        <br/>
        <span>{name}</span>
        <br/>
        <input onChange={e=>setName(e.target.value)}/>
      </div>
    );
  }
  
