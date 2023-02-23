import React, {useState, useEffect} from "react"

export default function AppUseEffect() {
    const [counter,setCounter ] = useState(0)
    const [name,setName] = useState('')
  
    useEffect(()=>{
        //IIFE -> Immediately Invokde Function Expression
        (async ()=>{ // executando assincrona 
            //await api.get
            console.log('primeiro render')
        })();
    },[]); 

    useEffect(()=>{
        console.log('useEffect atualizou counter '+counter)        
    },[counter]); 

    useEffect(()=>{
        console.log('useEffect atualizou nome '+name)        
    },[name]); 
   
    useEffect(()=>{
        return ()=>{
            console.log('vai desmontar.....')        
        }
    },[]);     

    const handlePlus=()=>{
        setCounter((prevState)=> prevState+1)
    }
   
    const handleMinus=()=>{
      setCounter((prevState)=> prevState-1)
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
  
