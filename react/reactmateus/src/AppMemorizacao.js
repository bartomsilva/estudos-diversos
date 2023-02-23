import React, {useState, useEffect, useMemo, useCallback} from "react"

export default function AppMemorizacao() {
    const [state,setState] = useState(0)
 
    const [contador,setContador ] = useState(0)
    const [name,setName] = useState('')
 
    const somar=()=>{
        setContador((prevState)=> prevState+1)
    }
  
    const diminuir=()=>{
      setContador((prevState)=> prevState-1)
    }
    
    const total = useMemo(() => {
      return contador *1 * 2 * Math.random()
    },[contador])

    //useCallback em conjunto com Memo

    const handClick =useCallback(() => {
        console.log('State updated!!!')
        setState(Math.random())
    },[])   
      
    return (
      <div>
        <h1>{total}</h1>
        <h1>{contador}</h1>
        <button onClick={somar}>+</button>
        <button onClick={diminuir}>-</button>
        <br/>
        <span>{name}</span>
        <br/>
        <input onChange={e=>setName(e.target.value)}/>
        <Button onClick={handClick}/>
        
      </div>
    );
  }

  //function Button(props) {   //renderiza a caca clique
  const Button = React.memo((props)=> {
    console.log('Button renderizado.')
    return (
        <button onClick={props.onClick}>Clique</button>
    )
  })
  
