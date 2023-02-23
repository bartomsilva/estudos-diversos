import React, { useState } from 'react'
import Example  from './UseState'
function App() {
  const [mostra,setMostra]=useState(true)
  

  return (
    <div>
      {mostra?<Example/>:''}      
      <button onClick={()=>setMostra(!mostra)}>on/off</button>
    </div>
  );
}

export default App;
