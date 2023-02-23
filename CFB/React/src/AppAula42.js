import React from "react"

import Pg1 from './componets/Pagina1'
import Pg2 from './componets/Pagina2'
import Pg3 from './componets/Pagina3'
import {BrowserRouter, Route, Link, Routes as Switch} from 'react-router-dom'

//Old Syntax  VELHA SINTAXE
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// <Switch>
//     <Route path="/home" component={Home} />
// </Switch>

// New Syntax:  NOVA SINTAX
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// <Routes>
//     <Route path="/home" element={<Home/>} />
// </Routes>

export default function AppAula42(){

    return(
        <>
            <header>   
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='pag1'>Página 1</Link>
                    <Link to='pag2'>Página 2</Link>
                    <Link to='pag3'>Página 3</Link>
                </nav>       
            </header>
            <h1>Deus é Fiel</h1> 
            <main>
                <Switch>
                    <Route path='/pag1' element={<Pg1/>}/>
                    <Route path='/pag2' element={<Pg2/>}/>
                    <Route path='/pag3' element={<Pg3/>}/>
                </Switch>

            </main>            
        </>
    )

}