import { useEffect }  from 'react'
import { db } from './firebase'
// import { useEffect, useState } from 'react';
import { getAuth } from "firebase/auth";
import  Router from './components/router/Router'
// import { useContext } from "react"
// import { EcommerceContext } from './components/context/Context'

function App() {

  // const auth = getAuth()

  // useEffect(()=>{
  //   return auth.signOut()
  // },[])



  return (
    <>
      <Router/>     
      
     </>
  );
}

export default App;
