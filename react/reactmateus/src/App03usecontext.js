import React, {createContext, useContext}   from 'react'

const ThemeContext = createContext()

export default function App03usecontext() {

  return (
    <div>
      <h1>useContext</h1>
      <ThemeContext.Provider value={{mode: 'dark',second:'light'}}>        
        <Button/>
        <Teste/>  
      </ThemeContext.Provider>
    </div>
  );
}

function Button() {
  const theme = useContext(ThemeContext);

  return (
    <button>{theme.second}</button>
  )
}

function Teste(){
  const theme =useContext(ThemeContext)
  return (
    <button>{theme.mode}</button>
  )
}

