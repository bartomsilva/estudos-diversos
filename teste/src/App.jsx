import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <p>teste</p>
        <p>mais</p>
      </header>

      <main>
        <div className='box'>BOX</div>
        <div className='box'>BOX</div>
        <div className='box'>BOX</div>
      </main>

      <footer>
        <p>footer</p>
      </footer>
    </>
  )
}

export default App
